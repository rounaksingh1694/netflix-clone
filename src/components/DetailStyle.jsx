import styled from "styled-components";

export const DetailCard = styled.div`
	background-color: #181818;
	overflow: hidden;
	width: 230px;
	border-radius: 5px;
	margin: 10px
	padding: 0 0.02px 22px 0;
	box-shadow: 0 4px 30px 0 #0a0a0a;
	display: flex;
	transition: transform 450ms;
	flex-direction: column;
	align-items: flex-start;
`;
export const Photo = styled.img`
	width: 100%;
	object-fit: cover;
	max-height: 110px;
	margin-bottom: 10px;
`;
export const Text = styled.div`
	margin-bottom: 8px;
	margin-left: 14px;
	margin-right: 14px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`;
export const Title = styled.p`
	font-family: "Segoe UI";
	font-size: 12px;
	font-weight: 650;
	line-height: normal;
	color: #fff;
	margin-bottom: 6px;
`;
export const Overview = styled.p`
	max-width: 381px;
	font-family: "Segoe UI";
	font-size: 8px;
	font-weight: 550;
	line-height: normal;
	color: #bababa;
`;
export const Rating = styled.div`
	margin-left: 18px;
	display: flex;
	align-items: center;
	margin-bottom: 12px;
`;
export const Vector = styled.img`
	width: 20.27%;
	height: 50.63%;
	margin-right: 10.38px;
`;
export const RatingValue = styled.p`
	font-family: "Segoe UI";
	font-size: 10px;
	font-weight: 700;
	line-height: normal;
	color: #fff;
`;
