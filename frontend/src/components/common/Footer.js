import React from 'react';
import styled from 'styled-components';
import GithubMark from '../../images/GitHub-Mark.svg';
import { ColorCollection } from '../../utils/ColorCollection';
import { FontWeight } from '../../utils/FontWeight';


const FooterWrapper = styled.div`
    background-color: ${ColorCollection.DARK_GRAY};
    width: 100%;
    @media all and (max-width:767px) {
        height: 25px;
    }
    @media all and (min-width:768px) and (max-width:1080px) {
        height: 30px;
    }
    @media all and (min-width:1081px) {
        height: 30px;
    }
`;
const Profile = styled.div`
    padding: 5px;
    text-align: center;
    font-weight: ${FontWeight.LIGHTER};
    @media all and (max-width:767px) {
        font-size: 13px;
    }
    @media all and (min-width:768px) and (max-width:1080px) {
        font-size: 15px;
    }
    @media all and (min-width:1081px) {
        font-size: 15px;
    }
`;

const Footer = () => {
    return (
        <FooterWrapper>
            <Profile>
                Made By Woog2roid <a href='https://github.com/woog2roid/mma-fighter-finder' target='_blank' rel="noreferrer"><img src={ GithubMark } width = '12px' hegiht = '12px'/></a>
            </Profile>
        </FooterWrapper>
    );
};

export default Footer;