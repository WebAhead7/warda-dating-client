import React from 'react';
import Login from '../src/components/Login';
import Register from './components/Register';
import NewFeeds from './components/NewFeeds';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import ReactDOM from 'react-dom';
import Home from './Home';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Login" component={Login} />
          <Route path="/Register" component={Register} />
          <Route path="/NewFeeds" component={NewFeeds} />
        </Switch>
      </div>

    </BrowserRouter>

  )
};

export default App;
