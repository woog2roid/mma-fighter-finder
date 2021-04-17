import { createGlobalStyle } from 'styled-components';
import background from '../images/ufc_octagon.jpg';

const Global = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@500&display=swap');
    body {
        margin: 0;
        font-family: 'Noto Sans KR', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-image: url(${background}); 
        background-size: cover;
        color: white;
    }
`;

export default Global;