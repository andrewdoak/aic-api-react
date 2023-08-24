/* eslint-disable react/prop-types */
 export default function ArtCard({artwork}) {  
  
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
        {/* IMAGE LINKS TO AIC OBJECT DETAIL PAGE */}
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