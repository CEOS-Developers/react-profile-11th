import React from "react";
import styled from "styled-components";

export default function ProfileCard (props) {
  return (
    <Wrapper>
    <InfoBox>
      <InfoMain>
        <MainTop>
          <Name_Age>{props.info.name} ({props.info.age})</Name_Age>
          <Role>{props.info.role}</Role>
          <Univ_Major>{props.info.univ}대학교 {props.info.major}과</Univ_Major>
        </MainTop>
        <MainBottom>
          <PhoneNum>{props.info.phoneNum}</PhoneNum>
          <Email> {props.info.email}</Email>
          <GitLink href={props.info.githubLink}>{props.info.githubLink}</GitLink>
        </MainBottom>
      </InfoMain>
      <Image src={props.info.imageUrl} width="100%"></Image>
    </InfoBox>
    <InfoBottom> 신촌 연합 IT 창업 동아리 CEOS</InfoBottom>
  </Wrapper>
  );

}

//styled-component로 CSS

const Wrapper = styled.div`
    width: 45%;
    background-color: rgb(255, 255, 255);
    margin-bottom: 2rem;
    padding: 1.5rem;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(204, 204, 204);
    border-image: initial;
    border-radius: 1.5rem;
`;

const InfoBox = styled.div`
    display: flex;
    flex-direction: row;
    -webkit-box-pack: justify;
    justify-content: space-between;
    margin-bottom: 1.5rem;
`;

const InfoMain = styled.div`
    display: flex;
    flex-direction: column;
    -webkit-box-pack: justify;
    justify-content: space-between;
    width: 50%;
`;

const InfoBottom = styled.div`
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    font-size: 1.6rem;
`;

const MainTop = styled.div`
    display: block;
`;
const MainBottom = styled.div`
    display: block;
`;

const Name_Age = styled.p`
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
`;
const Role = styled.div`
    font-size: 1.4rem;
    font-weight: bold;
`;
const Univ_Major = styled.div`
    font-size: 1.4rem;
`;
const PhoneNum = styled.div`
    font-size: 1.4rem;
    color: rgb(0, 0, 153);
`;
const Email = styled.div`
    font-size: 1.4rem;
    color: rgb(0, 0, 153);
`;
const GitLink = styled.a`
    font-size: 1.4rem;
`;
const Image = styled.img`
    width: 40%;
    height: 40%;
`;


