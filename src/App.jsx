import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {

  // Search state
  const [search, setSearch] = useState("");

  // Theme state
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "dark"
  );

  // Search handler
  const handleSearch = (movieName) => {
    console.log("Searching:", movieName);
  };

  // Apply selected theme
  useEffect(() => {
    document.documentElement.classList.toggle(
      "dark",
      theme === "dark"
    );

    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <main className="min-h-screen bg-white text-black transition-colors duration-300 dark:bg-black dark:text-white">

      {/* Header */}
      <Header
        theme={theme}
        setTheme={setTheme}
      />

      {/* Search Bar */}
      <SearchBar
        search={search}
        setSearch={setSearch}
        onSearch={handleSearch}
      />

    </main>
  );
}

export default App;