## Portfolio
#### URL
https://osvaldoazevedo.com
#### Features
- [x] Landing page
- [x] Dark mode button
- [x] Side menu buttons working
- [x] CV download when clicked
- [x] Translation button
#### Updating the CV
Edit `src/data/cv.json`, the rest updates on the next `npm run dev` or `npm run build`:
- The downloadable `public/cv.pdf` is generated from it (`npm run cv` regenerates it on its own)
- The skills on the site are detected from it, using `src/data/skillCatalog.json` to pick the category. Skills listed in the CV that aren't in the catalog go to Extra, add them to the catalog to choose their category
#### Future features
- [ ] Blog posts
- [ ] Projects that I've displayed in the landing page 
