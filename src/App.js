import "./App.css";
import React from "react";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";

const App = ({store, state, dispatch}) => {
  return (
      <Router>
          <div className='app-wrapper'>
              <Header />
              <Navbar />
              <div className='app-wrapper-content'>
                  <Route exact path='/dialogs' render={() => <Dialogs store={store} />} />
                  <Route path='/profile' render={() => <Profile profilePage={state.profilePage} dispatch={dispatch} />} />
                  <Route path='/news' component={News} />
                  <Route path='/music' component={Music} />
              </div>
          </div>
      </Router>
  );
}

export default App;
