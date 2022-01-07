import React, { useState, useEffect } from 'react'
import './App.css'
import Blog from './components/Blog'
import blogService from './services/blogs'
import loginService from './services/login'
import LoginForm from './components/LoginForm'
import BlogForm from './components/BlogForm'
import ErrorNotification from './components/Error'
import SucessNotification from './components/Sucess'
import Toggable from './components/Toggable'
const App = () => {
  const [blogs, setBlogs] = useState([])
  const [user,setUser] = useState(null)
  const [password, setPasword] = useState('')
  const [username,setUsername] = useState('')
  const [errorMsg, setErrorMsg] = useState(null)
  const [sucessMsg,setSucessMsg] = useState(null)

  /* useEffect(() => {
    blogService.getAll().then(response=> setBlogs(response))

  }, [])
  */
  //check if user details is in local storage
  useEffect(() => {
    let userJson = window.localStorage.getItem('loggedinUser')
    if(userJson){
      const user = JSON.parse(userJson)
      setUser(user)
      blogService.setToken(user.token)
      blogService.getAll().then(response => setBlogs(response))
    }



  },[])
  const handleLogin=async (event) => {
    event.preventDefault()
    const obj = {
      username:username,
      password:password
    }

    try {

      const result = await loginService.login(obj)

      window.localStorage.setItem('loggedinUser',JSON.stringify(result))

      blogService.setToken(result.token)
      setUser(result)
      const currentblog =await  blogService.getAll()
      setBlogs(currentblog)
      setUsername('')
      setPasword('')


    }catch(error){
      setErrorMsg('Wrong username or password')
      setTimeout(() => {
        setErrorMsg(null)
      }, 5000)
    }


  }



  const handleLogout=() => {
    window.localStorage.removeItem('loggedinUser')
    setUser(null)
  }

  const handleBlogForm = async (obj) => {

    try{

      const response = await blogService.create(obj)
      setBlogs(blogs.concat(response))

      setSucessMsg(response.title)
      setTimeout(() => {
        setSucessMsg(null)
      }, 5000)
    }catch(error){
      setErrorMsg(error)
      setTimeout(() => {
        setErrorMsg(null)
      }, 5000)
    }
  }

  const sortBylikes = () => {
    const sortedBlog = blogs.sort((a,b) => b.likes-a.likes)
    return sortedBlog

  }
  let sortedBlog = sortBylikes()

  if(user===null){
    return (
      <>
        {errorMsg===null?null:<ErrorNotification msg={errorMsg}/>}
        <LoginForm username={username} password={password} usernameSetter={setUsername} passwordSetter={setPasword} onSubmit={handleLogin} />
      </>
    )
  }
  return (
    <div>
      {sucessMsg===null?null:<SucessNotification msg={sucessMsg}/>}
      {errorMsg===null?null:<ErrorNotification/>}
      <button onClick={handleLogout}>logout</button>
      <h1>logged as {user.username}</h1>
      <Toggable buttonName="create blog">
        <BlogForm createBlog={handleBlogForm}/>
      </Toggable>

      <h2>blogs</h2>
      {sortedBlog.map(blog =>
        <Blog key={blog.id} blog={blog} stateSetter={setBlogs} blogState={blogs} currentUser={user}/>

      )}
    </div>
  )
}

export default App

/*
{
    "title": "olamide",username:
    "url": "google twitter blog",
    "author": "bandba",
    "likes": 30,
    "user": {
      "name": "who ami",
      "username": "tenimakalaki",
      "blogs": [
        "615e1fc362f8d8725b4818e9",
        "615edcf2ebe50b8877e89f07",
        "615ef43bebe50b8877e89f12",
        "615ef504cfee34014b1dd77b",
        "615f15797ad0c8916b845be4"
      ],
      "id": "615d88320efaf11f811a21ad"
    },
    "id": "615edcf2ebe50b8877e89f07"
  },
*/