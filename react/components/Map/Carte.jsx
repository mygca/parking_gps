import React,{useEffect} from 'react';
import Linie from './Linie';

import {bg} from '../../data/svg/bg.js';
import{centerMap} from '../../functions/map/centerMap.js';
import{getGareId} from '../../functions/map/getGareId.js';

//import {STATIONS} from '../../data/stations.js'




function Carte({site,direction}) {

  useEffect(() => {
    centerMap({direction});
    //getGareId();
  },[])

  return (
    <div className="box--carte">
      <div className="carte__bg">{bg}</div>

      {(site === "athletik")? <div><Linie nameLine="b"/><Linie nameLine="d"/></div>
        // :(site === "aviron")?<Linie nameLine="b" />
        :(site === "badminton")?<Linie nameLine="b" />
        :(site === "handball")?<Linie nameLine="d" />
        :(site === "cheval")?<Linie nameLine="j" />
        :(site === "bateau")?<Linie nameLine="n" />
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