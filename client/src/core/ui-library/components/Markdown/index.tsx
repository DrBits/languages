import React, { ReactNode } from 'react';
import ReactMarkDown from 'react-markdown';
import Text from '../Text';

import { Container, StyledContainer, StyledLink, StyledText } from './styles';
import { MarkDownContainerProps, MarkDownProps } from './types';

const MarkdownHeading = ({
  children,
  ...props
}: {
  level: number;
  children: ReactNode;
}) => {
  if (props.level === 1) {
    return (
      <StyledText variant="heading" as="h2">
        {children}
      </StyledText>
    );
  }
  const { heading: Heading } = ReactMarkDown.renderers;

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Heading {...props}>{children}</Heading>;
};

const MarkDownCode = ({ children }: { children: ReactNode }) => (
  <Container>
    <Text as="code" variant="code">
      {children}
    </Text>
  </Container>
);
const MdText = ({ children }: { children: ReactNode }) => (
  <span>{children}</span>
);
const MarkDownParagraph = ({ children }: { children: ReactNode }) => (
  <p>{children}</p>
);

const MarkDownLink = ({
  children,
  href
}: {
  href: string;
  children: ReactNode;
}) => {
  if (!href) {
    return null;
  }

  return (
    <StyledLink variant="info" href={href}>
      {children}
    </StyledLink>
  );
};

const rootRenderer =
  ({ inline, className }: MarkDownContainerProps) =>
  ({ children }: { children: ReactNode[] }) =>
    (
      <StyledContainer inline={inline} className={className}>
        {children}
      </StyledContainer>
    );

const Markdown = ({
  source,
  linkTarget,
  escapeHtml = true,
  inline,
  className
}: MarkDownProps) => (
  <ReactMarkDown
    source={source}
    renderers={{
      heading: MarkdownHeading,
      inlineCode: MarkDownCode,
      link: MarkDownLink,
      paragraph: MarkDownParagraph,
      root: rootRenderer({ inline, className }),
      text: MdText
    }}
    linkTarget={linkTarget}
    escapeHtml={escapeHtml}
  />
);

export default Markdown;
