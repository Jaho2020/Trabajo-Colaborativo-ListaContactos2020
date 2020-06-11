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
		//2 parametros: texto y clase
		mostrarNotificacion('Todos los Campos son Obligatorios', 'error');
	}else {
		console.log('Tiene datos');
	}      
	
}

// Notificacion en pantalla  campo vacio
function mostrarNotificacion(mensaje, clase){
	const notificacion = document.createElement('div');
	notificacion.classList.add(clase,'notificacion', 'sombra');
	notificacion.textContent = mensaje;

	//formulario
	formularioContactos.insertBefore(notificacion, document.querySelector('form legend'));

	//Ocultar y mostrar la notificacion en pantalla
	setTimeout(() => {
		notificacion.classList.add('visible');

		setTimeout(() => {
			notificacion.classList.remove('visible');
			setTimeout(() =>{
				notificacion.remove();
			},500);
			     
		},3000);
	},100);
}