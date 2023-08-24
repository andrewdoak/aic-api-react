/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react"; 
import { useState, useEffect } from "react"; 

  
export default function ArtCard({artwork}) {  
  const [ArtCard, setArtCard] = useState([]);
  
  // AIC Image API Base URL
  // https://api.artic.edu/docs/#iiif-image-api
  const IIIFurl = "https://www.artic.edu/iiif/2/"
  // AIC Uses it's own API for its own site
  // So appending the image ID key onto the base URL 
  // Will load AIC's page for that object
  const AICurl = "https://www.artic.edu/artworks/"
  return (  
    <>
      <div className="art-card">  
        <a target="_blank" rel="noreferrer" href={`${AICurl}${artwork.id}`}>
          <img 
            className="art-card-img"
            src={`${IIIFurl}${artwork.image_id}/full/843,/0/default.jpg`} 
            height={300}
            alt={artwork.title}  
          />
        </a>
        <h3>{artwork.title}</h3>
        <p>{artwork.date_display}</p>
        <p>{artwork.medium_display}</p>
        <p>{artwork.artist_title}</p>  
      </div> 
    </> 
  );  
}  

// {/* <img src={`${IIIFurl}${artwork.image_id}/full/843,/0/default.jpg`} alt={artwork.title} className="art-card-img" />  */}
// <p>{artwork.year_created}</p>
// <p>{artwork.artist_name}</p>  
// <p></p>  
// <p>{artwork.medium}</p>  
// <p>{artwork.description_text}</p>
/* 
{data.map((artwork) => (  
            <ArtCard key={artwork.id} artwork={artwork} />  
          ))}
*/