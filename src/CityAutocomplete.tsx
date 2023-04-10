import { useState } from "react";
import axios from "axios";
import CustomGetGeolocation from "./GeoLocation";

function CityAutocomplete({ location, setLocation }:any) {
  const [inputValue, setInputValue] = useState("");
  const [suggestedCities, setSuggestedCities] = useState([]);

  const handleInputChange = async (event: any) => {
    const input = event.target.value;
    setInputValue(input);

    // Make API call to get suggested cities
    const response = await axios.get(
      `https://api.teleport.org/api/cities/?search=${input}&limit=5`
    );
    const cities = response.data._embedded["city:search-results"].map(
      (result: any) => result.matching_full_name
    );

    // Update state with suggested cities
    setSuggestedCities(cities);
  };

  const handleCitySelection = (city: any) => {
    CustomGetGeolocation({
      setLocation: setLocation,
      cityName: city,
    });
    setSuggestedCities([]);
  };

  return (
    <div>
      <label>City Name:</label>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <ul>
        {suggestedCities.map((city) => (
          <li key={city} onClick={() => handleCitySelection(city)}>
            {city}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CityAutocomplete;
