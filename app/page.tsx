import { getData } from '@/actions/todo-actions'
import { getAllUsers, getUser } from '@/actions/user-actions'

import Todos from '@/components/todos'

export default async function Home() {
  const users = await getAllUsers()
  console.log(users)
  const data = await getData(users[0].id)
  const user = await getUser(users[0].id)

  console.log(user)

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <h1>Garden</h1>
      <Todos todos={data} user={users[0]} />
    </main>
  )
}
