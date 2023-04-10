import axios from "axios";

const CustomGetGeolocation = async ({ setLocation, cityName }: any) => {
  const apiKey = import.meta.env.VITE_SOME_KEY;
  const url = `https://api.opencagedata.com/geocode/v1/json?q=${cityName}&key=${apiKey}&limit=1`;
  const response = await axios.get(url);
  const data = await response.data;
  const result = data.results[0].geometry;
  setLocation({
    latitude: result.lat,
    longitude: result.lng,
  });
};

export default CustomGetGeolocation;
