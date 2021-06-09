import styled from 'styled-components';

export const Status = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > * {
    padding-top: ${p => p.theme.unit / 2}px;
  }
`;

export default Status;
