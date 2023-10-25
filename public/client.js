import { io } from 'socket.io-client'

// Good example
const socket = io(endpoint, {
  path: "/clients/socketio/hubs/eio_hub",
});

const form = document.getElementById('form');
const input = document.getElementById('input');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (input.value) {
    // socket.emit('chat message', input.value);
    input.value = '';
  }
});