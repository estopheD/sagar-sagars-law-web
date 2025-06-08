
import { MapPin, Phone, Mail } from "lucide-react";

const Contact = () => {
  return <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        {/* Background */}
        <div className="absolute inset-0 bg-cover bg-center z-0" style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1560264280-88b68371db39?q=80&w=2070&auto=format&fit=crop")',
        backgroundBlendMode: 'overlay'
      }}>
          <div className="absolute inset-0 bg-law-navy opacity-80"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
            Contact Us
          </h1>
          <div className="w-24 h-1 bg-law-gold mx-auto mb-6"></div>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Reach out to discuss your legal needs with our experienced team.
          </p>
        </div>
      </section>

      {/* Office Locations Section */}
      <section className="py-16 bg-law-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-semibold text-law-navy mb-4">
              Our Offices
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Visit us at any of our convenient locations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Delhi High Court Office */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-law-navy mb-3">Delhi Chamber</h3>
              <div className="flex space-x-2 mb-2">
                <MapPin className="h-5 w-5 text-law-gold flex-shrink-0 mt-1" />
                <address className="not-italic text-gray-700">
                  <p>210, Block 3, Delhi High Court,</p>
                  <p>Shershah Suri Marg,</p>
                  <p>Delhi - 110003</p>
                </address>
              </div>
              <div className="flex space-x-2 mb-2">
                <Phone className="h-5 w-5 text-law-gold flex-shrink-0 mt-1" />
                <p className="text-gray-700">
                  <a href="tel:+911165781948" className="hover:text-law-gold transition-colors">+91-11-65781948</a>
                </p>
              </div>
              <div className="flex space-x-2">
                <Mail className="h-5 w-5 text-law-gold flex-shrink-0 mt-1" />
                <p className="text-gray-700">
                  <a href="mailto:info@sagarandsagar.in" className="hover:text-law-gold transition-colors">info@sagarandsagar.in</a>
                </p>
              </div>
            </div>

            {/* Mumbai Office */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-law-navy mb-3">Mumbai Office</h3>
              <div className="flex space-x-2 mb-2">
                <MapPin className="h-5 w-5 text-law-gold flex-shrink-0 mt-1" />
                <address className="not-italic text-gray-700">
                  <p>Office No 12 & 13, 2nd floor Mitha Mansion</p>
                  <p>Shahid Bhagat Singh Road,</p>
                  <p>Between RBI & GPO,</p>
                  <p>(Above National Restaurant)</p>
                  <p>Ballard Estate, Fort, Mumbai,</p>
                  <p>Maharashtra - 400001</p>
                </address>
              </div>
              <div className="flex space-x-2 mb-2">
                <Phone className="h-5 w-5 text-law-gold flex-shrink-0 mt-1" />
                <p className="text-gray-700">
                  <a href="tel:+919561980557" className="hover:text-law-gold transition-colors">+91-9561980557</a>
                </p>
              </div>
              <div className="flex space-x-2">
                <Mail className="h-5 w-5 text-law-gold flex-shrink-0 mt-1" />
                <p className="text-gray-700">
                  <a href="mailto:navinarora21@gmail.com" className="hover:text-law-gold transition-colors">navinarora21@gmail.com</a>
                </p>
              </div>
            </div>

            {/* New Delhi Office */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-law-navy mb-3">New Delhi Office</h3>
              <div className="flex space-x-2 mb-2">
                <MapPin className="h-5 w-5 text-law-gold flex-shrink-0 mt-1" />
                <address className="not-italic text-gray-700">
                  <p>18, Hargobind Enclave,</p>
                  <p>Bhartendu Harish Chandra Marg,</p>
                  <p>Delhi - 110092</p>
                </address>
              </div>
            </div>
          </div>
          
          {/* Contact Information */}
          <div className="mt-12 bg-white p-8 rounded-lg shadow-md border border-gray-100">
            <h3 className="text-2xl font-serif font-semibold text-law-navy mb-6">
              General Contact Information
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Phone Numbers */}
              <div>
                <h4 className="text-lg font-semibold text-law-navy mb-4 flex items-center">
                  <Phone className="h-5 w-5 text-law-gold mr-2" />
                  Phone Numbers
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li><a href="tel:+911147543981" className="hover:text-law-gold transition-colors">+91-11-47543981</a></li>
                  <li><a href="tel:+919811016162" className="hover:text-law-gold transition-colors">+91-9811016162</a></li>
                  <li><a href="tel:+919810021846" className="hover:text-law-gold transition-colors">+91-9810021846</a></li>
                  <li><a href="tel:+919561980557" className="hover:text-law-gold transition-colors">+91-9561980557</a></li>
                </ul>
              </div>
              
              {/* Email Addresses */}
              <div>
                <h4 className="text-lg font-semibold text-law-navy mb-4 flex items-center">
                  <Mail className="h-5 w-5 text-law-gold mr-2" />
                  Email Addresses
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li><a href="mailto:info@sagarandsagar.in" className="hover:text-law-gold transition-colors">info@sagarandsagar.in</a></li>
                  <li><a href="mailto:rajiv.sagar1@gmail.com" className="hover:text-law-gold transition-colors">rajiv.sagar1@gmail.com</a></li>
                  <li><a href="mailto:sanjivsagar@gmail.com" className="hover:text-law-gold transition-colors">sanjivsagar@gmail.com</a></li>
                  <li><a href="mailto:navinarora21@gmail.com" className="hover:text-law-gold transition-colors">navinarora21@gmail.com</a></li>
                  <li><a href="mailto:sagarandsagar@live.com" className="hover:text-law-gold transition-colors">sagarandsagar@live.com</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Hours Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-serif font-semibold text-law-navy mb-6">
              Business Hours
            </h2>
            <div className="flex items-center justify-center">
              <div className="bg-law-cream p-3 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-law-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-center">
                <p className="text-gray-700 text-lg">Monday - Friday: 9 AM - 6 PM</p>
                <p className="text-gray-700 text-lg">Saturday: 10 AM - 4 PM</p>
                <p className="text-gray-700 text-lg">Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>;
};

export default Contact;
