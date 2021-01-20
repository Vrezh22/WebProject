import React, { Fragment, useRef } from 'react';
import style from './newPostForm.module.css';

const NewPostForm = ({ addPost }) => {
    const imgRef = useRef();
    const titleRef = useRef();
    const bodyRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        const img = imgRef.current.value;
        const title = titleRef.current.value;
        const body = bodyRef.current.value;
        addPost(img, title, body);
    }
    return (
        <>
            <h4 className={style.header4}>Add Post</h4>
            <form className={style.form} >
                <input type="text" name="img" placeholder="Image URL address" ref={imgRef} />
                <input type="text" name="title" placeholder="Write Post title" ref={titleRef} />
                <input type="text" name="body" placeholder="Write Post" ref={bodyRef} />
                <button type="submit" className="btn" onClick={handleSubmit}>Add Post</button>
            </form>
        </>
    )
}
export default NewPostForm;