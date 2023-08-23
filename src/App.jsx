import { useState, useEffect } from "react";
import axios from "axios";

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // const API_BASE_URL = "https://api.artic.edu/api/v1/artworks";
    // const searchTerm = "cats";

    // `https://api.github.com/users`
    axios
      .get(`https://api.artic.edu/api/v1/artworks?page=1&limit=10`)
      .then((response) => setData(response.data.data));
  }, []); // Dependency Array is VERY important, for data to load ONCE.

  if (data) {
    return (
      <div>
        <h1>Art Cards</h1>
        <div className="card-container">
          {data.map((artwork) => {
            return (
              <div className="cards" key={artwork.id}>
                <h5>{artwork.title}</h5>
              </div>
            );
          })}
        </div>
        {/* When clicked, useState is set to empty array */}
        <button onClick={() => setData([])}>Reset</button>
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
}

/* 
<img src={imageUrl} alt={artwork.title} className="art-image" />
{artwork.artist_name}
{artwork.year_created}
{artwork.medium}
{artwork.description_text}
*/
