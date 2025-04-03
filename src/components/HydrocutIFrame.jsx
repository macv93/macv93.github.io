const HydrocutIFrame = () => {
  return (
    <iframe
      className="p-4 pr-4 sm:w-[280px] sm:h-[157.5px] md:w-[560px] md:h-[315px] fade-in"
      src="https://www.youtube.com/embed/k6_N9JR1A_I?si=fIqaU8y2CIqQ6ZVz&amp;start=45"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen={true}
    ></iframe>
  );
};

export default HydrocutIFrame;
