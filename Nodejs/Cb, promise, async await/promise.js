const promise = new Promise((res, rej) => {
    setTimeout(() => {
        res({promise: "Your promise is fulfilled"});
        rej('Error while fetching the data from api');
    }, 2000);
})

promise.then(data => {
    console.log(data.promise);
}).catch(err => console.log(err))

