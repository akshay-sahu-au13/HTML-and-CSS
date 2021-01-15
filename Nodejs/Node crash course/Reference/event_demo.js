const EventEmiiter = require('events');

//Create class
class MyEmitter extends EventEmiiter { }

// Init object
const myEmitter = new MyEmitter();

//Events listener 
myEmitter.on('event', ()=> console.log('Event Fired!!!'));

// Init event
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');