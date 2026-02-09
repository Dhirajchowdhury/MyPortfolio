const chatButton = document.getElementById('chatButton');
const chatWindow = document.getElementById('chatWindow');
const chatBody = document.getElementById('chatBody');
const chatInput = document.getElementById('chatInput');
const sendBtn = document.getElementById('sendBtn');
const themeToggle = document.getElementById('themeToggle');

const myFullName = "Dhiraj Chowdhury";
const description = `
I am Dhiraj Chowdhury, a 2nd-year B.Tech CSE student at Heritage Institute of Technology.
I specialize in web development using MERN stack, currently learning AI/ML and DSA in C/C++. 
I am passionate about software engineering and continuously upskilling myself. 
I enjoy traveling, bike riding, and team management roles.
Reply naturally in short sentences as if I am talking. Answer user's question based on this description.
`;

// Toggle Chat Window
function toggleChat() {
  const isOpen = chatWindow.style.display === 'flex';
  chatWindow.style.display = isOpen ? 'none' : 'flex';

  // Show welcome message on first open
  if (!isOpen && chatBody.childElementCount === 0) {
    const introMsg = document.createElement('div');
    introMsg.className = 'chat-message ai';
    introMsg.textContent = `Hi, I’m ${myFullName}. What do you want to know about me?`;
    chatBody.appendChild(introMsg);
    chatBody.scrollTop = chatBody.scrollHeight;
  }
}

// Send Message and Fetch Gemini Response
function sendMessage() {
  const msg = chatInput.value.trim();
  if (!msg) return;

  // User message in chat
  const userMsg = document.createElement('div');
  userMsg.className = 'chat-message user';
  userMsg.textContent = msg;
  chatBody.appendChild(userMsg);
  chatInput.value = '';
  chatBody.scrollTop = chatBody.scrollHeight;

  // Typing indicator
  const typingMsg = document.createElement('div');
  typingMsg.className = 'chat-message ai';
  typingMsg.textContent = "Dhiraj is typing...";
  chatBody.appendChild(typingMsg);
  chatBody.scrollTop = chatBody.scrollHeight;

  // Send prompt to backend
  fetch("http://localhost:3000/gemini", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt: `User_message: ${msg}. Context: ${description}` })
  })
  .then(res => res.json())
  .then(data => {
    const aiText = data.candidates?.[0]?.content?.parts?.[0]?.text 
                  || "Sorry, couldn't understand that.";
    typingMsg.textContent = aiText;
  })
  .catch(() => {
    typingMsg.textContent = "Oops! Something went wrong. Try again later.";
  });
}

// Dark Mode Toggle
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  themeToggle.textContent = document.body.classList.contains('dark') ? '☀️ Light Mode' : '🌙 Dark Mode';
});

// Event Listeners
chatButton.addEventListener('click', toggleChat);
sendBtn.addEventListener('click', sendMessage);
chatInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    sendMessage();
  }
});
