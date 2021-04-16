import React from 'react';
import styled from 'styled-components';
import { ColorCollection } from '../../utils/ColorCollection';
import { FontWeight } from '../../utils/FontWeight';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
    min-height: calc(100vh - 600px);
    margin: 240px 200px 240px 200px;
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
const Detail = styled.div`
    margin-top: 15px;
    font-size: 25px;
    font-weight: ${FontWeight.BOLD};
`;
const NotFoundContents = () => {
    return (
        <Wrapper>
            <Main>404 Not Found</Main>
            <Detail>The site configured at this address does not contain the requested file.</Detail>
        </Wrapper>
    );
};

export default NotFoundContents;