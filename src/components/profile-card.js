import React from "react";
import styled from "styled-components";
//import Home, { profiles } from "/../../pages/index";
export default function ProfileCard() {
	return <div></div>;
}
export function Prop({
	id,
	name,
	age,
	role,
	univ,
	major,
	phoneNum,
	email,
	githubLink,
	imageUrl
}) {
	return (
		<div>
			<Row>
				<Char>
					<Info>
						<Name>
							{name}({age})
						</Name>

						<strong>{role}</strong>
						<div>
							{univ}대학교 {major}과
						</div>
					</Info>
					<Li>
						<div>{phoneNum}</div>
						<div>{email}</div>
						<div>
							<a href={githubLink}>{githubLink}</a>
						</div>
					</Li>
				</Char>

				<Img>
					<img src={imageUrl} width="100%" />
				</Img>
			</Row>

			<CEOS> 신촌 연합 IT 창업 동아리 CEOS</CEOS>
		</div>
	);
}

const Char = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 50%;
	margin-bottom: 1.5rem;
`;
const Info = styled.div`
	font-size: 14px;
`;
const Name = styled.div`
	font-size: 20px;
	font-weight: bold;
	margin-bottom: 10px;
`;
const Li = styled.div`
	font-size: 14px;
	color: rgb(0, 0, 153);
`;

const CEOS = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	font-size: 1.6rem;
`;

const Img = styled.div`
	width: 40%;
	height: 40%;
`;
export const Row = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin-bottom: 1.5rem;
`;
