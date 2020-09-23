import React from 'react';
import './App.css';
import Feed from './Feed';
import Header from './Header';
import Login from './Login';
import Sidebar from './Sidebar';
import Widget from './Widget';

function App() {
    const user = null;

  return (

    <div className="app">
    {!user ? <Login /> : (
      <Login>
      <Header />
      <div className="app__body">
        <Sidebar />
        <Feed />
        <Widget />
      </div>
      </Login>
    )}

    </div>
  );
}

export default App;
