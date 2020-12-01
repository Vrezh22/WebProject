import React from 'react';

const Button = (props) => {
    console.log(props);
    return <button className="btn btn-primary">
        {props.children}
    </button>
}

export default Button;