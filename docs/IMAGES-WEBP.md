# Menggunakan WebP

Proyek ini memakai **WebP** untuk gambar (hero, gallery, logo) agar ukuran lebih kecil dan load lebih cepat.

## Cara kerja

1. **Di repo** Anda simpan gambar asli dalam format **.jpg**, **.jpeg**, atau **.png** di `src/assets/images/`.
2. **Saat build** (`npm run build`), script `scripts/convert-to-webp.mjs` akan mengonversi semua file tersebut ke **.webp** di folder yang sama.
3. **Di kode** semua import gambar harus memakai ekstensi **.webp**, contoh:
   - `import heroBackground from '@/assets/images/modern-tokyo-street-background.webp'`
   - `import gallery0 from '@/assets/images/gallery-0.webp'`
   - `import logoImage from '@/assets/images/logo.webp'`

## File yang perlu ada di repo (sebelum konversi)

- `modern-tokyo-street-background.jpg` (atau .png)
- `gallery-0.jpeg` … `gallery-7.jpeg` (atau .jpg / .png)
- `logo.png` (atau .jpg) untuk Logo
- `logo.ico` untuk favicon (tidak dikonversi ke webp)

## Dependency

Konversi memakai **sharp**. Sudah ditambahkan di `devDependencies`; jalankan `npm install` sebelum build.

## Opsional: mengabaikan file WebP hasil generate

Agar file .webp hasil konversi tidak ikut di-commit, tambahkan di `.gitignore`:

```
src/assets/images/*.webp
```

Commit hanya file sumber (.jpg, .jpeg, .png). File .webp akan dibuat lagi setiap kali build (lokal atau CI).
