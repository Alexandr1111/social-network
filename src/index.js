import React from "react";
import ReactDOM from "react-dom";
import store from './redux/redux-store';
import App from "./App";
import { HashRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

ReactDOM.render(
    // Разные люди хотят видеть здесь иные значения, поэтому нельзя 'https://alexandr1111.github.io/social-network',
    // не будет работать на localhost
    // hashRouter - работает на якорях как раньше, решает проблему с 404 при обновлении страницы после
    // https://alexandr1111.github.io/social-network/profile(или другие адреса)
    <Router basename={process.env.PUBLIC_URL}>
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

