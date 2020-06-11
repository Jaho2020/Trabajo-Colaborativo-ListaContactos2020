

<?php include 'inc/vista/header.php'; ?>

<div class="contenedor-barra">
	<h1>Agenda de Contactos - Integracion Continua</h1>
</div>

<div class="bg-amarillo contenedor sombra">
	<form id="contacto" action="#">
		<legend>Añada un contacto </br>
			<span>Todos los campos son obligatorios	</span> 
		</legend>

		<div class="campos">

			<div class="campo">
				<label for="nombre">Nombre:</label>
			    <input type="text" placeholder="Nombre Contacto" id="nombre">
			</div>
			<div class="campo">
				<label for="empresa">Empresa:</label>
			    <input type="text" placeholder="Nombre Empresa" id="empresa">
			</div>
			<div class="campo">
				<label for="nombre">Telefono:</label>
			    <input type="tel" placeholder="Telefono De Contacto" id="nombre">
			</div>
			
			
		</div>

		    <div class="campo enviar">
				<input type="submit" value="AÑADIR">
			</div>


	</form>
</div>

<div class="contenedor bg-blanco sombra contactos">
	<div class="contenedorContactos">
	    <h2>Contactos</h2>

	    <input type="text" id="buscar" class="buscador sombra" placeholder="Buscar Contactos...">

	    <p class="total-contactos"><span>2</span> Contactos</p>

	    <div class="contenedor-tabla">
	    	<table id="listado-contactos" class="listado-contactos">
	    		<thead>
	    			<tr>
	    				<th>Nombre</th>
	    				<th>Empresa</th>
	    				<th>Telefono</th>
	    				<th>Acciones</th>
	    			</tr>
	    		</thead>
	    		<tbody>
	    		        <tr>
	    			         <td>Juan</td>
	    			         <td>udemy</td>
	    			         <td>01938893</td>
	    			         <td>
	    			         	<a class="btn-editar btn" href="#">
	    			     	         <i class="fas fa-pen-square"></i>
	    			        	</a>
	    			           <button type="button" class="borrar btn">
	    			     	       <i class="fas fa-trash-alt"></i>
	    			           </button>
	    			         </td>		             
	    			       
	    			    </tr>
	    			    <tr>
	    			         <td>Jorge</td>
	    			         <td>udemy</td>
	    			         <td>01938893</td>
	    			         <td>
	    			         	<a class="btn-editar btn" href="#">
	    			     	         <i class="fas fa-pen-square"></i>
	    			        	</a>
	    			           <button type="button" class="borrar btn">
	    			     	       <i class="fas fa-trash-alt"></i>
	    			           </button>
	    			         </td>
	    			             
	    			    </tr>
	    			    <tr>
	    			         <td>santiago</td>
	    			         <td>udemy</td>
	    			         <td>01938893</td>
	    			         <td>
	    			         	<a class="btn-editar btn" href="#">
	    			     	         <i class="fas fa-pen-square"></i>
	    			        	</a>
	    			           <button type="button" class="borrar btn">
	    			     	       <i class="fas fa-trash-alt"></i>
	    			           </button>
	    			         </td>
	    			             
	    			    </tr>
	    		</tbody>
	    	</table>
	    </div>
    </div>
</div>





<?php include 'inc/vista/footer.php'; ?>

