import React from 'react';
import { Fragment } from 'react';
import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile';



function App() {
  return (
    <Fragment> 
      <UserProfile />
      <Header />
      <Auth />
      <Counter />
    </Fragment>
  );
}

export default App;
