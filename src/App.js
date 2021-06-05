import "./css/App.css";
import Row from "./components/Row";
import requests from "./requests";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";

function App() {
	return (
		<div className="app">
			<Navbar />
			<Banner />
			<div style={{ top: "-60", position: "relative" }}>
				<Row
					title="Netflix Originals"
					fetchUrl={requests.fetchNetflixOriginals}
				/>
				<Row title="Trending Now" fetchUrl={requests.fetchTrending} />
				<Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
				<Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
				<Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
				<Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
				<Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
				<Row
					title="Documantaries"
					fetchUrl={requests.fetchDocumentariesMovies}
				/>
			</div>
		</div>
	);
}

export default App;
