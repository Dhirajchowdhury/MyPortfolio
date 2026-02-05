import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMessageCircle, FiX, FiSend, FiUser, FiBot } from 'react-icons/fi';
import './Chatbot.css';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const myFullName = "Dhiraj Chowdhury";
  const description = `
    I am Dhiraj Chowdhury, a 2nd-year B.Tech CSE student at Heritage Institute of Technology.
    I specialize in web development and DSA in C/C++. 
    I am passionate about software engineering and continuously upskilling myself. 
    I enjoy traveling, bike riding, and team management roles.
    Reply naturally in short sentences as if I am talking. Answer user's question based on this description.
  `;

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen && messages.length === 0) {
      // Add welcome message when opening for the first time
      setMessages([{
        id: 1,
        text: `Hi! I'm ${myFullName}. What would you like to know about me?`,
        sender: 'bot',
        timestamp: new Date()
      }]);
    }
  };

  const sendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    try {
      const response = await fetch('http://localhost:5000/api/gemini', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt: `User_message: ${inputValue}. Context: ${description}`
        })
      });

      const data = await response.json();
      const aiText = data.candidates?.[0]?.content?.parts?.[0]?.text 
                   || "Sorry, I couldn't understand that. Could you try asking something else?";

      setTimeout(() => {
        const botMessage = {
          id: Date.now() + 1,
          text: aiText,
          sender: 'bot',
          timestamp: new Date()
        };
        setMessages(prev => [...prev, botMessage]);
        setIsTyping(false);
      }, 1000);

    } catch (error) {
      setTimeout(() => {
        const errorMessage = {
          id: Date.now() + 1,
          text: "Oops! Something went wrong. Try again later.",
          sender: 'bot',
          timestamp: new Date()
        };
        setMessages(prev => [...prev, errorMessage]);
        setIsTyping(false);
      }, 1000);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Chat Bubble */}
      <motion.div
        className="chat-bubble"
        onClick={toggleChat}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <FiMessageCircle />
        <span>Ask me anything!</span>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="chat-window"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Chat Header */}
            <div className="chat-header">
              <div className="chat-avatar">
                <img src="/Images/Dhiraj image.jpg" alt="Dhiraj" />
              </div>
              <div className="chat-info">
                <h4>Dhiraj Chowdhury</h4>
                <span className="status">
                  <div className="status-dot"></div>
                  Online
                </span>
              </div>
              <button className="close-btn" onClick={toggleChat}>
                <FiX />
              </button>
            </div>

            {/* Chat Messages */}
            <div className="chat-messages">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  className={`message ${message.sender}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="message-avatar">
                    {message.sender === 'user' ? (
                      <FiUser />
                    ) : (
                      <img src="/Images/Dhiraj image.jpg" alt="Dhiraj" />
                    )}
                  </div>
                  <div className="message-content">
                    <div className="message-bubble">
                      {message.text}
                    </div>
                    <div className="message-time">
                      {message.timestamp.toLocaleTimeString([], { 
                        hour: '2-digit', 
                        minute: '2-digit' 
                      })}
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <motion.div
                  className="message bot typing"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="message-avatar">
                    <img src="/Images/Dhiraj image.jpg" alt="Dhiraj" />
                  </div>
                  <div className="message-content">
                    <div className="message-bubble">
                      <div className="typing-dots">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Chat Input */}
            <div className="chat-input">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                disabled={isTyping}
              />
              <button 
                onClick={sendMessage} 
                disabled={!inputValue.trim() || isTyping}
                className="send-btn"
              >
                <FiSend />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;