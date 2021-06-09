import * as React from 'react';
import styled from 'styled-components';

export type Props = {
  children?: React.ReactNode;
};

const LayoutContainer = styled.div`
  width: 100%;
  max-width: ${p => p.theme.maxContentSize};

  margin-top: ${p => p.theme.topSpacing};
`;

export const Layout: React.FC<Props> = props => {
  return <LayoutContainer>{props.children}</LayoutContainer>;
};
Layout.displayName = 'Layout';

export default Layout;
