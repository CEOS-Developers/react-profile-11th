import React from "react";
import styled from "styled-components";
import profiles from '../data/profiles';
import Profile from './Profile';

export default function ProfileList() {
    return (
        <List>
            {profiles.filter((profile) => { // 부회장 제외한 Profile list 반환
                return profile.role !== '부회장'
            }).map((profile) => { // Return Profile
                return <Profile key={profile.id} profile={profile} />
            })}
        </List>
    )
}

const List = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
flex-wrap: wrap;
`;