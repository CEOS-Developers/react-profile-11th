import React from "react";
import styled from "styled-components";

export default function ProfileImg({ imageUrl }) {
  return <ProfileImage src={imageUrl} />;
}

const ProfileImage = styled.img`
  width: 40%;
  height: 40%;
`;
