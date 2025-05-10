
const Practice = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        {/* Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center z-0" 
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1575505586569-646b2ca898fc?q=80&w=2105&auto=format&fit=crop")', 
            backgroundBlendMode: 'overlay',
          }}
        >
          <div className="absolute inset-0 bg-law-navy opacity-80"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
            Practice Areas
          </h1>
          <div className="w-24 h-1 bg-law-gold mx-auto mb-6"></div>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Comprehensive legal expertise across a wide range of practice areas.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Practice Area 1 */}
          <div id="litigation" className="mb-16 scroll-mt-24">
            <div className="flex items-center mb-4">
              <div className="w-12 h-1 bg-law-gold mr-4"></div>
              <h2 className="text-3xl font-serif font-semibold text-law-navy">
                1. Litigation & General Practice
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-10 mt-8">
              <div className="md:col-span-1">
                <img 
                  src="https://images.unsplash.com/photo-1589578527966-fdac0f44566c?q=80&w=1974&auto=format&fit=crop" 
                  alt="Litigation" 
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
              
              <div className="md:col-span-2">
                <h3 className="text-xl font-semibold mb-4 text-law-navy">Courts Covered:</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-law-gold mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Supreme Court of India
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-law-gold mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    State High Courts
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-law-gold mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    District Courts (Civil & Criminal)
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-law-gold mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Labour and Service Law Cases
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-law-gold mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Consumer Forums (District, State & National Commissions)
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-law-gold mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Administrative & Taxation Tribunals
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-law-gold mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Debt Recovery Tribunals (DRT & DRAT)
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-law-gold mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    National Company Law Tribunal (NCLT) & Appellate Tribunal (NCLAT)
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-law-gold mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    National Green Tribunal (NGT)
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-law-gold mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Competition Tribunal
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-law-gold mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Telecom Disputes Settlement and Appellate Tribunal (TDSAT)
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-law-gold mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Central Administrative Tribunal (CAT)
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-law-gold mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Various DM, ADM, and SDM courts
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Practice Area 2 */}
          <div id="arbitration" className="mb-16 scroll-mt-24">
            <div className="flex items-center mb-4">
              <div className="w-12 h-1 bg-law-gold mr-4"></div>
              <h2 className="text-3xl font-serif font-semibold text-law-navy">
                2. Arbitration
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-10 mt-8">
              <div className="md:col-span-1">
                <img 
                  src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop" 
                  alt="Arbitration" 
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
              
              <div className="md:col-span-2">
                <h3 className="text-xl font-semibold mb-4 text-law-navy">Areas of Expertise:</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-law-gold mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Commercial Disputes
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-law-gold mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Financial Disputes
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-law-gold mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Construction and Engineering
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-law-gold mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Maritime Issues
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-law-gold mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Government Contracts
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-law-gold mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    International Trade
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Practice Area 3 */}
          <div id="labour" className="mb-16 scroll-mt-24">
            <div className="flex items-center mb-4">
              <div className="w-12 h-1 bg-law-gold mr-4"></div>
              <h2 className="text-3xl font-serif font-semibold text-law-navy">
                3. Labour & Service Law
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-10 mt-8">
              <div className="md:col-span-1">
                <img 
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop" 
                  alt="Labour & Service Law" 
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
              
              <div className="md:col-span-2">
                <h3 className="text-xl font-semibold mb-4 text-law-navy">Services Provided:</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-law-gold mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Labour and Service Law Cases
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-law-gold mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Domestic Enquiries
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-law-gold mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Labour Conciliation Cases
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-law-gold mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Representation in Labour Courts & Tribunals
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-law-gold mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Assistance in matters before the Assistant Regional Provident Fund Commissioner
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Practice Area 4 */}
          <div id="corporate" className="mb-16 scroll-mt-24">
            <div className="flex items-center mb-4">
              <div className="w-12 h-1 bg-law-gold mr-4"></div>
              <h2 className="text-3xl font-serif font-semibold text-law-navy">
                4. Corporate & Commercial Services
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-10 mt-8">
              <div className="md:col-span-1">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1949&auto=format&fit=crop" 
                  alt="Corporate & Commercial Services" 
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
              
              <div className="md:col-span-2">
                <h3 className="text-xl font-semibold mb-4 text-law-navy">Offerings:</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-law-gold mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Legal Counseling
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-law-gold mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Company Formation and Administration
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-law-gold mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Commercial and Corporate Advisory Services
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-law-gold mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Due Diligence
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-law-gold mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Drafting and Finalization of Agreements
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-law-gold mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Project Counseling
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Practice Area 5 */}
          <div id="realestate" className="mb-16 scroll-mt-24">
            <div className="flex items-center mb-4">
              <div className="w-12 h-1 bg-law-gold mr-4"></div>
              <h2 className="text-3xl font-serif font-semibold text-law-navy">
                5. Property & Real Estate
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-10 mt-8">
              <div className="md:col-span-1">
                <img 
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop" 
                  alt="Property & Real Estate" 
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
              
              <div className="md:col-span-2">
                <h3 className="text-xl font-semibold mb-4 text-law-navy">Services:</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-law-gold mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Property Title Search
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-law-gold mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Property Verification
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-law-gold mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Drafting of Lease, Leave & License Agreements
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-law-gold mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Assistance in Property Transactions
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Practice Area 6 */}
          <div id="consumer" className="mb-16 scroll-mt-24">
            <div className="flex items-center mb-4">
              <div className="w-12 h-1 bg-law-gold mr-4"></div>
              <h2 className="text-3xl font-serif font-semibold text-law-navy">
                6. Consumer Protection
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-10 mt-8">
              <div className="md:col-span-1">
                <img 
                  src="https://images.unsplash.com/photo-1452457750107-cd084dce177d?q=80&w=2080&auto=format&fit=crop" 
                  alt="Consumer Protection" 
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
              
              <div className="md:col-span-2">
                <h3 className="text-xl font-semibold mb-4 text-law-navy">Representation in:</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-law-gold mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    District Consumer Forums
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-law-gold mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    State Consumer Commissions
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-law-gold mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    National Consumer Disputes Redressal Commission
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Additional Services */}
      <section className="py-16 bg-law-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-semibold text-law-navy mb-4">Additional Services</h2>
            <div className="w-24 h-1 bg-law-gold mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-law-gold mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Legal Counseling
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-law-gold mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Lok Adalats and Conciliation Activities
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-law-gold mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Securitization Matters under SARFAESI Act
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-law-gold mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Financial Cases
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-law-gold mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Criminal Cases
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-law-gold mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Intellectual Property Rights (IPR)
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-law-gold mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Joint Ventures
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-law-gold mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Privacy Law
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Practice;
