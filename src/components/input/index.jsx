import React from 'react';

const Input = ({ type, name, placeholder }) => {
    return <input type={type ? type : null}
        name={name ? name : null}
        placeholder={placeholder ? placeholder : null}
        className="formInput"
    />

}

export default Input;