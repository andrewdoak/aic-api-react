import "./App.css"
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
    // DO NOT CHANGE THE ORDER OF THE URL SCHEME. REQUEST WILL FAIL.
    const API_BASE_URL = "https://api.artic.edu/api/v1/artworks";  
    const searchPrefix = "/search?q=";  
    // const searchTerm = "miro"; // Temp usage, comment out with search form  
    // The stumper on fields was the "&". Solved by looking at "query" and "limit" params
    const fields = 
    "&fields=id,title,artist_title,artist_display,date_display,medium_display,image_id,next_url" 
    // const paginate = "?page=1"; // 1 shows the first page of results  
    const limit = "&limit=20"; // 10 results in the search 
    
    axios  
      .get(`${API_BASE_URL}${searchPrefix}${searchTerm}${fields}${limit}`)  
      .then((response) => setData(response.data.data));  
  }, [searchTerm]);  

  
  if (data) {  
    return (  
      <div className="app-container">  
        <div className="search-bar"> 
          <SearchBar 
            artSearch={setSearchTerm} 
            searchTerm={searchTerm} 
            setData={setData}
          />
        </div>
        
        <h3>From the Collection</h3>  
        
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
     </div>   
    );  
  
  } else {  
    return <div>Loading...</div>;  
  }  
}

{/* CLEAR SEARCH: MOVED TO SEARCHBAR COMPONENT */}
{/* <button onClick={() => setData([])}>Reset</button>   */}

// TESTING STATE/VIEWS/AXIOS
// `https://api.github.com/users`