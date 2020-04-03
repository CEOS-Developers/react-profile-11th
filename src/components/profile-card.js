import React from "react";
import styled from "styled-components";
import { render } from "react-dom";

export default function ProfileCard(props) {
  return (
    <CardWrapper>
      <ProfileDescImg>
        <ProfileDesc profile={props.profile} />
        <ProfileImg imgUrl={props.profile.imageUrl} />
      </ProfileDescImg>
      <ClubName>신촌 연합 IT 창업 동아리 CEOS</ClubName>
    </CardWrapper>
  );
}

function ProfileDesc(props) {
  return (
    <DescWrapper>
      <div>
        <Name>
          {props.profile.name}({props.profile.age})
        </Name>
        <Part>{props.profile.role}</Part>
        <Univ>
          {props.profile.univ}대학교 {props.profile.major}과
        </Univ>
      </div>
      <div>
        <PhoneNum>{props.profile.phoneNum}</PhoneNum>
        <Email>{props.profile.email}</Email>
        <GithubLink href={props.profile.githubLink}>
          {props.profile.githubLink}
        </GithubLink>
      </div>
    </DescWrapper>
  );
}

function ProfileImg(props) {
  return <ProfileImage src={props.imgUrl} />;
}

const CardWrapper = styled.div`
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

const ProfileImage = styled.img`
  width: 40%;
  height: 40s%;
`;

const ProfileDescImg = styled.div`
  display: flex;
  flex-direction: row;
  -webkit-box-pack: justify;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`;

const NamePartUniv = styled.div`
  box-sizing: border-box;
`;
const ProfileContact = styled.div`
  box-sizing: border-box;
`;

const ClubName = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  font-size: 1.6rem;
`;
const DescWrapper = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-pack: justify;
  justify-content: space-between;
  width: 50%;
`;

const Name = styled.div`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;
const Univ = styled.div`
  font-size: 1.4rem;
`;
const Part = styled.div`
  font-size: 1.4rem;
  font-weight: bold;
`;
const PhoneNum = styled.div`
  font-size: 1.4rem;
  color: rgb(0, 0, 153);
`;
const Email = styled.div`
  font-size: 1.4rem;
  color: rgb(0, 0, 153);
`;
const GithubLink = styled.a`
  font-size: 1.4rem;
`;
