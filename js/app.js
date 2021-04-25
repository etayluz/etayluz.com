$(document).ready(function(e) {
	barHeight = 60
	fontSize = 20
	// $("body").append()

	

	
	$("body").append('<div id="homeFrame" style="position:absolute;top:'+ barHeight + 'px;left:0px;right:-2px;bottom:0px;background-color:green"></div>')
	$("#homeFrame").append('<div id="homeFrame" style="position:absolute;top:0px;right:0px;width:100%;bottom:0px;background-color:#d7d8d7;"></div>')
	$("#homeFrame").append('<img id="Wave" src="./images/wave2.gif" style="position:absolute;left:0px;top:0px;bottom:0px;right:0px;display:block;margin-left:auto;margin-right:auto;width:100%;height:100%;object-fit:cover;"/>')
	// $("#homeFrame").append('<div id="homeFrame" style="position:absolute;top:0px;left:50px;width:0%;bottom:0px;background-color:#d7d8d7;"></div>')

	textColor = '#000080'
	$("#homeFrame").append('<div id="name" style="position:absolute;top:60%;left:2.5%;width:100%;color:' + textColor + ';font-size:72px;font-family:Comic Sans MS;text-align:center;font-weight: bold;">ETAY LUZ</div>')
	$("#name").append('<div id="slogan" style="position:absolute;top:115%;left:0%;width:100%;color:' + textColor + ';font-size:32px;font-family:Comic Sans MS;text-align:center;">Engineer. Entrepreneur. Entertainer.</div>')
	$("#homeFrame").append('<div id="button" style="position:absolute;text-align:center;top:80%;left:2.5%;width:100%;"><br><button type="button" style="top:0%;height:100px;width:300px;color:white;background-color:#393F44;font-size:30px;border-radius:40px;" onclick="smoothScroll(document.getElementById(\'introFrame\'))">Have a listen</button></div>')

	// $("#homeFrame").append('<img id="Etay1" src="./images/9.png" style="position:absolute;left:0px;top:0px;bottom:0px;right:0px;display:block;margin-left:auto;margin-right:auto;width:100%;height:100%;object-fit:cover;"/>')	

	$("#homeFrame").append('<div id="introFrame" style="position:absolute;top:100%;left:0px;right:0px;height:80%;bottom:0px;background-color:#fae8bd"></div>')
	$("#introFrame").append('<div id="introhomeFrame" style="position:absolute;top:0px;left:0px;width:50%;bottom:0px"></div>')
	$("#introFrame").append('<div id="introhomeFrame" style="position:absolute;top:0px;right:0px;width:50%;bottom:0px;background-color:clear;"></div>')
	$("#introhomeFrame").append('<img id="Etay2" src="./images/Etay3_trans.png" style="position:absolute;left:0px;top:0px;bottom:0px;right:0px;display:block;margin-left:auto;margin-right:auto;width:100%;height:100%;object-fit:contain;"/>')
	$("#introhomeFrame").append('<div id="introTitle"                           style="position:absolute;left:100%;top:30%;width:80%;color:#393F44;font-size:50px;font-family:Georgia,sans-serif;line-height:1.3;color:#e80fe1">WHAT IS THIS?</div>')
	$("#introTitle").append('<div id="slogan" style="position:absolute;top:120%;left:0%;width:100%;color:#393F44;font-size:34px;font-family:Georgia,sans-serif;line-height:1.3;color:#e80fe1;line-height:1.5;">Welcome to my personal website! I just launched it for fun. I\'m still trying to figure out what I want to do with it. Feel free to look around!</div>')

	$("#introFrame").append('<div id="bioFrame" style="position:absolute;top:100%;left:0px;right:0px;height:70%;bottom:0px;background-color:#d6d8d6"></div>')
	$("#bioFrame").append('<div id="bioTitle" style="position:absolute;top:20%;left:20%;width:60%;color:#393F44;font-size:45px;font-family:Georgia,sans-serif;line-height:1.3;text-align:center;background-color:Transparent;">BIO</div>')
	$("#bioTitle").append('<div id="bioText" style="position:absolute;top:120%;left:7.5%;width:85%;color:#393F44;font-size:31px;font-family:Georgia,sans-serif;line-height:1.4;text-align:center;background-color:Transparent">Etay was born in 1984 in Tel Aviv, Israel but at age 9 his family moved to Chicago. In 2005 Etay graduated from the University of Illinois in Urbana-Champaign with a degree in Electrical Engineering. Since then he has worked for various technology corporations and startups in Tel Aviv, San Francisco, New York, Miami, and Chicago.</div>')

	$("#bioFrame").append('<div id="bioFrame2" style="position:absolute;top:100%;left:0px;right:0px;height:120%;bottom:0px;background-color:#fae8bd"></div>')
	
	$("#bioFrame2").append('<div id="biohomeFrame" style="position:absolute;top:0px;left:0px;width:50%;bottom:0px"></div>')
	$("#bioFrame2").append('<div id="biohomeFrame" style="position:absolute;top:0px;right:0px;width:50%;bottom:0px;background-color:clear;"></div>')
	// $("#biohomeFrame").append('<img id="Etay2" src="./images/Etay3_trans.png" style="position:absolute;left:0px;top:0px;bottom:0px;right:0px;display:block;margin-left:auto;margin-right:auto;width:50%;height:100%;object-fit:cover;"/>')
	// $("#biohomeFrame").append('<div id="introTitle" style="position:absolute;top:20%;left:10%;width:80%;color:#393F44;font-size:50px;font-family:Georgia,sans-serif;line-height:1.3;color:#e80fe1">WHAT IS THIS?</div>')
	$("#biohomeFrame").append('<img id="Etay2" src="./images/baby.png" style="position:absolute;left:0px;top:0px;bottom:0px;right:0px;display:block;margin-left:auto;margin-right:auto;width:100%;height:100%;object-fit:contain;"/>')
	$("#biohomeFrame").append('<div id="bioText" style="position:absolute;top:30%;left:110%;width:85%;color:#393F44;font-size:31px;font-family:Georgia,sans-serif;line-height:1.4;text-align:center;background-color:Transparent">Today Etay works for IBM as a software engineer implementing IBM\'s artifical intelligence and machine learning solutions for clients. Prior to joining IBM, Etay has worked for Motorola, Intel, Qualcomm, and a handful of startups.</div>')

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
	do { //find scroll container
			scrollContainer = scrollContainer.parentNode;
			if (!scrollContainer) return;
			scrollContainer.scrollTop += 1;
	} while (scrollContainer.scrollTop == 0);

	var targetY = 0;
	do { //find the top of target relatively to the container
			if (target == scrollContainer) break;
			targetY += target.offsetTop;
	} while (target = target.offsetParent);

	scroll = function(c, a, b, i) {
			i++; if (i > 30) return;
			c.scrollTop = a + (b - a) / 30 * i;
			setTimeout(function(){ scroll(c, a, b, i); }, 20);
	}
	// start scrolling
	scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}