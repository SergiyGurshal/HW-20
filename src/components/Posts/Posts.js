import React from 'react'
import { connect } from 'react-redux'
import Post from '../Post/Post'

const Posts = ({ posts }) => {
  return (
    <div className="App">
      {posts.map((post, id) => (
        <Post {...post} key={post.id} />
      ))}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  }
}

export default connect(mapStateToProps, null)(Posts)
