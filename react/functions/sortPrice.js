export default function sortPrice(isPrixUp, showParkingsBox){

  if (!isPrixUp) {
    showParkingsBox.sort((a,b) => 
      b.prix_jour - a.prix_jour
    )
  }
  else 
  {
    showParkingsBox.sort((a,b) => 
       a.prix_jour - b.prix_jour
    )

  }

}