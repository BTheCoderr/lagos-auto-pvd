import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  return NextResponse.json({ message: 'Booking functionality coming soon!' }, { status: 200 })
}

export async function GET() {
  return NextResponse.json({ message: 'Booking functionality coming soon!' }, { status: 200 })
} 