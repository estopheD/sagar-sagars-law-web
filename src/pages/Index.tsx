import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import ChatBot from '../components/ChatBot';

const Index = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        {/* Hero Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center z-0" 
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1589216532372-1c2a367900d9?q=80&w=2671&auto=format&fit=crop")', 
            backgroundBlendMode: 'overlay',
          }}
        >
          <div className="absolute inset-0 bg-law-navy opacity-70"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 max-w-3xl">
              Trusted Legal Solutions Backed by Decades of Experience
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              Navigate complex legal challenges with confidence, guided by our team of experienced attorneys at Sagar & Sagar Law Offices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link to="/practice" className="gold-btn">
                Our Practice Areas
              </Link>
              <Link to="/contact" className="bg-transparent text-white border-2 border-white px-6 py-3 hover:bg-white hover:text-law-navy transition-colors duration-300 inline-block font-medium">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* About Section Preview */}
      <section className="py-16 bg-white law-content-container">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="section-title">Legacy of Justice. Foundation of Trust.</h2>
            <p className="mb-6 text-gray-700">
              Established in 1998, Sagar & Sagar Law Offices has been delivering trusted legal counsel and representation for over two decades. Founded by Mr. Rajeev Sagar and Mr. Sanjiv Sagar, the firm has built its reputation on integrity, dedication, and results.
            </p>
            <p className="mb-6 text-gray-700">
              With a strong foundation in litigation, legal consulting, and client advocacy, Sagar & Sagar has grown into a full-service law firm with a wide-ranging practice.
            </p>
            <Link to="/about" className="outline-btn">
              About Us
            </Link>
          </div>
          <div className="relative">
            <div className="absolute -bottom-5 -left-5 w-64 h-64 bg-law-cream rounded-lg"></div>
            <img 
              src="https://images.unsplash.com/photo-1589391886645-d51941baf7fb?q=80&w=3024&auto=format&fit=crop" 
              alt="Law office" 
              className="w-full h-auto rounded-lg shadow-xl relative z-10"
            />
          </div>
        </div>
      </section>
      
      {/* Practice Areas Preview */}
      <section className="py-16 bg-law-cream">
        <div className="law-content-container">
          <div className="text-center mb-12">
            <h2 className="section-title mx-auto">Our Practice Areas</h2>
            <p className="max-w-3xl mx-auto text-gray-700">
              With expertise across multiple legal domains, our firm offers comprehensive services to meet diverse client needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Practice Area 1 */}
            <Card className="overflow-hidden border-0 shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="h-40 bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=2070&auto=format&fit=crop")' }}></div>
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-3 text-law-navy">Litigation & General Practice</h3>
                <p className="text-gray-700 mb-4">Representation before Supreme Court, High Courts, District Courts, and various specialized tribunals.</p>
                <Link to="/practice#litigation" className="text-law-gold hover:underline font-medium inline-flex items-center">
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </CardContent>
            </Card>
            
            {/* Practice Area 2 */}
            <Card className="overflow-hidden border-0 shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="h-40 bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1521791055366-0d553872125f?q=80&w=2069&auto=format&fit=crop")' }}></div>
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-3 text-law-navy">Arbitration</h3>
                <p className="text-gray-700 mb-4">Expert guidance in commercial disputes, financial matters, construction and engineering cases, and more.</p>
                <Link to="/practice#arbitration" className="text-law-gold hover:underline font-medium inline-flex items-center">
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </CardContent>
            </Card>
            
            {/* Practice Area 3 */}
            <Card className="overflow-hidden border-0 shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="h-40 bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?q=80&w=1973&auto=format&fit=crop")' }}></div>
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-3 text-law-navy">Corporate & Commercial Services</h3>
                <p className="text-gray-700 mb-4">Comprehensive legal support for businesses including company formation, advisory services, and due diligence.</p>
                <Link to="/practice#corporate" className="text-law-gold hover:underline font-medium inline-flex items-center">
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-10">
            <Link to="/practice" className="navy-btn">
              View All Practice Areas
            </Link>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="law-content-container">
          <div className="text-center mb-12">
            <h2 className="section-title mx-auto">Why Choose Sagar & Sagar</h2>
            <p className="max-w-3xl mx-auto text-gray-700">
              What sets us apart in the legal landscape
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Reason 1 */}
            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-law-cream rounded-full flex items-center justify-center mb-4 text-law-gold">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-law-navy">25+ Years of Excellence</h3>
              <p className="text-gray-700">
                Over two decades of delivering trusted legal counsel and proven results.
              </p>
            </div>
            
            {/* Reason 2 */}
            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-law-cream rounded-full flex items-center justify-center mb-4 text-law-gold">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-law-navy">Founded by Leading Advocates</h3>
              <p className="text-gray-700">
                Established by respected legal professionals with expertise in Delhi High Court.
              </p>
            </div>
            
            {/* Reason 3 */}
            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-law-cream rounded-full flex items-center justify-center mb-4 text-law-gold">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h.5A2.5 2.5 0 0020 5.5v-1.565A32.977 32.977 0 0112 2c-2.125 0-4.164.321-6.083.915" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-law-navy">Multi-jurisdictional Practice</h3>
              <p className="text-gray-700">
                Operations across major Indian cities including Delhi, Mumbai, and Chandigarh.
              </p>
            </div>
            
            {/* Reason 4 */}
            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-law-cream rounded-full flex items-center justify-center mb-4 text-law-gold">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-law-navy">Client-Centered Approach</h3>
              <p className="text-gray-700">
                Solution-oriented legal services with proven record in litigation and corporate law.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 bg-law-navy text-white">
        <div className="law-content-container text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6 text-white">Ready to Discuss Your Legal Needs?</h2>
          <p className="mb-8 text-gray-300 max-w-2xl mx-auto">
            Our team of experienced attorneys is ready to provide the guidance and representation you need.
          </p>
          <Link to="/contact" className="bg-law-gold text-white px-8 py-3 font-medium text-lg hover:bg-opacity-90 transition-colors duration-300 inline-block">
            Contact Us Today
          </Link>
        </div>
      </section>

      {/* Chatbot */}
      <ChatBot />
    </>
  );
};

export default Index;
