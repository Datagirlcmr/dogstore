import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';
import Navbar from './Navbar';
import DogList from '../container/DogContainer';
import DogDetails from '../container/DogDisplay';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" exact component={DogList} />
        <Route path="/categories/:name" component={DogDetails} />
      </Switch>
    </div>
  );
}

export default App;
