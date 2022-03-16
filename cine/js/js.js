function validarBusqueda() {
var recogeDatos = document.getElementById('validacion').value;

if (recogeDatos.length < 4) {
	alert("La busqueda contiene menos de 4 caracteres");
}
}

function generos() {
	var objeto_select = document.getElementsByTagName('select')[0];
	var lista_generos=["Tipo de genero","fantástico", "histórico", "documental","Adulto"];
	for (i=0; i<lista_generos.length; i++) {
		var objeto_option =	document.createElement("option");
		objeto_option.value=lista_generos[i];
		objeto_option.innerHTML=lista_generos[i];
		objeto_select.appendChild(objeto_option);

	}
}

function validarOpcion() {
	var pelicula = document.getElementById('validacion').value;
	var genero = document.getElementsByTagName('select')[0].value;
	var boton = document.getElementsByTagName('input')[1];
	alert ("Se va a registrar la película con título "+ pelicula +" y de género " + genero);

	
}