import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import './stylesheets/reset.css';
import './stylesheets/index.css';
import './stylesheets/navigation.css';
// import './stylesheets/mainpage.css';
import App from './App';

const store = configureStore();

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
