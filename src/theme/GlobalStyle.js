import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	body{
    background: ${({ theme }) => theme.bgColor} ;
    color: ${({ theme }) => theme.textColor} ;
    overflow-x: hidden;
    transition: background ease 0.2s;
	}
  `;
