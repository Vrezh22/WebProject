import React from 'react';
import { withRouter } from 'react-router-dom';
import style from './friend.module.css';
import Preloader from '../../components/preloader';

class Friend extends React.Component {
    state = {
        friend: {}
    }
    componentDidMount() {
        const { id } = this.props.match.params;
        (async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
                if (response.status === 404)
                    throw new Error('Error 404 friend ID  is not valid');

                const friend = await response.json();
                this.setState(prevState => ({
                    ...prevState,
                    friend
                }))
            }
            catch (err) {
                this.props.history.push('/')
            }
        })()
    }
    render() {
        if (!Object.keys(this.state.friend).length) return <Preloader />;
        return(
            <div>
                <h1>Friend Page</h1>
                <div class={style.friend}>
                    <div class={style.friendAvatar}>
                        <img src="https://i.pinimg.com/originals/8e/95/37/8e9537c3702d95f6e6c3f76689354429.jpg" alt="Gyumri" />
                    </div>
                    <div className={style.friendInfo}>
                        <p>{this.state.friend.name}</p>
                        <p>{this.state.friend.email}</p>
                    </div>
                </div>
            </div>
        )
    }
}
export default withRouter(Friend);