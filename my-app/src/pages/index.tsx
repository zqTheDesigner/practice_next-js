import Link from 'next/link'
import styles from '@/styles/Home.module.css'

function HomePage() {
  return (
    <>
      <main className={styles.main}>
        <div>
          <div className='text-3xl font-bold underline'>
            Home Page
          </div>
          <div className='flex justify-between w-full'>
            <Link href='/test?user_name=test-user'>test</Link>
            <Link href='/todos'>Todo list</Link>
          </div>
        </div>
      </main>
    </>
  )
}

export default HomePage
