import { LocationCard } from "./Components/loactions/LocationCard";
import Data from "./Data.js";
import "./App.css";

function App() {
  console.log(Data);
  const cardData = Data.map((location) => {
    return <LocationCard key={location.id} {...location} />;
  });
  return (
    <>
      <nav className="navbar">
        <h1 className="nav-title">
          <i className="fa-solid fa-map-location-dot"></i> My Travel journal
        </h1>
      </nav>
      <section>{cardData}</section>
    </>
  );
}

export default App;
