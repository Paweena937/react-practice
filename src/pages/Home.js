import React from 'react'
import UsePosts from '../Hooks/UsePosts'
import Post from '../component/Post'
import classes from './Home.module.css'

const Home = () => {
  const { posts, setPosts, isLoading } = UsePosts()
  // const [newPostTitle, setNewPostTitle] = useState('')
  // const [newPostBody, setNewPostBody] = useState('')
  // const [posts, setNewPosts] = useState(null)

  if (isLoading) return <h1>isLoading...</h1> //ไม่ต้องย้าย

  return (
    <div className={classes.container}>
      <div className={classes.postForm}>
        {posts &&
          posts.map((post) => {
            return <Post key={post.id} post={post} />
          })}
      </div>
    </div>
  )
}

export default Home
