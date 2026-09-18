# Main'O Website

Official entrepreneur and portfolio website for Jermaine Williams, also known as Main'O.

## Website sections

- Personal introduction and professional summary
- Construction, content creation, and music services
- Featured music and construction experience
- Developing business direction for JW Legacy Enterprises
- Contact and GitHub links

## Run locally

This is a dependency-free static website. Open `index.html` in a browser or run a local server:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deployment readiness

The site uses standard, dependency-free HTML, CSS, and JavaScript and can be imported by a
static-site host without a build command. Configure the host with:

- **Publish directory:** repository root (`/`)
- **Build command:** none
- **Entry file:** `index.html`

All typography uses local system font fallbacks, so the page has no runtime font dependency.
Content remains visible if JavaScript or `IntersectionObserver` is unavailable.

## Publish with GitHub Pages

In the repository settings, open **Pages**, select **Deploy from a branch**, choose `main` and `/ (root)`, then save.

## Details still needed

- Official business email address
- Official social media profile links
- A professional headshot or brand photo
- Confirmation after the LLC filing is completed
