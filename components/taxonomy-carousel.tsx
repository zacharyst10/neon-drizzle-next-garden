import Image from 'next/image'
import * as React from 'react'

import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'

interface carouselItem {
  title: string
  image: string
}

interface carouselProps {
  carouselItems: carouselItem[]
}
export default function TaxonomyCarousel({ carouselItems }: carouselProps) {
  return (
    <Carousel
      opts={{
        align: 'start'
      }}
      className='pt-10'
    >
      <CarouselContent>
        {carouselItems.map((item, index) => (
          <CarouselItem key={index} className='md:basis-1/2 lg:basis-1/5'>
            <Card className='h-48 w-48 rounded-full p-0'>
              <CardContent className='rounded-full p-0'>
                <Image
                  src={item.image}
                  alt={item.title}
                  className='h-48 w-48 rounded-full object-cover'
                  width={150}
                  height={100}
                  quality={100}
                />
              </CardContent>
            </Card>
            <span className='text-3xl font-semibold'>{item.title}</span>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
