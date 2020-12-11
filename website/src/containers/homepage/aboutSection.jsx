import React from 'react';
import { Element } from 'react-scroll';
import styled from 'styled-components';
import { SectionTitle } from '../../components/sectionTitle';

import AboutImgSrc from '../../assets/pictures/project1.jpg'


const MoreAboutContainer = styled(Element)`
    min-height: 900px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 8em;
`;

const AboutContainer = styled.div`
    margin-top: 8em;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 1000px;
`;

const AboutText = styled.p`
    color: #7a7a7a;
    font-size: 19px;
    font-family: 'Lato', sans-serif;
    line-height: 1.4;
`;

const AboutImg = styled.img`
    width: 500px;
    height: 400px;
    margin-left: 7em;
`;

export function MoreAboutMeSection(props) {
    return (
        <MoreAboutContainer>
            <SectionTitle>About Me</SectionTitle>
            <AboutContainer>
                <AboutText>
                    Purrr purr littel cat, little cat purr purr experiences short bursts of poo-phoria after going to the loo but sleep nap poop in the plant pot yet i heard this rumor where the humans are our owners, pfft, what do they know?!. 
                    {<br />}{<br />}
                    Hide from vacuum cleaner shred all toilet paper and spread around the house so love so ask for petting hunt anything that moves, so cat is love, cat is life. Head nudges . 
                    {<br />}{<br />}
                    Prance along on top of the garden fence, annoy the neighbor's dog and make it bark walk on keyboard adventure always or scratch leg; meow for can opener to feed me. Love you, then bite you demand to have some of whatever the human is cooking, then sniff the offering and walk away for mouse a nice warm laptop for me to sit on hide when guests come over chirp at birds.
                </AboutText>
                <AboutImg src={AboutImgSrc} />
            </AboutContainer>
        </MoreAboutContainer>
    )
}