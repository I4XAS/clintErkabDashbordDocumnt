import React, { useState } from 'react';

// Icons
const Icons = {
  ChevronRight: () => (
    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  ),
  ChevronLeft: () => (
    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="15 18 9 12 15 6" />
    </svg>
  ),
  Copy: () => (
    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  ),
  Check: () => (
    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),
  Info: () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="16" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12.01" y2="8" />
    </svg>
  ),
  Warning: () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  ),
  Users: () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  Globe: () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  ),
  Plus: () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  ),
  Mail: () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  ),
  X: () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  ),
};

// Code Block Component
const CodeBlock = ({ language, code }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-6">
      <div className="flex items-center justify-between px-5 py-3 bg-slate-800 rounded-t-xl">
        <span className="text-xs font-medium text-slate-400 uppercase tracking-wide">{language}</span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-700 rounded-md text-slate-300 text-xs font-medium hover:bg-slate-600 hover:text-white transition-colors"
        >
          {copied ? <Icons.Check /> : <Icons.Copy />}
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <pre className="bg-slate-900 rounded-b-xl p-5 overflow-x-auto">
        <code className="font-mono text-[13px] leading-relaxed text-slate-100">{code}</code>
      </pre>
    </div>
  );
};

// Info Card Component
const InfoCard = ({ type, title, children }) => {
  const styles = {
    tip: {
      container: 'bg-cyan-50 border-cyan-200',
      icon: 'text-cyan-600',
      title: 'text-cyan-800',
      text: 'text-cyan-700',
    },
    warning: {
      container: 'bg-amber-50 border-amber-200',
      icon: 'text-amber-600',
      title: 'text-amber-800',
      text: 'text-amber-700',
    },
    note: {
      container: 'bg-slate-100 border-slate-200',
      icon: 'text-slate-600',
      title: 'text-slate-800',
      text: 'text-slate-600',
    },
  };

  const style = styles[type];
  const IconComponent = type === 'warning' ? Icons.Warning : Icons.Info;

  return (
    <div className={`flex gap-4 p-5 rounded-xl border my-6 ${style.container}`}>
      <div className={`flex-shrink-0 ${style.icon}`}>
        <IconComponent />
      </div>
      <div>
        <h4 className={`text-sm font-semibold mb-1 ${style.title}`}>{title}</h4>
        <p className={`text-sm leading-relaxed m-0 ${style.text}`}>{children}</p>
      </div>
    </div>
  );
};

// Steps Component
const Steps = ({ steps }) => (
  <ol className="my-8 list-none p-0 space-y-0">
    {steps.map((step, index) => (
      <li key={index} className="relative pl-14 pb-8 ml-4 border-l-2 border-slate-200 last:border-l-transparent last:pb-0">
        <div className="absolute -left-[17px] top-0 w-8 h-8 bg-cyan-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
          {index + 1}
        </div>
        <h4 className="text-base font-semibold text-slate-900 mb-2">{step.title}</h4>
        <p className="text-sm text-slate-600 m-0 mb-3">{step.description}</p>
        {step.content && (
          <div className="mt-4">
            {step.content}
          </div>
        )}
      </li>
    ))}
  </ol>
);

// Mock UI Components
const MockButton = ({ children, variant = 'primary' }) => {
  const variants = {
    primary: "bg-cyan-500 text-white hover:bg-cyan-600",
    secondary: "bg-white text-slate-700 hover:bg-slate-50 border border-slate-300",
  };
  return (
    <button className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-colors ${variants[variant]}`}>
      {children}
    </button>
  );
};

// Add Rider Modal
const AddRiderModal = () => (
  <div className="bg-white rounded-2xl shadow-2xl w-[450px] overflow-hidden border border-slate-200">
    <div className="bg-slate-50 px-6 py-4 border-b border-slate-200 flex items-center justify-between">
      <h3 className="text-lg font-semibold text-slate-900">Add New Rider</h3>
      <button className="text-slate-400 hover:text-slate-600">
        <Icons.X />
      </button>
    </div>
    <div className="p-6 space-y-5">
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
        <input 
          type="email" 
          placeholder="rider@company.com"
          className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
        <input 
          type="text" 
          placeholder="Enter full name"
          className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">Service</label>
        <select className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500">
          <option>Select service...</option>
          <option>TUWAIQ SERVICE</option>
          <option>Downtown Express</option>
          <option>Airport Shuttle</option>
        </select>
      </div>
    </div>
    <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex justify-end gap-3">
      <MockButton variant="secondary">Cancel</MockButton>
      <MockButton variant="primary">
        <Icons.Plus />
        Add Rider
      </MockButton>
    </div>
  </div>
);

// Add Domain Modal
const AddDomainModal = () => (
  <div className="bg-white rounded-2xl shadow-2xl w-[450px] overflow-hidden border border-slate-200">
    <div className="bg-slate-50 px-6 py-4 border-b border-slate-200 flex items-center justify-between">
      <h3 className="text-lg font-semibold text-slate-900">Add Domain</h3>
      <button className="text-slate-400 hover:text-slate-600">
        <Icons.X />
      </button>
    </div>
    <div className="p-6 space-y-5">
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">Domain Name</label>
        <input 
          type="text" 
          placeholder="company.com"
          className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
        />
        <p className="text-xs text-slate-500 mt-2">Enter domain without @ symbol</p>
      </div>
    </div>
    <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex justify-end gap-3">
      <MockButton variant="secondary">Cancel</MockButton>
      <MockButton variant="primary">
        <Icons.Plus />
        Add Domain
      </MockButton>
    </div>
  </div>
);

// Individual Riders Table
const IndividualRidersTable = () => {
  const riders = [
    {
      email: 'abdullahta@dmsventures.sa',
      fullName: 'Turkey DMS',
      joined: '10/29/2025',
      service: '1',
      status: 'active verified',
      successTrips: 0,
      canceledTrips: 0,
    },
    {
      email: 'aa@dw.com',
      fullName: 'Ali Omar',
      joined: '11/4/2025',
      service: '1',
      status: 'active verified',
      successTrips: 0,
      canceledTrips: 0,
    },
    {
      email: 'nov@test.com',
      fullName: 'nov',
      joined: '—',
      service: '1',
      status: 'active no account',
      successTrips: 0,
      canceledTrips: 0,
    },
    {
      email: 'thearabianwolf1@gmail.com',
      fullName: 'Mohammed Ahmed',
      joined: '11/10/2025',
      service: '1',
      status: 'inactive',
      successTrips: 0,
      canceledTrips: 0,
    },
  ];

  const getStatusBadge = (status) => {
    const styles = {
      'active verified': 'bg-green-100 text-green-700',
      'active no account': 'bg-amber-100 text-amber-700',
      'inactive': 'bg-slate-200 text-slate-600',
    };
    return (
      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${styles[status]}`}>
        {status === 'active verified' && '✓'}
        {status === 'active no account' && '⚠'}
        {status === 'inactive' && '○'}
        {status.replace('active ', '')}
      </span>
    );
  };

  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden bg-white">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-slate-50 border-b border-slate-200">
            <th className="text-left px-4 py-3 font-semibold text-slate-700 uppercase text-xs tracking-wide">Email</th>
            <th className="text-left px-4 py-3 font-semibold text-slate-700 uppercase text-xs tracking-wide">Full Name</th>
            <th className="text-left px-4 py-3 font-semibold text-slate-700 uppercase text-xs tracking-wide">Joined</th>
            <th className="text-left px-4 py-3 font-semibold text-slate-700 uppercase text-xs tracking-wide">Service</th>
            <th className="text-left px-4 py-3 font-semibold text-slate-700 uppercase text-xs tracking-wide">Verification Status</th>
            <th className="text-left px-4 py-3 font-semibold text-slate-700 uppercase text-xs tracking-wide">Trips Summary</th>
            <th className="text-left px-4 py-3 font-semibold text-slate-700 uppercase text-xs tracking-wide">Actions</th>
          </tr>
        </thead>
        <tbody>
          {riders.map((rider, i) => (
            <tr key={i} className="border-b border-slate-100 hover:bg-slate-50">
              <td className="px-4 py-3.5 text-slate-700">{rider.email}</td>
              <td className="px-4 py-3.5 text-slate-700">{rider.fullName}</td>
              <td className="px-4 py-3.5 text-slate-600">{rider.joined}</td>
              <td className="px-4 py-3.5 text-slate-600">{rider.service}</td>
              <td className="px-4 py-3.5">{getStatusBadge(rider.status)}</td>
              <td className="px-4 py-3.5 text-slate-600">
                <span className="text-green-600">✓ {rider.successTrips}</span>
                {' '}
                <span className="text-red-600">✗ {rider.canceledTrips}</span>
              </td>
              <td className="px-4 py-3.5">
                <div className="flex items-center gap-2">
                  {rider.status === 'inactive' ? (
                    <button className="px-3 py-1 text-xs bg-green-100 text-green-700 rounded-md hover:bg-green-200">
                      Activate
                    </button>
                  ) : (
                    <button className="px-3 py-1 text-xs bg-amber-100 text-amber-700 rounded-md hover:bg-amber-200">
                      Deactivate
                    </button>
                  )}
                  <button className="px-3 py-1 text-xs bg-red-100 text-red-700 rounded-md hover:bg-red-200">
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Domain Whitelist Table
const DomainWhitelistTable = () => {
  const domains = [
    {
      domain: 'testing.com.com',
      handle: '@testing.com.com',
      added: 'Nov 17, 2025',
      lastUpdated: 'Nov 17, 2025',
    },
    {
      domain: 'test.test.come',
      handle: '@test.test.come',
      added: 'Nov 30, 2025',
      lastUpdated: 'Nov 30, 2025',
    },
  ];

  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden bg-white">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-slate-50 border-b border-slate-200">
            <th className="text-left px-4 py-3 font-semibold text-slate-700 uppercase text-xs tracking-wide">Domain</th>
            <th className="text-left px-4 py-3 font-semibold text-slate-700 uppercase text-xs tracking-wide">Added Date</th>
            <th className="text-left px-4 py-3 font-semibold text-slate-700 uppercase text-xs tracking-wide">Last Updated</th>
            <th className="text-left px-4 py-3 font-semibold text-slate-700 uppercase text-xs tracking-wide">Actions</th>
          </tr>
        </thead>
        <tbody>
          {domains.map((domain, i) => (
            <tr key={i} className="border-b border-slate-100 hover:bg-slate-50">
              <td className="px-4 py-3.5">
                <div>
                  <div className="text-slate-900 font-medium">{domain.domain}</div>
                  <div className="text-slate-500 text-xs">{domain.handle}</div>
                </div>
              </td>
              <td className="px-4 py-3.5 text-slate-600">{domain.added}</td>
              <td className="px-4 py-3.5 text-slate-600">{domain.lastUpdated}</td>
              <td className="px-4 py-3.5">
                <button className="px-3 py-1 text-xs bg-red-100 text-red-700 rounded-md hover:bg-red-200">
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Table of Contents - Individual Riders
const tocItemsRiders = [
  { id: 'overview', label: 'Overview', sub: false },
  { id: 'individual-riders', label: 'Individual Riders', sub: false },
  { id: 'riders-table', label: 'Table Columns', sub: true },
  { id: 'add-rider', label: 'Adding a Rider', sub: true },
];

// Table of Contents - Domain Whitelist
const tocItemsDomain = [
  { id: 'overview', label: 'Overview', sub: false },
  { id: 'domain-whitelist', label: 'Domain Whitelist', sub: false },
  { id: 'domain-table', label: 'Table Columns', sub: true },
  { id: 'add-domain', label: 'Adding a Domain', sub: true },
];

// Main Component
const WhitelistManagementDocs = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [activeView, setActiveView] = useState('individual-riders'); // 'individual-riders' or 'domain-whitelist'

  return (
    <div className="flex min-h-screen bg-white">
      {/* Main Content */}
      <article className="flex-1 px-16 py-12 max-w-[896px]">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 mb-6 text-[13px]">
          <a href="#" className="text-slate-500 hover:text-cyan-600 transition-colors no-underline">Docs</a>
          <Icons.ChevronRight />
          <a href="#" className="text-slate-500 hover:text-cyan-600 transition-colors no-underline">Management</a>
          <Icons.ChevronRight />
          <span className="text-slate-700 font-medium">Whitelist Management</span>
        </nav>

        {/* Page Title */}
        <h1 className="text-4xl font-bold text-slate-900 tracking-tight mb-4">Whitelist Management</h1>
        <p className="text-[17px] text-slate-600 mb-10 leading-relaxed">
          Control who can use your shuttle services. Add riders individually by email or whitelist entire domains to allow all users from an organization.
        </p>

        {/* Overview */}
        <h2 id="overview" className="text-2xl font-bold text-slate-900 mt-0 mb-5">Overview</h2>
        <p className="text-slate-700 mb-4 leading-relaxed">
          The Whitelist Management page (also called the <strong>Riders</strong> page in the sidebar) lets you control access to your shuttle services. You can add specific users by their email address or whitelist entire email domains to grant access to everyone from an organization.
        </p>

        <InfoCard type="tip" title="Two Ways to Add Riders">
          <strong>Individual Riders:</strong> Add specific people by email address.<br />
          <strong>Domain Whitelist:</strong> Allow everyone from a company domain (e.g., all @oracle.com users).
        </InfoCard>

        {/* View Toggle Buttons */}
        <div className="flex gap-4 my-10 p-6 bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl border-2 border-slate-300 shadow-lg">
          <button
            onClick={() => {
              setActiveView('individual-riders');
              setActiveSection('individual-riders');
            }}
            className={`flex-1 flex items-center justify-center gap-3 px-6 py-4 rounded-xl text-base font-semibold transition-all transform ${
              activeView === 'individual-riders'
                ? 'bg-cyan-500 text-white shadow-xl scale-105 border-2 border-cyan-600'
                : 'bg-white text-slate-700 border-2 border-slate-300 hover:bg-slate-50 hover:border-slate-400 hover:shadow-md'
            }`}
          >
            <span className={activeView === 'individual-riders' ? 'opacity-100' : 'opacity-70'}>
              <Icons.Users />
            </span>
            <span>Individual Riders</span>
          </button>
          <button
            onClick={() => {
              setActiveView('domain-whitelist');
              setActiveSection('domain-whitelist');
            }}
            className={`flex-1 flex items-center justify-center gap-3 px-6 py-4 rounded-xl text-base font-semibold transition-all transform ${
              activeView === 'domain-whitelist'
                ? 'bg-cyan-500 text-white shadow-xl scale-105 border-2 border-cyan-600'
                : 'bg-white text-slate-700 border-2 border-slate-300 hover:bg-slate-50 hover:border-slate-400 hover:shadow-md'
            }`}
          >
            <span className={activeView === 'domain-whitelist' ? 'opacity-100' : 'opacity-70'}>
              <Icons.Globe />
            </span>
            <span>Domain Whitelist</span>
          </button>
        </div>

        {/* Individual Riders Section */}
        {activeView === 'individual-riders' && (
          <div>
            <h2 id="individual-riders" className="text-2xl font-bold text-slate-900 mt-12 mb-5 pt-6 border-t border-slate-200">
              Individual Riders
            </h2>
            <p className="text-slate-700 mb-6 leading-relaxed">
              This view shows all riders who have been added individually to your services. You can see their account status, track their trips, and manage their access.
            </p>

        <h3 id="riders-table" className="text-lg font-semibold text-slate-800 mt-8 mb-4">Understanding the Table Columns</h3>
        
        <div className="space-y-4 mb-6">
          <div className="flex gap-4 p-4 bg-slate-50 rounded-lg">
            <div className="w-32 flex-shrink-0">
              <code className="text-xs font-semibold text-cyan-700 bg-cyan-50 px-2 py-1 rounded">Email</code>
            </div>
            <p className="text-sm text-slate-700 m-0">The rider's email address used for signing in and identification.</p>
          </div>

          <div className="flex gap-4 p-4 bg-slate-50 rounded-lg">
            <div className="w-32 flex-shrink-0">
              <code className="text-xs font-semibold text-cyan-700 bg-cyan-50 px-2 py-1 rounded">Full Name</code>
            </div>
            <p className="text-sm text-slate-700 m-0">The rider's full name for easy identification in the system.</p>
          </div>

          <div className="flex gap-4 p-4 bg-slate-50 rounded-lg">
            <div className="w-32 flex-shrink-0">
              <code className="text-xs font-semibold text-cyan-700 bg-cyan-50 px-2 py-1 rounded">Joined</code>
            </div>
            <p className="text-sm text-slate-700 m-0">The date when the rider signed up and created their account. Shows "—" if they haven't signed up yet.</p>
          </div>

          <div className="flex gap-4 p-4 bg-slate-50 rounded-lg">
            <div className="w-32 flex-shrink-0">
              <code className="text-xs font-semibold text-cyan-700 bg-cyan-50 px-2 py-1 rounded">Service</code>
            </div>
            <p className="text-sm text-slate-700 m-0">Which shuttle service(s) this rider can use. Shows the service ID number.</p>
          </div>

          <div className="flex gap-4 p-4 bg-slate-50 rounded-lg">
            <div className="w-32 flex-shrink-0">
              <code className="text-xs font-semibold text-cyan-700 bg-cyan-50 px-2 py-1 rounded">Verification Status</code>
            </div>
            <div className="text-sm text-slate-700">
              <p className="m-0 mb-2">Shows the rider's account status. There are three possible values:</p>
              <ul className="space-y-1 ml-4">
                <li><span className="inline-flex items-center gap-1 px-2 py-0.5 bg-green-100 text-green-700 rounded-full text-xs font-medium">✓ verified</span> — Rider signed up and was activated by you</li>
                <li><span className="inline-flex items-center gap-1 px-2 py-0.5 bg-amber-100 text-amber-700 rounded-full text-xs font-medium">⚠ no account</span> — Email added but rider hasn't signed up yet</li>
                <li><span className="inline-flex items-center gap-1 px-2 py-0.5 bg-slate-200 text-slate-600 rounded-full text-xs font-medium">○ inactive</span> — Rider signed up but was deactivated by you</li>
              </ul>
            </div>
          </div>

          <div className="flex gap-4 p-4 bg-slate-50 rounded-lg">
            <div className="w-32 flex-shrink-0">
              <code className="text-xs font-semibold text-cyan-700 bg-cyan-50 px-2 py-1 rounded">Trips Summary</code>
            </div>
            <p className="text-sm text-slate-700 m-0">Shows successful trips (green checkmark) and canceled trips (red X) for this rider.</p>
          </div>

          <div className="flex gap-4 p-4 bg-slate-50 rounded-lg">
            <div className="w-32 flex-shrink-0">
              <code className="text-xs font-semibold text-cyan-700 bg-cyan-50 px-2 py-1 rounded">Actions</code>
            </div>
            <div className="text-sm text-slate-700">
              <p className="m-0 mb-2">Available actions for managing the rider:</p>
              <ul className="space-y-1 ml-4">
                <li><strong>Activate/Deactivate</strong> — Turn access on or off</li>
                <li><strong>Delete</strong> — Permanently remove the rider</li>
              </ul>
            </div>
          </div>
        </div>

        <InfoCard type="note" title="About Verification Status">
          When you add a rider's email, they must sign up to use the service. Until they sign up, their status shows "no account." After they sign up, you need to activate them before they can book trips.
        </InfoCard>

        <div className="my-8">
          <div className="text-xs text-slate-500 uppercase tracking-wide font-semibold mb-3">Example Table</div>
          <IndividualRidersTable />
        </div>

        {/* Adding a Rider */}
        <h3 id="add-rider" className="text-lg font-semibold text-slate-800 mt-12 mb-4">Adding a New Rider</h3>
        <p className="text-slate-700 mb-6 leading-relaxed">
          Follow these steps to add a rider individually by their email address:
        </p>

        <Steps steps={[
          {
            title: 'Click the "+ Add New Rider" button',
            description: 'Located in the top-right corner of the page when the "Individual Riders" view is active.',
            content: (
              <div className="inline-block">
                <MockButton variant="primary">
                  <Icons.Plus />
                  Add New Rider
                </MockButton>
              </div>
            ),
          },
          {
            title: 'Fill in the rider information',
            description: 'A modal will appear. Enter the rider\'s email address, full name, and select which service they should have access to.',
            content: (
              <div className="flex justify-center py-4">
                <AddRiderModal />
              </div>
            ),
          },
          {
            title: 'Add the rider',
            description: 'Click "Add Rider" to save. The rider will appear in the table with "active no account" status until they sign up.',
          },
        ]} />

        <InfoCard type="warning" title="Email Validation">
          Make sure to enter a valid email address. The system will check the email format before adding the rider.
        </InfoCard>
          </div>
        )}

        {/* Domain Whitelist Section */}
        {activeView === 'domain-whitelist' && (
          <div>
            <h2 id="domain-whitelist" className="text-2xl font-bold text-slate-900 mt-12 mb-5 pt-6 border-t border-slate-200">
              Domain Whitelist
            </h2>
            <p className="text-slate-700 mb-6 leading-relaxed">
              Whitelist entire email domains to automatically give access to all users with emails from that domain. This is useful for onboarding entire companies or organizations.
            </p>

        <InfoCard type="warning" title="Important">
          When you whitelist a domain, <strong>anyone</strong> with an email from that domain can use the service. Only whitelist trusted domains from your organization or partners.
        </InfoCard>

        <h3 id="domain-table" className="text-lg font-semibold text-slate-800 mt-8 mb-4">Understanding the Table Columns</h3>

        <div className="space-y-4 mb-6">
          <div className="flex gap-4 p-4 bg-slate-50 rounded-lg">
            <div className="w-32 flex-shrink-0">
              <code className="text-xs font-semibold text-cyan-700 bg-cyan-50 px-2 py-1 rounded">Domain</code>
            </div>
            <p className="text-sm text-slate-700 m-0">The whitelisted email domain (e.g., "oracle.com"). All users with @oracle.com emails can access the service.</p>
          </div>

          <div className="flex gap-4 p-4 bg-slate-50 rounded-lg">
            <div className="w-32 flex-shrink-0">
              <code className="text-xs font-semibold text-cyan-700 bg-cyan-50 px-2 py-1 rounded">Added Date</code>
            </div>
            <p className="text-sm text-slate-700 m-0">The date when this domain was added to the whitelist.</p>
          </div>

          <div className="flex gap-4 p-4 bg-slate-50 rounded-lg">
            <div className="w-32 flex-shrink-0">
              <code className="text-xs font-semibold text-cyan-700 bg-cyan-50 px-2 py-1 rounded">Last Updated</code>
            </div>
            <p className="text-sm text-slate-700 m-0">Currently shows the same as "Added Date" since domains can't be edited after creation. This column is reserved for future updates.</p>
          </div>

          <div className="flex gap-4 p-4 bg-slate-50 rounded-lg">
            <div className="w-32 flex-shrink-0">
              <code className="text-xs font-semibold text-cyan-700 bg-cyan-50 px-2 py-1 rounded">Actions</code>
            </div>
            <p className="text-sm text-slate-700 m-0">Remove — Permanently delete the domain from the whitelist. All users from that domain will lose access.</p>
          </div>
        </div>

        <div className="my-8">
          <div className="text-xs text-slate-500 uppercase tracking-wide font-semibold mb-3">Example Table</div>
          <DomainWhitelistTable />
        </div>

        {/* Adding a Domain */}
        <h3 id="add-domain" className="text-lg font-semibold text-slate-800 mt-12 mb-4">Adding a New Domain</h3>
        <p className="text-slate-700 mb-6 leading-relaxed">
          Follow these steps to whitelist an entire domain:
        </p>

        <Steps steps={[
          {
            title: 'Switch to Domain Whitelist view',
            description: 'Click the "Domain Whitelist" toggle button at the top of the page.',
            content: (
              <div className="flex gap-3">
                <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-white text-slate-700 border border-slate-300">
                  <Icons.Users />
                  Individual Riders
                </button>
                <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-cyan-500 text-white">
                  <Icons.Globe />
                  Domain Whitelist
                </button>
              </div>
            ),
          },
          {
            title: 'Click the "+ Add Domain" button',
            description: 'Located in the top-right corner of the page.',
            content: (
              <div className="inline-block">
                <MockButton variant="primary">
                  <Icons.Plus />
                  Add Domain
                </MockButton>
              </div>
            ),
          },
          {
            title: 'Enter the domain name',
            description: 'A modal will appear. Enter the domain name without the @ symbol (e.g., "oracle.com" not "@oracle.com").',
            content: (
              <div className="flex justify-center py-4">
                <AddDomainModal />
              </div>
            ),
          },
          {
            title: 'Add the domain',
            description: 'Click "Add Domain" to save. All users with emails from this domain can now use the service immediately.',
          },
        ]} />

        <InfoCard type="tip" title="Domain Format">
          Enter just the domain name without @ or http://. For example, use "oracle.com" instead of "@oracle.com" or "https://oracle.com".
        </InfoCard>
          </div>
        )}

        {/* Navigation */}
        <nav className="flex justify-between mt-16 pt-8 border-t border-slate-200">
          <button className="flex flex-col gap-1 px-6 py-4 bg-slate-50 border border-slate-200 rounded-xl hover:border-cyan-300 hover:bg-cyan-50 transition-all min-w-[200px] text-left">
            <span className="text-xs text-slate-500 uppercase tracking-wide font-medium">Previous</span>
            <span className="text-[15px] font-semibold text-cyan-700 flex items-center gap-1.5">
              <Icons.ChevronLeft />
              Reports
            </span>
          </button>
          <button className="flex flex-col gap-1 px-6 py-4 bg-slate-50 border border-slate-200 rounded-xl hover:border-cyan-300 hover:bg-cyan-50 transition-all min-w-[200px] text-right">
            <span className="text-xs text-slate-500 uppercase tracking-wide font-medium">Next</span>
            <span className="text-[15px] font-semibold text-cyan-700 flex items-center justify-end gap-1.5">
              Break Requests
              <Icons.ChevronRight />
            </span>
          </button>
        </nav>
      </article>

      {/* Table of Contents Sidebar */}
      <aside className="sticky top-20 w-[220px] max-h-[calc(100vh-80px)] overflow-y-auto px-8 flex-shrink-0">
        <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 mb-4">
          On This Page
        </div>
        <ul className="list-none p-0 m-0">
          {(activeView === 'individual-riders' ? tocItemsRiders : tocItemsDomain).map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={() => setActiveSection(item.id)}
                className={`block py-2 text-[13px] border-l-2 transition-colors no-underline ${
                  activeSection === item.id
                    ? 'text-cyan-700 border-l-cyan-600 font-medium pl-4'
                    : 'text-slate-500 border-l-transparent hover:text-cyan-600 pl-4'
                } ${item.sub ? 'pl-7 text-xs' : ''}`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
};

export default WhitelistManagementDocs;