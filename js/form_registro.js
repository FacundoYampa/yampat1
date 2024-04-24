$(document).ready(function()
    {
        insertar_registro();
    }  
)

function insertar_registro()
{
    //Evento click
    $(document).on("click",'btn_registrar',function()
    {
        var user = $('#Nombre').val();
        var email = $('#Email').val();

        //Validación front
        if(user==""||email=="")
        {
            $('message').html('Tiene campos vacíos');
        }
        else
        {
            $.ajax
            (
                {
                    url:'insertar.php',
                    method:'post',
                    data:{Uname:user,Uemail:email},
                    success:function(data){
                        $('#message').html(data);
                        $('#registration').modal('show');
                        $('form').trigger('reset');
                        mostrar_registro();
                    }
                }
            )
        }
    })    
}