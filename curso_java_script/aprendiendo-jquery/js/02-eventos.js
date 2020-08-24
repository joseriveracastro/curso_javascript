$(document).ready(function () {

    // MOUSE OVER Y MOUSE OUT
    var caja = $("#caja");
    // caja.mouseover(function(){
    //    $(this).css("background","red") 
    // });
    // caja.mouseout(function(){
    //     $(this).css("background","green")
    // });

    function cambiaRojo() {
        $(this).css("background", "red")
    };

    function cambiaVerde() {
        $(this).css("background", "green")
    };

    // HOVER
    caja.hover(cambiaRojo, cambiaVerde);

    // CLICK y DOBLECLICK
    caja.click(function () {
        $(this).css("background", "blue")
            .css("color", "white");

    });

    caja.dblclick(function () {
        $(this).css("background", "pink")
            .css("color", "black");

    });

    //Focus y Blur
    var nombre = $("#nombre");
    var datos = $("#datos");
    var sigueme = $("#sigueme");
    nombre.focus(function () {
        $(this).css("border", "2px solid green");
    });

    nombre.blur(function () {
        $(this).css("border", "1px solid #CCC");
        $(this).val();
        datos.text($(this).val()).show();
    });

    // Mousedown y mouseup
    datos.mousedown(function () {
        $(this).css("border-color", "gray");
    });

    datos.mouseup(function () {
        $(this).css("border-color", "black");
    });

    // Mousemove
    $(document).mousemove(function () {
        $('body').css("cursor","none");
       sigueme.css("left",event.clientX);
       sigueme.css("top",event.clientY);
    });

});