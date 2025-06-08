import { Link } from 'react-router-dom';
const AboutUs = () => {
  return <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        {/* Background */}
        <div className="absolute inset-0 bg-cover bg-center z-0" style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1589391886645-d51941baf7fb?q=80&w=3024&auto=format&fit=crop")',
        backgroundBlendMode: 'overlay'
      }}>
          <div className="absolute inset-0 opacity-80 bg-neutral-600"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
            About Us
          </h1>
          <div className="w-24 h-1 bg-law-gold mx-auto mb-6"></div>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Legacy of Justice. Foundation of Trust.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg mb-6">Started It's foundation in 1998, Sagar &amp; Sagar Law Offices has been delivering trusted legal counsel and representation for over two decades. Founded by Mr. Rajeev Sagar, a respected legal professional with a deep commitment to justice, and Mr. Sanjiv Sagar, a practicing Senior Advocate at the Delhi High Court, the firm has built its reputation on integrity, dedication, and results.</p>
            
            <p className="text-lg mb-6">
              With a strong foundation in litigation, legal consulting, and client advocacy, Sagar & Sagar has grown into a full-service law firm with a wide-ranging practice that includes civil, criminal, corporate, arbitration, real estate, labor, consumer protection, and intellectual property law.
            </p>

            <h2 className="text-2xl font-serif font-semibold text-law-navy mt-12 mb-6">
              Two Decades of Excellence
            </h2>
            
            <p className="text-lg mb-6">
              Over the years, Mr. Rajeev Sagar has personally guided and represented a diverse range of clients, including individuals, corporates, startups, and institutions. His deep understanding of client needs and ability to build long-lasting professional relationships has been a key driver of the firm's continued success.
            </p>
            
            <p className="text-lg mb-6">
              What began as a Delhi-based law practice has now expanded across India, with active operations in Gurgaon, Mumbai, Lucknow, Chandigarh, and several other cities, reflecting the firm's commitment to making quality legal services accessible nationwide.
            </p>

            <h2 className="text-2xl font-serif font-semibold text-law-navy mt-12 mb-6">
              Our Vision
            </h2>
            
            <p className="text-lg mb-12">
              At Sagar & Sagar, we believe in more than just providing legal advice — we believe in being strategic partners in our clients' journeys. Whether it's navigating a complex legal dispute or crafting a robust corporate strategy, our approach is rooted in clarity, precision, and results.
            </p>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="py-16 bg-law-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-semibold text-law-navy mb-12 text-center">
            Why Choose Us
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Reason 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-law-cream rounded-full flex items-center justify-center mb-4 text-law-gold">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-law-navy">
                Over 25 Years of Legal Excellence
              </h3>
              <p className="text-gray-700">
                Our extensive experience across various legal domains allows us to provide insights and solutions that come only from decades of practice.
              </p>
            </div>
            
            {/* Reason 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-law-cream rounded-full flex items-center justify-center mb-4 text-law-gold">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-law-navy">
                Founded by Leading Advocates in Delhi High Court
              </h3>
              <p className="text-gray-700">
                Our firm's foundation rests on the expertise of its founders, respected legal professionals with extensive experience.
              </p>
            </div>
            
            {/* Reason 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-law-cream rounded-full flex items-center justify-center mb-4 text-law-gold">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h.5A2.5 2.5 0 0020 5.5v-1.565A32.977 32.977 0 0112 2c-2.125 0-4.164.321-6.083.915" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-law-navy">
                Multi-jurisdictional Practice Across Major Indian Cities
              </h3>
              <p className="text-gray-700">
                Our expanded presence across India ensures we can serve clients wherever they need us, maintaining consistent excellence.
              </p>
            </div>
            
            {/* Reason 4 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-law-cream rounded-full flex items-center justify-center mb-4 text-law-gold">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-law-navy">
                Client-Centered, Solution-Oriented Legal Services
              </h3>
              <p className="text-gray-700">
                We prioritize understanding our clients' unique needs and challenges to deliver practical, effective legal solutions.
              </p>
            </div>
            
            {/* Reason 5 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-law-cream rounded-full flex items-center justify-center mb-4 text-law-gold">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-law-navy">
                Proven Record in Litigation, Arbitration & Corporate Law
              </h3>
              <p className="text-gray-700">
                Our track record speaks for itself – we've successfully handled complex cases across multiple practice areas.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-law-navy text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-semibold mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact Sagar & Sagar Law Offices today to discuss how we can assist with your legal needs.
          </p>
          <Link to="/contact" className="bg-law-gold text-white px-8 py-3 font-medium hover:bg-opacity-90 transition-colors duration-300 inline-block">
            Get in Touch
          </Link>
        </div>
      </section>
    </>;
};
export default AboutUs;