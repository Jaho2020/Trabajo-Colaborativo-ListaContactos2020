const formularioContactos = document.querySelector('#contacto');

eventListeners();

function eventListeners(){
    //Cuando el fomulario crear y editar se ejecutan
    formularioContactos.addEventListener('submit', leerFormulario);
}

function leerFormulario(e){
	e.preventDefault();
	
	//Leer los datos de los inputs
	const nombre = document.querySelector('#nombre').value,
	      empresa = document.querySelector('#empresa').value,
	      telefono = document.querySelector('#telefono').value;

	if (nombre === '' || empresa === '' || telefono === '') {
		console.log('Al menos un campo esta vacio');
	}else {
		console.log('Tiene datos');
	}      
	
}