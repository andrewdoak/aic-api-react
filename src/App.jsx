import { useState, useEffect } from "react";  
import axios from "axios";  
import ArtCard from "./components/ArtCard";
import SearchBar from "./components/SearchBar"  
  
// AIC API DOCS  
// https://api.artic.edu/docs/  
  
export default function App() {  

  // API Data State
  const [data, setData] = useState([]);  
  // SEARCH Term State
  const [searchTerm, setSearchTerm] = useState(""); 
  
  
  useEffect(() => {  
    // URL Scheme variables: use in THIS ORDER  
    const API_BASE_URL = "https://api.artic.edu/api/v1/artworks";  
    const searchPrefix = "/search?q=";  
    // const searchTerm = "miro"; // Temp usage, comment out with search form  
    const paginate = "?page=1"; // 1 shows the first page of results  
    const limitResults = "&limit=10"; // 10 results in the search 
    const fields = "&fields=id,title,artist_title,artist_display,date_display,medium_display,image_id" 
    // ${paginate}${limitResults}
    axios  
      .get(`${API_BASE_URL}${searchPrefix}${searchTerm}${fields}`)  
      .then((response) => setData(response.data.data));  
  }, [searchTerm]);  

  // https://api.artic.edu/api/v1/artworks/search?params=%7B%22q%22%3A%22cats%22%2C%22query%22%3A%7B%22term%22%3A%7B%22is_public_domain%22%3Atrue%7D%7D%7D
  
  if (data) {  
    return (  
      <div className="app-container">  
        {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
        <div className="search-bar"> 
          <SearchBar 
            artSearch={setSearchTerm} 
            searchTerm={searchTerm} 
            setData={setData}
          />
        </div>
        
        <h3>Art Cards</h3>  
        
        <div className="card-container">  
          {data.map((artwork) => {  
            return (
              <ArtCard 
                key={artwork.id} 
                artwork={artwork} 
              /> 
            ) 
          })}  
        </div> 
        {/* CLEAR SEARCH: MOVED TO SEARCHBAR COMPONENT */}
        {/* <button onClick={() => setData([])}>Reset</button>   */}         
     </div>   
    );  
  
  } else {  
    return <div>Loading...</div>;  
  }  
}

{/* CLEAR SEARCH: MOVED TO SEARCHBAR COMPONENT */}
{/* <button onClick={() => setData([])}>Reset</button>   */}
/* 
<img src={imageUrl} alt={artwork.title} className="art-image" />
{artwork.artist_name}
{artwork.year_created}
{artwork.medium}
{artwork.description_text}
*/

// TESTING STATE/VIEWS/AXIOS
// `https://api.github.com/users`