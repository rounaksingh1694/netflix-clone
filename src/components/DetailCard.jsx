import React from "react";
import {
	DetailCard,
	Photo,
	Text,
	Title,
	Overview,
	Rating,
	Vector,
	RatingValue,
} from "./DetailStyle";

const BASE_URL = `https://image.tmdb.org/t/p/original/`;

const DetailCardComponent = ({ title, overview, rating, image }) => {
	console.log("IMAGE", image);
	return (
		<DetailCard>
			<Photo alt="" src={image} />
			<Text>
				<Title>{title}</Title>
				<Overview>{overview}</Overview>
			</Text>
			<Rating>
				<Vector
					alt=""
					src="https://static.overlay-tech.com/assets/95015885-2c47-45a8-a38a-e3e4cd16b9a4.svg"
				/>
				<RatingValue>{rating}</RatingValue>
			</Rating>
		</DetailCard>
	);
};

export default DetailCardComponent;
