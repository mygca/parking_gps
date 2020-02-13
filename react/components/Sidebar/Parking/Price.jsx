import React from 'react';

function Price({data}) {
  return (
    <div className="parking__price price">
      {/* <p className="price__price">24€</p> */}
      <p className="price__price">{data.PriceDay=='' || data.PriceDay=="Pas d'information" ? "- -" : data.PriceDay}€</p>
      <p className="price__legende">Jour</p>
    </div>
  );
}

export default Price;