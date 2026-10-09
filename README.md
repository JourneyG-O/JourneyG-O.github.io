# Stannum website

A static, English-language app website hosted with GitHub Pages at stannum.app.
No package installation or build step is required.

## Preview locally

Run `python3 -m http.server 8000` in this directory and open
`http://localhost:8000`. Stop the server with Ctrl+C.

## Files

- `index.html`: homepage, app list, social profiles, and email contact.
- `assets/css/site.css`: homepage styles.
- `assets/js/site.js`: optional reveal animations and email copying.
- `assets/css/documents.css`: shared app overview, support, and legal styles.
- `apps/<app>/index.html`: each app's overview and download link.
- `apps/<app>/legal/`: existing support, privacy, and terms URLs.

## Updating content

App Store links use `https://apps.apple.com/app/id<APP_ID>` without a fixed
country code. Update both the homepage and the app overview when changing links.
Availability in each country is managed separately in App Store Connect.

Keep existing legal URLs stable: they may be referenced by the apps or stores.
Only change policy statements after confirming the app's actual behavior.

Brand copy and the About section are awaiting the owner's input. The supplied hand-drawn logo is stored unchanged at
`assets/images/stannum-logo.png` and used in the header and central artwork.
Keep the original drawing separately.

`.gitignore` prevents new `.DS_Store` files from being added. Previously tracked
files remain tracked until explicitly removed from Git's index.
