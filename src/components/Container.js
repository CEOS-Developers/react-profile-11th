import React from "react";
import styled from "styled-components";
import profiles from '../data/profiles';
import ProfileList from './ProfileList';

export default function Container() {
    return (
        <Wrapper>
            <Title>CEOS 프론트엔드 운영진</Title>
            <ProfileList />
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: rgb(230, 255, 255);
    padding: 5rem 10rem;
`;

const Title = styled.div`
font-size: 2.8rem;
margin-bottom: 2rem;
`