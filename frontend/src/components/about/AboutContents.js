import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ColorCollection } from '../../utils/ColorCollection';
import { FontWeight } from '../../utils/FontWeight';

const AboutWrapper = styled.div`
    height: calc(100vh - 400px);
    margin: 140px 200px 140px 200px;
    padding: 20px;
    background-color: ${ColorCollection.DARK_GRAY};
    text-align: center;
`;
const Main = styled.div`
    margin-top: 10px;
    font-weight: ${FontWeight.BOLD};
    font-size: 40px;
    font-style: italic;
`;
const Comain = styled.div`
    margin-top: 15px;
    font-size: 25px;
    font-weight: ${FontWeight.BOLD};
`;
const Details = styled.div`
    font-size: 15px;
    font-weight: ${FontWeight.LIGHT};
`;

const AboutContents = () => {
    return (
        <AboutWrapper>
            <Main>About Us</Main>
            
            <Comain>This site is created to make it easier to get for fighters' information.</Comain>
            <Details>MMA is not a major sport yet and the replay of undercard is not well prepared.</Details>
            <Details>So there is the inconveniences to get records of rising stars or recently debuted fighters.</Details>

            <Comain>You can easily search fighters by name.</Comain>
            <Details>And the information comes from fightmatrix.com.</Details>

            <Comain>Legal Issues</Comain>
            <Details>This site is made for the practice of Korean novice developer.</Details>
            <Details>
                I Make it clear that this is not a gambling recommendation site and also, gambling related to MMA is not legal in Korea.
            </Details>
        </AboutWrapper>
    );
};

export default AboutContents;