import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import L, { Icon } from 'leaflet';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
// import { Icon } from "leaflet";


const ParkingInfoMap = ({name,legende,data}) => {
  // let imgPath={name}
  //console.log(eval(imgPath.name))
  const [lat, setLat] = useState()
  const [long, setLong] = useState()
  const [map, setMap] = useState()

  const markerSettings = () => {

    // console.log('mapi', data)
    // Object.values(data.geo).map((geo)=>{
    //   console.log("geopo",geo)
    // })
    // for (let i = 0; i < data.geo.length; i++) {
    //   const geoPoint = data.geo[i];
    // if(map != undefined || map != null){
    //   map.remove();
    // }

    var mymap = L.map('mapid').setView([48.8534, 2.3488], 20);
    setMap(mymap)
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 8,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: 'pk.eyJ1IjoiYW1kMTMiLCJhIjoiY2s3NWdndjM4MDF1ZzNkcDNwN3F5NHJvcyJ9.QgKI-pSwOzoMRoWJKDMSNA'
    }).addTo(mymap);


    let geoPoints = data.geo;
    let [geoLat, geoLong] = geoPoints;
      
    // }
    //  var marker = L.marker([geoPoint[0], geoPoint[1]]).addTo(mymap)
     var marker = L.marker([geoLat, geoLong]).addTo(mymap)

    // if(map != undefined || map != null){
    //   map.remove();
    // }
    

  }


  
  useEffect(()=>{
    
    // var mymap = L.map('mapid').setView([48.8534, 2.3488], 9.5);
    // L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    //   attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    //   maxZoom: 10,
    //   id: 'mapbox/streets-v11',
    //   tileSize: 512,
    //   zoomOffset: -1,
    //   accessToken: 'pk.eyJ1IjoiYW1kMTMiLCJhIjoiY2s3NWdndjM4MDF1ZzNkcDNwN3F5NHJvcyJ9.QgKI-pSwOzoMRoWJKDMSNA'
    // }).addTo(mymap);
    // var mymap = L.map('mapid').setView([48.8534, 2.3488], 11);

     markerSettings()

    // if(map != undefined || map != null){
    //   map.remove();
    // } 
    // else {
    //   markerSettings()
    // }
    // if(map != undefined || map != null){
    //   map.remove();
    // }
    // return () => {
    //   mymap.off();
    //   map.remove();
    // }
  }, [])

  return (
    <div className="parking__infoLine">
      <div id="mapid"></div>

    </div>
    // <Map 
    //   center={[48.8534, 2.3488]} 
    //   zoom={9.5}
    //   style={{ width: '100%', height: '180px'}}>
    //   <TileLayer
    //     url="&copy <a href='http://osm.org/copyright'>OpenStreetMap</a> contributors"
    //     attribution='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.pnhttps://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}'
        
    //   />
    // </Map>  
  );
}


// const position = [51.505, -0.09]
// const ParkingInfoMap = ({name,legende,data}) => {
//   <Map center={position} zoom={13}>
//     <TileLayer
//       url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//       attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
//     />
//     <Marker position={position}>
//       <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
//     </Marker>
//   </Map>
  
//   render(map, document.getElementById('mapid'))
//     return(
//       <div id="mapid"></div>
//     )
// }


// class ParkingInfoMap extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       lat: 51.505,
//       lng: -0.09,
//       zoom: 13
//     }
//   }

//   render() {
//     const position = [this.state.lat, this.state.lng];
//     return (
//       <div>
//         <LeafletMap center={position} zoom={this.state.zoom}>
//           <TileLayer
//             attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//             url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
//           />
//           <Marker position={position}>
//             <Popup>
//               A pretty CSS3 popup. <br/> Easily customizable.
//             </Popup>
//           </Marker>
//         </LeafletMap>
//         <div id="mapid"></div>

//       </div>
//     );
//   }
// }


// ReactDOM.render(<ParkingInfoMap />, document.getElementById('mapid'))

export default ParkingInfoMap;