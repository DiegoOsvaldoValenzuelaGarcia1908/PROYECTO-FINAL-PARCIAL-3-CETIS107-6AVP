function getCanciones()
{
    $.get( "http://localhost/CorcheaApi/public/canciones", function( data ) {
        $("#idCanciones").empty();
        data.forEach(element => {
            $("#idCanciones").append('<li><a href="#detalle" class="ui-btn ui-btn-icon-right ui-icon-carat-r" onclick="getCanciones('+element.id+')">'+element.nombre+'</a></li>');
        });
      });
}

