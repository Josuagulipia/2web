/* ============================================================
   DATA MATERI — INI FILE YANG GURU EDIT
   ============================================================
   Semua isi pelajaran ada di sini dalam bentuk objek JavaScript.
   Guru TIDAK PERLU menyentuh file app.js / activities.js / quiz.js.

   Cara mengedit:
   - Ganti teks di antara tanda kutip " ... "
   - Untuk menambah subbab baru, salin (copy-paste) satu blok
     { id: ..., judul: ..., ... } lalu ubah isinya.
   - id HARUS unik (tidak boleh sama dengan subbab lain).
   - Semua ini juga bisa diedit lewat Mode Guru di website
     (tombol "Mode Guru" di navigasi), tanpa menyentuh kode sama
     sekali. Perubahan lewat Mode Guru otomatis tersimpan di
     browser (localStorage) dan menimpa data di file ini.
   ============================================================ */

const DEFAULT_MATERI = {
  judul: "Komunikasi Digital & Netiket",
  subjudul: "Belajar sopan santun, email, dan kerja sama di dunia digital",
  mapel: "Informatika / TIK",
  gambarHero: "💬",
  tujuanPembelajaran: [
    "Menjelaskan pengertian komunikasi digital dan netiket.",
    "Membedakan bahasa formal dan informal dalam komunikasi digital.",
    "Menerapkan etika saat mengirim dan membalas pesan.",
    "Menulis email formal dengan struktur yang benar.",
    "Menggunakan fitur CC, BCC, dan attachment pada email.",
    "Melakukan kolaborasi menggunakan dokumen daring.",
    "Menggunakan fitur komentar dan saran pada dokumen.",
    "Menerapkan etika saat mengikuti rapat daring atau video conference."
  ],

  glossary: [
    { term: "Netiket", def: "Singkatan dari Network Etiquette — sopan santun saat berkomunikasi di internet." },
    { term: "Attachment", def: "File yang dilampirkan pada sebuah email, misalnya dokumen, foto, atau PDF." },
    { term: "CC (Carbon Copy)", def: "Mengirim salinan email ke orang lain, dan semua penerima bisa saling melihat siapa saja yang dikirimi." },
    { term: "BCC (Blind Carbon Copy)", def: "Mengirim salinan email secara tersembunyi — penerima lain tidak tahu ada BCC." },
    { term: "Suggestion Mode", def: "Mode di Google Docs untuk mengusulkan perubahan tanpa langsung mengubah dokumen asli." },
    { term: "Viewer / Commenter / Editor", def: "Tingkat izin akses dokumen daring: hanya lihat, lihat+komentar, atau lihat+ubah." },
    { term: "Video conference", def: "Pertemuan lewat internet dengan suara dan/atau video, misalnya Google Meet atau Zoom." },
    { term: "Share screen", def: "Fitur untuk menampilkan layar perangkat kita kepada peserta rapat lain." },
    { term: "Spam", def: "Pesan yang dikirim berulang-ulang atau tidak diinginkan, biasanya berisi iklan atau tautan mencurigakan." },
    { term: "Phishing", def: "Upaya penipuan daring untuk mencuri data pribadi dengan menyamar sebagai pihak terpercaya." },
    { term: "Hoaks", def: "Berita atau informasi bohong yang disebarkan seolah-olah benar." },
    { term: "Jejak Digital (Digital Footprint)", def: "Rekam jejak aktivitas seseorang di internet yang tertinggal dan bisa dilihat orang lain." },
    { term: "Privasi Digital", def: "Hak seseorang untuk menjaga informasi pribadinya agar tidak disebarluaskan tanpa izin di dunia digital." },
    { term: "Reply All", def: "Fitur membalas email ke semua penerima sekaligus, termasuk yang ada di kolom To dan CC." },
    { term: "Forward", def: "Fitur meneruskan email yang diterima kepada orang lain." },
    { term: "Signature Email", def: "Tanda tangan digital berisi nama dan identitas pengirim yang otomatis muncul di akhir email." },
    { term: "Draft", def: "Email atau pesan yang sudah ditulis tapi belum dikirim, tersimpan sementara." },
    { term: "Emoji", def: "Simbol gambar kecil untuk mengekspresikan perasaan atau nada dalam pesan digital." },
    { term: "Cyberbullying", def: "Perundungan atau intimidasi yang dilakukan melalui media digital/internet." },
    { term: "Waiting Room", def: "Fitur di video conference yang menahan peserta di ruang tunggu sebelum diizinkan masuk oleh host." }
  ],

  subbab: [
    /* ---------------- SUBBAB 1 ---------------- */
    {
      id: "pengantar",
      judul: "Apa Itu Komunikasi Digital?",
      tujuan: "Memahami pengertian dan manfaat komunikasi digital dalam kehidupan sehari-hari.",
      waktu: "15 menit",
      cobaDulu: {
        pertanyaan: "Menurutmu, apa yang akan terjadi jika sekolah tiba-tiba tidak boleh memakai WhatsApp, email, atau Google Meet sama sekali selama seminggu?",
        opsi: ["Belajar jadi lebih sulit dan lambat", "Tidak ada bedanya sama sekali", "Belajar jadi lebih mudah"]
      },
      konten: [
        { type: "paragraf", text: "Komunikasi digital adalah kegiatan menyampaikan informasi, pesan, ide, atau pendapat menggunakan perangkat dan media digital. Sekarang kita bisa berkomunikasi tanpa harus bertemu langsung — lewat WhatsApp, email, media sosial, Google Meet, Zoom, dan berbagai platform lain." },
        { type: "contoh", title: "Contoh komunikasi digital", items: [
          "Mengirim pesan kepada guru melalui WhatsApp",
          "Mengirim tugas melalui email",
          "Berdiskusi di grup kelas",
          "Presentasi lewat Google Meet",
          "Mengerjakan tugas kelompok di Google Docs",
          "Memberi komentar pada dokumen teman"
        ]},
        { type: "sehari-hari", text: "Waktu kamu mengirim tugas foto catatan ke grup WhatsApp kelas karena temanmu izin sakit — itu juga komunikasi digital!" },
        { type: "tahukah", text: "Kata 'digital' berasal dari 'digit' yang berarti angka. Semua yang kamu kirim lewat internet — teks, foto, suara — sebenarnya diubah dulu menjadi kumpulan angka 0 dan 1 sebelum dikirim." }
      ],
      rangkuman: [
        "Komunikasi digital = menyampaikan pesan lewat perangkat & media digital.",
        "Manfaatnya: cepat, bisa jarak jauh, bisa kirim dokumen/gambar, mendukung belajar & kerja sama.",
        "Tetap harus dilakukan dengan sopan, jelas, dan bertanggung jawab."
      ],
      praktik: {
        type: "mcq",
        judul: "Yuk Coba: Mana yang Termasuk Komunikasi Digital?",
        pertanyaan: "Kegiatan berikut yang PALING TEPAT disebut komunikasi digital adalah...",
        opsi: [
          "Mengirim tugas lewat email kepada guru",
          "Mengobrol langsung tatap muka di kelas",
          "Menulis surat dengan pena dan kertas",
          "Menempel pengumuman di papan mading sekolah"
        ],
        jawabanBenar: 0,
        feedbackBenar: "Betul! Mengirim email menggunakan perangkat & internet, jadi itu komunikasi digital.",
        feedbackSalah: "Coba perhatikan lagi — komunikasi digital selalu memakai perangkat dan media digital (internet, aplikasi, dsb), bukan cara manual/tatap muka langsung."
      },
      quiz: [
        { soal: "Komunikasi digital adalah...", opsi: ["Berbicara tanpa suara", "Menyampaikan pesan lewat perangkat & media digital", "Menulis surat dengan tangan", "Berbicara hanya dengan bahasa Inggris"], jawaban: 1, pembahasan: "Komunikasi digital menggunakan perangkat dan media digital seperti HP, laptop, dan internet." },
        { soal: "Berikut ini yang BUKAN contoh komunikasi digital adalah...", opsi: ["Mengirim tugas lewat email", "Video call dengan teman", "Mengobrol lewat grup WhatsApp", "Menempel surat di papan mading sekolah"], jawaban: 3, pembahasan: "Papan mading adalah media fisik/manual, bukan media digital." },
        { soal: "Manfaat utama komunikasi digital dibanding cara konvensional adalah...", opsi: ["Selalu lebih mahal", "Bisa dilakukan cepat meski jarak jauh", "Hanya bisa dipakai satu arah", "Membutuhkan kertas lebih banyak"], jawaban: 1, pembahasan: "Komunikasi digital memungkinkan pesan sampai dengan cepat walau pengirim dan penerima berjauhan." },
        { soal: "Kata 'digital' berasal dari kata 'digit' yang berarti...", opsi: ["Huruf", "Angka", "Gambar", "Suara"], jawaban: 1, pembahasan: "Digit berarti angka; semua data digital pada dasarnya diubah menjadi kumpulan angka 0 dan 1." },
        { soal: "Sebelum dikirim lewat internet, teks, foto, dan suara terlebih dahulu diubah menjadi...", opsi: ["Warna-warna cerah", "Kumpulan angka 0 dan 1", "Gelombang radio saja", "Simbol tulisan tangan"], jawaban: 1, pembahasan: "Semua data yang dikirim lewat internet diubah menjadi kumpulan angka biner (0 dan 1)." },
        { soal: "Mengerjakan tugas kelompok bersama-sama di Google Docs merupakan contoh...", opsi: ["Komunikasi manual", "Komunikasi digital", "Komunikasi satu arah", "Bukan komunikasi"], jawaban: 1, pembahasan: "Google Docs adalah media digital yang dipakai untuk berkomunikasi dan bekerja sama secara daring." },
        { soal: "Presentasi tugas lewat Google Meet termasuk komunikasi digital karena...", opsi: ["Dilakukan di kelas", "Menggunakan perangkat dan media digital (internet)", "Tidak memakai suara", "Hanya boleh dilakukan guru"], jawaban: 1, pembahasan: "Google Meet memanfaatkan perangkat dan koneksi internet, sehingga termasuk komunikasi digital." },
        { soal: "Mengirim pesan kepada guru melalui WhatsApp termasuk contoh...", opsi: ["Komunikasi manual", "Komunikasi digital", "Bukan komunikasi", "Komunikasi tatap muka"], jawaban: 1, pembahasan: "WhatsApp adalah aplikasi pesan digital yang berjalan lewat internet." },
        { soal: "Berikut ini yang termasuk media/platform komunikasi digital adalah...", opsi: ["Papan tulis kapur", "WhatsApp, email, dan Google Meet", "Surat kertas", "Mading sekolah"], jawaban: 1, pembahasan: "WhatsApp, email, dan Google Meet adalah aplikasi/platform yang berjalan lewat internet." },
        { soal: "Ciri utama komunikasi digital adalah...", opsi: ["Harus dilakukan tatap muka", "Menggunakan perangkat dan media digital", "Tidak boleh memakai internet", "Hanya berupa tulisan tangan"], jawaban: 1, pembahasan: "Komunikasi digital selalu memanfaatkan perangkat (HP/laptop) dan media digital seperti internet." },
        { soal: "Memberi komentar pada dokumen teman di Google Docs adalah contoh...", opsi: ["Komunikasi digital", "Komunikasi manual", "Kegiatan yang tidak berkaitan dengan komunikasi", "Komunikasi tatap muka"], jawaban: 0, pembahasan: "Memberi komentar di dokumen daring memakai perangkat dan internet, sehingga termasuk komunikasi digital." },
        { soal: "Jika sekolah tiba-tiba tidak boleh memakai WhatsApp, email, atau Google Meet selama seminggu, kemungkinan besar...", opsi: ["Belajar jadi lebih mudah", "Belajar jadi lebih sulit dan lambat", "Tidak ada bedanya sama sekali", "Semua tugas otomatis selesai"], jawaban: 1, pembahasan: "Banyak aktivitas belajar saat ini bergantung pada komunikasi digital, sehingga tanpanya proses belajar akan terganggu." },
        { soal: "Menulis surat dengan pena dan kertas termasuk komunikasi...", opsi: ["Digital", "Manual/konvensional", "Daring", "Elektronik"], jawaban: 1, pembahasan: "Surat kertas tidak memakai perangkat atau media digital, sehingga termasuk komunikasi manual." },
        { soal: "Diskusi di grup kelas WhatsApp merupakan contoh komunikasi digital karena...", opsi: ["Dilakukan lewat aplikasi dan internet", "Dilakukan tanpa perangkat", "Hanya boleh dipakai satu orang", "Tidak memerlukan koneksi apa pun"], jawaban: 0, pembahasan: "Grup WhatsApp berjalan lewat aplikasi yang membutuhkan perangkat dan koneksi internet." },
        { soal: "Mengirim tugas foto catatan ke grup WhatsApp kelas karena teman izin sakit adalah contoh komunikasi digital dalam kehidupan...", opsi: ["Sehari-hari", "Yang jarang terjadi", "Yang tidak nyata", "Formal saja"], jawaban: 0, pembahasan: "Contoh ini menunjukkan komunikasi digital dipakai dalam aktivitas sehari-hari di sekolah." },
        { soal: "Salah satu manfaat komunikasi digital dalam belajar adalah...", opsi: ["Sulit mengirim dokumen atau gambar", "Bisa mengirim dokumen dan gambar dengan mudah", "Harus selalu bertemu langsung", "Butuh waktu lebih lama"], jawaban: 1, pembahasan: "Komunikasi digital memudahkan pengiriman dokumen dan gambar kapan saja tanpa harus bertemu langsung." },
        { soal: "Perbedaan utama komunikasi digital dan komunikasi manual terletak pada...", opsi: ["Penggunaan perangkat dan media digital", "Jumlah orang yang terlibat", "Bahasa yang dipakai", "Waktu pengiriman pesan"], jawaban: 0, pembahasan: "Komunikasi digital dibedakan dari cara manual berdasarkan penggunaan perangkat dan media digital seperti internet." },
        { soal: "Berikut ini yang merupakan manfaat komunikasi digital adalah...", opsi: ["Menghambat kerja sama jarak jauh", "Cepat dan bisa dilakukan meski jarak jauh", "Membuat pesan sulit tersampaikan", "Hanya bisa dipakai untuk hiburan"], jawaban: 1, pembahasan: "Komunikasi digital mendukung kerja sama dan penyampaian pesan yang cepat walau jarak jauh." },
        { soal: "Mengirim tugas melalui email kepada guru merupakan bentuk komunikasi...", opsi: ["Manual", "Digital, karena menggunakan perangkat dan internet", "Tatap muka", "Bukan komunikasi"], jawaban: 1, pembahasan: "Email dikirim lewat perangkat dan internet sehingga termasuk komunikasi digital." },
        { soal: "Mengapa komunikasi digital penting dipelajari di sekolah?", opsi: ["Karena sudah banyak dipakai dalam kegiatan belajar sehari-hari", "Karena akan menggantikan semua pelajaran lain", "Karena hanya dipakai oleh guru", "Karena tidak berkaitan dengan kehidupan siswa"], jawaban: 0, pembahasan: "Komunikasi digital banyak digunakan dalam kegiatan belajar sehari-hari, sehingga penting dipahami dan digunakan dengan baik." }
      ]
    },

    /* ---------------- SUBBAB 2 ---------------- */
    {
      id: "netiket",
      judul: "Netiket: Etika Berkomunikasi Digital",
      tujuan: "Memahami dan menerapkan sopan santun (netiket) saat berkomunikasi di dunia digital.",
      waktu: "20 menit",
      cobaDulu: {
        pertanyaan: "Kalau kamu mau minta tugas susulan ke guru lewat WhatsApp, menurutmu pesan seperti apa yang bakal cepat dan enak dibalas?",
        opsi: ["Pesan singkat tanpa salam: 'Kirim tugas!'", "Pesan sopan dengan salam dan penjelasan jelas", "Tidak perlu kirim pesan, langsung telepon berkali-kali"]
      },
      konten: [
        { type: "paragraf", text: "Netiket adalah singkatan dari Network Etiquette, yaitu aturan atau tata krama dalam berkomunikasi menggunakan internet. Sederhananya: netiket adalah sopan santun ketika kita berkomunikasi di dunia digital. Walaupun tidak bertemu langsung, kita tetap harus menghargai lawan bicara." },
        { type: "dua-kolom", judulKiri: "✅ Netiket yang baik", kiri: [
            "Menggunakan kata-kata yang sopan",
            "Mengucapkan salam ketika menghubungi guru",
            "Menjelaskan tujuan pesan dengan jelas",
            "Tidak mengirim pesan berkali-kali tanpa alasan",
            "Menghargai pendapat orang lain",
            "Tidak menyebarkan info pribadi orang lain"
          ], judulKanan: "❌ Contoh kurang sopan", kanan: [
            "\"Pak, kirim tugas!\" — terlalu singkat & tanpa salam"
          ]
        },
        { type: "sehari-hari", text: "Bandingkan: \"Pak, kirim tugas!\" dengan \"Selamat pagi, Pak. Saya ingin menanyakan apakah tugas Informatika dikumpulkan hari ini? Terima kasih, Pak.\" — mana yang lebih nyaman dibaca guru?" },
        { type: "tahukah", text: "Netiket sudah ada sejak awal 1990-an, jauh sebelum media sosial populer! Saat itu orang-orang berdiskusi lewat forum internet dan email, dan tetap butuh aturan sopan santun." }
      ],
      rangkuman: [
        "Netiket = sopan santun berkomunikasi di internet.",
        "Isi pesan penting, tapi cara menyampaikannya juga sama pentingnya.",
        "Gunakan salam, bahasa sopan, dan tujuan yang jelas."
      ],
      praktik: {
        type: "true-false",
        judul: "Benar atau Salah: Netiket",
        soal: [
          { pernyataan: "Mengirim pesan ke guru tanpa salam pembuka tetap sopan asal singkat.", jawaban: false, penjelasan: "Salam pembuka membuat pesan terasa lebih sopan dan menghargai penerima, meskipun pesannya singkat." },
          { pernyataan: "Netiket tetap penting walau kita tidak bertemu langsung dengan lawan bicara.", jawaban: true, penjelasan: "Benar! Sopan santun tetap berlaku di dunia digital, bukan cuma tatap muka." },
          { pernyataan: "Menyebarkan nomor HP teman tanpa izin di grup kelas termasuk netiket yang baik.", jawaban: false, penjelasan: "Itu melanggar privasi orang lain — bukan netiket yang baik." }
        ]
      },
      quiz: [
        { soal: "Netiket adalah singkatan dari...", opsi: ["New Etiquette", "Network Etiquette", "Net Ticket", "New Technology"], jawaban: 1, pembahasan: "Netiket berasal dari kata Network Etiquette." },
        { soal: "Pesan \"Pak, kirim tugas!\" kurang baik karena...", opsi: ["Terlalu panjang", "Tidak sopan dan kurang jelas", "Menggunakan bahasa Inggris", "Dikirim malam hari"], jawaban: 1, pembahasan: "Pesan itu terkesan memerintah, tanpa salam, dan tujuannya kurang jelas." },
        { soal: "Netiket berarti...", opsi: ["Aturan pemasangan jaringan internet", "Sopan santun saat berkomunikasi di internet", "Kecepatan mengetik pesan", "Jenis aplikasi chatting"], jawaban: 1, pembahasan: "Netiket adalah sopan santun atau tata krama saat berkomunikasi di dunia digital." },
        { soal: "Berikut termasuk netiket yang baik, KECUALI...", opsi: ["Menggunakan kata-kata sopan", "Mengucapkan salam saat menghubungi guru", "Mengirim pesan berkali-kali tanpa alasan", "Menjelaskan tujuan pesan dengan jelas"], jawaban: 2, pembahasan: "Mengirim pesan berulang-ulang tanpa alasan justru mengganggu dan melanggar netiket." },
        { soal: "Mengucapkan salam saat menghubungi guru lewat pesan termasuk...", opsi: ["Netiket yang baik", "Netiket yang buruk", "Kegiatan yang tidak perlu", "Bahasa informal"], jawaban: 0, pembahasan: "Mengucapkan salam menunjukkan sikap sopan dan menghargai penerima pesan." },
        { soal: "Menyebarkan nomor HP teman tanpa izin di grup kelas termasuk...", opsi: ["Netiket yang baik", "Pelanggaran netiket / tidak sopan", "Hal yang wajar dilakukan", "Bahasa formal"], jawaban: 1, pembahasan: "Menyebarkan data pribadi orang lain tanpa izin melanggar privasi dan netiket." },
        { soal: "Netiket penting diterapkan meskipun...", opsi: ["Kita bertemu langsung", "Kita tidak bertemu langsung dengan lawan bicara", "Pesan hanya dibaca sendiri", "Aplikasi sedang error"], jawaban: 1, pembahasan: "Walau tidak bertatap muka, sopan santun tetap harus dijaga saat berkomunikasi digital." },
        { soal: "Sikap yang menunjukkan netiket baik saat chat dengan guru adalah...", opsi: ["Langsung meminta tanpa basa-basi", "Menjelaskan tujuan pesan dengan jelas dan sopan", "Mengirim pesan berulang sampai dibalas", "Menggunakan huruf kapital semua"], jawaban: 1, pembahasan: "Pesan yang sopan dan jelas tujuannya lebih mudah dan nyaman untuk dibalas." },
        { soal: "Netiket sudah ada sejak...", opsi: ["Awal 1990-an", "Tahun 2020-an", "Sebelum internet ditemukan", "Setelah media sosial populer"], jawaban: 0, pembahasan: "Netiket sudah dikenal sejak awal 1990-an, jauh sebelum media sosial populer." },
        { soal: "Sebelum media sosial populer, netiket sudah diterapkan di...", opsi: ["Surat kabar cetak", "Forum internet dan email", "Papan pengumuman sekolah", "Telepon rumah"], jawaban: 1, pembahasan: "Orang-orang sudah berdiskusi lewat forum internet dan email sejak awal 1990-an dan tetap membutuhkan aturan sopan santun." },
        { soal: "Contoh pesan yang menerapkan netiket baik adalah...", opsi: ["\"Pak, kirim tugas!\"", "\"Woy, cepetan!\"", "\"Selamat pagi, Pak. Saya ingin menanyakan apakah tugas Informatika dikumpulkan hari ini? Terima kasih.\"", "(tidak mengirim pesan sama sekali)"], jawaban: 2, pembahasan: "Pesan ini memakai salam, bahasa sopan, dan tujuan yang jelas." },
        { soal: "Mengapa pesan singkat tanpa salam seperti \"Pak, kirim tugas!\" dianggap kurang sopan?", opsi: ["Karena terlalu jelas", "Karena terkesan memerintah dan tidak menghargai penerima", "Karena terlalu banyak kata", "Karena dikirim lewat email"], jawaban: 1, pembahasan: "Pesan tanpa salam dan terkesan memerintah membuat penerima merasa kurang dihargai." },
        { soal: "Menghargai pendapat orang lain saat berdiskusi daring termasuk...", opsi: ["Penerapan netiket yang baik", "Pelanggaran privasi", "Bahasa formal", "Kegiatan yang tidak penting"], jawaban: 0, pembahasan: "Menghargai pendapat orang lain adalah salah satu bentuk netiket yang baik." },
        { soal: "Berikut ini yang termasuk netiket buruk adalah...", opsi: ["Menggunakan bahasa sopan", "Mengirim pesan berulang tanpa alasan jelas", "Mengucapkan terima kasih", "Menjelaskan maksud pesan dengan jelas"], jawaban: 1, pembahasan: "Mengirim pesan berulang tanpa alasan jelas mengganggu penerima dan melanggar netiket." },
        { soal: "Menggunakan kata-kata sopan saat chat merupakan bagian dari...", opsi: ["Netiket", "Attachment", "Suggestion Mode", "Share Screen"], jawaban: 0, pembahasan: "Penggunaan kata-kata sopan adalah salah satu wujud penerapan netiket." },
        { soal: "Salah satu tujuan menerapkan netiket adalah...", opsi: ["Membuat pesan lebih panjang", "Menjaga kenyamanan dan rasa hormat dalam komunikasi digital", "Mempercepat koneksi internet", "Menghindari penggunaan email"], jawaban: 1, pembahasan: "Netiket bertujuan menjaga kenyamanan dan rasa hormat antar pengguna saat berkomunikasi digital." },
        { soal: "Ketika ingin bertanya ke guru lewat WhatsApp, sebaiknya kita...", opsi: ["Langsung bertanya tanpa salam", "Mengucapkan salam dan menjelaskan tujuan dengan jelas", "Menelepon berkali-kali", "Menunggu balasan tanpa mengirim pesan"], jawaban: 1, pembahasan: "Salam dan penjelasan tujuan yang jelas membuat pesan lebih sopan dan mudah dipahami." },
        { soal: "Perilaku berikut yang melanggar netiket adalah...", opsi: ["Menyebarkan informasi pribadi orang lain tanpa izin", "Mengucapkan salam", "Menjelaskan tujuan pesan", "Menggunakan bahasa sopan"], jawaban: 0, pembahasan: "Menyebarkan informasi pribadi orang lain tanpa izin melanggar privasi dan netiket." },
        { soal: "Netiket berlaku di media komunikasi seperti...", opsi: ["Hanya di email", "Email, WhatsApp, dan forum daring", "Hanya di aplikasi resmi sekolah", "Hanya saat video call"], jawaban: 1, pembahasan: "Netiket berlaku di semua media komunikasi digital, termasuk email, WhatsApp, dan forum daring." },
        { soal: "Mengapa netiket tetap dibutuhkan walau kita tidak bertatap muka?", opsi: ["Karena sopan santun tetap penting dalam bentuk komunikasi apa pun", "Karena internet mengharuskan aturan ketat", "Karena pesan digital tidak bisa dihapus", "Karena hanya guru yang perlu sopan"], jawaban: 0, pembahasan: "Sopan santun tetap berlaku di dunia digital, bukan hanya saat bertatap muka langsung." }
      ]
    },

    /* ---------------- SUBBAB 3 ---------------- */
    {
      id: "bahasa-formal-informal",
      judul: "Bahasa Formal dan Informal",
      tujuan: "Mampu membedakan dan menggunakan bahasa formal maupun informal sesuai lawan bicara.",
      waktu: "15 menit",
      konten: [
        { type: "paragraf", text: "Dalam komunikasi digital, kita perlu menyesuaikan bahasa dengan siapa yang kita ajak bicara. Bahasa formal dipakai dalam situasi resmi (guru, sekolah, organisasi). Bahasa informal dipakai dalam situasi santai (teman dekat)." },
        { type: "contoh", title: "Contoh bahasa formal", items: ["\"Selamat pagi, Bu. Saya ingin menyampaikan bahwa hari ini saya tidak dapat mengikuti pembelajaran karena ada keperluan keluarga. Terima kasih atas pengertiannya.\""] },
        { type: "contoh", title: "Contoh bahasa informal", items: ["\"Nanti jadi kerja kelompok jam 2?\""] },
        { type: "sehari-hari", text: "Ingat aturan sederhana ini: teman → boleh lebih santai. Guru/orang yang lebih tua → gunakan bahasa yang sopan dan formal." }
      ],
      rangkuman: [
        "Bahasa formal: untuk guru, sekolah, situasi resmi.",
        "Bahasa informal: untuk teman dekat, situasi santai.",
        "Salah memilih bahasa bisa terkesan tidak sopan atau terlalu kaku."
      ],
      praktik: {
        type: "categorize",
        judul: "Kelompokkan: Formal atau Informal?",
        instruksi: "Ketuk kalimat, lalu ketuk kotak tujuannya (Formal / Informal).",
        kategori: ["Formal", "Informal"],
        item: [
          { teks: "Selamat siang, Bu. Mohon izin bertanya soal tugas.", kategoriBenar: 0 },
          { teks: "Woy, udah ngerjain tugas belum?", kategoriBenar: 1 },
          { teks: "Yth. Bapak/Ibu Guru, saya ingin menyampaikan...", kategoriBenar: 0 },
          { teks: "Btw nanti balik jam berapa?", kategoriBenar: 1 },
          { teks: "Terima kasih atas perhatian dan pengertiannya.", kategoriBenar: 0 },
          { teks: "Santai aja, gampang kok soalnya", kategoriBenar: 1 }
        ]
      },
      quiz: [
        { soal: "Bahasa formal sebaiknya digunakan saat...", opsi: ["Chat dengan sahabat", "Mengirim email ke guru", "Bercanda di grup teman", "Membalas story teman"], jawaban: 1, pembahasan: "Guru adalah pihak resmi/lebih tua, sehingga perlu bahasa formal." },
        { soal: "\"Nanti jadi kerja kelompok jam 2?\" adalah contoh bahasa...", opsi: ["Formal", "Informal", "Baku", "Ilmiah"], jawaban: 1, pembahasan: "Kalimat itu santai dan cocok untuk teman dekat, jadi termasuk bahasa informal." },
        { soal: "Bahasa formal biasanya dipakai dalam situasi...", opsi: ["Santai bersama teman", "Resmi, seperti ke guru atau sekolah", "Bercanda di media sosial", "Hanya saat libur"], jawaban: 1, pembahasan: "Bahasa formal digunakan dalam situasi resmi seperti kepada guru, sekolah, atau organisasi." },
        { soal: "Bahasa informal biasanya dipakai saat berkomunikasi dengan...", opsi: ["Kepala sekolah", "Teman dekat", "Guru lewat email", "Wali kelas secara resmi"], jawaban: 1, pembahasan: "Bahasa informal cocok dipakai dalam situasi santai bersama teman dekat." },
        { soal: "\"Woy, udah ngerjain tugas belum?\" termasuk kalimat...", opsi: ["Formal", "Informal", "Baku", "Resmi"], jawaban: 1, pembahasan: "Kalimat ini menggunakan kata santai dan tidak baku, sehingga termasuk bahasa informal." },
        { soal: "\"Yth. Bapak/Ibu Guru, saya ingin menyampaikan...\" termasuk kalimat...", opsi: ["Formal", "Informal", "Santai", "Gaul"], jawaban: 0, pembahasan: "Kalimat ini menggunakan sapaan dan kata baku yang menunjukkan bahasa formal." },
        { soal: "Kesalahan memilih bahasa (formal/informal) bisa membuat pesan terkesan...", opsi: ["Lebih menarik", "Tidak sopan atau terlalu kaku", "Lebih mudah dipahami", "Lebih singkat"], jawaban: 1, pembahasan: "Salah memilih ragam bahasa dapat membuat pesan terkesan tidak sopan atau justru terlalu kaku." },
        { soal: "Saat mengirim email ke kepala sekolah, sebaiknya menggunakan bahasa...", opsi: ["Informal", "Formal", "Gaul", "Bahasa daerah santai"], jawaban: 1, pembahasan: "Kepala sekolah adalah pihak resmi sehingga perlu bahasa formal saat berkomunikasi." },
        { soal: "\"Btw nanti balik jam berapa?\" adalah contoh bahasa...", opsi: ["Formal", "Informal", "Baku", "Ilmiah"], jawaban: 1, pembahasan: "Kata 'Btw' dan gaya santai menunjukkan kalimat ini bahasa informal." },
        { soal: "\"Terima kasih atas perhatian dan pengertiannya.\" adalah kalimat...", opsi: ["Formal", "Informal", "Gaul", "Singkatan"], jawaban: 0, pembahasan: "Kalimat penutup ini sopan dan baku, sehingga termasuk bahasa formal." },
        { soal: "Bahasa informal biasanya ditandai dengan penggunaan...", opsi: ["Kata-kata baku dan sopan", "Kata-kata santai dan singkatan tidak baku", "Salam pembuka resmi", "Struktur kalimat email"], jawaban: 1, pembahasan: "Bahasa informal cenderung memakai kata santai dan singkatan yang tidak baku." },
        { soal: "Bahasa formal biasanya ditandai dengan...", opsi: ["Kata-kata baku dan sopan", "Singkatan gaul", "Emoji berlebihan", "Bahasa daerah santai"], jawaban: 0, pembahasan: "Bahasa formal menggunakan kata-kata baku dan sopan sesuai situasi resmi." },
        { soal: "Ketika chat dengan sahabat di luar jam sekolah, bahasa yang wajar dipakai adalah...", opsi: ["Formal", "Informal", "Bahasa surat resmi", "Bahasa email"], jawaban: 1, pembahasan: "Dengan teman dekat, bahasa informal yang santai lebih wajar digunakan." },
        { soal: "\"Santai aja, gampang kok soalnya\" termasuk kalimat...", opsi: ["Formal", "Informal", "Baku", "Ilmiah"], jawaban: 1, pembahasan: "Kalimat ini santai dan tidak baku, cocok untuk situasi informal." },
        { soal: "Mengapa penting membedakan bahasa formal dan informal dalam komunikasi digital?", opsi: ["Supaya pesan terasa sesuai dan sopan bagi lawan bicara", "Supaya pesan menjadi lebih panjang", "Supaya orang lain bingung", "Karena tidak ada pengaruhnya sama sekali"], jawaban: 0, pembahasan: "Memilih ragam bahasa yang tepat membuat pesan terasa sesuai dan menghormati lawan bicara." },
        { soal: "Bahasa formal umumnya dipakai untuk berkomunikasi dengan, KECUALI...", opsi: ["Guru", "Kepala sekolah", "Teman sebaya saat mengobrol santai", "Pihak sekolah secara resmi"], jawaban: 2, pembahasan: "Saat mengobrol santai dengan teman sebaya, bahasa informal lebih wajar digunakan." },
        { soal: "\"Selamat siang, Bu. Mohon izin bertanya soal tugas.\" termasuk contoh bahasa...", opsi: ["Formal", "Informal", "Gaul", "Santai"], jawaban: 0, pembahasan: "Kalimat ini memakai salam dan kata sopan yang menunjukkan ragam bahasa formal." },
        { soal: "Menggunakan bahasa informal saat mengirim email resmi ke guru dapat membuat pesan terkesan...", opsi: ["Lebih sopan", "Kurang sopan", "Lebih jelas", "Lebih profesional"], jawaban: 1, pembahasan: "Bahasa informal pada situasi resmi bisa terkesan kurang sopan dan tidak menghargai penerima." },
        { soal: "Aturan sederhana memilih bahasa yang tepat adalah...", opsi: ["Selalu memakai bahasa informal", "Menyesuaikan dengan siapa lawan bicara", "Selalu memakai bahasa Inggris", "Memilih bahasa secara acak"], jawaban: 1, pembahasan: "Bahasa yang dipilih sebaiknya disesuaikan dengan siapa lawan bicara kita." },
        { soal: "Ubahan bahasa informal ke formal yang tepat untuk \"Aku gak ngerti nih materinya\" adalah...", opsi: ["\"Aku gak ngerti nih materinya\"", "\"Saya belum memahami materi ini\"", "\"Gimana sih materinya\"", "\"Materinya susah banget ya\""], jawaban: 1, pembahasan: "\"Saya belum memahami materi ini\" menggunakan kata baku dan sopan, cocok untuk situasi formal." }
      ]
    },

    /* ---------------- SUBBAB 4 ---------------- */
    {
      id: "etika-membalas",
      judul: "Etika Membalas Pesan & Menghindari Kesalahpahaman",
      tujuan: "Menerapkan etika saat membalas pesan dan menghindari kesalahpahaman dalam teks.",
      waktu: "20 menit",
      konten: [
        { type: "paragraf", text: "Saat menerima pesan, perhatikan cara membalasnya: jangan terlalu lama membalas, gunakan bahasa sopan, dan berikan jawaban yang jelas (jangan hanya \"Iya\")." },
        { type: "dua-kolom", judulKiri: "❌ Kurang baik", kiri: ["\"Apa?\"", "\"Iya.\" (tanpa penjelasan)"], judulKanan: "✅ Lebih baik", kanan: ["\"Baik, Pak. Bisa dijelaskan kembali bagian yang dimaksud?\"", "\"Baik, Bu. Pesannya sudah saya baca, akan saya cek dulu ya.\""] },
        { type: "paragraf", text: "Kelemahan komunikasi tertulis: tidak ada nada suara, ekspresi wajah, atau bahasa tubuh. Kalimat \"Kamu pintar juga.\" bisa jadi pujian, tapi bisa juga terasa seperti sindiran, tergantung situasinya." },
        { type: "tahukah", text: "Prinsip sederhana yang bisa kamu pakai: baca kembali pesanmu sebelum menekan tombol \"Kirim\"." }
      ],
      rangkuman: [
        "Balas pesan dalam waktu wajar, dengan bahasa sopan dan jawaban jelas.",
        "Hindari kalimat ambigu (bermakna ganda) dan jangan menulis saat sedang marah.",
        "Selalu baca ulang pesan sebelum dikirim."
      ],
      praktik: {
        type: "case-study",
        judul: "Studi Kasus: Balasan Terbaik",
        skenario: "Gurumu bertanya lewat WhatsApp: \"Apakah kalian sudah paham materi hari ini?\" Kamu sebenarnya masih agak bingung di satu bagian.",
        pertanyaan: "Balasan mana yang paling tepat kamu kirim?",
        opsi: [
          "\"Iya paham Pak.\" (padahal masih bingung)",
          "(tidak membalas sama sekali)",
          "\"Sebagian besar sudah paham, Pak. Namun saya masih agak bingung di bagian CC dan BCC, boleh dijelaskan ulang?\""
        ],
        jawabanBenar: 2,
        feedbackBenar: "Tepat! Balasan itu jujur, sopan, dan jelas menyebutkan bagian mana yang belum dipahami.",
        feedbackSalah: "Belum tepat. Balasan yang baik itu jujur dan jelas — kalau masih bingung, sebaiknya disampaikan dengan sopan, bukan diam atau berpura-pura paham."
      },
      quiz: [
        { soal: "Kelemahan komunikasi tertulis dibanding bicara langsung adalah...", opsi: ["Lebih cepat", "Tidak ada nada suara & ekspresi wajah", "Lebih murah", "Tidak bisa dibaca ulang"], jawaban: 1, pembahasan: "Pesan teks tidak membawa nada suara/ekspresi, sehingga rawan disalahpahami." },
        { soal: "Sebelum mengirim pesan, sebaiknya kita...", opsi: ["Langsung kirim tanpa dibaca", "Membacanya kembali", "Menunggu 1 minggu", "Mengirim berkali-kali"], jawaban: 1, pembahasan: "Membaca ulang membantu memastikan pesan sudah jelas dan tidak menimbulkan salah paham." },
        { soal: "Membalas pesan \"Iya.\" tanpa penjelasan termasuk balasan yang...", opsi: ["Sangat jelas", "Kurang jelas", "Paling sopan", "Selalu tepat"], jawaban: 1, pembahasan: "Balasan singkat tanpa penjelasan bisa membingungkan penerima karena maksudnya tidak jelas." },
        { soal: "Balasan yang baik terhadap pesan guru sebaiknya...", opsi: ["Singkat tanpa penjelasan", "Jelas dan sopan", "Ditunda selamanya", "Menggunakan bahasa gaul"], jawaban: 1, pembahasan: "Balasan yang jelas dan sopan menunjukkan etika membalas pesan yang baik." },
        { soal: "Kalimat \"Kamu pintar juga.\" bisa disalahartikan karena...", opsi: ["Terlalu panjang", "Tidak ada nada suara untuk menunjukkan maksud sebenarnya", "Menggunakan huruf kapital", "Dikirim malam hari"], jawaban: 1, pembahasan: "Tanpa nada suara atau ekspresi, kalimat tertulis bisa ditafsirkan sebagai pujian atau sindiran." },
        { soal: "Sebaiknya kita tidak membalas pesan saat...", opsi: ["Sedang santai", "Sedang marah", "Sedang di rumah", "Sedang belajar"], jawaban: 1, pembahasan: "Membalas pesan saat marah berisiko menghasilkan kalimat yang kasar atau menyinggung." },
        { soal: "Contoh balasan yang lebih baik dari \"Apa?\" adalah...", opsi: ["\"Hah?\"", "\"Baik, Pak. Bisa dijelaskan kembali bagian yang dimaksud?\"", "(tidak membalas)", "\"Gak ngerti\""], jawaban: 1, pembahasan: "Balasan ini sopan dan jelas menanyakan penjelasan lebih lanjut." },
        { soal: "Salah satu cara menghindari kesalahpahaman dalam teks adalah...", opsi: ["Menulis sesingkat mungkin tanpa dibaca ulang", "Membaca ulang pesan sebelum dikirim", "Mengirim banyak pesan sekaligus", "Menghindari tanda baca"], jawaban: 1, pembahasan: "Membaca ulang pesan membantu memastikan maksudnya sudah jelas sebelum dikirim." },
        { soal: "Membalas pesan dalam waktu yang wajar termasuk bagian dari...", opsi: ["Etika membalas pesan", "Attachment", "Suggestion Mode", "Bahasa pemrograman"], jawaban: 0, pembahasan: "Membalas pesan dalam waktu wajar adalah salah satu bentuk etika membalas pesan yang baik." },
        { soal: "Kalimat ambigu artinya kalimat yang...", opsi: ["Sangat jelas maknanya", "Bisa memiliki lebih dari satu makna", "Selalu berupa pertanyaan", "Hanya dipakai dalam email"], jawaban: 1, pembahasan: "Kalimat ambigu adalah kalimat yang bisa ditafsirkan dengan lebih dari satu makna." },
        { soal: "Ketika bingung dengan materi tapi ditanya guru \"sudah paham?\", balasan paling tepat adalah...", opsi: ["Berpura-pura sudah paham", "Diam saja", "Menjawab jujur bagian mana yang masih belum dipahami", "Mengganti topik pembicaraan"], jawaban: 2, pembahasan: "Balasan jujur dan sopan membantu guru mengetahui bagian yang perlu dijelaskan ulang." },
        { soal: "Salah satu risiko menulis pesan singkat seperti \"Iya.\" tanpa penjelasan adalah...", opsi: ["Penerima jadi bingung maksudnya", "Pesan menjadi lebih sopan", "Pesan pasti dipahami dengan benar", "Tidak ada risiko sama sekali"], jawaban: 0, pembahasan: "Pesan yang terlalu singkat tanpa penjelasan berisiko membingungkan penerima." },
        { soal: "Mengapa kita perlu berhati-hati saat menulis pesan digital?", opsi: ["Karena teks tidak membawa nada suara atau ekspresi wajah", "Karena pesan digital selalu salah", "Karena tidak ada yang membaca pesan", "Karena internet selalu lambat"], jawaban: 0, pembahasan: "Tanpa nada suara dan ekspresi wajah, pesan tertulis lebih rawan disalahpahami." },
        { soal: "Balasan yang jujur dan sopan sebaiknya digunakan ketika...", opsi: ["Kita sudah benar-benar paham semuanya", "Kita belum sepenuhnya memahami sesuatu", "Kita ingin mengakhiri percakapan", "Kita sedang sibuk"], jawaban: 1, pembahasan: "Saat belum paham, balasan jujur dan sopan membantu memperjelas apa yang perlu dijelaskan lagi." },
        { soal: "Prinsip sederhana sebelum mengirim pesan adalah...", opsi: ["Mengirim secepat mungkin", "Membaca kembali pesan sebelum menekan tombol kirim", "Menghapus pesan sebelum selesai ditulis", "Mengirim pesan berkali-kali"], jawaban: 1, pembahasan: "Membaca ulang pesan sebelum mengirim membantu menghindari kesalahpahaman." },
        { soal: "Berikut yang termasuk balasan baik adalah...", opsi: ["\"Apa?\"", "\"Iya.\" (tanpa penjelasan)", "\"Baik, Bu. Pesannya sudah saya baca, akan saya cek dulu ya.\"", "(tidak membalas sama sekali)"], jawaban: 2, pembahasan: "Balasan ini jelas, sopan, dan menunjukkan tanggapan yang baik terhadap pesan." },
        { soal: "Menulis pesan saat sedang emosi berisiko menyebabkan...", opsi: ["Pesan terkesan lebih ramah", "Pesan terkesan kasar atau menyinggung", "Pesan menjadi lebih jelas", "Tidak ada dampak apa pun"], jawaban: 1, pembahasan: "Emosi saat menulis pesan bisa membuat kata-kata terasa kasar atau menyinggung tanpa disadari." },
        { soal: "Salah satu ciri balasan yang jelas adalah...", opsi: ["Menjawab sesuai pertanyaan dan tidak menimbulkan tafsir ganda", "Menjawab dengan satu kata saja", "Tidak menjawab pertanyaan sama sekali", "Menjawab dengan emosi"], jawaban: 0, pembahasan: "Balasan yang jelas menjawab sesuai pertanyaan tanpa menimbulkan makna ganda." },
        { soal: "Ketika ragu apakah pesan kita bisa disalahpahami, sebaiknya kita...", opsi: ["Langsung mengirimnya", "Membaca ulang dan memperjelas kalimat sebelum dikirim", "Menghapus pesan tanpa mengirim", "Mengirim ke orang lain saja"], jawaban: 1, pembahasan: "Membaca ulang dan memperjelas kalimat membantu mengurangi risiko kesalahpahaman." },
        { soal: "Balasan \"Baik, Pak. Bisa dijelaskan kembali bagian yang dimaksud?\" menunjukkan sikap...", opsi: ["Sopan dan terbuka meminta penjelasan", "Tidak sopan", "Malas menjawab", "Mengabaikan pertanyaan"], jawaban: 0, pembahasan: "Kalimat ini sopan dan menunjukkan keinginan untuk memahami lebih jelas." }
      ]
    },

    /* ---------------- SUBBAB 5 ---------------- */
    {
      id: "email-efektif",
      judul: "Menulis Email Formal yang Efektif",
      tujuan: "Mampu menulis email formal dengan struktur yang benar.",
      waktu: "25 menit",
      konten: [
        { type: "paragraf", text: "Email (electronic mail) adalah surat elektronik untuk mengirim & menerima pesan lewat internet. Email formal sebaiknya memiliki struktur yang jelas: Subjek → Salam Pembuka → Isi → Salam Penutup → Identitas/Pengirim." },
        { type: "contoh", title: "Contoh subjek yang baik", items: ["Izin Tidak Masuk Sekolah – Jhosua", "(hindari subjek tidak jelas seperti \"Penting!!!\" atau \"Halo\")"] },
        { type: "paragraf", text: "Contoh email formal lengkap:\n\nYth. Bapak/Ibu Guru,\nSelamat pagi, Bapak/Ibu.\nSaya Jhosua dari kelas XI. Saya ingin menyampaikan bahwa saya tidak dapat mengikuti pembelajaran hari ini karena ada keperluan keluarga. Saya mohon izin atas ketidakhadiran saya dan akan mengikuti materi atau tugas yang diberikan setelah saya kembali ke sekolah. Demikian yang dapat saya sampaikan. Terima kasih atas perhatian dan pengertiannya.\n\nHormat saya,\nJhosua\nKelas XI" },
        { type: "sehari-hari", text: "Misalnya kamu izin tidak ikut kelas karena sakit — kirim email dengan subjek jelas, salam sopan, alasan singkat, dan penutup terima kasih. Jauh lebih rapi daripada chat singkat tanpa penjelasan." },
        { type: "tahukah", text: "Nama file lampiran yang jelas juga bagian dari kesan profesional! Contoh baik: Tugas_Informatika_Jhosua_XI.pdf. Contoh kurang baik: tugasbaruFIXbanget123.pdf." }
      ],
      rangkuman: [
        "Struktur email formal: Subjek → Salam Pembuka → Isi → Salam Penutup → Identitas.",
        "Subjek harus jelas dan mewakili isi email.",
        "Isi email: langsung ke tujuan, sopan, tidak bertele-tele."
      ],
      praktik: {
        type: "order",
        judul: "Susun Urutan Struktur Email Formal",
        instruksi: "Ketuk bagian-bagian di bawah sesuai urutan yang benar, dari awal ke akhir.",
        itemAcak: ["Isi Email", "Salam Penutup", "Subjek", "Salam Pembuka", "Identitas/Tanda Tangan"],
        urutanBenar: ["Subjek", "Salam Pembuka", "Isi Email", "Salam Penutup", "Identitas/Tanda Tangan"],
        feedbackBenar: "Tepat! Itulah alur email formal yang baik dan mudah dipahami penerima.",
        feedbackSalah: "Belum pas urutannya. Ingat: email dimulai dari Subjek, lalu Salam Pembuka, baru masuk ke Isi, kemudian Salam Penutup, dan diakhiri Identitas."
      },
      quiz: [
        { soal: "Urutan struktur email formal yang benar adalah...", opsi: ["Isi → Subjek → Salam → Identitas", "Subjek → Salam Pembuka → Isi → Salam Penutup → Identitas", "Salam → Isi → Subjek", "Identitas → Isi → Subjek"], jawaban: 1, pembahasan: "Struktur baku email formal dimulai dari Subjek dan diakhiri Identitas pengirim." },
        { soal: "Contoh nama file lampiran yang baik adalah...", opsi: ["tugasbaruFIXbanget123.pdf", "Tugas_Informatika_Jhosua_XI.pdf", "asdf123.pdf", "file.pdf"], jawaban: 1, pembahasan: "Nama file sebaiknya jelas menunjukkan isi, mata pelajaran, dan pemiliknya." },
        { soal: "Bagian pertama dari struktur email formal adalah...", opsi: ["Salam Penutup", "Subjek", "Identitas", "Isi Email"], jawaban: 1, pembahasan: "Subjek email ditulis paling awal agar penerima langsung tahu maksud email." },
        { soal: "Bagian terakhir dari struktur email formal adalah...", opsi: ["Subjek", "Salam Pembuka", "Identitas/Tanda tangan", "Isi Email"], jawaban: 2, pembahasan: "Email formal diakhiri dengan identitas atau tanda tangan pengirim, misalnya nama dan kelas." },
        { soal: "Subjek email sebaiknya...", opsi: ["Kosong saja", "Jelas dan mewakili isi email", "Ditulis dengan huruf kapital semua", "Sangat panjang dan detail"], jawaban: 1, pembahasan: "Subjek yang jelas membantu penerima langsung memahami maksud email tanpa harus membukanya dulu." },
        { soal: "Contoh subjek email yang baik adalah...", opsi: ["\"Penting!!!\"", "\"Halo\"", "\"Izin Tidak Masuk Sekolah – Jhosua\"", "(dikosongkan)"], jawaban: 2, pembahasan: "Subjek ini jelas menyebutkan tujuan email dan identitas pengirim." },
        { soal: "Subjek \"Penting!!!\" dianggap kurang baik karena...", opsi: ["Terlalu formal", "Tidak menjelaskan isi email dengan jelas", "Terlalu panjang", "Menggunakan bahasa Indonesia"], jawaban: 1, pembahasan: "Subjek seperti itu tidak memberi gambaran jelas tentang isi email." },
        { soal: "Salam pembuka dalam email formal biasanya berupa...", opsi: ["\"Woy!\"", "\"Yth. Bapak/Ibu Guru,\" atau \"Selamat pagi, Bapak/Ibu.\"", "\"Hai gan!\"", "Tanpa salam sama sekali"], jawaban: 1, pembahasan: "Salam pembuka formal menggunakan sapaan sopan seperti 'Yth.' atau 'Selamat pagi'." },
        { soal: "Bagian isi email formal sebaiknya ditulis...", opsi: ["Bertele-tele dan panjang", "Jelas, sopan, dan tidak bertele-tele", "Menggunakan singkatan gaul", "Tanpa penjelasan sama sekali"], jawaban: 1, pembahasan: "Isi email formal sebaiknya langsung ke tujuan, sopan, dan mudah dipahami." },
        { soal: "Salam penutup dalam email formal contohnya...", opsi: ["\"Udah ya\"", "\"Hormat saya,\"", "\"Bye!\"", "\"Sekian dan lupakan\""], jawaban: 1, pembahasan: "\"Hormat saya,\" adalah contoh salam penutup yang sopan dalam email formal." },
        { soal: "Identitas pada akhir email biasanya berisi...", opsi: ["Nama dan kelas pengirim", "Nomor HP acak", "Alamat rumah lengkap", "Nama orang tua"], jawaban: 0, pembahasan: "Identitas di akhir email biasanya mencantumkan nama dan kelas pengirim." },
        { soal: "Email adalah singkatan dari...", opsi: ["Electronic mail", "Elegant mail", "Easy mail", "Express mail"], jawaban: 0, pembahasan: "Email berasal dari kata electronic mail, yaitu surat elektronik." },
        { soal: "Fungsi email adalah untuk...", opsi: ["Bermain gim daring", "Mengirim dan menerima pesan lewat internet", "Menyimpan foto secara offline", "Mengganti nomor telepon"], jawaban: 1, pembahasan: "Email digunakan untuk mengirim dan menerima pesan secara elektronik lewat internet." },
        { soal: "Nama file lampiran seperti \"tugasbaruFIXbanget123.pdf\" dianggap kurang baik karena...", opsi: ["Terlalu pendek", "Tidak menunjukkan isi atau identitas dengan jelas", "Formatnya salah", "Tidak bisa dibuka"], jawaban: 1, pembahasan: "Nama file yang tidak jelas menyulitkan penerima mengenali isi dan pemilik file." },
        { soal: "Ketika izin tidak masuk sekolah lewat email, bagian yang sebaiknya ditulis paling jelas terlebih dahulu adalah...", opsi: ["Identitas", "Subjek yang jelas", "Salam penutup", "Lampiran"], jawaban: 1, pembahasan: "Subjek yang jelas membantu guru langsung memahami maksud email sejak awal." },
        { soal: "Mengapa struktur email formal penting diperhatikan?", opsi: ["Supaya email mudah dipahami dan terlihat profesional", "Supaya email menjadi lebih panjang", "Supaya email sulit dibaca", "Karena tidak ada pengaruhnya"], jawaban: 0, pembahasan: "Struktur yang jelas membuat email mudah dipahami dan terkesan profesional." },
        { soal: "Kalimat penutup email formal yang sopan biasanya diakhiri dengan ucapan...", opsi: ["Permintaan maaf", "Terima kasih", "Ajakan bermain", "Pertanyaan baru"], jawaban: 1, pembahasan: "Ucapan terima kasih pada bagian penutup menunjukkan kesopanan pengirim email." },
        { soal: "Contoh subjek email yang kurang baik adalah...", opsi: ["\"Izin Tidak Masuk Sekolah – Jhosua\"", "\"Halo\"", "\"Permohonan Perpanjangan Waktu Tugas – Kelas XI\"", "\"Laporan Tugas Kelompok Bab 3\""], jawaban: 1, pembahasan: "Subjek \"Halo\" terlalu umum dan tidak menjelaskan isi email." },
        { soal: "Nama file lampiran yang baik sebaiknya mencantumkan, KECUALI...", opsi: ["Nama mata pelajaran", "Nama pemilik file", "Kata-kata acak yang tidak berarti", "Kelas pengirim"], jawaban: 2, pembahasan: "Kata-kata acak tidak membantu penerima mengenali isi file, sehingga sebaiknya dihindari." },
        { soal: "Salah satu ciri email formal yang baik adalah...", opsi: ["Tidak memiliki subjek", "Memiliki struktur lengkap dari subjek hingga identitas", "Ditulis tanpa salam", "Hanya berisi satu kata"], jawaban: 1, pembahasan: "Email formal yang baik memiliki struktur lengkap: subjek, salam pembuka, isi, salam penutup, dan identitas." }
      ]
    },

    /* ---------------- SUBBAB 6 ---------------- */
    {
      id: "attachment-cc-bcc",
      judul: "Attachment, CC, dan BCC",
      tujuan: "Mampu menggunakan fitur attachment, CC, dan BCC pada email dengan tepat.",
      waktu: "20 menit",
      konten: [
        { type: "paragraf", text: "Attachment adalah fitur untuk melampirkan file pada email (Word, PDF, PowerPoint, foto, dsb). Caranya: Tulis pesan → klik ikon lampiran 📎 → pilih file → tunggu selesai diunggah → kirim." },
        { type: "paragraf", text: "CC (Carbon Copy) digunakan untuk mengirim salinan email ke orang lain, dan semua penerima bisa saling melihat siapa saja yang dikirimi. BCC (Blind Carbon Copy) mirip CC, tapi penerima lain TIDAK tahu ada BCC di dalamnya." },
        { type: "sehari-hari", text: "Bayangkan kamu memberi surat: To = penerima utama surat. CC = orang lain yang ikut diberi salinan dan semua orang tahu. BCC = orang yang diberi salinan tapi penerima lain tidak tahu." },
        { type: "tahukah", text: "Contoh nyata: siswa mengirim email ke guru dan memasukkan wali kelas di kolom CC, supaya wali kelas juga tahu isi email tersebut." }
      ],
      rangkuman: [
        "Attachment = melampirkan file pada email.",
        "CC = salinan yang terlihat oleh semua penerima.",
        "BCC = salinan yang tersembunyi dari penerima lain."
      ],
      praktik: {
        type: "match",
        judul: "Cocokkan Istilah dengan Penjelasannya",
        pasangan: [
          { kiri: "Attachment", kanan: "File yang dilampirkan pada email" },
          { kiri: "CC", kanan: "Salinan email yang terlihat oleh semua penerima" },
          { kiri: "BCC", kanan: "Salinan email yang tersembunyi dari penerima lain" },
          { kiri: "To", kanan: "Penerima utama email" }
        ]
      },
      quiz: [
        { soal: "Jika kamu ingin mengirim salinan email tanpa diketahui penerima lain, gunakan...", opsi: ["To", "CC", "BCC", "Subjek"], jawaban: 2, pembahasan: "BCC (Blind Carbon Copy) menyembunyikan penerima salinan dari penerima lain." },
        { soal: "Fitur untuk melampirkan file PDF pada email disebut...", opsi: ["CC", "BCC", "Attachment", "Signature"], jawaban: 2, pembahasan: "Attachment adalah fitur untuk melampirkan file pada email." },
        { soal: "Attachment digunakan untuk...", opsi: ["Menghapus email", "Melampirkan file pada email", "Mengganti subjek email", "Membalas email otomatis"], jawaban: 1, pembahasan: "Attachment memungkinkan kita melampirkan file seperti dokumen, foto, atau PDF pada email." },
        { soal: "CC adalah singkatan dari...", opsi: ["Carbon Copy", "Cyber Chat", "Central Contact", "Clear Content"], jawaban: 0, pembahasan: "CC merupakan singkatan dari Carbon Copy." },
        { soal: "BCC adalah singkatan dari...", opsi: ["Blind Carbon Copy", "Basic Chat Copy", "Backup Chat Content", "Bulk Content Copy"], jawaban: 0, pembahasan: "BCC merupakan singkatan dari Blind Carbon Copy." },
        { soal: "Perbedaan utama CC dan BCC adalah...", opsi: ["CC dan BCC sama saja", "CC terlihat oleh semua penerima, BCC tersembunyi", "CC hanya untuk lampiran, BCC untuk teks", "CC tidak bisa dipakai di email"], jawaban: 1, pembahasan: "Pada CC semua penerima bisa saling melihat, sedangkan pada BCC penerima lain tidak tahu ada salinan tersebut." },
        { soal: "Jika ingin wali kelas ikut tahu isi email dan semua penerima boleh saling melihat, gunakan...", opsi: ["CC", "BCC", "Attachment", "Subjek"], jawaban: 0, pembahasan: "CC dipakai kalau semua penerima boleh saling tahu siapa saja yang menerima salinan email." },
        { soal: "Jika ingin memberi salinan email tanpa sepengetahuan penerima lain, gunakan...", opsi: ["To", "CC", "BCC", "Signature"], jawaban: 2, pembahasan: "BCC digunakan agar penerima salinan tidak diketahui oleh penerima lain." },
        { soal: "Cara melampirkan file pada email adalah dengan mengklik ikon...", opsi: ["🔍 (kaca pembesar)", "📎 (lampiran)", "🔔 (lonceng)", "⚙️ (pengaturan)"], jawaban: 1, pembahasan: "Ikon lampiran (📎) digunakan untuk memilih dan mengunggah file ke dalam email." },
        { soal: "Penerima utama email biasanya ditulis pada kolom...", opsi: ["To", "CC", "BCC", "Subjek"], jawaban: 0, pembahasan: "Kolom To digunakan untuk menuliskan penerima utama email." },
        { soal: "Contoh file yang bisa dilampirkan lewat attachment adalah...", opsi: ["Dokumen Word, PDF, atau foto", "Sinyal WiFi", "Nomor HP", "Nama pengguna email"], jawaban: 0, pembahasan: "Attachment biasa dipakai untuk melampirkan dokumen, PDF, PowerPoint, atau foto." },
        { soal: "Ketika mengirim tugas kelompok, guru dan wali kelas sama-sama perlu tahu penerima lain, sebaiknya memakai...", opsi: ["CC", "BCC", "Attachment saja", "Tidak perlu keduanya"], jawaban: 0, pembahasan: "CC cocok dipakai jika semua penerima diperbolehkan saling mengetahui siapa saja yang dikirimi." },
        { soal: "Mengapa BCC berguna saat mengirim email ke banyak orang yang tidak saling kenal?", opsi: ["Karena identitas penerima lain tersembunyi, menjaga privasi", "Karena email jadi lebih cepat terkirim", "Karena file lampiran otomatis terkompres", "Karena subjek otomatis terisi"], jawaban: 0, pembahasan: "BCC menjaga privasi penerima karena identitas mereka tidak terlihat oleh penerima lain." },
        { soal: "Sebelum mengirim attachment, langkah yang perlu dilakukan adalah...", opsi: ["Menghapus subjek email", "Menunggu file selesai diunggah", "Mematikan koneksi internet", "Mengisi kolom BCC terlebih dahulu"], jawaban: 1, pembahasan: "Kita perlu menunggu file selesai diunggah sebelum mengirim email agar lampiran terkirim dengan baik." },
        { soal: "Ibarat mengirim surat, CC dapat diibaratkan sebagai...", opsi: ["Amplop kosong", "Orang lain yang ikut diberi salinan dan diketahui semua penerima", "Prangko surat", "Alamat pengirim"], jawaban: 1, pembahasan: "CC ibarat memberi salinan surat kepada orang lain, dan semua orang tahu siapa saja yang menerimanya." },
        { soal: "Ibarat mengirim surat, BCC dapat diibaratkan sebagai...", opsi: ["Orang yang diberi salinan tapi tidak diketahui penerima lain", "Penerima utama surat", "Nama pengirim di amplop", "Cap pos"], jawaban: 0, pembahasan: "BCC ibarat memberi salinan surat secara diam-diam, tanpa diketahui penerima lain." },
        { soal: "Fitur To pada email digunakan untuk...", opsi: ["Menuliskan penerima utama pesan", "Melampirkan file", "Menyembunyikan penerima", "Menulis subjek email"], jawaban: 0, pembahasan: "Kolom To digunakan khusus untuk menuliskan penerima utama email." },
        { soal: "Jika siswa memasukkan wali kelas di kolom CC saat mengirim email ke guru, tujuannya adalah...", opsi: ["Supaya wali kelas juga mengetahui isi email", "Supaya email lebih cepat terkirim", "Supaya guru tidak bisa membalas", "Supaya file lampiran terhapus"], jawaban: 0, pembahasan: "CC dipakai agar pihak lain, seperti wali kelas, turut mengetahui isi email tersebut." },
        { soal: "Berikut ini yang BUKAN termasuk fitur email yang dibahas adalah...", opsi: ["Attachment", "CC", "BCC", "Mading sekolah"], jawaban: 3, pembahasan: "Mading sekolah adalah media fisik, bukan fitur email." },
        { soal: "Melampirkan foto tugas pada email termasuk penggunaan fitur...", opsi: ["CC", "BCC", "Attachment", "Subjek"], jawaban: 2, pembahasan: "Melampirkan file seperti foto tugas menggunakan fitur Attachment." }
      ]
    },

    /* ---------------- SUBBAB 7 ---------------- */
    {
      id: "kolaborasi-dokumen",
      judul: "Kolaborasi Dokumen Daring",
      tujuan: "Mampu berkolaborasi menggunakan dokumen daring, termasuk fitur comment dan suggestion.",
      waktu: "20 menit",
      konten: [
        { type: "paragraf", text: "Kolaborasi daring adalah kegiatan bekerja sama lewat internet menggunakan perangkat digital, misalnya beberapa siswa mengerjakan satu tugas kelompok bersama-sama di Google Docs pada saat yang sama." },
        { type: "contoh", title: "Aplikasi kolaborasi daring", items: [
          "Google Docs — untuk membuat dokumen/tulisan (contoh: makalah kelompok)",
          "Google Sheets — untuk mengolah data dalam tabel (contoh: data hasil pengamatan)",
          "Google Slides — untuk membuat presentasi (contoh: presentasi tugas kelompok)"
        ]},
        { type: "paragraf", text: "Comment digunakan untuk memberi masukan pada dokumen tanpa langsung mengubah isinya. Suggestion Mode digunakan untuk mengusulkan perubahan — perubahan itu bisa diterima atau ditolak oleh pemilik dokumen." },
        { type: "sehari-hari", text: "Saat mengerjakan tugas kelompok yang sedang dikerjakan bersama, anggota kelompok biasanya diberi akses Editor. Tapi kalau dokumen hanya ingin diperiksa guru, cukup diberi akses Viewer atau Commenter." }
      ],
      rangkuman: [
        "Kolaborasi daring memungkinkan banyak orang mengerjakan 1 dokumen bersama.",
        "Comment = memberi masukan tanpa mengubah isi.",
        "Suggestion Mode = mengusulkan perubahan (bisa diterima/ditolak).",
        "Izin akses: Viewer (lihat saja), Commenter (lihat+komentar), Editor (lihat+ubah)."
      ],
      praktik: {
        type: "case-study",
        judul: "Studi Kasus: Pilih Izin Akses yang Tepat",
        skenario: "Kelompokmu sedang bersama-sama mengetik laporan tugas di Google Docs, dan semua anggota perlu ikut menulis dan mengedit isinya.",
        pertanyaan: "Izin akses apa yang paling tepat diberikan kepada semua anggota kelompok?",
        opsi: ["Viewer", "Commenter", "Editor"],
        jawabanBenar: 2,
        feedbackBenar: "Benar! Karena semua anggota perlu ikut menulis & mengubah isi dokumen, akses Editor paling tepat.",
        feedbackSalah: "Belum tepat. Karena semua anggota perlu ikut MENULIS dan MENGUBAH dokumen (bukan cuma melihat atau berkomentar), izin yang paling tepat adalah Editor."
      },
      quiz: [
        { soal: "Fitur untuk mengusulkan perubahan pada dokumen (bisa diterima/ditolak) disebut...", opsi: ["Comment", "Suggestion Mode", "Viewer", "Attachment"], jawaban: 1, pembahasan: "Suggestion Mode memungkinkan usulan perubahan yang bisa diterima atau ditolak pemilik dokumen." },
        { soal: "Jika guru hanya perlu memeriksa dokumen tanpa mengubahnya, izin akses yang tepat adalah...", opsi: ["Editor", "Viewer atau Commenter", "Owner", "Admin"], jawaban: 1, pembahasan: "Viewer/Commenter cukup untuk melihat atau memberi komentar tanpa mengubah isi dokumen." },
        { soal: "Kolaborasi daring adalah kegiatan...", opsi: ["Bekerja sendiri tanpa internet", "Bekerja sama lewat internet menggunakan perangkat digital", "Menulis surat kertas bersama", "Bermain gim daring bersama"], jawaban: 1, pembahasan: "Kolaborasi daring berarti bekerja sama lewat internet dengan perangkat digital, misalnya di Google Docs." },
        { soal: "Comment pada dokumen digunakan untuk...", opsi: ["Menghapus isi dokumen", "Memberi masukan tanpa mengubah isi dokumen", "Mengunci dokumen", "Membagikan dokumen ke publik"], jawaban: 1, pembahasan: "Comment dipakai untuk memberi masukan pada dokumen tanpa langsung mengubah isinya." },
        { soal: "Suggestion Mode berguna karena perubahan yang diusulkan bisa...", opsi: ["Langsung berlaku tanpa persetujuan", "Diterima atau ditolak pemilik dokumen", "Dihapus otomatis", "Disembunyikan selamanya"], jawaban: 1, pembahasan: "Perubahan yang diusulkan lewat Suggestion Mode perlu disetujui atau ditolak oleh pemilik dokumen." },
        { soal: "Izin akses Viewer artinya pengguna hanya bisa...", opsi: ["Melihat dokumen", "Mengubah dokumen", "Menghapus dokumen", "Membagikan dokumen ke orang lain"], jawaban: 0, pembahasan: "Viewer hanya memiliki izin untuk melihat isi dokumen." },
        { soal: "Izin akses Commenter artinya pengguna bisa...", opsi: ["Melihat dan mengubah dokumen", "Melihat dan memberi komentar", "Menghapus dokumen", "Mengunci akses orang lain"], jawaban: 1, pembahasan: "Commenter bisa melihat dokumen dan menambahkan komentar, tanpa mengubah isi." },
        { soal: "Izin akses Editor artinya pengguna bisa...", opsi: ["Hanya melihat dokumen", "Melihat dan mengubah dokumen", "Hanya memberi komentar", "Tidak bisa mengakses dokumen"], jawaban: 1, pembahasan: "Editor memiliki izin penuh untuk melihat sekaligus mengubah isi dokumen." },
        { soal: "Contoh aplikasi untuk membuat dokumen/tulisan bersama adalah...", opsi: ["Google Docs", "Google Sheets", "Google Slides", "Google Maps"], jawaban: 0, pembahasan: "Google Docs digunakan untuk membuat dan mengedit dokumen tulisan bersama." },
        { soal: "Contoh aplikasi untuk mengolah data dalam tabel adalah...", opsi: ["Google Docs", "Google Sheets", "Google Slides", "Google Meet"], jawaban: 1, pembahasan: "Google Sheets digunakan untuk mengolah data dalam bentuk tabel." },
        { soal: "Contoh aplikasi untuk membuat presentasi bersama adalah...", opsi: ["Google Docs", "Google Sheets", "Google Slides", "Gmail"], jawaban: 2, pembahasan: "Google Slides digunakan untuk membuat presentasi, misalnya untuk tugas kelompok." },
        { soal: "Ketika tugas kelompok dikerjakan bersama secara real-time, izin akses yang tepat untuk semua anggota adalah...", opsi: ["Viewer", "Commenter", "Editor", "Tidak perlu izin akses"], jawaban: 2, pembahasan: "Karena semua anggota perlu menulis dan mengubah dokumen, izin Editor paling tepat." },
        { soal: "Jika dokumen hanya perlu diperiksa guru tanpa diubah, sebaiknya diberi akses...", opsi: ["Editor", "Viewer atau Commenter", "Owner", "Admin penuh"], jawaban: 1, pembahasan: "Viewer atau Commenter cukup untuk memeriksa dokumen tanpa mengubah isinya." },
        { soal: "Perbedaan Comment dan Suggestion Mode adalah...", opsi: ["Keduanya sama persis", "Comment sekadar masukan, Suggestion Mode mengusulkan perubahan langsung pada teks", "Comment hanya bisa dipakai guru", "Suggestion Mode menghapus dokumen"], jawaban: 1, pembahasan: "Comment memberi masukan tanpa mengubah teks, sedangkan Suggestion Mode mengusulkan perubahan langsung pada teks." },
        { soal: "Manfaat kolaborasi daring dalam tugas kelompok adalah...", opsi: ["Hanya satu orang yang bisa mengerjakan", "Banyak orang bisa mengerjakan satu dokumen bersama-sama", "Dokumen harus dicetak dulu", "Tidak bisa diakses dari HP"], jawaban: 1, pembahasan: "Kolaborasi daring memungkinkan banyak orang mengerjakan satu dokumen secara bersamaan." },
        { soal: "Mengapa penting memilih izin akses yang tepat pada dokumen bersama?", opsi: ["Supaya dokumen tetap aman dan sesuai kebutuhan tiap orang", "Supaya dokumen otomatis terhapus", "Supaya tidak ada yang bisa membuka dokumen", "Karena tidak berpengaruh apa-apa"], jawaban: 0, pembahasan: "Izin akses yang tepat menjaga keamanan dan kesesuaian peran setiap anggota terhadap dokumen." },
        { soal: "Jika ingin mengingatkan teman tanpa langsung mengubah tulisannya, fitur yang tepat digunakan adalah...", opsi: ["Comment", "Menghapus tulisan teman", "Mengunci dokumen", "Mengganti izin akses menjadi Viewer"], jawaban: 0, pembahasan: "Comment cocok untuk memberi pengingat atau masukan tanpa langsung mengubah isi tulisan." },
        { soal: "Google Docs, Sheets, dan Slides adalah contoh aplikasi untuk...", opsi: ["Kolaborasi dokumen daring", "Bermain gim", "Menonton video", "Mengedit foto"], jawaban: 0, pembahasan: "Ketiganya adalah aplikasi Google yang mendukung kolaborasi dokumen secara daring." },
        { soal: "Salah satu keuntungan dokumen daring dibanding dokumen kertas adalah...", opsi: ["Bisa dikerjakan bersama secara bersamaan dari mana saja", "Harus selalu dicetak dulu", "Tidak bisa diedit sama sekali", "Hanya bisa dibuka satu orang dalam satu waktu"], jawaban: 0, pembahasan: "Dokumen daring memungkinkan banyak orang mengerjakannya bersama secara bersamaan, dari mana saja." },
        { soal: "Ketika anggota kelompok hanya perlu melihat hasil akhir dokumen tanpa mengubahnya, izin yang cocok adalah...", opsi: ["Editor", "Viewer", "Owner", "Admin"], jawaban: 1, pembahasan: "Viewer cukup diberikan jika anggota hanya perlu melihat tanpa mengubah dokumen." }
      ]
    },

    /* ---------------- SUBBAB 8 ---------------- */
    {
      id: "rapat-daring",
      judul: "Rapat Daring & Video Conference",
      tujuan: "Menerapkan etika saat mengikuti rapat daring atau video conference.",
      waktu: "15 menit",
      konten: [
        { type: "paragraf", text: "Video conference adalah kegiatan pertemuan lewat internet dengan suara dan/atau video, misalnya Google Meet atau Zoom. Bisa dipakai untuk pembelajaran, rapat organisasi, diskusi kelompok, presentasi, dan pertemuan jarak jauh." },
        { type: "contoh", title: "Fitur dasar video conference", items: [
          "Mute/Unmute — mematikan/menyalakan mikrofon",
          "Camera — menyalakan/mematikan kamera",
          "Share Screen — menampilkan layar ke peserta lain"
        ]},
        { type: "dua-kolom", judulKiri: "✅ Sebelum & saat rapat", kiri: [
            "Masuk tepat waktu",
            "Periksa koneksi, mikrofon & kamera",
            "Matikan mikrofon saat tidak bicara",
            "Dengarkan orang yang sedang berbicara",
            "Gunakan bahasa yang sopan"
          ], judulKanan: "❌ Sebaiknya dihindari", kanan: [
            "Memotong pembicaraan orang lain",
            "Kamera menyala tapi berpakaian tidak sopan",
            "Latar belakang yang mengganggu"
          ]
        }
      ],
      rangkuman: [
        "Video conference = pertemuan daring dengan suara/video.",
        "Fitur dasar: Mute/Unmute, Camera, Share Screen.",
        "Etika penting: tepat waktu, matikan mic saat tidak bicara, sopan, dan fokus."
      ],
      praktik: {
        type: "mcq",
        judul: "Yuk Coba: Etika Rapat Daring",
        pertanyaan: "Saat kamu tidak sedang berbicara dalam rapat daring, sebaiknya mikrofonmu dalam kondisi...",
        opsi: ["Unmute (menyala) terus", "Mute (dimatikan)", "Dimatikan HP-nya", "Volume dimaksimalkan"],
        jawabanBenar: 1,
        feedbackBenar: "Betul! Mematikan mikrofon (mute) saat tidak berbicara membantu mengurangi suara bising bagi peserta lain.",
        feedbackSalah: "Belum tepat. Saat tidak berbicara, sebaiknya mikrofon di-mute supaya tidak mengganggu peserta lain dengan suara latar."
      },
      quiz: [
        { soal: "Fitur untuk menampilkan layar HP/laptop ke peserta rapat lain disebut...", opsi: ["Mute", "Share Screen", "Camera Off", "Chat"], jawaban: 1, pembahasan: "Share Screen digunakan untuk menampilkan layar perangkat kita ke peserta lain." },
        { soal: "Sikap yang tepat saat orang lain sedang berbicara dalam rapat daring adalah...", opsi: ["Memotong pembicaraan", "Mendengarkan dengan baik", "Mematikan kamera dan pergi", "Berbicara bersamaan"], jawaban: 1, pembahasan: "Mendengarkan tanpa memotong pembicaraan adalah etika dasar dalam rapat, termasuk rapat daring." },
        { soal: "Video conference adalah kegiatan pertemuan lewat internet dengan...", opsi: ["Surat kertas", "Suara dan/atau video", "Papan tulis kapur", "Buku catatan"], jawaban: 1, pembahasan: "Video conference adalah pertemuan lewat internet yang menggunakan suara dan/atau video." },
        { soal: "Contoh aplikasi video conference adalah...", opsi: ["Google Meet atau Zoom", "Microsoft Word", "Google Sheets", "Adobe Photoshop"], jawaban: 0, pembahasan: "Google Meet dan Zoom adalah contoh aplikasi yang umum dipakai untuk video conference." },
        { soal: "Fitur Mute digunakan untuk...", opsi: ["Menyalakan kamera", "Mematikan mikrofon", "Menampilkan layar", "Mengundang peserta"], jawaban: 1, pembahasan: "Mute digunakan untuk mematikan mikrofon agar suara di sekitar kita tidak terdengar peserta lain." },
        { soal: "Fitur Unmute digunakan untuk...", opsi: ["Mematikan kamera", "Menyalakan mikrofon", "Mematikan layar", "Keluar dari rapat"], jawaban: 1, pembahasan: "Unmute digunakan untuk menyalakan kembali mikrofon saat kita ingin berbicara." },
        { soal: "Sebaiknya mikrofon dalam kondisi mute saat...", opsi: ["Sedang berbicara", "Tidak sedang berbicara", "Rapat baru dimulai", "Kamera menyala"], jawaban: 1, pembahasan: "Mematikan mikrofon saat tidak berbicara membantu mengurangi suara bising bagi peserta lain." },
        { soal: "Sebelum rapat daring dimulai, sebaiknya kita...", opsi: ["Langsung tidur", "Memeriksa koneksi, mikrofon, dan kamera", "Mematikan semua perangkat", "Mengabaikan undangan rapat"], jawaban: 1, pembahasan: "Memeriksa koneksi, mikrofon, dan kamera membantu rapat berjalan lancar tanpa kendala teknis." },
        { soal: "Sikap yang sebaiknya dihindari saat rapat daring adalah...", opsi: ["Mendengarkan dengan baik", "Memotong pembicaraan orang lain", "Menggunakan bahasa sopan", "Masuk tepat waktu"], jawaban: 1, pembahasan: "Memotong pembicaraan orang lain dianggap tidak sopan dan sebaiknya dihindari saat rapat daring." },
        { soal: "Video conference dapat digunakan untuk kegiatan berikut, KECUALI...", opsi: ["Pembelajaran daring", "Rapat organisasi", "Diskusi kelompok", "Menulis surat kertas"], jawaban: 3, pembahasan: "Menulis surat kertas adalah kegiatan manual, bukan bagian dari video conference." },
        { soal: "Etika penting yang perlu diterapkan saat rapat daring adalah...", opsi: ["Masuk tepat waktu dan berbahasa sopan", "Datang terlambat tanpa alasan", "Berbicara sambil memotong orang lain", "Mematikan kamera tanpa alasan jelas"], jawaban: 0, pembahasan: "Masuk tepat waktu dan menggunakan bahasa sopan adalah bagian penting dari etika rapat daring." },
        { soal: "Fitur Camera pada video conference digunakan untuk...", opsi: ["Menyalakan/mematikan tampilan video", "Merekam suara saja", "Menampilkan dokumen", "Mengirim pesan teks"], jawaban: 0, pembahasan: "Fitur Camera digunakan untuk menyalakan atau mematikan tampilan video kita ke peserta lain." },
        { soal: "Ketika kamera menyala dalam rapat daring, sebaiknya kita...", opsi: ["Berpakaian dan berlatar belakang sopan/rapi", "Memakai baju sembarangan", "Berada di tempat ramai dan berisik", "Mematikan suara sepenuhnya"], jawaban: 0, pembahasan: "Berpakaian dan berlatar belakang yang rapi menunjukkan sikap sopan saat kamera menyala." },
        { soal: "Mengapa penting mematikan mikrofon saat tidak berbicara dalam rapat daring?", opsi: ["Supaya tidak mengganggu peserta lain dengan suara latar", "Supaya baterai perangkat lebih awet", "Supaya rapat cepat selesai", "Supaya kamera otomatis mati"], jawaban: 0, pembahasan: "Mematikan mikrofon saat tidak berbicara mengurangi gangguan suara latar bagi peserta lain." },
        { soal: "Fitur untuk menunjukkan tampilan layar perangkat kepada peserta lain disebut...", opsi: ["Mute", "Share Screen", "Chat", "Record"], jawaban: 1, pembahasan: "Share Screen digunakan untuk menampilkan layar perangkat kita kepada peserta rapat lain." },
        { soal: "Salah satu manfaat video conference dalam pembelajaran adalah...", opsi: ["Memungkinkan pertemuan jarak jauh tetap berlangsung", "Menghalangi siswa untuk belajar", "Membuat proses belajar terhenti total", "Hanya bisa dipakai satu kali"], jawaban: 0, pembahasan: "Video conference memungkinkan pembelajaran tetap berjalan meski peserta berada di tempat berbeda." },
        { soal: "Latar belakang yang mengganggu saat video conference sebaiknya...", opsi: ["Dibiarkan saja", "Dihindari atau diganti agar tidak mengalihkan perhatian", "Ditambah lebih ramai", "Tidak perlu diperhatikan"], jawaban: 1, pembahasan: "Latar belakang yang rapi dan tidak mengganggu membantu peserta lain fokus pada rapat." },
        { soal: "Sikap sopan saat rapat daring ditunjukkan dengan...", opsi: ["Mendengarkan dan tidak memotong pembicaraan", "Berbicara terus tanpa memberi kesempatan orang lain", "Meninggalkan rapat tanpa izin", "Mengabaikan pertanyaan peserta lain"], jawaban: 0, pembahasan: "Mendengarkan dengan baik dan tidak memotong pembicaraan adalah sikap sopan dalam rapat daring." },
        { soal: "Rapat daring bisa digunakan untuk kegiatan berikut, KECUALI...", opsi: ["Presentasi tugas kelompok", "Diskusi organisasi", "Pertemuan jarak jauh", "Menonton televisi bersama tanpa tujuan diskusi"], jawaban: 3, pembahasan: "Menonton televisi tanpa tujuan diskusi bukan termasuk fungsi rapat daring." },
        { soal: "Ketika koneksi internet bermasalah saat rapat daring, sikap yang tepat adalah...", opsi: ["Diam saja tanpa memberi tahu siapa pun", "Memberi tahu peserta lain dan mencoba memperbaiki koneksi", "Langsung keluar rapat tanpa penjelasan", "Menyalahkan peserta lain"], jawaban: 1, pembahasan: "Memberi tahu peserta lain tentang kendala koneksi menunjukkan sikap komunikatif dan sopan." }
      ]
    }
  ],

  bossChallenge: {
    judul: "👑 Boss Challenge: Krisis Email Kelompok",
    cerita: "Kelompokmu sedang menyiapkan tugas presentasi bersama. H-1 sebelum dikumpulkan, satu anggota kelompok (Rani) belum mengisi bagiannya di Google Docs, dan kalian butuh mengingatkan gurunya lewat email bahwa presentasi akan sedikit terlambat 1 hari.",
    tahapan: [
      {
        pertanyaan: "Kamu ingin menghubungi Rani lewat WhatsApp untuk menanyakan progres bagiannya. Pesan pembuka yang paling menerapkan netiket yang baik adalah...",
        opsi: ["\"Rani, mana bagian kamu?!\"", "\"Halo Rani, semoga sehat selalu. Boleh tanya, bagaimana progres bagian kamu di presentasi kita?\"", "(tidak perlu memakai salam apa pun)"],
        jawabanBenar: 1,
        penjelasan: "Pesan dengan salam dan bahasa sopan menunjukkan netiket yang baik, meski isinya menanyakan hal yang sama."
      },
      {
        pertanyaan: "Karena kamu menghubungi Rani, teman sekelasmu sendiri, gaya bahasa yang paling wajar digunakan dalam chat tersebut adalah...",
        opsi: ["Bahasa informal yang santai seperti biasa ke teman", "Bahasa formal seperti ke kepala sekolah", "Bahasa yang sama persis dengan email ke guru"],
        jawabanBenar: 0,
        penjelasan: "Karena Rani adalah teman dekat, bahasa informal yang santai dan sopan sudah wajar digunakan."
      },
      {
        pertanyaan: "Rani membalas hanya dengan \"oke\". Agar tidak menimbulkan kesalahpahaman, balasan lanjutan darimu yang paling baik adalah...",
        opsi: ["Diam saja dan berharap Rani mengerti sendiri", "Menjelaskan dengan jelas kapan bagian itu perlu selesai dan kenapa itu penting", "Membalas dengan nada marah karena jawabannya singkat"],
        jawabanBenar: 1,
        penjelasan: "Balasan yang jelas menghindari kesalahpahaman, dibanding membiarkan pesan singkat tanpa penjelasan lebih lanjut."
      },
      {
        pertanyaan: "Langkah berikutnya, kamu ingin memastikan semua anggota bisa ikut menulis & menyunting dokumen presentasi bersama di Google Docs. Izin akses apa yang kamu berikan kepada seluruh anggota kelompok?",
        opsi: ["Viewer", "Commenter", "Editor"],
        jawabanBenar: 2,
        penjelasan: "Karena semua anggota perlu menulis dan menyunting bersama, izin yang tepat adalah Editor."
      },
      {
        pertanyaan: "Kamu ingin mengingatkan Rani untuk mengisi bagiannya, tapi tidak mau langsung mengubah tulisannya. Fitur apa yang paling tepat kamu gunakan di Google Docs?",
        opsi: ["Menghapus tulisan Rani langsung", "Memberi Comment pada bagian yang kosong", "Mengunci dokumen"],
        jawabanBenar: 1,
        penjelasan: "Comment cocok untuk memberi masukan/pengingat tanpa langsung mengubah isi dokumen."
      },
      {
        pertanyaan: "Saat membaca bagian teman lain, kamu ingin mengusulkan perubahan kalimat tanpa langsung menggantinya begitu saja. Fitur apa yang paling tepat kamu gunakan?",
        opsi: ["Suggestion Mode", "Menghapus kalimat lama tanpa izin", "Mengubah izin akses teman menjadi Viewer"],
        jawabanBenar: 0,
        penjelasan: "Suggestion Mode memungkinkan usulan perubahan yang bisa diterima atau ditolak oleh pemilik dokumen."
      },
      {
        pertanyaan: "Kamu sudah selesai menulis pesan panjang untuk grup kelompok. Sebelum menekan tombol kirim, sebaiknya kamu...",
        opsi: ["Langsung kirim tanpa membaca ulang", "Membaca kembali pesan agar tidak menimbulkan salah paham", "Menghapus pesan dan tidak jadi mengirim"],
        jawabanBenar: 1,
        penjelasan: "Membaca ulang pesan sebelum dikirim membantu memastikan maksudnya jelas dan tidak disalahpahami."
      },
      {
        pertanyaan: "Sekarang kamu perlu menulis email ke guru untuk minta tambahan waktu 1 hari. Subjek email yang PALING TEPAT adalah...",
        opsi: ["\"Penting!!!\"", "\"Halo\"", "\"Permohonan Perpanjangan Waktu Tugas Kelompok – Kelas XI\""],
        jawabanBenar: 2,
        penjelasan: "Subjek yang jelas membantu guru langsung memahami maksud email tanpa harus membukanya dulu."
      },
      {
        pertanyaan: "Kalimat pembuka email ke guru yang paling tepat adalah...",
        opsi: ["\"Woy, Bu!\"", "\"Yth. Ibu Guru, selamat siang.\"", "(langsung menulis isi tanpa salam pembuka)"],
        jawabanBenar: 1,
        penjelasan: "Salam pembuka yang sopan seperti \"Yth. Ibu Guru, selamat siang.\" sesuai dengan struktur email formal."
      },
      {
        pertanyaan: "Bagian isi email yang menjelaskan alasan keterlambatan sebaiknya ditulis dengan cara...",
        opsi: ["Jelas, sopan, dan tidak bertele-tele", "Sepanjang mungkin agar terlihat serius", "Menyalahkan salah satu anggota kelompok"],
        jawabanBenar: 0,
        penjelasan: "Isi email formal sebaiknya langsung ke tujuan, sopan, dan tidak bertele-tele agar mudah dipahami guru."
      },
      {
        pertanyaan: "Setelah isi email selesai, bagian yang perlu ditulis untuk mengakhiri email dengan sopan adalah...",
        opsi: ["Salam penutup dan identitas, misalnya \"Hormat saya, [nama, kelas]\"", "Tidak perlu penutup apa pun", "Emoji tertawa"],
        jawabanBenar: 0,
        penjelasan: "Email formal diakhiri dengan salam penutup dan identitas pengirim agar jelas siapa yang mengirim."
      },
      {
        pertanyaan: "Kamu ingin melampirkan draf presentasi dalam bentuk PDF. Nama file yang paling tepat adalah...",
        opsi: ["fileasdf123.pdf", "Presentasi_Kelompok3_Kelas_XI.pdf", "dokumenTERBARUfixbanget.pdf", "file.pdf"],
        jawabanBenar: 1,
        penjelasan: "Nama file yang jelas menunjukkan isi dan identitas kelompok terlihat lebih profesional."
      },
      {
        pertanyaan: "Untuk melampirkan file PDF draf presentasi ke email, fitur yang kamu gunakan adalah...",
        opsi: ["CC", "BCC", "Attachment"],
        jawabanBenar: 2,
        penjelasan: "Attachment digunakan untuk melampirkan file seperti dokumen atau PDF pada email."
      },
      {
        pertanyaan: "Kamu ingin wali kelas juga tahu isi email tersebut, dan semua penerima boleh saling melihat siapa saja yang dikirimi. Fitur apa yang kamu gunakan?",
        opsi: ["CC", "BCC", "Attachment"],
        jawabanBenar: 0,
        penjelasan: "CC dipakai kalau semua penerima boleh saling tahu siapa saja yang menerima salinan email."
      },
      {
        pertanyaan: "Selain ke guru dan wali kelas, kamu juga ingin mengirim salinan email ke orang tuamu sendiri, tapi tidak ingin guru dan wali kelas tahu bahwa orang tuamu ikut menerima salinan. Fitur yang tepat digunakan adalah...",
        opsi: ["CC", "BCC", "To"],
        jawabanBenar: 1,
        penjelasan: "BCC digunakan agar penerima tambahan bisa menerima salinan tanpa diketahui penerima lain."
      },
      {
        pertanyaan: "Guru membalas dan mengajak kelompokmu menjelaskan situasi lewat Google Meet. Sebelum rapat dimulai, hal yang sebaiknya kamu lakukan adalah...",
        opsi: ["Memeriksa koneksi internet, mikrofon, dan kamera", "Langsung masuk tanpa persiapan", "Mematikan HP sepenuhnya"],
        jawabanBenar: 0,
        penjelasan: "Memeriksa koneksi, mikrofon, dan kamera sebelum rapat membantu pertemuan berjalan lancar."
      },
      {
        pertanyaan: "Saat giliran teman kelompokmu berbicara menjelaskan situasi ke guru, sikap yang tepat darimu adalah...",
        opsi: ["Ikut bicara bersamaan supaya cepat selesai", "Mute mikrofon dan mendengarkan", "Mematikan kamera dan meninggalkan rapat"],
        jawabanBenar: 1,
        penjelasan: "Mematikan mikrofon saat tidak berbicara dan mendengarkan adalah etika dasar rapat daring."
      },
      {
        pertanyaan: "Kamu ingin menunjukkan draf presentasi kalian langsung ke guru selama rapat berlangsung. Fitur yang kamu gunakan adalah...",
        opsi: ["Share Screen", "Mute", "BCC"],
        jawabanBenar: 0,
        penjelasan: "Share Screen digunakan untuk menampilkan layar perangkat kita, misalnya draf presentasi, kepada peserta lain."
      },
      {
        pertanyaan: "Karena rapat dilakukan dari rumah, hal yang perlu kamu perhatikan terkait tampilan kamera adalah...",
        opsi: ["Berpakaian dan berlatar belakang yang rapi/sopan", "Tidak perlu diperhatikan sama sekali", "Sengaja memilih latar belakang yang ramai dan berisik"],
        jawabanBenar: 0,
        penjelasan: "Latar belakang dan pakaian yang rapi menunjukkan sikap sopan saat kamera menyala dalam rapat daring."
      },
      {
        pertanyaan: "Di akhir rapat, guru bertanya apakah kelompokmu sudah benar-benar siap menyelesaikan tugas. Balasan yang paling jujur, jelas, dan sopan adalah...",
        opsi: ["\"Sudah, Bu.\" (padahal masih ada yang belum selesai)", "Diam saja tanpa menjawab", "\"Sebagian besar sudah selesai, Bu. Kami hanya butuh tambahan waktu 1 hari untuk menyelesaikan bagian Rani.\""],
        jawabanBenar: 2,
        penjelasan: "Balasan yang jujur dan jelas menunjukkan tanggung jawab kelompok sekaligus etika membalas pesan yang baik."
      }
    ],
    pesanSelesai: "🏆 Selamat! Kamu berhasil menyelesaikan Boss Challenge dan membuktikan bisa menerapkan seluruh materi Komunikasi Digital & Netiket dalam situasi nyata!"
  }
};

/* Jangan ubah baris di bawah ini */
if (typeof window !== "undefined") window.DEFAULT_MATERI = DEFAULT_MATERI;
