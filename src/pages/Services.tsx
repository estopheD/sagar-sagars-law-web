import { Link } from 'react-router-dom';
const Services = () => {
  return <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        {/* Background */}
        <div className="absolute inset-0 bg-cover bg-center z-0" style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop")',
        backgroundBlendMode: 'overlay'
      }}>
          <div className="absolute inset-0 opacity-80 bg-zinc-600"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
            Our Services
          </h1>
          <div className="w-24 h-1 bg-law-gold mx-auto mb-6"></div>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Comprehensive legal services tailored to your specific needs.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-semibold text-law-navy mb-8">
            Our Service Approach
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
            At Sagar & Sagar Law Offices, we provide comprehensive legal services across multiple domains. Our services page is currently under development. Please see our practice areas for detailed information about our expertise.
          </p>
          <Link to="/practice" className="navy-btn">
            View Practice Areas
          </Link>
        </div>
      </section>
    </>;
};
export default Services;