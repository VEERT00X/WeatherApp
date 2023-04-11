const GetLocationFromBrowser = ({ setLocation }:any) => {
  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  return <button onClick={handleLocationClick}>Get Location</button>;
};

export default GetLocationFromBrowser;
