/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';


// =============
// URL Variables
// ==============
// IIIF baseURL
const ImageURL = "https://www.artic.edu/iiif/2/";
// Image Size/Rotation/Format URL Scheme
const ImageSize = "/full/843,/0/default.jpg"


const ArtCard = ({ artwork }) => {
  return (
    <div className="art-card">
      <img
        src={`${ImageURL}${artwork.image_id}${ImageSize}`}
        alt={artwork.alt_text}
        className="image-description"
      />
      <h3>Artwork: {artwork.title}</h3>
      <h3>Artist: {artwork.artist_title}</h3>
      {/* <p>Date: {artwork.date_display}</p> */}
      <p>{artwork.medium_display}</p>
      <p>{artwork.description}</p>
    </div>
  );
};




// IMPORT
// import PropTypes from 'prop-types';

// ERROR: PropTypes Installed npm prop-types
// Defined PropTypes as Strings per:
// https://www.freecodecamp.org/news/how-to-use-proptypes-in-react/

// Validating React component props:
// https://www.youtube.com/watch?v=SKqFMYOSy4g


// ArtCard.propTypes.object = {
//   artwork: PropTypes.string,
//   title: PropTypes.string,
//   artist_title: PropTypes.string,
//   date_display: PropTypes.string,
//   medium_description: PropTypes.string,
//   description: PropTypes.string,
// }

export default ArtCard;
