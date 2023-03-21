import { useRouter } from 'next/router'

const Post = () => {
  const router = useRouter()
  const { pid, user_name } = router.query

  return (
    <>
      <p>Post:{pid}</p>
      <p>User:{user_name}</p>
    </>
  )
}

export default Post
