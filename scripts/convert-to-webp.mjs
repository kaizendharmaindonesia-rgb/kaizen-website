/**
 * Konversi semua gambar jpg/jpeg/png di src/assets/images ke WebP sebelum build.
 * Import di komponen harus pakai ekstensi .webp (mis. heroBackground from '.../image.webp').
 */
import { readdir, readFile, writeFile } from 'fs/promises'
import { join, extname } from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const imagesDir = join(__dirname, '..', 'src', 'assets', 'images')
const ext = ['.jpg', '.jpeg', '.png']

let sharp
try {
  sharp = (await import('sharp')).default
} catch {
  console.warn('sharp not installed; run npm install. Skipping webp conversion.')
  process.exit(0)
}

const files = await readdir(imagesDir).catch((err) => {
  console.warn('images dir not found or unreadable:', imagesDir, err.message)
  return []
})
const toConvert = files.filter((f) => ext.includes(extname(f).toLowerCase()))
if (toConvert.length === 0) {
  console.log('No jpg/jpeg/png files to convert in', imagesDir)
  process.exit(0)
}

for (const file of toConvert) {
  const base = file.replace(extname(file), '')
  const outPath = join(imagesDir, `${base}.webp`)
  const inPath = join(imagesDir, file)
  const buf = await readFile(inPath)
  await sharp(buf)
    .webp({ quality: 85 })
    .toFile(outPath)
  console.log(`Converted ${file} → ${base}.webp`)
}
