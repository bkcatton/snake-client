const net = require("net");
const {connect} = require('./client');
const {setupInput} = require('./index');

// establishes a connection with the game server


console.log("Connecting ...");
connect();

setupInput();

