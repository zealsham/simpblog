import React ,{ useState } from 'react'

const BlogForm=({ createBlog }) => {
  const [title,setTitle]= useState('')
  const [author,setAuthor] = useState('')
  const [url,setUrl] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    let obj = {
      title:title,
      author:author,
      url:url,
      likes:0
    }
    createBlog(obj)
    setTitle('')
    setUrl('')
    setAuthor('')
  }
  return(
    <form onSubmit={handleSubmit}>
      <div>
                title: <input name="title" value={title} onChange={(event) => setTitle(event.target.value)}  />
      </div>
      <div>
                author: <input name="author" value={author} onChange={(event) => setAuthor(event.target.value)}/>
      </div>
      <div>
                url: <input name="url" value={url} onChange={(event) => setUrl(event.target.value)} />
      </div>
      <button type="submit">create</button>
    </form>
  )
}

export default BlogForm