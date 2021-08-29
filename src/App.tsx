import React from 'react';
import './App.css';
import Form from './components/entry'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>important or not</h1>
        <p>enter activity details below</p>
        <Form name='Name' when='When' important='is this important' urgent='is this urgent'/>
      </header>

      
    </div>
  );
}

export default App;
