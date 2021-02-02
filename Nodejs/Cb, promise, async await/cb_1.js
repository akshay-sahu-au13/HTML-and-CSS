// Callbacks 

// Eg 1, logging user return undefined

// console.log('Starting');

// function login(email, username) {
    
//     setTimeout(() => {
//         console.log("We got the data now!");
//         return {email, username}
//     }, 3000);
// }
// const user = login('akshay@gmail.com', 'Akshay');

// console.log(user)

// console.log("Finished");

// Eg 2 , passing a callback function inside login and calling it inside setTimeout api

console.log('Starting');

function cb(userdata) {
    console.log(userdata)
}

function login(email, username, cb) {
    
    setTimeout(() => {
        console.log("We got the data now!");
        cb ({email, username})
    }, 3000);
}

login('akshay@gmail.com', 'Akshay', cb);

console.log("Finished");