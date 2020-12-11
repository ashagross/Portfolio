import { CarouselProvider, DotGroup, Slider, Slide } from 'pure-react-carousel';
import React from 'react';
import { SectionTitle } from '../../components/sectionTitle';
import styled from 'styled-components';
import { Element } from "react-scroll";
import { ProjectCard } from '../../components/projectCard';


import 'pure-react-carousel/dist/react-carousel.es.css';

import Project1Img from '../../assets/pictures/project1.jpg';
/* import Project2Img from '../../assets/pictures/project1.jpg';
import Project3Img from '../../assets/pictures/project1.jpg';
import Project4Img from '../../assets/pictures/project1.jpg'; */

import LangImg1 from '../../assets/icons/react-brands.svg';


const ProjectContainer = styled(Element)`
    height: 700px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const StyledCarouselProvider = styled(CarouselProvider)`
    width: 50%;
    margin-top: 8em;
`;

const StyledSlide = styled(Slide)`
    .carousel__inner-slide {
    margin-bottom: 0em;
    display: flex;
    justify-content: center;
  }
`;


const StyledDotGroup = styled(DotGroup)`
    display: flex;
    justify-content: center;
    margin-bottom: 10em;
    button {
     width: 11px;
     height: 11px;
     border-radius: 50%;
     background-color: #e4e4e4;
     border: none;
     outline: none;
     &:not(:last-of-type) {
       margin-right: 6px;
    }
  }
  .carousel__dot--selected {
    background-color: #e07a5f;
  }
`;
export function ProjectSection(props) {
    return (
        <ProjectContainer>
            <SectionTitle>What I've Worked On</SectionTitle>
            <StyledCarouselProvider
                naturalSlideWidth={200}
                naturalSlideHeight={250}
                totalSlides={4}
                visibleSlides={2}
                isPlaying={true}
                interval={6000}
                >
                <Slider>
                    <StyledSlide index={0}>
                        <ProjectCard
                            projectImgUrl={Project1Img}
                            langImgUrl={LangImg1}
                        />
                    </StyledSlide>
                    <StyledSlide index={1}>
                        <ProjectCard
                            projectImgUrl={Project1Img}
                            langImgUrl={LangImg1}
                        />
                    </StyledSlide>
                    <StyledSlide index={2}>
                        <ProjectCard
                            projectImgUrl={Project1Img}
                            langImgUrl={LangImg1}
                        />
                    </StyledSlide>
                    <StyledSlide index={3}>
                        <ProjectCard
                            projectImgUrl={Project1Img}
                            langImgUrl={LangImg1}
                        />
                    </StyledSlide>
                </Slider>
                <StyledDotGroup />
            </StyledCarouselProvider>
        </ProjectContainer>
    );
}