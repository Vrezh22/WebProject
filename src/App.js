import React from 'react'
import { AnimatedSwitch } from 'react-router-transition';
import Navbar from './components/navbar'
import Aside from './components/aside'
import { Route, Redirect } from 'react-router-dom';
import PrivateRoute from './security/privateRoute';

import About from './pages/about';
import ContactUs from './pages/contactus';
import Login from './pages/login';
import Posts from './pages/posts';
import Registration from './pages/registration';
import Celebrities from './pages/celebrities';
import Profile from './pages/profile';
import Friends from './pages/friends';
import Friend from './pages/friend';
import Calc from './pages/calc';



const data = {
  navbarItems: [
    {
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
    },
    {
      id: 6,
      name: 'Posts',
      link: '/posts'
    },
    {
      id: 7,
      name: 'Celebrities',
      link: '/celebrities'
    },
    {
      id: 8,
      name: 'Profile',
      link: '/profile'
    },
    {
      id: 9,
      name: 'Friends',
      link: '/friends',
    },
    {
      id: 10,
      name: 'Calculator',
      link: '/calc',
    },
    
  ],
  posts: [
    {
      "id": 1,
      "img": 'https://www.kathmanduandbeyond.com/wp-content/uploads/2018/08/Iron-Fountain-Gyumri-Armenia-3.jpg',
      "title": "Seven wounds",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
      "id": 2,
      "img": 'https://mycaucasus.com/images/TourTrip/cities/gyumri/gyumri-holy-saviour-church.jpg',
      "title": "qui est esse",
      "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
      "id": 3,
      "img": 'https://www.advantour.com/img/armenia/gyumri/gyumri1.jpg',
      "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    },
    {
      "id": 4,
      "img": 'https://www.aravot-en.am/wp-content/uploads/2019/12/Gyumri_-1.jpg',
      "title": "eum et est occaecati",
      "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
    },
    {
      "id": 5,
      "img": 'https://armenia-tour.com/storage/media/Destinations/Gyumri/gyumri_1512124778.jpg',
      "title": "nesciunt quas odio",
      "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
    },
  ],
  celebrities: [
    {
      "id": 1,
      "img": 'https://www.1tv.am/images/video/2/6631/hogevor_player.jpeg',
      "fullname": "Մհեր Մկրտչյան",
      "body": "Վաստակավոր դերասան"
    },
    {
      "id": 2,
      "img": 'https://mamul.am/images/pics/170706/hvovhannes-shiraz-ba-u70586-1.jpg',
      "fullname": "Հովհաննես Շիրազ",
      "body": "Անվանի բանաստեղծ"
    },
    {
      "id": 3,
      "img": 'https://upload.wikimedia.org/wikipedia/hy/7/7d/%D4%B1%D5%BE%D5%A5%D5%BF%D5%AB%D6%84_%D4%BB%D5%BD%D5%A1%D5%B0%D5%A1%D5%AF%D5%B5%D5%A1%D5%B6.jpg',
      "fullname": "Ավետիք Իսահակյան",
      "body": "Մեծ Գրող"
    },
    {
      "id": 4,
      "img": 'https://armenpress.am/static/news/b/2020/02/1004546.jpg',
      "fullname": "Արթուր Ալեքսանյան",
      "body": "Օլիմպիական չեմպիոն"
    },
    {
      "id": 5,
      "img": 'https://scontent.fevn5-1.fna.fbcdn.net/v/t1.0-9/117951620_2738873193026405_2846872406071791721_n.jpg?_nc_cat=104&ccb=2&_nc_sid=8bfeb9&_nc_ohc=jlkrnByQTO4AX9rxbeF&_nc_oc=AQk6ss8RCg7TnGZdTIWWgw1_p-bu6X4633h0DKnIfXxkqwb19hP0Lma_H8kUTLIELLM&_nc_ht=scontent.fevn5-1.fna&oh=55563a6478bc8e30b134efa50e537155&oe=600B65D6',
      "fullname": "Վրեժ Հովհաննիսյան",
      "body": "Web Developer"
    },
  ]
}


class App extends React.Component {

  state = {
    isOpen: false,
    isOpenAboutImg: false
  }

  render() {
    return (
      <div className="App">
        <Navbar navbarItems={data.navbarItems} toggleOpenAside={this.toggleOpenAside} />
        <Aside isOpen={this.state.isOpen} />
        <div className="app_content">
          <AnimatedSwitch
            atEnter={{ opacity: 0 }}
            atLeave={{ opacity: 0 }}
            atActive={{ opacity: 1 }}
            className="app_content"
          >
            <Route path='/about' render={() => <About isOpenAboutImg={this.state.isOpenAboutImg} toggleOpenAboutImgPage={this.toggleOpenAboutImgPage} />} />
            <Route path='/contactus' component={ContactUs} />
            <Route path='/login' component={Login} />
            <Route path='/registration' component={Registration} />
            <PrivateRoute
              path='/celebrities'
              render={(props) => <Celebrities{...props} celebrities={data.celebrities} />} />
            <PrivateRoute
              path="/posts"
              render={(props) => <Posts {...props} posts={data.posts} />}
            />
            <PrivateRoute path="/profile">
              <Profile />
            </PrivateRoute>
            <PrivateRoute path="/friends">
              <Friends />
            </PrivateRoute>
            <PrivateRoute path="/friend/:id">
              <Friend />
            </PrivateRoute>
            <PrivateRoute path="/calc" >
              <Calc />
            </PrivateRoute>
            <Redirect from='*' to='/' />
          </AnimatedSwitch>
        </div>
      </div>
    )
  }
  toggleOpenAside = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }
  toggleOpenAboutImgPage = () => {
    this.setState((state) => ({
      ...state,
      isOpenAboutImg: !state.isOpenAboutImg
    }))
  }
}


export default App;
