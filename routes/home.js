const express = require('express');
const router = express.Router();
const db = require('../db');

const dataIkan = {
  lele: {
    id: 1,
    caraBudidaya: {
      id: 1,
      pemilihanKolam: 'https://kolamterpal.net/7-jenis-kolam-ikan-lele/',
      pemilihanBenih: 'https://kolamterpal.net/7-jenis-kolam-ikan-lele/',
      pemeliharaan: 'https://kolamterpal.net/7-jenis-kolam-ikan-lele/',
      panen: 'https://kolamterpal.net/7-jenis-kolam-ikan-lele/'
    },
    rekomendasiPakan: 'https://kolamterpal.net/7-jenis-kolam-ikan-lele/',
    penyakit: 'https://kolamterpal.net/7-jenis-kolam-ikan-lele/'
  },
  mujair: {
    id: 2,
    caraBudidaya: {
      id: 2,
      pemilihanKolam: 'link kolam mujair',
      pemilihanBenih: 'link benih mujair',
      pemeliharaan: 'link pemeliharaan mujair',
      panen: 'link panen mujair'
    },
    rekomendasiPakan: 'link rekomendasi pakan mujair',
    penyakit: 'link penyakit mujair'
  },
  patin: {
    id: 3,
    caraBudidaya: {
      id: 3,
      pemilihanKolam: 'link kolam patin',
      pemilihanBenih: 'link benih patin',
      pemeliharaan: 'link pemeliharaan patin',
      panen: 'link panen patin'
    },
    rekomendasiPakan: 'link rekomendasi pakan patin',
    penyakit: 'link penyakit patin'
  },
  gurame: {
    id: 4,
    caraBudidaya: {
      id: 4,
      pemilihanKolam: 'link kolam gurame',
      pemilihanBenih: 'link benih gurame',
      pemeliharaan: 'link pemeliharaan gurame',
      panen: 'link panen gurame'
    },
    rekomendasiPakan: 'link rekomendasi pakan gurame',
    penyakit: 'link penyakit gurame'
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
  const { nama } = req.params;
  const kolamLink = dataIkan[nama].caraBudidaya.pemilihanKolam;
  
  res.redirect(kolamLink); 
});

// Endpoint untuk submenu pemilihan benih ikan
router.get('/ikan/:nama/cara-budidaya/pemilihan-benih', (req, res) => {
  const { nama } = req.params;
  const benihLink = dataIkan[nama].caraBudidaya.pemilihanBenih;
  
  res.redirect(benihLink); 
});

// Endpoint untuk submenu pemeliharaan ikan
router.get('/ikan/:nama/cara-budidaya/pemeliharaan', (req, res) => {
  const { nama } = req.params;
  const pemeliharaanLink = dataIkan[nama].caraBudidaya.pemeliharaan;
  
  res.redirect(pemeliharaanLink); 
});

// Endpoint untuk submenu panen ikan
router.get('/ikan/:nama/cara-budidaya/panen', (req, res) => {
  const { nama } = req.params;
  const panenLink = dataIkan[nama].caraBudidaya.panen;
  
  res.redirect(panenLink); 
});

// Endpoint untuk submenu rekomendasi pakan ikan
router.get('/ikan/:nama/rekomendasi-pakan', (req, res) => {
  const { nama } = req.params;
  const pakanLink = dataIkan[nama].rekomendasiPakan;
  
  res.redirect(pakanLink); 
});

// Endpoint untuk submenu penyakit ikan
router.get('/ikan/:nama/penyakit', (req, res) => {
  const { nama } = req.params;
  const penyakitLink = dataIkan[nama].penyakit;
  
  res.redirect(penyakitLink); 
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