$(document).ready(function(e) {	

	$("#bioFrame2").append('<div id="hobbiesFrame" style="position:absolute;top:100%;left:0px;right:0px;height:120%;bottom:0px;background-color:#d6d8d6"></div>')
	$("#hobbiesFrame").append('<div id="hobbiesTitle" style="position:absolute;top:3%;left:19%;width:60%;color:#393F44;font-size:45px;font-family:Georgia,sans-serif;line-height:1.3;text-align:center;background-color:Transparent;">HOBBIES</div>')
	$("#hobbiesFrame").append('<div id="hobbieshomeFrame" style="position:absolute;top:15%;left:0px;width:50%;bottom:0px"></div>')
	$("#hobbiesFrame").append('<div id="hobbieshomeFrame" style="position:absolute;top:15%;right:0px;width:50%;bottom:0px;background-color:clear;"></div>')
	$("#hobbieshomeFrame").append('<img id="Etay2" src="./images/PaddleBoard.JPG" style="position:absolute;left:0px;top:0px;bottom:0px;right:0px;display:block;margin-left:auto;margin-right:auto;width:100%;height:100%;object-fit:contain;"/>')
	// $("#hobbieshomeFrame").append('<div id="hobbiesTitle" style="position:absolute;top:30%;left:10%;width:80%;color:#393F44;font-size:50px;font-family:Georgia,sans-serif;line-height:1.3;color:#fae8bd">Hobbies</div>')
	$("#hobbieshomeFrame").append('<div id="text" style="position:absolute;top:30%;left:110%;width:80%;color:#393F44;font-size:34px;font-family:Georgia,sans-serif;line-height:1.3;color:#393F44;line-height:1.5;">Hobbies include playing/singing on my guitar, hiking, kayaking, canoing, beach time, and working on this website</div>')
	
	// $("#hobbiesTitle").append('<div id="slogan" style="position:absolute;top:120%;left:0%;width:100%;color:#393F44;font-size:34px;font-family:Georgia,sans-serif;line-height:1.3;color:#e80fe1;line-height:1.5;">Welcome to my personal website! I just launched it for fun. I\'m still trying to figure out what I want to do with it. Feel free to look around!</div>')
});


window.smoothScroll = function(toFrame) {
	target = document.getElementById(toFrame)
	var scrollContainer = target;
	do { // find scroll container
			scrollContainer = scrollContainer.parentNode;
			if (!scrollContainer) return;
			scrollContainer.scrollTop += 1;
	} while (scrollContainer.scrollTop == 0);

	var targetY = 0;
	do { // find the top of target relatively to the container
			if (target == scrollContainer) break;
			targetY += target.offsetTop;
	} while (target = target.offsetParent);

	scroll = function(c, a, b, i) {
			i++;
      if (i > 30) return;
			c.scrollTop = a + (b - a) / 30 * i;
			setTimeout(function(){ scroll(c, a, b, i); }, 15);
	}
	// start scrolling
	scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}