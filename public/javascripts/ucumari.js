$("#lnkrecibidos").click(function(){
    $.ajax({
        type: 'get',
        url: '/recibidos',        
        dataType: 'text'
    })
    .done(function(data){
        $('#content-main').html(data);
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
    });
});
