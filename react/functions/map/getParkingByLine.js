export default function getParkingByLine(gares, parkings){
  // line (string) = a, b, c, d j, l, n, p//
  // data (tab of object) = parkings


  // const parkingsByLine = [];

  // let json = JSON.parse(data)

  // for ( const parking of json ) {
  //   for ( const gareid of parking.gares_id ) {
  //     if(line.includes(gareid)){
  //       parkingsByLine.push(gareid)
  //     }
  //   }
  // }

  // return parkingsByLine;

  //const parkingsByLine = [];

  const garesIdLines = [];

  // const allGaresidFromPark = [];
  // // Transform into array
  // //let json = JSON.parse(parkings);

  // //console.log(json)

  // // for (const p of parkings) {
  // //   //console.log(p.company)
  // // }

  // // for (const p of gares) {
  // //   console.log(p.ligne)
  // // }

  // for (const p of parkings) {
  //   //console.log(p.ligne)
  //   allGaresidFromPark.push(p.gares_id)
  //   //console.log(allGaresidFromPark)
  // }

  // const flatAllGaresidFromPark = allGaresidFromPark.flat();
  // console.log(flatAllGaresidFromPark)


  /**
   * Function use as filter
   * that check parkings'gares_id
   * if they match gares array
   */
  // const MatchGareid = (gares, parkings) => {
  //   for (const p of parkings) {
  //     for (let i = 0; i < (p.gares_id).length; i++) {
  //       const parkingGareid = p.gares_id[i];
  //       if (gares.includes(parkingGareid))
  //       {
  //         parkingsByLine.push(p)
  //       }
        
  //     }
  //   }
  // }



 
  if (gares != null)
  {
    //const parkingsByLine = [];
    console.log('gares okay')
    //Object.keys(JSON.parse(gares)).map(function(key){return gares[key]})
    // for (const g of gares) {
    //   //console.log(p.company)
    //   //if (g.garesId == )
    //   //console.log(g.garesId)
    // }

    for (const g of gares) {

      //console.log(g.garesId.toString())
      garesIdLines.push(g.garesId.toString())
    }
    console.log(garesIdLines)




    
    // for (const p of parkings) {
    //   for (let i = 0; i < (p.gares_id).length; i++) {
    //     const parkingGareid = p.gares_id[i];
    //     if (gares.includes(parkingGareid))
    //     {
    //       parkingsByLine.push(p)
    //     }
        
    //   }
    // }
    // for (const p of parkings) {
    //   for (let i = 0; i < (p.gares_id).length; i++) {
    //     const parkingGareid = p.gares_id[i];
    //     if (gares.includes(parkingGareid))
    //     {
    //       parkingsByLine.push(p)
    //     }
        
    //   }
    // }
    // console.log(parkingsByLine)

    // const matchFilter = (x) => {
    //   for (const p of parkings) {
    //     for (const pgid of p.gares_id) {
    //       console.log(pgid)
    //     }
    //   }

    // }

    // matchFilter();
    const parkingList = [];
    for (const p of parkings) {
      //var t = typeof p.gares_id;
      //console.log(t);
      //console.log(typeof p.gares_id.toString())
      // for (const pgid of p.gares_id) {
      //   // console.log(pgid)
      //   // if ( )
      // }
      let itemParking = p.gares_id;
      parkingList.push(itemParking);
    }
    //console.log(parkingList);
    // const flatParkings = parkingList.flat()
    // console.log(typeof flatParkings)

    // const arrayParkings = Object.values(flatParkings)
    // console.log(typeof arrayParkings)

    const parkingsGares = [];

    for (let i = 0; i < parkingList.length; i++) {
      const element = parkingList[i];
      //console.log(element)
      parkingsGares.concat(typeof element)
      
    }

    //console.log(parkingsGares)

    // for (const g of gares) {
      
    //   for (const p of parkings) {
    //     //console.log(p.length)
    //     //console.log((p.gares_id).length)
    //     for (const pgid of p.gares_id) {
    //       console.log(pgid)
    //       for (let i = 0; i < pgid.length; i++) {
    //         const parkingGareid = pgid[i];
    //         console.log(parkingGareid)
    //         // if (gares.includes(parkingGareid))
    //         console.log(g.garesId)
    //         if (g.garesId == parkingGareid)
    //         {
    //           parkingsByLine.push(p)
    //         }
            
    //       }
    //     }
    //   }
    // }
    //console.log(parkingsByLine)

    // for (const p of parkings) {
    // const parkingsByLine = [];
    // //console.log(p.length)
    // //console.log((p.gares_id).length)
    //   for (const pgid of p.gares_id) {
    //     //console.log(pgid)
    //     for (let i = 0; i < pgid.length; i++) {
    //       const parkingGareid = pgid[i];
    //       //console.log(parkingGareid)
    //       // if (gares.includes(parkingGareid))
    //       //console.log(g.garesId)
    //       if (garesIdLines.includes(parkingGareid))
    //       {
    //         parkingsByLine.push(p)
    //       }
          
    //     }
    //   }
    //   console.log(parkingsByLine)
    // }
    
  


  } else {
    console.log('coco')
  }

  //console.log(parkingsByLine)
  //return parkingsByLine;
  
}