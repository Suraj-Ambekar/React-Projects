import React from 'react';
import { Fragment } from 'react';
import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile';

import { useSelector, useDispatch } from 'react-redux';
import { authActions } from './store/index';


function App(props) {

  const isAuth = useSelector(state => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const loginHandler = () => {
    dispatch(authActions.login());
  }

  const logoutHandler = () => {
    dispatch(authActions.logout());
  }

  return (
    <Fragment> 
      <Header />
      {!isAuth && <Auth />}
      {isAuth && <UserProfile />}
      <Counter />
    </Fragment>
  );
}

export default App;
