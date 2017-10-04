function theBeatlesPlay(musicians, instruments){
  let beatles = []
  for (var i = 0; i < musicians.length; i++) {
    for (var j = i; j < instruments.length, j++){
      console.log(musicians[i]+instruments[j]);
    }
  }
}
