function login(){
    var user, password

    user = document.getElementById("user").value;
    password = document.getElementById("password").value;

    if(user == "machuca-te" && password == 123456789){
        window.location = "index.html";
    }else{
        alert("Datos incorrectos")
    }

    if(password.lenght<8){
        alert("La contraseña debe tener mas de 8 caracteres")

    }

    

}



