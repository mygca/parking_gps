import React from 'react';

function Price({data}) {
  return (
    <div className="parking__price price">
      {/* <p className="price__price">24€</p> */}
      <p className="price__price">{data.prix_jour=='' || data.prix_jour=="Pas d'information" ? "Gratuit" : data.prix_jour + "€"}</p>
    <p className="price__legende">{data.prix_jour!='' && "Jour"}</p>
    </div>
  );
}

export default Price;