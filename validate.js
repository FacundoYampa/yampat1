function funcion1(){
    let x = document.getElementById("num").value.parseInt;
    let text;
    if (isNaN(x)||x<10||x>1){
        text= "valido";
    }
    else{
        text = "noo valido"
    }
    x=x+1;
    document.getElementById("demo").innerHTML=text;
    document.getElementById("numero").innerHTML=x;
}

function validacion(){
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;

    alert(nombre+" "+apellido);
    if(nombre==""||apellido==""){
        alert("los campos son obligatorios")
    }
    else{

    }

    if(document.getElementById("")){}
}

/*function validacion()
{
    var  nombre = document.getElementById("nombre").value;
    var  apellido = document.getElementById("apellido").value;
    alert(nombre + " " + apellido);
}


<h2>Ejemplo de form en html</h2>
<p>Formulario de ingreso</p>

<form name="miform" onsubmit="return validate()">
<label for="nombre">Nombre: </label><br>
<input type="text" id="nombre" name="nombre"><br>
<label for="apellido">Apellido: </label><br>
<input type="text" id="apellido"  name="apellido"><br>
<label for="email">Email: </label><br>
<input type="email" id="email"  name="email"><br>


<label >Genero: </label><br>
<input type="radio" id="" value="Masculino" name="genero" checked > Masculino<br>
<input type="radio" id="" value="Femenino" name="genero"> Femenino<br>
<input type="radio" id="" value="Otro" name="genero"> Otro<br>
<br>


<label >Tipo de vehiculo: </label><br>
<input type="checkbox"  id="coche" name="vehiculo" value="Coche"> Coche<br>
<input type="checkbox"  id="bici" name="vehiculo" value="Bicicleta"> Bicicleta<br>


<label >Elija un Marca de auto:</label>
<select id="autos" name="autos">
  <option value="volvo">Renault</option>
  <option value="saab">Toyota</option>
  <option value="fiat">Fiat</option>
  <option value="audi">Audi</option>
</select>


<input type ="submit" value="submit">


</form>

*/
