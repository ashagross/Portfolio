import React from 'react';
import { Marginer } from '../../components/marginer';
import { SectionTitle } from '../../components/sectionTitle';
import styled from 'styled-components';
import { Element } from "react-scroll";
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import { ProjectCard } from '../../components/projectCard';

import 'pure-react-carousel/dist/react-carousel.es.css';


const ProjectContainer = styled(Element)`
    height: 700px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const StyledCarouselProvider = styled(CarouselProvider)`
    width: 50%;
`;

const StyledSlide = styled(Slide)`

`;

export function ProjectSection(props) {
    return (
        <ProjectContainer>
            <SectionTitle>What I've Worked On</SectionTitle>
            <Marginer direction='vertical' margin='3em' />
            <StyledCarouselProvider naturalSlideWidth={200} naturalSlideHeight={300} totalSlides={4} visibleSlides={2}>
                <Slider>
                    <Slide index={0}><ProjectCard /></Slide>
                    <Slide index={1}><ProjectCard /></Slide>
                    <Slide index={2}><ProjectCard /></Slide>
                    <Slide index={3}><ProjectCard /></Slide>
                </Slider>
                <DotGroup
            </StyledCarouselProvider>
        </ProjectContainer>
    );
}