import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ColorCollection } from '../../utils/ColorCollection';
import { FontWeight } from '../../utils/FontWeight';

const ContentsBlock = styled.div`
    min-height: calc(100vh - 80px);
`;
const MainDescription = styled.div`
    padding-top: 140px;
    text-align: center;
    color: white;
    font-size: 30px;
    font-weight: ${FontWeight.LGIHT};
    padding-bottom: 20px;
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
    font-weight: ${FontWeight.NORMAL};
    text-decoration: none;
    color: white;
    vertical-align:middle;
    line-height:300px;
    &:hover {
        color: ${ColorCollection.CRIMSON_RED};
    }
`;

const Contents = () => {
    return (
        <ContentsBlock>
            <MainDescription>FIND MMA FIGHTER'S INFO AND WIN THE BAT</MainDescription>
            <Circle><Nav to="/search">SEARCH YOUR FIGHTER</Nav></Circle>
        </ContentsBlock>
    );
};

export default Contents;