const EventEmitter = require('events');

const customEmitter = new EventEmitter();
const teEmitter = new EventEmitter();


customEmitter.on('response', (name, id) => {
    console.log(`Data Recived ${name} with id: ${id}`);
});
customEmitter.on('response', () => {
    console.log(`Data Send `);
});
customEmitter.on('response', () => {
    console.log(`Data sddl `);
});
//POINT 1: The Name of Event should be match to the like Keys
//POINT 2: We Can Emit as Much Function as We Want
//PONT 3: Event should be of the same Type.
//PONT 4: First we List[emit.on()] then we have to emit
customEmitter.emit('response', 'Ubaid Ullah', 39)
// teEmitter.emit('response')