const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians, instruments){
  let beats = []
  for (var i = 0; i < musicians.length; i++) {
      beats.push(musicians[i] + " plays " + instruments[i])
  }
  console.log(beats)
  return beats
}

theBeatlesPlay(["John","Ringo","Paul", "George"],["Guitar","Bass Guitar","Lead Guitar","Drums"])
