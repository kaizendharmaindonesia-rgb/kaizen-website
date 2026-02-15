/**
 * Salin isi dist/ ke project root (satu level di atas proyek Vite).
 * Dari .../kaizen/kaizen/dist → .../kaizen/
 * Lalu ganti path absolut (/assets/, /favicon) jadi relatif (./assets/, ./favicon) agar gambar & asset ketemu di GitHub Pages.
 */
import { cpSync, existsSync, readdirSync, readFileSync, writeFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const projectRoot = join(__dirname, '..')   // .../kaizen/kaizen
const repoRoot = join(projectRoot, '..')   // .../kaizen
const dist = join(projectRoot, 'dist')

if (!existsSync(dist)) {
  console.warn('dist/ not found. Run npm run build first.')
  process.exit(1)
}

cpSync(dist, repoRoot, { recursive: true })
console.log('Copied', dist, '→', repoRoot)

// Agar asset & gambar bisa diload di GitHub Pages: ganti path absolut → relatif (hanya index.html & assets/)
function fixFile(full) {
  let s = readFileSync(full, 'utf8')
  const before = s
  // Path dalam string: "/assets/ atau '/assets/ atau `/assets/
  s = s.replace(/(["'`])\/assets\//g, '$1./assets/')
  s = s.replace(/(["'`])\/favicon\./g, '$1./favicon.')
  // CSS url()
  s = s.replace(/url\(\/assets\//g, 'url(./assets/')
  s = s.replace(/url\(["']\/assets\//g, (m) => m.replace('/assets/', './assets/'))
  // Semua /assets/ yang belum relatif (minified JS bisa tanpa quote di depan)
  s = s.replace(/(?<!\.)\/assets\//g, './assets/')
  if (s !== before) {
    writeFileSync(full, s)
    console.log('Fixed paths in', full.replace(repoRoot, ''))
  }
}

const indexHtml = join(repoRoot, 'index.html')
if (existsSync(indexHtml)) fixFile(indexHtml)
const assetsDir = join(repoRoot, 'assets')
if (existsSync(assetsDir)) {
  for (const name of readdirSync(assetsDir)) {
    const full = join(assetsDir, name)
    if (name.endsWith('.js') || name.endsWith('.css')) fixFile(full)
  }
}
console.log('Done.')
