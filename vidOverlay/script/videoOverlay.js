var vid = document.getElementById("vid");
var vidOverlay = document.getElementById("videoOverlay");
var vidExit = document.getElementById("videoExit");

vid.onended = function() {
	vidOverlay.style.zIndex = "3";
	vidOverlay.src = "images/replay.png";
};

vid.onclick = function() {
	vid.pause();
	vidOverlay.style.zIndex = "3";
}

vidOverlay.onclick = function() {
	if (vid.ended){
		vid.loop;
		vidOverlay.src = "images/play.png"
	}
	vid.play();
	vidOverlay.style.zIndex = "1";
}

vidExit.onclick = function() {
	var element = document.getElementById("videoContainer");
	element.parentNode.removeChild(element);
}
