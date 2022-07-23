import React, { createContext, useState, useContext } from "react";

const ChooseContext = createContext();

function UserContext({ children }) {
  const [tour, setTour] = useState(true);
  const [image, setImages] = useState(true);
  const [video, setVideo] = useState(true);
  const data = {
    tour,
    setTour,
    image,
    setImages,
    video,
    setVideo,
  };
  return (
    <ChooseContext.Provider value={data}>{children}</ChooseContext.Provider>
  );
}
export const useChoose = () => useContext(ChooseContext);

export default UserContext;
