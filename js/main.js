function login(){
    var user, password

    user = document.getElementById("user").value;
    password = document.getElementById("password").value;

    if(user == "machuca-te" && password == 1234){
        window.location = "index.html";
    }else{
        alert("Datos incorrectos")
    }

}



