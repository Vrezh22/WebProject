import React from 'react';

const Posts = ({posts})=>{
    const mapPosts= posts.map(post=>{
        return(
         <div className="full" key={post.id}>

            <div className="col s12 m4">
              <div className="card">
                <div className="card-image">
                  <img src={post.img} alt= "pic" />
                  <span className="card-title">{post.title}</span>
                  </div>

                <div className="card-content">
                  <p>{post.body}</p>
                </div>
              </div>
            </div>
          </div>
                 
        )
    })
    return(
        <div className="hop">
            <h1>Քաղքի անցուդարցը</h1>
            {mapPosts}
        </div>
    )
}
export default Posts;