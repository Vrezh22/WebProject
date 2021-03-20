import React from 'react';
import ReactDOM from 'react-dom';
import style from './modal.module.css';
import PostForm from '../PostForm';

const EditPageModal = ({ post, handleEdit ,closeEditPost }) => {
    return (
        ReactDOM.createPortal(
            <div className={style.editPageModal}>
                <i className={`fa fa-times ${style.close}`} onClick={closeEditPost}></i>
                <PostForm
                values={post}
                handleEdit={handleEdit}

            />
            </div>,
            document.getElementById('portal')
        )
    )
}

export default EditPageModal;