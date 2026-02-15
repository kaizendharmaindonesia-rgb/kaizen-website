# Deploy ke GitHub Pages

## Persiapan

1. **Buat repo GitHub** (jika belum) dan push project ini.
2. **Aktifkan GitHub Pages dari GitHub Actions**
   - Buka repo → **Settings** → **Pages**
   - Di **Source** pilih **GitHub Actions**

## Deploy otomatis

- Setiap push ke branch `main` atau `master` akan memicu workflow **Deploy to GitHub Pages**.
- Setelah selesai, situs akan live di:
  ```
  https://<username>.github.io/<nama-repo>/
  ```
  Contoh: jika repo Anda `kaizen`, URL-nya `https://username.github.io/kaizen/`

## Deploy manual

- Buka tab **Actions** → pilih workflow **Deploy to GitHub Pages** → **Run workflow**.

## Jika nama repo bukan `kaizen`

Base path sudah di-set otomatis dari nama repo lewat env `VITE_BASE_PATH` di workflow. Tidak perlu ubah apa pun.

## Tes build lokal dengan base path production

```bash
VITE_BASE_PATH=/kaizen/ npm run build
npm run preview
```

Lalu buka URL yang muncul (mis. `http://localhost:4173/kaizen/`) untuk cek sebelum deploy.
