import React from 'react';
import { Text, TextBox } from '@app/core/ui-library';

import { Container, BaseCenter } from './styles';

const Home = () => {
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
          <TextBox label="label" size="medium" />
        </div>
      </BaseCenter>
    </Container>
  );
};

export default Home;
