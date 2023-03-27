import { createContext, useContext, useEffect, useState } from "react";

const DeviceContext = createContext(undefined);

export const DeviceProvider = ({ children }) => {

  const isMobile = () => {
    return window.innerWidth < 768
  }
  const [state, setState] = useState({ isMobile: isMobile() });

  useEffect(() => {
    const checkViewportWidth = (e) => {
      if (isMobile()) {
        setState({ isMobile: true });
      } else {
        setState({ isMobile: false });
      }
    };

    window.addEventListener("resize", checkViewportWidth);

    return () => {
      window.removeEventListener("resize", checkViewportWidth);
    };
  });

  return (
    <DeviceContext.Provider value={state}>{children}</DeviceContext.Provider>
  );
};

export const useDeviceContext = () => useContext(DeviceContext);
