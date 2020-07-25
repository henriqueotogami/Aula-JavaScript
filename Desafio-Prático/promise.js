// Desafio prático

    const items = ['a', 'b', 'c', 'd']

    ;(async function () {
        const promiseFunction = async (element) => {
            return new Promise((resolve, reject) => {
                return resolve(`${element} - promise`)
            });
        }

        const itemMapped = promiseFunction('x');
        console.log(itemMapped);
        // promise {pending}

        console.log(await itemMapped);
        // x - promise

        //const itemsMappedPromises = items.map(promiseFunction)
        /* [ Promise { <pending> },
             Promise { <pending> },
             Promise { <pending> },
             Promise { <pending> } ] */

        // const itemsMappd = await Promise.all(itemsMappedPromises)
        // ['a -  promise', 'b - promise', 'c - promise', 'd - promise']

        // console.log(itemsMapped)
    })()