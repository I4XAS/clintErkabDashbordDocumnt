import React, { useState } from 'react';

// Icons
const Icons = {
  Layout: () => (
    <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <line x1="3" y1="9" x2="21" y2="9" />
      <line x1="9" y1="21" x2="9" y2="9" />
    </svg>
  ),
  Route: () => (
    <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="6" cy="19" r="3" />
      <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15" />
      <circle cx="18" cy="5" r="3" />
    </svg>
  ),
  BarChart: () => (
    <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="12" y1="20" x2="12" y2="10" />
      <line x1="18" y1="20" x2="18" y2="4" />
      <line x1="6" y1="20" x2="6" y2="16" />
    </svg>
  ),
  Users: () => (
    <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  Clock: () => (
    <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  ),
  ChevronDown: () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  ),
  ChevronRight: () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  ),
};

// Navigation structure
const navigation = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: 'Layout',
  },
  {
    id: 'routing-dashboard',
    label: 'Routing Dashboard',
    icon: 'Route',
  },
  {
    id: 'reports',
    label: 'Reports',
    icon: 'BarChart',
    subItems: [
      { id: 'reports-overview', label: 'Overview' },
      { id: 'reports-routing', label: 'Routing' },
    ],
  },
  {
    id: 'whitelist-management',
    label: 'Whitelist Management',
    icon: 'Users',
  },
  {
    id: 'requests',
    label: 'Requests',
    icon: 'Clock',
  },
];

const Sidebar = ({ currentPage, onPageChange, isOpen, onToggle }) => {
  const [expandedSections, setExpandedSections] = useState({
    reports: true, // Reports section expanded by default
  });

  const toggleSection = (sectionId) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  if (!isOpen) {
    return null;
  }

  return (
    <>
      {/* Overlay for mobile */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
        onClick={onToggle}
      />
      
      {/* Sidebar */}
      <aside className="fixed top-16 left-0 bottom-0 w-[280px] bg-slate-50 border-r border-slate-200 overflow-y-auto py-6 z-50 transition-transform duration-300">
        <ul className="list-none p-0 m-0">
          {navigation.map((item) => {
            const IconComponent = Icons[item.icon];
            const hasSubItems = item.subItems && item.subItems.length > 0;
            const isExpanded = expandedSections[item.id];
            const isActive = currentPage === item.id || (hasSubItems && item.subItems.some(sub => currentPage === sub.id));

            return (
              <li key={item.id}>
                {hasSubItems ? (
                  <>
                    <button
                      onClick={() => toggleSection(item.id)}
                      className={`w-full flex items-center justify-between gap-2.5 px-6 py-2.5 text-sm font-medium transition-all border-l-[3px] text-left ${
                        isActive
                          ? 'text-cyan-700 bg-gradient-to-r from-cyan-50 to-transparent border-l-cyan-600'
                          : 'text-slate-600 border-l-transparent hover:text-cyan-700 hover:bg-cyan-50'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="opacity-70">
                          <IconComponent />
                        </span>
                        {item.label}
                      </div>
                      <span className="opacity-70">
                        {isExpanded ? <Icons.ChevronDown /> : <Icons.ChevronRight />}
                      </span>
                    </button>
                    {isExpanded && (
                      <ul className="list-none p-0 m-0 bg-slate-100/50">
                        {item.subItems.map((subItem) => {
                          const isSubActive = currentPage === subItem.id;
                          return (
                            <li key={subItem.id}>
                              <button
                                onClick={() => onPageChange(subItem.id)}
                                className={`w-full flex items-center gap-2.5 px-6 py-2 pl-14 text-sm font-medium transition-all border-l-[3px] text-left ${
                                  isSubActive
                                    ? 'text-cyan-700 bg-gradient-to-r from-cyan-50 to-transparent border-l-cyan-600'
                                    : 'text-slate-600 border-l-transparent hover:text-cyan-700 hover:bg-cyan-50'
                                }`}
                              >
                                {subItem.label}
                              </button>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </>
                ) : (
                  <button
                    onClick={() => onPageChange(item.id)}
                    className={`w-full flex items-center gap-2.5 px-6 py-2.5 text-sm font-medium transition-all border-l-[3px] text-left ${
                      isActive
                        ? 'text-cyan-700 bg-gradient-to-r from-cyan-50 to-transparent border-l-cyan-600'
                        : 'text-slate-600 border-l-transparent hover:text-cyan-700 hover:bg-cyan-50'
                    }`}
                  >
                    <span className="opacity-70">
                      <IconComponent />
                    </span>
                    {item.label}
                  </button>
                )}
              </li>
            );
          })}
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;