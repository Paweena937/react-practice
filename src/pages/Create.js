import React, { useState } from 'react'
import classes from './Create.module.css'

const Create = () => {
  const [newPostTitle, setNewPostTitle] = useState('')
  const [newPostBody, setNewPostBody] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      //post
      const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: newPostTitle,
          body: newPostBody,
          userId: Math.floor(Math.random() * 1000),
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      const data = await res.json()
      console.log(data)

      // setPosts([...posts, data])
    } catch (e) {
      console.log(e)
    }

    setNewPostTitle('')
    setNewPostBody('')
  }

  return (
    <div className={classes.container}>
      <form className={classes.postForm} onSubmit={handleSubmit}>
        <label>Title:</label>
        <input type="text" value={newPostTitle} onChange={(e) => setNewPostTitle(e.target.value)} required />
        <label>Body:</label>
        <input type="text" value={newPostBody} onChange={(e) => setNewPostBody(e.target.value)} required />
        <input type="submit" value="Post" />
      </form>
    </div>
  )
}

export default Create
