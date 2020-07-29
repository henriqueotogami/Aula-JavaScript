// CALLBACKS

function doSomething(callback) {
    setTimeout(function() {
        // did something
        callback('First data');
    }, 1000);
}

function doOtherThing(callback) {
    setTimeout(function() {
        // did other thing
        callback('Second data');
    }, 1000);
}

function doAll() {
    doSomething(function(data){
        var processedData = data.split('');
        doOtherThing(function(data2) {
            var processedData2 = data2.split('');

            setTimeout(function() {
                console.log(processedData, processedData2);
            }, 1000);
        });
    });
}

doAll();
// (10) ["F", "i", "r", "s", "t", " ", "d", "a", "t", "a"] 
// (11) ["S", "e", "c", "o", "n", "d", " ", "d", "a", "t", "a"]



// Iniciando tratamento de dados
// CALLBACK HELL

function doSomething(callback) {
    setTimeout(function() {
        // did something
        callback('First data');
    }, 1000);
}

function doOtherThing(callback) {
    setTimeout(function() {
        // did other thing
        callback('Second data');
    }, 1000);
}

function doAll() {
    try {
        doSomething(function(data){
            var processedData = data.split('');

            try {
                doOtherThing(function(data2) {
                    var processedData2 = data2.split('');

                    try{
                        setTimeout(function() {
                            console.log(processedData, processedData2);
                        }, 1000);
                    } catch (err) {
                        // handle error
                    }

                });
            } catch (err) {
            // handle error
        }
        });
    } catch(err) {
        //handle error
    }
}

doAll();



// PROMISES

const myPromise = new Promise((resolve, reject) => {
    // code here
});


// REFAZENDO O EXEMPLO ACIMA COM PROMISES
// Promises podem ter três estados:
// Pending: pendente
// Fulfilled: executada
// Rejected: aconteceu algum erro

const doSomethingPromise = new Promise((resolve, reject) => {
    //throw new Error ('Something went wrong');
    setTimeout(function() {
        // did something
        resolve('First data');
    }, 1000);
}

const doOtherThingPromise = new Promise((resolve, reject) => {
    setTimeout(function() {
        // did other thing
        resolve('Second data');
    }, 1000);
}

//doSomethingPromise.then(data => console.log(data)).catch(console.log(error));
// Something went wrong

doSomethingPromise
    .then(data => doOtherThingPromise);
    .then(data2 => console.log(data2))
    .catch();
    // Second data


    
function doAll() {
    try {
        doSomething(function(data){
            var processedData = data.split('');

            try {
                doOtherThing(function(data2) {
                    var processedData2 = data2.split('');

                    try{
                        setTimeout(function() {
                            console.log(processedData, processedData2);
                        }, 1000);
                    } catch (err) {
                        // handle error
                    }

                });
            } catch (err) {
            // handle error
        }
        });
    } catch(err) {
        //handle error
    }
}

doAll();