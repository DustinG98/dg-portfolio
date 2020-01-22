import React from 'react'
import BlogPosts from './BlogPosts'
import TextEditor from './TextEditor'

const Dashboard = () => {
    return (
        <div>
            <h1>Dashboard</h1>
            {/* BLOG POSTS */}
            <BlogPosts/>
            <TextEditor/>
        </div>
    )
}

export default Dashboard