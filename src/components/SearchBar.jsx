/* eslint-disable react/prop-types */
import { useState } from 'react';  
import { searchArtworks } from './services/artic-search';  
  
const SearchBar = ({ onSearch }) => {  
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
  
export default SearchBar;