# Vera Vale static website

Static GitHub Pages-ready site for a fictional intimacy consultant.

## Files

- `index.html` - homepage with recent article and journal previews
- `articles/` - paginated reading room with long-form essays
- `journal/` - paginated personal journal archive with long-form posts
- `styles.css` - responsive styling
- `script.js` - mailto booking helper
- `assets/vera-portrait.svg` - local hero artwork
- `.github/workflows/pages.yml` - GitHub Pages deployment workflow

## Publish on GitHub Pages

1. Create a new GitHub repository.
2. Push these files to the repository's `main` branch:
   ```powershell
   git init
   git add .
   git commit -m "Add static website"
   git branch -M main
   git remote add origin https://github.com/YOUR-USER/YOUR-REPO.git
   git push -u origin main
   ```
3. In GitHub, open **Settings > Pages**.
4. Set **Source** to **GitHub Actions**.
5. The included workflow will publish the site after the next push.

Before publishing, replace `booking@veravale.example` in `script.js` with the real booking email.
