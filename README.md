# Valentino Tristanadi Portfolio

Portfolio website untuk Valentino Tristanadi - Information Technology Student

## Cara Deploy ke Vercel

### Persiapan
1. Pastikan sudah install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Login ke Vercel:
   ```bash
   vercel login
   ```

### Deploy
1. Masuk ke folder project:
   ```bash
   cd "path/to/noir-portfolio-main"
   ```

2. Jalankan perintah deploy:
   ```bash
   vercel
   ```

3. Ikuti instruksi:
   - Pilih project (buat baru jika belum ada)
   - Pilih directory: `dist`
   - Framework: Vite
   - Build command: `npm run build`
   - Output directory: `dist`

### Deploy Otomatis (Opsional)
Untuk deploy otomatis setiap commit:
1. Upload ke GitHub/GitLab
2. Connect repository di Vercel dashboard
3. Enable automatic deployment

## Konfigurasi
File `vercel.json` sudah diset untuk:
- Build command: `npm run build`
- Output directory: `dist`
- Framework: Vite
- Rewrite semua route ke `portfolio.html`

## Project Structure
- `public/portfolio.html` - File portfolio utama
- `public/portfolio.css` - Styling portfolio
- `src/` - Source code React
- `dist/` - Build output untuk deployment
"# portofolio-valent" 
