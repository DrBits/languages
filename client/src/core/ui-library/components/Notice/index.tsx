import React from 'react';

import { Container } from './styles';
import { NoticeProps } from './types';

import Icon from '../Icon';
import Markdown from '../Markdown';

const Notice = ({ children, className }: NoticeProps) => (
  <Container className={className}>
    <Icon name="information-outline" size={20} />
    {typeof children === 'string' ? (
      <Markdown source={children} linkTarget="_blank" />
    ) : null}
  </Container>
);

export default Notice;
