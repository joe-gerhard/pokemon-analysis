import styled, { css } from 'styled-components';

export const StyledPageDisplay = styled.nav(({ theme }) => css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 50px);
  background: white;
  color: ${theme.dark};
`);