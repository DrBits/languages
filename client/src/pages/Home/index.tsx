import React, { useState } from 'react';
import { useUsersStore } from '@app/core/stores/users.store';
import { Text, TextBox, Button } from '@app/core/ui-library';

import { Container, BaseCenter } from './styles';

const Home = () => {
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: ''
  });
  const signup = useUsersStore((state) => state.signup);

  const onClickSignUp = () => {
    signup(user);
  };

  return (
    <Container>
      <BaseCenter>
        <Text as="div" variant="body">
          This is a basic Text
        </Text>
        <Text as="div" variant="heading">
          Whereas a common understanding of these rights and freedoms is
        </Text>
        <div style={{ marginTop: '2rem' }}>
          <TextBox
            label="username"
            size="medium"
            onChange={(value) =>
              setUser((prevState) => ({ ...prevState, username: value }))
            }
          />
        </div>
        <div style={{ marginTop: '2rem' }}>
          <TextBox
            label="Email"
            size="medium"
            onChange={(value) =>
              setUser((prevState) => ({ ...prevState, email: value }))
            }
          />
        </div>
        <div style={{ marginTop: '2rem' }}>
          <TextBox
            label="Password"
            size="medium"
            onChange={(value) =>
              setUser((prevState) => ({ ...prevState, password: value }))
            }
          />
        </div>
        <div style={{ marginTop: '2rem' }}>
          <Button size="medium" onClick={onClickSignUp}>
            SignUp
          </Button>
        </div>
      </BaseCenter>
    </Container>
  );
};

export default Home;
