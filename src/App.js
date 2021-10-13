import React, {lazy, Suspense} from "react";
import Navbar from "./components/Navbar/Navbar";
import {Route, withRouter} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import {initializeApp} from "./redux/app-reducer";
import {connect} from "react-redux";
import {compose} from "redux";
import Preloader from "./components/common/Preloader/Preloader";

import "./App.css";

// в bundle не попадёт, а загрузится по мере необходимости
const ProfileContainer = lazy( () => import('./components/Profile/ProfileContainer'));
const DialogsContainer = lazy( () => import('./components/Dialogs/DialogsContainer'));



class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if(!this.props.initialized) {
            return <Preloader />
        }

        return (
            <div className='app-wrapper'>
                <HeaderContainer />
                <Navbar />
                <div className='app-wrapper-content'>
                    <Suspense fallback={<Preloader />}>
                        {/*теперь /profile без парамаетра не открывается, указываем что он не обязателен*/}
                        <Route path='/profile/:userId?' render={() => <ProfileContainer />}/>
                        <Route exact path='/dialogs' render={() => <DialogsContainer />}/>
                    </Suspense>
                    <Route path='/users' render={() => <UsersContainer />}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/login' component={LoginPage}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        initialized: state.app.initialized
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps, { initializeApp })
)(App);
