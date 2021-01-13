import React from 'react';
import s from './friends.module.css';
import Preloader from '../../components/preloader';
import { Link } from 'react-router-dom';

class Friends extends React.Component {
    state = {
        friends: []
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(friends => {
                this.setState(prevState => ({
                    ...prevState,
                    friends,
                }))
            })
    }

    render() {
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
export default Friends; 