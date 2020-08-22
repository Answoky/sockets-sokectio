
const { io } = require('../server/server');

io.on('connection', (client) => {

    console.log('Usuario conectado');

    client.on('disconnect', ()=> {
        console.log('Usuario descoenctado');  
    });

    // Escuchar al cliente
    client.on('nombreDelObservable', (data, callback) => {
        /* console.log('A ver ', message); */

        client.broadcast.emit('nombreDelObservable', data);

      /*   if ( message.usuario ) {
            callback({
                message: 'Todo salio bien'
            });
        } else { 
            callback({
                message: 'Todo salio mal'
            });
        }
         */
    });

    client.emit('nombreDelObservable',{
        usuario: 'Admin',
        message: 'Bienvenido a esta aplicacion'
    })
    
});
