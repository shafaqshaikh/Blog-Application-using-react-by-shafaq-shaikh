import React , {useState , useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
const Blogs = () => {

    const [blogPosts , setBlogPosts] = useState([])

    useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((res)=>setBlogPosts( res.data))
    }, [blogPosts])

    return (
        <div>
         {
           blogPosts.map((blog)=>{
               return <Link to={`/blog/${blog.id}`}> <div key={blog.id}>
                   <h2>{blog.title}</h2>
               </div>
               </Link>
           })  
         }   
        </div>
    )
}

export default Blogs
