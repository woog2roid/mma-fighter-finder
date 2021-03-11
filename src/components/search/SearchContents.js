import React, { useState, useCallback, useEffect } from 'react';
import qs from 'qs';
import axios from 'axios';
import styled from 'styled-components';
import { ColorCollection } from '../../utils/ColorCollection';
import { FontWeight } from '../../utils/FontWeight';

const LoadingWrapper = styled.div`
    color: white;
`;
const ErrorWrapper = styled.div`
    color: white;
`;
const Wrapper = styled.div`
    color: white;
`;


const SearchContents = ({ location }) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    //qs + axios로 api server에서 data 받아오기
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const query = qs.parse(location.search, {
                    ignoreQueryPrefix: true
                });
                const fighter = query.fighter;
                const response = await axios.get(`http://127.0.0.1:3000?fighter=${fighter}`);
                setData(response);
            } catch (e) {
                console.log(e);
            }
            setLoading(false);
        }
        fetchData();
    }, []);
    
    if (loading) { // 아직 로딩 중인 경우
        return (<LoadingWrapper>Loading...</LoadingWrapper>);
    } else if (data === null) { // 선수가 없는 경우...
        alert(data);
        return (
            <ErrorWrapper>
                vf
            </ErrorWrapper>
        );
    }
    return ( // 정상적으로 내보내야 하는 경우...
        <Wrapper>
            hi there?
        </Wrapper>
    );
};

export default SearchContents;