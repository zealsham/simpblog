import React,{ useState } from 'react'
import blogService from '../services/blogs'

const Blog = ({ blog,stateSetter,blogState,currentUser }) => {

  const [visible,setVisible]=useState(false)
  const changeVisible=() => {
    setVisible(!visible)
  }

  const handleLikes=async (blog) => {
    const obj ={
      title:blog.title,
      url:blog.url,
      author:blog.author,
      user:blog.user.id,
      likes:blog.likes+1
    }

    const result = await blogService.update(obj,blog.id)
    console.log(blogState)
    let updatedBlog = blogState.map(blog => blog.id !==result.id?blog:result)
    stateSetter(updatedBlog)


  }
  const removeBlog=async (blog) => {
    if(window.confirm('do you want to delete this blog ')){
      const result = await blogService.remove(blog.id)
      const blogAfterDelete = blogState.filter(obj => obj.id !== result.id)
      stateSetter(blogAfterDelete)
    }



  }
  const hideWhenVisible ={ display:visible?'':'none' }
  const buttonLabel = visible?'hide':'view'

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5,
    borderRadius: 5,
  }

  return (
    <div style={blogStyle}>
      <button onClick={changeVisible}>{buttonLabel}</button>
      <div>

        <h5>{blog.title}</h5>
      </div>
      <div style={hideWhenVisible}>
        <p>{blog.url}</p>
        <p>{blog.author}</p>
        <span>Likes: </span>{blog.likes} <button onClick={() => {handleLikes(blog)}}>like</button>
        {blog.user.username === currentUser.username? <button onClick={() => {removeBlog(blog)}}>remove</button>:null}

      </div>

    </div>
  )
}

export default Blog