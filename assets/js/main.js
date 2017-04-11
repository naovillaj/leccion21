var imagenClick = document.getElementById("modal");
var imagenes = document.getElementsByClassName("modalClick");
var boton = document.getElementById("cerrar");
var img = document.getElementById("imagenWork");
var body = document.getElementById("body");

//imagenClick.style.display = "none";

for(var i = 1; i<imagenes.length; i++){
	imagenes[i-1].addEventListener("click", function(e){
		e.preventDefault();
//		imagenClick.style.display = "block";
		imagenClick.classList.toggle("active");
		body.setAttribute("style", "overflow:hidden");
		img.setAttribute("src", this.src);
	})
}

boton.addEventListener("click", function(){
/*	imagenClick.style.display = "none";
*/	imagenClick.classList.toggle("active");
	body.setAttribute("style", "overflow:scroll");
})