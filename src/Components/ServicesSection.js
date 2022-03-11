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
                        image={design} y
                        title={'Web Development'} 
                        paragraph={'Adding flair and functionality to modern web applications using the MERN Stack. (MongoDB, Express.js, React.js, Node.js)'}
                    />
                    <ServiceCard 
                        image={gamedev} 
                        title={'Geek Blogging'} 
                        paragraph={'Creatively written articles centered around geek culture, multimedia, internet phenomena, JoJos incoherent nerd rambling, and more!'}
                    />
                    <ServiceCard 
                        image={intelligence} 
                        title={'Online Academia'} 
                        paragraph={'Academic content with a focus on developer insights, progress visualization, language learning, and armchair philosophy with Space Sensei.'}
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
