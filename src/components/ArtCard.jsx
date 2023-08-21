
// import React from 'react';
import PropTypes from 'prop-types';

// Validating React component props:
// https://www.youtube.com/watch?v=SKqFMYOSy4g
const ArtCard = ({ artwork = [] }) => {
  return (
    <div className="art-card">
      <img
        src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`}
        alt={artwork.title}
        className="descriptionImage"
      />
      <h1>{artwork.title}</h1>
      <h3>{artwork.artist_title}</h3>
      <p>{artwork.date_display}</p>
      <p>{artwork.medium_description}</p>
      <p>{artwork.description}</p>
    </div>
  );
};

// PropTypes Error: Installed npm prop-types
// Defined PropTypes as Strings per:
// https://www.freecodecamp.org/news/how-to-use-proptypes-in-react/
ArtCard.propTypes = {
  artwork: PropTypes.string,
  title: PropTypes.string,
  artist_title: PropTypes.string,
  date_display: PropTypes.string,
  medium_description: PropTypes.string,
  description: PropTypes.string,
}

export default ArtCard;
