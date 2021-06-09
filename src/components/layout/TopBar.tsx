import * as React from 'react';
import styled from 'styled-components';

import { Search } from 'react-feather';

import { useTheme } from '~/hooks';

import Input from '../Input';

export type Props = {
  actions?: React.ReactNodeArray;
  onSearch?: (_query: string) => void;
};

const Container = styled.header`
  width: 100%;
  height: ${p => p.theme.unit * 2}px;

  display: flex;

  align-items: center;
  justify-content: space-between;
`;

const Inner = styled.div`
  display: flex;

  align-items: center;
`;

export const TopBar: React.FC<Props> = ({ actions, onSearch }) => {
  const theme = useTheme();

  return (
    <Container>
      {onSearch && (
        <Input
          icon={<Search size={theme.unit} />}
          onChange={e => onSearch(e.currentTarget.value)}
          name="Search"
        />
      )}
      {actions && <Inner>{actions}</Inner>}
    </Container>
  );
};
TopBar.displayName = 'TopBar';

export default TopBar;
