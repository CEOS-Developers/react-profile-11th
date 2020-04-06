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
    <CardWrapper>
      <ImageContents>
        <Contents>
          <Personal>
            <Name>
              {name} ({age})
            </Name>
            <Role>{role}</Role>
            <UnivInfo>
              {univ}대학교 {major}과
            </UnivInfo>
          </Personal>
          <Contect>
            <Phone>{phoneNum}</Phone>
            <Email> {email}</Email>
            <Git>
              {" "}
              <a href={githubLink}>{githubLink}</a>
            </Git>
          </Contect>
        </Contents>
        <Image>
          <img src={imageUrl} width="100%"></img>
        </Image>
      </ImageContents>
      <ClubName> 신촌 연합 IT 창업 동아리 CEOS</ClubName>
    </CardWrapper>
  );
}

//styled-component로 CSS

const Personal = styled.div``;
const Contect = styled.div``;
const ImageContents = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`;
const Contents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50%;
`;
const Name = styled.p`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;
const Role = styled.div`
  font-size: 1.4rem;
  font-weight: bold;
`;
const UnivInfo = styled.div`
  font-size: 1.4rem;
`;
const Phone = styled.div`
  font-size: 1.4rem;
  color: rgb(0, 0, 153);
`;
const Email = styled.div`
  font-size: 1.4rem;
  color: rgb(0, 0, 153);
`;
const Git = styled.a`
  font-size: 1.4rem;
`;
const Image = styled.div`
  width: 40%;
  height: 40%;
`;
const ClubName = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  font-size: 1.6rem;
`;
const CardWrapper = styled.div`
  width: 45%;
  background-color: rgb(255, 255, 255);
  margin-bottom: 2rem;
  padding: 1.5rem;
  boder: 1px solid rgb(204, 204, 204);
  border-radius: 1.5rem;
`;
