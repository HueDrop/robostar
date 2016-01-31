placeText = function() {
  var title = document.getElementById('title').value;
  var artist = document.getElementById('artist').value;
  document.getElementById('songTitle').innerHTML = title;
  document.getElementById('songArtist').innerHTML = artist;
  document.getElementById('playingTitle').innerHTML = title;
}

var lyrics = "Baby you know that I miss you I wanna get with you tonight but I cannot babygirl And that's the issue See you when I get home"

robotSing = function() {
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
