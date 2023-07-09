import DayCard from "../components/DayCard/DayCard";
import SearchBar from "../components/ProblemSearchBar/ProblemSearchBar";
function Home() {
    return (
      <div className="App">
        <p>Homepage</p>
        <SearchBar></SearchBar>
        <DayCard date={new Date()} />
      </div>
    )
  }
  
  export default Home;