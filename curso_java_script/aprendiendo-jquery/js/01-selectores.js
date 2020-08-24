$(document).ready(function () {

    //Selector de ID
    $("#rojo").css("background", "red")
        .css("color", "white");

    $("#amarillo").css("background", "yellow")
        .css("color", "black");

    var verde = $("#verde");
    verde.css("background", "green")
        .css("color", "white");

    // Selectrores de Clase
    var mi_clase = $('.zebra').css("padding", "5px");
    // mi_clase.css("border", "5px dashed black");

    $('.sin_borde').click(function () {
        // $(this).css("border", "5px dashed black");
        $(this).addClass('zebra');
    });

    // Selectores de Etiqueta
    var parrafos = $('p').css("cursor", "pointer");

    parrafos.click(function () {
        var thiss = $(this);
        if (!thiss.hasClass('grande')) {
            thiss.addClass('grande');
        } else {
            thiss.removeClass('grande');
        }
    });

    // Selectore de Atributo
    $('[title="Google"]').css('background', '#ccc');
    $('[title="softd3v"]').css('background', 'blue');

    //OTROS
    // $('p,a').addClass('margen_superior');

    var busqueda = $("#caja").find('.resaltado');

    console.log(busqueda);

});

