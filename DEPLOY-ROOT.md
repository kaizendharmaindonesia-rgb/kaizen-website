# Deploy dari root (GitHub Pages – static, folder root)

Build sudah memakai **path relatif** (`./assets/...`, `./favicon.svg`) agar JS/CSS bisa diload di GitHub Pages (project site: `https://user.github.io/repo-name/`).

Setelah `npm run build` dari folder **kaizen/** (proyek Vite), hasil build disalin ke **root repo** (`index.html`, `assets/`, `favicon.svg`).

Agar situs muncul di GitHub Pages, file tersebut **harus di-commit**:

```bash
# Dari root repo (parent dari kaizen/)
cd /Users/soeltanzakirizaldy/kaizen

git add index.html assets/ favicon.svg
git status   # pastikan index.html dan assets/ tampil
git commit -m "Deploy: update build output for GitHub Pages root"
git push
```

Kalau `index.html` dan `assets/` tidak di-add dan di-commit, GitHub Pages (folder root) tidak akan menemukan `index.html`.

**Jika gambar tidak ter-load (gagal terdownload):** Pastikan build dijalankan dari **kaizen/kaizen** dengan `npm run build` (script ini memakai `VITE_BASE_PATH=./` dan menyalin + memperbaiki path ke root). Lalu commit **seluruh isi** `assets/` (termasuk file `.webp`, `.ico`) dan push. URL gambar di bundle harus relatif (`./assets/...`) agar di project site (`.../kaizen-website/`) tidak meminta ke domain root.
