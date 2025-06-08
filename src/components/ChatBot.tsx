
import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, Send, X, User, Bot, Phone, Mail, MapPin, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Link } from 'react-router-dom';

type Message = {
  content: string | React.ReactNode;
  sender: 'user' | 'bot';
  timestamp: Date;
};

type QuickAction = {
  label: string;
  action: () => void;
};

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { 
      content: "Welcome to Sagar & Sagar Law Offices! How can I assist you with your legal needs today?", 
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [quickActions, setQuickActions] = useState<QuickAction[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping]);

  useEffect(() => {
    // Show initial quick actions after welcome message
    if (messages.length === 1) {
      setQuickActions([
        { label: "Our Services", action: () => handleQuickAction("What services do you offer?") },
        { label: "Contact Info", action: () => handleQuickAction("contact") },
        { label: "Office Hours", action: () => handleQuickAction("office hours") },
        { label: "Legal Help", action: () => handleQuickAction("I need legal help") }
      ]);
    }
  }, [messages]);

  const handleQuickAction = (query: string) => {
    setInput('');
    setQuickActions([]);
    setMessages(prev => [...prev, { content: query, sender: 'user', timestamp: new Date() }]);
    
    setTimeout(() => {
      const response = generateResponse(query);
      setIsTyping(false);
      setMessages(prev => [...prev, { content: response, sender: 'bot', timestamp: new Date() }]);
    }, 1000);
    
    setIsTyping(true);
  };

  const handleSendMessage = () => {
    if (input.trim() === '') return;
    
    const userMessage = input.trim();
    setMessages(prev => [...prev, { content: userMessage, sender: 'user', timestamp: new Date() }]);
    setQuickActions([]);
    setInput('');
    setIsTyping(true);
    
    setTimeout(() => {
      const response = generateResponse(userMessage);
      setIsTyping(false);
      setMessages(prev => [...prev, { content: response, sender: 'bot', timestamp: new Date() }]);
    }, 1000);
  };

  const generateResponse = (userInput: string): string | React.ReactNode => {
    const lowercaseInput = userInput.toLowerCase();
    
    // Contact Information
    if (lowercaseInput.includes('contact') || lowercaseInput.includes('phone') || 
        lowercaseInput.includes('email') || lowercaseInput.includes('address')) {
      return (
        <div className="space-y-3">
          <p className="font-semibold">Here's our contact information:</p>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-law-gold" />
              <a href="tel:+911147543981" className="hover:text-law-gold">+91-11-47543981</a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-law-gold" />
              <a href="mailto:info@sagarandsagar.in" className="hover:text-law-gold">info@sagarandsagar.in</a>
            </div>
            <div className="flex items-start gap-2">
              <MapPin className="h-4 w-4 text-law-gold mt-1 flex-shrink-0" />
              <div>
                <p>18, Hargobind Enclave,</p>
                <p>Bhartendu Harish Chandra Marg,</p>
                <p>Delhi - 110092</p>
              </div>
            </div>
          </div>
          <p className="text-xs text-gray-600">Would you like me to help you with anything else?</p>
        </div>
      );
    }

    // Office Hours
    if (lowercaseInput.includes('hours') || lowercaseInput.includes('time') || 
        lowercaseInput.includes('open') || lowercaseInput.includes('closed')) {
      return (
        <div className="space-y-2">
          <div className="flex items-center gap-2 mb-3">
            <Clock className="h-4 w-4 text-law-gold" />
            <p className="font-semibold">Our Office Hours:</p>
          </div>
          <div className="text-sm space-y-1">
            <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p>Saturday: 10:00 AM - 4:00 PM</p>
            <p>Sunday: Closed</p>
          </div>
          <p className="text-xs text-gray-600 mt-2">You can reach out to us during these hours for immediate assistance.</p>
        </div>
      );
    }

    // Services
    if (lowercaseInput.includes('service') || lowercaseInput.includes('help') || 
        lowercaseInput.includes('what do you do') || lowercaseInput.includes('practice')) {
      return (
        <div className="space-y-3">
          <p className="font-semibold">We offer comprehensive legal services including:</p>
          <div className="text-sm space-y-2">
            <p>• <strong>Litigation & General Practice</strong> - Court representation</p>
            <p>• <strong>Arbitration</strong> - Commercial dispute resolution</p>
            <p>• <strong>Corporate & Commercial Law</strong> - Business legal support</p>
            <p>• <strong>Property Law</strong> - Real estate matters</p>
            <p>• <strong>Labour Law</strong> - Employment issues</p>
            <p>• <strong>Consumer Protection</strong> - Consumer rights</p>
          </div>
          <p className="text-xs text-gray-600">What specific legal matter can I help you with?</p>
        </div>
      );
    }

    // Rental Agreement
    if (lowercaseInput.includes('rental') || lowercaseInput.includes('rent') || 
        lowercaseInput.includes('lease') || lowercaseInput.includes('agreement')) {
      return (
        <div className="space-y-2">
          <p>For rental agreements, you typically need:</p>
          <div className="text-sm space-y-1">
            <p>• Identity proof of both parties</p>
            <p>• Address proof</p>
            <p>• Property documents</p>
            <p>• Passport-size photographs</p>
          </div>
          <p className="text-xs text-gray-600 mt-2">We can help draft a comprehensive rental agreement. Would you like to schedule a consultation?</p>
        </div>
      );
    }

    // Affidavit
    if (lowercaseInput.includes('affidavit')) {
      return "An affidavit is a sworn statement made voluntarily. The process involves drafting the statement, notarization, and proper documentation. We can help you prepare and file affidavits for various purposes. What type of affidavit do you need?";
    }

    // PAN Card
    if (lowercaseInput.includes('pan') || lowercaseInput.includes('pan card')) {
      return "Yes, you can apply for a PAN card online through the NSDL or UTIITSL websites. You'll need identity proof, address proof, and date of birth proof. We can guide you through the process if needed.";
    }

    // Legal Notice
    if (lowercaseInput.includes('legal notice') || lowercaseInput.includes('notice')) {
      return (
        <div className="space-y-2">
          <p>For a legal notice, we typically need:</p>
          <div className="text-sm space-y-1">
            <p>• Details of the dispute</p>
            <p>• Relevant documents</p>
            <p>• Recipient's correct address</p>
            <p>• Your identification documents</p>
          </div>
          <p className="text-xs text-gray-600 mt-2">We can draft and send legal notices on your behalf. Would you like to discuss your case?</p>
        </div>
      );
    }

    // NDA
    if (lowercaseInput.includes('nda') || lowercaseInput.includes('non-disclosure')) {
      return "We can help you draft Non-Disclosure Agreements (NDAs) for business or personal use. NDAs protect confidential information and are essential for business relationships. What type of NDA do you need?";
    }

    // Navigation Help
    if (lowercaseInput.includes('about') || lowercaseInput.includes('about us')) {
      return (
        <div className="space-y-2">
          <p>Sagar & Sagar Law Offices was established in 1998 by Mr. Rajeev Sagar and Mr. Sanjiv Sagar. We have over 25 years of experience in legal practice.</p>
          <Link to="/about" className="inline-block text-law-gold hover:underline text-sm">
            Visit our About Us page →
          </Link>
        </div>
      );
    }

    if (lowercaseInput.includes('home') || lowercaseInput.includes('homepage')) {
      return (
        <div className="space-y-2">
          <p>Our homepage contains an overview of our services and firm highlights.</p>
          <Link to="/" className="inline-block text-law-gold hover:underline text-sm">
            Go to Homepage →
          </Link>
        </div>
      );
    }

    // Appointment/Meeting
    if (lowercaseInput.includes('appointment') || lowercaseInput.includes('meeting') || 
        lowercaseInput.includes('consultation') || lowercaseInput.includes('schedule')) {
      return (
        <div className="space-y-2">
          <p>To schedule a consultation:</p>
          <div className="text-sm space-y-1">
            <p>• Call us at +91-11-47543981</p>
            <p>• Email us at info@sagarandsagar.in</p>
            <p>• Visit our office during business hours</p>
          </div>
          <Link to="/contact" className="inline-block text-law-gold hover:underline text-sm mt-2">
            Visit Contact Page →
          </Link>
        </div>
      );
    }

    // Fee/Cost inquiries
    if (lowercaseInput.includes('fee') || lowercaseInput.includes('cost') || 
        lowercaseInput.includes('charge') || lowercaseInput.includes('price')) {
      return "Our fees vary based on the complexity and type of legal service required. We offer transparent pricing and will provide a detailed estimate during your consultation. Please contact us to discuss your specific needs.";
    }

    // General legal help
    if (lowercaseInput.includes('legal help') || lowercaseInput.includes('legal advice') || 
        lowercaseInput.includes('lawyer') || lowercaseInput.includes('attorney')) {
      setQuickActions([
        { label: "Property Law", action: () => handleQuickAction("property law") },
        { label: "Business Law", action: () => handleQuickAction("corporate law") },
        { label: "Family Law", action: () => handleQuickAction("family law") },
        { label: "Schedule Consultation", action: () => handleQuickAction("appointment") }
      ]);
      return "I can help you with various legal matters. What specific area of law do you need assistance with? Please select from the options below or describe your situation.";
    }

    // Default response with helpful options
    setQuickActions([
      { label: "Our Services", action: () => handleQuickAction("What services do you offer?") },
      { label: "Contact Info", action: () => handleQuickAction("contact") },
      { label: "Schedule Meeting", action: () => handleQuickAction("appointment") },
      { label: "Legal Help", action: () => handleQuickAction("I need legal help") }
    ]);

    return "I'm here to help with your legal needs. I can provide information about our services, contact details, office hours, or general legal guidance. Please select from the options below or feel free to ask me anything.";
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
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
          aria-label="Open legal assistant chat"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      ) : (
        <div className="bg-white rounded-lg shadow-xl flex flex-col w-80 h-96 border border-gray-200">
          {/* Header */}
          <div className="bg-law-navy text-white p-3 rounded-t-lg flex justify-between items-center">
            <div className="font-semibold flex items-center gap-2">
              <Bot className="h-5 w-5" />
              <span>Legal Assistant</span>
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
          
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 space-y-3">
            {messages.map((message, index) => (
              <div 
                key={index} 
                className={`flex gap-2 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {message.sender === 'bot' && (
                  <div className="w-6 h-6 bg-law-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Bot className="h-3 w-3 text-white" />
                  </div>
                )}
                <div 
                  className={`${
                    message.sender === 'user' 
                      ? 'bg-law-gold text-white ml-8' 
                      : 'bg-gray-100 text-gray-800 mr-8'
                  } rounded-lg px-3 py-2 max-w-[80%] text-sm`}
                >
                  {message.content}
                </div>
                {message.sender === 'user' && (
                  <div className="w-6 h-6 bg-law-navy rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <User className="h-3 w-3 text-white" />
                  </div>
                )}
              </div>
            ))}
            
            {isTyping && (
              <div className="flex gap-2 justify-start">
                <div className="w-6 h-6 bg-law-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Bot className="h-3 w-3 text-white" />
                </div>
                <div className="bg-gray-100 rounded-lg px-3 py-2 text-sm">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>
          
          {/* Quick Actions */}
          {quickActions.length > 0 && (
            <div className="px-3 py-2 border-t border-gray-200">
              <div className="flex flex-wrap gap-1">
                {quickActions.map((action, index) => (
                  <button
                    key={index}
                    onClick={action.action}
                    className="text-xs px-2 py-1 bg-law-cream text-law-navy rounded hover:bg-law-gold hover:text-white transition-colors"
                  >
                    {action.label}
                  </button>
                ))}
              </div>
            </div>
          )}
          
          {/* Input */}
          <div className="border-t p-3 flex gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask about our legal services..."
              className="flex-1 text-sm"
              disabled={isTyping}
            />
            <Button 
              onClick={handleSendMessage}
              size="icon"
              className="bg-law-gold hover:bg-law-gold/90"
              disabled={isTyping || !input.trim()}
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
          
          {/* Disclaimer */}
          <div className="px-3 py-2 bg-gray-50 rounded-b-lg">
            <p className="text-xs text-gray-600">
              This is general information only, not legal advice. Consult our lawyers for specific legal matters.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
