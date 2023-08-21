// import React, { useState } from 'react';  
import { searchArtworks } from '../services/aic-search'; 
import PropTypes from 'prop-types';

// Validating React component props:
// https://www.youtube.com/watch?v=SKqFMYOSy4g 
  
const SearchBar = ({ onSearch  = []  }) => {  
  const [searchTerm, setSearchTerm] = useState('');  
  
  const handleSubmit = async (event) => {  
    event.preventDefault();  
    if (searchTerm) {  
      const artworks = await searchArtworks(searchTerm);  
      onSearch(artworks);  
    }  
  };  
  
  return (  
    <form onSubmit={handleSubmit}>  
      <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />  
      <button type="submit">Search</button>  
    </form>  
  ); 
   
};  
  
// PropTypes Error: Installed npm prop-types
// Defined PropTypes as Strings per:
// https://www.freecodecamp.org/news/how-to-use-proptypes-in-react/
SearchBar.propTypes = {
    onSearch: PropTypes.string,
  }
export default SearchBar; 