// Leccion 20  funcion callback parte 1

function callbackPromedio (num1, num2, num3, callback){
	var promedio= ((num1+num2+num3)/3); 
	return callback(promedio);
}


// parte 2 segundero 

var tiempo=1;
function cambiarSegundero(){
	document.getElementById("titulo").innerHTML= tiempo;
	tiempo++;
}

function segundero(){
	setInterval(cambiarSegundero, 1000);
}
