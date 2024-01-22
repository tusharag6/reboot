import React from "react";

const FacilityMap = () => {
  return (
    <div className="container relative mx-auto my-12 h-96 overflow-hidden lg:w-4/5">
      <iframe
        className="absolute left-0 top-0 h-full w-full"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12080.73732861526!2d-74.0059418!3d40.7127847!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM40zMDA2JzEwLjAiTiA3NMKwMjUnMzcuNyJX!5e0!3m2!1sen!2sus!4v1648482801994!5m2!1sen!2sus"
        frameBorder="0"
        allowFullScreen={true}
        aria-hidden="false"
      ></iframe>
    </div>
  );
};

export default FacilityMap;
