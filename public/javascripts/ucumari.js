$("#lnkrecibidos").click(function(){
    $.ajax({
        type: 'get',
        url: '/recibidos',
        dataType: 'text'
    })
    .done(function(data){
        $('#content-main').html(data);
        $.material.init();
    });
});

$("#lnkenviados").click(function(){
    $.ajax({
        type: 'get',
        url: '/enviados',
        dataType: 'text'
    })
    .done(function(data){
        $('#content-main').html(data);
        $.material.init();
    });
});

$("#lnkborrador").click(function(){
    $.ajax({
        type: 'get',
        url: '/borrador',
        dataType: 'text'
    })
    .done(function(data){
        $('#content-main').html(data);
        $.material.init();
    });
});

$("#lnkspam").click(function(){
    $.ajax({
        type: 'get',
        url: '/spam',
        dataType: 'text'
    })
    .done(function(data){
        $('#content-main').html(data);
        $.material.init();
    });
});

$("#lnkpapelera").click(function(){
    $.ajax({
        type: 'get',
        url: '/papelera',
        dataType: 'text'
    })
    .done(function(data){
        $('#content-main').html(data);
        $.material.init();
    });
});
$("#lnknuevo").click(function(){
    $.ajax({
        type: 'get',
        url: '/edita',
        dataType: 'text'
    })
    .done(function(data){
        $('#content-main').html(data);
        $.material.init();
    });
});

$(".from").click(function(){
    $.ajax({
        type: 'get',
        url: '/read-mail',
        dataType: 'text'
    })
    .done(function(data){
        $('#content-main').html(data);
        $.material.init();
    });
});
