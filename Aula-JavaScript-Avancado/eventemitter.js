// EventEmitter
// exclusivo do NOdeJs
// Precisa ser importada
const EeventEmitter = require('event');

const emitter = new EeventEmitter();

emitter.on('User logged', data => {
    console.log(data);
});

emitter.emit('user logged', {user:'Celso henrique'});
// {user:'Celso henrique'}


// exemplo 2
const EventEmitter = required('events');

class Users extends EventEmitter {
    userLogged(data) {
        this.emit('User logged', datta);
    }
}

const users = new Users();

users.on('User logged', data => {
    console.log(data);
});

users.userLogged({user: 'Celso Henrique'});
// {user:'Celso henrique'}