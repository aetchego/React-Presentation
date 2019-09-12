import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { SnackbarProvider } from "notistack";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import view from './redux/reducers/viewReducer';
import contractsInfo from './redux/reducers/contractsInfoReducers';
import theme from './style/bluePalette';

const viewReducer = { view: view };
const contractsInfoReducer = {contractsInfo: contractsInfo};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const appReducer = combineReducers({ ...viewReducer, ...contractsInfoReducer });
const store = createStore(appReducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <SnackbarProvider maxSnack={3} preventDuplicate>
                <App />
            </SnackbarProvider>
        </ThemeProvider>
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
