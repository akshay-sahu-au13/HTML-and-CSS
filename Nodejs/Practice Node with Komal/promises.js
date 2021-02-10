// Promises

console.log("Starting");

function login(email, pwd, cb) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res({ email, pwd })
            rej('error')
        }, 3000);
    })
};

function usermsg(useremail, cb) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            // console.log("Data received")
            res({user: useremail,msg:['msg 1', 'msg 2', 'msg 3']});
        }, 3000);
    }
    )
};

function message(msgid, cb) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res({ msgid, msg:['hello there', 'call you later', 'where are you?'] });
        }, 2000);
    }
    )
};
//Callback hell
const user = login("Akshay@yahoo.com", "123")
const msg = usermsg('xyz')


user.then(data => {
    console.log(`The login data is ${data.email}, ${data.pwd}`)
    return usermsg(data.email)
}).then (data => {
    console.log(`The messages for ${data.user} are`,...data.msg)
    return message(data.msg[2])
}).then(data => {
    let sp = data.msgid.split(" ")
    const id = parseInt(sp[1])-1
    console.log(`${data.msgid} is "${data.msg[id]}"`)
})

// msg.then(msg => console.log(msg))

console.log("Finished");