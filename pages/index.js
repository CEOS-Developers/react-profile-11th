import React from "react";
import ProfileCard from "../src/components/profile-card";
import styled from "styled-components";

export default function Home() {
	return (
		<Wrapper>
			<Subject>CEOS 프론트엔드 운영진</Subject>
			<ProfileCard />
		</Wrapper>
	);
}
const Subject = styled.div`
	font-size: 28px;
	margin-bottom: 20px;
	width: 100%;
`;

const Wrapper = styled.div`
	background-color: rgb(230, 255, 255);
	padding: 50px 100px;
	display: flex;
	flex-direction: row;
	min-height: 100%;
	justify-content: space-between;
	flex-wrap: wrap;
`;
