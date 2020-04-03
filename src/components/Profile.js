import React from "react";
import styled from "styled-components";

export default function Profile({ profile }) {
    const { id, name, age, role, univ, major, phoneNum, email, githubLink, imageUrl } = profile;

    return (
        <ProfileCard>
            <Info>
                <Detail>
                    <div style={{
                        fontSize: '2rem',
                        fontWeight: 'bold',
                        marginBottom: '1rem'
                    }}>{name}({age})</div>
                    <div style={{
                        fontSize: '1.4rem',
                        fontWeight: 'bold'
                    }}>{role}</div>
                    <div style={{
                        fontSize: '1.4rem',
                    }}>{major}</div>
                    <div style={{ flex: 1 }}></div>
                    <div style={{
                        fontSize: '1.4rem',
                        color: 'rgb(0, 0, 153)'
                    }}>{phoneNum}</div>
                    <div style={{
                        fontSize: '1.4rem',
                        color: 'rgb(0, 0, 153)'
                    }}>{email}</div>
                    <a style={{ fontSize: '1.4rem' }} href={githubLink}>{githubLink}</a>
                </Detail>
                <img style={{ width: '20rem', height: '20rem' }} src={imageUrl} />
            </Info>
            <Foot>
                신촌 연합 IT 창업 동아리 CEOS
            </Foot>
        </ProfileCard>
    );
}

const Info = styled.div`
    display: flex;
    flex-direction: row;
    -webkit-box-pack: justify;
    justify-content: space-between;
    margin-bottom: 1.5rem;
`

// DETAIL
const Detail = styled.div`
    display: flex;
    flex-direction: column;
    -webkit-box-pack: justify;
    justify-content: space-between;
    width: 50%;
`

// IMAGE

const ProfileImage = styled.img`
    width: 20rem;
    height: 20rem;
`

const Foot = styled.div`
display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    font-size: 1.6rem;
}
`

//
const ProfileCard = styled.div`
width: 45%;
background-color: rgb(255, 255, 255);
margin-bottom: 2rem;
padding: 1.5rem;
border-width: 1px;
border-style: solid;
border-color: rgb(204, 204, 204);
border-image: initial;
border-radius: 1.5rem;
`