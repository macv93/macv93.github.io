const Strava = () => {
  return (
    <div className="fade-in">
      <iframe
        className="h-40 w-72 pl-4 mb-2 border-0 bg-transparent overflow-hidden"
        src="https://www.strava.com/athletes/17992761/activity-summary/3446d653b5c6f35f8a4e919af4802f99e71d23c5"
      ></iframe>
      <iframe
        className="h-[454px] w-72 pl-4 border-0 bg-transparent overflow-hidden"
        src="https://www.strava.com/athletes/17992761/latest-rides/3446d653b5c6f35f8a4e919af4802f99e71d23c5"
      ></iframe>
    </div>
  );
};

export default Strava;
