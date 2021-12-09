import React, {Component} from "react";
import Navbar from "./components/Navbar/Navbar";
import {Route, withRouter} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import HeaderContainer from "./components/Header/HeaderContainer";
import {LoginPage} from "./components/Login/LoginPage";
import {initializeApp} from "./redux/app-reducer";
import {connect} from "react-redux";
import {compose} from "redux";
import Preloader from "./components/common/Preloader/Preloader";
import {AppStateType} from "./redux/redux-store";
import {UsersPage} from "./components/Users/UsersPage";
import { Grid, Container } from '@mui/material';
import "./App.css";

const Suspense = (React as any).Suspense;
const lazy = (React as any).lazy;
// в bundle не попадёт, а загрузится по мере необходимости
const DialogsContainer = lazy( () => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = lazy( () => import('./components/Profile/ProfileContainer'));
const ChatPage = lazy( () => import('./pages/Chat/ChatPage'));

type MapStatePropsType = ReturnType<typeof mapStateToProps>;

type MapDispatchPropsType = {
    initializeApp: () => void
}

type OwnPropsType = {

}

class App extends Component<MapStatePropsType & MapDispatchPropsType> {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if(!this.props.initialized) {
            return <Preloader />
        }

        return (
            // <div className='app-wrapper'>
            <Container maxWidth="lg">
                <Grid container spacing={0}>
                    <Grid item xs={2}>
                        <Navbar />
                    </Grid>
                    <Grid item xs={10}>
                        <HeaderContainer />
                        <Suspense fallback={<Preloader />}>
                            {/*теперь /profile без парамаетра не открывается, указываем что он не обязателен*/}
                            <Route path='/profile/:userId?' render={() => <ProfileContainer />}/>
                            <Route exact path='/dialogs' render={() => <DialogsContainer />}/>
                            <Route path='/chat' render={() => <ChatPage />}/>
                        </Suspense>
                        <Route path='/users' render={() => <UsersPage />}/>
                        <Route path='/news' component={News}/>
                        <Route path='/music' component={Music}/>
                        <Route path='/login' component={LoginPage}/>
                        {/*<Route path='*' render={() => <div>404 NOT FOUND</div>} />*/}
                    </Grid>
                </Grid>
            </Container>

            // <div className='app-wrapper-content'>
            //
            //     </div>
            // </div>
        );
    }
}

const mapStateToProps = ( state: AppStateType ) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        initialized: state.app.initialized
    }
}

export default compose(
    withRouter,
    connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, { initializeApp })
)(App);
