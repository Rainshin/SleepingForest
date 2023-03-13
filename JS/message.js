// Estabelece conexão com o servidor de chat
const socket = io('http://localhost:3000');

// Seleciona elementos do DOM
const chatForm = document.getElementById('chat-form');
const chatInput = document.getElementById('input-message');
const messagesList = document.getElementById('messages');

// Recebe uma nova mensagem do servidor
socket.on('message', message => {
  // Cria um novo elemento <li> para exibir a mensagem recebida
  const messageItem = document.createElement('li');
  messageItem.textContent = message;

  // Adiciona a mensagem à lista de mensagens
  messagesList.appendChild(messageItem);
});

// Envia uma mensagem para o servidor quando o formulário é enviado
chatForm.addEventListener('submit', event => {
  event.preventDefault();
  const message = chatInput.value;
  socket.emit('message', message);
  chatInput.value = '';
});
