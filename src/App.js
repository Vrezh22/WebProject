import React from 'react'
import Navbar from './components/navbar'
import Aside from './components/aside'

const navbarItems = {
  home: {
    name: 'Home',
    link: '#'
  },
  about: {
    name: 'About',
    link: '#'
  },
  contactUs: {
    name: 'Contact Us',
    link: '#'
  },
  login: {
    name: 'Login',
    link: '#'
  },
  registration: {
    name: 'Registration',
    link: '#'
  }
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.toggleOpenAside = this.toggleOpenAside.bind(this)
  }
  state = {
    isOpen: false,

  }

  render() {

    return (
      <div className="App">
        <Navbar navbarIntems={navbarItems} toggleOpenAside={this.toggleOpenAside} />
        <Aside isOpen={this.state.isOpen} />
      </div>
    )
  }

  toggleOpenAside() {
    this.setState({ isOpen: !this.state.isOpen })
  }

}



export default App;
