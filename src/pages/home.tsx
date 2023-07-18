import DayCard from "../components/DayCard/DayCard";
import SearchBar from "../components/ProblemSearchBar/ProblemSearchBar";
import store from "../store/store";
import { Provider } from 'react-redux';

function Home() {
    return (
      <div className="App">
        <Provider store={store}>
          <p>Homepage</p>
          <SearchBar></SearchBar>
          <DayCard date={new Date()} />
        </Provider>
      </div>
    )
  }
  
  export default Home;