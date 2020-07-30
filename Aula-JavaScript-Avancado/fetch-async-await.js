// FETCH
// Forçando erro em uma porta aonde não existe nada

//fetch('/data.json')
fetch('http://localhost:8881/data.json')
    .then(responseStream => responseStream.json())
    .then(data => { 
        console.log(data);
    }).catch(err => {
        console.log('Erro: ', err);
    });


// exemplo 2
fetch('http://lolcalhost/data.json')
    .then(responseStream => {
        if (responseStream === 200) {
            return responseStream.json();
        } else {
            throw new Error ('Request error');
        }
    })
    .then(data => {
        console.log(data);
    })
    .catch(arr => {
        console.log('Error: ', err);
    });



// ASYNC / AWAIT
// sequencial

const asyncTimer = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(12345);
        }, 1000);
    });

const simpleFunc = async () => {
    const data = await asyncTimer();
    console.log(data);
    const dataJSON = await fetch('/data.json').then(resStream => resStream.json());
    return dataJSON;
};

simpleFunc()
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    });


// ASYNC / AWAIT
// paralelo

const asyncTimer = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(12345);
    }, 1000);
});

const simpleFunc = async () => {
    const data = await Promise.all([
        asyncTimer(),
        fetch('/data.json').then(resStream => resStream.json())
    ]);
    return data;
};

simpleFunc()
    .then(data => {
        console.log(data);
    })
    .catch(arr => {
        console.log(err);
    });