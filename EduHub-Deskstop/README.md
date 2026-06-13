# Academia Desktop – PC Web Application

A complete multi-page desktop HTML/CSS/JS implementation of the Academia learning platform.

## Pages & Navigation Map

| File | Screen | Description |
|------|--------|-------------|
| `dashboard.html` | Screen 3 | Performance Analytics & Goal Setter |
| `forums.html` | Screen 1 | Academia Discussions Forum |
| `courses.html` | Screen 2 | Smart Class – Video Recordings |
| `course-detail.html` | Screen 8 | SCJ1013 Course Detail with tabs |
| `collaboration.html` | Screen 4 | Student Collaboration & Mentoring |
| `studyguide-ai.html` | Screen 5 | Study Guide AI Workspace (live chat) |
| `pomodoro.html` | Screen 6 | EduFocus Pomodoro Timer (functional) |
| `resources.html` | Screen 7 | Student Resource Hub |
| `research.html` | — | Research Repository |
| `profile.html` | — | User Profile & Settings |

## File Structure

```
academia-desktop/
├── dashboard.html          ← Main entry point (Performance Analytics)
├── forums.html             ← Discussion threads
├── courses.html            ← Smart Class recordings
├── course-detail.html      ← Individual course page
├── collaboration.html      ← Student mentoring portal
├── studyguide-ai.html      ← AI chat study assistant
├── pomodoro.html           ← Working countdown timer
├── resources.html          ← Article resource hub
├── research.html           ← Paper repository
├── profile.html            ← User profile
├── css/
│   ├── shared.css          ← Design tokens, layout, components
│   ├── dashboard.css       ← Dashboard-specific styles
│   └── forums.css          ← Forum-specific styles
└── js/
    ├── shared.js           ← Toast notifications, nav helpers
    └── layout.js           ← Reusable layout component helpers
```

## Features

- **Working Pomodoro Timer** – Start/pause/reset with animated SVG ring
- **AI Chat Interface** – Interactive chat with simulated AI responses
- **Live Grade Slider** – Drag to update target grade display
- **New Thread Modal** – Post threads that appear in the list
- **Tab switching** – Course detail has 5 working tabs
- **Sidebar navigation** – All items route to correct pages
- **Toast notifications** – Feedback for all button clicks
- **Collapsible sections** – Course content sections expand/collapse
- **Filter buttons** – Category/topic filters on forums and resources

## How to Run

Open `dashboard.html` directly in any modern browser — no build step needed.

```bash
# Live reload (optional):
npx serve .
# or
python3 -m http.server 8080
```

## GitHub Pages

1. Push folder to a GitHub repo
2. Go to **Settings → Pages → Source: main, root**
3. Access at `https://<username>.github.io/<repo>/dashboard.html`

## Design System

All design tokens in `css/shared.css`:
- `--primary: #7B1C2E` (dark maroon)
- `--bg: #f4f3f1` (warm off-white)  
- `--font-head:` Playfair Display
- `--font-body:` Inter
