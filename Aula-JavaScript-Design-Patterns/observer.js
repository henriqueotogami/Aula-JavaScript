// Observer
// É um pattern muito popular em aplicações JavaScript. A instância (subscriber) mantém uma coleção de objetos(observers) e notifica todos eles quando ocorrem mudanças no estuda.

Vue: https://github.com/vuejs/vue/blob/dev/src/core/observer/indexjs#L229

RxJs: https://rxjs-dev.firebaseapp.com/guide.observable


// Exemplo

class Observable {
    constructor() {
        this.observers = [];
    }

    subscribe(f) {
        this.observers.push(f);
    }

    unsubscribe(f) {
        this.observers = this.observers.filter(this.subscribe => this.subscriber !== f);
    }

    notify(data) {
        this.observers.forEach(observer => observer(data));
    }
}

// Outro exemplo

class Observable{
    constructor() {
        this.Observables = [];
    }

    subscribe(fn) {
        this.Observables.push(fn);
    }

    notify(data){
        this.Observables.forEach(fn => fn(data));
    }

    unsubscribe(fn) {
        this.Observables = this.Observables.filter(obs => obs !== fn);
    }
}

const o = new Observable();

const logData1 = data => console.log(`Subscribe 1: ${data}`);
const logData2 = data => console.log(`Subscribe 2: ${data}`);
const logData3 = data => console.log(`Subscribe 3: ${data}`);

o.subscribe(logData1);
o.subscribe(logData2);
o.subscribe(logData3);

o.notify('notified 1');
// Subscribe 1: notified 1
// Subscribe 2: notified 1
// Subscribe 3: notified 1

o.unsubscribe(logData2);

o.notify('notified 2');
// Subscribe 1: notified 1
// Subscribe 2: notified 1
// Subscribe 3: notified 1
// Subscribe 1: notified 2
// Subscribe 3: notified 2