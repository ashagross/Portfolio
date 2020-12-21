import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import React from 'react';
import { SectionTitle } from '../../components/sectionTitle';
import styled from 'styled-components';
import { Element } from "react-scroll";
import { ProjectCard } from '../../components/projectCard';
import { useMediaQuery } from 'react-responsive';


import 'pure-react-carousel/dist/react-carousel.es.css';
import LangImg1 from '../../assets/icons/react-brands.svg';
import Project1Img from '../../assets/pictures/project1.png'

const ProjectContainer = styled(Element)`
    height: 700px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const StyledCarouselProvider = styled(CarouselProvider)`
    width: 50%;
    margin-top: 8em;

    @media screen and (max-width: 480px) {
        width: 100%
    }
`;

const StyledSlide = styled(Slide)`
    .carousel__inner-slide {
    margin-bottom: 0em;
    display: flex;
    justify-content: center;
  }
`;


export function ProjectSection(props) {

    const isMobile = useMediaQuery({ query: 'max-width=l 480px'});

    return (
        <ProjectContainer>
            <SectionTitle>What I've Worked On (Coming Soon)</SectionTitle>
            <StyledCarouselProvider
                naturalSlideWidth={200}
                naturalSlideHeight={ isMobile ? 350 : 250 }
                totalSlides={4}
                visibleSlides={1}
                isPlaying={true}
                interval={4000}
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
            </StyledCarouselProvider>
        </ProjectContainer>
    );
}