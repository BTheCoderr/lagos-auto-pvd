'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/Dialog'
import { Input } from '@/components/ui/Input'
import { Label } from '@/components/ui/Label'

interface PriceDropAlertProps {
  vehicleId: string
  currentPrice: number
  onSetAlert: (targetPrice: number) => Promise<void>
}

export default function PriceDropAlert({ vehicleId, currentPrice, onSetAlert }: PriceDropAlertProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [targetPrice, setTargetPrice] = useState(currentPrice)
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (targetPrice >= currentPrice) {
      alert('Target price must be lower than current price')
      return
    }

    setIsSubmitting(true)
    try {
      await onSetAlert(targetPrice)
      setIsOpen(false)
    } catch (error) {
      console.error('Error setting price alert:', error)
      alert('Failed to set price alert. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-full">Set Price Alert</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Set Price Drop Alert</DialogTitle>
          <DialogDescription>
            We'll notify you when this vehicle's price drops below your target price.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="current-price">Current Price</Label>
            <Input
              id="current-price"
              type="text"
              value={`$${currentPrice.toLocaleString()}`}
              disabled
            />
          </div>
          <div>
            <Label htmlFor="target-price">Target Price</Label>
            <Input
              id="target-price"
              type="number"
              value={targetPrice}
              onChange={(e) => setTargetPrice(Number(e.target.value))}
              max={currentPrice - 1}
              required
            />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? 'Setting Alert...' : 'Set Alert'}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
} 