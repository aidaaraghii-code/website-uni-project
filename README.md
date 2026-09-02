# Iran Landmarks & Cultural Heritage

A static educational website celebrating five iconic Iranian landmarks and their cultural heritage. Built with plain HTML, CSS, and a small amount of JavaScript — no frameworks, no backend.

## About this project

This website was created as a university web-design project. It aims to share information about Iran's architectural and cultural treasures in a simple, accessible format that works completely offline.

## Features

- **Five landmark pages**: Persepolis, Isfahan, Shiraz, Golestan Palace, and Yazd
- **FAQ accordion** — click questions to reveal answers about visiting Iran's sites
- **Contact form** — client-side validation with success message (no backend required)
- **Dynamic footer year** — automatically updates the copyright year
- **Navigation dropdown** — jump between the five landmark pages
- **Photo gallery** — 14 Unsplash photographs representing each site
- **Responsive design** — adapts from mobile to desktop widths
- **CSS custom properties** (tokens) throughout for easy theming
- **shadcn/ui-inspired design** — turquoise accents, gold highlights, clean white background

## Project structure

```
index.html              # Home page (about/overview)
about.html              # Project purpose and scope
persepolis.html         # Ancient Achaemenid capital
isfahan.html            # Naqsh-e Jahan Square and mosques
shiraz.html             # Persian gardens and poets' tombs
golestan.html           # Golestan Palace, Tehran
yazd.html               # Desert city, windcatchers, Zoroastrian heritage
gallery.html            # Photo grid of all landmarks
faq.html                # Frequently asked questions
contact.html            # Contact form (demo)

style.css               # Full stylesheet with CSS tokens and components
main.js                 # FAQ accordion, form, footer year, navigation dropdown
```

## Technologies

- **HTML5** — semantic markup, no build step
- **CSS3** — custom properties (CSS variables), responsive design, no preprocessor
- **Vanilla JavaScript** — small script with 4 features (FAQ, form, year, dropdown)
- **Geist font** — loaded from Google Fonts, with system font fallback
- **Unsplash CDN** — all photographs are free images from Unsplash

## Adding new content

- To add a new landmark page: copy an existing `.html` file, update the `<title>`, `<h1>`, and content, then add navigation links in the header
- To add photos: replace the `src` attribute on `<img>` tags with a new Unsplash URL or a local file path
- To modify the color scheme: edit the CSS custom properties in `:root` within `style.css`

## Offline use

All data (text, images) is embedded in the HTML/CSS. No network connection is required after the page loads, making it suitable for classroom presentations or areas with limited internet access.

## License

This project is open for educational use. The photographs are served from Unsplash CDN and subject to the Unsplash License. The CSS design tokens and layout follow the shadcn/ui style guidelines.
