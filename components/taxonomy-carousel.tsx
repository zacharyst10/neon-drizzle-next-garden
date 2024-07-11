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

const carouselItems = [
  {
    title: 'Nightshades',
    image:
      'https://images.unsplash.com/photo-1562447575-88db38dcc649?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    title: 'Brassicas',
    image:
      'https://images.unsplash.com/photo-1562447575-88db38dcc649?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    title: 'Legumes',
    image:
      'https://images.unsplash.com/photo-1562447575-88db38dcc649?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    title: 'Cucurbits',
    image:
      'https://images.unsplash.com/photo-1562447575-88db38dcc649?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    title: 'Umbellifers',
    image:
      'https://images.unsplash.com/photo-1562447575-88db38dcc649?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    title: 'Asters',
    image:
      'https://images.unsplash.com/photo-1562447575-88db38dcc649?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }
]

export default function TaxonomyCarousel() {
  return (
    <Carousel
      opts={{
        align: 'start'
      }}
      className='pt-10'
    >
      <CarouselContent>
        {carouselItems.map((item, index) => (
          <CarouselItem key={index} className='md:basis-1/2 lg:basis-1/3'>
            <Card className='rounded-full p-0'>
              <CardContent className='rounded-full p-0'>
                <Image
                  src={item.image}
                  alt={item.title}
                  className='h-full w-full rounded-full object-cover'
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
