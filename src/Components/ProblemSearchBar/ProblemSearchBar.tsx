import React, { useState } from 'react';
import data from '../../data/leetCode.json'
import {Problem} from "../Problem/ProblemType";
const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [matches, setMatches] = useState(Array<Problem>);

  const handleInputChange = (event : React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);

    // Call a function to search and update the matches
    searchMatches(query);
  };

  const searchMatches = (query : string) => {
    if(query.length > 3) {
        const filteredData = data.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
        ).slice(0, 5);;
        setMatches(filteredData);
    } else {
        setMatches([]);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleInputChange}
      />
      <ul>
        {matches.map((match) => (
          <li key={match.id}>{match.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;