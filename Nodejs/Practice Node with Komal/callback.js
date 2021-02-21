// Callbacks in Node.js

console.log("Starting");

function login(email, pwd) {

    return new Promise ((res, rej)=> {

        setTimeout(() => {
            res({email, pwd});
            rej("error")
        }, 4000);
    })
};

function usermsg(useremail) {
    return new Promise((res, rej)=> {

        setTimeout(() => {
            res(['msg1', 'msg2', 'msg3']);
            rej("error in fetching");
        }, 3500);
    })
}

function message (msgid ) {
    return new Promise((res, rej)=>{

        setTimeout(() => {
            res({msgid});
            rej("Error");
        }, 2000);
    })
}
//Callback hell
// login("kmishra@gmail", 'ertyhuj4567u8', data => {
//     console.log(data);
//     usermsg(data.email, msgs => {
//         console.log(msgs);
//         message(msgs[0], message => {
//             console.log(message);
//         });
//     });
// });




// login('akx@gmail.com', 123456).then(data => {
//     console.log(data);
//     usermsg(data.email).then(msg => {
//         console.log(msg)
//         message(msg[0]).then(message=> {
//             console.log(message);
//         })
//     })
// })

login('akx@gmail.com', 123456).then(data => {
    console.log(data);
    return usermsg(data.email)
 
}).then (msg => {
    console.log(msg);
    return message(msg[0]);

}).then(message => {
    console.log(message);

}).catch(err => {
    console.log(err);
});



console.log("Finished");


