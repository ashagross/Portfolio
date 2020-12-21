import React from 'react';
import { Element } from 'react-scroll';
import styled from 'styled-components';
import { SectionTitle } from '../../components/sectionTitle';

import AboutImgSrc from '../../assets/pictures/westieChicken.png'


const MoreAboutContainer = styled(Element)`
    min-height: 900px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 8em;
    flex-wrap: wrap-reverse;
    padding: 0 1em;
`;

const AboutContainer = styled.div`
    margin-top: 8em;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 1000px;

    @media screen and (max-width: 480px){
        max-width: 100%;
        flex-wrap: wrap-reverse;
    }
`;

const AboutText = styled.p`
    color: #7a7a7a;
    font-size: 19px;
    font-family: 'Lato', sans-serif;
    line-height: 1.4;
    margin-right: 2em;

    @media screen and (max-width: 480px){
        font-size: 15px;
        margin-left: 2em;
    }
`;

const AboutImg = styled.img`
    width: 600px;
    height: 500px;
    margin-bottom: 3em;

    @media screen and (max-width: 480px) {
        width: 370px;
        height: 290px;
`;

export function MoreAboutMeSection(props) {
    return (
        <MoreAboutContainer>
            <SectionTitle>About Me</SectionTitle>
            <AboutContainer>
                <AboutText>
                    I'm a very curious person who enjoys figuring out the building blocks of the world, and rearranging them to build something even better. My career is developing software.
                    {<br />}{<br />}
                    In my spare time you can find me on the battle grounds of Azeroth rolling my face across the keyboard defeating my enemies with my various curses and corruption spells. Zug Zug
                    {<br />}{<br />}
                    I also recently purchased a 1973 VW Westie that I've been trying to restore on the weekends. I've taught myself body work, welding, and some other small mechanial details. It's been a fun learning experience to say the least.
                </AboutText>
                <AboutImg src={AboutImgSrc} />
            </AboutContainer>
        </MoreAboutContainer>
    )
}