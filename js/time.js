var time;

function daojishi() {
	//			var future = (new Date().getTime())/1000+5*60*60;
	var future = (new Date().getTime()) / 1000 + 2 * 60 * 60 + 2 * 60 + 45;
	var now;
	var dis;
	var h, hh;
	var m, mm;
	var s, ss;
	time = setInterval(function() {
		now = new Date().getTime() / 1000;
		dis = future - now;
		h = Math.floor(dis / 3600);
		m = Math.floor((dis % 3600) / 60);
		s = Math.floor((dis % 3600) % 60);
		if(h <= 0) {
			hh = "00";
		} else if(h > 0 && h < 10) {
			hh = "0" + h.toString();
		} else {
			hh = h.toString();
		}
		if(m <= 0) {
			mm = "00";
		} else if(m > 0 && m < 10) {
			mm = "0" + m.toString();
		} else {
			mm = m.toString();
		}
		if(s <= 0) {
			ss = "00";
		} else if(s > 0 && s < 10) {
			ss = "0" + s.toString();
		} else {
			ss = s.toString();
		}
		document.getElementById("h").innerHTML = hh;
		document.getElementById("m").innerHTML = mm;
		document.getElementById("s").innerHTML = ss;
		if(dis <= 0) {
			clearInterval(time);
			daojishi();
		}
	}, 1000);
};
daojishi();