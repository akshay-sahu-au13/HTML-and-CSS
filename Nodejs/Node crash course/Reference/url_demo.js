const url = require('url');

const myurl = new URL('https://mywebsite.com:5000/users.html?id=101&status=active');

// Serialized Url
console.log(myurl.href);
console.log(myurl.toString());

//Host or root domain
console.log(myurl.host);

//Hostname - doesn't get port
console.log(myurl.hostname);

//Pathname
console.log(myurl.pathname);

//Serialized query
console.log(myurl.search);

//Params object
console.log(myurl.searchParams);

//Add Param 
console.log(myurl.searchParams.append('abc', '123'));
console.log(myurl.searchParams);

//Loop through params
myurl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));

