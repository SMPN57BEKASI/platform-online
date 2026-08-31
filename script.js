/* =========================================
   PENGATURAN DATA LINK GOOGLE DRIVE
   =========================================
   Cara menambahkan/mengedit data:
   1. Copy salah satu block { ... }, paste di bawahnya.
   2. Ganti category (pilih: Perangkat Pembelajaran, Administrasi, Dokumen Sekolah, Penilaian)
   3. Ganti title (Nama dokumen/folder)
   4. Ganti description (Penjelasan singkat)
   5. Ganti icon (Gunakan emoji yang sesuai)
   6. Ganti url (Paste link Google Drive yang asli)
========================================= */

const driveLinks = [
    {
        category: "Perangkat Pembelajaran",
        title: "Modul Ajar Matematika",
        description: "Kumpulan modul ajar Matematika kelas 7, 8, dan 9 Kurikulum Merdeka.",
        icon: "📐",
        url: ""
    },
    {
        category: "Perangkat Pembelajaran",
        title: "Modul Ajar Bahasa Indonesia",
        description: "Kumpulan modul ajar Bahasa Indonesia kelas 7, 8, dan 9 Kurikulum Merdeka.",
        icon: "🖋️",
        url: ""
    },
    {
        category: "Perangkat Pembelajaran",
        title: "Modul Ajar Bahasa Sunda",
        description: "Kumpulan modul ajar Bahasa Sunda kelas 7, 8, dan 9 Kurikulum Merdeka.",
        icon: "🎭",
        url: ""
    },
    {
        category: "Perangkat Pembelajaran",
        title: "Modul Ajar Bahasa Inggris",
        description: "Kumpulan modul ajar Bahasa Inggris kelas 7, 8, dan 9 Kurikulum Merdeka.",
        icon: "🔡",
        url: ""
    },
    {
        category: "Perangkat Pembelajaran",
        title: "Modul Ajar IPA",
        description: "Kumpulan modul ajar IPA kelas 7, 8, dan 9 Kurikulum Merdeka.",
        icon: "🧬",
        url: ""
    }, 
    {
        category: "Perangkat Pembelajaran",
        title: "Modul Ajar IPS",
        description: "Kumpulan modul ajar IPS kelas 7, 8, dan 9 Kurikulum Merdeka.",
        icon: "🗺️",
        url: ""
    },
    {
        category: "Perangkat Pembelajaran",
        title: "Modul Ajar Informatika",
        description: "Modul ajar Informatika untuk kelas menengah pertama.",
        icon: "💻",
        url: ""
    },
    {
        category: "Perangkat Pembelajaran",
        title: "Modul Ajar PABP",
        description: "Kumpulan modul ajar PABP kelas 7, 8, dan 9 Kurikulum Merdeka.",
        icon: "👳🏻‍♂️",
        url: ""
    },
    {
        category: "Perangkat Pembelajaran",
        title: "Modul Ajar Pendidikan Pancasila",
        description: "Kumpulan modul ajar Pendidikan Pancasila kelas 7, 8, dan 9 Kurikulum Merdeka.",
        icon: "⚖️",
        url: ""
    },
    {
        category: "Perangkat Pembelajaran",
        title: "Modul Ajar Seni Budaya",
        description: "Kumpulan modul ajar Seni Budaya kelas 7, 8, dan 9 Kurikulum Merdeka.",
        icon: "🎨",
        url: ""
    },
    {
        category: "Perangkat Pembelajaran",
        title: "Modul Ajar PJOK",
        description: "Kumpulan modul ajar PJOK kelas 7, 8, dan 9 Kurikulum Merdeka.",
        icon: "⚽",
        url: ""
    },
    {
        category: "Administrasi",
        title: "Jurnal Mengajar 2026",
        description: "Folder jurnal harian dan catatan kegiatan mengajar guru.",
        icon: "📒",
        url: "https://drive.google.com/"
    },
    {
        category: "Dokumen Sekolah",
        title: "Program Kerja Sekolah",
        description: "Dokumen rancangan kegiatan dan program kerja tahunan.",
        icon: "🏢",
        url: ""
    },
      {
        category: "Dokumen Sekolah",
        title: "Program Kerja OSIS",
        description: "Dokumen rancangan kegiatan dan program kerja tahunan.",
        icon: "🏢",
        url: ""
    },
    {
        category: "Penilaian",
        title: "Kisi-kisi & Soal Ujian",
        description: "Kumpulan soal Asesmen Sumatif Tengah dan Akhir Semester.",
        icon: "📝",
        url: ""
    },
      {
        category: "Dokumen Sekolah",
        title: "Karya Tulis Guru",
        description: "Kumpulan karya tulis Guru SMPN 57 Bekasi",
        icon: "📝",
        url: ""
    },
    {
        category: "Dokumen Sekolah",
        title: "Kalender Akademik",
        description: "Jadwal kegiatan belajar mengajar dan hari libur sekolah.",
        icon: "🗓️",
        url: ""
    }
];

/*========================================= */

// DOM Elements
const driveGrid = document.getElementById('driveGrid');
const searchInput = document.getElementById('searchInput');
const filterBtns = document.querySelectorAll('.filter-btn');
const emptyState = document.getElementById('emptyState');

// State
let currentCategory = 'Semua';
let searchQuery = '';

// Fungsi untuk merender HTML Card
function createCardHTML(data) {
    return `
        <div class="drive-card">
            <div class="card-header">
                <div class="card-icon">${data.icon}</div>
                <div>
                    <span class="card-category">${data.category}</span>
                    <h3 class="card-title">${data.title}</h3>
                </div>
            </div>
            <p class="card-desc">${data.description}</p>
            <a href="${data.url}" target="_blank" rel="noopener noreferrer" class="btn-drive">
                Buka Drive <span>↗</span>
            </a>
        </div>
    `;
}

// Fungsi utama untuk render dan filter
function renderCards() {
    // Filter data berdasarkan kategori dan pencarian
    const filteredData = driveLinks.filter(item => {
        const matchCategory = currentCategory === 'Semua' || item.category === currentCategory;
        const searchLower = searchQuery.toLowerCase();
        const matchSearch = item.title.toLowerCase().includes(searchLower) || 
                            item.description.toLowerCase().includes(searchLower) ||
                            item.category.toLowerCase().includes(searchLower);
        
        return matchCategory && matchSearch;
    });

    // Render ke DOM
    if (filteredData.length > 0) {
        driveGrid.style.display = 'grid';
        emptyState.style.display = 'none';
        driveGrid.innerHTML = filteredData.map(data => createCardHTML(data)).join('');
    } else {
        driveGrid.style.display = 'none';
        emptyState.style.display = 'block';
    }
}

// Event Listener untuk Search
searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    renderCards();
});

// Event Listener untuk Filter Kategori
filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        // Hapus class active dari semua tombol
        filterBtns.forEach(b => b.classList.remove('active'));
        // Tambahkan class active ke tombol yang diklik
        e.target.classList.add('active');
        
        currentCategory = e.target.getAttribute('data-filter');
        renderCards();
    });
});

/* =========================================
   FITUR UX (Navigasi, Scroll, dll)
   ========================================= */

// Sticky Navbar
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle
const mobileToggle = document.getElementById('mobile-toggle');
const navLinks = document.getElementById('nav-links');

mobileToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Tutup menu mobile ketika link diklik
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Back to Top Button
const backToTopBtn = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Inisialisasi awal
renderCards();

// Fitur Private Ruang Guru
const btnRuangGuru = document.getElementById('nav-ruang-guru');

if (btnRuangGuru) {
    btnRuangGuru.addEventListener('click', (e) => {
        e.preventDefault();
        
        const password = prompt("Masukkan Password Khusus Guru");

        if (password === "RGO57") {
            window.location.href = "guru-private-57.html";

        } else if (password !== null) {
            alert("Password Salah!");

        } 
    });
}
