document.addEventListener('DOMContentLoaded', () => {
  const messagesContainer = document.getElementById('messages');
  const messageInput = document.getElementById('messageInput');
  const sendButton = document.getElementById('sendButton');

  function addMessage(text) {
      if (text.trim() === '') return;
      const messageElement = document.createElement('div');
      messageElement.className = 'message';
      messageElement.textContent = text;
      messagesContainer.appendChild(messageElement);
      messagesContainer.scrollTop = messagesContainer.scrollHeight; // Auto-scroll to the bottom
      messageInput.value = ''; // Clear input field
  }

  sendButton.addEventListener('click', () => {
      const messageText = messageInput.value;
      addMessage(messageText);
  });

  messageInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
          e.preventDefault(); // Prevent the default action (e.g., form submission)
          sendButton.click();
      }
  });
});
