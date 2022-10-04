import React from 'react';
import {Provider} from 'react-redux'
import logo from './logo.svg';
import store from './redux/store'
import './App.css';
import CakeContainer from './components/CakeContainer';
import IcecreamContainer from './components/IcecreamContainer'

function App() {
  return (
    <Provider store={store}>
    <div className="App">
    <CakeContainer/>
    <IcecreamContainer/>
    </div>
    </Provider>
  );
}

export default App;
