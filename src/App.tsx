import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  Title,
  ButtonMenuHamburger,
  Link,
  Button,
  BtnTheme,
  ButtonSearch,
  ButtonUserName,
  ButtonLike,
} from './components/atom';
import { ReactComponent as FavoriteIcon } from './assets/icon/FavoriteIcon.svg';

function App() {
  let isMyOpen = true;

  const onClick = () => {
    isMyOpen = !isMyOpen;
    console.log(isMyOpen);
  };

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
        <Button btnTheme={BtnTheme.Primary} text="Primary" onClick={onClick} />
        <Button btnTheme={BtnTheme.Secondary} text="Secondary" onClick={onClick} />
        <Button btnTheme={BtnTheme.Secondary2} text="Secondary2" onClick={onClick} />
        <Button
          btnTheme={BtnTheme.WithIcon}
          text="WithIcon"
          icon={<FavoriteIcon />}
          onClick={onClick}
        />
        <Button btnTheme={BtnTheme.Primary} text="Primary dis" disabled onClick={onClick} />
        <Button btnTheme={BtnTheme.Secondary} text="Secondary  dis" disabled onClick={onClick} />
        <Button btnTheme={BtnTheme.Secondary2} text="Secondary2  dis" disabled onClick={onClick} />
        <Button
          btnTheme={BtnTheme.WithIcon}
          disabled
          text="WithIcon"
          icon={<FavoriteIcon />}
          onClick={onClick}
        />
        <ButtonUserName isAuthorized={false} userName="" onClick={onClick} />
        <ButtonUserName isAuthorized={true} userName="Tatsiana shl" onClick={onClick} />
        <ButtonMenuHamburger isOpen={isMyOpen} onClick={onClick} />
        <ButtonSearch onClick={onClick} />
        <ButtonLike isLike disabled={false} onClick={onClick} />
        <ButtonLike isLike disabled onClick={onClick} />
        <ButtonLike isLike={false} disabled={false} onClick={onClick} />
        <ButtonLike isLike={false} disabled onClick={onClick} />
      </header>
    </div>
  );
}

export default App;
