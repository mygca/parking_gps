import React from "react";

// set the defaults
const DirectionContext = React.createContext({
  selectedDirection: "hello",
  setSelectedDirection: () => {
    
  }
});

export default DirectionContext;