function theBeatlesPlay(musicians, instruments){
  let beats = []
  for (var i = 0; i < musicians.length; i++) {
    for (var j = 0; j < instruments.length; j++) {
      beats.push(musicians[i] + " plays " + instruments[j])
    }
  }
  console.log(beats)
  return beats
}

theBeatlesPlay(["John","Ringo","Paul", "George"],["Guitar","Bass Guitar","Lead Guitar","Drums"])
