  
    //banner lateral
    function fecharBanner() {
      const banner = document.getElementById('bannerLateral');
      banner.style.display = 'none';
    }
  
  
  //botão chat
  function toggleChat() {
    const chatBox = document.getElementById('chat-box');
    chatBox.style.display = chatBox.style.display === 'flex' ? 'none' : 'flex';
  }

  function handleKeyPress(e) {
    if (e.key === 'Enter') {
      const input = document.getElementById('chat-input');
      const message = input.value.trim();
      if (message !== '') {
        addMessage('Você', message);
        input.value = '';
        // Simula uma resposta automática
        setTimeout(() => {
          addMessage('Don Quixote', 'Obrigado pela sua mensagem! você pode entrar em contato conosco diretamento pela aba contatos ou pelo telefone (61) 98595-5966.<br> Em breve responderemos.');
        }, 1000);
      }
    }
  }

  function addMessage(sender, text) {
    const msgContainer = document.getElementById('chat-messages');
    const msgElement = document.createElement('div');
    msgElement.innerHTML = `<strong>${sender}:</strong> ${text}`;
    msgContainer.appendChild(msgElement);
    msgContainer.scrollTop = msgContainer.scrollHeight;
  }

// Abrir popup após alguns segundos
window.onload = function() {
  setTimeout(function() {
    document.getElementById('popup-instagram').style.display = 'flex';
  }, 3000); // Abre depois de 3 segundos
};

function fecharPopup() {
  document.getElementById('popup-instagram').style.display = 'none';
}
