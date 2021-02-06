// Callbacks in Node.js

console.log("Starting");

function login(email, pwd, cb) {
    setTimeout(() => {
        // console.log("The function ended now!")
        cb({email, pwd})
    }, 4000);
};

function usermsg(useremail, cb) {
    setTimeout(() => {
        cb(['msg1', 'msg2', 'msg3']);
    }, 3500);
}

function message (msgid , cb) {
    setTimeout(() => {
        cb({msgid});
    }, 2000);
}
//Callback hell
login("kmishra@gmail", 'ertyhuj4567u8', data => {
    console.log(data);
    usermsg(data.email, msgs => {
        console.log(msgs);
        message(msgs[0], message => {
            console.log(message);
        });
    });
});


console.log("Finished");