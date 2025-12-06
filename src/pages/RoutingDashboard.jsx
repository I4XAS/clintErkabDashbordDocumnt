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
  Terminal: () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  ),
  Van: () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1" />
      <path d="M12 15v5" />
      <path d="M9 17h6" />
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
  { id: 'van-states', label: 'Van States', sub: false },
];

// Main Component
const RoutingDashboardDocs = () => {
  const [activeSection, setActiveSection] = useState('overview');

  return (
    <div className="flex min-h-screen bg-white">
      {/* Main Content */}
      <article className="flex-1 px-16 py-12 max-w-[896px]">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 mb-6 text-[13px]">
          <a href="#" className="text-slate-500 hover:text-cyan-600 transition-colors no-underline">Docs</a>
          <Icons.ChevronRight />
          <span className="text-slate-700 font-medium">Routing Dashboard</span>
        </nav>

        {/* Page Title */}
        <h1 className="text-4xl font-bold text-slate-900 tracking-tight mb-4">Routing Dashboard</h1>
        <p className="text-[17px] text-slate-600 mb-10 leading-relaxed">
          A simplified, linear view of your shuttle service routes. See all terminals in a single line and track vans as they move between terminals in real-time.
        </p>

        {/* Overview */}
        <h2 id="overview" className="text-2xl font-bold text-slate-900 mt-0 mb-5">Overview</h2>
        <p className="text-slate-700 mb-4 leading-relaxed">
          The Routing Dashboard provides an alternative view to the map-based Dashboard. Instead of a geographical map, it displays terminals in a horizontal line, making it easier to see the route structure and track van movements between terminals.
        </p>

        <InfoCard type="tip" title="When to Use Routing Dashboard">
          Use the Routing Dashboard when you want a simplified, linear view of your routes. It's perfect for understanding the sequence of terminals and quickly seeing which vans are moving between them, without the complexity of a map interface.
        </InfoCard>

        <ul className="space-y-2 my-4">
          <li className="flex items-start gap-2 text-slate-700">
            <span className="text-cyan-600 mt-1">•</span>
            <span><strong>Linear Route View</strong> — All terminals displayed in a single horizontal line</span>
          </li>
          <li className="flex items-start gap-2 text-slate-700">
            <span className="text-cyan-600 mt-1">•</span>
            <span><strong>Real-Time Van Tracking</strong> — See vans moving between terminals as they travel</span>
          </li>
          <li className="flex items-start gap-2 text-slate-700">
            <span className="text-cyan-600 mt-1">•</span>
            <span><strong>Status Indicators</strong> — Color-coded van states for quick status identification</span>
          </li>
          <li className="flex items-start gap-2 text-slate-700">
            <span className="text-cyan-600 mt-1">•</span>
            <span><strong>Simplified Interface</strong> — No map navigation needed, just scroll horizontally</span>
          </li>
        </ul>

        
        {/* Van States */}
        <h2 id="van-states" className="text-2xl font-bold text-slate-900 mt-12 mb-5 pt-6 border-t border-slate-200">
          Van States
        </h2>
        <p className="text-slate-700 mb-6 leading-relaxed">
          Each van's status is indicated by the color of its icon. The same color scheme is used as in the Dashboard map view for consistency.
        </p>

        <div className="space-y-4 mb-6">
          <div className="flex gap-4 p-4 bg-slate-50 rounded-lg">
            <div className="w-32 flex-shrink-0">
              <VanStatusBadge status="on-route" label="On Route" />
            </div>
            <div className="text-sm text-slate-700">
              <p className="m-0"><strong>On Route</strong> — Moving between terminals. Icon appears in <span className="font-semibold text-green-600">green</span>.</p>
            </div>
          </div>

          <div className="flex gap-4 p-4 bg-slate-50 rounded-lg">
            <div className="w-32 flex-shrink-0">
              <VanStatusBadge status="waiting" label="Waiting" />
            </div>
            <div className="text-sm text-slate-700">
              <p className="m-0"><strong>Waiting</strong> — At terminal waiting for riders. Icon appears in <span className="font-semibold text-blue-600">blue</span>.</p>
            </div>
          </div>

          <div className="flex gap-4 p-4 bg-slate-50 rounded-lg">
            <div className="w-32 flex-shrink-0">
              <VanStatusBadge status="offline" label="Offline" />
            </div>
            <div className="text-sm text-slate-700">
              <p className="m-0"><strong>Offline</strong> — Driver phone offline. Icon appears in <span className="font-semibold text-red-600">red</span>.</p>
            </div>
          </div>

          <div className="flex gap-4 p-4 bg-slate-50 rounded-lg">
            <div className="w-32 flex-shrink-0">
              <VanStatusBadge status="on-break" label="On Break" />
            </div>
            <div className="text-sm text-slate-700">
              <p className="m-0"><strong>On Break</strong> — Driver on approved break. Icon appears in <span className="font-semibold text-amber-600">amber</span>.</p>
            </div>
          </div>
        </div>

      

       

        <InfoCard type="tip" title="Quick Status Check">
          The Routing Dashboard is ideal for quickly checking the status of all vans on a route. The linear layout makes it easy to see which vans are where and what their current states are, all at a glance.
        </InfoCard>

        {/* Navigation */}
        <nav className="flex justify-between mt-16 pt-8 border-t border-slate-200">
          <button className="flex   flex-col gap-1 px-6 py-4 bg-slate-50 border border-slate-200 rounded-xl hover:border-cyan-300 hover:bg-cyan-50 transition-all min-w-[200px] text-left">
            <span className="text-xs text-slate-500 uppercase tracking-wide font-medium">Previous</span>
            <span className="text-[15px] font-semibold text-cyan-700 flex items-center gap-1.5">
              <Icons.ChevronLeft />
              Dashboard
            </span>
          </button>
          <button className="flex flex-col gap-1 px-6 py-4 bg-slate-50 border border-slate-200 rounded-xl hover:border-cyan-300 hover:bg-cyan-50 transition-all min-w-[200px] text-right">
            <span className="text-xs text-slate-500 uppercase tracking-wide font-medium">Next</span>
            <span className="text-[15px] font-semibold text-cyan-700 flex items-center justify-end gap-1.5">
              Reports
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

export default RoutingDashboardDocs;

