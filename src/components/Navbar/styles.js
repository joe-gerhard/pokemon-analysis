import styled, { css } from 'styled-components';

export const StyledNavbar = styled.nav(({ theme }) => css`
  display: flex;
  align-items: center;
  height: 50px;
  background: ${theme.primary};
  color: ${theme.light};
`);