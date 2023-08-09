import React, { SetStateAction, useState } from 'react';
import data from '../../data/leetCode.json'
import {Problem} from "../Problem/ProblemType";
import SearchedProblemCard from '../Problem/SearchedProblemCard';
import { Dispatch } from 'redux';


const SearchBar = (props : { addToList: (newProblem: Problem) => void, problems: Problem[]; }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [matches, setMatches] = useState(Array<Problem>);

  const handleInputChange = (event : React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);
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
          <div key={match.id}>
            <SearchedProblemCard problem={match} addToList={() => {props.addToList(match)}}/>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;