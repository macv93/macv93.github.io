import React, { useState, useEffect } from "react";

const ClientLocation = () => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const response = await fetch("https://ipapi.co/json/");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setLocation(data);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching location:", err);
      }
    };

    fetchLocation();
  }, []);

  if (error) {
    return <div style={{ paddingLeft: "1rem" }}></div>;
  }

  if (location === null) {
    return <div style={{ paddingLeft: "1rem" }}>Loading location...</div>;
  }

  return (
    <div style={{ padding: "1rem" }}>
      <p>Your IP address: {location.ip}</p>
      <p>
        {location.city}, {location.region}, {location.country_name}
      </p>
    </div>
  );
};

export default ClientLocation;
