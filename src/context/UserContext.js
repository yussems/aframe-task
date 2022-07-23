import React, { createContext, useState, useContext } from "react";

const ChooseContext = createContext();

function UserContext({ children }) {
  const [tour, setTour] = useState(false);
  const [image, setImages] = useState(false);
  const [video, setVideo] = useState(false);
  const tourCheck = () => {
    setTour(!tour);
  };
  const ımageCheck = () => {
    setImages(!image);
  };
  const videoCheck = () => {
    setVideo(!video);
  };
  const data = {
    tourCheck,
    ımageCheck,
    videoCheck,
    tour,
    image,
    video,
  };
  return (
    <ChooseContext.Provider value={data}>{children}</ChooseContext.Provider>
  );
}
export const useChoose = () => useContext(ChooseContext);

export default UserContext;
