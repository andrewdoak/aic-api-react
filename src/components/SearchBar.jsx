/* eslint-disable react/prop-types */

export default function Search ({searchTerm, artSearch, setData}) {

    // update setData as typing happens
      const handleChange = (evt) => {
        // Detect search term
        artSearch(evt.target.value );
      };
    
      const handleSubmit = (evt) => {
        // Prevent automatic page refresh
        evt.preventDefault();
    
      };
    
      
        return (
          
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="search"
              placeholder="Search for Art"
              onChange={handleChange}
              value={searchTerm}
              name="searchTerm"
             
            />
            {/* RESET SEARCH RESULTS */}
            {/* SETS DATA TO EMPTY ARRAY */}
            <input type="submit" value="Reset" onClick={() => setData([])} />
          </form>
          
      );
        }