import React from 'react';
import styled from 'styled-components';
import CVItem from './CVItem';

const CVItemContainer = styled.div`

    margin: 16px 26%;

    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const CVPage = () => {

    const jobs = [
        "Prezi",
        "GE",
        "Telekom"
    ]

    const jobItems = jobs.map((jobTitle) => {
        return <CVItem title={jobTitle} key={jobTitle} />
    })

    return (
        <CVItemContainer>
            {jobItems}
        </CVItemContainer>
    );
}

export default CVPage;