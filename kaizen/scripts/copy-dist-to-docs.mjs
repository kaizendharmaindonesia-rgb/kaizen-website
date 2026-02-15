/**
 * Salin isi dist/ ke project root (satu level di atas proyek Vite).
 * Dari .../kaizen/kaizen/dist → .../kaizen/
 */
import { cpSync, existsSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const projectRoot = join(__dirname, '..')   // .../kaizen/kaizen
const repoRoot = join(projectRoot, '..')    // .../kaizen
const dist = join(projectRoot, 'dist')

if (!existsSync(dist)) {
  console.warn('dist/ not found. Run npm run build first.')
  process.exit(1)
}

cpSync(dist, repoRoot, { recursive: true })
console.log('Copied', dist, '→', repoRoot)
