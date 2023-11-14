function guardarAlert(){
    Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Se ha guardado correctamente",
        showConfirmButton: false,
        timer: 1500
      });
}


function editarAlert(){
    Swal.fire({
        title: "Quieres guardar los cambios?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Guardar",
        denyButtonText: `No Guardar`
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire("Guardados!", "", "success");
        } else if (result.isDenied) {
          Swal.fire("No se han guardado los cambios", "", "info");
        }
      });
}


function eliminarAlert(){
    Swal.fire({
        title: "Estas seguro de eliminar?",
        text: "No se puede revertir la opcion!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, Eliminar!"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Eliminado!",
            text: "Se elimino correctamente.",
            icon: "success"
          });
        }
      });
      
}