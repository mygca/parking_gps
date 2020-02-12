import React from 'react';
import Linie from './Linie';

import {bg} from '../../data/svg/bg.js';



function Carte() {

  return (
    <div className="box--carte">
      <div className="carte__bg">{bg}</div>
      {/* <img className="carte__bg" src="../img/ilemap.svg"/> */}
      <Linie nameLine="a" />
      <Linie nameLine="b" />
      <Linie nameLine="c" />
      <Linie nameLine="d" />
      <Linie nameLine="n" />
      <Linie nameLine="p" />
      <Linie nameLine="j" />

      {/* {centerCarte()} */}
    </div>
  );
}

export default Carte;