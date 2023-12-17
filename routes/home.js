const express = require('express');
const router = express.Router();
const db = require('../db');

const dataIkan = {
  lele: {
    "id" : 1,
    imageUrl: 'https://storage.googleapis.com/gambar-ikan-menu/lele.png',
    caraBudidaya : {
        "id" : 1,
        pemilihanKolam : [
            {
                "title" : "Kolam Terpal",
                "gambar" : "https://storage.googleapis.com/gambar-kolam/kolam/lele/Kolam-terpal.png",
                "konten" : "Kolam terpal merupakan kolam yang dapat dibangun di atas lahan yang sempit dengan lapisan terpal di bagian dasar dan dindingnya. Bentuknya bisa berupa persegi atau bulat dengan kerangka dari bambu, besi, atau kayu. Kolam terpal merupakan pilihan tepat bagi anda yang ingin memulai budidaya Ikan Lele dengan budget yang seminimal mungkin. Saat akan membeli terpal, pilihlah jenis terpal yang memiliki kerapatan tinggi agar tahan lama. Jika kolam sudah jadi, cuci kolam terpal menggunakan sabun terlebih dulu guna menghilangkan sisa – sisa bahan kimia dari konstruksi kolam seperti lem dan lain – lain. Bilas kolam hingga bersih dan keringkan selama satu hari. Setelah memastikan kebersihan kolam, anda bisa mengisi kolam terpal dengan air secukupnya (idealnya 20 – 30 cm). Diamkan kolam yang sudah terisi air selama 4 – 7 hari untuk memberikan waktu bagi pembentukan fitoplankton dan lumut di dalam kolam. Jika jumlah lumut dan fitoplankton dirasa sudah cukup, anda bisa menambahkan kembali air setinggi kurang lebih 80 cm. Penguapan air kolam biasanya menimbulkan bau, karenanya jangan lupa untuk menaruh berbagai jenis dedaunan seperti daun singkong, daun pepaya dan jenis dedaunan hijau lainnya agar kolam berwarna hijau. Warna hijau kolam akanmencegah bau yang ditimbulkan dari proses penguapan air. Pastikan untuk selalu mengganti air kolam minimal satu bulan sekali."
            },
            {
                "title" : "Kolam Beton",
                "gambar" : "https://storage.googleapis.com/gambar-kolam/kolam/lele/Kolam-semen.png",
                "konten" : "Kolam semen atau kolam beton adalah kolam yang 90% sisi – sisinya dilapisi semen atau beton. Bagian dasar kolam juga dilapisi semen agar tidak mudah bocor dan rusak. Diantara keunggulan kolamsemen adalah struktrunya yang kokoh sehingga bisa lebih tahan lama dibandingkan kolam terpal. Suhu pada air di dalam kolam semen juga lebih stabil sehingga kemungkinan ikan stress atau terserang penyakit lebih kecil. Sifat kolam semen yang lebih tahan lama membuat anda tidak perlu pusing memikirkan biaya perbaikan yang biasa terjadi pada kolam lainnya. Namun kolam semen juga memiliki kekurangan, yakni biaya pembuatan yang relatif besar, mudah dihinggapi lumut, dan bau semen yang harus disterilkan terlebih dulu agar ikan tidak stress atau mati."
            },
            {
                "title" : "Kolam Tanah",
                "gambar" : "https://storage.googleapis.com/gambar-kolam/kolam/lele/kolam-tanah.png",
                "konten" : "Jika kolam semen dilapisi oleh semen, maka sesuai namanya, kolam tanah didominasi oleh tanah. Kolam mini juga dikenal dengan istilah Balong, Blumbang, atau Empang. Keunggulan kolam tanah adalah kaya akan organisme seperti cacing tanah yang bermanfaat sebagai pakan Lele. Selain itu penggantian air kolam dapat jarang dilakukan atau bahkan air dipertahankan hingga masa panen tiba. Itu semua karena tanah merupakan unsur alami yang aman untuk Ikan Lele. Sayangnya, Anda tentu harus memiliki bidang tanah yang cukup luas jika ingin melakukan budidaya Ikan Lele dengan menggunakan kolam tanah. Selain itu kolam tanah juga rentan terhadap serangan hama dan penyakit yang tentunya berbahaya bagi kesehatan Ikan Lele. Yang paling berisiko, jika air terlalu berlumpur dapat berimbas pada kualitas Ikan Lele sehingga menurunkan harga jual ikan."
            },
            {
                "title" : "Keramba",
                "gambar" : "https://storage.googleapis.com/gambar-kolam/kolam/lele/Keramba.jpeg",
                "konten" : "Kolam keramba (jaring apung) adalah jenis kolam yang memanfaatkan jaring sebagai penopang di atas kolam. Kolam ini biasanya dibuat di pinggir danau, waduk atau sungai. Nama lainnya adalah kolam tambak dan penerapannya sedikit banyak mirip dengan penerapan pada kolam tanah. Keunggulan kolam keramba (jaring apung) ini adalah lahan pembudidayaan yang luas dan kesempatan ikan untuk dapat hidup di habitat alaminya sehingga tidak mudah terserang stress atau penyakit. Anda juga dapat lebih muda mengontrol ikan dengan jenis kolam ini. Yang harus diperhatikan dalam budidaya ikan lele dengan kolam keramba adalah jarring yang bisa saja bolong atau putus dan menyebabkan ikan lepas dan berkurang. Cuaca juga dapat memperburuk keadaan jika terjadi hujan dan banjir yang menyebabkan kolam rusak dan ikan hanyut ke sungai."
            },
            {
                "title" : "Kolam Drum",
                "gambar" : "https://storage.googleapis.com/gambar-kolam/kolam/lele/kolam-drum.jpeg",
                "konten" : "Sebagian besar kolam drum terbuat dari plastik dan besi sehingga awet dan tahan lama. Kolam ini banyak dipilih karena mudah di tata dan memiliki kualitas yang lebih bagus dari kolam tanah dan kolam terpal. Dengan kolam drum, ikan jadi lebih terlindungi dari hama penyakit, air dan suhu juga dapat lebih mudah dikontrol. Namun biaya yang dibutuhkan untuk konstruksi kolam drum biasanya lebih mahal dengan daya tampung ikan yang sedikit. Pergantian air kolam juga harus sering dilakukan agar ikan tidak gampang stress."
            },
            {
                "title" : "Kolam Fiber",
                "gambar" : "https://storage.googleapis.com/gambar-kolam/kolam/lele/kolam-fiber.jpeg",
                "konten" : "Desain yang kekinian dan mudah digunakan membuat kolam fiber banyak diminati. Sesuai bahannya, kolam mini bersifat tahan lama dan mudah dalam perawatan. Namun sayangnya harga kolam ini masih dinilai terlalu tinggi bagi sebagian kalangan. Selain itu jumlah ikan yang dapat ditampung dalam satu kolam fiber juga sangat terbatas dan memungkinkan pergantian air yang harus sering dilakukan agar ikan tidak mudah stress."
            },
            {
                "title" : "Kolam Plastik",
                "gambar" : "https://storage.googleapis.com/gambar-kolam/kolam/lele/kolam-plastik.jpeg",
                "konten" : "Pada dasarnya konsep kolam plastik sedikit banyak mirip dengan kolam terpal. Hanya saja kolam plastik memerlukan perhatian ekstra karena sifatnya yang gampang sobek dan bocor. Anda bisa mengatasi masalah tersebut dengan melapisi kolam plastik dengan plastik bekas, karpet bekas ataupun karung bekas."
            },
        ],
        pemilihanBenih :
            {
                "title" : "Pemilihan Benih Lele",
                "gambar" : "https://storage.googleapis.com/gambar-kolam/benih/benih-lele.jpeg",
                "konten" : [
                    {
                        "step" : 1,
                        "judul" : "Perhatikan tempat penjualan bibit",
                        "deskripsi" : "Belilah bibit Ikan Lele hanya di tempat penjualan bibit ikan yang resmi dan sudah tersertifikasi. Selain menunjukkan profesionalitas, tempat penjualan bibit ikan lele yang sudah tersertifikasi juga menjamin kualitas dari bibit yang ditawarkan."
                    },
                    {
                        "step" : 2,
                        "judul" : "Perhatikan ukuran bibit",
                        "deskripsi" : "Pastikan jika ukuran bibit sama rata, artinya tidak ada bibit lele yang lebih besar atau lebih kecil dari yang lainnya. Hal ini dimaksudkan agar tidak ada Lele yang mendominasi tempat dan pakan ketika sudah dimasukkan ke kolam nantinya. Karena jika ada yang mendominasi, bisa dipastikan ikan yang lebih kecil akan sulit berkembang atau bahkan mati. Anda tentu tidak mau hal ini terjadi, bukan?"
                    },
                    {
                        "step" : 3,
                        "judul" : "Perhatikan gerakkan bibit",
                        "deskripsi" : "Bibit Lele yang sehat akan senantiasa bergerak aktif dan berkerumun. Jika anda melihat ada satu atau lebih bibit lele yang cenderung pasif bahkan diam, kemungkinan besar bibit lele tersebut terganggu kesehatannya."
                    },
                    {
                        "step" : 4,
                        "judul" : "Perhatikan warna pada bibit",
                        "deskripsi" : "Bibit ikan Lele dikatakan sebagai bibit unggul jika warnanya cenderung cerah dan terang. Hindari membeli bibit Lele yang berwarna pucat."
                    },
                ]
            },
        
        pemeliharaan : 
            {
                "title" : "Pemeliharaan Lele",
                "gambar" : "https://storage.googleapis.com/gambar-kolam/pemeliharaan/pemeliharaan-lele.jpeg",
                "konten" : [
                    {
                        "step" : 1,
                        "judul" : "Cek dan tambahkan air secara bertahap",
                        "deskripsi" : "Tidak perlu kaget jika Anda melihat air dalam kolam terpal anda alami pengurangan, hal itu wajar karena proses penguapan pada air. Yang perlu anda lakukan adalah mengecek air secara berkala dan menambahkannya ketika terjadi pengurangan. Ketinggian ideal air kolam terpal baik kotak maupun bulat bervariasi terutama pada 3 bulan pertama. Yakni 20 cm pada bulan pertama, 40 cm pada bulan selanjutnya, dan 80 cm ketika telah mencapai bulan ketiga. Pastikan untuk selalu mengecek dan mengatur kedalaman air kolam karena jika tidak diperhatikan ikan Lele Anda bisa mati."
                    },
                    {
                        "step" : 2,
                        "judul" : "Tambahkan dedaunan hijau",
                        "deskripsi" : "Ikan Lele menyukai warna hijau. Warna hijau pada kolam terpal anda pun bisa saja berubah jadi merah ketika ikan Lele telah dewasa. Anda bisa menambahkan dedaunan hijau secukupnya untuk membuat air tetap hijau. Selain untuk menciptakan warna hijau, tumbuhan air seperti enceng gondok, kangkung, atau daun alas juga berguna untuk menyerap racun di dalam kolam sehingga ikan lele anda bebas dari segala penyakit maupun virus."
                    },
                    {
                        "step" : 3,
                        "judul" : "Perhatikan tingkat kejernihan air",
                        "deskripsi" : "Tidak perlu kaget jika Anda melihat air dalam kolam terpal anda alami pengurangan, hal itu wajar karena proses penguapan pada air. Yang perlu anda lakukan adalah mengecek air secara berkala dan menambahkannya ketika terjadi pengurangan. Ketinggian ideal air kolam terpal baik kotak maupun bulat bervariasi terutama pada 3 bulan pertama. Yakni 20 cm pada bulan pertama, 40 cm pada bulan selanjutnya, dan 80 cm ketika telah mencapai bulan ketiga. Pastikan untuk selalu mengecek dan mengatur kedalaman air kolam karena jika tidak diperhatikan ikan Lele Anda bisa mati."
                    },
                    {
                        "step" : 4,
                        "judul" : "Perhatikan Pola Makan Ikan Lele",
                        "deskripsi" : "Sama seperti manusia, ikan Lele juga memiliki pola makan yang perlu dijaga jika ingin ikan anda berkembang dengan baik. Ikan Lele biasanya memiliki jadwal pakan pada jam 7 pagi, jam 5 sore dan jam 10 malam (jika anda agak berat memberikan jam 10 malam, bisa dimajukan beberapa jam sebelumnya). Dulu, banyak orang merasa jijik untuk memakan ikan lele karena Lele dikenal terbiasa memakan kotoran. Tapi tidak dengan saat ini. Ikan Lele telah banyak dibudidayakan dengan pemberian nutrisi alami maupun buatan yang tepat dan sehat sehingga memiliki kandungan gizi yang baik untuk dikonsumsi. Belatung lalat, ikan rucah, fermentasi ampas tahu hingga pelet Ikan Lele dapat Anda berikan untuk memenuhi kebutuhan gizi ikan Anda. Yang jelas Ikan Lele memerlukan minimal 35% lemak, 10-16% karbohidrat dan 15-25% vitamin serta mineral. Jangan memberikan Ikan Lele anda pakan yang berlebihan karena pakan yang tidak termakan dapat mengendap di dasar kolam dan akhirnya menjadi racun yang membahayakan Ikan Lele anda."
                    },
                    {
                        "step" : 5,
                        "judul" : "Perhatikan Kemungkinan adanya hama dan virus penyebab penyakit",
                        "deskripsi" : "Hama pada kolam Ikan Lele biasanya berupa kucing, burung ikan ular, ikan lain, dan sebagainya yang bisa merugikan Anda dengan berkurangnya jumlah ikan saat panen. Begitu juga dengan virus dan kuman penyakit yang bisa menyebabkan kematian pada satu ikan atau lebih. Oleh karenanya menjaga kolam agar terbebas dari hama – hama tersebut adalah hal yang perlu anda lakukan, caranya bisa dengan memberikan penutup pada kolam dan tidak memberikan ikan pakan yang berlebihan. Anda juga dapat mengatasi penyakit dengan menambahkan tumbuhan air pada kolam serta pemberian obat-obatan yang bisa dibeli di toko ikan."
                    },
                ]
            },
        
        panen : [
            {
                "gambar" : "https://storage.googleapis.com/gambar-kolam/panen/panen-lele.jpeg",
                "konten" : "Masa panen adalah masa yang paling ditunggu oleh semua peternak, tidak terkecuali peternak Lele. Namundi saat akan panen Lele ada baiknya Anda berhati – hati agar tidak melakukan kesalahan yang dapat merugikan anda sendiri. Masa panen ikan lele biasanya setiap 3 – 4.5 bulan sekali dengan ukuran layak konsumsi di panjang 20 – 35 cm dan bobot kurang lebih 100 gram. Seringkali anda akan mendapati ukuran Lele yang tidak sama persis ketika dipanen, karenanya diperlukan penyortiran terlebih jika anda ingin mendulang keuntungan yang optimal. Hal lain yang perlu diperhatikan adalah waktu yang digunakan untuk memanen Lele. Hindari waktu siang hari ketika matahari sedang terik karena Ikan Lele yang terlalu lama dihadapkan pada sinar matahari dapat stress dan mengalami penyusutan dalam bobot tubuhnya. Oleh karena itu usahakan tengkulak Anda datang di pagi atau sore hari agar Ikan Lele anda tidak mengalami penyusutan bobot tubuh dan pendapatan anda berkurang."
            },
        ]
    },
    rekomendasiPakan : [
        {
            "title" : "Belatung",
            "gambar" : "https://storage.googleapis.com/gambar-kolam/pakan/lele/belatung.jpeg",
            "konten" : "Maggot atau belatung mempunyai kandungan protein yang tinggi sehingga baik dikonsumsi oleh ikan lele. Kandungan protein belatung mencapai 40%."
        },
        {
            "title" : "Ampas Tahu yang Difermentasi",
            "gambar" : "https://storage.googleapis.com/gambar-kolam/pakan/lele/ampas%20tahu.jpeg",
            "konten" : "Ampas tahu dikenal sebagai pakan ternak. Namun ternyata kandungan proteinnya tinggi sehingga ikan lele cocok dijadikan pakan tersebut. Ampas tahunya encer, jadi bisa diberikan ke ikan lele, harus difermentasi dengan dedak."
        },
        {
            "title" : "Ikan Sampah",
            "gambar" : "https://storage.googleapis.com/gambar-kolam/pakan/lele/ikan%20sampah.jpeg",
            "konten" : "Ikan rucah merupakan limbah ikan berukuran kecil yang tidak dapat dikonsumsi oleh manusia. Biasanya harga ikan rucah cukup murah. Dalam pemberiannya cukup dengan dicincang dan diberikan langsung pada ikan lele, asalkan tidak ada durinya."
        },
        {
            "title" : "Tepung Ikan",
            "gambar" : "https://storage.googleapis.com/gambar-kolam/pakan/lele/tepung%20ikan.jpeg",
            "konten" : "Tepung ikan berasal dari duri atau kepala ikan, bisa digiling halus hingga menjadi tepung. Keuntungan menggunakan tepung ikan sebagai pakan adalah harganya yang murah dan bergizi tinggi sehingga baik untuk metabolisme ikan lele."
        },
        {
            "title" : "Siput",
            "gambar" : "https://storage.googleapis.com/gambar-kolam/pakan/lele/siput.jpeg",
            "konten" : "Bekicot mengandung protein yang cukup tinggi. Sebelum memberikan bekicot sebagai pakan ikan lele, Anda harus memisahkan daging dari cangkang bekicot, kemudian dagingnya dicincang. Selanjutnya, rebus daging bekicot."
        },
        {
            "title" : "Plankton dari Kotoran",
            "gambar" : "https://storage.googleapis.com/gambar-kolam/pakan/lele/kotoran.jpeg",
            "konten" : "Kolam ikan lele keruh. Warnanya yang keruh bukan berarti kolamnya kotor. Pada awal persiapan budidaya ikan lele, air kolam dihijaukan, dengan menambahkan pupuk kandang. Kotoran ternak akan mengubah air kolam yang jernih menjadi hijau karena dipenuhi plankton. Plankton merupakan makhluk kecil yang cocok untuk dijadikan pakan bibit ikan lele."
        },
        {
            "title" : "Cacing",
            "gambar" : "https://storage.googleapis.com/gambar-kolam/pakan/lele/cacing.jpeg",
            "konten" : "Cacing mempunyai kandungan protein kasar berkisar antara 60-72%. Dengan demikian, cacing bisa dimakan ikan lele. Namun pemberian cacing secara berlebihan dapat membuat air kolam cepat kotor sehingga perlu dilakukan pembersihan cacing terlebih dahulu sebelum diberikan pada ikan lele."
        },
        {
            "title" : "Dedak",
            "gambar" : "https://storage.googleapis.com/gambar-kolam/pakan/lele/dedak.jpeg",
            "konten" : "Bekatul memiliki banyak nutrisi penting yang dapat membantu pertumbuhan ikan lele agar cepat besar. Selain itu, harga dedak juga murah dan mudah ditemukan di pasaran."
        },
        {
            "title" : "Eceng gondok",
            "gambar" : "https://storage.googleapis.com/gambar-kolam/pakan/lele/eceng%20gondok.jpeg",
            "konten" : "Kandungan protein pada eceng gondok adalah 13%. Namun perlu diingat bahwa eceng gondok bukanlah makanan utama ikan lele. Anda hanya dapat menggunakannya dalam keadaan darurat."
        },
        {
            "title" : "Daun Singkong",
            "gambar" : "https://storage.googleapis.com/gambar-kolam/pakan/lele/daun%20singkong.jpeg",
            "konten" : "Daun singkong dapat diberikan pada ikan lele secara langsung maupun melalui fermentasi. Pakan jenis ini dapat digunakan sebagai pakan alternatif pada saat darurat."
        },
    ],
        
    penyakit : [
        {
            "title" : "White-Spot",
            "gambar" : "https://storage.googleapis.com/gambar-kolam/penyakit/lele/white%20spot.jpeg",
            "konten" : "Penyakit bintik putih pada ikan lele disebabkan oleh protozoa jenis Ichthyphyhirius multifillis. Untuk menghindarinya, Anda disarankan untuk menjaga kebersihan kolam lele dan memastikan suhu air kolam berada pada suhu 28°C. Sedangkan untuk mengobati ikan yang terjangkit penyakit bercak putih, Anda bisa menaburkan garam ke dalam kolam sebanyak 2-3 kali sehari. Agar tidak menulari ikan lele lain, Anda juga bisa memisahkan ikan yang terjangkit penyakit white spot dari ikan lain dan memperbaiki sistem sanitasi di kolam."
        },
        {
            "title" : "Jamur Air",
            "gambar" : "https://storage.googleapis.com/gambar-kolam/penyakit/lele/jamur%20air.jpeg",
            "konten" : "Biasanya jamur hanya menginfeksi ikan yang sakit atau terluka, bukan ikan yang sehat. Jamur hanya tumbuh pada tubuh ikan yang sedang mengalami penurunan daya tahan tubuh. Bila terinfeksi jamur, akan muncul benang-benang menyerupai kapas pada tubuh ikan, terutama pada bagian yang terdapat luka. Jika terserang jamur, ikan juga akan kehilangan agresivitasnya. Untuk mengobati ikan lele yang terserang jamur, Anda disarankan untuk mengarantina ikan tersebut di kolam yang steril."
        },
        {
            "title" : "Cotton-Wool",
            "gambar" : "https://storage.googleapis.com/gambar-kolam/penyakit/lele/cotton%20wool.jpeg",
            "konten" : "Penyakit ini disebabkan oleh bakteri Flexibacter Columnaris. Penyakit ini akan menyerang insang ikan lele. Jika sudah terjangkit penyakit ini maka akan timbul luka, lapisan putih, dan bercak putih di permukaan tubuh ikan. Ikan lele yang terjangkit penyakit Cotton Wool juga akan bergerak sangat lambat dan terlihat lesu. Penyakit ini muncul akibat pembusukan sisa makanan di dasar kolam dan suhu air yang terlalu tinggi. Untuk mencegahnya, Anda dapat memperbaiki manajemen pemberian pakan dan menjaga suhu air pada 28°C"
        },
        {
            "title" : "Smallpox",
            "gambar" : "https://storage.googleapis.com/gambar-kolam/penyakit/lele/smallpox.jpg",
            "konten" : "Penyakit cacar pada ikan lele umumnya disebabkan oleh buruknya kualitas air. Penyakit cacar biasanya muncul pada tubuh ikan yang hidup di kolam yang airnya kotor dan kurang perawatan. Untuk mencegah dan mengobati ikan lele yang terkena penyakit cacar, Anda disarankan untuk lebih merawat dan meningkatkan kualitas air kolam dengan rutin menggantinya. Penting untuk diingat bahwa cacar adalah penyakit menular. Jadi, jika Anda menemukan ikan lele terjangkit penyakit cacar, pisahkan ikan tersebut dengan ikan lainnya."
        },
        {
            "title" : "Itching",
            "gambar" : "https://storage.googleapis.com/gambar-kolam/penyakit/lele/itching.png",
            "konten" : "Penyakit gatal pada ikan lele disebabkan oleh bakteri Trichodina sp. Gejala yang timbul pada ikan bila terserang penyakit ini adalah geraknya lemas dan warna kulit kusam. Karena terasa gatal, ikan-ikan tersebut akan sering menggesekkan badannya ke dinding atau dasar kolam. Sama seperti penyakit lainnya, penyakit ini juga bisa menular melalui air. Oleh karena itu, jika gejala-gejala tersebut di atas terlihat, Anda disarankan untuk memisahkan ikan yang tertular dengan ikan yang masih sehat. Untuk mencegahnya, Anda bisa mengurangi kepadatan bibit ikan karena penyakit ini juga bisa disebabkan oleh kekurangan kandungan oksigen."
        },
        {
            "title" : "Aeromonas Hydrophilia Bacteria",
            "gambar" : "https://storage.googleapis.com/gambar-kolam/penyakit/lele/aeromonas.jpeg",
            "konten" : "Bakteri aeromonas hydrophila sangat sering menyerang ikan lele. Jika ikan lele sudah terserang bakteri ini, perutnya akan membuncit, siripnya membengkak, dan permukaan tubuhnya terluka. Sama seperti penyakit Cotton Wool, bakteri ini muncul akibat banyaknya sisa pakan yang membusuk di permukaan kolam. Oleh karena itu, untuk mencegah ikan lele dari bakteri ini, Anda harus mengatur manajemen pemberian pakan dengan baik."
        },
    ]
  },

  mujair: {
    "id" : 2,
    imageUrl: 'https://storage.googleapis.com/gambar-ikan-menu/mujahir.png',
    caraBudidaya : {
        "id" : 2,
        pemilihanKolam : [
            {
                "title" : "Kolam Pemijahan",
                "gambar" : "https://storage.googleapis.com/gambar-kolam/kolam/mujair/pemijahan.jpeg",
                "konten" : "Kolam ini berfungsi sebagai kolam pemijahan, kolam seharusnya berupa kolam tanah dengan luas 50-100 meter persegi dan kepadatan kolam induk hanya 2 ekor/m2. Persyaratan kolam pemijahan adalah suhu air berkisar antara 20-22 derajat C; kedalaman air 40-60 cm; Dasar kolam harus berpasir."
            },
            {
                "title" : "Kolam Pembibitan",
                "gambar" : "https://storage.googleapis.com/gambar-kolam/kolam/mujair/pembibitan.jpeg",
                "konten" : "Pemeliharaan benih/kolam pembibitan Luas kolam tidak lebih dari 50-100 meter persegi. Kedalaman air kolam antara 30-50 cm. Kepadatan harus 5-50 kepala / meter persegi. Lama pemeliharaan di kolam pembibitan antara 3-4 minggu, ketika benih ikan berukuran 3-5 cm."
            },
            {
                "title" : "Kolam Pembesaran",
                "gambar" : "https://storage.googleapis.com/gambar-kolam/kolam/mujair/pembesaran.jpeg",
                "konten" : "Tahap 1, Kolam ini berfungsi sebagai kolam pemijahan, kolam seharusnya berupa kolam tanah dengan luas 50-100 meter persegi dan kepadatan kolam induk hanya 2 ekor/m2. Persyaratan kolam pemijahan adalah suhu air berkisar antara 20-22 derajat C; kedalaman air 40-60 cm; Dasar kolam harus berpasir. Tahap 2, berfungsi untuk memelihara kayu bulat besar. Kolam tersebut bisa berupa kolam tanah atau sawah. Keramba apung juga dapat digunakan dengan mata jaring 1,25-1,5 cm. Jumlah stoking pembesaran tahap II tidak lebih dari 10 ekor/meter persegi. Tahap 3, berfungsi untuk membesarkan benih. Kolam tanah yang dibutuhkan antara 80-100 cm dengan luas 500-2.000 meter persegi. D. Kolam/area bersih adalah tempat untuk membersihkan ikan sebelum dipasarkan."
            },
        ],
        pemilihanBenih : 
            {
                "title" : "Pemilihan Benih Mujair",
                "gambar" : "https://storage.googleapis.com/gambar-kolam/benih/benih-mujair.jpeg",
                "konten" : [
                    {
                        "step" : 1,
                        "judul" : "Pembibitan",
                        "deskripsi" : "Pemijahan dan penetasan Mujair berlangsung sepanjang tahun di kolam pemijahan dan tidak memerlukan lingkungan pemijahan khusus. Yang perlu dilakukan adalah persiapan media pemeliharaan seperti pengapuran dan pemupukan. Ketinggian air di kolam dipertahankan sekitar 50 cm. Untuk meningkatkan tingkat produktivitas dan kesuburan diberikan pakan tambahan dengan komposisi sebagai berikut: 25% tepung ikan, 10% tepung kopra dan 65% dedak halus. Komposisi ransum ini digunakan dalam budidaya Mujair komersial. Bisa juga diberikan pakan berupa pelet yang mengandung 20-30% protein dengan dosis 2-3% dari bobot populasi per hari, diberikan 2 kali/hari, pada pagi dan sore hari. Pemijahan akan terjadi setelah induk jantan membuat lubang sarang berupa cekungan di dasar kolam dengan diameter sekitar 10-35 cm. Begitu pembuatan sarang pemijahan selesai, segera proses pemijahan berlangsung. Setelah proses pembuahan selesai, telur pemijahan segera dikumpulkan oleh induk betina ke dalam mulutnya untuk dierami hingga menetas. Saat itu induk betina sedang tidak aktif makan sehingga tubuhnya terlihat kurus. Telur akan menetas setelah 3-5 hari pada suhu air sekitar 25-27 derajat C. Setelah sekitar 2 minggu sejak menetas, induk betina baru melepaskan anaknya, karena dapat mencari makan sendiri."
                    },
                    {
                        "step" : 2,
                        "judul" : "pemeliharaan",
                        "deskripsi" : "Penangkaran atau pembesaran ikan Mujair dilakukan setelah telur-telur pemijahan menetas. Kegiatan ini dilakukan di kolam pembibitan yang siap menerima bayi ikan dimana kolam tersebut terlebih dahulu dikeringkan dan dibersihkan dari ikan liar. Tambak harus diberi kapur dan pupuk sesuai ketentuan. Demikian juga pemberian pakan untuk bibit disesuaikan dengan ketentuan. Jumlah tebar di kolam pembibitan tergantung pada ukuran benih ikan. Benih ikan berukuran 1-3 cm, jumlah penebaran sekitar 30-50 ekor/meter persegi, ukuran 3-5 cm, jumlah penebaran berkisar 5-10 ekor/meter persegi. Sedangkan ukuran ikan 5-8 cm, jumlah penebaran 2-5 ekor/meter persegi. Untuk benih berukuran 5-8 cm sebaiknya dilakukan budidaya monoseks, karena pada ukuran tersebut benih ikan dapat dibedakan yang jantan atau betina."
                    }
                ]
            },
        
        pemeliharaan : 
            {
                "title" : "Pemeliharaan Mujair",
                "gambar" : "https://storage.googleapis.com/gambar-kolam/pemeliharaan/pemeliharaan-mujair.jpeg",
                "konten" : [
                    {
                        "step" : 1,
                        "judul" : "Pemupukan",
                        "deskripsi" : "Pemupukan tambak bertujuan untuk meningkatkan produktivitas tambak, yaitu dengan merangsang pertumbuhan pakan alami sebanyak-banyaknya. Pupuk yang biasa digunakan adalah pupuk kandang atau pupuk hijau dengan dosis 50–700 gram/m2"
                    },
                    {
                        "step" : 2,
                        "judul" : "Pemberian Pakan",
                        "deskripsi" : "Jika produktivitas dan kesuburan tambak menurun, maka dapat diberikan pakan tambahan dengan komposisi sebagai berikut: 25% tepung ikan, 10% tepung kopra dan 65% dedak halus. Komposisi ransum ini digunakan dalam budidaya ikan munjair komersial. Bisa juga diberikan pakan berupa pelet yang mengandung 20-30% protein dengan dosis 2-3% dari bobot populasi per hari, diberikan dua kali per hari, pada pagi dan sore hari. Selain itu, kondisi pakan di perairan sudah sesuai dengan takaran atau ketentuan yang ada. Artinya selain pakan dari media dasar, pakan tambahan berupa pellet atau remah remah juga diperlukan dengan dosis 10% dari bobot populasi per hari. Pemberian 2-3 kali/hari."
                    },
                    {
                        "step" : 3,
                        "judul" : "Kolam",
                        "deskripsi" : "Dalam hal pemeliharaan ikan Mujair, yang tidak boleh diabaikan adalah menjaga kondisi perairan agar kualitas air tetap stabil dan bersih serta tidak tercemar/terracuni oleh zat-zat beracun."
                    },
                ]
            },
        
        panen : [
        {
            "gambar" : "https://storage.googleapis.com/gambar-kolam/panen/panen-mujair.jpeg",
            "konten" : "Pada panen sebagian atau panen selektif dilakukan tanpa mengeringkan kolam, ikan yang akan dipanen diseleksi dengan ukuran tertentu (untuk pemanenan benih). Ukuran benih yang akan dipanen (umur 1-1,5 bulan) tergantung permintaan konsumen, umumnya diklasifikasikan untuk ukuran: 1-3 cm; 3-5cm dan 5-8cm. Pemanenan dilakukan dengan menggunakan waring yang telah ditaburi umpan (dedak). Ikan yang tidak terseleksi (biasanya terluka oleh jaring), sebelum dikembalikan ke kolam sebaiknya dipisahkan dan diperlakukan dengan larutan malachite green 0,5-1,0 ppm selama 1 jam. Sedangkan pada panen total, umumnya dilakukan untuk menangkap/memanen ikan yang dipelihara. Pada umumnya umur ikan Mujair yang dipanen sekitar 5 bulan dengan berat berkisar antara 30-45 gram/ekor. Panen total dilakukan dengan mengeringkan kolam hingga ketinggian air 10-20 cm. Panen petak/petak pemancingan dibuat dengan luas 1 m2 di depan pintu keluar (monnik), sehingga memudahkan dalam menangkap ikan. Pemanenan dilakukan pada pagi hari saat tidak panas dengan menggunakan waring atau scoopnet yang halus. Panen sesegera mungkin dan berhati-hatilah agar tidak melukai ikan."
        },
    ]
    },
    rekomendasiPakan : [
        {
            "title" : "Daun Talas",
            "gambar" : "https://storage.googleapis.com/gambar-kolam/pakan/mujair/daun-talas.jpeg",
            "konten" : "Apakah Anda pernah mengkonsumsi daun talas? Ternyata daun talas juga bisa dijadikan sebagai sumber makanan ikan Mujair. Anda juga bisa mendapatkan daun talas ini dengan mudah. Sebab, di sekitar kebun dan sungai banyak pohon talas yang tumbuh liar."
        },
        {
            "title" : "Lumut",
            "gambar" : "https://storage.googleapis.com/gambar-kolam/pakan/mujair/lumut.jpeg",
            "konten" : "Salah satu pakan ikan Mujair yang mudah didapat adalah lumut. Umumnya lumut akan ditemukan di tempat yang lembab. Anda juga dapat menemukannya di kolam ikan. Sekarang. bagi anda yang memiliki hobi memancing, lumut ini bisa anda manfaatkan sebagai pakan ikan mujair untuk memancing. Namun, jika Anda memiliki kolam renang sendiri di rumah, Anda tidak perlu khawatir. Mayoritas kolam ikan akan menumbuhkan lumutnya sendiri. Dengan begitu, Anda tidak perlu lagi repot mencari lumut sebagai makanan ikan Mujair."
        },
        {
            "title" : "Cacing",
            "gambar" : "https://storage.googleapis.com/gambar-kolam/pakan/lele/cacing.jpeg",
            "konten" : "Anda juga bisa memanfaatkan cacing tanah sebagai sumber makanan ikan Mujair. Cacing tanah mengandung protein dan lemak yang sangat baik untuk mempercepat pertumbuhan. Dengan memanfaatkan cacing tanah sebagai sumber makanan tambahan, ikan Mujair yang Anda budidayakan bisa berkembang pesat."
        },
        {
            "title" : "Kangkung",
            "gambar" : "https://storage.googleapis.com/gambar-kolam/pakan/mujair/kangkung.jpeg",
            "konten" : "Tanpa Anda sadari, kangkung juga bisa dijadikan sebagai pakan ikan Mujair agar cepat tumbuh. Kangkung mengandung nutrisi yang dapat merangsang pertumbuhan ikan Mujair. Tak hanya itu, kangkung juga bisa ditemukan dengan mudah dengan harga yang juga cenderung lebih murah."
        },
        {
            "title" : "Cacing Sutra",
            "gambar" : "https://storage.googleapis.com/gambar-kolam/pakan/mujair/cacing-sutra.jpeg",
            "konten" : "Bagi anda yang bingung apa itu ulat sutera, ulat sutera merupakan jenis hewan dengan ukuran yang kecil. Umumnya, ulat sutra digunakan untuk memberi makan ikan Mujair kecil. Kandungan protein ulat sutera sangat baik untuk merangsang pertumbuhan sehingga ikan Mujair tumbuh lebih cepat."
        },
        {
            "title" : "Nasi",
            "gambar" : "https://storage.googleapis.com/gambar-kolam/pakan/mujair/nasi.jpeg",
            "konten" : "Kali ini tidak ada lagi istilah nasi sisa yang terbuang percuma. Anda bisa memberikan sisa nasi sebagai pakan ikan Mujair. Kandungan karbohidrat beras yang tinggi dapat mempercepat perkembangan ikan Mujair. Ikan Mujair juga akan tumbuh besar dalam waktu yang relatif singkat. Jadi, pola makan ikan Mujair ini sangat bervariasi. Anda bisa memberinya makan dari bahan-bahan alami seperti yang disebutkan di atas. Tidak hanya itu, kamu juga bisa membeli pelet ikan yang saat ini sudah tersedia di toko-toko yang menjual joran atau alat budidaya ikan."
        },
    ],
    penyakit : [
        {
            "title" : "Notonecta (Bebeasan)",
            "gambar" : "https://storage.googleapis.com/gambar-kolam/penyakit/mujair/notonecta.jpeg",
            "konten" : "Berbahaya bagi benih karena sengatannya. Pengendalian: menuangkan minyak tanah ke permukaan air 500 cc/100 meter persegi."
        },
        {
            "title" : "Ucrit (larva saudara kandung)",
            "gambar" : "https://storage.googleapis.com/gambar-kolam/penyakit/mujair/ucrit.jpeg",
            "konten" : "Berbahaya bagi benih karena sengatannya. Pengendalian: menuangkan minyak tanah ke permukaan air 500 cc/100 meter persegi."
        },
        {
            "title" : "Katak",
            "gambar" : "https://storage.googleapis.com/gambar-kolam/penyakit/mujair/katak.jpeg",
            "konten" : "Menyerang benih dan ikan kecil. Pengendalian: melakukan penangkapan; pagar kolam."
        },
        {
            "title" : "Ular",
            "gambar" : "https://storage.googleapis.com/gambar-kolam/penyakit/mujair/ular.jpeg",
            "konten" : "Makan ikan di malam hari. Pengendalian: pasang perangkap rumpun."
        },
        {
            "title" : "Lingsang",
            "gambar" : "https://storage.googleapis.com/gambar-kolam/penyakit/mujair/lingsang.jpeg",
            "konten" : "Makan telur ikan. Pengendalian: sering membuang telur yang mengapung; tangkap dan lempar mereka hidup-hidup."
        },
        {
            "title" : "Burung",
            "gambar" : "https://storage.googleapis.com/gambar-kolam/penyakit/mujair/burung.jpeg",
            "konten" : "Makanlah biji-bijian berwarna cerah seperti merah, kuning. Pengendalian: diberi sekat bambu agar sulit menerkam; dilengkapi dengan jumbai atau pembatas tali."
        }
    ]
  },
  patin: {
    "id" : 3,
    imageUrl: 'https://storage.googleapis.com/gambar-ikan-menu/patin.png',
    caraBudidaya : {
        "id" : 3,
        pemilihanKolam : [
            {
                "title" : "Kolam Terpal",
                "gambar" : "https://storage.googleapis.com/gambar-kolam/kolam/patin/terpal.jpeg",
                "konten" : "Kolam terpal merupakan kolam yang dapat dibangun di atas lahan yang sempit dengan lapisan terpal di bagian dasar dan dindingnya. Bentuknya bisa berupa persegi atau bulat dengan kerangka dari bambu, besi, atau kayu. Kolam terpal merupakan pilihan tepat bagi anda yang ingin memulai budidaya Ikan Lele dengan budget yang seminimal mungkin. Saat akan membeli terpal, pilihlah jenis terpal yang memiliki kerapatan tinggi agar tahan lama. Jika kolam sudah jadi, cuci kolam terpal menggunakan sabun terlebih dulu guna menghilangkan sisa – sisa bahan kimia dari konstruksi kolam seperti lem dan lain – lain. Bilas kolam hingga bersih dan keringkan selama satu hari. Setelah memastikan kebersihan kolam, anda bisa mengisi kolam terpal dengan air secukupnya (idealnya 20 – 30 cm). Diamkan kolam yang sudah terisi air selama 4 – 7 hari untuk memberikan waktu bagi pembentukan fitoplankton dan lumut di dalam kolam. Jika jumlah lumut dan fitoplankton dirasa sudah cukup, anda bisa menambahkan kembali air setinggi kurang lebih 80 cm. Penguapan air kolam biasanya menimbulkan bau, karenanya jangan lupa untuk menaruh berbagai jenis dedaunan seperti daun singkong, daun pepaya dan jenis dedaunan hijau lainnya agar kolam berwarna hijau. Warna hijau kolam akanmencegah bau yang ditimbulkan dari proses penguapan air. Pastikan untuk selalu mengganti air kolam minimal satu bulan sekali."
            },
            {
                "title" : "Kolam Beton",
                "gambar" : "https://storage.googleapis.com/gambar-kolam/kolam/patin/beton.jpeg",
                "konten" : "Kolam semen atau kolam beton adalah kolam yang 90% sisi – sisinya dilapisi semen atau beton. Bagian dasar kolam juga dilapisi semen agar tidak mudah bocor dan rusak. Diantara keunggulan kolamsemen adalah struktrunya yang kokoh sehingga bisa lebih tahan lama dibandingkan kolam terpal. Suhu pada air di dalam kolam semen juga lebih stabil sehingga kemungkinan ikan stress atau terserang penyakit lebih kecil. Sifat kolam semen yang lebih tahan lama membuat anda tidak perlu pusing memikirkan biaya perbaikan yang biasa terjadi pada kolam lainnya. Namun kolam semen juga memiliki kekurangan, yakni biaya pembuatan yang relatif besar, mudah dihinggapi lumut, dan bau semen yang harus disterilkan terlebih dulu agar ikan tidak stress atau mati."
            },
            {
                "title" : "Kolam Tanah",
                "gambar" : "https://storage.googleapis.com/gambar-kolam/kolam/patin/tanah.jpeg",
                "konten" : "Jika kolam semen dilapisi oleh semen, maka sesuai namanya, kolam tanah didominasi oleh tanah. Kolam mini juga dikenal dengan istilah Balong, Blumbang, atau Empang. Keunggulan kolam tanah adalah kaya akan organisme seperti cacing tanah yang bermanfaat sebagai pakan Lele. Selain itu penggantian air kolam dapat jarang dilakukan atau bahkan air dipertahankan hingga masa panen tiba. Itu semua karena tanah merupakan unsur alami yang aman untuk Ikan Lele. Sayangnya, Anda tentu harus memiliki bidang tanah yang cukup luas jika ingin melakukan budidaya Ikan Lele dengan menggunakan kolam tanah. Selain itu kolam tanah juga rentan terhadap serangan hama dan penyakit yang tentunya berbahaya bagi kesehatan Ikan Lele. Yang paling berisiko, jika air terlalu berlumpur dapat berimbas pada kualitas Ikan Lele sehingga menurunkan harga jual ikan."
            },
        ],
        pemilihanBenih : 
            {
                "title" : "Pemilihan Benih Patin",
                "gambar" : "https://storage.googleapis.com/gambar-kolam/benih/benih-patin.jpeg",
                "konten" : [
                    {
                        "step" : 1,
                        "judul" : "Ukuran",
                        "deskripsi" : "Pilih bibit ikan patin yang berukuran seragam dan tidak tampak adanya kecacatan."
                    },
                    {
                        "step" : 2,
                        "judul" : "Gerakan",
                        "deskripsi" : "Gerakannya lincah dan jika air didalam bak diputar, maka bibit akan bergerak melawan arus."
                    },
                    {
                        "step" : 3,
                        "judul" : "Warna",
                        "deskripsi" : "Warna tubuh bibit ikan patin berwarna cerah."
                    },
                    {
                        "step" : 4,
                        "judul" : "Responsif",
                        "deskripsi" : "Bibit tampak responsif ketika diberi pakan."
                    },
                    {
                        "step" : 5,
                        "judul" : "Panjang",
                        "deskripsi" : "Panjang tubuh bibit ikan patin disarankan untuk memilih yang berukuran 2-4 inchi."
                    },
                    {
                        "step" : 6,
                        "judul" : "Konsumsi",
                        "deskripsi" : "Pastikan bibit ikan patin sudah terbiasa mengkonsumsi pelet."
                    },
                ]
            },
        
        pemeliharaan : 
            {
                "title" : "Pemeliharaan Patin",
                "gambar" : "https://storage.googleapis.com/gambar-kolam/pemeliharaan/pemeliharaan-patin.jpeg",
                "konten" : [
                    {
                        "step" : 1,
                        "judul" : "Ukuran",
                        "deskripsi" : "Pada saat bibit ikan patin berikuran 2 inchi, berikan pakan pelet dengan frekuensi 2 kali sehari (pada sekitar jam 9 pagi dan jam 5 sore)."
                    },
                    {
                        "step" : 2,
                        "judul" : "Pemberian Pakan Umur 3 Bulan",
                        "deskripsi" : "Saat ikan sudah berusia 3 bulan, berikan pakan dengan kadar protein 28% dan berikan pakan 2 kali sehari."
                    },
                    {
                        "step" : 3,
                        "judul" : "Pemberian Pakan Umur Lebih dari 3 Bulan",
                        "deskripsi" : "Saat ikan sudah berusia >3 bulan, berikan pakan dengan kadar protein 21-24% dan berikan pakan 2-3 kali sehari."
                    },
                    {
                        "step" : 4,
                        "judul" : "Pemberian Probiotik",
                        "deskripsi" : "Seperti yang sudah diketahui, pemberian probiotik untuk ikan patin sangat berguna untuk pertumbuhan dan perkembangan ikan patin. Perlu dulur ketahui juga, dilansir dari Kementerian Perikanan dan Kelautan (kkp.go.id) dalam memaksimalkan kualitas pakan tentunya dibantu dengan penambahan probiotik yang dapat meningkatkan pertumbuhan ikan patin, konversi pakan, kelulushidupan ikan patin. Tentu saja dalam memilih probiotik, dulur bisa menggunakan probiotik ikan yang terbuat dari bahan-bahan organic yang juga mengandung bakteri baik, dalam menjaga kualitas air maupun pada masa perawatan."
                    },
                ]
            },
        
        panen : [
            {
                "gambar" : "https://storage.googleapis.com/gambar-kolam/panen/panen-patin.jpeg",
                "konten" : "Masa panen ikan patin yang berkisar 6 sampai 12 bulan, tentunya dapat lebih maksimal hasinya. Tentu saja hasil panen ikan patin yang dulur inginkan, disesuaikan dengan kebutuhan pasar. Hal ini juga berkaitan dengan kualitas harga jual dan rate harga yang ditentukan. Bagi dulur pemula maupun yang sudah lama, tentu saja dalam membudidayakan ikan patin perlu teknis dan pemberian dosis probiotik yang tepat. Tidak hanya menghasilkan keuntungan budidaya ikan patin yang memiliki daya jual yang bagus, namun juga dapat menekan FCR serta biaya lainnya. Lebih cepat panen dan kualitas ikan patin lebih bagus pastikan memilih probiotik ikan patin yang tepat."
            },
        ]
    },
    rekomendasiPakan : [
        {
            "title" : "Rekomendasi Pakan Patin",
            "gambar" : "https://storage.googleapis.com/gambar-kolam/pakan/patin/pakan%20patin.png",
            "konten" : "Di habitat aslinya, patin memakan ikan-ikan kecil, cacing, udang-udangan, moluska, serangga, dan biji-bijian. Berdasarkan  jenis pakannya yang beragam tersebut, patin dikategorikan sebagai ikan pemakan segala (omnivora). Namun demikian, pakan buatan (pelet) merupakan makanan yang terbaik dan mutlak diberikan bagi ikan patin yang dibudidayakan secara intensif. Pakan buatan pabrik atau pelet memang memiliki kualitas yang terjamin dengan kandunganutrisi yang lengkap sehingga sangat baik untuk perkembangan dan pertumbuahan patin yang optimal. Namun, yang menjadi pertimbangan jika menggunakan pakan buatan pabrik adalah harganya yang relatif mahal. Ikan patin termasuk salah satu ikan yang rakus terhadap makanan tambahan."
        }
    ],
    penyakit : [
        {
            "title" : "Aeromonas Hydrophilia Bacteria",
            "gambar" : "https://storage.googleapis.com/gambar-kolam/penyakit/patin/aeromonas.jpeg",
            "konten" : "Bakteri aeromonas hydrophila sangat sering menyerang ikan patin. Jika ikan patin sudah terserang bakteri ini, perutnya akan membuncit, siripnya membengkak, dan permukaan tubuhnya terluka. Sama seperti penyakit Cotton Wool, bakteri ini muncul akibat banyaknya sisa pakan yang membusuk di permukaan kolam. Oleh karena itu, untuk mencegah ikan patin dari bakteri ini, Anda harus mengatur manajemen pemberian pakan dengan baik."
        },
        {
            "title" : "White-Spot",
            "gambar" : "https://storage.googleapis.com/gambar-kolam/penyakit/patin/whitespot.jpg",
            "konten" : "Penyakit bintik putih pada ikan patin disebabkan oleh protozoa jenis Ichthyphyhirius multifillis. Untuk menghindarinya, Anda disarankan untuk menjaga kebersihan kolam patin dan memastikan suhu air kolam berada pada suhu 28°C. Sedangkan untuk mengobati ikan yang terjangkit penyakit bercak putih, Anda bisa menaburkan garam ke dalam kolam sebanyak 2-3 kali sehari. Agar tidak menulari ikan patin lain, Anda juga bisa memisahkan ikan yang terjangkit penyakit white spot dari ikan lain dan memperbaiki sistem sanitasi di kolam."
        },
    ]
  },
  gurame: {
    "id" : 4,
    imageUrl: 'https://storage.googleapis.com/gambar-ikan-menu/gurame.png',
    caraBudidaya : {
        "id" : 4,
        pemilihanKolam : [
            {
                "title" : "Kolam Pemijahan",
                "gambar" : "https://storage.googleapis.com/gambar-kolam/kolam/mujair/pemijahan.jpeg",
                "konten" : "Kolam ini berfungsi sebagai kolam pemijahan, kolam seharusnya berupa kolam tanah dengan luas 50-100 meter persegi dan kepadatan kolam induk hanya 2 ekor/m2. Persyaratan kolam pemijahan adalah suhu air berkisar antara 20-22 derajat C; kedalaman air 40-60 cm; Dasar kolam harus berpasir."
            },
            {
                "title" : "Kolam Pembibitan",
                "gambar" : "https://storage.googleapis.com/gambar-kolam/kolam/gurame/pembibitan.jpeg",
                "konten" : "Pemeliharaan benih/kolam pembibitan Luas kolam tidak lebih dari 50-100 meter persegi. Kedalaman air kolam antara 30-50 cm. Kepadatan harus 5-50 kepala / meter persegi. Lama pemeliharaan di kolam pembibitan antara 3-4 minggu, ketika benih ikan berukuran 3-5 cm."
            },
            {
                "title" : "Kolam Pembesaran",
                "gambar" : "https://storage.googleapis.com/gambar-kolam/kolam/gurame/pembesaran.jpg",
                "konten" : "Tahap 1, kolam ini berfungsi sebagai kolam pemijahan, kolam seharusnya berupa kolam tanah dengan luas 50-100 meter persegi dan kepadatan kolam induk hanya 2 ekor/m2. Persyaratan kolam pemijahan adalah suhu air berkisar antara 20-22 derajat C; kedalaman air 40-60 cm; Dasar kolam harus berpasir.Tahap 2, berfungsi untuk memelihara kayu bulat besar. Kolam tersebut bisa berupa kolam tanah atau sawah. Keramba apung juga dapat digunakan dengan mata jaring 1,25-1,5 cm. Jumlah stoking pembesaran tahap II tidak lebih dari 10 ekor/meter persegi.Tahap 3, berfungsi untuk membesarkan benih. Kolam tanah yang dibutuhkan antara 80-100 cm dengan luas 500-2.000 meter persegi. D. Kolam/area bersih adalah tempat untuk membersihkan ikan sebelum dipasarkan."
            },
        ],
        pemilihanBenih : 
            {
                "title" : "Pemilihan Benih Gurame",
                "gambar" : "https://storage.googleapis.com/gambar-kolam/benih/benih-gurame.jpeg",
                "konten" : [
                    {
                        "step" : 1,
                        "judul" : "Asal Benih",
                        "deskripsi" : "Benih dilengkapi surat keterangan asal benih"
                    },
                    {
                        "step" : 2,
                        "judul" : "Ukuran Benih",
                        "deskripsi" : "Ukuran minimal 6 cm"
                    },
                    {
                        "step" : 3,
                        "judul" : "Kondisi Benih",
                        "deskripsi" : "Punya badan sehat, tidak terdapat luka dan cacat."
                    },
                ]
            },
        
        pemeliharaan : 
            {
                "title" : "Pemeliharaan Gurame",
                "gambar" : "https://storage.googleapis.com/gambar-kolam/pemeliharaan/pemeliharaan-gurame.jpeg",
                "konten" : [
                    {
                        "step" : 1,
                        "judul" : "Tahap Pertama",
                        "deskripsi" : "Pemeliharaan tahap I selama 90-120 hari"
                    },
                    {
                        "step" : 2,
                        "judul" : "Berat Pertama",
                        "deskripsi" : "Berat ikan di tahap I 7-15 gram per ekor"
                    },
                    {
                        "step" : 3,
                        "judul" : "Penyebaran Pertama",
                        "deskripsi" : "Penyebaran di tahap I 15-20 ekor per meter persegi"
                    },
                    {
                        "step" : 4,
                        "judul" : "Tahap Kedua",
                        "deskripsi" : "Pemeliharaan Tahap 2 selama 120-150 hari"
                    },
                    {
                        "step" : 5,
                        "judul" : "Berat Kedua",
                        "deskripsi" : "Berat ikan di tahap 2 200-300 gram"
                    },
                    {
                        "step" : 6,
                        "judul" : "Penyebaran Kedua",
                        "deskripsi" : "Penyebaran di tahap 2 5-7 ekor per meter persegi"
                    },
                    {
                        "step" : 7,
                        "judul" : "Panen",
                        "deskripsi" : "Panen di tahap 2 saat berat ikan 500-700 gram per ekor"
                    },
                ]
            },
        
        panen : [
            {
                "gambar" : "",
                "konten" : "Panen dilakukan saat ikan sudah mencapai berat ideal. Di panen tahap I, berat idealnya 200-300 gram per ekor. Di panen tahap II, berat idealnya 500-700 gram per ekor. Umumnya ikan gurami dijual dalam kondisi hidup. Maka itu, panen perlu dilakukan hati-hati. Cara panen: ikan ditangkap dengan tangan (tanpa alat). Lalu, ikan dimasukkan dalam ember/jerigen/drum plastik berisi air."
            },
        ]
    },
    rekomendasiPakan : [
        {
            "title" : "Rekomendasi Pakan Gurame",
            "gambar" : "https://storage.googleapis.com/gambar-kolam/pakan/gurame/pakan%20gurame.png",
            "konten" : "Pakan ikan gurame terdiri dari buatan dan alami (dedaunan). Contoh pakan dedaunan: daun talas, kangkung, daung singkong. Pemberian dedaunan 1-2% bobot biomas per hari Volume di atas diberikan dalam sekali pemberian. Pakan buatan punya kandungan protein minimal 20 persen. Pakan buatan wajib belum kedaluwarsa. Disarankan pakai pakan buatan yang terdaftar di KKP. Ukuran pakan 1 mm, 2 mm dan 3 mm Ukuran pakan mempertimbangkan bukaan mulut ikan. Jumlah pakan sebanyak 1 – 3% bobot biomas per hari. Frekuensi pemberian pakan sesuai kondisi ikan dan lingkungan. Umumnya, pemberian pakan 1 – 2 kali per hari."
        }
    ],

    penyakit : [
        {
            "title" : "Penyakit Umum pada Gurame",
            "gambar" : "https://storage.googleapis.com/gambar-kolam/penyakit/gurame/penyakit%20umum.jpg",
            "konten" : "Bagi pembudidaya ikan gurame, selalu waspada terhadap penyakit ikan yang dibudidayakan adalah sesuatu yang mutlak harus dilakukan. Ada beberapa penyakit pada ikan gurame, termasuk kutu ikan, parasiter yang menyerang kulit Gurame. Untuk mencegahnya, pembudidaya harus sesering mungkin memeriksa kualitas air kolam agar kesehatan ikan tetap terjaga. Penyakit pada ikan gurame sendiri ada dua yaitu yang disebabkan oleh parasiter dan disebabkan oleh non parasite. Penyakit parasiter disebabkan oleh parasit berupa bakteri, virus, jamur, cacing, dan mikroorganisme lainnya. Sedangkan non parasiter adalah penyakit pada ikan gurame yang disebabkan oleh ketidakseimbangan antara factor fisika dan kimia pada lingkungan tempat budidaya, contohnya adalah kondisi air yang tercemar oleh gas beracun seperti ammonia."
        },
    ]
  }
};

// Endpoint untuk menu ikan
router.get('/ikan', (req, res) => {
  const menuIkan = Object.keys(dataIkan).map((ikan) => {
    return { id: dataIkan[ikan].id, nama: ikan, image: dataIkan[ikan].imageUrl };
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
  

module.exports = router;