/* Academia – Shared Navigation Helper */

(function () {
  /* Highlight the active nav item based on current filename */
  const page = location.pathname.split('/').pop() || 'index.html';

  const map = {
    'index.html':    'nav-courses',
    'courses.html':  'nav-courses',
    'forums.html':   'nav-forums',
    'research.html': 'nav-research',
    'profile.html':  'nav-profile',
  };

  const activeId = map[page];
  if (activeId) {
    const el = document.getElementById(activeId);
    if (el) el.classList.add('active');
  }
})();
