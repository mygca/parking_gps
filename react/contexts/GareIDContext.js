import React from "react";

// set the defaults
const GareIDContext = React.createContext({
  selectedGareID: "rien",
  setSelectedGareID: () => {
    
  }
});

export default GareIDContext;