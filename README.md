# Real-Time Number Synchronization

This is a simple web application that allows multiple users to synchronize and increment a shared number in real-time. It uses Node.js, Express.js, and Socket.io for real-time communication between clients and the server.

## Getting Started

> This project is built on Node.js 14.

To run this project locally, follow these steps:

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/dapgx/simple-real-time-number-sync.git

2. Install the required dependencies:

   ```bash
   npm install

2. Start the Node.js server:

   ```bash
   node server.js
   
4. Open a web browser and access the application at http://localhost:3000.

## Usage
When you open the application in multiple browser windows or devices, you will see a shared number.

- Click the "Increment Number" button to increase the number by 1.
- The number will be updated in real-time on all connected clients.

## Technologies Used
- Node.js
- Express.js
- Socket.io
