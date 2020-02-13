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
        :(site === "aviron")?<Linie nameLine="p" />
        :(site === "badminton")?<Linie nameLine="b" />
        :(site === "basketball-pierre")?<Linie nameLine="c" />
        :(site === "basketball-accor")?<div><Linie nameLine="c" /><Linie nameLine="p" /></div>
        :(site === "beachvolley")?<Linie nameLine="c" />
        :(site === "bmx")?<div><Linie nameLine="n" /><Linie nameLine="c" /></div>
        :(site === "box")?<Linie nameLine="c" />
        :(site === "canoe")?<Linie nameLine="p" />
        :(site === "cyclism-pist")?<div><Linie nameLine="n" /><Linie nameLine="c" /></div>
        :(site === "cyclism-route")?<Linie nameLine="a" />
        :(site === "equitation")?<Linie nameLine="c" />
        :(site === "escrime")?<Linie nameLine="c" />
        :(site === "foot")?<Linie nameLine="c" />
        :(site === "golf")?<div><Linie nameLine="c" /><Linie nameLine="n" /></div>
        :(site === "handball")?<Linie nameLine="n" />
        :(site === "hockey")?<Linie nameLine="j" />
        :(site === "judo")?<Linie nameLine="c" />
        :(site === "lutte")?<Linie nameLine="p" />
        :(site === "natation-denise")?<div><Linie nameLine="b"/><Linie nameLine="d"/></div>
        :(site === "natation-paris")?<Linie nameLine="a" />
        :(site === "natation-synchronisee")?<div><Linie nameLine="b" /><Linie nameLine="d" /></div>
        :(site === "pentathlon")?<Linie nameLine="c" />
        :(site === "plonge")?<div><Linie nameLine="b"/><Linie nameLine="d"/></div>
        :(site === "rugby")?<Linie nameLine="c" />
        :(site === "taekwondo")?<Linie nameLine="c" />
        :(site === "tennis")?<Linie nameLine="c" />
        :(site === "tennis-table")?<Linie nameLine="n" />
        :(site === "vtt")?<Linie nameLine="n" />
        :(site === "volleyball")?<Linie nameLine="b" />
        :(site === "water-polo")?<Linie nameLine="b" />
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