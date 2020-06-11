<?php 
     include 'inc/funciones/funciones.php';
     include 'inc/layout/header.php'; 

     $id = filter_var($_GET['id'], FILTER_VALIDATE_INT);

     if(!$id) {
          die('No es válido');
     }

     $resultado = obtenerContacto($id);
     $contacto = $resultado->fetch_assoc();
?>


<div class="contenedor-barra">
    <div class="contenedor barra">
        <a href="index.php" class="btn volver">Volver</a>
        <h1>Editar Contactos</h1>
    </div>
</div>

<div class="contenedor bg-amarillo sombra">
    <form action="#" method="post" id="contacto">
        <legend>Edite el contacto</span> </legend>
        <?php include ('inc/vista/formulario.php'); ?>

    </form>
</div>

<?php include_once('inc/vista/footer.php'); ?>