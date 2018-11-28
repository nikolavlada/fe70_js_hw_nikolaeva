


area.addEventListener('click', function () {
	var posX = event.offsetX;
	var posY = event.offsetY;
    var target = this;
    var figure = document.createElement('div');
    figure.className = 'figure';
    figure.style = "left:" + posX + "px; top:" + posY + "px";
    target.appendChild(figure);
    console.log(figure);
})

