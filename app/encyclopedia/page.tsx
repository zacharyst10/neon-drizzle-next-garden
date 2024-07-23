import Image from 'next/image'

import TaxonomyCarousel from '@/components/taxonomy-carousel'

import avacadoTwo from '@/public/icons/avacado2.png'

export default async function Encyclopedia() {
  const carouselItems = [
    {
      title: 'Nightshades',
      image:
        'https://images.unsplash.com/photo-1562447575-88db38dcc649?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      title: 'Brassicas',
      image:
        'https://images.unsplash.com/photo-1708661073387-3c9f7a1307f9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnJhc3NpY2FzfGVufDB8fDB8fHww'
    },
    {
      title: 'Legumes',
      image:
        'https://images.unsplash.com/photo-1707129745885-9dadc8005703?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGxlZ3VtZXN8ZW58MHx8MHx8fDA%3D'
    },
    {
      title: 'Cucurbits',
      image:
        'https://images.unsplash.com/photo-1509738790624-647f5eff2cc7?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      title: 'Umbellifers',
      image:
        'https://images.unsplash.com/photo-1707805711223-84923952adf0?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dW1iZWxsaWZlcnxlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      title: 'Asters',
      image:
        'https://images.unsplash.com/photo-1666177549304-1a866ee599b6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXN0ZXJzfGVufDB8fDB8fHww'
    }
  ]

  const carouselItems2 = [
    {
      title: 'Tomatoes',
      image:
        'https://images.unsplash.com/photo-1562447575-88db38dcc649?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      title: 'Peppers',
      image:
        'https://images.unsplash.com/photo-1663500004095-a7482241694c?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      title: 'Beans',
      image:
        'https://images.unsplash.com/photo-1638890770156-48a18d5c2dba?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      title: 'herbs',
      image:
        'https://images.unsplash.com/photo-1508595165502-3e2652e5a405?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      title: 'Leafy Greens',
      image:
        'https://images.unsplash.com/photo-1708661073403-65a5c1fc001b?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
  ]
  const carouselItems3 = [
    {
      title: 'Tomatoes',
      image:
        'https://images.unsplash.com/photo-1562447575-88db38dcc649?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      title: 'Peppers',
      image:
        'https://images.unsplash.com/photo-1663500004095-a7482241694c?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      title: 'Beans',
      image:
        'https://images.unsplash.com/photo-1638890770156-48a18d5c2dba?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      title: 'herbs',
      image:
        'https://images.unsplash.com/photo-1508595165502-3e2652e5a405?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      title: 'Leafy Greens',
      image:
        'https://images.unsplash.com/photo-1708661073403-65a5c1fc001b?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
  ]

  return (
    <div className='container'>
      <h1>Encyclopedia</h1>
      <h1>Taxonomic Groups</h1>
      <Image
        src={avacadoTwo}
        alt='avacado'
        placeholder='blur'
        width={100}
        height={100}
      />
      <TaxonomyCarousel carouselItems={carouselItems} />
      <TaxonomyCarousel carouselItems={carouselItems2} />
      <TaxonomyCarousel carouselItems={carouselItems3} />
    </div>
  )
}
