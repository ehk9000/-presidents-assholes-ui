import React from 'react';
import PresContainer from '../../containers/PresContainer/PresContainer';
import './App.scss';

const App = () => {
    return (
      <div className="App">
        <header>
          <h1>Presidents and Assholes</h1>
        </header>
        <PresContainer/>
      </div>
    );
}

export default (App);
