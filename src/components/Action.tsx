import * as React from 'react';
import styled from 'styled-components';
import { setLinkProps } from 'hookrouter';

export type Props = {
  children?: React.ReactNode;
  icon?: React.ReactNode;
  title: string;
  href?: string;
  onClick?: () => void;
};

const Container = styled.a`
  border: 0;
  box-sizing: content-box;

  height: ${p => p.theme.unitPx};
  padding: ${p => p.theme.unit / 4}px ${p => p.theme.unit / 4}px;

  display: flex;
  align-items: center;

  cursor: pointer;
  user-select: none;

  background: none;
  color: ${p => p.theme.colors.text};

  transition: opacity 0.2s linear;

  opacity: 0.5;

  &:hover {
    opacity: 1;
  }
`;

const Icon = styled.div<{ hasContent: boolean }>`
  height: ${p => p.theme.unitPx};
  margin-right: ${p => (p.hasContent ? p.theme.unit / 4 : 0)}px;
`;

export const Action: React.FC<Props> = props => {
  return (
    <Container
      onClick={props.onClick}
      {...(props.href &&
        setLinkProps({ href: props.href, onClick: props.onClick }))}
      role="button"
      title={props.title}
    >
      <Icon hasContent={!!props.children}>{props.icon || null}</Icon>
      {props.children || null}
    </Container>
  );
};

export default Action;
