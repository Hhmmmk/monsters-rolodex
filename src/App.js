import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: { firstName: 'Yihua', lastName: 'Zhang'},
      company: 'ZTM'
    }

  }

  render () {

    const { name, company } = this.state;

    return (
      <div className="App">
        <div className='App-header'>
          <img src={ logo } className='App-logo' alt='logo' />
          <p>Hi { name.firstName } { name.lastName }, I work at { company }</p>
          <button
            onClick={
              () => {
                this.setState(
                  () => {
                    return {
                      name: {firstName: 'Andre', lastName: 'Neaogie'}
                    };
                  },
                  () => {
                    console.log(this.state)
                  }
                );
              }
            }
          >Change Name</button>
        </div>
      </div>
    );
  }
}

export default App;
