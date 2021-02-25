import React from "react";
import ReactDOM from "react-dom";
import store from './redux/redux-store';
import App from "./App";

let rerenderEntireTree = state => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} dispatch={store.dispatch.bind(store)} store={store} />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState());

store.subscribe(() => { // Когда стейт изменится, стор вызовет нашу стрелочную функцию, чтобы запросит заново стейт
    let state = store.getState();
    rerenderEntireTree(state);
})

