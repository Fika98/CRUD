import React from 'react' 

const SearchBar = (props) => {
    const handleWhichInfoToPassUp = (evt) =>{
        props.handleSearchTerm(evt.target.value)
    }
    return(
        <div>
        <input 
        type = "text"
         name = "searchTerm" 
         placeholder="Search" 
         className = "search-box"
         value={props.searchTerm}
         onChange={handleWhichInfoToPassUp}
         />
        </div>
    )
};



export default SearchBar