import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import CVItem from './CVItem';
import { Job } from './types';
import Spinner from '../spinner';

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
    const [jobs, setJobs] = useState<Job[]>([])

    useEffect(() => {
        fetch("https://s3.eu-central-1.amazonaws.com/www.csornyei.com/job.json").then(resp => {
            resp.json().then((data: Job[]) => {
                setJobs(data)
            })
        });
    }, []);

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

    const cvPage = jobs.length > 0 ? (
        <>
            <CVPageHeader>Work experience</CVPageHeader>
            {jobItems}
            <CVPageHeader>Education</CVPageHeader>
            {eduItems}
        </>) : <Spinner />

    return (
        <CVItemContainer>
            {cvPage}
        </CVItemContainer>
    );
}

export default CVPage;