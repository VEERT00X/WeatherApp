import CityAutocomplete from "./CityAutocomplete";
import GetLocationFromBrowser from "./GetLocationBrowser";
import Weather from "./Weather";
import { useState } from "react";

interface location {
  latitude: number;
  longitude: number;
}
const App = () => {
  const [location, setLocation] = useState<location | null>(null);

  return (
    <>
      {location ? (
        <>
          <Weather location={location} />
        </>
      ) : (
        <>
          <CityAutocomplete location={location} setLocation={setLocation} />
          <button onClick={() => GetLocationFromBrowser(setLocation)}>
            Get Location from Browser
          </button>
        </>
      )}
    </>
  );
};

export default App;
