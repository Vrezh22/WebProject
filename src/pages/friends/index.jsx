import React from 'react';
import s from './friends.module.css';
import Preloader from '../../components/preloader';
import *as axios from'axios';
import { Link } from 'react-router-dom';
import withScreenSizes from '../../HOC/withScreenSizes'

class Friends extends React.Component {
    state = {
        friends: []
    }
    componentDidMount() {
       axios.get('https://jsonplaceholder.typicode.com/users')
            .then(({data}) => {
                this.setState(prevState => ({
                    ...prevState,
                    friends:data
                }))
            })
    }

    render() {
        // if(true) {
        //     throw new Error('Error from Friends Page!')
        // }
        if (!this.state.friends.length) return <Preloader />

        const FriendsJSX = this.state.friends.map(friend => {
            return (
                <div className={s.friend} key={friend.id}>
                    <div className={s.friendImg}>
                        <img src="https://toptrip.info/wp-content/uploads/2018/08/Poloz-Mukuch-1024x768.jpg" alt="Been" />
                    </div>
                    <div className={s.friendInfo}>
                        <p>{friend.name}</p>
                        <p><Link to={'/friend/' + friend.id}>{friend.email}</Link></p>
                    </div>
                </div>
            )
        })

        return (
            <div className={s.friends}>
                <h1>Friends Page</h1>
                <div className={s.friendWrapper}>
                    {FriendsJSX}
                </div>
            </div>
        )
    }
}
export default withScreenSizes(Friends); 