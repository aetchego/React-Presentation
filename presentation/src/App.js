import React from 'react';
import './App.css';
import Home from './components/Home';
import {useSelector, useDispatch} from "react-redux";
import {useSnackbar} from "notistack";
import {clearNotifications} from './redux/reducers/viewReducer';
import { selectError } from './redux/selectors/viewSelector';
import { getAdossement } from './redux/reducers/contractsInfoReducers';

function useNotifications() {
  const notifications = useSelector(selectError);
  const {enqueueSnackbar, closeSnackbar} = useSnackbar();
  const dispatch = useDispatch();
  notifications.forEach(({message, options}) => {
          const key = enqueueSnackbar(message, options);
          setTimeout(() => closeSnackbar(key), 8000);
      }
  );
  if (notifications.length > 0) {
      dispatch(clearNotifications);
  }
}

function App() {
  useNotifications();
  useDispatch(getAdossement());
  return (
      <Home/>
  );
}

export default App;