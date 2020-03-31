import React from "react";

import ProfileCard from "../src/components/profile-card";
import styled from "styled-components";

export default function Home() {
  return (
    <Wrapper>
      CEOS 프론트엔드 운영진
      <ProfileCard />
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
