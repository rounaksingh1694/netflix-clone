import React, { Component, useEffect, useState } from "react";
import axios from "../axios";
import requests from "../requests";
import "../css/Banner.css";

const BASE_URL = `https://image.tmdb.org/t/p/original/`;

const Banner = () => {
	const [movie, setMovie] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const request = await axios.get(requests.fetchNetflixOriginals);
			const index = Math.floor(Math.random() * request.data.results.length);
			setMovie(request.data.results[index]);
		}
		fetchData();
	}, []);

	console.log("MOVIE BANNER", movie);

	function truncate(str, max) {
		return str?.length > max ? str.substr(0, max - 1) + "..." : str;
	}

	return (
		<header>
			<div
				className="banner"
				style={{
					backgroundSize: "cover",
					backgroundImage: `url(${BASE_URL}${movie?.backdrop_path})`,
					backgroundPosition: "center center",
				}}
			>
				<div className="banner__contents">
					<h1 className="banner__title">
						{movie?.title || movie?.name || movie?.original_name}
					</h1>

					<div className="banner__buttons">
						<button className="banner__button">Play</button>
						<button className="banner__button">My List</button>
					</div>

					<h1 className="banner__description">{movie?.overview}</h1>
				</div>
				<div className="banner--fadeBottom"></div>
			</div>
		</header>
	);
};

export default Banner;
