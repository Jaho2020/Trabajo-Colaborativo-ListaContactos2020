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
	      telefono = document.querySelector('#telefono').value,
	      accion = document.querySelector('#accion').value;

	if (nombre === '' || empresa === '' || telefono === '') {
		//2 parametros: texto y clase
		mostrarNotificacion('Todos los Campos son Obligatorios', 'error');
	}else {
		//Pasa la validacion, crea llamado a Ajax
		const infoContacto = new new FormData();
		infoContacto.append('nombre', nombre);
		infoContacto.append('empresa', empresa);
		infoContacto.append('telefono', telefono);
		infoContacto.append('accion', accion);

		console.log(...infoContacto);

		if (accion === 'crear') {
			// Creamos nuevo elemento
			insertarBD(infoContacto);
		}else{
			//editamos el contacto
		}
	}      
	
}
/**Inserta en la base de datos via ajax**/
//Inserta en la base de datos via Ajax
function insertarBD(datos) {
    // llamado a ajax

    // crear el objeto
    const xhr = new XMLHttpRequest();

    // abrir la conexion
    xhr.open('POST', 'inc/modelos/modelo-contactos.php', true);

    // pasar los datos
    xhr.onload = function() {
         if(this.status === 200) {
              //console.log(JSON.parse( xhr.responseText) ); 
              // leemos la respuesta de PHP
              const respuesta = JSON.parse(xhr.responseText);

              // Inserta un nuevo elemento a la tabla
              const nuevoContacto = document.createElement('tr');

              nuevoContacto.innerHTML = `
                   <td>${respuesta.datos.nombre}</td>
                   <td>${respuesta.datos.empresa}</td>
                   <td>${respuesta.datos.telefono}</td>
              `;

              // crear contenedor para los botones
              const contenedorAcciones = document.createElement('td');

              // crear el icono de Editar
              const iconoEditar = document.createElement('i');
              iconoEditar.classList.add('fas', 'fa-pen-square');

              // crea el enlace para editar los registros
              const btnEditar = document.createElement('a');
              btnEditar.appendChild(iconoEditar);
              btnEditar.href = `editar.php?id=${respuesta.datos.id_insertado}`;
              btnEditar.classList.add('btn', 'btn-editar');

              // agregarlo al padre contenedor
              contenedorAcciones.appendChild(btnEditar);

              // crear el icono de eliminar registros
              const iconoEliminar = document.createElement('i');
              iconoEliminar.classList.add('fas', 'fa-trash-alt');

              // crear el boton de eliminar registros
              const btnEliminar = document.createElement('button');
              btnEliminar.appendChild(iconoEliminar);
              btnEliminar.setAttribute('data-id', respuesta.datos.id_insertado);
              btnEliminar.classList.add('btn', 'btn-borrar');

              // agregarlo al padre
              contenedorAcciones.appendChild(btnEliminar);

              // Agregarlo al tr para contenedores
              nuevoContacto.appendChild(contenedorAcciones);

              // agregarlo con los contactos
              listadoContactos.appendChild(nuevoContacto);

              //resetear los formularios
              document.querySelector('form').reset();
              //mostrar la notificacion
              mostrarNotificacion('Contacto Creado Correctamente', 'correcto');
        }
    }
    //enviar los datos
    xhr.send(datos)
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