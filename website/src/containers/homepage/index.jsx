import React from 'react';
import { TopSection } from './topSection';

import styled from 'styled-components';
import { AboutMeSection } from './skillsSection';
import { ProjectSection } from './projectsSection';
import { Marginer } from '../../components/marginer';
import { MoreAboutMeSection } from '../homepage/aboutSection';
import { Footer } from '../../components/footer';



const PageContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;



export function Homepage(props) {
    return (
        <PageContainer>
            <TopSection />
            <AboutMeSection />
            <Marginer direction="vertical" margin="2em" />
            <ProjectSection />
            <MoreAboutMeSection />
            <Marginer direction="vertical" margin="8em" />
            <Footer />
        </PageContainer>
    );
}