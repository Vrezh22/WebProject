import React from 'react'
import { AnimatedSwitch } from 'react-router-transition';
import Navbar from '../components/navbar'
import Aside from '../components/aside'
import { Route, Redirect } from 'react-router-dom';
import PrivateRoute from '../security/privateRoute';

import About from '../pages/about';
import ContactUs from '../pages/contactus';
import Login from '../pages/login';
import Posts from '../pages/posts';
import Registration from '../pages/registration';
import Celebrities from '../pages/celebrities';
import Profile from '../pages/profile';
import Friends from '../pages/friends';
import Friend from '../pages/friend';
import Calc from '../pages/calc';

const Web = ({ data, state, toggleOpenAside, toggleOpenAboutImgPage, width }) => {
    return (
        <div className="App">
            <Navbar navbarItems={data.navbarItems} toggleOpenAside={toggleOpenAside} width={width}/>
            <Aside isOpen={state.isOpen} />
            <div className="app_content">
                <AnimatedSwitch
                    atEnter={{ opacity: 0 }}
                    atLeave={{ opacity: 0 }}
                    atActive={{ opacity: 1 }}
                    className="app_content"
                >
                    <Route path='/about' render={() => <About isOpenAboutImg={state.isOpenAboutImg} toggleOpenAboutImgPage={toggleOpenAboutImgPage} />} />
                    <Route path='/contactus' component={ContactUs} />
                    <Route path='/login' component={Login} />
                    <Route path='/registration' component={Registration} />
                    <PrivateRoute
                        path='/celebrities'
                        render={(props) => <Celebrities{...props} celebrities={data.celebrities} />} />
                    <PrivateRoute
                        path="/posts"
                        render={(props) => <Posts {...props} posts={data.posts} />}
                    />
                    <PrivateRoute path="/profile">
                        <Profile />
                    </PrivateRoute>
                    <PrivateRoute path="/friends">
                        <Friends />
                    </PrivateRoute>
                    <PrivateRoute path="/friend/:id">
                        <Friend />
                    </PrivateRoute>
                    <PrivateRoute path="/calc" >
                        <Calc />
                    </PrivateRoute>
                    <Redirect from='*' to='/' />
                </AnimatedSwitch>
            </div>
        </div>
    )
}
export default Web;