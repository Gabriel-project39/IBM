document.getElementById('newsletterForm').addEventListener('submit', function(event){
  var emailInput = document.getElementById('email');
  var emailError = document.getElementById('emailError');
  var value = emailInput.value;

  // Simple business email pattern (not exhaustive)
  var pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if(!pattern.test(value)) {
    event.preventDefault();
    emailInput.classList.add('is-invalid');
    emailError.style.display = 'block';
  }else{
    emailInput.classList.remove('is-invalid');
    emailError.style.display = 'none';
  }
});

 const chatBtn = document.getElementById('chatBtn');
    const chatBox = document.getElementById('chatBox');
    const closeChat = document.getElementById('closeChat');
    const sendBtn = document.getElementById('sendBtn');
    const chatBody = document.getElementById('chatBody');
    const chatInput = document.getElementById('chatInput');

    // Toggle chat open
    chatBtn.addEventListener('click', () => {
      chatBox.style.display = "flex";
      chatBtn.style.display = "none";
    });

    // Close chat
    closeChat.addEventListener('click', () => {
      chatBox.style.display = "none";
      chatBtn.style.display = "flex";
    });

    // Send message
    sendBtn.addEventListener('click', () => {
      let msg = chatInput.value.trim();
      if (msg) {
        let p = document.createElement("p");
        p.textContent = "You: " + msg;
        chatBody.appendChild(p);
        chatInput.value = "";
        chatBody.scrollTop = chatBody.scrollHeight;
      }
    });