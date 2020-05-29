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

    const [opened, setOpened] = useState(-1);

    const jobs: Job[] = [
        {employer: "Prezi", position: "Full Stack Engineer Intern", logo: prezi, startDate: "2019 September", endDate: "2020 May", duration: "9 months"},
        {employer: "GE", position: "Software Developer Intern", logo: ge,  startDate: "2018 May", endDate: "2019 August", duration: "1 year 5 months"},
        {employer: "Magyar Telekom", position: "E-Service Intern", logo: telekom, startDate: "2017 March", endDate: "2017 December", duration: "10 months"}
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