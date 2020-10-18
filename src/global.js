import { normalize } from 'polished';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap');
${normalize()}
*{
    padding:0;
    margin:0;
    box-sizing:border-box;

}
html{
    font-size:66.7%;
    
}
body{
    font-size:1.4rem;
    font-family: 'Open Sans', sans-serif;
}
`;

export default GlobalStyle;
