import React from 'react';
import { Link } from 'react-router-dom';

const ContactUs = (props) => {
    return (
        <div>
            <Link to="/about">Go to About Page </Link>
            <h1>Contact Us</h1>
        </div>
    )
}

export default ContactUs;