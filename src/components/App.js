import React, { Component } from 'react';
import {HashRouter, Route} from 'react-router-dom';

import AppContainer from './AppContainer';

import {auth} from '../firebase/firebase';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      authUser: null,
    }
  }
  
  componentDidMount() {
    auth.onAuthStateChanged( (user) => {
      if(user) {
        this.setState({authUser: user});
        console.log('someone is logged in');
      } else {
        console.log('no one is logged in');
        this.setState({authUser: null});
      }
    })
  }
  
  render() {
    
    var appStyle = {
      'padding-left':'20px',  
    };
    
    return (
      <HashRouter>
        <div style={appStyle} className="App">
          <Route path='/' component={AppContainer} />
        </div>
      </HashRouter>
    );
  }
}

export default App;
