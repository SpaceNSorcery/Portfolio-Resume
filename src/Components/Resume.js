import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import SmallTitle from '../Components/SmallTitle';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School';
import ResumeItem from '../Components/ResumeItem';

function Resume() {
    const briefcase = <BusinessCenterIcon />
    const school = <SchoolIcon />
    return (
        <ResumeStyled>
            <Title title={'Resume'} span={'resume'} />
            <InnerLayout>
                <div className="small-title">
                    <SmallTitle icon={briefcase} title={'Work Experience'} />
                </div>
                <div className="resume-content">
                    <ResumeItem 
                        year={'2021 - Present'} 
                        title={'Full Stack Developer'}
                        subTitle={'Freelance'}
                        text={' - Materialized creative ideas into custom, live, responsive web pages receiving content fed through data queries without backend support.'} 
                    />
                    <ResumeItem 
                        year={'2020 - 2021'} 
                        title={'Language Service Provider'}
                        subTitle={'Freelance'}
                        text={' - Aquired and applied new language learning skills providing, accurate localized translations in large volumes. Completed TEFL certification and applied learned skills when teaching language to foreigners.'} 
                    />
                    <ResumeItem 
                        year={'2016 - 2021'} 
                        title={'Retail & Service Industry'}
                        subTitle={'Full Time Employment'}
                        text={' - Diversified retail and service industry work experiences, granting an innate control of professional soft skills when working with clients, co-workers, and management.'} 
                    />
                </div>
                <div className="small-title u-small-title-margin">
                    <SmallTitle icon={school} title={'Education'} />
                </div>
                <div className="resume-content ">
                    <ResumeItem 
                        year={'2020 - present'} 
                        title={'Communications Studies'}
                        subTitle={'Grand Canyon University'}
                        text={'Communication Research Methods | Conflict & Negotiation'} 
                    />
                    <ResumeItem 
                        year={'2018 - 2019'} 
                        title={'SUNY Erie Community College'}
                        subTitle={'Computer Repair Technology'}
                        text={'Digital Logic I & II | Microprocessors and Microcontrollers | Electronics | Computer Processors'} 
                    />
                           <ResumeItem 
                              year={'2016 - 2018'} 
                              title={'SUNY Buffalo State College'}
                              subTitle={'Mechanical Engineering'}
                              text={'Computer Based Information Processing | Fundamental Concepts in Object Oriented Programming | Computer Information Systems | Computational Tools for Mathematicians'} 
                          />
                    <ResumeItem 
                        year={'2015 - 2016'} 
                        title={'Cleveland Hill Highschool'}
                        subTitle={'Highschool Diploma'}
                        text={'Hour of Code | Tech Wars |  Alice Programming Challenge'} 
                    />
                </div>
            </InnerLayout>
        </ResumeStyled>    
    )
}

const ResumeStyled = styled.section`
    .small-title{
        padding-bottom: 3rem;
    }
    .u-small-title-margin{
        margin-top: 4rem;
    }

    .resume-content{
        border-left: 2px solid var(--border-color);
    }
`;
export default Resume
