import React from 'react';
import styled from 'styled-components';

const ItemContainer = styled.div`
    width: 100%;
    background-color: #dae1e7;
    padding: 16px 8px;
    margin-bottom: 8px;

    cursor: pointer;

    &:hover {
        background-color: #aeb4b9;
    }
`;

interface CVItemProps {
    title: String
}

const CVItem = (props: CVItemProps) => {
    return (
        <ItemContainer>
            {props.title}
        </ItemContainer>
    );
}

export default CVItem;