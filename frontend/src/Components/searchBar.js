import React, { useState } from 'react';


const SearchBar = (props) => {
    const [search, setSearch] = useState('');

    const inputChange = (e) => {
        setSearch(e.target.value)
    }



    return (
        <div id="searchBar" className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Search for a meal" aria-label="Search for a meal" aria-describedby="basic-addon2" value={search} onChange={inputChange} />
            <div className="input-group-append">
                <button className="btn btn-secondary" type="button" onClick={() => props.fetchMeal(search)}>Search</button>
            </div>
        </div>
    );
}

export default SearchBar;