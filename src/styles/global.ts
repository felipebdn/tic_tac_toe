import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus{
    outline: 0;
    box-shadow: 0 0 0 2px blue;
  }

  body{
    background: #000;
    color: #fff;
    -webkit-font-smoothing: antialiased;
  }

  body, input, extarea, button{
    font-weight: 400;
    font-size: 1rem;
  }
`