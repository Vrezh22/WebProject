import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../../components/input';
import Button from '../../components/button';

const ContactUs = (props) => {
    return (
        <div>
            <Link to="/about">Go to About Page </Link>
            <h1>About Us</h1>
            <Input type="text" name="name" placeholder="Name" />
            <Button> Submit</Button>
        </div>
    )
}

export default ContactUs;