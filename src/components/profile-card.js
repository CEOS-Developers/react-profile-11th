import React from "react";
import styled from "styled-components";

export default function ProfileCard(props) {
  return (
    <CardWrapper>
      <ProfileDescImg>
        <ProfileDesc {...props} />
        <ProfileImg {...props} />
      </ProfileDescImg>
      <ClubName>신촌 연합 IT 창업 동아리 CEOS</ClubName>
    </CardWrapper>
  );
}

function ProfileDesc(props) {
  console.log(props);
  const {
    id,
    name,
    age,
    role,
    univ,
    major,
    phoneNum,
    email,
    githubLink,
    imageUrl,
  } = props;
  return (
    <DescWrapper>
      <div>
        <Name>
          {name}({age})
        </Name>
        <Part>{role}</Part>
        <Univ>
          {univ}대학교 {major}과
        </Univ>
      </div>
      <div>
        <PhoneNum>{phoneNum}</PhoneNum>
        <Email>{email}</Email>
        <GithubLink href={githubLink}>{githubLink}</GithubLink>
      </div>
    </DescWrapper>
  );
}

function ProfileImg(props) {
  const { imageUrl } = props;
  return <ProfileImage src={imageUrl} />;
}

const CardWrapper = styled.div`
  width: 45%;
  background-color: rgb(255, 255, 255);
  margin-bottom: 2rem;
  padding: 1.5rem;
  border: 1px solid rgb(204, 204, 204);
  border-radius: 1.5rem;
`;

const ProfileImage = styled.img`
  width: 40%;
  height: 40%;
`;

const ProfileDescImg = styled.div`
  display: flex;
  flex-direction: row;
  -webkit-box-pack: justify;
  justify-content: space-between;
  margin-bottom: 1.5rem;
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
