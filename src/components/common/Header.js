import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
    display: flex;
`;

const Header = (props) => {
    return (
        <HeaderWrapper>
            메인화면
            검색
        </HeaderWrapper>
    );
};

export default Header;