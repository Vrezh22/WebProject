import React from 'react'
import Navbar from './components/navbar'
import Aside from './components/aside'
import { Route, Switch, Redirect } from 'react-router-dom';

//pages
import About from './pages/about';
import ContactUs from './pages/contactUs';
import Login from './pages/login';
import Registration from './pages/registration';
import Posts from './pages/posts'

const data = {
  navbarItems: [{
    id: 1,
    name: 'Home',
    link: '/'
  },
  {
    id: 2,
    name: 'About',
    link: '/about'
  },
  {
    id: 3,
    name: 'Contact Us',
    link: '/contactus'
  },
  {
    id: 4,
    name: 'Login',
    link: '/login'
  },
  {
    id: 5,
    name: 'Registration',
    link: '/registration'
  }, {
    id: 6,
    name: 'Posts',
    link: '/posts'
  }
  ],

  posts: [
    {
      userId: 1,
      id: 1,
      title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto",
    },
    {
      userId: 1,
      id: 2,
      title: "qui est esse",
      body: "est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla",
    },
    {
      userId: 1,
      id: 3,
      title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      body: "et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut",
    },
    {
      userId: 1,
      id: 4,
      title: "eum et est occaecati",
      body: "ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit",
    },
    {
      userId: 1,
      id: 5,
      title: "nesciunt quas odio",
      body: "repudiandae veniam quaerat sunt sed alias aut fugiat sit autem sed est voluptatem omnis possimus esse voluptatibus quis est aut tenetur dolor neque",
    }
  ]
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.toggleOpenAside = this.toggleOpenAside.bind(this);
  }
  state = {
    isOpen: false,

  }

  render() {

    return (
      <div className="App">
        <Navbar navbarItems={data.navbarItems} toggleOpenAside={this.toggleOpenAside} />
        <Aside isOpen={this.state.isOpen} />
        <div className="app_content">
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/contactus" component={ContactUs} />
            <Route path="/login" component={Login} />
            <Route path="/registration" component={Registration} />
            <Route path="/posts" render={(props) => <Posts {...props} posts={data.posts}/>} />
            <Redirect from="*" to="/" />
          </Switch>
        </div>


      </div>
    )
  }

  toggleOpenAside() {
    this.setState({ isOpen: !this.state.isOpen })
  }

}



export default App;
