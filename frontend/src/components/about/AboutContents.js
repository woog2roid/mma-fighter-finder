import React from 'react';
import styled from 'styled-components';
import { FontWeight } from '../../utils/FontWeight';
import { ColorCollection } from '../../utils/ColorCollection';

const Wrapper = styled.div`
    background-color: ${ColorCollection.DARK_GRAY};
    text-align: center;
    @media all and (max-width:767px) {
        --min-height: 250px;
        padding: 5px;
        --padding: 5px;
        margin-top: 35vh;
        margin-bottom: 35vh;
        margin-left: 10px;
        margin-right: 10px;
    }
    @media all and (min-width:768px) and (max-width:1080px) {
        --min-height: 300px;
        padding: 10px;
        --padding: 10px;
        margin-top: calc((100vh - var(--min-height) -75px - (2 * var(--padding))) / 2);
        margin-bottom: calc((100vh - var(--min-height) -75px - (2 * var(--padding))) / 2);
        margin-left: 20px;
        margin-right: 20px;
    }
    @media all and (min-width:1081px) {
        height: 330px;
        --height: 330px;
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
        font-size: 25px;
    }
    @media all and (min-width:768px) and (max-width:1080px) {
        margin-top: 10px;
        font-size: 30px;        
    }   
    @media all and (min-width:1081px) {
        margin-top: 10px;
        font-size: 40px;
    }
`;
const Comain = styled.div`
    font-weight: ${FontWeight.BOLD};
    @media all and (max-width:767px) {
        margin-top: 10px;
        font-size: 13px;    
    }
    @media all and (min-width:768px) and (max-width:1080px) {
        margin-top: 10px;
        font-size: 20px;
    }   
    @media all and (min-width:1081px) {
        margin-top: 15px;
        font-size: 25px;
    }
`;
const Details = styled.div`
    font-weight: ${FontWeight.LIGHT};
    @media all and (max-width:767px) {
        font-size: 10px;
    }
    @media all and (min-width:768px) and (max-width:1080px) {
        font-size: 13px;
    }   
    @media all and (min-width:1081px) {        
        font-size: 15px;
    }
`;

const AboutContents = () => {
    return (
        <Wrapper>
            <Main>About Us</Main>
            
            <Comain>This site is created to make it easier to get for fighters' information.</Comain>
            <Details>MMA is not a major sport yet and the replay of undercard is not well prepared.</Details>
            <Details>So there is the inconveniences to get records of rising stars or recently debuted fighters.</Details>

            <Comain>You can easily search fighters by name.</Comain>
            <Details>And the information comes from fightmatrix.com.</Details>

            <Comain>Legal Issues</Comain>
            <Details>This site is made for the practice of Korean novice developer.</Details>
            <Details>I make it clear that this is not a gambling recommendation site and also,</Details>
            <Details>gambling related to MMA is not legal in Korea.</Details>
        </Wrapper>
    );
};

export default AboutContents;