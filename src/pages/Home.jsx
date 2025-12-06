import React from 'react';

function Home() {
  const features = [
    {
      icon: '📍',
      title: 'Dashboard',
      description: 'Monitor all terminals and vans in real-time with an interactive map view.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: '🚐',
      title: 'Routing Dashboard',
      description: 'Quick list view of operations without the complexity of maps.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: '📊',
      title: 'Reports & Analytics',
      description: 'Comprehensive insights into your operations with detailed trip logs.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: '👥',
      title: 'Riders Management',
      description: 'Control access with individual users or entire email domains.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: '🕐',
      title: 'Break Requests',
      description: 'Manage driver breaks efficiently while maintaining service coverage.',
      color: 'from-red-500 to-red-600'
    }
  ];

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-500 to-secondary-500 -mx-6 lg:-mx-8 px-6 lg:px-8 py-12 rounded-2xl text-white">
        <h1 className="text-4xl lg:text-5xl font-bold mb-4">
          Welcome to eRkab Documentation
        </h1>
        <p className="text-xl text-primary-50 max-w-3xl">
          Everything you need to manage your shuttle van system efficiently. 
          Explore comprehensive guides, tips, and best practices.
        </p>
      </div>

      {/* Quick Start */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Quick Start</h2>
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
              <span className="text-2xl">💡</span>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Getting Started</h3>
              <p className="text-gray-700 mb-4">
                Use the navigation menu on the left to explore each feature. Each section contains 
                detailed step-by-step guides and helpful tips to get you up and running quickly.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white rounded-full text-sm font-medium text-gray-700">
                  ⚡ Real-time tracking
                </span>
                <span className="px-3 py-1 bg-white rounded-full text-sm font-medium text-gray-700">
                  📱 Mobile-friendly
                </span>
                <span className="px-3 py-1 bg-white rounded-full text-sm font-medium text-gray-700">
                  🔒 Secure access control
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Core Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className={`w-14 h-14 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-4`}>
                <span className="text-3xl">{feature.icon}</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Key Capabilities */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-6">What You Can Do</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-green-500">✓</span>
              Operations Management
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">•</span>
                <span>Track all vans and terminals in real-time</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">•</span>
                <span>Monitor driver status and availability</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">•</span>
                <span>View service coverage across all locations</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">•</span>
                <span>Manage break requests efficiently</span>
              </li>
            </ul>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-purple-500">✓</span>
              Analytics & Control
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-purple-500 mt-1">•</span>
                <span>Access comprehensive trip history and logs</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500 mt-1">•</span>
                <span>Generate performance reports and insights</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500 mt-1">•</span>
                <span>Control user access with whitelists</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500 mt-1">•</span>
                <span>Export data for further analysis</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Need Help?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-xl p-6">
            <div className="text-3xl mb-3">📖</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Documentation</h3>
            <p className="text-gray-700 text-sm">
              Detailed guides for every feature with step-by-step instructions.
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-xl p-6">
            <div className="text-3xl mb-3">💬</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Support</h3>
            <p className="text-gray-700 text-sm">
              Get help from our support team whenever you need assistance.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 rounded-xl p-6">
            <div className="text-3xl mb-3">🎯</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Best Practices</h3>
            <p className="text-gray-700 text-sm">
              Learn tips and tricks to get the most out of eRkab.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;