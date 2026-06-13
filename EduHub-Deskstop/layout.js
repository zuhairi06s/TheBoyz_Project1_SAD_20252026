/* Academia Desktop — Layout Components */

function renderTopbar(activePage) {
  const pages = [
    { href: 'dashboard.html', label: 'Dashboard' },
    { href: 'courses.html',   label: 'Courses' },
    { href: 'research.html',  label: 'Research' },
    { href: 'forums.html',    label: 'Forum' },
  ];

  return `
  <header class="topbar">
    <a href="dashboard.html" class="topbar-brand">
      <div class="brand-icon">🎓</div>
      Academia
    </a>
    <nav class="topbar-nav">
      ${pages.map(p => `<a href="${p.href}" class="${activePage===p.href?'active':''}">${p.label}</a>`).join('')}
    </nav>
    <div class="topbar-search">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
      <input type="search" placeholder="Search..." />
    </div>
    <div class="topbar-actions">
      <button class="icon-btn" style="position:relative" onclick="showToast('No new notifications')">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
        <span class="badge">2</span>
      </button>
      <div class="user-pill" onclick="window.location='profile.html'">
        <div class="user-avatar">JS</div>
        <div class="user-info">
          <div class="u-name">Dr. Julian Smith</div>
          <div class="u-role">Faculty of Science</div>
        </div>
      </div>
    </div>
  </header>`;
}

function renderDashboardSidebar() {
  return `
  <aside class="sidebar">
    <div class="sidebar-section-label">Main</div>
    <a href="dashboard.html" class="sidebar-item active">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
      Dashboard
    </a>
    <a href="pomodoro.html" class="sidebar-item">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
      Pomodoro Timer
    </a>
    <a href="courses.html" class="sidebar-item">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
      Grade Tracker
    </a>
    <a href="resources.html" class="sidebar-item">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
      Resources
    </a>
    <a href="#" class="sidebar-item">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/></svg>
      Settings
    </a>
    <div class="sidebar-bottom">
      <div class="sidebar-promo">
        <div class="promo-title">Premium Member</div>
        <div class="promo-body">Access to advanced citation tools and AI study features.</div>
      </div>
    </div>
  </aside>`;
}

function renderForumSidebar(activeItem) {
  const items = [
    { href: 'dashboard.html', label: 'Dashboard', icon: '<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>' },
    { href: 'forums.html', label: 'All Forums', icon: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>' },
  ];
  const recentItems = [
    { href: 'dashboard.html', label: 'Performance Analytics' },
    { href: 'studyguide-ai.html', label: 'AI Study Tools' },
    { href: 'collaboration.html', label: 'Student Collab' },
    { href: 'resources.html', label: 'Thesis Methods' },
  ];

  return `
  <aside class="sidebar">
    <div class="sidebar-section-label">Main</div>
    <a href="dashboard.html" class="sidebar-item${activeItem==='dashboard'?' active':''}">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
      Dashboard
    </a>
    <a href="forums.html" class="sidebar-item${activeItem==='forums'?' active':''}">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
      All Forums
    </a>
    <div class="sidebar-section-label" style="margin-top:8px;">Recently Visited</div>
    ${recentItems.map(i => `<a href="${i.href}" class="sidebar-sub-item">${i.label}</a>`).join('')}
    <div class="sidebar-bottom">
      <div class="sidebar-promo">
        <div class="promo-title">Premium Member</div>
        <div class="promo-body">Access to advanced citation tools.</div>
      </div>
    </div>
  </aside>`;
}
