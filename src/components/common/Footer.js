import React from 'react';
import styled from 'styled-components';
import GithubMark from '../../images/GitHub-Mark.svg';

const FooterContents = styled.div`

`;

const Footer = () => {
    return (
        <FooterContents>
            <div>코로나19 예방접종센터 조회</div>
            devloper.woog2roid
            <a href='https://github.com/woog2roid/COVID-vaccine' target='_blank'><img src={ GithubMark } alt=' '/></a>
        </FooterContents>
    );
};

export default Footer;