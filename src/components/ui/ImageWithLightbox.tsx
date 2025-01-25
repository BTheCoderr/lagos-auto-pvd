'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Dialog, DialogContent } from '@/components/ui/Dialog'
import { cn } from '@/lib/utils'

interface ImageWithLightboxProps {
  src: string
  alt: string
  className?: string
  aspectRatio?: 'square' | 'video' | 'wide'
  width?: number
  height?: number
  priority?: boolean
}

export function ImageWithLightbox({
  src,
  alt,
  className,
  aspectRatio = 'square',
  width,
  height,
  priority = false,
}: ImageWithLightboxProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div
        className={cn(
          'group relative cursor-pointer overflow-hidden rounded-lg bg-gray-100',
          {
            'aspect-square': aspectRatio === 'square',
            'aspect-video': aspectRatio === 'video',
            'aspect-[21/9]': aspectRatio === 'wide',
          },
          className
        )}
        onClick={() => setIsOpen(true)}
      >
        <Image
          src={src}
          alt={alt}
          fill
          width={width}
          height={height}
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          priority={priority}
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity group-hover:opacity-100" />
      </div>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-screen-lg bg-black/90 border-none p-0">
          <div className="relative h-[80vh]">
            <Image
              src={src}
              alt={alt}
              fill
              className="object-contain"
              priority
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
} 