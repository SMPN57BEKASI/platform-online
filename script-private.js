/* =========================================
   1. DATA PENILAIAN MATA PELAJARAN
   ========================================= */
const penilaianLinks = [
    {
        title: "Kelas 7",
        description: "Penilaian Mata Pelajaran Kelas 7.",
        icon: "🧮",
        url: "https://drive.google.com/drive/folders/1miTPIFMlieeZSvbOhbcngBG8aRSfmMoM?usp=sharing"
    },
    {
        title: "Kelas 8",
        description: "Penilaian Mata Pelajaran Kelas 8.",
        icon: "💻",
        url: "https://drive.google.com/drive/folders/1h873Bn6biQnZ4_vuc8TeZChGtEknEQ0B?usp=sharing"
    },
    {
        title: "Kelas 9",
        description: "Penilaian Mata Pelajaran Kelas 9.",
        icon: "📋",
        url: "https://drive.google.com/drive/folders/1vaAOuWmVCf2S8Pd2qkXHKDFtNOCwOkv6?usp=sharing"
    }
];

/* =========================================
   2. DATA PERKEMBANGAN SISWA
   ========================================= */
const perkembanganLinks = [
    {
        title: "BK Kelas 7",
        description: "Penilaian BK kelas 7.",
        icon: "👀",
        url: ""
    },
    {
        title: "BK Kelas 8",
        description: "Penilaian BK kelas 8",
        icon: "📒",
        url: ""
    },
    {
        title: "BK Kelas 9",
        description: "Penilaian BK Kelas 9.",
        icon: "📈",
        url: ""
    }
];

/* =========================================
   3. DATA LAPORAN HASIL BELAJAR
   ========================================= */
const laporanLinks = [
    {
        title: "Rapor Kelas 7",
        description: "Link untuk nilai rapor siswa kelas 7.",
        icon: "📑",
        url: "https://drive.google.com/drive/folders/1Jyz8zmwsb_TFhkHuaC3HDo5grscBT6_n?usp=sharing"
    },
    {
        title: "Rapor Kelas 8",
        description: "Link untuk nilai rapor siswa kelas 8.",
        icon: "📊",
        url: "https://drive.google.com/drive/folders/1fQx6h1o9f93UUt2MiIH4OqPuasbp0-7a?usp=sharing"
    },
    {
        title: "Rapor Kelas 9",
        description: "Link untuk nilai rapor siswa kelas 9.",
        icon: "🖨️",
        url: "https://drive.google.com/drive/folders/1c6aMp7uWVPgZVjy30CipcDcWIxXCTvf1?usp=sharing"
    }
];

/* =========================================
   4. DATA SUMATIF
   ========================================= */
const sumatifLinks = [
    {
        title: "Sumatif Tengah Semester",
        description: "Semester Ganjil dan Genap.",
        icon: "🎯",
        url: ""
    },
    {
        title: "Sumatif Akhir Semester",
        description: "Semester Ganjil.",
        icon: "📝",
        url: ""
    },
    {
        title: "Sumatif Akhir Tahun",
        description: "Semester Genap",
        icon: "✅",
        url: ""
    },
     {
        title: "Asesmen Sumatif Akhir Jenjang",
        description: "ASAJ Kelas 9.",
        icon: "📝",
        url: ""
    },
];

/* =========================================
   FUNGSI RENDER KE HTML
   ========================================= */

// Fungsi pembantu untuk membuat cetakan HTML (Card)
function createCard(data, borderColor, bgColor, textColor) {
    return `
        <div class="drive-card" style="border-top: 4px solid ${borderColor};">
            <div class="card-header">
                <div class="card-icon">${data.icon}</div>
                <div>
                    <h3 class="card-title">${data.title}</h3>
                </div>
            </div>
            <p class="card-desc">${data.description}</p>
            <a href="${data.url}" target="_blank" rel="noopener noreferrer" class="btn-drive" style="background-color: ${bgColor}; color: ${textColor};">
                Buka Dokumen <span>↗</span>
            </a>
        </div>
    `;
}

// 1. Render Penilaian
const penilaianGrid = document.getElementById('penilaianGrid');
if (penilaianGrid) {
    penilaianGrid.innerHTML = penilaianLinks.map(data => 
        createCard(data, '#3b82f6', '#eff6ff', '#1d4ed8') // Tema Biru
    ).join('');
}

// 2. Render Perkembangan Siswa
const perkembanganGrid = document.getElementById('perkembanganGrid');
if (perkembanganGrid) {
    perkembanganGrid.innerHTML = perkembanganLinks.map(data => 
        createCard(data, '#10b981', '#ecfdf5', '#065f46') // Tema Hijau
    ).join('');
}

// 3. Render Laporan Hasil Belajar
const laporanGrid = document.getElementById('laporanGrid');
if (laporanGrid) {
    laporanGrid.innerHTML = laporanLinks.map(data => 
        createCard(data, '#8b5cf6', '#f5f3ff', '#5b21b6') // Tema Ungu
    ).join('');
}

// 4. Render Sumatif
const sumatifGrid = document.getElementById('sumatifGrid');
if (sumatifGrid) {
    sumatifGrid.innerHTML = sumatifLinks.map(data => 
        createCard(data, '#f59e0b', '#fffbeb', '#b45309') // Tema Oranye/Emas
    ).join('');
}
