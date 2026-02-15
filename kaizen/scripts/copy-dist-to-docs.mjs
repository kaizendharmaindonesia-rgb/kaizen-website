/**
 * Salin isi dist/ ke docs/ setelah build.
 * Berguna untuk GitHub Pages yang deploy dari branch dengan folder /docs.
 */
import { cpSync, existsSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')
const dist = join(root, 'dist')
const docs = join(root, 'docs')

if (!existsSync(dist)) {
  console.warn('dist/ not found. Run npm run build first.')
  process.exit(1)
}

cpSync(dist, docs, { recursive: true })
console.log('Copied dist/ → docs/')
