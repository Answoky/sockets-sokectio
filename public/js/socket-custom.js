var socket = io();

socket.on('connect', function() {
    console.log('Conectado al servidor');
});

// Escuchar
socket.on('disconnect', function() {
    console.log('Perdimos conexion con el servidor');
});

// Enviar informacion
socket.emit('nombreDelObservable', {
    usuario: 'Sebastian',
    mensaje: 'Primer mensaje'
}, function( response ){
    console.log('Message server ', response);
});

// Escuchar informacion
socket.on('nombreDelObservable', function(message){
    console.log('Servidor ', message);
    
});