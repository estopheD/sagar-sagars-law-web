
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

const Career = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct the Gmail compose URL with pre-filled data
    const gmailSubject = encodeURIComponent(`Career Inquiry: ${formData.subject}`);
    const gmailBody = encodeURIComponent(
      `Dear Sagar & Sagar Team,

My name is ${formData.name} and I am interested in career opportunities at your firm.

Contact Details:
- Name: ${formData.name}
- Email: ${formData.email}
- Phone: ${formData.phone}

Subject: ${formData.subject}

Message:
${formData.message}

Best regards,
${formData.name}`
    );
    
    const gmailUrl = `https://mail.google.com/mail/?view=cm&to=info@sagarandsagar.in&su=${gmailSubject}&body=${gmailBody}`;
    
    // Open Gmail in a new tab
    window.open(gmailUrl, '_blank');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        {/* Background */}
        <div className="absolute inset-0 bg-cover bg-center z-0" style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop")',
        backgroundBlendMode: 'overlay'
      }}>
          <div className="absolute inset-0 opacity-80 bg-zinc-600"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
            Careers at Sagar & Sagar
          </h1>
          <div className="w-24 h-1 bg-law-gold mx-auto mb-6"></div>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Join our team of legal professionals and make an impact.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-semibold text-law-navy mb-8">
            Work With Us
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
            At Sagar & Sagar Law Offices, we're always looking for talented legal professionals to join our team. Our careers page is currently under development. Please check back soon for job openings and information about working with us.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-law-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Information */}
            <div>
              <h2 className="text-3xl font-serif font-semibold text-law-navy mb-6">
                Send Us a Message
              </h2>
              <p className="text-gray-700 mb-8">
                Interested in joining our team? Whether you're an aspiring lawyer, experienced attorney, or looking for internship opportunities, we'd love to hear from you. Send us a message and we'll get back to you soon.
              </p>
              
              <div className="space-y-6">
                {/* Contact Info */}
                <div className="flex items-start">
                  <div className="bg-white p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-law-gold" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-law-navy mb-1">Email</h3>
                    <p className="text-gray-700">info@sagarandsagar.in</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-white p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-law-gold" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-law-navy mb-1">Phone</h3>
                    <p className="text-gray-700">+91-11-47543981</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-white p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-law-gold" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-law-navy mb-1">Address</h3>
                    <p className="text-gray-700">
                      18, Hargobind Enclave,<br />
                      Bhartendu Harish Chandra Marg,<br />
                      Delhi - 110092
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white p-8 shadow-lg rounded-lg border border-gray-100">
              <h3 className="text-2xl font-serif font-semibold text-law-navy mb-6">
                Get In Touch
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Full Name *
                    </label>
                    <Input 
                      id="name" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleChange} 
                      required 
                      className="w-full" 
                      placeholder="Your Full Name" 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email Address *
                    </label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      value={formData.email} 
                      onChange={handleChange} 
                      required 
                      className="w-full" 
                      placeholder="your.email@example.com" 
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                      Phone Number
                    </label>
                    <Input 
                      id="phone" 
                      name="phone" 
                      value={formData.phone} 
                      onChange={handleChange} 
                      className="w-full" 
                      placeholder="+91-XXXXXXXXXX" 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                      Subject *
                    </label>
                    <Input 
                      id="subject" 
                      name="subject" 
                      value={formData.subject} 
                      onChange={handleChange} 
                      required 
                      className="w-full" 
                      placeholder="e.g., Internship Opportunity, Associate Position" 
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message *
                  </label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange} 
                    required 
                    className="w-full h-32" 
                    placeholder="Tell us about your background, experience, and why you're interested in joining our team..." 
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-law-navy hover:bg-opacity-90 text-white font-medium py-3"
                >
                  Send Message via Gmail
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>;
};

export default Career;
