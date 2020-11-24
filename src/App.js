import React from 'react';
import image from './image/burgHeader.png';
import Btno from './components/btno'

function App() {
  return (
    <div className="App">
      <div className="section1">
        <div className="section1head">
          <img src={image} alt="headerBurg" />
          <h3 className="txt1">tajam</h3>

          <nav className="navbar">
            <ul className="navbar_nav">
              <li className="nav_item"><a href="#" className="nav_link">Home</a></li>
              <li className="nav_item"><a href="#" className="nav_link">About</a></li>
              <li className="nav_item"><a href="#" className="nav_link">Expertise</a></li>
              <li className="nav_item"><a href="#" className="nav_link">Teams</a></li>
              <li className="nav_item"><a href="#" className="nav_link">Works</a></li>
              <li className="nav_item"><a href="#" className="nav_link">People say</a></li>
              <li className="nav_item"><a href="#" className="nav_link">Contact</a></li>
            </ul>
          </nav>
        </div>
        <div className="section1text">
          <h2>
            We Are Awesome Creative Agency
        </h2>
          <h3>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum,
          nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.
            Morbi accumsan ipsum velit.</h3>
          <Btno/>
        </div>
      </div>
    </div>
  )
}

export default App;
