placeText = function() {
  var title = document.getElementById('title').value;
  var artist = document.getElementById('artist').value;
  document.getElementById('songTitle').innerHTML = title;
  document.getElementById('songArtist').innerHTML = artist;
  document.getElementById('playingTitle').innerHTML = title;
}

robotSing = function() {
  var lyrics = document.getElementById('lyrics').innerHTML;
  responsiveVoice.speak(lyrics);
  document.getElementById('play').style.display = "none";
  document.getElementById('pause').style.display = "inline-block";
}

playRobot = function() {
  responsiveVoice.resume(lyrics);
  document.getElementById('play').style.display = "none";
  document.getElementById('pause').style.display = "inline-block";
}

pauseRobot = function() {
  responsiveVoice.pause(lyrics);
  document.getElementById('play').style.display = "inline-block";
  document.getElementById('pause').style.display = "none";
}
