import React from 'react';
import styled from 'styled-components';
import {
    Link
} from 'react-router-dom';

const NavbarContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    padding: 8px 33%;
    border-bottom: 2px solid #333;
`;

const NavbarLink = styled(Link)`
    font-family: "OpenSans";
    font-size: 1.6em;
    text-decoration: none;

    color: #111;
    padding: 4px 16px;
    border-radius: 3px;

    &:hover {
        box-shadow: 2px 2px 3px 1px rgba(0,0,0,0.4);
    }

    &:active {
        transform: translateY(2px);
    }
`;

const Navbar = () => {
    return (
        <NavbarContainer>
            <NavbarLink to="/">CV</NavbarLink>
            <NavbarLink to="/contact">Contacts</NavbarLink>
        </NavbarContainer>
    )
}

export default Navbar;