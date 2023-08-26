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
    // 1
    const API_BASE_URL = "https://api.artic.edu/api/v1/artworks";  
    // 2
    const searchPrefix = "/search?q=";  
    // 3 (captured by controlled form)
    
    // 3.5
    // const searchTerm = "miro"; 
    // Temp usage, commented out after search form was working  
    
    // 4 & 5
    const limit = "&limit=20"; // 20 results in the search 
    // TODO: Will be able to paginate. Make pageNum a var
    // Pass that in a handleClick function and use a CSS component 
    const paginate = "?page=1"; // 1 shows the first page of results
    // 6
    // The stumper on fields was the "&". Solved by looking at "query" and "limit" params
    const fields = 
    "&fields=id,title,artist_title,artist_display,date_display,medium_display,image_id,next_url,pagination.page,pagination.totalPages"   
    // 7
    const publicDomain = "&query[term][is_public_domain]=true"
    
    axios  
      .get(`${API_BASE_URL}${searchPrefix}${searchTerm}${fields}${publicDomain}${limit}${paginate}`)  
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

// HERO ICONS HEART
// STROKE
{/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
</svg> */}

// SOLID
{/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
</svg> */}


// HERO ICONS SEARCH
{/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
</svg> */}
