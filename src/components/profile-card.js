import React from "react";
import styled from "styled-components";

import Home from "../../pages/index";

export default function ProfileCard(
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
) {
	return (
		<Wrapper>
			<Row>
				<Char>
					<Info>
						<Name>
							{name}({age})
						</Name>

						<strong>{role}</strong>
						<p>
							{univ}대학교 {major}과
						</p>
					</Info>
					<Li>
						<p>{phoneNum}</p>
						<p>{email}</p>
						<p>
							<a href={githubLink}>{githubLink}</a>
						</p>
					</Li>
				</Char>

				<Img src={imageUrl} />
			</Row>

			<Ceos> 신촌 연합 IT 창업 동아리 CEOS</Ceos>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	width: 45%;
	background-color: rgb(255, 255, 255);
	margin-bottom: 20px;
	border-image: initial;
	padding: 15px;
	border-width: 1px;
	border-style: solid;
	border-color: rgb(204, 204, 204);
	border-radius: 15px;
`;

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

const Ceos = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	font-size: 1.6rem;
`;

const Img = styled.img`
	width: 40%;
	height: 40%;
`;
const Row = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin-bottom: 1.5rem;
`;
