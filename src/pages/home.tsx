import DayCard from "../Components/DayCard";

function Home() {
    return (
      <div className="App">
        <p>Homepage</p>
        <DayCard date={new Date()} />
      </div>
    )
  }
  
  export default Home;