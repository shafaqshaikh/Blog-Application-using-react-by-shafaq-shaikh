import React , {useState , useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
const BlogPost = () => {

    const [post , setPost] = useState([])
    const {id} = useParams()

useEffect(() => {
  axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
  .then((res)=> setPost(res.data))
}, [post])
    return (
        <div>
          <h1>{post.id}</h1>
          <h2>{post.title}</h2>
          <h4>{post.body}</h4>
        <Link to="/"> <button>Back</button></Link> 
        </div>
    )
}

export default BlogPost
