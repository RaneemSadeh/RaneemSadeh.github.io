import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X, Send, Bot } from 'lucide-react';
import { chatWithResume } from '../services/geminiService';
import { ChatMessage } from '../types';

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Hi, I'm Raneem's AI assistant. Ask me anything about her experience, skills, or projects!" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    // Convert internal message format to Gemini history format
    const history = messages.map(m => ({
        role: m.role,
        parts: [{ text: m.text }]
    }));

    const responseText = await chatWithResume(userMsg.text, history);

    setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      <div className="fixed bottom-8 right-8 z-50">
        <AnimatePresence>
            {!isOpen && (
                <motion.button
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    onClick={() => setIsOpen(true)}
                    className="bg-blue-600 hover:bg-blue-500 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-colors"
                >
                    <Sparkles size={24} />
                </motion.button>
            )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {isOpen && (
            <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 50, scale: 0.9 }}
                className="fixed bottom-8 right-8 w-[90vw] md:w-[400px] h-[600px] bg-[#2C2D30] rounded-2xl shadow-2xl z-50 flex flex-col border border-gray-700 overflow-hidden"
            >
                {/* Header */}
                <div className="p-4 bg-[#1C1D20] flex justify-between items-center border-b border-gray-700">
                    <div className="flex items-center gap-2 text-white">
                        <Bot size={20} className="text-blue-400" />
                        <span className="font-medium">Raneem AI</span>
                    </div>
                    <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">
                        <X size={20} />
                    </button>
                </div>

                {/* Messages */}
                <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4">
                    {messages.map((msg, idx) => (
                        <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                            <div className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${
                                msg.role === 'user' 
                                ? 'bg-blue-600 text-white rounded-br-none' 
                                : 'bg-gray-700 text-gray-100 rounded-bl-none'
                            }`}>
                                {msg.text}
                            </div>
                        </div>
                    ))}
                    {isLoading && (
                        <div className="flex justify-start">
                            <div className="bg-gray-700 p-3 rounded-2xl rounded-bl-none flex gap-2 items-center">
                                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0ms'}}></span>
                                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '150ms'}}></span>
                                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '300ms'}}></span>
                            </div>
                        </div>
                    )}
                </div>

                {/* Input */}
                <div className="p-4 bg-[#1C1D20] border-t border-gray-700">
                    <div className="relative">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleKeyPress}
                            placeholder="Ask about my RAG experience..."
                            className="w-full bg-[#2C2D30] text-white rounded-full pl-4 pr-12 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
                        />
                        <button 
                            onClick={handleSend}
                            disabled={!input.trim() || isLoading}
                            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-blue-600 rounded-full text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-500 transition-colors"
                        >
                            <Send size={16} />
                        </button>
                    </div>
                    <div className="text-center mt-2">
                         <span className="text-[10px] text-gray-500">Powered by Gemini 2.5 Flash</span>
                    </div>
                </div>
            </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;
