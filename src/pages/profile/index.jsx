import React from 'react';
import style from './profile.module.css';


const Profile = () => {
    let activeUser = localStorage.getItem('activeUser')
    activeUser = JSON.parse(activeUser)
    return (
        <div className={style.profile}>
            <div className={style.imgLine}>
                <img src={activeUser.avatar} alt='img' />
            </div>
            <div className={style.dataLine}>
                <h3>{activeUser.name} </h3>
                <p>{activeUser.email} </p>
            </div>
        </div>
    )
}
export default Profile;