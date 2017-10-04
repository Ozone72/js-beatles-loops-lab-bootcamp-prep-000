function theBeatlesPlay(musicians, instruments){
  let beats = []
  for (var i = 0; i < musicians.length; i++) {
    for (var j = 0; j < instruments.length; j++) {
      console.log(musicians[i]+instruments[j])
    }
  }
}
theBeatlesPlay(["John","Ringo","Paul", "George"],["Guitar","Bass","Drums"])
