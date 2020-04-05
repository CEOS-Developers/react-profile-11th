import React from "react";
import styled from "styled-components";

export default function ProfileCard({
  name,
  age,
  role,
  univ,
  major,
  phoneNum,
  email,
  githubLink,
  imageUrl,
}) {
  return (
    <Wrapper>
      <ProfileWrapper>
        <InfoWrapper>
          <Name>
            {name}({age})
          </Name>
          <Role>{role}</Role>
          <Univ>
            {univ}대학교 {major}과
          </Univ>
          <Space />
          <Contact>
            {phoneNum}
            <br />
            {email}
          </Contact>
          <Github href={githubLink}>{githubLink}</Github>
        </InfoWrapper>
        <Img src={imageUrl} />
      </ProfileWrapper>
      <ClubName>신촌 연합 IT 창업 동아리 CEOS</ClubName>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 45%;
  background-color: #fff;
  padding: 1.5rem;
  margin-bottom: 2rem;
  border: 1px solid #ccc;
  border-radius: 1.5rem;
`;

const ClubName = styled.p`
  width: 100%;
  text-align: center;
  font-size: 1.6rem;
  margin: 0rem;
`;

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50%;
`;

const Space = styled.div`
  flex: 1;
`;

const Name = styled.p`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
  margin: 0rem;
`;

const Role = styled.p`
  font-size: 1.4rem;
  font-weight: bold;
  margin: 0rem;
`;

const Univ = styled.p`
  font-size: 1.4rem;
  margin: 0rem;
`;

const Contact = styled.p`
  font-size: 1.4rem;
  color: #009;
  margin: 0rem;
`;

const Img = styled.img`
  width: 20rem;
  height: 20rem;
`;

const Github = styled.a`
  font-size: 1.4rem;
`;
