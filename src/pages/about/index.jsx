import React from 'react';
import style from './about.module.css';
class About extends React.Component {
    state = {}

    render() {
    return (
        <div className='aboutUs'>
            <h1>About Us</h1>
            <div className={this.props.isOpenAboutImg?style.aboutImg: `${style.aboutImg} ${style.hidden}`}>
                <img src="https://i.pinimg.com/originals/53/f5/af/53f5aff5ac84e1030f0a6930b8882dec.gif" alt='pictu' />
            </div>
            <button className='btn blue' onClick={this.props.toggleOpenAboutImgPage}>Toggle Img</button>
        </div>
    )
}
}
export default About;