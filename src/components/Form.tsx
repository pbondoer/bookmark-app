import * as React from 'react';
import styled from 'styled-components';

export type Props = {
  children: React.ReactNode;
};

const Container = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > div {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  & > * {
    margin-top: ${p => p.theme.unit}px;
  }

  label {
    padding-bottom: ${p => p.theme.unit / 4}px;
  }
`;

export const Form = ({ children }: Props): JSX.Element => {
  return <Container>{children}</Container>;
};
Form.displayName = 'Form';

export default Form;
