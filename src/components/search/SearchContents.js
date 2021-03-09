import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ColorCollection } from '../../utils/ColorCollection';
import { FontWeight } from '../../utils/FontWeight';

const Wrapper = styled.div`
    min-height: calc(100vh - 300px);
    margin: 110px 200px 110px 200px;
    background-color: ${ColorCollection.DARK_GRAY};
`;
const MainDescription = styled.div`
    padding-top: 40px;
    text-align: center;
    color: white;
    font-size: 30px;
    font-weight: ${FontWeight.BOLD};
    padding-bottom: 25px;
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
const Form = styled.form`
    line-height:300px;
`;
const Input = styled.input`
    height: 50px;
    width: 240px;
    opacity: 0.9;
    font-size: 15px;
`;

const MainContents = () => {
    return (
        <Wrapper>
            <MainDescription>GET MMA FIGHTERS' INFO AND WIN THE BAT</MainDescription>
            <Circle><Form><Input placeholder="ENTER FIGHTER'S NAME"/></Form></Circle>
        </Wrapper>
    );
};

export default MainContents;