import express from 'express';
import 'dotenv/config';
import { Server } from 'socket.io';
import { createServer } from 'http';
import { fileURLToPath } from 'url';
import path from 'path';

const PORT = process.env.PORT || 3000;

const app = express();
const server = createServer(app);

const io = new Server(server);
const userMap = new Map();
console.log('test-update');
// ovverirrides

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static('public'));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

io.on('connection', (socket) => {
  console.log('a user connected');
});

io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
  });
});

server.listen(process.env.PORT || 3000, function(){
  console.log('Running server....');
});
