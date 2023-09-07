const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

let currentNumber = 0; // Initial number

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html'); // Create this HTML file in step 7.
});

io.on('connection', (socket) => {
  console.log('A user connected');

  // Send the current number to the newly connected client
  socket.emit('numberUpdated', currentNumber);

  socket.on('updateNumber', (number) => {
    // Broadcast the updated number to all connected clients
    currentNumber = number; // Update the current number
    io.emit('numberUpdated', currentNumber);
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

