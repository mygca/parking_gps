import React,{useEffect} from 'react';
import Linie from './Linie';

import {bg} from '../../data/svg/bg.js';
import{centerMap} from '../../functions/map/centerMap.js';
import{getGareId} from '../../functions/map/getGareId.js';

//import {STATIONS} from '../../data/stations.js'




function Carte({sport}) {

  

  useEffect(() => {
    //centerMap({direction});
    //getGareId();
  },[])

  return (
    <div className="box--carte">
      <div className="carte__bg">{bg}</div>

    

     

      

      {(sport === "athletik")? <div><Linie nameLine="b"/><Linie nameLine="d"/></div>
        :(sport === "aviron")?<Linie nameLine="p" />
        :(sport === "badminton")?<Linie nameLine="b" />
        :(sport === "basketball-pierre")?<Linie nameLine="c" />
        :(sport === "basketball-accor")?<div><Linie nameLine="c" /><Linie nameLine="p" /></div>
        :(sport === "beachvolley")?<Linie nameLine="c" />
        :(sport === "bmx")?<div><Linie nameLine="n" /><Linie nameLine="c" /></div>
        :(sport === "box")?<Linie nameLine="c" />
        :(sport === "canoe")?<Linie nameLine="p" />
        :(sport === "cyclism-pist")?<div><Linie nameLine="n" /><Linie nameLine="c" /></div>
        :(sport === "cyclism-route")?<Linie nameLine="a" />
        :(sport === "equitation")?<Linie nameLine="c" />
        :(sport === "escrime")?<Linie nameLine="c" />
        :(sport === "foot")?<Linie nameLine="c" />
        :(sport === "golf")?<div><Linie nameLine="c" /><Linie nameLine="n" /></div>
        :(sport === "handball")?<Linie nameLine="n" />
        :(sport === "hockey")?<Linie nameLine="j" />
        :(sport === "judo")?<Linie nameLine="c" />
        :(sport === "lutte")?<Linie nameLine="p" />
        :(sport === "natation-denise")?<div><Linie nameLine="b"/><Linie nameLine="d"/></div>
        :(sport === "natation-paris")?<Linie nameLine="a" />
        :(sport === "natation-synchronisee")?<div><Linie nameLine="b" /><Linie nameLine="d" /></div>
        :(sport === "pentathlon")?<Linie nameLine="c" />
        :(sport === "plonge")?<div><Linie nameLine="b"/><Linie nameLine="d"/></div>
        :(sport === "rugby")?<Linie nameLine="c" />
        :(sport === "taekwondo")?<Linie nameLine="c" />
        :(sport === "tennis")?<Linie nameLine="c" />
        :(sport === "tennis-table")?<Linie nameLine="n" />
        :(sport === "vtt")?<Linie nameLine="n" />
        :(sport === "volleyball")?<Linie nameLine="b" />
        :(sport === "water-polo")?<Linie nameLine="b" />
        :
        <div>
          <Linie nameLine="a" />
          <Linie nameLine="b" />
          <Linie nameLine="c" />
          <Linie nameLine="d" />
          <Linie nameLine="n" />
          <Linie nameLine="p" />
          <Linie nameLine="j" />
        </div>
      } 
    </div>
  );
}

export default Carte;