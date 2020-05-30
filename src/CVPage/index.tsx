import React, {useState} from 'react';
import styled from 'styled-components';
import CVItem from './CVItem';
import { Job } from './types';

import prezi from '../assets/prezi.png';
import ge from '../assets/GE.png';
import telekom from '../assets/telekom.png';

const CVItemContainer = styled.div`

    margin: 16px 26%;

    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const CVPage = () => {
    // TODO: set back to -1
    const [opened, setOpened] = useState(0);

    const jobs: Job[] = [
        {
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
        }
    ]

    const switchDetails = (index: number) => {
        if (index === opened) {
            setOpened(-1)
        } else {
            setOpened(index)
        }
    }

    const jobItems = jobs.map((job, idx) => {
        return <CVItem job={job} key={`${job.employer}-${job.position}`} detailsOpened={idx === opened} clicked={() => {switchDetails(idx)}} />
    })

    return (
        <CVItemContainer>
            {jobItems}
        </CVItemContainer>
    );
}

export default CVPage;