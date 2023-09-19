import React, { useEffect, useRef, useState } from "react";

const SearchButton = (props) => {
  const placeInputRef = useRef(null);
  const [value, setValue] = useState('');

  useEffect(() => {
    let v = props.position.city + " , " + props.position.country;
    setValue(v);
    
    // Load the Google Maps JavaScript API script
    loadGoogleMapsAPI().then(() => {
      initPlaceAPI();
    });
  }, []);

  const loadGoogleMapsAPI = () => {
    return new Promise((resolve) => {
      if (window.google && window.google.maps) {
        // Google Maps API is already loaded
        resolve();
      } else {
        // Create a script element to load the Google Maps API
        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places`;
        script.async = true;
        script.onload = resolve;
        document.head.appendChild(script);
      }
    });
  };

  const initPlaceAPI = () => {
    let autocomplete = new window.google.maps.places.Autocomplete(placeInputRef.current);
    
    autocomplete.addListener("place_changed", function () {
      let place = autocomplete.getPlace();

      const places = place.formatted_address.split(',');
      const city = places[0];
      const country = places[places.length - 1];
      const position = {
        lat: place.geometry.location.lat(),
        lon: place.geometry.location.lng(),
        city,
        country
      }
      setValue('');
      props.setCurrentLocation(position);
    });
  };

  return (
    <div className="form-control">
      <input
        id="input-with-icon-adornment"
        type="text"
        className="outlined-input"
        onChange={(e) => setValue(e.target.value)}
        value={value}
        ref={placeInputRef}
      />
      <div className="location-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M12 2C7.308 2 4 5.308 4 10c0 3.692 2.475 8.173 7.469 13.154l.531.531.531-.531C17.525 18.173 20 13.692 20 10c0-4.692-3.308-8-8-8zm0 20c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2z"/>
          <path d="M0 0h24v24H0z" fill="none"/>
        </svg>
      </div>
    </div>
  );
};

export default SearchButton;
