const net = require("net");
const {connect} = require('./client');
let connection;

const handleUserInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.on('data', (key) => {
    if (key === '\u0003') {
      process.exit();
    }
    if (key === 'w') {
      conn.write('Move: up');
    }
    if (key === 'a') {
      conn.write("Move: left");
    }
    if (key === 's') {
      conn.write("Move: down");
    }
    if (key === 'd') {
      conn.write("Move: right");
    }
  });
};

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  handleUserInput(conn);
  return stdin;
};


module.exports = {handleUserInput, setupInput};