import React from 'react';

import {liniea} from '../../data/svg/linieA.js';
import {linieb} from '../../data/svg/linieB.js';
import {liniec} from '../../data/svg/linieC.js'
import {linied} from '../../data/svg/linieD.js';
import {linien} from '../../data/svg/linieN.js';
import {liniej} from '../../data/svg/linieJ.js';
import {liniep} from '../../data/svg/linieP.js';

function Linie(nameLine) {

  switch (nameLine.nameLine) {
    case 'a':
      return <div>{liniea}</div>;
    case 'b':
      return <div>{linieb}</div>;
    case 'c':
      return <div>{liniec}</div>;
    case 'd':
      return <div>{linied}</div>;
    case 'n':
      return <div>{linien}</div>;
    case 'j':
      return <div>{liniej}</div>;
    case 'p':
      return <div>{liniep}</div>;
    default:
      return "what";
  }
}

export default Linie;