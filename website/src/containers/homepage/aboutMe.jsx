import React from 'react';
import styled from 'styled-components';
import { Element } from 'react-scroll';
import { SectionTitle } from '../../components/sectionTitle';



const AboutMeContainer = styled(Element)`
    width: 100%;
    min-height: 1500px;
    display: flex;
    flex-direction: column;
`;

export function AboutMeSection(props) {
    return (
        <AboutMeContainer name='aboutMeSection'>
            <SectionTitle>About Me</SectionTitle>
        </AboutMeContainer>
    )
}