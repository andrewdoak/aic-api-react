/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react"; 
import { useState, useEffect } from "react"; 

  
export default function ArtCard({artwork}) {  
  const [ArtCard, setArtCard] = useState([]);
  const [numArtCard, setnumArtCard] = useState(0);
  
  const IIIFurl = "https://www.artic.edu/iiif/2/"
  
  return (  
    <div className="art-card">  
        {/* <img src={`${IIIFurl}${artwork.image_id}/full/843,/0/default.jpg`} alt={artwork.title} className="art-card-img" />  */}
        <h5>{artwork.title}{artwork.year_created}</h5>    
        <p>{artwork.artist_name}</p>  
        <p></p>  
        <p>{artwork.medium}</p>  
        <p>{artwork.description_text}</p> 
      </div>  
  );  
}  


/* 
{data.map((artwork) => (  
            <ArtCard key={artwork.id} artwork={artwork} />  
          ))}
*/