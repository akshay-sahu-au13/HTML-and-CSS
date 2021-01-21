import "isomorphic-fetch";


const cb = (data)=> console.log(data);

const todos = new Promise ((res, rej)=> {
    res(fetch('https://jsonplaceholder.typicode.com/todos/2'))
});

todos.then((res) => res.json())
.then(json => cb(json))
.catch(err => console.log(err))