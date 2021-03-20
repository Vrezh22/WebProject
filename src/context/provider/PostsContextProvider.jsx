import React from 'react';
import { PostsContext } from '../contexts';
import { v4 as uuidv4 } from 'uuid';

class PostsContextProvider extends React.Component {
  state = {
    posts: [
      {
        "id": uuidv4(),
        "img": 'https://www.kathmanduandbeyond.com/wp-content/uploads/2018/08/Iron-Fountain-Gyumri-Armenia-3.jpg',
        "title": "Seven wounds",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      },
      {
        "id": uuidv4(),
        "img": 'https://mycaucasus.com/images/TourTrip/cities/gyumri/gyumri-holy-saviour-church.jpg',
        "title": "qui est esse",
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
      },
      {
        "id": uuidv4(),
        "img": 'https://www.advantour.com/img/armenia/gyumri/gyumri1.jpg',
        "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
      },
      {
        "id": uuidv4(),
        "img": 'https://www.aravot-en.am/wp-content/uploads/2019/12/Gyumri_-1.jpg',
        "title": "eum et est occaecati",
        "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
      },
      {
        "id": uuidv4(),
        "img": 'https://armenia-tour.com/storage/media/Destinations/Gyumri/gyumri_1512124778.jpg',
        "title": "nesciunt quas odio",
        "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
      },
    ],
    editPost: {
      isOpen: false,
      postId: ''
    }
  }
  openEditPost = (postId) => {
    this.setState({
      editPost: {
        isOpen: true,
        postId
      }
    })
  }
  closeEditPost = () => {
    this.setState({
      editPost: {
        isOpen: false,
        postId: ''
      }
    })
  }

  addPost = (img, title, body) => {
    const posts = [...this.state.posts];
    const newPost = {
      id: uuidv4(),
      img,
      title,
      body
    }
    posts.push(newPost);
    return this.setState(prevState => ({
      ...prevState,
      posts: posts
    }))
  }
  handleDelete = (id) => {
    return this.setState((prevState) => ({
      posts: prevState.posts.filter(posts => posts.id !== id),
    }))

  };

  render() {
    return (
      <PostsContext.Provider
        value={{
          posts: this.state.posts,
          editPost:this.state.editPost,
          addPost: this.addPost,
          handleDelete: this.handleDelete,
          closeEditPost: this.closeEditPost,
          openEditPost: this.openEditPost
        }}
      >
        {this.props.children}
      </PostsContext.Provider>
    )
  }
}
export default PostsContextProvider;