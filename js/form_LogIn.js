
const btn = document.getElementById("btnEnviar");
btn.addEventListener("click", validacion);

function validacion(){
    const email = document.getElementById("email").value;
    const pass = document.getElementById("password").value;
        
        if(email==""||pass==""){
        alert("Debe completar los cambios");
        }
}

