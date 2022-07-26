import { ChangeEvent, useState, useEffect } from 'react';

import styled from 'styled-components';
import {
  validateEmail,
  validateName,
  validatePassword,
  validateConfirmPassword,
} from '../../../libs/validation';
import { Button } from '../../atoms/Button';
import { Input } from '../../atoms/Input';
import { Title } from '../../atoms/Title';
import { FormTemplate } from '../../templates/FormTemplate/FormTemplate';

export const RegistrationPage = () => {
  const [user, setUser] = useState({
    username: {
      value: '',
      error: '',
      // required: false,
    },
    email: {
      value: '',
      error: '',
      // required: true,
    },
    password: {
      value: '',
      error: '',
      // required: true,
    },
    confirmPassword: {
      value: '',
      error: '',
      // required: true,
    },
  });

  const [sendedUser, setSendedUser] = useState(false);

  const [posts, setPosts] = useState();

  const { username, email, password, confirmPassword } = user;

  useEffect(() => {
    if (sendedUser) {
      console.log('useEffect');
      fetch('https://studapi.teachmeskills.by/blog/posts/?limi3t=20')
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          setPosts(data.results);
        });
    }
  }, [sendedUser]);

  const onChange = (event: ChangeEvent<HTMLInputElement>, field: string) => {
    setUser({
      ...user,
      [field]: {
        value: event.target.value,
        error: '',
      },
    });
  };

  const onBlur = (field: string) => {
    console.log('onBlur', field);
    if (field === 'email') {
      const isValidEmail = validateEmail(email.value);
      setUser({
        ...user,
        [field]: {
          value: user[field].value,
          error: isValidEmail ? '' : 'Invalid email',
        },
      });
    }

    if (field === 'username') {
      const isValidUsername = validateName(username.value);
      setUser({
        ...user,
        [field]: {
          value: user[field].value,
          error: isValidUsername ? '' : 'Username should be more than 1',
        },
      });
    }

    if (field === 'password') {
      const isValidPassword = validatePassword(password.value);
      setUser({
        ...user,
        [field]: {
          value: user[field].value,
          error: isValidPassword ? '' : 'Password should be more than 7',
        },
      });
    }

    if (field === 'confirmPassword') {
      const isValidConfirmPassword = validateConfirmPassword(password.value, confirmPassword.value);
      setUser({
        ...user,
        [field]: {
          value: user[field].value,
          error: isValidConfirmPassword ? '' : 'confirmPassword !== password',
        },
      });
    }
  };

  const sendUser = () => {
    setSendedUser(true);
  };

  const inputValues = {
    value: username.value,
    type: 'text' as 'text',
    error: username.error,
    labelText: 'Username',
    placeholder: 'Placeholder',
    disabled: false,
  };

  // const isValidUser = () =>
  //   Object.values(user).reduce((acc, { value, error }: { value: string; error: string }) => {
  //     // const fieldObject = user[field];
  //     return value.length && !error.length;
  //   }, true);

  console.log({ posts });
  return (
    <FormTemplate>
      <Title text="Sign in" />
      {!sendedUser ? (
        <>
          <InputWrapper>
            <Input
              onBlur={() => onBlur('username')}
              onChange={(event) => onChange(event, 'username')}
              {...inputValues}
            />
          </InputWrapper>
          <InputWrapper>
            <Input
              onBlur={() => onBlur('email')}
              onChange={(event) => onChange(event, 'email')}
              {...inputValues}
              labelText="Email"
              value={email.value}
              error={email.error}
            />
          </InputWrapper>
          <InputWrapper>
            <Input
              onBlur={() => onBlur('password')}
              onChange={(event) => onChange(event, 'password')}
              {...inputValues}
              labelText="Password"
              type="password"
              value={password.value}
              error={password.error}
            />
          </InputWrapper>
          <InputWrapper>
            <Input
              onBlur={() => onBlur('confirmPassword')}
              onChange={(event) => onChange(event, 'confirmPassword')}
              {...inputValues}
              labelText="Confirm password"
              type="password"
              value={confirmPassword.value}
              error={confirmPassword.error}
            />
          </InputWrapper>
          <Button text="Sign Up" btnTheme="primary" onClick={() => sendUser()} />
        </>
      ) : (
        <>
          Posts
          <List></List>
        </>
      )}
    </FormTemplate>
  );
};

const InputWrapper = styled.div`
  margin-bottom: 20px;
`;

const List = styled.ul``;
