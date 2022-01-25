import React from 'react';
import styled from 'styled-components';
import { ColorCollection } from '../../styles/ColorCollection';
import { FontWeight } from '../../styles/FontWeight';

const Wrapper = styled.div`
    background-color: ${ColorCollection.DARK_GRAY};
    text-align: center;
    @media all and (max-width:767px) {
        --min-height: 80px;
        padding: 5px;
        --padding: 5px;
        margin-top: 40vh;
        margin-bottom: 40vh;
        margin-left: 10px;
        margin-right: 10px;
    }
    @media all and (min-width:768px) and (max-width:1080px) {
        --min-height: 80px;
        padding: 10px;
        --padding: 10px;
        margin-top: calc((100vh - var(--min-height) -75px - (2 * var(--padding))) / 2);
        margin-bottom: calc((100vh - var(--min-height) -75px - (2 * var(--padding))) / 2);
        margin-left: 20px;
        margin-right: 20px;
    }
    @media all and (min-width:1081px) {
        height: 130px;
        --height: 130px;
        padding: 20px;
        --padding: 20px;
        margin-top: calc((100vh - var(--height) - 80px - (2 * var(--padding))) / 2);
        margin-bottom: calc((100vh - var(--height) - 80px - (2 * var(--padding))) / 2);
        margin-left: 140px;
        margin-right: 140px;
    }
`;
const Main = styled.div`
    font-weight: ${FontWeight.BOLD};
    font-style: italic;
    @media all and (max-width:767px) {
        margin-top: 5px;
        font-size: 20px;
    }
    @media all and (min-width:768px) and (max-width:1080px) {
        margin-top: 8px;
        font-size: 30px;   
    }   
    @media all and (min-width:1081px) {
        margin-top: 10px;
        font-size: 40px;
    }
`;
const Detail = styled.div`
    font-weight: ${FontWeight.BOLD};
    @media all and (max-width:767px) {
        margin-top: 5px;
        margin-bottom: 10px;
        font-size: 10px;
    }
    @media all and (min-width:768px) and (max-width:1080px) {
        margin-top: 5px;
        margin-bottom: 10px;
        font-size: 15px;   
    }   
    @media all and (min-width:1081px) {
        margin-top: 15px;
        font-size: 25px;
    }
`;
const NotFound = () => {
    return (
        <Wrapper>
            <Main>404 Not Found</Main>
            <Detail>The site configured at this address does not contain the requested file.</Detail>
        </Wrapper>
    );
};

export default NotFound;