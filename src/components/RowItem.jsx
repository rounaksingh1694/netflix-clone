import React, { Component, useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import DetailCard from "./DetailCard";
import "../css/Row.css";

const BASE_URL = `https://image.tmdb.org/t/p/original/`;

const RowItem = ({ movie, onMovieClick }) => {
	const [hovered, setHovered] = useState(false);

	useEffect(() => {
		console.log("HOVERED", hovered);
	}, [hovered]);

	function truncate(str, max) {
		return str?.length > max ? str.substr(0, max - 1) + "..." : str;
	}

	return (
		<div
			className={"row__item"}
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
			onClick={() => onMovieClick(movie)}
		>
			{hovered ? (
				<DetailCard
					title={movie?.title || movie?.name || movie?.original_name}
					overview={truncate(movie?.overview, 70)}
					rating={movie?.vote_average}
					image={`${BASE_URL}${movie?.backdrop_path}`}
				/>
			) : (
				<img
					style={{
						objectFit: "contain",
						maxHeight: "200px",
						borderRadius: "4px",
					}}
					key={movie.id}
					src={`${BASE_URL}${movie.poster_path}`}
					alt={movie.name}
				/>
			)}
		</div>
	);
};

export default RowItem;
