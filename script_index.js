// Animacao bem vindo
var txtsection1 = document.getElementById ("txtsection1")
var bemvindo = document.getElementById ("bemvindo")
var click = document.getElementById ("click")

txtsection1.addEventListener ("click", animation)

function animation () {
    click.style.display = "none"
    setTimeout (larg, 100)
}
function larg () {
    txtsection1.style.width = "450px"
    txtsection1.style.height = "35px"
    setTimeout (on, 500)
}
function on () {
    bemvindo.style.display = "inline"
}



// Animacao scrollSuave
$('ul a').click(function(e){
	e.preventDefault();
	var id = $(this).attr('href'),
			targetOffset = $(id).offset().top,
			menuHeight = $('nav').innerHeight();

	console.log(menuHeight);

	$('html, body').animate({
		scrollTop: targetOffset - menuHeight
	}, 500);
});

