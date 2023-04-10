const GetLocationFromBrowser = (setLocation: any) => {
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
}

export default GetLocationFromBrowser;