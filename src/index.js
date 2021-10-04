import React from "react";
import ReactDOM from "react-dom";
import store from './redux/redux-store';
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

ReactDOM.render(
    <Router>
        <Provider store={store}>
            <App />
        </Provider>
    </Router>,
    document.getElementById('root')
);


// с введением connect подписка не нужна, он сам субскрайбится
// store.subscribe(() => { // Когда стейт изменится, стор вызовет нашу стрелочную функцию, чтобы запросит заново стейт
//     rerenderEntireTree();
// })

