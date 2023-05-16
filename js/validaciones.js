$(document).ready(function(){
    $("#formulario_contacto").submit(function(){
        var nombre = $("#nombre").val();
        var correo = $("#correo").val();
        var solicitud = $("#solicitud").val();
        var mensaje = $("#mensaje").val();
        
        if(nombre == ""){
            alert("Por favor, ingrese su nombre");
            return false;
        }
        else if(correo == ""){
            alert("Por favor, ingrese su correo electrónico");
            return false;
        }
        else if(!validarCorreo(correo)){
            alert("Por favor, ingrese un correo electrónico válido");
            return false;
        }
        else if(solicitud == ""){
            alert("Por favor, selecione el tipo de solicitud");
            return false;
        }
        else if(mensaje == ""){
            alert("Por favor, escriba el mensaje a enviar");
            return false;
        }

        event.preventDefault();
      
        var exito = true;
        
        if (exito) {
            $('#miModal').modal('show');
        }
            
    });

    $("#cerrar").click(function() {
        $("#formulario_contacto")[0].reset();
      });

    function validarCorreo(correo){
        var ejemploCorreo = /\S+@\S+\.\S+/;
        return ejemploCorreo.test(correo);
    }

});


