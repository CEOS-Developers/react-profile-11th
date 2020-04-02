import React from "react";
import styled from "styled-components";
import { render } from "react-dom";

export default function ProfileCard() {
  const profiles = [
    {
      id: 1,
      name: "박효진",
      age: 23,
      role: "개발 파트장",
      univ: "이화여자",
      major: "컴퓨터공학",
      phoneNum: "010-5106-6785",
      email: "gywls517@gmail.com",
      githubLink: "https://github.com/gywlsp",
      imageUrl:
        "https://static.wixstatic.com/media/69e8c2_982cbc3d638e49889d8ba64b3c70a6e3~mv2.jpeg/v1/crop/x_199,y_0,w_543,h_560/fill/w_350,h_347,al_c,q_80,usm_0.66_1.00_0.01/%E1%84%8E%E1%85%AC%E1%84%92%E1%85%AD%E1%84%8C%E1%85%B5%E1%86%AB.webp"
    },
    {
      id: 2,
      name: "양병훈",
      age: 25,
      univ: "서강",
      role: "운영 팀원",
      major: "컴퓨터공학",
      phoneNum: "010-8200-1760",
      email: "ybh1760@gmail.com",
      githubLink: "https://github.com/ybh1760",
      imageUrl:
        "https://static.wixstatic.com/media/69e8c2_3de533d9d5ee4bbaa5fe0c360e8f6a23~mv2.jpeg/v1/crop/x_0,y_456,w_3024,h_3119/fill/w_351,h_347,al_c,q_80,usm_0.66_1.00_0.01/%E1%84%8B%E1%85%A3%E1%86%BC%E1%84%87%E1%85%A7%E1%86%BC%E1%84%92%E1%85%AE%E1%86%AB.webp"
    },
    {
      id: 3,
      name: "이수완",
      age: 22,
      univ: "이화여자",
      role: "홍보 파트장",
      major: "컴퓨터공학",
      phoneNum: "010-5503-7994",
      email: "2swan965@gmail.com",
      githubLink: "https://github.com/lee-soowan65",
      imageUrl:
        "https://static.wixstatic.com/media/982853_a188a89325cb4a20b6a487f7e3de5d14~mv2.jpg/v1/crop/x_13,y_1126,w_2998,h_2829/fill/w_351,h_335,al_c,q_80,usm_0.66_1.00_0.01/4A2633DE-3322-4CDC-8F8C-35288D83C43B-500.webp"
    },
    {
      id: 4,
      name: "최수민",
      age: 26,
      univ: "서강",
      role: "부회장",
      major: "컴퓨터공학",
      phoneNum: "010-4413-1261",
      email: "react@kakao.com",
      githubLink: "https://github.com/greatSumini",
      imageUrl:
        "https://static.wixstatic.com/media/69e8c2_43446e9ac65e4f129083516175259a2b~mv2.jpeg/v1/crop/x_0,y_910,w_3024,h_3122/fill/w_347,h_351,al_c,q_80,usm_0.66_1.00_0.01/%E1%84%8E%E1%85%AC%E1%84%89%E1%85%AE%E1%84%86%E1%85%B5%E1%86%AB.webp"
    }
  ];

  return <Wrapper>{mapToComponent(profiles)}</Wrapper>;
}

const mapToComponent = profiles => {
  // 나이 순으로 정렬
  profiles.sort((a, b) => a.age - b.age);
  return profiles.map((profileData, i) => {
    if (profileData.role !== "부회장")
      return <CardTemplate profile={profileData} key={i} />;
  });
};

function CardTemplate(props) {
  return (
    <InnerWrapper>
      <ProfileDescImg>
        <ProfileDesc profile={props.profile} />
        <ProfileImg imgUrl={props.profile.imageUrl} />
      </ProfileDescImg>
      <ClubName>신촌 연합 IT 창업 동아리 CEOS</ClubName>
    </InnerWrapper>
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

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  -webkit-box-pack: justify;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const InnerWrapper = styled.div`
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
