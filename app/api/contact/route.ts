import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  contact: z.string().min(5, 'Please provide a valid phone number or email'),
  service: z.string().min(2, 'Please select a service type'),
  urgency: z.string().optional(),
  message: z.string().min(10, 'Please provide some details about your request'),
  preferredContact: z.enum(['phone', 'email', 'either'], {
    required_error: 'Please select your preferred contact method',
  }),
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const validatedData = contactSchema.parse(body)

    const contact = await prisma.contact.create({
      data: {
        name: validatedData.name,
        email: validatedData.contact.includes('@') ? validatedData.contact : '',
        phone: !validatedData.contact.includes('@') ? validatedData.contact : '',
        subject: validatedData.service,
        message: `Urgency: ${validatedData.urgency || 'Not specified'}\nPreferred Contact: ${validatedData.preferredContact}\n\n${validatedData.message}`,
        status: validatedData.urgency === 'urgent' ? 'URGENT' : 'PENDING',
      },
    })

    // TODO: Send different auto-responses based on urgency
    // if (validatedData.urgency === 'urgent') {
    //   await sendUrgentNotification(contact)
    // } else {
    //   await sendStandardAutoResponse(contact)
    // }

    return NextResponse.json(
      { 
        message: 'Request received successfully',
        contact,
        estimatedResponse: validatedData.urgency === 'urgent' ? '2 hours' : '24 hours',
      },
      { status: 201 }
    )
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { message: 'Invalid form data', errors: error.errors },
        { status: 400 }
      )
    }

    console.error('Contact form error:', error)
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const status = searchParams.get('status')
    const contact = searchParams.get('contact')

    const where = {
      ...(status && { status }),
      ...(contact && {
        OR: [
          { email: contact },
          { phone: contact },
        ],
      }),
    }

    const contacts = await prisma.contact.findMany({
      where,
      orderBy: { createdAt: 'desc' },
    })

    return NextResponse.json(contacts)
  } catch (error) {
    console.error('Error fetching contacts:', error)
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
} 