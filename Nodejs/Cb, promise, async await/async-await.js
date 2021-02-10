

// Let's refactor our code from callback hell using Async Await

console.log('Starting');

function login(email, username) {
    return new Promise((res,rej)=> {
        setTimeout(() => {
            console.log("We got the data now!");
            res ({email, username})
            rej("err")
        }, 3000);
    });
}

function userVideos(email) {
    return new Promise ((res, rej) => {

        setTimeout(() => {
            res(['Cartoons', 'Movies', 'Tutorials']);
        }, 2000);
    });
};

function videoNames(video) {

    return new Promise((res, rej) => {
        console.log(video)
        setTimeout(() => {
            res({video, Cartoons: "Lion King", Movies:  "3 idiots", Tutorials: "Node.js crash course"});

        }, 1500);
    });
}

// login('akshay@gmail.com', 'Akshay', info => {
//     console.log(info)
//     userVideos(['Cartoon video', 'Bollywood movie', 'Animation video'], videos => {
//         console.log(videos)
//         videoNames(['Jungle Book', '3 idiots', 'Avengers'], vidname => {
//             console.log(vidname);

//         });
//     });
// });

const users = login("xyz@gmail.com", 'Ravi');

users.then(data => userVideos(data.email))
.then(videos => videoNames(videos))
.then(names => {
    console.log(`The name of the video ${names.video[0]} is ${names.Cartoons}`)
})
.catch(err => console.log(err,"Couldn't fetch the data"))
console.log("Finished");
