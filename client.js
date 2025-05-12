const socket = io();
const editor = document.getElementById('editor');
const DOCUMENT_ID = "example-document-id"; // can be dynamic

socket.emit('get-document', DOCUMENT_ID);

socket.on('load-document', data => {
  editor.value = data;
});

editor.addEventListener('input', () => {
  const data = editor.value;
  socket.emit('send-changes', data);
  socket.emit('save-document', data);
});

socket.on('receive-changes', data => {
  editor.value = data;
});
