import style from './textarea.module.css';
import React from 'react';

const Textarea = (props) => {
    return (
        <>
            <label for={props.placeholder} className={style.placeholder}>{props.placeholder}</label>
            <textarea placeholder="Your Message" id={props.placeholder} className={style.textarea} {...props} />
        </>
    )
}
export default Textarea;