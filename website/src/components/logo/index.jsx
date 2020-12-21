import React from 'react';
import styled from 'styled-components';
import { Marginer } from '../marginer/index';



import AshaLogo from '../../assets/logo/AGLogo.png';
import EmailIcon from '../../assets/icons/email.png';
import GitHubIcon from '../../assets/icons/github.png';
import LinkedInIcon from '../../assets/icons/linkedin.png';

const LogoContainer = styled.div`
    margin: 6em;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const LogoImg = styled.img`
    width: 25em;
    height: 25em;
`;


const IconContainer = styled.div`
    display:flex;
    flex-direction: row;
    align-items: center;
`;

const IconImgs = styled.img`
    width: 1.5em;
    height: 1.5em;
    margin: 2em;
`;

export function Logo(props) {
    return(
        <LogoContainer>
            <LogoImg src={AshaLogo} />
            <Marginer direction='vertical' margin='1em' />
            <IconContainer>
                <a href="mailto:hello@ashagross.com"><IconImgs src={EmailIcon} /></a>
                <a href="https://github.com/ashagross"><IconImgs src={GitHubIcon} /></a>
                <a href="https://linkedin.com/in/asha-gross"><IconImgs src={LinkedInIcon} /></a>
            </IconContainer>
        </LogoContainer>
    );
}