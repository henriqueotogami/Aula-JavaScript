// Decorator:
    // Uma função decorator recebe uma outra função como parâmetro e estende o seu comportamento sem modificá-la explicitamente.

    //Proposta:
    https://github.com/tc39/proposal-decorators

    //TypeScript:
    https://www.typescriptlang.org/docs/handbook/decorators.html

//Exemplo

let loggedIn = false;

function callIfAuthenticated(fn) {
    return !!loggedIn && fn();
}

function sum(a, b) {
    return a + b;
}

console.log(callIfAuthenticated(() => sum(2,3)));
loggedIn = true;
// false

console.log(callIfAuthenticated(() => sum(2,3)));
loggedIn = false;
// 5

console.log(callIfAuthenticated(() => sum(2,3)));
// false

// Outro exemplo

function readonly(target, name, descriptor) {
    descriptor.writable = false;
    return descriptor;
}

class Job {
    @readonly
    title() {return 'CE0'}
}

// Outro exemplo

@CompositionEvent({
    selector: 'app-reactive-favorite-color',
    template:`Favorite Color: <input type="text" [formControl]="favoriteColorControl">`
})
export class FavoriteColorComponent {
    favoriteColorControl = new FormControl('');
}