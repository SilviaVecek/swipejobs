import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderWrapper = styled.div`
    background-color: #000;
    display: flex;
    justify-content: space-between;
    padding: 0.75rem 1rem;
    align-items: center;
`
const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;
    font-size: ${props => props.name ? `1rem` : `1.5rem`};
`
const Header = ({ name }) => {
    return (
        <HeaderWrapper>
            <StyledLink to="/jobs">swipejobs</StyledLink>
            <StyledLink to="/" name>{name}</StyledLink>
        </HeaderWrapper>
    )
}

export default Header