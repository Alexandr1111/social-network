import React from "react";
import ReactDOM from "react-dom";
import store from './redux/redux-store';
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "./StoreContext";

let rerenderEntireTree = () => {
    ReactDOM.render(
        <Router>
            <Provider store={store}>
                <App />
            </Provider>
        </Router>, document.getElementById('root')
    );
}

rerenderEntireTree(store.getState());

store.subscribe(() => { // Когда стейт изменится, стор вызовет нашу стрелочную функцию, чтобы запросит заново стейт
    rerenderEntireTree();
})

