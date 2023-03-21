import Link from 'next/link'

function HomePage() {
  return (
    <>
      <div>Home Page</div>
      <Link href='/test?user_name=test-user'>test</Link>
      <Link href='/todo-list/todo-list'>Todo list</Link>
    </>
  )
}

export default HomePage
