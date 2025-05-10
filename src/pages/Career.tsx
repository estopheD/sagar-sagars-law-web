
const Career = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        {/* Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center z-0" 
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop")', 
            backgroundBlendMode: 'overlay',
          }}
        >
          <div className="absolute inset-0 bg-law-navy opacity-80"></div>
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
    </>
  );
};

export default Career;
