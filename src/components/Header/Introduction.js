import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import BackgroundImage from '../../images/ufc_octagon.jpg';
import { ColorCollection } from '../../color/ColorCollection';

const IntroWrapper = styled.div`
    position: relative;
    background-color: black;
`;
const ImageBlock = styled.div`
    opacity: 0.6;
`;
const ContentsBlock = styled.div`
	text-align: center;
    color: white;
    font-size: 30px;
    font-weight: 600;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate( -50%, -50% );
    line-height: 60px;
`;
const Circle = styled.div`
    background-color:${ColorCollection.CRIMSON_RED};
    width:300px;
    height:300px;
    opacity: 0.8;
    border-radius:150px;
    text-align:center;
    margin:0 auto;
`;
const Nav = styled(Link)`
    font-size:20px;
    text-decoration: none;
    color: white;
    vertical-align:middle;
    line-height:300px;
    &:hover {
        color: ${ColorCollection.CRIMSON_RED};
    }
`;

const Introduction = () => {
    return (
        <IntroWrapper>
            <ImageBlock><img src={BackgroundImage} width = '100%'/></ImageBlock>
            <ContentsBlock>
                FIND MMA FIGHTER'S INFO AND WIN THE BAT
                <Circle><Nav to ="/search">SEARCH YOUR FIGHTER</Nav></Circle>
            </ContentsBlock>
        </IntroWrapper>
    );
};

export default Introduction;