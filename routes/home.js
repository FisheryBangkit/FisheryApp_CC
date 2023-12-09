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

// Route: GET /api/home/fish-cultivation-lele
router.get('/fish-cultivation-lele', (req, res) => {
  res.status(200).json(fishCultivationLele);
});
  
// Route: GET /api/home/fish-cultivation-nila/cara budi daya
router.get('/fish-cultivation-nila/cara-budi-daya', (req, res) => {
  res.status(200).json({ tips: fishCultivationNila.caraBudiDaya });
});

// Route: GET /api/home/fish-cultivation-nila/cara-budi-daya/pemilihan-kolam
router.get('/fish-cultivation-nila/cara-budi-daya/pemilihan-kolam', (req, res) => {
  const externalURL = 'https://kolamnila.com/cara-budi-daya-nila';
  res.redirect('');
});

// Route: GET /api/home/fish-cultivation-nila/cara-budi-daya/pemilihan-benih
router.get('/fish-cultivation-nila/cara-budi-daya/pemilihan-benih', (req, res) => {
  const externalURL = 'https://benihnila.com/cara-budi-daya-nila';
  res.redirect('');
});

// Route: GET /api/home/fish-cultivation-nila/cara-budi-daya/pemiliharaan
router.get('/fish-cultivation-nila/cara-budi-daya/pemiliharaan', (req, res) => {
  const externalURL = 'https://pemeliharaan nila.com/cara-budi-daya-nila';
  res.redirect('');
});

// Route: GET /api/home/fish-cultivation-nila/cara-budi-daya/panen
router.get('/fish-cultivation-nila/cara-budi-daya/panen', (req, res) => {
  const externalURL = 'https://panennila.com/cara-budi-daya-nila';
  res.redirect('');
 });
  
// Route: GET /api/home/fish-cultivation-nila/rekomendasi-pakan
router.get('/fish-cultivation-nila/rekomendasi-pakan', (req, res) => {
  res.status(200).json({ tips: fishCultivationNila.rekomendasiPakan });
});
  
// Route: GET /api/home/fish-cultivation-nila/penyakit
router.get('/fish-cultivation-nila/penyakit', (req, res) => {
  res.status(200).json({ tips: fishCultivationNila.penyakit });
});
  
// Route: GET /api/home/fish-cultivation-mujaer/cara-budi-daya
router.get('/fish-cultivation-mujaer/cara-budi-daya', (req, res) => {
  res.status(200).json({ tips: fishCultivationMujaer.caraBudiDaya });
});

// Route: GET /api/home/fish-cultivation-mujaer/cara-budi-daya/pemilihan-kolam
router.get('/fish-cultivation-mujaer/cara-budi-daya/pemilihan-kolam', (req, res) => {
  const externalURL = 'https://example.com/cara-budi-daya-mujaer';
  res.redirect('');
});

// Route: GET /api/home/fish-cultivation-mujaer/cara-budi-daya/pemilihan-benih
router.get('/fish-cultivation-mujaer/cara-budi-daya/pemilihan-benih', (req, res) => {
  const externalURL = 'https://example.com/cara-budi-daya-mujaer';
  res.redirect('');
});

// Route: GET /api/home/fish-cultivation-mujaer/cara-budi-daya/pemiliharaan
router.get('/fish-cultivation-mujaer/cara-budi-daya/pemiliharaan', (req, res) => {
  const externalURL = 'https://example.com/cara-budi-daya-mujaer';
  res.redirect('');
});

// Route: GET /api/home/fish-cultivation-mujaer/cara-budi-daya/panen
router.get('/fish-cultivation-mujaer/cara-budi-daya/panen', (req, res) => {
  const externalURL = 'https://example.com/cara-budi-daya-mujaer';
  res.redirect('');
});

// Route: GET /api/home/fish-cultivation-mujaer/rekomendasi-pakan
router.get('/fish-cultivation-mujaer/rekomendasi-pakan', (req, res) => {
  res.status(200).json({ tips: fishCultivationMujaer.rekomendasiPakan });
});
  
// Route: GET /api/home/fish-cultivation-mujaer/penyakit
router.get('/fish-cultivation-mujaer/penyakit', (req, res) => {
  res.status(200).json({ tips: fishCultivationMujaer.penyakit });
});

// Route: GET /api/home/fish-cultivation-lele/cara-budi-daya
router.get('/fish-cultivation-lele/cara-budi-daya', (req, res) => {
  res.status(200).json({ tips: fishCultivationLele.caraBudiDaya });
});

// Route: GET /api/home/fish-cultivation-lele/cara-budi-daya/pemilihan-kolam
router.get('/fish-cultivation-lele/cara-budi-daya/pemilihan-kolam', (req, res) => {
  const externalURL = 'https://example.com/cara-budi-daya-lele';
  res.redirect('');
});

// Route: GET /api/home/fish-cultivation-lele/cara-budi-daya/pemilihan-benih
router.get('/fish-cultivation-lele/cara-budi-daya/pemilihan-benih', (req, res) => {
  const externalURL = 'https://example.com/cara-budi-daya-lele';
  res.redirect('');
});

// Route: GET /api/home/fish-cultivation-lele/cara-budi-daya/pemiliharaan
router.get('/fish-cultivation-lele/cara-budi-daya/pemiliharaan', (req, res) => {
  const externalURL = 'https://example.com/cara-budi-daya-lele';
  res.redirect('');
});

// Route: GET /api/home/fish-cultivation-lele/cara-budi-daya/panen
router.get('/fish-cultivation-lele/cara-budi-daya/panen', (req, res) => {
  const externalURL = 'https://example.com/cara-budi-daya-lele';
  res.redirect('');
});

// Route: GET /api/home/fish-cultivation-lele/rekomendasi-pakan
router.get('/fish-cultivation-lele/rekomendasi-pakan', (req, res) => {
  res.status(200).json({ tips: fishCultivationLele.rekomendasiPakan });
});
  
// Route: GET /api/home/fish-cultivation-lele/penyakit
router.get('/fish-cultivation-lele/penyakit', (req, res) => {
  res.status(200).json({ tips: fishCultivationLele.penyakit });
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
