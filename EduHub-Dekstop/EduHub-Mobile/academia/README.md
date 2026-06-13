# Academia – Student Learning Platform UI

A multi-page mobile-first HTML/CSS/JS implementation of the Academia app, based on the provided design mockups.

## Pages

| File | Description |
|------|-------------|
| `index.html` | Goal Setter & Dashboard (Screen 1) |
| `course.html` | Course Detail with tabs (Screen 3) |
| `forums.html` | Discussions & Forums (Screen 2) |
| `research.html` | Research papers listing |
| `profile.html` | Student profile |

## File Structure

```
academia/
├── index.html          ← Dashboard / Goal Setter
├── course.html         ← Course detail (tabs: Course / Participants / Grades)
├── forums.html         ← Discussions & forum threads
├── research.html       ← Research resources
├── profile.html        ← User profile
├── css/
│   ├── style.css       ← Shared design tokens, layout, components
│   ├── dashboard.css   ← Goal Setter page styles
│   ├── forums.css      ← Forums page styles
│   └── course.css      ← Course page styles
└── js/
    ├── nav.js          ← Active nav highlighting helper
    └── icons.js        ← SVG icon strings (reference)
```

## How to Run

Just open any `.html` file directly in a browser — no build step required.

For live reload during development:
```bash
npx serve .
# or
python3 -m http.server 8080
```

## Design Tokens

All colors and spacing are defined as CSS custom properties in `css/style.css`:

- `--clr-primary`: `#7B1C2E` (dark red)
- `--clr-bg`: `#F5F4F2` (warm off-white)
- `--clr-surface`: `#FFFFFF`
- `--font-display`: Playfair Display (serif headings)
- `--font-body`: Inter (UI text)

## GitHub Pages

To host on GitHub Pages:
1. Push this folder to a GitHub repository
2. Go to **Settings → Pages**
3. Set source to `main` branch, root `/`
4. Your site will be live at `https://<username>.github.io/<repo>/`
