import { useState, useEffect } from "react";
import fetchArtworks from "./services/artic-search";
import ArtCard from "./components/ArtCard";
import './App.css'

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    const searchArtworks = async () => {
      const results = await fetchArtworks(searchTerm);
      setArtworks(results);
    };

    searchArtworks();
  }, [searchTerm]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="app">
      <div className="search-bar">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search artworks"
        />
      </div>
      <div className="art-card-container">
        {artworks.map((artwork) => (
          <ArtCard key={artwork.id} artwork={artwork} />
        ))}
      </div>
    </div>
  );
  
};

export default App;
