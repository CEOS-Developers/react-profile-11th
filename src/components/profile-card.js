import React from "react";
import styled from "styled-components";

export default function ProfileCard (props) {
  return (
    <CardWrapper>
    <ImageContents>
      <Contents>
        <Personal>
          <Name>{props.single.name} ({props.single.age})</Name>
          <Role>{props.single.role}</Role>
          <UnivInfo>{props.single.univ}대학교 {props.single.major}과</UnivInfo>
        </Personal>
        <Contect>
          <Phone>{props.single.phoneNum}</Phone>
          <Email> {props.single.email}</Email>
          <Git> <a href={props.single.githubLink}>{props.single.githubLink}</a></Git>
        </Contect>
      </Contents>
      <Image><img src={props.single.imageUrl} width="100%"></img></Image>
    </ImageContents>
    <Ceos> 신촌 연합 IT 창업 동아리 CEOS</Ceos>
  </CardWrapper>
  );

}

//styled-component로 CSS
const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    -webkit-box-pack: justify;
    justify-content: space-between;
    flex-wrap: wrap;
`;
const Personal = styled.div`
    display: block;

`
const Contect = styled.div`
    display: block;

`
const ImageContents = styled.div`
    display: flex;
    flex-direction: row;
    -webkit-box-pack: justify;
    justify-content: space-between;
    margin-bottom: 1.5rem;
`
const Contents = styled.div`
    display: flex;
    flex-direction: column;
    -webkit-box-pack: justify;
    justify-content: space-between;
    width: 50%;
`
const Name = styled.div`
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
`
const Role = styled.div`
    font-size: 1.4rem;
    font-weight: bold;
`
const UnivInfo = styled.div`
    font-size: 1.4rem;
`
const Phone = styled.div`
    font-size: 1.4rem;
    color: rgb(0, 0, 153);
`
const Email = styled.div`
    font-size: 1.4rem;
    color: rgb(0, 0, 153);
`
const Git = styled.div`
    font-size: 1.4rem;
`
const Image = styled.div`
    width: 40%;
    height: 40%;
`
const Ceos = styled.div`
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    font-size: 1.6rem;
`
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

const img = styled.div`
    width: 40%;
    height: 40%;
`;
