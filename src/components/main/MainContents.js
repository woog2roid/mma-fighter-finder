import React, { useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';
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
const Text = styled.div`
    padding-top: 95px;
    font-size:20px;
    font-weight: ${FontWeight.NORMAL};
    text-decoration: none;
    color: white;
    vertical-align:middle;
`;
const Input = styled.input`
    height: 50px;
    width: 240px;
    opacity: 0.9;
    font-size: 15px;
    border : 2px solid ${ColorCollection.CRIMSON_RED};
    border-radius : 5px;
    &:focus {
        outline: none;
    }
`;

const MainContents = () => {
    const history = useHistory();
    const onSubmit = useCallback(
        e => {
            e.preventDefault();
            history.push(`/search?fighter=${e.target.input.value}`);
        }, []);

    return (
        <Wrapper>
            <MainDescription>GET MMA FIGHTERS' INFO AND WIN THE BAT</MainDescription>
            <Circle>
                <Text>SEARCH FIGHTERS</Text>
                <form onSubmit={onSubmit}><Input name="input"/></form>
            </Circle>
        </Wrapper>
    );
};

export default MainContents;