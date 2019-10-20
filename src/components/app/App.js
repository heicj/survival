import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from '../home/Home';


class App extends PureComponent{

  render(){
    return (
      <div>
        <Router>
          <div>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Redirect to='/'/>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default connect(
  null,
  null
)(App);