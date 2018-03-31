import React, { Component } from 'react';

import AppContainer from './AppContainer';

class App extends Component {
  render() {
    
    var appStyle = {
      'padding-left':'20px',  
    };
    
    return (
      <div style={appStyle} className="App">
        <AppContainer />
      </div>
    );
  }
}

export default App;
