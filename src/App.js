import React from 'react';
import './App.css';
import homePage from './container/homePage';
import { BrowserRouter as Router , Switch, Route} from 'react-router-dom';


function App() {

  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path="/" exact component={homePage}></Route>
        </Switch>
    </div>
    </Router>

  );
}

export default App;