# Desain dan Perencanaan Website Portofolio Responsive

Dokumen ini berisi rancangan arsitektur halaman, desain antarmuka, serta rencana hosting untuk website portofolio pribadi.

---

## 1. Struktur Halaman (Sitemap)

### A. Halaman Utama (Main Page)
Halaman ini bersifat *single-page application* dengan gulir (scroll) satu halaman untuk melihat bagian utama. Terdiri dari *section* berikut:
1. **Section Hero**
   - Headline / Teks sapaan yang menarik (misal: "Hi, I'm Muhammad Wahyu Anggoro, a Web Developer").
   - Foto profil profesional atau ilustrasi avatar.
   - Call to Action (CTA) button: "Lihat Proyek" dan "Unduh CV".
2. **Section Data Diri (About Me)**
   - Field Foto Diri (Profil).
   - Biografi singkat dan ringkasan profesional.
   - Daftar keahlian teknis (Skills) disajikan dengan *badges* atau *progress bar*.
   - Button Social Media (LinkedIn, GitHub, Instagram, & Email).
3. **Section Pengalaman (Experience)**
   - Format *Timeline* linimasa pendidikan dan pekerjaan.
   - Menyertakan: Posisi, Nama Perusahaan/Instansi, Rentang Waktu, dan poin-poin pencapaian.
4. **Section Project (Proyek)**
   - Menampilkan semua proyek secara bawaan (*default*).
   - Chip Filter Kategori Proyek (Misal: "Semua", "UI/UX", "Desain", "Website") untuk navigasi filter yang dinamis.
   - *Grid layout* berbentuk *Card* untuk menampilkan sekilas proyek sesuai filter.
   - Setiap kartu berisi: Thumbnail gambar, Judul Proyek, Daftar Teknologi yang digunakan, dan tombol "Baca Selengkapnya".
5. **Section Certificate (Sertifikat)**
   - *Carousel* atau *Grid* gambar-gambar sertifikat.
   - Mencantumkan judul sertifikasi, penyelenggara, dan tautan kredensial jika ada.

### B. Halaman Detail Project
Halaman khusus yang terbuka ketika pengunjung mengklik salah satu proyek dari Halaman Utama.
- **Hero/Banner Image**: Gambar tangkapan layar utama atau mockup perangkat proyek.
- **Kategori Project**: Chip kategori Project.
- **Informasi Utama**: Judul, Deskripsi lengkap, Peran (Role), dan Tahun.
- **Tech Stack**: Rincian teknologi yang digunakan secara spesifik.
- **Action Buttons**: Tautan langsung "Lihat Proyek".

### C. Halaman Manajemen Konten (Admin Content Management/CMS)
Berfungsi agar pemilik portofolio bisa dengan mudah mengubah isi data tanpa menyentuh kode program. (Mewajibkan fitur Autentikasi / Login).
- **Dashboard**: Ringkasan data (jumlah pengalaman, proyek, pengunjung).
- **Tabel Kelola Data**:
  - CRUD (Create, Read, Update, Delete) untuk daftar Proyek, Sertifikat, dan Pengalaman.
  - Editor teks mumpuni (misalnya *WYSIWYG editor*) untuk mengedit deskripsi bio/proyek.
- **File Uploader**: Untuk mengelola gambar aset (foto diri, thumbnail proyek).

---

## 2. Rencana Desain & UI/UX (Responsive)

- **Pendekatan Mobile-First**: Memastikan navigasi, ukuran font, dan elemen *grid* tampil sempurna secara optimal pada ukuran layar *handphone* sebelum disesuaikan membesar di ukuran desktop.
- **Sistem Navigasi**:
  - *Desktop*: Sticky header navigasi yang mulus *smooth-scroll* ke bagian-bagian halaman.
  - *Mobile*: Menu bertipe Hamburger yang menyembunyikan tautan hingga ditekan.
- **Estetika (Glassmorphism & Dark Mode)**: Dapat menerapkan gaya modern yang sedikit transparan (*glassmorphism*) serta mendukung *Dark Mode* untuk kenyamanan mata pengunjung.
- **Animasi Ringan**: Menambahkan mikro-interaksi (*hovers*, kemunculan transisi masuk/*fade/slide in* saat digulir) agar halaman serasa statis namun hidup.

---

## 3. Rencana Hosting menggunakan Vercel

Vercel adalah platform hosting yang sangat direkomendasikan terutama apabila portofolio dikembangkan menggunakan ekosistem *JavaScript/TypeScript* seperti **Next.js**, **React**, atau **Vue**.

**Tahapan Deployment di Vercel:**
1. **Source Control Integration**: Pastikan kode portofolio telah di-*push* ke layanan repositori Git seperti GitHub, GitLab, atau Bitbucket.
2. **Koneksi Akun**: Buka situs [Vercel](https://vercel.com) lalu masuk/buat akun menggunakan GitHub Anda.
3. **Impor Proyek**:
   - Di *dashboard* Vercel, klik tombol **"Add New"** > **"Project"**.
   - Cari *(search)* repositori portofolio yang ada di akun GitHub, klik **Import**.
4. **Konfigurasi Build & Lingkungan**:
   - Vercel umumnya akan mendeteksi framework yang digunakan secara otomatis (seperti `npm run build`).
   - Masukkan *Environment Variables* (`.env`) jika Anda menghubungkan dengan CMS pihak ketiga (misal: Firebase, Supabase, Sanity CMS) atau detail Autentikasi halaman admin.
5. **Deploy**:
   - Klik **Deploy**. Vercel akan menarik kode, menjalankan proses kompilasi (*build*), dan menayangkannya (`live`).
   - Biasanya memakan waktu kurang dari 5 menit.
6. **Custom Domain**: Proses sudah selesai dan Vercel memberikan sub-domain otomatis (contoh: `namakamu.vercel.app`). Anda bisa memasang domain berbayar (seperti `.com` / `.my.id`) melalui menu Settings > Domains.
