import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import MovieList from "./components/movielist/MovieList";
import { searchMovies, getMovieDetails, getLatestMovies } from "./api/MovieApi";
import MovieDetails from "./components/moviedetails/MovieDetails";
import LatestMovies from "./components/latestmovies/LatestMovies";
import Footer from "./components/footer/Footer";


function App() {
  // Search state
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showEmpty, setShowEmpty] = useState(false);

  const [latestMovies, setLatestMovies] = useState([]);
  const [latestLoading, setLatestLoading] = useState(true);

  const [selectedMovie, setSelectedMovie] = useState(null);

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  const handleViewDetails = (movie) => {
    setSelectedMovie(movie);
  };

  // Search handler
  const handleSearch = async (movieName) => {
    console.log("Searching:", movieName);

    setLoading(true);
    setShowEmpty(false);
    setMovies([]);

    try {

      // for Search movies
      const data = await searchMovies(movieName);
      console.log("Search result:", data);

      // temporary
      const firstMovie = data?.title_results?.[0];
      console.log("First movie:", firstMovie);
      const details = await getMovieDetails(firstMovie.id);
      console.log(
        "Movie Details JSON:",
        JSON.stringify(details, null, 2)
      );

      // Showing first movie object
      // console.log("First movie:", data?.title_results?.[0]);
      // console.log(
      //   "First movie JSON:",
      //   JSON.stringify(data?.title_results?.[0], null, 2)
      // );

      const results = data?.title_results || [];
      setMovies(results);

      // no results
      if (results.length === 0) {
        setShowEmpty(true);
        return;
      }

      // get first 8 movies
      const firstMovies = results.slice(0, 8);
      console.log("Movies to load:", firstMovies);

      // get details for each movie
      const detailedMovies = await Promise.all(
        firstMovies.map((movie) =>
          getMovieDetails(movie.id)
        )
      );
      console.log("Detailed movies:", detailedMovies);

      // store movies
      setMovies(detailedMovies);      
    } catch (error) {
      console.error("Movie search failed:", error);
      setMovies([]);
      setShowEmpty(true);
    } finally {
      setLoading(false);
    }
  };

  // selected theme
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");

    localStorage.setItem("theme", theme);
  }, [theme]);

  // latest movies
  useEffect(() => {
    const fetchLatestMovies = async () => {
      try {
        setLatestLoading(true);

        const data = await getLatestMovies();

        const results = data?.titles || [];

        const firstMovies = results.slice(0, 8);

        const detailedMovies = await Promise.all(
          firstMovies.map((movie) => getMovieDetails(movie.id))
        );

        setLatestMovies(detailedMovies);
      } catch (error) {
        console.error("Failed to load latest movies:", error);
      } finally {
        setLatestLoading(false);
      }
    };

    fetchLatestMovies();
  }, []);

  return (
    <main className="min-h-screen bg-white text-black transition-colors duration-300 dark:bg-black dark:text-white">
      {/* Header */}
      <Header theme={theme} setTheme={setTheme} />

      {/* Search Bar */}
      <SearchBar search={search} setSearch={setSearch} onSearch={handleSearch} />

      <LatestMovies movies={latestMovies} loading={latestLoading} onViewDetails={handleViewDetails} />

      <MovieList movies={movies} loading={loading} showEmpty={showEmpty} onViewDetails={handleViewDetails} />

      {selectedMovie && (
        <MovieDetails movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
      )}

      <Footer />
    </main>
  );
}

export default App;
