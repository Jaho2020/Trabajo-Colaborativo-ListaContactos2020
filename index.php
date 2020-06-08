

<?php include 'inc/vista/header.php'; ?>

<div class="contenedor-barra">
	<h1>Agenda de Contactos - Integracion Continua</h1>
</div>

<div class="bg-amarillo contenedor sombra">
	<form id="contacto" action="#">
		<legend>Añada un contacto
			<br><span>Todos los campos son obligatorios	</span> 
		</legend>

		<div class="campos">

			<div class="campo">
				<label for="nombre">Nombre</label>
			    <input type="text" placeholder="Nombre contacto" id="nombre">
			</div>
			<div class="campo">
				<label for="empresa">Empresa</label>
			    <input type="text" placeholder="Nombre empresa" id="empresa">
			</div>
			<div class="campo">
				<label for="nombre">Telefono</label>
			    <input type="tel" placeholder="Nombre de contacto" id="nombre">
			</div>
			
			
		</div>

		<div class="campo enviar">
				<input type="submit" value="AÑADIR">
			</div>


	</form>
</div>

<?php include 'inc/vista/footer.php'; ?>

