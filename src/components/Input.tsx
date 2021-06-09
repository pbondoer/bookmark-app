import * as React from 'react';
import styled from 'styled-components';

export type Props = {
  icon?: React.ReactNode;
  onChange?: (_e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  placeholder?: string;
  value?: string;
};

export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: ${p => p.theme.colors.light};
  border-radius: ${p => p.theme.unitPx};

  height: ${p => p.theme.unitPx};
  padding: ${p => p.theme.unit / 4}px ${p => p.theme.unit / 2}px;
`;

export const InnerInput = styled.input<{ hasIcon: boolean }>`
  border: 0;
  padding: 0;
  background-color: transparent;
  color: ${p => p.theme.colors.text};

  margin-left: ${p => (p.hasIcon ? p.theme.unit / 4 : 0)}px;
  width: 100%;
`;

export const Input: React.FC<Props> = ({
  icon,
  onChange,
  name,
  placeholder,
  value,
}) => {
  return (
    <Container>
      {icon || null}
      <InnerInput
        hasIcon={!!icon}
        onChange={onChange}
        name={name}
        placeholder={placeholder}
        value={value}
      />
    </Container>
  );
};

export default Input;
