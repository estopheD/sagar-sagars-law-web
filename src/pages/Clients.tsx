const Clients = () => {
  return <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        {/* Background */}
        <div className="absolute inset-0 bg-cover bg-center z-0" style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop")',
        backgroundBlendMode: 'overlay'
      }}>
          <div className="absolute inset-0 bg-law-navy opacity-80"></div>
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
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-semibold text-law-navy mb-8">
            Client Testimonials
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto"> Our Esteemed Clients:

A representative list of our esteemed clients who have been counseled by our lawyers:

South Delhi Municipal Corporation
Gail India Ltd.
Gail Gas Ltd.
Bharat Petroleum Corporation Ltd.
Brahmaputra Crackers & Polymers Ltd.
SIDBI
Punjab And Sind Bank
Bank Of Baroda
Union Bank Of India
HDFC Bank Ltd.
Dena Bank
Volkswagon Finace Pvt Ltd.
Audi India
Birla Home Finance
Future Money India
Anjali Leasing and Financials
Citibank & Citigroup International
Crompton Greaves Ltd.
State Bank of India
Oriental Bank of Commerce
Shubham Housing Finance
Capital First
Capital Float
Municipal Corporation of Delhi

Walmart India Ltd.
Bharti Retail Limited.
Hindustan Unilever Limited.
Ricoh India Ltd.
Bata India Ltd.
Standard Chartered Bank
Shalimar Paints Ltd.
Bank Of Nova Scotia
Jorjy International Pvt. Ltd.
Modern Foods Ltd.
Devson Steels India Ltd.
BCPL
Asian Paints
Mitsui & Company
Tata Power
Fullerton India Ltd.
Pearl Minerals Ltd.
Bellisimo Italy.
Delhi Develoment Authority
India Infoline
Tata Capital Housing
Aditya Birla Housing Finance
PMLA Authorities in courts
and many others</p>
        </div>
      </section>
    </>;
};
export default Clients;