import React from "react";
import styled from "styled-components";

export default function ProfileDesc(props) {
  const { name, age, role, univ, major, phoneNum, email, githubLink } = props;
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
