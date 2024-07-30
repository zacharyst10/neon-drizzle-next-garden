import { getUser } from '@/actions/user-actions'
import { currentUser } from '@clerk/nextjs/server'
import Link from 'next/link'

import Todos from '@/components/todos'

export default async function Home() {
  const user: any = await currentUser()
  if (!user) return
  const fetchedData = await getUser(user?.id)

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <h1>Garden Site</h1>
      <div>
        Not sure what to grow yet? Check out the{' '}
        <Link href='/encyclopedia'>Encyclopedia</Link>
      </div>
      <Todos todos={fetchedData[0].todos} user={fetchedData[0]} />
    </main>
  )
}
