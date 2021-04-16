import React, { useState, useEffect } from 'react';
import qs from 'qs';
import axios from 'axios';
import styled from 'styled-components';
import { ColorCollection } from '../../utils/ColorCollection';
import { FontWeight } from '../../utils/FontWeight';
import FighterCard from './FighterCard';

const LoadingWrapper = styled.div`
    min-height: calc(100vh - 680px);
    margin: 280px 200px 280px 200px;
    padding: 20px;
    background-color: ${ColorCollection.DARK_GRAY};
    text-align: center;
    font-weight: ${FontWeight.BOLD};
    font-size: 40px;
    font-style: italic;
`;
const ErrorWrapper = styled.div`
    min-height: calc(100vh - 660px);
    margin: 270px 200px 270px 200px;
    padding: 20px;
    background-color: ${ColorCollection.DARK_GRAY};
    text-align: center;
`;

const ErrorMain = styled.div`
    font-weight: ${FontWeight.BOLD};
    font-size: 40px;
    font-style: italic;
`;
const ErrorDetails = styled.div`
    font-size: 25px;
    font-weight: ${FontWeight.BOLD};
`;
const Wrapper = styled.div`
    min-height: calc(100vh - 320px);
    margin: 100px 200px 100px 200px;
    padding: 20px;
    background-color: ${ColorCollection.DARK_GRAY};
`;

const SearchContents = ({ location }) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const query = qs.parse(location.search, {
                    ignoreQueryPrefix: true
                });
                const fighter = query.fighter;
                const response = await axios.get(`http://193.123.228.52:3000?fighter=${fighter}`);
                setData(response.data);
                setLoading(false);
            } catch (e) {
                console.log(e);
            }
        }
        fetchData();
    }, []);
    
    console.log(data);
    if (loading) {
        return (<LoadingWrapper>Loading...</LoadingWrapper>);
    } else if (!data) {
        return (
            <ErrorWrapper>
                <ErrorMain>We can't find your fighter</ErrorMain>
                <ErrorDetails>Please check keyword again</ErrorDetails>
            </ErrorWrapper>
        );
    } else {
        return ( 
            <Wrapper><FighterCard data={data}/></Wrapper>
        );
    }
};

export default SearchContents;