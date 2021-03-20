import React from 'react'
import withScreenSizes from './HOC/withScreenSizes';
import Web from './version/Web';
import Mobile from './version/Mobile';



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
      "img": 'https://scontent.fevn5-1.fna.fbcdn.net/v/t1.0-9/131217720_2848086775438379_3645061596391205007_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=TZMn9x9ALEMAX9XfKqK&_nc_ht=scontent.fevn5-1.fna&oh=e959806651e485543ff173b1de4012dd&oe=607A8E21',
      "fullname": "Վրեժ Հովհաննիսյան",
      "body": "Web Developer"
    },
  ]
}


class App extends React.Component {

  state = {
    isOpen: false,
    isOpenAboutImg: false,
    isMenuOpen: true
  }

  render() {
    const { width } = this.props;

    if (width <= 1024) {
      return <Mobile
        data={data}
        toggleOpenAside={this.toggleOpenAside}
        state={this.state}
        toggleOpenAboutImgPage={this.toggleOpenAboutImgPage}
        isMenuOpen={this.state.isMenuOpen}
        toggleOpenMenu={this.toggleOpenMenu}
        width={width}
      />
    } else {
      return <Web
        data={data}
        toggleOpenAside={this.toggleOpenAside}
        state={this.state}
        toggleOpenAboutImgPage={this.toggleOpenAboutImgPage}
        width={width}
      />
    }
  }
  toggleOpenAside = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }
  toggleOpenAboutImgPage = () => {
    this.setState((prevState) => ({
      ...prevState,
      isOpenAboutImg: !prevState.isOpenAboutImg
    }))
  }
  toggleOpenMenu = () => {
    this.setState(prevState => ({
      ...prevState,
      isMenuOpen: !this.state.isMenuOpen
    }))
  }
}

export default withScreenSizes(App);