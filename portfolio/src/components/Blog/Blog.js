import React from 'react'
import { Link } from 'react-router-dom'

import './blog.css'

const Blog = () => {
    return (
        <div>
            <div>
                <h1>Welcome to my blog!</h1>
                <Link className="admin" to="/blog/dashboard/login">Admin</Link>
            </div>


            
        </div>
    )
}

export default Blog