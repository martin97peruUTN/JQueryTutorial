//cuando pongo $ es que estoy trabajando con jQuery
//con la extencion escribo jq y ahi me autocompleta
//Shift+Alt+A comentar varias lineas de codigo
$(document).ready(function () {
    
    /* $('h1').html('boludote')
    $('.display-4').html('Desde clase')
    $('#idDelh1').html('Desde ID')

    //En JS
    document.querySelector('#idDelh1').innerHTML = 'Desde JS' */
    
    //$('.container h1').html('cambio de texto')
    //$('.container h1:first').html('cambio de texto')
    //$('.container h1:last').html('cambio de texto')
    //$('.container .display-4').html('cambio de texto')

    /* $('#idDelh1').addClass('text-danger');
    $('#idDelh1').removeClass('display-4');
    $('#contenido').append('<h1>Texto agregado al final</h1>');
    $('#contenido').prepend('<h1>Texto agregado al principio</h1>');
    $('#color-azul').css('color', 'blue');
    //Otra forma
    $('#color-azul').css({color: 'blue', background: 'salmon', padding: '20px'});

    //$('#color-azul').remove();
    $('#color-azul').hide();

    $('img').attr('src', 'https://codeorigin.jquery.com/jquery-wp-content/themes/jquery/content/books/learning-jquery-4th-ed.jpg');
    $('img:last').attr('width', '150px') */

    /* var parrafo = $('#resultado p')

    $('.btn-primary').click(function (e) { 
        e.preventDefault();
        parrafo.addClass('display-4');
    });

    $('.btn-danger').click(function (e) { 
        e.preventDefault();
        parrafo.removeClass('display-4');
    });

    $('.btn-warning').click(function (e) { 
        e.preventDefault();
        parrafo.toggleClass('display-4');
    }); */ //HABILITAR PARA LOS BOTONES DE ARRIBA

    /* var input = $('#nombre')
    var contenido = $('#contenido2')

    input.keyup(function (e) { 
        contenido.html(input.val());
        if(input.val()==''){
            contenido.html('Estoy esperando pa!');
        }
    }); */

    $('#formulario').submit(function (e) { 
        e.preventDefault();//Para que no haga lo que hace por defecto, que es mandar por el metodo get
        var nombrecito = $('#nombre').val()
        console.log(nombrecito);
    });

    var elemento = $('#elemento')

    $('#mostrar').click(function (e) { 
        e.preventDefault();
        //elemento.show(1000);
        elemento.fadeIn(3000)
    });

    $('#ocultar').click(function (e) { 
        e.preventDefault();
        //elemento.hide(1000)
        elemento.fadeOut('slow');
    });

    $('#toggle').click(function (e) { 
        e.preventDefault();
        elemento.toggle(1000);
    });

    $('#animate').click(function (e) { 
        //e.preventDefault();
        elemento.animate({left: '250px',
            opacity: '0.75',
            height: '+=150px',
            width: '+=150px'
            }, 3000, function(){
                elemento.animate({left: '150px',
                opacity: '0.5',
                height: '-=150px',
                width: '-=150px'
            }, 2000)
        })
    });

});