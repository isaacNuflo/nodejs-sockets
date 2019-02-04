const { io } = require('../server');

io.on('connection', (client) => {

    console.log('Usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'administrador',
        mensaje: 'Bienvenido a la aplicacion'
    })

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    //Escuchar el cliente
    client.on('enviarMensaje', (mensaje, callback) => {

        console.log(mensaje);
        if (mensaje.usuario) {
            callback({
                resp: 'TODO SALIO BIEN!'
            });
        } else {
            callback({
                resp: 'TODO SALIO MAL!!!!!!!'
            });
        }

    });

});