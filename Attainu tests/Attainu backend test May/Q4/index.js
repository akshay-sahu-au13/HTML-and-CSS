var sort_by = require('./sort');

var library = [
{
title: 'Bill Gates',
author: 'The Road Ahead',
libraryID: 1254
},
{
title: 'Steve Jobs',
author: 'Walter Isaacson',
libraryID: 4264
},
{
title: 'Mockingjay: The Final Book of The Hunger Games',
author: 'Suzanne Collins',
libraryID: 3245
}
];
var order = 'ASC'; // change order value to DESC to sort in descending order
var newobj=library.sort(sort_by("libraryID",order));
console.log(newobj);