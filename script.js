var vid = document.getElementById("cp2077t");

function playVid() {
  vid.play();
   document.getElementById("videoBg").style.zIndex = "-1";
}

function pauseVid() {
  vid.pause();
   document.getElementById("videoBg").style.zIndex = "1";
}
