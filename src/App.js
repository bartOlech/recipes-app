import React, { Component } from 'react';
import './index.css';

import MainContent from './components/MainContent.js';

class App extends Component {
  render() {
    return (
      <div>
        <header className='app-header'><div className='icon'></div><h1>Strefa przepisów</h1></header>
        
        <MainContent/>
      </div>
    );
  }
}

export default App;
