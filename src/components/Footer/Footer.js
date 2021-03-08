import React from 'react';
import styled from 'styled-components';
import GithubMark from '../../images/GitHub-Mark.svg';

const FooterWrapper = styled.div`
    background-color: black;
    width: 100%;
`;
const Profile = styled.div`
    padding: 5px;
    color: white;
    font-size: 15px;
    text-align: center;
`;

const Footer = () => {
    return (
        <FooterWrapper>
            <Profile>
                Made By Woog2roid <a href='https://github.com/woog2roid/mma-fighter-finder' target='_blank'><img src={ GithubMark } width = '12px' hegiht = '12px'/></a>
            </Profile>
        </FooterWrapper>
    );
};

export default Footer;