var imagenClick = document.getElementById("modal");
var imagenes = document.getElementsByClassName("modalClick");
var boton = document.getElementById("cerrar");
var img = document.getElementById("imagenWork");
var body = document.getElementById("body");

for(var i = 1; i<imagenes.length; i++){
	imagenes[i-1].addEventListener("click", function(e){
		e.preventDefault();
		imagenClick.classList.toggle("active");
		body.setAttribute("style", "overflow:hidden");
		img.setAttribute("src", this.src);
	})
}

boton.addEventListener("click", function(){
	imagenClick.classList.toggle("active");
	body.setAttribute("style", "overflow:scroll");
})