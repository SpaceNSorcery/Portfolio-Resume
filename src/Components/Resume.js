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
                    <SmallTitle icon={briefcase} title={'Working Experience'} />
                </div>
                <div className="resume-content">
                    <ResumeItem 
                        year={'2021 - Present'} 
                        title={'Full Stack Developer'}
                        subTitle={'"Technical Skills"'}
                        text={'Writes modern, performant, and maintainable code for an array of personal individual projects. Worked using a variety of computer languages, frameworks, CLIs, and content management platforms. Self taught "MERN" stack developer ( MongoDB / ExpressJS / ReactJS / NodeJS ). '} 
                    />
                    <ResumeItem 
                        year={'2020 - Present'} 
                        title={'Language Service Provider'}
                        subTitle={'"Freelance Experience"'}
                        text={'Provided professional transcription, translation, proofreading, and content editing services for both English and Japanese. Worked in small, diverse, and remote teams in order to meet desired work quotas. Regularly prepared class content according to TEFL/TESOL guidlines. Taught English and Japanese to both local and foreign students online.'} 
                    />
                    <ResumeItem 
                        year={'2016 - 2021'} 
                        title={'Retail / Service Industry Associate'}
                        subTitle={'"Soft Skills"'}
                        text={'Worked for both small and large retail establishments as a salesfloor associate, food service worker, and home tech installer. Maintained up to date product knowledge, managed assignments with teams of co-workers, kept inventory of stock, provided professional customer service.'} 
                    />
                </div>
                <div className="small-title u-small-title-margin">
                    <SmallTitle icon={school} title={'Education'} />
                </div>
                <div className="resume-content ">
                    <ResumeItem 
                        year={'2020 - 2024 (incomplete)'} 
                        title={'Bachelors of Science in Computer Science'}
                        subTitle={'Grand Canyon University'}
                        text={'//  Communications studies   //'} 
                    />
                    <ResumeItem 
                        year={'2020 - 2021'} 
                        title={'TEFL/TESOL Certification'}
                        subTitle={'Tefl.org'}
                        text={'//  Teaching English as a Foreign Language | Teaching English to Speakers of Other Languages Certification //'} 
                    />
                    <ResumeItem 
                        year={'2018 - 2019'} 
                        title={'SUNY Erie Community College'}
                        subTitle={'Computer Systems and Repair'}
                        text={'//  Digital Logic | Microprocessors and Microcontrollers | Computer System Software and Hardware //'} 
                    />
                           <ResumeItem 
                              year={'2016 - 2018'} 
                              title={'SUNY Buffalo State College'}
                              subTitle={'Mechanical Engineering'}
                              text={'//  Computer Based Information Processing | Fundamental Concepts in Object Oriented Programming | Computer Information Systems //'} 
                          />
                        <ResumeItem 
                           year={'2016 - 2018'} 
                           title={'Erie 1 BOCES Harkness Career and Technical Center'}
                           subTitle={'Aviation Technology'}
                           text={'//  Certificate of Completion | FAA Written Exam  // '} 
                       />
                    <ResumeItem 
                        year={'2015 - 2016'} 
                        title={'Cleveland Hill Highschool'}
                        subTitle={'Highschool Diploma'}
                        text={'//  Hour of Code | Tech Wars 2016 Winning Team |  Alice Programming Challenge  // '} 
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
