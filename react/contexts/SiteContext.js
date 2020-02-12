import React from "react";

// set the defaults
const SiteContext = React.createContext({
  selectedSite: "rien",
  setSelectedSite: () => {
    
  }
});

export default SiteContext;