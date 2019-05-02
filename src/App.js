import React, { Component } from 'react';
import './App.css';
import routes from './routes';
import { store } from './store';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import { MainContainer } from './components';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <div className="App">
              <MainContainer/>
          </div>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
