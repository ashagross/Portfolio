import React from 'react';
import styled from 'styled-components';
import { Element } from 'react-scroll';
import { SectionTitle } from '../../components/sectionTitle';
import { Marginer } from '../../components/marginer';
import { MySkills } from '../../components/mySkills';


import NodeImg from '../../assets/icons/node-brands.svg';
import ReactImg from '../../assets/icons/react-brands.svg';
import BootstrapImg from '../../assets/icons/bootstrap-brands.svg';

const AboutMeContainer = styled(Element)`
    width: 100%;
    min-height: 1100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 0;
`;

export function AboutMeSection(props) {
    return (
        <AboutMeContainer name='aboutMeSection'>
            <SectionTitle>My Skills</SectionTitle>
            <Marginer direction='vertical' margin='3em' />
            <MySkills 
                title='React.js'
                description='I love the complete freedom to decide what extent of React to use in applications and it can be comfortably used as a view layer with other technologies on controllers.'
                imgUrl={ReactImg}
            />
            <MySkills
                title='Node.js'
                description='No mismatch between the backend and the frontend in terms of communication, they work the same on both sides.66'
                imgUrl={NodeImg}
                isReversed
            />
            <MySkills
                title='Styling'
                description='I do love styled components but bootstrap gives the capability to build a functional, attractive design in just minutes.'
                imgUrl={BootstrapImg}
            />
        </AboutMeContainer>
    )
}