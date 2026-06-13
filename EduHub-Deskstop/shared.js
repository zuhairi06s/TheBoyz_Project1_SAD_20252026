/* Academia Desktop — Shared Navigation JS */

(function () {
  const page = location.pathname.split('/').pop() || 'dashboard.html';

  // Map filenames to nav link hrefs
  const navMap = {
    'dashboard.html':     'dashboard.html',
    'courses.html':       'courses.html',
    'course-detail.html': 'courses.html',
    'research.html':      'research.html',
    'forums.html':        'forums.html',
    'collaboration.html': 'forums.html',
    'smartclass.html':    'courses.html',
    'pomodoro.html':      'dashboard.html',
    'studyguide-ai.html': 'research.html',
    'resources.html':     'courses.html',
  };

  const activeHref = navMap[page];
  if (activeHref) {
    document.querySelectorAll('.topbar-nav a').forEach(link => {
      if (link.getAttribute('href') === activeHref) link.classList.add('active');
    });
  }
})();

/* Toast helper */
function showToast(msg, type = 'success') {
  const t = document.createElement('div');
  t.className = 'toast toast-' + type;
  t.textContent = msg;
  t.style.cssText = `position:fixed;bottom:24px;right:24px;background:${type==='success'?'#2e7d52':'#7B1C2E'};color:#fff;padding:12px 20px;border-radius:8px;font-size:.84rem;font-weight:600;z-index:9999;box-shadow:0 4px 16px rgba(0,0,0,.2);animation:fadeIn .2s ease`;
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 3000);
}

/* Inject global toast animation */
const style = document.createElement('style');
style.textContent = '@keyframes fadeIn{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}';
document.head.appendChild(style);
