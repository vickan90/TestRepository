function kaiJiInit() {
	var door = document.querySelector(".door");
	var up = document.querySelector(".door>.up");
	var down = document.querySelector(".door>.down");
	var line = document.querySelector(".door>.line");
	var span = document.querySelector(".content>span");
	line.style.width = "100%";
	line.addEventListener("transitionend", function() {
		this.style.display = 'none';
		up.style.height = 0;
		down.style.height = 0;
	});
	up.addEventListener("transitionend", function() {
		door.remove();
		span.style.top = '280px';
	});
}