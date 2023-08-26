/* eslint-disable react/prop-types */
// TODO
// Wanted to, tried to, destructure, but seems like it broke connection to the API 
export default function ArtCard({artwork}) {  
  
  
  // IMAGE BASE URL (IIIF API)
  // https://api.artic.edu/docs/#iiif-image-api
  const iiif_URL = "https://www.artic.edu/iiif/2/"
  
  // IMAGE SIZE URL SCHEME
  // IIIF API default size. Different sizes can be specified
  // Larger for a download, for example
  const iiif_SIZE_reg = "/full/843,/0/default.jpg"
  
  // AIC SITE SEARCH BASE URL
  // AIC relies it's own API to build its site
  // SO, append the object ID key onto the this base URL 
  // YOU GET the AIC page for that object (img tag opens a new tab)
  const aic_URL = "https://www.artic.edu/artworks/"
  
  // ART CARD
  return (  
    <>
      <div className="art-card">  
        {/* IMAGE (DEFAULT SIZE) LINKS TO AIC PAGE */}
        <a target="_blank" rel="noreferrer" href={`${aic_URL}${artwork.id}`}>
          {/* TODO: FIGURE OUT DIV WRAP SO THAT BLUR IS INSIDE A HARD DROP SHADOW */}
          <img 
            className="art-card-img"
            src={`${iiif_URL}${artwork.image_id}${iiif_SIZE_reg}`} 
            height={300}
            alt={artwork.title}  
          />
        </a>
        {/* TITLE, DATE: LINKS TO AIC PAGE */}
        <a target="_blank" rel="noreferrer" href={`${aic_URL}${artwork.id}`}>
          <h4>{artwork.title}</h4>
        </a>
        {/* ARTIST */}
        <p>{`${artwork.artist_title} ${artwork.date_display}`}</p>
      </div> 
    </> 
  );  
}  

// TEMPLATE LITERAL PLAYGROUND
// {`${artwork.objKEY}, ${artwork.objKEY}`}

// USER TESTING PROMPTED UI UPDATE
// REMOVED MEDIUM DISPLAY, SOME OLDER CHINESE WORKS GOT WAY LONG
// artwork.medium_display