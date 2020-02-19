import React,{useEffect} from 'react';
import Linie from './Linie';

import {bg} from '../../data/svg/bg.js';
import{centerMap} from '../../functions/map/centerMap.js';
import {bgStation} from '../../data/svg/bgStation.js';


function Carte({sport}) {

  var LineGroup = {
    athletik:['b','d'],
    aviron:['p'],
    badminton:['b'],
    basketballpierre:['c'],
    basketballaccor:['p'],
    beachvolley:['c'],
    bmx:['c','n'],
    box:['c'],
    canoe:['p'],
    cyclismpist:['c','n'],
    cyclismroute:['a'],
    equitation:['c'],
    escrime:['c'],
    foot:['c'],
    golf:['c','n'],
    handball:['n'],
    hockey:['j'],
    judo:['c'],
    lutte:['p'],
    natationdenise:['b','d'],
    natationparis:['c'],
    natationsynchronisee:['b','d'],
    pentathlon:['c'],
    plonge:['b','d'],
    rugby:['c'],
    taekwondo:['c'],
    tennis:['c'],
    tennistable:['n'],
    volleyball:['b'],
    waterpolo:['b'],
    all:['a','b','c','d','n','p','j']
  };

  useEffect(() => {
    centerMap({sport});
    console.log("effect"+sport)

  },[])


  return (
    <div className="box--carte">
      {/* <div className="carte__bg">{bg}</div> */}
      <div className="carte__station">{bgStation}</div>
      <div>
        {LineGroup[sport].map((value, index) => {
          return <Linie key={index} nameLine={value}/>
        })}
      </div>
    </div>
  );
}

export default Carte;