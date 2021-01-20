import React from 'react';
import { PostsContext } from '../../context/contexts';
import NewPostForm from './NewPostForm';

const Posts = (props) => {
  return (
    <PostsContext.Consumer>{
      context => {
        const posts = context.posts;
        const mapPosts = posts.map(post => {
          return (
            <div className="full" key={post.id}>
              <div className="col s12 m4">
                <div className="card">
                  <div className="card-image">
                    <img src={post.img} alt="pic" />
                    <span className="card-title">{post.title}</span>
                  </div>
                  <div className="card-content">
                    <p>{post.body}</p>
                    <button className="btn btn-danger" onClick={() => context.handleDelete(post.id)}>DELETE</button>
                  </div>
                </div>
              </div>
            </div>
          )
        })
        return (
          <div className="hop">
            <h1>Քաղքի անցուդարցը</h1>
            <NewPostForm addPost={context.addPost} />
            {mapPosts}
          </div>
        )
      }
    }
    </PostsContext.Consumer>
  )
}
export default Posts;