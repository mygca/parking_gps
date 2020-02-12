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
      return <div className="wrapper--line">{liniea}</div>;
    case 'b':
      return <div className="wrapper--line">{linieb}</div>;
    case 'c':
      return <div className="wrapper--line">{liniec}</div>;
    case 'd':
      return <div className="wrapper--line">{linied}</div>;
    case 'n':
      return <div className="wrapper--line">{linien}</div>;
    case 'j':
      return <div className="wrapper--line">{liniej}</div>;
    case 'p':
      return <div className="wrapper--line">{liniep}</div>;
    default:
      return "what";
  }
}

export default Linie;