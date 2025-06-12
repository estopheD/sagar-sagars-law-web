
import { CheckCircle } from 'lucide-react';
import { memo } from 'react';

const services = [
  "Service & Labour cases",
  "Domestic enquires conducting",
  "Lok adalats and conciliation activities",
  "Labour conciliation cases",
  "Securitization Matters (SARFAESI)",
  "Due Diligence",
  "Property Title Search",
  "Debt Recovery Tribunal Matters",
  "Legal Counseling",
  "Commercial and Corporate Advisory Services",
  "Company formation and Administration",
  "Arbitration cases",
  "International Commercial Arbitration",
  "Consumer cases",
  "ROC Search of companies",
  "Privacy Law",
  "Financial cases",
  "Criminal cases",
  "Property Verification",
  "Project Counseling",
  "Intellectual Property",
  "Joint Ventures"
];

const ServiceItem = memo(({ service, index }: { service: string; index: number }) => (
  <div 
    className="flex items-start space-x-3 p-4 bg-law-cream rounded-lg border border-law-light-gray hover:shadow-md transition-shadow duration-300"
  >
    <CheckCircle className="w-5 h-5 text-law-gold mt-1 flex-shrink-0" />
    <span className="text-law-charcoal font-medium leading-relaxed">{service}</span>
  </div>
));

ServiceItem.displayName = 'ServiceItem';

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

      {/* Services Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-law-navy mb-6">
              Our Legal Services
            </h2>
            <div className="w-24 h-1 bg-law-gold mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              At Sagar & Sagar Law Offices, we provide comprehensive legal services across multiple domains. 
              Being an established firm our view is to provide multi-disciplinary services to our esteemed 
              clients in the following areas amongst other:
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceItem key={service} service={service} index={index} />
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <p className="text-lg text-gray-700 mb-6">
              Need assistance with any of these services? Get in touch with our experienced legal team.
            </p>
            <a href="/contact" className="navy-btn">
              Contact Us Today
            </a>
          </div>
        </div>
      </section>
    </>;
};

export default Services;
