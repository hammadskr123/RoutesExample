import React from 'react';

const Services = () => {
  const services = [
    {
      id: 1,
      name: 'Web Development',
      description: 'Custom website development tailored to your business needs with modern technologies.',
      icon: (
        <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      features: ['Responsive Design', 'SEO Optimization', 'CMS Integration', 'E-commerce Solutions']
    },
    {
      id: 2,
      name: 'Mobile App Development',
      description: 'Build native or cross-platform mobile applications for iOS and Android platforms.',
      icon: (
        <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      features: ['iOS & Android Apps', 'React Native Development', 'UI/UX Design', 'App Store Optimization']
    },
    {
      id: 3,
      name: 'UI/UX Design',
      description: 'Create beautiful, intuitive interfaces that enhance user experience and engagement.',
      icon: (
        <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      features: ['User Research', 'Wireframing', 'Prototyping', 'Usability Testing']
    },
    {
      id: 4,
      name: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies to grow your online presence and reach.',
      icon: (
        <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      features: ['SEO Services', 'Social Media Marketing', 'Content Marketing', 'PPC Advertising']
    },
    {
      id: 5,
      name: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and services to power your business applications.',
      icon: (
        <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      features: ['AWS Solutions', 'Azure Integration', 'Cloud Migration', 'Serverless Architecture']
    },
    {
      id: 6,
      name: 'Consulting',
      description: 'Expert technology consulting to help you make the right decisions for your business.',
      icon: (
        <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      features: ['IT Strategy', 'Technology Assessment', 'Digital Transformation', 'Process Optimization']
    }
  ];

  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center">
          <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Services</h2>
          <h1 className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
            What we offer
          </h1>
          <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
            Comprehensive solutions tailored to your business needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.id} className="pt-6">
                <div className="flow-root bg-white rounded-lg px-6 pb-8 h-full shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                        {service.icon}
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                      {service.name}
                    </h3>
                    <p className="mt-5 text-base text-gray-500">
                      {service.description}
                    </p>
                    <div className="mt-6">
                      <h4 className="text-sm font-medium text-gray-900">Key Features:</h4>
                      <ul className="mt-3 space-y-2">
                        {service.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <svg className="flex-shrink-0 h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className="ml-2 text-sm text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-indigo-700 rounded-lg shadow-xl overflow-hidden">
          <div className="px-6 py-12 sm:px-16 sm:py-16 lg:py-20 lg:px-24">
            <div className="lg:flex lg:items-center lg:justify-between">
              <div className="lg:w-0 lg:flex-1">
                <h2 className="text-3xl font-extrabold tracking-tight text-white">
                  Ready to get started?
                </h2>
                <p className="mt-4 max-w-3xl text-lg text-indigo-100">
                  Contact us today to discuss how we can help your business grow.
                </p>
              </div>
              <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                <div className="inline-flex rounded-md shadow">
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;