$(document).ready(function()
{
        // insertar_registro();

// function insertar_registro()
// {
    
    $(document).on("click",'#btn_registrar',function() //Evento click
                    {
                        var user = $('#Nombre').val();
                        var email = $('#Email').val();

                        //Validación front
                        if(user==""||email=="")
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
