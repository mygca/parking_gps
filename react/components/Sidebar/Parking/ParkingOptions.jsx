import React from 'react';


// if valeur true -> .parkingOption (opacity: 1)

function ParkingOptions({name,isParkingOption,data}) {

  switch (name) {
    case '24':
      return <div className={"parkingOption parkingOption--"+name + " parkingOption parkingOption--"+data.h24}></div>;
    case 'handicape':
      return <div className={"parkingOption parkingOption--"+name + " parkingOption parkingOption--"+data.handicape}></div>;
    case 'securite':
      return <div className={"parkingOption parkingOption--"+name + " parkingOption parkingOption--"+data.camera}></div>;
  }
}

 // return (
  //   <div className={isParkingOption?
  //       "parkingOption parkingOption--"+name + "parkingOption--"+isParkingOption
  //     :
  //       "parkingOption parkingOption--"+name
  //     } ></div>
  // );

export default ParkingOptions;