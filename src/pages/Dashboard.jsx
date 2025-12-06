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
  Map: () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
      <line x1="8" y1="2" x2="8" y2="18" />
      <line x1="16" y1="6" x2="16" y2="22" />
    </svg>
  ),
  Search: () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  ),
  Van: () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1" />
      <path d="M12 15v5" />
      <path d="M9 17h6" />
    </svg>
  ),
  Terminal: () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
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
  X: () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  ),
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

// Mock Search Bar Component
const SearchBar = () => (
  <div className="flex items-center gap-2.5 px-4 py-3 bg-white border border-slate-300 rounded-xl shadow-sm">
    <Icons.Search />
    <input
      type="text"
      placeholder="Search for terminal or vehicle..."
      className="flex-1 text-sm text-slate-700 placeholder-slate-400 focus:outline-none"
    />
    <kbd className="px-2 py-1 bg-slate-100 border border-slate-200 rounded text-[10px] text-slate-500">⌘K</kbd>
  </div>
);

// Van Details Modal
const VanDetailsModal = () => (
  <div className="bg-white rounded-2xl shadow-2xl w-[450px] overflow-hidden border border-slate-200">
    <div className="bg-slate-50 px-6 py-4 border-b border-slate-200 flex items-center justify-between">
      <h3 className="text-lg font-semibold text-slate-900">Van Details</h3>
      <button className="text-slate-400 hover:text-slate-600">
        <Icons.X />
      </button>
    </div>
    <div className="p-6 space-y-4">
      <div>
        <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">Vehicle ID</label>
        <p className="text-base font-medium text-slate-900">VAN-001</p>
      </div>
      <div>
        <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">Driver</label>
        <p className="text-sm text-slate-700">Ahmed Al-Mansouri</p>
      </div>
      <div>
        <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">Status</label>
        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          On Route
        </span>
      </div>
      <div>
        <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">Current Location</label>
        <p className="text-sm text-slate-700">En route to Airport Terminal</p>
      </div>
      <div>
        <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">Estimated Arrival</label>
        <p className="text-sm text-slate-700">15 minutes</p>
      </div>
    </div>
  </div>
);

// Van Status Badge Component
const VanStatusBadge = ({ status, label }) => {
  const styles = {
    'on-route': 'bg-green-100 text-green-700',
    'waiting': 'bg-blue-100 text-blue-700',
    'offline': 'bg-red-100 text-red-700',
    'on-break': 'bg-amber-100 text-amber-700',
  };

  const colors = {
    'on-route': 'bg-green-500',
    'waiting': 'bg-blue-500',
    'offline': 'bg-red-500',
    'on-break': 'bg-amber-500',
  };

  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${styles[status]}`}>
      <span className={`w-2 h-2 rounded-full ${colors[status]}`}></span>
      {label}
    </span>
  );
};

// Table of Contents
const tocItems = [
  { id: 'overview', label: 'Overview', sub: false },
  { id: 'search-functionality', label: 'Search Functionality', sub: false },
  { id: 'map-overview', label: 'Map Overview', sub: false },
  { id: 'terminals', label: 'Working with Terminals', sub: false },
  { id: 'terminal-details', label: 'Viewing Terminal Details', sub: true },
  { id: 'van-tracking', label: 'Van Tracking', sub: false },
  { id: 'van-states', label: 'Understanding Van States', sub: true },
  { id: 'van-details', label: 'Viewing Van Details', sub: true },
];

// Main Component
const DashboardDocs = () => {
  const [activeSection, setActiveSection] = useState('overview');

  return (
    <div className="flex min-h-screen bg-white">
      {/* Main Content */}
      <article className="flex-1 px-16 py-12 max-w-[896px]">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 mb-6 text-[13px]">
          <a href="#" className="text-slate-500 hover:text-cyan-600 transition-colors no-underline">Docs</a>
          <Icons.ChevronRight />
          <span className="text-slate-700 font-medium">Dashboard</span>
        </nav>

        {/* Page Title */}
        <h1 className="text-4xl font-bold text-slate-900 tracking-tight mb-4">Dashboard</h1>
        <p className="text-[17px] text-slate-600 mb-10 leading-relaxed">
          Your main control center with an interactive map view showing all terminals and vans in real-time. Monitor operations, track vehicles, and manage your shuttle service efficiently.
        </p>

        {/* Overview */}
        <h2 id="overview" className="text-2xl font-bold text-slate-900 mt-0 mb-5">Overview</h2>
        <p className="text-slate-700 mb-4 leading-relaxed">
          The Dashboard provides a visual, real-time overview of your entire shuttle service operation. You can see all terminals and vans on an interactive map, track vehicle movements, check statuses, and get detailed information by clicking on any element.
        </p>

        <InfoCard type="tip" title="Real-Time Updates">
          The map automatically refreshes to show the latest positions and statuses. You'll see vans moving in real-time as they travel between terminals, and status changes are reflected immediately.
        </InfoCard>

        <ul className="space-y-2 my-4">
          <li className="flex items-start gap-2 text-slate-700">
            <span className="text-cyan-600 mt-1">•</span>
            <span><strong>Interactive Map</strong> — View all terminals and vans on a single map</span>
          </li>
          <li className="flex items-start gap-2 text-slate-700">
            <span className="text-cyan-600 mt-1">•</span>
            <span><strong>Real-Time Tracking</strong> — Monitor van movements and positions live</span>
          </li>
          <li className="flex items-start gap-2 text-slate-700">
            <span className="text-cyan-600 mt-1">•</span>
            <span><strong>Quick Search</strong> — Find terminals or vehicles instantly</span>
          </li>
          <li className="flex items-start gap-2 text-slate-700">
            <span className="text-cyan-600 mt-1">•</span>
            <span><strong>Detailed Information</strong> — Click any element to see full details</span>
          </li>
        </ul>

        {/* Search Functionality */}
        <h2 id="search-functionality" className="text-2xl font-bold text-slate-900 mt-12 mb-5 pt-6 border-t border-slate-200">
          Search Functionality
        </h2>
        <p className="text-slate-700 mb-6 leading-relaxed">
          At the top of the Dashboard page, you'll find a search bar that allows you to quickly find any terminal or vehicle in your service.
        </p>

        <div className="my-6">
          <div className="text-xs text-slate-500 uppercase tracking-wide font-semibold mb-3">Search Bar</div>
          <SearchBar />
        </div>

        
        
        

        <InfoCard type="note" title="Search Tips">
          You can search by partial names. For example, typing "down" will find "Downtown Terminal". The search is case-insensitive and works with both terminal names and vehicle IDs.
        </InfoCard>

        {/* Map Overview */}
        <h2 id="map-overview" className="text-2xl font-bold text-slate-900 mt-12 mb-5 pt-6 border-t border-slate-200">
          Map Overview
        </h2>
        <p className="text-slate-700 mb-6 leading-relaxed">
          The interactive map is the centerpiece of the Dashboard. It displays all terminals as location markers and all vans as vehicle icons, each with different colors representing their current status.
        </p>


        <h3 className="text-lg font-semibold text-slate-800 mt-8 mb-4">Map Navigation</h3>
        
        <div className="space-y-4 mb-6">
          <div className="flex gap-4 p-4 bg-slate-50 rounded-lg">
            <div className="w-32 flex-shrink-0">
              <code className="text-xs font-semibold text-cyan-700 bg-cyan-50 px-2 py-1 rounded">Zoom In/Out</code>
            </div>
            <p className="text-sm text-slate-700 m-0">Use your mouse wheel to zoom in and out, or click the +/- buttons on the map controls.</p>
          </div>

          <div className="flex gap-4 p-4 bg-slate-50 rounded-lg">
            <div className="w-32 flex-shrink-0">
              <code className="text-xs font-semibold text-cyan-700 bg-cyan-50 px-2 py-1 rounded">Pan Around</code>
            </div>
            <p className="text-sm text-slate-700 m-0">Click and drag anywhere on the map to move around and explore different areas.</p>
          </div>

        </div>

        {/* Terminals Section */}
        <h2 id="terminals" className="text-2xl font-bold text-slate-900 mt-12 mb-5 pt-6 border-t border-slate-200">
          Working with Terminals
        </h2>
        <p className="text-slate-700 mb-6 leading-relaxed">
          Terminals are displayed on the map as location markers. Each terminal represents a pickup or drop-off point in your shuttle service network.
        </p>

        <h3 id="terminal-details" className="text-lg font-semibold text-slate-800 mt-8 mb-4">Viewing Terminal Details</h3>
        <p className="text-slate-700 mb-6 leading-relaxed">
          Click on any terminal marker on the map to see detailed information about that terminal.
        </p>

        <Steps steps={[
          {
            title: 'Locate a terminal on the map',
            description: 'Terminals appear as cyan-colored circular markers with a terminal icon. They are typically located at key points like airports, downtown areas, or major business districts.',
          },
          {
            title: 'Click on the terminal marker',
            description: 'Clicking on a terminal marker will open a details modal showing comprehensive information about that terminal.',
            
          },
        ]} />


        {/* Van Tracking Section */}
        <h2 id="van-tracking" className="text-2xl font-bold text-slate-900 mt-12 mb-5 pt-6 border-t border-slate-200">
          Van Tracking
        </h2>
        <p className="text-slate-700 mb-6 leading-relaxed">
          All vans in your service are displayed on the map as vehicle icons. Each van icon is color-coded to indicate its current status, making it easy to see the state of your entire fleet at a glance.
        </p>

        <h3 id="van-states" className="text-lg font-semibold text-slate-800 mt-8 mb-4">Understanding Van States</h3>
        <p className="text-slate-700 mb-6 leading-relaxed">
          Vans can be in one of four states, each represented by a different color on the map:
        </p>

        <div className="space-y-4 mb-6">
          <div className="flex gap-4 p-4 bg-slate-50 rounded-lg">
            <div className="w-32 flex-shrink-0">
              <VanStatusBadge status="on-route" label="On Route" />
            </div>
            <div className="text-sm text-slate-700">
              <p className="m-0"><strong>On Route</strong> — Moving between terminals. Icon appears in <span className="font-semibold text-green-600">green</span> on the map.</p>
            </div>
          </div>

          <div className="flex gap-4 p-4 bg-slate-50 rounded-lg">
            <div className="w-32 flex-shrink-0">
              <VanStatusBadge status="waiting" label="Waiting" />
            </div>
            <div className="text-sm text-slate-700">
              <p className="m-0"><strong>Waiting</strong> — At terminal waiting for riders. Icon appears in <span className="font-semibold text-blue-600">blue</span> on the map.</p>
            </div>
          </div>

          <div className="flex gap-4 p-4 bg-slate-50 rounded-lg">
            <div className="w-32 flex-shrink-0">
              <VanStatusBadge status="offline" label="Offline" />
            </div>
            <div className="text-sm text-slate-700">
              <p className="m-0"><strong>Offline</strong> — Driver phone offline. Icon appears in <span className="font-semibold text-red-600">red</span> on the map.</p>
            </div>
          </div>

          <div className="flex gap-4 p-4 bg-slate-50 rounded-lg">
            <div className="w-32 flex-shrink-0">
              <VanStatusBadge status="on-break" label="On Break" />
            </div>
            <div className="text-sm text-slate-700">
              <p className="m-0"><strong>On Break</strong> — Driver on approved break. Icon appears in <span className="font-semibold text-amber-600">amber</span> on the map.</p>
            </div>
          </div>
        </div>

        <InfoCard type="warning" title="Offline Vans">
          If a van shows as offline, it means the driver's mobile device is not connected to the system. This could be due to poor network coverage, a dead battery, or the app being closed. Contact the driver if a van remains offline for an extended period.
        </InfoCard>

        <h3 id="van-details" className="text-lg font-semibold text-slate-800 mt-12 mb-4">Viewing Van Details</h3>
        <p className="text-slate-700 mb-6 leading-relaxed">
          Click on any van icon on the map to see detailed information about that vehicle and its current trip.
        </p>

        <Steps steps={[
          {
            title: 'Locate a van on the map',
            description: 'Vans appear as smaller circular icons with different colors based on their status. They move in real-time on the map as they travel between terminals.',
          },
          {
            title: 'Click on the van icon',
            description: 'Clicking on a van icon will open a details modal showing comprehensive information about that vehicle.',
            content: (
              <div className="flex justify-center py-4">
                <VanDetailsModal />
              </div>
            ),
          },

        ]} />

        <InfoCard type="tip" title="Real-Time Updates">
          Van details update automatically as the vehicle moves. You'll see the estimated arrival time count down, and the location will update as the van progresses toward its destination.
        </InfoCard>

        {/* Navigation */}
        <nav className="flex justify-between mt-16 pt-8 border-t border-slate-200">
          <div />
          <button className="flex flex-col gap-1 px-6 py-4 bg-slate-50 border border-slate-200 rounded-xl hover:border-cyan-300 hover:bg-cyan-50 transition-all min-w-[200px] text-right">
            <span className="text-xs text-slate-500 uppercase tracking-wide font-medium">Next</span>
            <span className="text-[15px] font-semibold text-cyan-700 flex items-center justify-end gap-1.5">
              Routing Dashboard
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
          {tocItems.map((item) => (
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

export default DashboardDocs;
