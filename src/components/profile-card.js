import React from "react";
import styled from "styled-components";

export default function ProfileCard(props) {
  return (
    <CardWrapper>
      <ImageContents>
        <Contents>
          <Personal>
            <Name>
              {props.profile.name} ({props.profile.age})
            </Name>
            <Role>{props.profile.role}</Role>
            <UnivInfo>
              {props.profile.univ}대학교 {props.profile.major}과
            </UnivInfo>
          </Personal>
          <Contect>
            <Phone>{props.profile.phoneNum}</Phone>
            <Email> {props.profile.email}</Email>
            <Git>
              {" "}
              <a href={props.profile.githubLink}>{props.profile.githubLink}</a>
            </Git>
          </Contect>
        </Contents>
        <Image>
          <img src={props.profile.imageUrl} width="100%"></img>
        </Image>
      </ImageContents>
      <ClubName> 신촌 연합 IT 창업 동아리 CEOS</ClubName>
    </CardWrapper>
  );
}

//styled-component로 CSS

const Personal = styled.div`
  display: block;
`;
const Contect = styled.div`
  display: block;
`;
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
const Name = styled.div`
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
const Git = styled.div`
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
  border-width: 1px;
  border-style: solid;
  border-color: rgb(204, 204, 204);
  border-image: initial;
  border-radius: 1.5rem;
`;
