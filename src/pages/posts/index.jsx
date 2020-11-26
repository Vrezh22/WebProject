import React from 'react';

const Posts = (props) => {
    const posts = props.posts;
    const mapPosts = posts.map(post => {
        return (
            <div className="row" key={post.id}>
                <div className="col s12 m6">
                    <div className="card blue-grey darken-1">
                        <div className="card-content white-text">
                            <span className="card-title" style={{ color: 'red' }}>id:{post.id}   /{post.title}</span>
                            <p>{post.body}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    })
    return (
        <div>
            <h1>Posts Page</h1>
            {mapPosts}


        </div>
    )
}

export default Posts;