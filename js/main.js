$("#formulario_contacto").validate({
    rules:{
        nombre:{
            required:true,
   
        },
        email:{
            required:true,
            email:true}
            ,tipo_solicitud:{
                required:true
            },
        mensaje:{
            required:true,
            minlenght:3,
            maxlenght:120
            
        },
        terminos:{
            required:true
        }
    }
    
})




$("#enviar").click(function(){
    if($("#formulario_contacto").valid()==false){
        return;
    }
    let nombre = $("#nombre").val()
    let email =$("#email").val()
    let tipoSolicitud = $("#tipo_solicitud").val()
    let mensaje = $("#mensaje").val()
    let terminos = $("#temrinos").val()

 //construir un json

 //enviar los datos por post $.post
})
