import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { ColorCollection } from '../../utils/ColorCollection';
import { FontWeight } from '../../utils/FontWeight';

const Wrapper = styled.div`
    min-height: calc(100vh - 260px);
    margin: 100px 200px 100px 200px;
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
    margin-bottom: 20px;
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
const Keyword = styled.div`
    text-align: center;
    color: white;
    font-size: 15px;
    font-weight: ${FontWeight.LIGHTER};
    font-style: italic;
`;

const MainContents = () => {
    const history = useHistory();
    const onSubmit = useCallback(
        e => {
            e.preventDefault();
            history.push(`/mma-fighter-finder/search?fighter=${e.target.input.value}`);
        }, [history]
    );

    return (
        <Wrapper>
            <MainDescription>GET MMA FIGHTERS' INFO AND WIN THE BAT</MainDescription>
            <Circle>
                <Text>SEARCH FIGHTERS</Text>
                <form onSubmit={onSubmit}><Input name="input" autoComplete="off"/></form>
            </Circle>
            <Keyword>"I recommend searching by full name or nick name."</Keyword>
            <Keyword>
                Because the data is parsed and imported from sherdog, you can find it even if you type just a keyword, but accuracy is not guaranteed.
            </Keyword>
        </Wrapper>
    );
};

export default MainContents;