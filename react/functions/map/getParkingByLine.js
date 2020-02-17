export default function getParkingByGareid(line, data){
  // line (string) = a, b, c, d j, l, n, p//
  // data (tab of object) = parkings


  const parkingsByLine = [];

  let json = JSON.parse(data)

  for ( const parking of json ) {
    for ( const gareid of parking.gares_id ) {
      if(line.includes(gareid)){
        parkingsByLine.push(gareid)
      }
    }
  }

  return parkingsByLine;

  
}