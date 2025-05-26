
const Clients = () => {
  return <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        {/* Background */}
        <div className="absolute inset-0 bg-cover bg-center z-0" style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop")',
        backgroundBlendMode: 'overlay'
      }}>
          <div className="absolute inset-0 opacity-80 bg-zinc-600"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
            Our Clients
          </h1>
          <div className="w-24 h-1 bg-law-gold mx-auto mb-6"></div>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Trusted by businesses and individuals across India and beyond.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-semibold text-law-navy mb-6">
              Our Esteemed Clients
            </h2>
            <div className="w-20 h-1 bg-law-gold mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              A representative list of our esteemed clients who have been counseled by our lawyers across various sectors and industries.
            </p>
          </div>

          {/* Client Categories */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Financial Institutions & Banks */}
            <div className="bg-law-cream p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-serif font-semibold text-law-navy mb-6 border-b-2 border-law-gold pb-3">
                Financial Institutions & Banks
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-law-gold rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <span><strong>State Bank of India</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-law-gold rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <span><strong>HDFC Bank Ltd.</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-law-gold rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <span><strong>Bank of Baroda</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-law-gold rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <span><strong>Union Bank of India</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-law-gold rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <span><strong>Punjab and Sind Bank</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-law-gold rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <span><strong>Oriental Bank of Commerce</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-law-gold rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <span><strong>Standard Chartered Bank</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-law-gold rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <span><strong>Citibank & Citigroup International</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-law-gold rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <span><strong>Bank of Nova Scotia</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-law-gold rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <span><strong>Dena Bank</strong></span>
                </li>
              </ul>
            </div>

            {/* Government & Public Sector */}
            <div className="bg-law-cream p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-serif font-semibold text-law-navy mb-6 border-b-2 border-law-gold pb-3">
                Government & Public Sector
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-law-gold rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <span><strong>South Delhi Municipal Corporation</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-law-gold rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <span><strong>Municipal Corporation of Delhi</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-law-gold rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <span><strong>Delhi Development Authority</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-law-gold rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <span><strong>PMLA Authorities in Courts</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-law-gold rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <span><strong>GAIL India Ltd.</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-law-gold rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <span><strong>GAIL Gas Ltd.</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-law-gold rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <span><strong>Bharat Petroleum Corporation Ltd.</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-law-gold rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <span><strong>Brahmaputra Crackers & Polymers Ltd.</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-law-gold rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <span><strong>SIDBI</strong></span>
                </li>
              </ul>
            </div>

            {/* Financial Services & Housing */}
            <div className="bg-law-cream p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-serif font-semibold text-law-navy mb-6 border-b-2 border-law-gold pb-3">
                Financial Services & Housing
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-law-gold rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <span><strong>Volkswagen Finance Pvt Ltd.</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-law-gold rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <span><strong>Birla Home Finance</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-law-gold rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <span><strong>Shubham Housing Finance</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-law-gold rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <span><strong>Tata Capital Housing</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-law-gold rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <span><strong>Aditya Birla Housing Finance</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-law-gold rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <span><strong>Future Money India</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-law-gold rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <span><strong>Capital First</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-law-gold rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <span><strong>Capital Float</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-law-gold rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <span><strong>Fullerton India Ltd.</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-law-gold rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <span><strong>Anjali Leasing and Financials</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-law-gold rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <span><strong>India Infoline</strong></span>
                </li>
              </ul>
            </div>

            {/* Corporate & Retail */}
            <div className="bg-law-cream p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-serif font-semibold text-law-navy mb-6 border-b-2 border-law-gold pb-3">
                Corporate & Retail
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-law-gold rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <span><strong>Walmart India Ltd.</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-law-gold rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <span><strong>Bharti Retail Limited</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-law-gold rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <span><strong>Hindustan Unilever Limited</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-law-gold rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <span><strong>Audi India</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-law-gold rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <span><strong>Ricoh India Ltd.</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-law-gold rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <span><strong>Bata India Ltd.</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-law-gold rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <span><strong>Crompton Greaves Ltd.</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-law-gold rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <span><strong>Asian Paints</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-law-gold rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <span><strong>Shalimar Paints Ltd.</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-law-gold rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <span><strong>Tata Power</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-law-gold rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <span><strong>Mitsui & Company</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-law-gold rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <span><strong>Jorjy International Pvt. Ltd.</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-law-gold rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <span><strong>Modern Foods Ltd.</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-law-gold rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <span><strong>Devson Steels India Ltd.</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-law-gold rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <span><strong>BCPL</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-law-gold rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <span><strong>Pearl Minerals Ltd.</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-law-gold rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <span><strong>Bellisimo Italy</strong></span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Note */}
          <div className="text-center mt-16 p-8 bg-gray-50 rounded-lg">
            <p className="text-lg text-gray-600 italic">
              ...and many others
            </p>
            <p className="text-sm text-gray-500 mt-4">
              This represents a selection of our valued clients across various industries and sectors.
            </p>
          </div>
        </div>
      </section>
    </>;
};
export default Clients;
