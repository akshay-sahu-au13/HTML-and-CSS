// Eg 2 , nesting callbacks leading to call back hell at some point of time

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

function userVideos(videos, callback) {
    setTimeout(() => {
        callback(videos);
    }, 2000);
};

function videoNames(vid_names, cb2) {
    setTimeout(() => {
        cb2(vid_names);
    }, 1500);
}

login('akshay@gmail.com', 'Akshay', info => {
    console.log(info)
    userVideos(['Cartoon video', 'Bollywood movie', 'Animation video'], videos => {
        console.log(videos)
        videoNames(['Jungle Book', '3 idiots', 'Avengers'], vidname => {
            console.log(vidname);

        });
    });
});

console.log("Finished");