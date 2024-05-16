//Clase 7 - martes 30/4
$(document).ready(function()
{
        // insertar_registro();

// function insertar_registro()
// {
    
    $(document).on("click",'#btn_registrar',function() //Evento click
                    {
                        // var user = $('#Nombre').val();
                        var email = $('#Email').val();

                        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;//regex para email en una variable
                        //Validación front
                        if(!emailRegex.test(email))//metodo para validar la expresion regular
                        {
                            // $('message').html('Tiene campos vacíos');
                            event.preventDefault();
                            
                            const toastLiveExample = document.getElementById('liveToast');
                            const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
                            toastBootstrap.show();
                        }
                        else
                        {
                            // event.preventDefault();
                            console.log("entro");
                            // $.ajax
                            // (
                            //     {
                            //         url:'insertar.php',
                            //         method:'post',
                            //         data:{Uname:user,Uemail:email},
                            //         success:function(data){
                            //             alert(data);
                            //             // $('#message').html(data);
                                        
                            //         }
                            //     }
                            // )
                        }
                    }
                  )    
// }
}  )