import axios from "../axios";
import "../css/Row.css";
import React, { Component, useEffect, useState } from "react";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import DetailCard from "./DetailCard";
import RowItem from "./RowItem";

const BASE_URL = `https://image.tmdb.org/t/p/original/`;

const Row = ({ title, fetchUrl }) => {
	const [movies, setMovies] = useState([]);
	const [trailerUrl, setTrailerUrl] = useState("");
	const [hovered, setHovered] = useState(false);

	const opts = {
		height: "390",
		width: "100%",
		playerVars: {
			// https://developers.google.com/youtube/player_parameters
			autoplay: 1,
		},
	};

	useEffect(() => {
		async function fetchData() {
			const request = await axios.get(fetchUrl);
			setMovies(request.data.results);
			return request;
		}
		fetchData();
	}, [fetchUrl]);

	const handleClick = (movie) => {
		if (trailerUrl) {
			setTrailerUrl("");
		} else {
			movieTrailer(movie?.title || movie?.name || movie?.original_name)
				.then((url) => {
					const urlParams = new URLSearchParams(new URL(url).search);
					setTrailerUrl(urlParams.get("v"));
				})
				.catch((error) => {
					console.log("ERROR TRAILER", error);
					setTrailerUrl("");
				});
		}
	};

	return (
		<div
			className="row"
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
		>
			<h1>{title}</h1>
			<div className="row__posters">
				{movies.map((movie) => (
					<RowItem
						movie={movie}
						onHoverStart={() => setHovered(true)}
						onHoverEnd={() => setHovered(false)}
						onMovieClick={handleClick}
					/>
				))}
			</div>
			{trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
		</div>
	);
};

export default Row;
