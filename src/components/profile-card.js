import React from "react";
import styled from "styled-components";

export default function ProfileCard({ profile }) {
  const { name, age, role, univ, major, phoneNum, email, imageUrl } = profile;
  return (
    <Wrapper>
      <Profile>
        <Info>
          <div>
            <Name>
              {name}({age})
            </Name>
            <Role>{role}</Role>
            <BelongsTo>
              {univ}대학교 {major}과
            </BelongsTo>
          </div>
          <div>
            <Contact>{phoneNum}</Contact>
            <Contact>{email}</Contact>
          </div>
        </Info>
        <Img src={imageUrl} />
      </Profile>
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

const ClubName = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.6rem;
`;

const Profile = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50%;
`;

const Name = styled.div`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const Role = styled.div`
  font-size: 1.4rem;
  font-weight: bold;
`;

const BelongsTo = styled.div`
  font-size: 1.4rem;
`;

const Contact = styled.div`
  font-size: 1.4rem;
  color: #009;
`;

const Img = styled.img`
  width: 40%;
  height: 40%;
`;
