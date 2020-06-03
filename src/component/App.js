import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';
import Navbar from './Navbar';
import DogList from '../container/DogContainer';
import FilterContainer from '../container/FilterContainer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" exact component={DogList} />
        <Route path="/categories/" component={FilterContainer} />
      </Switch>
    </div>
  );
}

export default App;
