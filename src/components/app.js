import React, { Component } from 'react';

import LinkList from './link_list';


class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="App-header">
              <h1> Welcome to JW's project home page </h1>
              <p className="App-intro">
                  As I do tutorial projects, they will be sequentially added here. 
              </p>
          </div>
          <LinkList/>

      </div>
    );
  }
}

export default App;
