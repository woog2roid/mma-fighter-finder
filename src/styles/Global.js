import { createGlobalStyle } from 'styled-components';
import background from '../images/ufc_octagon.jpg';

const Global = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@500&display=swap');
    body {
        margin: 0;
        font-family: 'Noto Sans KR', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
	    height: 100vh;
		width: 100vw;
		background-image: url(${background}); 
		background-position: center;
		background-attachment: fixed;
        color: white;
    }
	
	@media all and (max-width:767px) {
        body {
			background-size: 300% 100%;
		}
    }
    @media all and (min-width:768px) and (max-width:1080px) {
        body {
			background-size: 150% 100%;
		}
    }
    @media all and (min-width:1081px) {
        body {
			background-size: cover;
		}
    }
`;

export default Global;
