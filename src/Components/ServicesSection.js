import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import ServiceCard from '../Components/ServiceCard';
import design from '../img/../img/programming.png';
import intelligence from '../img/writing.png';
import gamedev from '../img/game.png';

function ServicesSection() {
    return (
        <InnerLayout>
            <ServicesSectionStyled>
                <Title title={'My Craft'} span={'My Craft'} />
                <div className="services">
                    <ServiceCard 
                        image={design} 
                        title={'Web Design'} 
                        paragraph={'Designing functional, modern web applications using the MERN Stack.'}
                    />
                    <ServiceCard 
                        image={gamedev} 
                        title={'Geek Blogging'} 
                        paragraph={'Articles centered around web development, geek culture / media, and project analysis.'}
                    />
                    <ServiceCard 
                        image={intelligence} 
                        title={'Multimedia Content'} 
                        paragraph={'Writing with a focus on linguistics, armchair philosophy, & my incoherent inner ramblings.'}
                    />
                </div>
            </ServicesSectionStyled>
        </InnerLayout>
    )
}

const ServicesSectionStyled = styled.section`
    .services{
        margin-top: 5rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1.5rem;
        @media screen and (max-width:1000px){
            flex-direction: column;
        }
        @media screen and (max-width:950px){
            grid-template-columns: repeat(2, 1fr);
        }
        @media screen and (max-width:650px){
            grid-template-columns: repeat(1, 1fr);
        }
       
    }
`;

export default ServicesSection;
