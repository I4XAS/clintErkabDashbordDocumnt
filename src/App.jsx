import { useState, useEffect, useRef } from 'react';
import Sidebar from './components/Sidebar';
import WhitelistManagementPage from './pages/WhitelistManagementPage';
import Dashboard from './pages/Dashboard';
import RoutingDashboard from './pages/RoutingDashboard';
import Requests from './pages/Requests';

// Icons
const Icons = {
  Search: () => (
    <svg className="w-4 h-4 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  ),
  Menu: () => (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  ),
  X: () => (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  ),
  ArrowRight: () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  ),
};

// Dummy page component for pages we haven't built yet
const DummyPage = ({ pageId, title, onNavigate, prevPage, nextPage }) => {
  const Icons = {
  ChevronRight: () => (
    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  ),
  ArrowRight: () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  ),
    ChevronLeft: () => (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="15 18 9 12 15 6" />
      </svg>
    ),
    Construction: () => (
      <svg className="w-16 h-16 text-slate-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  };

  return (
    <div className="flex">
      <article className="flex-1 px-16 py-12 max-w-[896px]">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 mb-6 text-[13px]">
          <a href="#" className="text-slate-500 hover:text-cyan-600 transition-colors no-underline">Docs</a>
          <Icons.ChevronRight />
          <span className="text-slate-700 font-medium">{title}</span>
        </nav>

        {/* Page Title */}
        <h1 className="text-4xl font-bold text-slate-900 tracking-tight mb-4">{title}</h1>
        
        {/* Coming Soon Content */}
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mb-6">
            <Icons.Construction />
          </div>
          <h2 className="text-xl font-semibold text-slate-700 mb-2">Documentation Coming Soon</h2>
          <p className="text-slate-500 max-w-md">
            We're working on the documentation for this page. Check back soon for detailed guides and instructions.
          </p>
        </div>

        {/* Navigation Footer */}
        <nav className="flex justify-between mt-16 pt-8 border-t border-slate-200">
          {prevPage ? (
            <button
              onClick={() => onNavigate(prevPage.id)}
              className="flex flex-col gap-1 px-6 py-4 bg-slate-50 border border-slate-200 rounded-xl hover:border-cyan-300 hover:bg-cyan-50 transition-all min-w-[200px] text-left"
            >
              <span className="text-xs text-slate-500 uppercase tracking-wide font-medium">Previous</span>
              <span className="text-[15px] font-semibold text-cyan-700 flex items-center gap-1.5">
                <Icons.ChevronLeft />
                {prevPage.label}
              </span>
            </button>
          ) : <div />}
          {nextPage && (
            <button
              onClick={() => onNavigate(nextPage.id)}
              className="flex flex-col gap-1 px-6 py-4 bg-slate-50 border border-slate-200 rounded-xl hover:border-cyan-300 hover:bg-cyan-50 transition-all min-w-[200px] text-right ml-auto"
            >
              <span className="text-xs text-slate-500 uppercase tracking-wide font-medium">Next</span>
              <span className="text-[15px] font-semibold text-cyan-700 flex items-center justify-end gap-1.5">
                {nextPage.label}
                <Icons.ChevronRight />
              </span>
            </button>
          )}
        </nav>
      </article>

      {/* Empty TOC placeholder */}
      <aside className="sticky top-28 w-[220px] max-h-[calc(100vh-160px)] overflow-y-auto px-8 flex-shrink-0">
        <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 mb-4">
          On This Page
        </div>
        <p className="text-xs text-slate-400">No sections available</p>
      </aside>
    </div>
  );
};

// Page titles mapping
const pageTitles = {
  'dashboard': 'Dashboard',
  'routing-dashboard': 'Routing Dashboard',
  'reports-overview': 'Reports - Overview',
  'reports-routing': 'Reports - Routing',
  'whitelist-management': 'Whitelist Management',
  'requests': 'Requests',
};

// Search index - all searchable content
const searchIndex = [
  // Dashboard
  {
    pageId: 'dashboard',
    pageTitle: 'Dashboard',
    sections: [
      { id: 'overview', title: 'Overview', keywords: ['overview', 'dashboard', 'map', 'control center', 'real-time'] },
      { id: 'search-functionality', title: 'Search Functionality', keywords: ['search', 'find', 'terminal', 'vehicle', 'van'] },
      { id: 'map-overview', title: 'Map Overview', keywords: ['map', 'interactive', 'navigation', 'zoom', 'pan'] },
      { id: 'terminals', title: 'Working with Terminals', keywords: ['terminal', 'location', 'marker', 'pickup', 'drop-off'] },
      { id: 'terminal-details', title: 'Viewing Terminal Details', keywords: ['terminal details', 'terminal information', 'click terminal'] },
      { id: 'van-tracking', title: 'Van Tracking', keywords: ['van', 'vehicle', 'tracking', 'fleet', 'driver'] },
      { id: 'van-states', title: 'Understanding Van States', keywords: ['status', 'on route', 'waiting', 'offline', 'on break', 'green', 'blue', 'red', 'amber'] },
      { id: 'van-details', title: 'Viewing Van Details', keywords: ['van details', 'vehicle information', 'driver', 'location'] },
    ],
  },
  // Whitelist Management
  {
    pageId: 'whitelist-management',
    pageTitle: 'Whitelist Management',
    sections: [
      { id: 'overview', title: 'Overview', keywords: ['overview', 'whitelist', 'riders', 'access control', 'email'] },
      { id: 'individual-riders', title: 'Individual Riders', keywords: ['individual', 'rider', 'email', 'user', 'person'] },
      { id: 'riders-table', title: 'Table Columns', keywords: ['table', 'columns', 'email', 'name', 'status', 'verification'] },
      { id: 'add-rider', title: 'Adding a Rider', keywords: ['add', 'rider', 'new', 'email', 'create'] },
      { id: 'domain-whitelist', title: 'Domain Whitelist', keywords: ['domain', 'whitelist', 'company', 'organization', 'bulk'] },
      { id: 'domain-table', title: 'Table Columns', keywords: ['domain table', 'columns', 'domain name'] },
      { id: 'add-domain', title: 'Adding a Domain', keywords: ['add domain', 'whitelist domain', 'new domain'] },
    ],
  },
  // Requests
  {
    pageId: 'requests',
    pageTitle: 'Requests',
    sections: [
      { id: 'overview', title: 'Overview', keywords: ['requests', 'break', 'driver', 'approve', 'deny'] },
    ],
  },
  // Routing Dashboard
  {
    pageId: 'routing-dashboard',
    pageTitle: 'Routing Dashboard',
    sections: [
      { id: 'overview', title: 'Overview', keywords: ['routing', 'dashboard', 'linear view', 'route', 'simplified'] },
      { id: 'route-visualization', title: 'Route Visualization', keywords: ['route', 'line', 'horizontal', 'visualization', 'terminals'] },
      { id: 'terminals-display', title: 'Understanding Terminals', keywords: ['terminals', 'terminal icon', 'terminal id', 'terminal name'] },
      { id: 'van-movement', title: 'Van Movement', keywords: ['van movement', 'van position', 'real-time', 'tracking', 'travel'] },
      { id: 'van-states', title: 'Van States', keywords: ['van states', 'status', 'on route', 'waiting', 'offline', 'on break'] },
      { id: 'interacting', title: 'Interacting with Elements', keywords: ['click', 'interact', 'terminal details', 'van details'] },
    ],
  },
  // Reports
  {
    pageId: 'reports-overview',
    pageTitle: 'Reports - Overview',
    sections: [
      { id: 'overview', title: 'Overview', keywords: ['reports', 'overview', 'analytics', 'data'] },
    ],
  },
  {
    pageId: 'reports-routing',
    pageTitle: 'Reports - Routing',
    sections: [
      { id: 'overview', title: 'Overview', keywords: ['routing reports', 'routing', 'analytics'] },
    ],
  },
];

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const searchInputRef = useRef(null);

  const handlePageChange = (pageId) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setSearchOpen(false);
    setSearchQuery('');
    // Close sidebar on mobile after navigation
    if (window.innerWidth < 1024) {
      setSidebarOpen(false);
    }
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Search functionality
  const performSearch = (query) => {
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    const queryLower = query.toLowerCase();
    const results = [];

    searchIndex.forEach((page) => {
      page.sections.forEach((section) => {
        const titleMatch = section.title.toLowerCase().includes(queryLower);
        const keywordMatch = section.keywords.some(keyword => keyword.toLowerCase().includes(queryLower));
        
        if (titleMatch || keywordMatch) {
          results.push({
            pageId: page.pageId,
            pageTitle: page.pageTitle,
            sectionId: section.id,
            sectionTitle: section.title,
            relevance: titleMatch ? 2 : 1,
          });
        }
      });

      // Also check page title
      if (page.pageTitle.toLowerCase().includes(queryLower)) {
        results.push({
          pageId: page.pageId,
          pageTitle: page.pageTitle,
          sectionId: 'overview',
          sectionTitle: 'Overview',
          relevance: 3,
        });
      }
    });

    // Sort by relevance and remove duplicates
    const uniqueResults = results
      .filter((result, index, self) => 
        index === self.findIndex(r => r.pageId === result.pageId && r.sectionId === result.sectionId)
      )
      .sort((a, b) => b.relevance - a.relevance)
      .slice(0, 10);

    setSearchResults(uniqueResults);
  };

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    performSearch(query);
  };

  const handleSearchResultClick = (result) => {
    handlePageChange(result.pageId);
    // Scroll to section after a short delay to allow page to render
    setTimeout(() => {
      const element = document.getElementById(result.sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  // Keyboard shortcut for search
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen(true);
        setTimeout(() => searchInputRef.current?.focus(), 0);
      }
      if (e.key === 'Escape' && searchOpen) {
        setSearchOpen(false);
        setSearchQuery('');
        setSearchResults([]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [searchOpen]);

  // Close search when clicking outside
  useEffect(() => {
    if (!searchOpen) return;

    const handleClickOutside = (e) => {
      if (!e.target.closest('.search-container')) {
        setSearchOpen(false);
        setSearchQuery('');
        setSearchResults([]);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [searchOpen]);

  // Render the correct page component
  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'routing-dashboard':
        return <RoutingDashboard />;
      case 'reports-overview':
        return (
          <DummyPage 
            pageId={currentPage}
            title={pageTitles[currentPage] || 'Page'}
            onNavigate={handlePageChange}
            prevPage={null}
            nextPage={null}
          />
        );
      case 'reports-routing':
        return (
          <DummyPage 
            pageId={currentPage}
            title={pageTitles[currentPage] || 'Page'}
            onNavigate={handlePageChange}
            prevPage={null}
            nextPage={null}
          />
        );
      case 'whitelist-management':
        return (
          <WhitelistManagementPage 
            onNavigate={handlePageChange}
            prevPage={null}
            nextPage={null}
          />
        );
      case 'requests':
        return <Requests />;
      default:
        return (
          <DummyPage 
            pageId={currentPage}
            title={pageTitles[currentPage] || 'Page'}
            onNavigate={handlePageChange}
            prevPage={null}
            nextPage={null}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-slate-200 z-50 flex items-center px-6">
        <div className="flex items-center justify-between w-full max-w-[1600px] mx-auto">
          {/* Menu Toggle Button */}
          <button
            onClick={toggleSidebar}
            className="lg:hidden mr-4 p-2 text-slate-600 hover:text-cyan-700 hover:bg-cyan-50 rounded-lg transition-colors"
            aria-label="Toggle sidebar"
          >
            {sidebarOpen ? <Icons.X /> : <Icons.Menu />}
          </button>

          {/* Logo */}
          <a href="#" className="flex items-center gap-3 no-underline" onClick={() => handlePageChange('dashboard')}>
            <div className="w-9 h-9 bg-gradient-to-br from-cyan-500 to-cyan-700 rounded-[10px] flex items-center justify-center text-white font-bold text-lg">
              e
            </div>
            <div className="text-xl font-bold text-slate-900 tracking-tight">
              eRkab <span className="text-cyan-600">Docs</span>
            </div>
          </a>

          {/* Search */}
          <div className="hidden md:block relative search-container">
            <div 
              onClick={() => {
                setSearchOpen(true);
                setTimeout(() => searchInputRef.current?.focus(), 0);
              }}
              className="flex items-center gap-2.5 px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-[10px] cursor-pointer hover:border-cyan-300 hover:bg-white transition-all min-w-[260px]"
            >
              <Icons.Search />
              <span className="text-slate-400 text-sm">Search documentation...</span>
              <kbd className="ml-auto px-2 py-0.5 bg-white border border-slate-200 rounded text-[11px] text-slate-500">⌘K</kbd>
            </div>

            {/* Search Modal */}
            {searchOpen && (
              <div className="absolute top-full left-0 mt-2 w-[600px] bg-white border border-slate-200 rounded-xl shadow-2xl z-50 max-h-[500px] flex flex-col">
                <div className="flex items-center gap-3 px-4 py-3 border-b border-slate-200">
                  <Icons.Search />
                  <input
                    ref={searchInputRef}
                    type="text"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    placeholder="Search documentation..."
                    className="flex-1 text-sm text-slate-700 placeholder-slate-400 focus:outline-none"
                    autoFocus
                  />
                  <kbd className="px-2 py-1 bg-slate-100 border border-slate-200 rounded text-[10px] text-slate-500">ESC</kbd>
                </div>
                <div className="overflow-y-auto max-h-[400px]">
                  {searchQuery && searchResults.length === 0 ? (
                    <div className="px-4 py-8 text-center text-slate-500 text-sm">
                      No results found for "{searchQuery}"
                    </div>
                  ) : searchQuery && searchResults.length > 0 ? (
                    <div className="py-2">
                      {searchResults.map((result, index) => (
                        <button
                          key={`${result.pageId}-${result.sectionId}-${index}`}
                          onClick={() => handleSearchResultClick(result)}
                          className="w-full text-left px-4 py-3 hover:bg-slate-50 transition-colors border-b border-slate-100 last:border-b-0"
                        >
                          <div className="flex items-start gap-3">
                            <div className="flex-1">
                              <div className="text-sm font-medium text-slate-900">{result.sectionTitle}</div>
                              <div className="text-xs text-slate-500 mt-1">{result.pageTitle}</div>
                            </div>
                            <Icons.ArrowRight className="text-slate-400 mt-1" />
                          </div>
                        </button>
                      ))}
                    </div>
                  ) : (
                    <div className="px-4 py-8 text-center text-slate-500 text-sm">
                      Start typing to search...
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

   

          {/* Desktop Sidebar Toggle */}
          <button
            onClick={toggleSidebar}
            className="hidden lg:block ml-4 p-2 text-slate-600 hover:text-cyan-700 hover:bg-cyan-50 rounded-lg transition-colors"
            aria-label="Toggle sidebar"
          >
            {sidebarOpen ? <Icons.X /> : <Icons.Menu />}
          </button>
        </div>
      </header>

      {/* Sidebar */}
      <Sidebar 
        currentPage={currentPage} 
        onPageChange={handlePageChange}
        isOpen={sidebarOpen}
        onToggle={toggleSidebar}
      />

      {/* Main Content */}
      <main className={`mt-16 min-h-[calc(100vh-64px)] transition-all duration-300 ${
        sidebarOpen ? 'lg:ml-[280px]' : 'lg:ml-0'
      }`}>
        {renderPage()}
      </main>
    </div>
  );
}

export default App;