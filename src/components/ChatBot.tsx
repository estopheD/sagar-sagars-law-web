
import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, Send, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

type Message = {
  content: string;
  sender: 'user' | 'bot';
};

const predefinedResponses: Record<string, string> = {
  contact: "You can contact Sagar & Sagar Law Offices through our Contact page, or call us at +91-11-XXXX-XXXX or email at contact@sagarandsagar.com.",
  location: "Our head office is located in Delhi, with branch offices in Mumbai, Lucknow, Chandigarh, and Gurgaon. Please visit our Contact page for specific addresses.",
  services: "We offer services in Litigation, Arbitration, Labour Law, Corporate & Commercial Law, Property Law, and Consumer Protection. You can find detailed information on our Services and Practice pages.",
  appointment: "To schedule an appointment with one of our attorneys, please use the Contact form on our website or call our office at +91-11-XXXX-XXXX.",
  fees: "Our fee structure varies depending on the complexity of your case. We offer initial consultations where we can discuss your specific needs and provide a fee estimate.",
  expertise: "Sagar & Sagar Law Offices has over 25 years of experience in various legal domains including civil, criminal, corporate, arbitration, real estate, labor, consumer protection, and intellectual property law.",
  founders: "Sagar & Sagar Law Offices was founded in 1998 by Mr. Rajeev Sagar and Mr. Sanjiv Sagar, both respected legal professionals with expertise in the Delhi High Court.",
};

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { content: "Hello! How can I assist you with Sagar & Sagar Law Offices?", sender: 'bot' }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleSendMessage = () => {
    if (input.trim() === '') return;
    
    // Add user message
    setMessages(prev => [...prev, { content: input, sender: 'user' }]);
    
    // Process response
    setTimeout(() => {
      const response = generateResponse(input);
      setMessages(prev => [...prev, { content: response, sender: 'bot' }]);
    }, 500);
    
    setInput('');
  };

  const generateResponse = (userInput: string) => {
    const lowercaseInput = userInput.toLowerCase();
    
    // Check for keywords in predefined responses
    for (const [keyword, response] of Object.entries(predefinedResponses)) {
      if (lowercaseInput.includes(keyword)) {
        return response;
      }
    }

    // Check for specific questions
    if (lowercaseInput.includes('who founded') || lowercaseInput.includes('founder')) {
      return predefinedResponses.founders;
    }
    
    if (lowercaseInput.includes('office') || lowercaseInput.includes('where are you')) {
      return predefinedResponses.location;
    }
    
    if (lowercaseInput.includes('cost') || lowercaseInput.includes('price') || 
        lowercaseInput.includes('charge') || lowercaseInput.includes('pay')) {
      return predefinedResponses.fees;
    }

    // Fallback response
    return "I'm not sure I understand your question. You can ask about our contact information, services, locations, or booking an appointment. Alternatively, please call us at +91-11-XXXX-XXXX for immediate assistance.";
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen ? (
        <Button 
          onClick={() => setIsOpen(true)}
          className="h-14 w-14 rounded-full bg-law-gold hover:bg-law-gold/90 shadow-lg"
          size="icon"
          aria-label="Open chat support"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      ) : (
        <div className="bg-white rounded-lg shadow-xl flex flex-col w-80 h-96 border border-gray-200">
          <div className="bg-law-navy text-white p-3 rounded-t-lg flex justify-between items-center">
            <div className="font-semibold flex items-center gap-2">
              <MessageCircle className="h-5 w-5" />
              <span>Sagar & Sagar Support</span>
            </div>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsOpen(false)}
              className="h-8 w-8 text-white hover:bg-law-navy/50"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-3 space-y-3">
            {messages.map((message, index) => (
              <div 
                key={index} 
                className={`${
                  message.sender === 'user' 
                    ? 'ml-auto bg-law-gold text-white' 
                    : 'mr-auto bg-gray-100 text-gray-800'
                } rounded-lg px-3 py-2 max-w-[80%]`}
              >
                {message.content}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          
          <div className="border-t p-3 flex gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your question..."
              className="flex-1"
            />
            <Button 
              onClick={handleSendMessage}
              size="icon"
              className="bg-law-gold hover:bg-law-gold/90"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
