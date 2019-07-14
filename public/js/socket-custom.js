var socket = io();
// on: escuchar sucesos
socket.on('connect', function() {
    console.log('Conectado al servidor');
});
socket.on('disconnect', function() {
    console.log('Conexion con el servidor perdida')
});
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor: ', mensaje);
});
// emit: permite enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Danizzz',
    mensaje: 'Hola mundo'
}, function(resp) {
    console.log('Respuesta server: ', resp);
});