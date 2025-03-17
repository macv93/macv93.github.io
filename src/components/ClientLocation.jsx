import { useState, useEffect } from "react";

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
  });

  if (error) {
    return <div className="pl-4"></div>;
  }

  if (location === null) {
    return <div className="pl-4">Loading location...</div>;
  }

  return (
    <div className="p-4">
      <p>Your IP address: {location.ip}</p>
      <p>
        {location.city}, {location.region}, {location.country_name}
      </p>
    </div>
  );
};

export default ClientLocation;
