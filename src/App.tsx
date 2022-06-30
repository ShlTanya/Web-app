import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ButtonExample, List } from './components/examples';

function App() {
  const onClick = () => {
    console.log('click');
  };

  const users = [
    { id: 0, name: 'Lucas' },
    { id: 1, name: 'William' },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
        <ButtonExample text="Button example" onClick={onClick} />
        <List list={users} />
      </header>
    </div>
  );
}

export default App;
