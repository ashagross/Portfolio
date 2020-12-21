import React from 'react';
import styled from 'styled-components';
import { Element, scroller } from 'react-scroll';



import BackgroundImg from '../../assets/pictures/background.jpg';
import { DownArrow } from '../../components/downArrow';
import { Logo } from '../../components/logo';
import { Marginer } from '../../components/marginer';
import { NavBar } from '../../components/navBar';


const TopContainer = styled.div`
    width: 100%;
    height: 100vh;
    padding: 0;
    background-image: url(${BackgroundImg}); 
    position: relative;
`;



const BackgroundFilter = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(55, 55, 55, 0.87);
    display: flex;
    flex-direction: column;
    align-items: center;
`;


const DownArrowContainer = styled.div`
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
`;

export function TopSection(props) {
    
    const scrollToNextSection = () => {
        scroller.scrollTo('aboutMeSection', { smooth: true, duration: 1500 });
    }; 

    return (
        <Element name='topSection'>
        <TopContainer>
            <BackgroundFilter>
                <NavBar />
                <Marginer direction= 'vertical' margin= '2em' />
                <Logo />
                <DownArrowContainer onClick={scrollToNextSection}>
                    <DownArrow />
                </DownArrowContainer>
            </BackgroundFilter>
            </TopContainer>
            </Element>
    );
}