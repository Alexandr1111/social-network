import "./App.css";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route } from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";

const App = () => {
  return (
      <div className='app-wrapper'>
          <HeaderContainer />
          <Navbar />
          <div className='app-wrapper-content'>
              <Route exact path='/dialogs' render={() => <DialogsContainer />} />
              <Route path='/profile/:userId?' render={() => <ProfileContainer />} /> {/*теперь /profile без парамаетра не открывается, указываем что он не обязателен*/}
              <Route path='/users' render={() => <UsersContainer />} />
              <Route path='/news' component={News} />
              <Route path='/music' component={Music} />
              <Route path='/login' component={LoginPage} />
          </div>
      </div>
  );
}

export default App;
