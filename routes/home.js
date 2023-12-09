const express = require('express');
const router = express.Router();
const db = require('../db');

const dataIkan = {
  lele: {
    id: 1,
    caraBudidaya: {
      id: 1,
      pemilihanKolam: 'Kolam lele',
      pemilihanBenih: 'Benih lele',
      pemeliharaan: 'Pemeliharaan lele',
      panen: 'Panen lele'
    },
    rekomendasiPakan: 'Rekomendasi Pakan lele',
    penyakit: 'Penyakit lele'
  },
  mujair: {
    id: 2,
    caraBudidaya: {
      id: 2,
      pemilihanKolam: 'Kolam mujair',
      pemilihanBenih: 'Benih mujair',
      pemeliharaan: 'Pemeliharaan mujair',
      panen: 'Panen mujair'
    },
    rekomendasiPakan: 'Rekomendasi Pakan mujair',
    penyakit: 'Penyakit mujair'
  },
  patin: {
    id: 3,
    caraBudidaya: {
      id: 3,
      pemilihanKolam: 'Kolam patin',
      pemilihanBenih: 'Benih patin',
      pemeliharaan: 'Pemeliharaan patin',
      panen: 'Panen patin'
    },
    rekomendasiPakan: 'Rekomendasi Pakan patin',
    penyakit: 'Penyakit patin'
  },
  gurame: {
    id: 4,
    caraBudidaya: {
      id: 4,
      pemilihanKolam: 'Kolam gurame',
      pemilihanBenih: 'Benih gurame',
      pemeliharaan: 'Pemeliharaan gurame',
      panen: 'Panen gurame'
    },
    rekomendasiPakan: 'Rekomendasi Pakan gurame',
    penyakit: 'Penyakit gurame'
  }
};

// Endpoint untuk menu ikan
router.get('/ikan', (req, res) => {
  const menuIkan = Object.keys(dataIkan).map((ikan) => {
    return { id: dataIkan[ikan].id, nama: ikan };
  });
  res.json(menuIkan);
});

// Endpoint untuk cara budidaya, rekomendasi pakan, dan penyakit tiap ikan
router.get('/ikan/:nama', (req, res) => {
  const ikan = req.params.nama;
  res.json(dataIkan[ikan]);
});

// Endpoint untuk submenu cara budidaya ikan
router.get('/ikan/:nama/cara-budidaya', (req, res) => {
  const ikan = req.params.nama;
  res.json(dataIkan[ikan].caraBudidaya);
});

// Endpoint untuk submenu pemilihan kolam ikan
router.get('/ikan/:nama/cara-budidaya/pemilihan-kolam', (req, res) => {
  const ikan = req.params.nama;
  res.json({ pemilihanKolam: dataIkan[ikan].caraBudidaya.pemilihanKolam });
});

// Endpoint untuk submenu pemilihan benih ikan
router.get('/ikan/:nama/cara-budidaya/pemilihan-benih', (req, res) => {
  const ikan = req.params.nama;
  res.json({ pemilihanBenih: dataIkan[ikan].caraBudidaya.pemilihanBenih });
});

// Endpoint untuk submenu pemeliharaan ikan
router.get('/ikan/:nama/cara-budidaya/pemeliharaan', (req, res) => {
  const ikan = req.params.nama;
  res.json({ pemeliharaan: dataIkan[ikan].caraBudidaya.pemeliharaan });
});

// Endpoint untuk submenu panen ikan
router.get('/ikan/:nama/cara-budidaya/panen', (req, res) => {
  const ikan = req.params.nama;
  res.json({ panen: dataIkan[ikan].caraBudidaya.panen });
});

// Endpoint untuk submenu rekomendasi pakan ikan
router.get('/ikan/:nama/rekomendasi-pakan', (req, res) => {
  const ikan = req.params.nama;
  res.json({ rekomendasiPakan: dataIkan[ikan].rekomendasiPakan });
});

// Endpoint untuk submenu penyakit ikan
router.get('/ikan/:nama/penyakit', (req, res) => {
  const ikan = req.params.nama;
  res.json({ penyakit: dataIkan[ikan].penyakit });
});

  // Route: POST /api/home/upload-image
router.post('/upload-image', (req, res) => {
    // Proses pengunggahan foto untuk analisis
    // Hasil analisis dari foto yang diunggah
    const analysisResult = {
      jenisIkan: 'ikan nila', 
      kondisi: 'sehat', 
      saranPengobatan: 'Tidak ada masalah' 
    };
  
    res.status(200).json(analysisResult);
  });
  
  // Route: POST /api/home/analyze-image
  router.post('/analyze-image', (req, res) => {
    // Proses analisis foto yang diambil dari kamera  
    // Hasil analisis dari foto yang dianalisis
    const analysisResult = {
      jenisIkan: 'ikan mujaer', 
      kondisi: 'bercak putih', 
      saranPengobatan: 'Menggunakan obat tertentu' 
    };
  
    res.status(200).json(analysisResult);
  });

  

module.exports = router;