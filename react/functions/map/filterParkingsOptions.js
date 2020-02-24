export default function filterParkingsOptions(filter1, filter2, filter3, {shownParkings}, setParkings){
console.log('filterOptions')
  //const parkingsH24 = [];

  /** METHOD 1 FAILED */

  // let FiltersCombination = {

  //   combi0 : {
  //             f1: true,
  //             f2: false,
  //             f3: false,
  //             f4: () => shownParkings.filter(p => p.h24 == true)
  //           },
  //   combi1 : {
  //             f1: false,
  //             f2: true,
  //             f3: false,
  //             f4: () => shownParkings.filter(p => p.handicape == true)
  //           },
  //   combi2: {
  //             f1: false,
  //             f2: false,
  //             f3: true,
  //             f4: () => shownParkings.filter(p => p.camera == true)
  //           },
  //   combi3 : {
  //             f1: true,
  //             f2: true,
  //             f3: false,
  //             f4: () => shownParkings.filter(p => p.h24 == true && p.handicape == true)
  //           },
  //   combi4 : {
  //               f1: true,
  //               f2: false,
  //               f3: true,
  //               f4: () => shownParkings.filter(p => p.h24 == true && p.camera == true)
  //             },
  //   combi5 : {
  //             f1: false,
  //             f2: true,
  //             f3: true, 
  //             f4: () => shownParkings.filter(p => p.handicape == true && p.camera == true)
  //           },
  //   combi6 : {
  //             f1: true,
  //             f2: true,
  //             f3: true,
  //             f4: () => shownParkings.filter(p => p.h24 == true && p.handicape == true && p.camera == true)
  //           }
  // }

  

  // // if (filter1)
  // // {
  // //   console.log('filter 24h on')
  // //   console.log({shownParkings})
  // //   const parkingsH24 = shownParkings.filter( parkingH24 => parkingH24.h24 == true )
  // //   setParkings({parkingsH24})
  // // }
  // // else
  // // {
  // //   console.log("rrrh")
  // // }

  // for (const combination of Object.values(FiltersCombination)) 
  // {
  //   // for (const combi of combination) 
  //   // {
  //     // if ( filter1 == combi.f1 && filter2 == combi.f2 && filter3 == combi.f3)
  //     if ( filter1 == combination.f1 && filter2 == combination.f2 && filter3 == combination.f3)
  //     {

  //         const newParkings = combination.f4
  //         console.log(typeof newParkings)
  //         setParkings(newParkings)
  //     }  
  //   //}
    
  // }

  /** METHOD 2 */

  if ( filter1 && !filter2 && !filter3)
  {
    const newParkings = shownParkings.filter( parkingH24 => parkingH24.h24 == true )
    setParkings({newParkings})
  }
  else if ( !filter1 && filter2 && !filter3 ) 
  {
    const newParkings = shownParkings.filter( parkingH => parkingH.handicape == true )
    setParkings({newParkings})
  }
  else if ( !filter1 && !filter2 && filter3 ) 
  {
    const newParkings = shownParkings.filter( parkingSecure => parkingSecure.camera == true )
    setParkings({newParkings})
  }
  else if ( filter1 && filter2 && !filter3) 
  {
    const newParkings = shownParkings.filter( p => p.h24 == true && p.handicape == true)
    setParkings({newParkings})
  }
  else if ( filter1 && !filter2 && filter3 ) 
  {
    const newParkings = shownParkings.filter( p => p.h24 == true && p.camera == true)
    setParkings({newParkings})
  }
  else if ( !filter2 && filter2 && filter3 ) 
  {
    const newParkings = shownParkings.filter( p => p.handicape == true && p.camera == true)
    setParkings({newParkings})
  }
  else if ( filter2 && filter2 && filter3 ) 
  {
    const newParkings = shownParkings.filter( p => p.h24 == true && p.camera == true && p.handicape == true)
    setParkings({newParkings})
  }
  else 
  {
    return
  }

}