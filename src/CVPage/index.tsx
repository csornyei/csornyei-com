import React, {useState} from 'react';
import styled from 'styled-components';
import CVItem from './CVItem';
import { Job } from './types';

import prezi from '../assets/prezi.png';
import ge from '../assets/GE.png';
import telekom from '../assets/telekom.png';
import corvinus from '../assets/corvinus.jpeg';

const CVItemContainer = styled.div`

    padding: 16px 26%;

    display: flex;
    flex-direction: column;
    justify-content: center;

    background-color: #BCCFDC;

    animation-duration: 1s;
    animation-name: slight-slide-from-left;
`;

const CVPageHeader = styled.h3`
    font-family: Montserrat, Arial, Helvetica, sans-serif;
    font-weight: bold;
    font-size: 2em;
    margin-bottom: 8px;
`;

const CVPage = () => {
    const [opened, setOpened] = useState(-1);

    const jobs: Job[] = [
        {
            type: "job",
            employer: "Prezi",
            position: "Full Stack Engineer Intern",
            logo: prezi,
            startDate: "2019 September",
            endDate: "2020 May",
            duration: "9 months",
            duties: [
                "Developing applications with React",
                "Maintaining and developing Django services",
                "Creating and using Jenkins jobs",
                "Creating automatic GUI tests with Selenium and Java"
            ],
            technologies: ["Typescript", "React", "Redux", "Django", "Jenkins", "Docker", "AWS", "Java"]
        },
        {
            type: "job",
            employer: "GE Power",
            position: "Software Developer Intern",
            logo: ge,
            startDate: "2018 May",
            endDate: "2019 August",
            duration: "1 year 5 months",
            duties: [
                "Developing frontend applications with React and Angular",
                "Developing and maintaining backend services in PHP and NodeJS",
                "Managing MongoDB, DynamoDB and PostgreSQL databases",
                "Developing Lambda functions on AWS"
            ],
            technologies: ["Typescript", "Angular", "React", "NodeJS", "PHP", "NoSQL and SQL Databases", "AWS"]
        },
        {
            type: "job",
            employer: "Magyar Telekom",
            position: "E-Service Intern",
            logo: telekom,
            startDate: "2017 March",
            endDate: "2017 December",
            duration: "10 months",
            duties: [
                "Creating daily and weekly reports about the Online Customer Service",
                "Calculating KPIs based on user reviews",
                "Automating these tasks"
            ],
            technologies: ["Excel", "VBA"]
        },
        {
            type: "edu",
            position: "Business Informatics BSc",
            employer: "Corvinus University of Budapest",
            logo: corvinus,
            startDate: "2016 September",
            endDate: "2021 January",
            current: "I'm writing my thesis about meassuring page load performance"
        }
    ];

    const switchDetails = (index: number) => {
        if (index === opened) {
            setOpened(-1)
        } else {
            setOpened(index)
        }
    }

    const jobItems: JSX.Element[] = [];
    const eduItems: JSX.Element[] = []

    jobs.forEach((job, idx) => {
        const item = <CVItem job={job} key={`${job.employer}`} detailsOpened={idx === opened} clicked={() => {switchDetails(idx)}} />
        if (job.type === "job") {
            jobItems.push(item);
        } else {
            eduItems.push(item);
        }
    });

    return (
        <CVItemContainer>
            <CVPageHeader>Work experience</CVPageHeader>
            {jobItems}
            <CVPageHeader>Education</CVPageHeader>
            {eduItems}
        </CVItemContainer>
    );
}

export default CVPage;