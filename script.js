button = document.getElementById('button');
img = document.getElementById('code');
text = document.getElementById('text');

button.onclick = function () {
	img.src = 'https://chart.googleapis.com/chart?cht=qr&chl='+text.value+'&chs=180x180&choe=UTF-8&chld=L|2'
}