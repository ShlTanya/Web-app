import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ButtonExample, List } from './components/examples';
import { Title, ButtonMenuHamburger, Link } from './components';

function App() {
  let isMyOpen = true;

  const onClick = () => {
    isMyOpen = !isMyOpen;
    console.log(isMyOpen);
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
        <Link text="Learn React My" url="https://reactjs.org" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
        <Title text="Sign In" />
        <ButtonMenuHamburger isOpen={isMyOpen} onClick={onClick} />
        <ButtonExample text="Button example" onClick={onClick} />
        <List list={users} />
      </header>
    </div>
  );
}

export default App;
