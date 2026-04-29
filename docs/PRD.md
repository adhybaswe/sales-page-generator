Product Requirements Document (PRD): AI Sales Page Generator

## 1. Ringkasan Produk (Product Overview)
Aplikasi web yang berfungsi untuk mengubah informasi mentah dari suatu produk atau layanan menjadi halaman penjualan (*sales page*) yang terstruktur, lengkap dengan teks pemasaran (*marketing copy*) yang persuasif [1]. 

## 2. Spesifikasi Teknologi (Tech Stack)
*   **Backend & Framework:** Laravel [1].
*   **Autentikasi:** Laravel Auth [1].
*   **Styling & Frontend UI:** Tailwind CSS.
*   **Integrasi AI:** LLM API (bebas menggunakan penyedia API manapun) [2].
*   **Database:** Bebas (MySQL/PostgreSQL), wajib terhubung untuk menyimpan data pengguna dan hasil *generate* [3, 4].

## 3. Fitur Utama (Core Requirements)
Sistem ini mewajibkan pengembangan 5 modul fitur utama:

### 3.1. User Authentication (Autentikasi Pengguna)
Sistem manajemen pengguna dasar untuk mengakses aplikasi.
*   **Fungsionalitas:** Pendaftaran (*register*), masuk (*login*), dan keluar (*logout*) [1].
*   **Syarat Teknis:** Harus dibangun menggunakan bawaan Laravel Auth [1].

### 3.2. Product Input Form (Formulir Input Produk)
Antarmuka pengguna berupa formulir terstruktur tempat pengguna dapat memasukkan rincian produk mereka. Menggunakan komponen form yang di-styling dengan Tailwind CSS agar rapi dan responsif.
*   **Data yang wajib dikumpulkan:** 
    - Nama produk/layanan [1].
    - Deskripsi [2].
    - Fitur utama (harus mendukung *multi-input* atau pemisahan dengan koma) [2].
    - Target audiens [2].
    - Harga [2].
    - *Unique selling points* (Nilai jual unik) [2].

### 3.3. AI Sales Page Generation (Pembuatan Halaman dengan AI)
Modul utama di mana sistem mengirimkan data dari formulir ke LLM API untuk menyusun halaman penjualan [2].
*   **Struktur Konten yang Dihasilkan AI:** Wajib menyertakan *headline* yang memikat, *sub-headline*, deskripsi produk, bagian manfaat (*benefits*), rincian fitur, *placeholder* untuk bukti sosial (*social proof*), tampilan harga, dan *Call-to-Action* (CTA) yang jelas [2].
*   **Aturan Output:** Hasil dari AI **tidak boleh** hanya ditampilkan sebagai teks mentah (*raw text*). Output harus di-*render* sebagai halaman yang memiliki gaya visual (*styled*) dan siap dipresentasikan [2]. (Gunakan *utility classes* dari Tailwind CSS untuk memformat *output* ini).

### 3.4. Saved Pages (Manajemen Halaman Penjualan)
Sistem riwayat (*history*) yang menyimpan semua *sales page* yang pernah dibuat oleh pengguna ke dalam *database* [2].
*   **Fungsionalitas:** Pengguna dapat melihat daftar halaman, mengedit atau me-*generate* ulang halaman tersebut, serta menghapus halaman dari riwayat [2].

### 3.5. Live Preview (Pratinjau Langsung)
Menampilkan hasil halaman penjualan dalam mode pratinjau (*preview mode*) [5].
*   **Tampilan:** Harus menyerupai tata letak *landing page* sungguhan [5]. Integrasi Tailwind CSS sangat penting di bagian ini untuk memastikan desain *preview* terlihat profesional dan responsif di berbagai ukuran layar [4].

## 4. Fitur Tambahan Opsional (Bonus Features)
Sebagai nilai tambah dalam pengembangan, fitur-fitur berikut dapat diimplementasikan [5]:
*   **Ekspor HTML Mandiri:** Kemampuan bagi pengguna untuk mengunduh *sales page* tersebut sebagai *file* HTML terpisah (*standalone*).
*   **Variasi Templat Desain:** Menyediakan beberapa pilihan tema/gaya visual berbasis Tailwind CSS yang dapat dipilih oleh pengguna.
*   **Regenerasi Spesifik:** Kemampuan untuk me-*generate* ulang hanya pada bagian tertentu (misalnya, hanya meminta AI membuat ulang bagian *headline* atau tombol CTA saja).

## 5. Panduan UI/UX
*   **Fokus Desain:** Pengembangan harus berfokus pada kualitas UI/UX, tata letak yang responsif, serta interaksi pengguna yang intuitif [4].
*   **Styling:** Penggunaan Tailwind CSS harus dimaksimalkan untuk memberikan indikator visual yang jelas (misalnya saat *loading state* menunggu respon AI dari API, pesan *error*, dan struktur *dashboard* pengguna).
