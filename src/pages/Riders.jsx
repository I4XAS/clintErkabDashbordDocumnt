import React from 'react';

function Riders() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-4xl font-bold text-gray-900 mb-3 flex items-center gap-3">
          <span>👥</span>
          Riders (Whitelist Management)
        </h1>
        <p className="text-xl text-gray-600">
          Control who can use your shuttle service - add individual users or entire email domains
        </p>
      </div>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
          <span>🎯</span>
          What You Can Do
        </h2>
        <ul className="space-y-3">
          {[
            'View all authorized users (whitelist)',
            'Add individual users by email address',
            'Add entire email domains for bulk access',
            'View user details and booking history',
            'Remove users from the whitelist',
            'Check user status (active/inactive)',
            'Search and filter through authorized users'
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-gray-700">
              <span className="text-green-500 text-xl font-bold mt-0.5">✓</span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
          <span>👤</span>
          Managing Individual Riders
        </h2>
        <div className="space-y-6">
          {[
            { num: 1, title: 'View Current Riders', desc: 'On the Riders page, you\'ll see a list of all users who currently have access to book shuttle services. Each entry shows the user\'s email address and their current status.' },
            { num: 2, title: 'Add a New Rider', desc: 'Click the "Add New Rider" button. Enter the person\'s email address in the form. Once added, they\'ll receive access to book rides through the system.' },
            { num: 3, title: 'View Rider Details', desc: 'Click on any rider in the list to see their detailed information: total bookings made, recent activity, contact information, and booking history.' },
            { num: 4, title: 'Remove a Rider', desc: 'If you need to revoke someone\'s access, click on their entry and select "Remove" or click the remove icon. They will no longer be able to book rides.' }
          ].map((step) => (
            <div key={step.num} className="relative bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-primary-300 transition-colors">
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                {step.num}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 ml-6">{step.title}</h3>
              <p className="text-gray-700 leading-relaxed ml-6">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
          <span>🏢</span>
          Managing Email Domains
        </h2>
        <div className="space-y-6">
          {[
            { num: 1, title: 'Understanding Domain Whitelist', desc: 'Instead of adding users one-by-one, you can add an entire email domain. Anyone with an email from that domain will automatically have access. For example: @yourcompany.com' },
            { num: 2, title: 'Add a Domain', desc: 'Click "Add Domain" button. Enter the domain name (e.g., @company.com). All users with emails from that domain will now be able to book rides without being individually added.' },
            { num: 3, title: 'View Active Domains', desc: 'See all whitelisted domains in the domain section. Each domain shows how many users from that domain have used the service.' },
            { num: 4, title: 'Remove a Domain', desc: 'To revoke access for an entire domain, click on the domain entry and select "Remove." All users from that domain will lose access unless they\'re individually whitelisted.' }
          ].map((step) => (
            <div key={step.num} className="relative bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-primary-300 transition-colors">
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                {step.num}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 ml-6">{step.title}</h3>
              <p className="text-gray-700 leading-relaxed ml-6">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
          <span>💡</span>
          Best Practices
        </h2>
        <div className="space-y-4">
          <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-6">
            <div className="flex items-start gap-3">
              <span className="text-2xl">🏢</span>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">When to Use Domain Whitelist</h3>
                <p className="text-gray-700 leading-relaxed">
                  Use domain whitelisting when you want to give access to everyone in an organization. Perfect for: corporate shuttle services, university transportation, or any service where the entire organization should have access. It saves time and ensures no one is left out.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-6">
            <div className="flex items-start gap-3">
              <span className="text-2xl">👤</span>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">When to Add Individual Users</h3>
                <p className="text-gray-700 leading-relaxed">
                  Add individual users when you need more control, such as: external partners, contractors, visitors, or VIP guests who don't have your organization's email domain. This gives you precise access control.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-orange-50 border-l-4 border-orange-500 rounded-lg p-6">
            <div className="flex items-start gap-3">
              <span className="text-2xl">⚠️</span>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Security Consideration</h3>
                <p className="text-gray-700 leading-relaxed">
                  Be careful when adding domains. Make sure the domain is secure and trusted. Anyone with an email from that domain will have access. For sensitive services, consider using individual approvals instead.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
          <span>⭐</span>
          Common Scenarios
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { icon: '🏢', title: 'Corporate Service', desc: 'Best approach: Add your company domain (@company.com). All employees automatically get access. Add individual contractors separately if needed.' },
            { icon: '🎓', title: 'University Shuttle', desc: 'Best approach: Add university domains (@university.edu). Consider separate domains for students and staff if you want different access levels.' },
            { icon: '🏨', title: 'Hotel Guests', desc: 'Best approach: Add individual guests by email. Remove them after checkout. This gives precise control over who has access at any given time.' },
            { icon: '🏗️', title: 'Multi-Company Project', desc: 'Best approach: Add domains for all participating companies. Easy to manage and ensures all team members from all companies have access.' }
          ].map((card, i) => (
            <div key={i} className="bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all">
              <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <span>{card.icon}</span>
                {card.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Riders;