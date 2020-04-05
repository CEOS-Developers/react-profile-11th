import React from "react";
import styled from "styled-components";

import ProfileDesc from "./profile-desc";
import ProfileImg from "./profile-img";

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

const CardWrapper = styled.div`
  width: 45%;
  background-color: rgb(255, 255, 255);
  margin-bottom: 2rem;
  padding: 1.5rem;
  border: 1px solid rgb(204, 204, 204);
  border-radius: 1.5rem;
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
