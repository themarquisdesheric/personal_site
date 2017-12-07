import React, { Component } from 'react';
import './App.css';
import Block from './components/Block';
import Columns from './components/Columns';
import Column from './components/Column';

class App extends Component {
  render() {
    return (
      <Block>
        <Columns>
          <Column>
            
          </Column>
          <Column>
            
          </Column>
        </Columns>
      </Block>
    );
  }
}

export default App;
