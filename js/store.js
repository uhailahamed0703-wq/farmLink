/**
 * Farmlink Core Data Store & LocalStorage Persistence
 * Preloaded with realistic West Java agricultural B2B data
 */

const SEED_FARMERS = [
  {
    id: "F01",
    name: "Pak Asep Kurniawan",
    farmName: "Kebun Pasir Wangi Organic",
    avatar: "https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=600&q=80",
    coverImage: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=80",
    location: "Lembang, West Java",
    address: "Jl. Maribaya No. 88, Lembang, Kab. Bandung Barat",
    coordinates: [-6.8168, 107.6186],
    farmSize: "4.5 Hectares",
    farmingMethod: "Organic",
    verificationStatus: "Verified",
    rating: 4.9,
    reviewCount: 142,
    completedOrders: 580,
    phone: "+62 812-2345-6789",
    email: "asep.kurniawan@kebunpasirwangi.id",
    story: "Generasi ketiga petani hortikultura di lereng Tangkuban Perahu. Kami menerapkan pertanian regeneratif, pupuk kompos kandang fermentasi, serta air pegunungan alami tanpa pestisida kimia sintetis.",
    certifications: ["SNI 6729:2016 Organik Indonesia", "Inofice Organic Certified", "Good Agricultural Practices (GAP)"],
    specialties: ["Romaine Lettuce", "Cherry Tomatoes", "Kyuri", "Bayam Organik"],
    establishedYear: 2011
  },
  {
    id: "F02",
    name: "Ibu Siti Rahmawati",
    farmName: "Barokah Tani Makmur Highland",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80",
    coverImage: "https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=1200&q=80",
    location: "Pangalengan, West Java",
    address: "Desa Margamukti, Kec. Pangalengan, Kab. Bandung",
    coordinates: [-7.1725, 107.5684],
    farmSize: "6.2 Hectares",
    farmingMethod: "Pesticide-Free",
    verificationStatus: "Verified",
    rating: 4.8,
    reviewCount: 98,
    completedOrders: 430,
    phone: "+62 813-8877-6655",
    email: "siti.rahma@barokahtani.co.id",
    story: "Terletak pada ketinggian 1.450 mdpl dengan iklim sejuk berkabut. Khusus memproduksi sayuran dataran tinggi kualitas grade A untuk hotel berbintang dan supermarket premium di Bandung dan Jakarta.",
    certifications: ["Kementan Prima 2 (Bebas Residu Pestisida)", "Halal Supply Chain"],
    specialties: ["Kentang Granola", "Kol Hijau", "Wortel Brastagi", "Brokoli"],
    establishedYear: 2015
  },
  {
    id: "F03",
    name: "Pak Hendra Wijaya",
    farmName: "Sukabumi Agro Mandiri Hydroponic",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    coverImage: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=1200&q=80",
    location: "Cicurug, Sukabumi, West Java",
    address: "Jl. Raya Sukabumi KM 18, Cicurug, Sukabumi",
    coordinates: [-6.7821, 106.7812],
    farmSize: "2.8 Hectares",
    farmingMethod: "Organic",
    verificationStatus: "Verified",
    rating: 4.95,
    reviewCount: 164,
    completedOrders: 710,
    phone: "+62 821-4433-2211",
    email: "hendra@sukabumiagromandiri.com",
    story: "Spesialis smart greenhouse hidroponik berbasis IoT. Nutrisi presisi dan pengendalian iklim otomatis menghasilkan sayuran daun dengan tekstur renyah ekstra dan higienitas tinggi untuk restoran fine dining.",
    certifications: ["GlobalG.A.P Equivalent", "IndoGAP Hortikultura"],
    specialties: ["Butterhead Lettuce", "Kale Nero", "Pakcoy Hidroponik", "Mint"],
    establishedYear: 2018
  },
  {
    id: "F04",
    name: "Pak Dadang Hidayat",
    farmName: "Cianjur Sejahtera Organics",
    avatar: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&w=600&q=80",
    coverImage: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=1200&q=80",
    location: "Pacet, Cianjur, West Java",
    address: "Kampung Cipanas, Kec. Pacet, Kab. Cianjur",
    coordinates: [-6.7412, 107.0392],
    farmSize: "5.0 Hectares",
    farmingMethod: "Organic",
    verificationStatus: "Verified",
    rating: 4.85,
    reviewCount: 112,
    completedOrders: 490,
    phone: "+62 856-7890-1234",
    email: "dadang@cianjuroorganics.id",
    story: "Kemitraan bersama 35 petani lokal di kaki Gunung Gede Pangrango. Mengutamakan benih non-GMO dan konservasi tanah untuk menghasilkan komoditas tomat beefsteak dan sayuran segar berkualitas ekspor.",
    certifications: ["Sertifikat Organik LeSOS", "Registrasi Kebun Kementan"],
    specialties: ["Tomat Beefsteak", "Cucumbers", "Bawang Daun", "Cabe Keriting"],
    establishedYear: 2013
  },
  {
    id: "F05",
    name: "Pak Budi Santoso",
    farmName: "Subang Tropical Horticulture",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80",
    coverImage: "https://images.unsplash.com/photo-1592417817098-8f3d6ef23930?auto=format&fit=crop&w=1200&q=80",
    location: "Jalan Cagak, Subang, West Java",
    address: "Desa Kasomalang, Kec. Jalan Cagak, Kab. Subang",
    coordinates: [-6.6543, 107.6532],
    farmSize: "8.5 Hectares",
    farmingMethod: "Standard Farming",
    verificationStatus: "Verified",
    rating: 4.75,
    reviewCount: 86,
    completedOrders: 360,
    phone: "+62 818-0912-3456",
    email: "budi@subanghorti.com",
    story: "Perkebunan holtikultura skala besar dengan kapasitas panen harian hingga 5 ton. Berpengalaman memasok rantai pasok restoran masakan Padang, katering pabrik, dan jaringan minimarket modern.",
    certifications: ["Izin Usaha Hortikultura", "Sertifikat Bebas Residu Balai Karantina"],
    specialties: ["Cabe Merah Keriting", "Cabe Rawit Merah", "Bawang Merah", "Nanas Madu"],
    establishedYear: 2009
  },
  {
    id: "F06",
    name: "Ibu Maya Dewi",
    farmName: "Gunung Geulis Artisan Greenery",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    coverImage: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&w=1200&q=80",
    location: "Megamendung, Bogor, West Java",
    address: "Jl. Raya Puncak KM 72, Megamendung, Bogor",
    coordinates: [-6.6521, 106.9123],
    farmSize: "3.2 Hectares",
    farmingMethod: "Organic",
    verificationStatus: "Pending",
    rating: 4.9,
    reviewCount: 34,
    completedOrders: 110,
    phone: "+62 811-9876-5432",
    email: "maya@gununggeulisgreenery.com",
    story: "Fasilitas budidaya microgreens dan edible flowers untuk restoran hotel bintang 5 Jabodetabek. Panen di pagi hari dan langsung dikemas dengan rantai dingin bersuhu 8 derajat Celcius.",
    certifications: ["Sedang Pengajuan Organik SNI", "HACCP Food Safety"],
    specialties: ["Microgreens", "Edible Flowers", "Baby Spinach", "Basil"],
    establishedYear: 2021
  }
];

const SEED_PRODUCTS = [
  {
    id: "PRD-001",
    name: "Organic Romaine Lettuce",
    category: "Leafy Greens",
    farmerId: "F01",
    farmerName: "Pak Asep Kurniawan",
    farmName: "Kebun Pasir Wangi Organic",
    location: "Lembang, West Java",
    price: 18000,
    unit: "kg",
    availableStock: 650,
    minOrder: 10,
    harvestDate: "2026-11-06",
    expectedFreshDays: 7,
    farmingMethod: "Organic",
    verificationBadge: "Certified Organic",
    image: "https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556801712-76c8eb07bbc9?auto=format&fit=crop&w=800&q=80"
    ],
    rating: 4.9,
    reviewsCount: 48,
    isFeatured: true,
    description: "Selada Romaine organik dengan daun bergelombang renyah dan kadar air optimal. Ditanam di ketinggian 1.250 mdpl Lembang dengan air pegunungan dingin. Cocok untuk Caesar salad di restoran dan hotel bintang lima.",
    bulkTiers: [
      { minQty: 25, discountPercent: 5, price: 17100 },
      { minQty: 100, discountPercent: 12, price: 15840 }
    ],
    batchId: "BATCH-ROM-2026-081"
  },
  {
    id: "PRD-002",
    name: "Fresh Red Tomatoes (Beefsteak)",
    category: "Vegetables",
    farmerId: "F04",
    farmerName: "Pak Dadang Hidayat",
    farmName: "Cianjur Sejahtera Organics",
    location: "Pacet, Cianjur, West Java",
    price: 12000,
    unit: "kg",
    availableStock: 1200,
    minOrder: 20,
    harvestDate: "2026-11-05",
    expectedFreshDays: 10,
    farmingMethod: "Pesticide-Free",
    verificationBadge: "Pesticide-Free",
    image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1546470427-0d4db154ceb7?auto=format&fit=crop&w=800&q=80"
    ],
    rating: 4.85,
    reviewsCount: 64,
    isFeatured: true,
    description: "Tomat matang pohon dengan daging tebal, rasa asam manis seimbang, dan kadar brix tinggi. Dipanen tepat waktu subuh untuk menjaga keutuhan kulit buah selama transportasi logistik.",
    bulkTiers: [
      { minQty: 50, discountPercent: 6, price: 11280 },
      { minQty: 200, discountPercent: 15, price: 10200 }
    ],
    batchId: "BATCH-TOM-2026-042"
  },
  {
    id: "PRD-003",
    name: "Cabe Merah Keriting Segar",
    category: "Vegetables",
    farmerId: "F05",
    farmerName: "Pak Budi Santoso",
    farmName: "Subang Tropical Horticulture",
    location: "Jalan Cagak, Subang, West Java",
    price: 35000,
    unit: "kg",
    availableStock: 800,
    minOrder: 15,
    harvestDate: "2026-11-06",
    expectedFreshDays: 8,
    farmingMethod: "Standard Farming",
    verificationBadge: "Verified Farm",
    image: "https://images.unsplash.com/photo-1588252303782-cb80119abd6d?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1588252303782-cb80119abd6d?auto=format&fit=crop&w=800&q=80"
    ],
    rating: 4.9,
    reviewsCount: 52,
    isFeatured: true,
    description: "Cabe merah keriting super pedas beraroma tajam. Tekstur padat liat tidak mudah busuk saat disimpan di cold storage. Favorit utama restoran Padang, sambal kemasan, dan jaringan hotel.",
    bulkTiers: [
      { minQty: 50, discountPercent: 5, price: 33250 },
      { minQty: 150, discountPercent: 10, price: 31500 }
    ],
    batchId: "BATCH-CHL-2026-119"
  },
  {
    id: "PRD-004",
    name: "Kentang Granola Super Pangalengan",
    category: "Root Vegetables",
    farmerId: "F02",
    farmerName: "Ibu Siti Rahmawati",
    farmName: "Barokah Tani Makmur Highland",
    location: "Pangalengan, West Java",
    price: 16000,
    unit: "kg",
    availableStock: 2500,
    minOrder: 50,
    harvestDate: "2026-11-04",
    expectedFreshDays: 30,
    farmingMethod: "Pesticide-Free",
    verificationBadge: "Pesticide-Free",
    image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=800&q=80"
    ],
    rating: 4.95,
    reviewsCount: 79,
    isFeatured: true,
    description: "Kentang Granola ukuran seragam (Grade AL) tanah vulkanik Pangalengan. Daging kuning lembut, kandungan pati tinggi, ideal untuk kentang goreng French fries premium, mashed potato, dan rendang.",
    bulkTiers: [
      { minQty: 100, discountPercent: 8, price: 14720 },
      { minQty: 500, discountPercent: 14, price: 13760 }
    ],
    batchId: "BATCH-POT-2026-031"
  },
  {
    id: "PRD-005",
    name: "Wortel Manis Brastagi Origin",
    category: "Root Vegetables",
    farmerId: "F02",
    farmerName: "Ibu Siti Rahmawati",
    farmName: "Barokah Tani Makmur Highland",
    location: "Pangalengan, West Java",
    price: 14000,
    unit: "kg",
    availableStock: 1400,
    minOrder: 25,
    harvestDate: "2026-11-05",
    expectedFreshDays: 14,
    farmingMethod: "Pesticide-Free",
    verificationBadge: "Pesticide-Free",
    image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5c317?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1598170845058-32b9d6a5c317?auto=format&fit=crop&w=800&q=80"
    ],
    rating: 4.8,
    reviewsCount: 39,
    isFeatured: false,
    description: "Wortel oranye pekat berakar lurus tanpa retak, manis alami dan kaya beta-karoten. Telah dicuci bersih dengan air steril bertekanan sebelum pengemasan peti higienis.",
    bulkTiers: [
      { minQty: 50, discountPercent: 6, price: 13160 },
      { minQty: 200, discountPercent: 12, price: 12320 }
    ],
    batchId: "BATCH-CAR-2026-092"
  },
  {
    id: "PRD-006",
    name: "Kol Hijau Bulat Segar",
    category: "Vegetables",
    farmerId: "F02",
    farmerName: "Ibu Siti Rahmawati",
    farmName: "Barokah Tani Makmur Highland",
    location: "Pangalengan, West Java",
    price: 10000,
    unit: "kg",
    availableStock: 3000,
    minOrder: 30,
    harvestDate: "2026-11-05",
    expectedFreshDays: 14,
    farmingMethod: "Pesticide-Free",
    verificationBadge: "Pesticide-Free",
    image: "https://images.unsplash.com/photo-1594282486552-05b4d80fbb9f?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1594282486552-05b4d80fbb9f?auto=format&fit=crop&w=800&q=80"
    ],
    rating: 4.75,
    reviewsCount: 42,
    isFeatured: false,
    description: "Kubis bulat padat dengan bobot 1.2 - 1.8 kg per bonggol. Daun luar hijau segar membungkus lapisan dalam yang renyah dan manis. Sangat tahan banting dalam pengiriman antarkota.",
    bulkTiers: [
      { minQty: 100, discountPercent: 8, price: 9200 },
      { minQty: 500, discountPercent: 15, price: 8500 }
    ],
    batchId: "BATCH-CAB-2026-077"
  },
  {
    id: "PRD-007",
    name: "Mentimun Jepang (Kyuri Hidroponik)",
    category: "Vegetables",
    farmerId: "F03",
    farmerName: "Pak Hendra Wijaya",
    farmName: "Sukabumi Agro Mandiri Hydroponic",
    location: "Cicurug, Sukabumi, West Java",
    price: 9000,
    unit: "kg",
    availableStock: 950,
    minOrder: 15,
    harvestDate: "2026-11-06",
    expectedFreshDays: 10,
    farmingMethod: "Organic",
    verificationBadge: "Certified Organic",
    image: "https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?auto=format&fit=crop&w=800&q=80"
    ],
    rating: 4.9,
    reviewsCount: 61,
    isFeatured: true,
    description: "Kyuri tanpa biji dengan kulit hijau gelap berduri halus alami. Sangat garing dan berair sedikit asam segar, standar sushi resto Jepang, salad bar, dan sandwich hotel.",
    bulkTiers: [
      { minQty: 50, discountPercent: 6, price: 8460 },
      { minQty: 150, discountPercent: 12, price: 7920 }
    ],
    batchId: "BATCH-KYU-2026-015"
  },
  {
    id: "PRD-008",
    name: "Bayam Hijau Daun Lebar Organik",
    category: "Leafy Greens",
    farmerId: "F01",
    farmerName: "Pak Asep Kurniawan",
    farmName: "Kebun Pasir Wangi Organic",
    location: "Lembang, West Java",
    price: 15000,
    unit: "kg",
    availableStock: 420,
    minOrder: 10,
    harvestDate: "2026-11-06",
    expectedFreshDays: 5,
    farmingMethod: "Organic",
    verificationBadge: "Certified Organic",
    image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=800&q=80"
    ],
    rating: 4.88,
    reviewsCount: 31,
    isFeatured: false,
    description: "Bayam organik daun tebal bebas pestisida kimia. Dipanen bersama akarnya saat fajar untuk mempertahankan kesegaran klorofil. Bebas residu logam berat berkat tanah tersertifikasi.",
    bulkTiers: [
      { minQty: 25, discountPercent: 5, price: 14250 },
      { minQty: 75, discountPercent: 10, price: 13500 }
    ],
    batchId: "BATCH-SPN-2026-063"
  },
  {
    id: "PRD-009",
    name: "Brokoli Hijau Segar Lembang",
    category: "Vegetables",
    farmerId: "F01",
    farmerName: "Pak Asep Kurniawan",
    farmName: "Kebun Pasir Wangi Organic",
    location: "Lembang, West Java",
    price: 26000,
    unit: "kg",
    availableStock: 500,
    minOrder: 15,
    harvestDate: "2026-11-06",
    expectedFreshDays: 7,
    farmingMethod: "Organic",
    verificationBadge: "Certified Organic",
    image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=800&q=80"
    ],
    rating: 4.92,
    reviewsCount: 44,
    isFeatured: true,
    description: "Kuntum brokoli rapat berwarna hijau kebiruan segar tanpa ulat dan tanpa bercak kuning. Dipotong dengan tangkai pendek sehingga rendemen hasil masak maksimal bagi dapur restoran.",
    bulkTiers: [
      { minQty: 30, discountPercent: 6, price: 24440 },
      { minQty: 100, discountPercent: 14, price: 22360 }
    ],
    batchId: "BATCH-BRO-2026-088"
  },
  {
    id: "PRD-010",
    name: "Bawang Merah Brebes Grade A Super",
    category: "Root Vegetables",
    farmerId: "F05",
    farmerName: "Pak Budi Santoso",
    farmName: "Subang Tropical Horticulture",
    location: "Jalan Cagak, Subang, West Java",
    price: 32000,
    unit: "kg",
    availableStock: 1800,
    minOrder: 25,
    harvestDate: "2026-11-03",
    expectedFreshDays: 45,
    farmingMethod: "Standard Farming",
    verificationBadge: "Verified Farm",
    image: "https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?auto=format&fit=crop&w=800&q=80"
    ],
    rating: 4.85,
    reviewsCount: 57,
    isFeatured: false,
    description: "Bawang merah kering askip dengan warna merah menyala, siung padat bulat besar, aroma sangat wangi saat ditumis. Kadar air rendah sehingga daya simpan mencapai 2 bulan.",
    bulkTiers: [
      { minQty: 50, discountPercent: 5, price: 30400 },
      { minQty: 250, discountPercent: 12, price: 28160 }
    ],
    batchId: "BATCH-ONN-2026-104"
  },
  {
    id: "PRD-011",
    name: "Tomat Cherry Manis Hidroponik",
    category: "Fruits",
    farmerId: "F03",
    farmerName: "Pak Hendra Wijaya",
    farmName: "Sukabumi Agro Mandiri Hydroponic",
    location: "Cicurug, Sukabumi, West Java",
    price: 28000,
    unit: "kg",
    availableStock: 350,
    minOrder: 10,
    harvestDate: "2026-11-06",
    expectedFreshDays: 12,
    farmingMethod: "Organic",
    verificationBadge: "Certified Organic",
    image: "https://images.unsplash.com/photo-1546470427-0d4db154ceb7?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1546470427-0d4db154ceb7?auto=format&fit=crop&w=800&q=80"
    ],
    rating: 4.96,
    reviewsCount: 38,
    isFeatured: true,
    description: "Tomat cherry merah ranum dengan rasa manis meletup di lidah (brix 9.5). Dipetik bersama kelopaknya untuk kesegaran maksimal. Andalan plating restoran modern dan salad bar.",
    bulkTiers: [
      { minQty: 25, discountPercent: 7, price: 26040 },
      { minQty: 100, discountPercent: 15, price: 23800 }
    ],
    batchId: "BATCH-CHR-2026-056"
  },
  {
    id: "PRD-012",
    name: "Jamur Tiram Putih Segar Panen Pagi",
    category: "Organic Produce",
    farmerId: "F04",
    farmerName: "Pak Dadang Hidayat",
    farmName: "Cianjur Sejahtera Organics",
    location: "Pacet, Cianjur, West Java",
    price: 17000,
    unit: "kg",
    availableStock: 480,
    minOrder: 10,
    harvestDate: "2026-11-06",
    expectedFreshDays: 4,
    farmingMethod: "Organic",
    verificationBadge: "Certified Organic",
    image: "https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?auto=format&fit=crop&w=800&q=80"
    ],
    rating: 4.8,
    reviewsCount: 29,
    isFeatured: false,
    description: "Jamur tiram putih bersih berpayung tebal kenyal, tidak lembab becek. Ditanam pada baglog serbuk kayu sengon alami tanpa tambahan bahan pemutih atau pestisida.",
    bulkTiers: [
      { minQty: 20, discountPercent: 6, price: 15980 },
      { minQty: 80, discountPercent: 12, price: 14960 }
    ],
    batchId: "BATCH-MSH-2026-027"
  },
  {
    id: "PRD-013",
    name: "Cabe Rawit Merah Domba Super Pedas",
    category: "Vegetables",
    farmerId: "F05",
    farmerName: "Pak Budi Santoso",
    farmName: "Subang Tropical Horticulture",
    location: "Jalan Cagak, Subang, West Java",
    price: 45000,
    unit: "kg",
    availableStock: 620,
    minOrder: 10,
    harvestDate: "2026-11-06",
    expectedFreshDays: 10,
    farmingMethod: "Standard Farming",
    verificationBadge: "Verified Farm",
    image: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?auto=format&fit=crop&w=800&q=80"
    ],
    rating: 4.9,
    reviewsCount: 47,
    isFeatured: true,
    description: "Cabe rawit merah petik pohon tingkat kematangan 100%. Tingkat kepedasan tinggi (Scoville scale 60.000 SHU). Pilihan esensial untuk warung makan, franchise ayam geprek, dan resto seafood.",
    bulkTiers: [
      { minQty: 25, discountPercent: 5, price: 42750 },
      { minQty: 100, discountPercent: 11, price: 40050 }
    ],
    batchId: "BATCH-RWT-2026-095"
  },
  {
    id: "PRD-014",
    name: "Pakcoy Hijau Hidroponik Super",
    category: "Leafy Greens",
    farmerId: "F03",
    farmerName: "Pak Hendra Wijaya",
    farmName: "Sukabumi Agro Mandiri Hydroponic",
    location: "Cicurug, Sukabumi, West Java",
    price: 14000,
    unit: "kg",
    availableStock: 750,
    minOrder: 15,
    harvestDate: "2026-11-06",
    expectedFreshDays: 7,
    farmingMethod: "Organic",
    verificationBadge: "Certified Organic",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80"
    ],
    rating: 4.88,
    reviewsCount: 51,
    isFeatured: false,
    description: "Pakcoy hidroponik berbatang putih tebal renyah dan daun hijau segar tanpa ulat. Sangat higienis langsung siap potong untuk menu tumis jamur resto oriental dan kuah shabu-shabu.",
    bulkTiers: [
      { minQty: 30, discountPercent: 7, price: 13020 },
      { minQty: 120, discountPercent: 14, price: 12040 }
    ],
    batchId: "BATCH-PCY-2026-074"
  },
  {
    id: "PRD-015",
    name: "Artisan Culinary Herbs (Basil, Rosemary, Mint)",
    category: "Herbs",
    farmerId: "F06",
    farmerName: "Ibu Maya Dewi",
    farmName: "Gunung Geulis Artisan Greenery",
    location: "Megamendung, Bogor, West Java",
    price: 65000,
    unit: "kg",
    availableStock: 120,
    minOrder: 2,
    harvestDate: "2026-11-06",
    expectedFreshDays: 6,
    farmingMethod: "Organic",
    verificationBadge: "Under Verification",
    image: "https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?auto=format&fit=crop&w=800&q=80"
    ],
    rating: 4.95,
    reviewsCount: 22,
    isFeatured: true,
    description: "Herba kuliner segar dipanen per tangkai beraroma atsiri pekat. Dikemas dalam clamshell breathable khusus untuk menjaga kesegaran minyak esensial bagi dapur hotel dan restoran Italia.",
    bulkTiers: [
      { minQty: 5, discountPercent: 8, price: 59800 },
      { minQty: 20, discountPercent: 15, price: 55250 }
    ],
    batchId: "BATCH-HRB-2026-012"
  }
];

const SEED_BUYERS = [
  {
    id: "B01",
    name: "Chef Dewa Santika",
    businessName: "Resto Nusantara Gourmet Bandung",
    businessType: "Fine Dining Restaurant",
    email: "chef.dewa@nusantaragourmet.com",
    phone: "+62 811-2233-4455",
    address: "Jl. Riau No. 128, Cihapit, Bandung, Jawa Barat",
    monthlySpend: 48500000,
    ordersCount: 84,
    savedFarmerIds: ["F01", "F03", "F04"],
    preferredSlot: "05:00 - 08:00 WIB"
  },
  {
    id: "B02",
    name: "Pak Farhan Gunawan",
    businessName: "Grand Savoy Hotel & Resort Lembang",
    businessType: "5-Star Hotel & Banquet",
    email: "farhan.fnb@grandsavoyhotel.id",
    phone: "+62 812-9988-7766",
    address: "Jl. Kolonel Masturi KM 4.5, Lembang, Kab. Bandung Barat",
    monthlySpend: 112000000,
    ordersCount: 165,
    savedFarmerIds: ["F01", "F02", "F04"],
    preferredSlot: "06:00 - 09:00 WIB"
  },
  {
    id: "B03",
    name: "Ibu Ratna Paramitha",
    businessName: "Segar Mart Fresh Supermarket",
    businessType: "Supermarket Chain",
    email: "procurement@segarmartfresh.co.id",
    phone: "+62 813-7744-1122",
    address: "Jl. Buah Batu No. 210, Lengkong, Bandung",
    monthlySpend: 185000000,
    ordersCount: 230,
    savedFarmerIds: ["F02", "F05", "F01"],
    preferredSlot: "04:30 - 07:00 WIB"
  }
];

const SEED_ORDERS = [
  {
    id: "ORD-2026-881",
    batchId: "BATCH-ROM-2026-081",
    buyerId: "B01",
    buyerName: "Chef Dewa Santika",
    businessName: "Resto Nusantara Gourmet Bandung",
    farmerId: "F01",
    farmerName: "Pak Asep Kurniawan",
    farmName: "Kebun Pasir Wangi Organic",
    orderDate: "2026-11-06T06:15:00+07:00",
    deliveryDate: "2026-11-06T11:00:00+07:00",
    deliveryAddress: "Jl. Riau No. 128, Cihapit, Bandung",
    items: [
      {
        productId: "PRD-001",
        productName: "Organic Romaine Lettuce",
        price: 17100,
        quantity: 30,
        unit: "kg",
        total: 513000,
        image: "https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?auto=format&fit=crop&w=400&q=80"
      },
      {
        productId: "PRD-009",
        productName: "Brokoli Hijau Segar Lembang",
        price: 24440,
        quantity: 20,
        unit: "kg",
        total: 488800,
        image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=400&q=80"
      }
    ],
    subtotal: 1001800,
    deliveryFee: 45000,
    platformFee: 15000,
    totalAmount: 1061800,
    paymentMethod: "BCA Corporate Virtual Account",
    paymentStatus: "Paid",
    status: "In Transit", // Step 6 of 7
    statusHistory: [
      { status: "Order Placed", time: "2026-11-06 06:15 WIB", note: "Order confirmed by Resto Nusantara" },
      { status: "Farmer Accepted", time: "2026-11-06 06:40 WIB", note: "Pak Asep confirmed produce availability" },
      { status: "Preparing Harvest", time: "2026-11-06 07:00 WIB", note: "Morning harvest initiated at Lembang farm" },
      { status: "Harvest Completed", time: "2026-11-06 08:30 WIB", note: "Washed, cold-pack graded & quality tested (0.0 ppm pesticide)" },
      { status: "Picked Up", time: "2026-11-06 09:15 WIB", note: "Loaded into Farmlink Reefer Van #FL-04 (Temp: 6.8°C)" },
      { status: "In Transit", time: "2026-11-06 09:45 WIB", note: "Courier en route via Jl. Setiabudi Bandung" }
    ],
    driver: {
      name: "Agus Supriadi",
      phone: "+62 822-1144-8899",
      vehicle: "Daihatsu Gran Max Box Pendingin",
      licensePlate: "D 8421 FML",
      coldChainTemp: "6.8°C"
    },
    traceabilityQr: "https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=https://farmlink.id/traceability.html?batch=BATCH-ROM-2026-081"
  },
  {
    id: "ORD-2026-880",
    batchId: "BATCH-TOM-2026-042",
    buyerId: "B02",
    buyerName: "Pak Farhan Gunawan",
    businessName: "Grand Savoy Hotel & Resort Lembang",
    farmerId: "F04",
    farmerName: "Pak Dadang Hidayat",
    farmName: "Cianjur Sejahtera Organics",
    orderDate: "2026-11-05T14:20:00+07:00",
    deliveryDate: "2026-11-06T08:00:00+07:00",
    deliveryAddress: "Jl. Kolonel Masturi KM 4.5, Lembang",
    items: [
      {
        productId: "PRD-002",
        productName: "Fresh Red Tomatoes (Beefsteak)",
        price: 11280,
        quantity: 100,
        unit: "kg",
        total: 1128000,
        image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=400&q=80"
      }
    ],
    subtotal: 1128000,
    deliveryFee: 65000,
    platformFee: 20000,
    totalAmount: 1213000,
    paymentMethod: "Bank Mandiri Net-30",
    paymentStatus: "Paid",
    status: "Delivered", // Step 7 of 7
    statusHistory: [
      { status: "Order Placed", time: "2026-11-05 14:20 WIB", note: "Order placed" },
      { status: "Farmer Accepted", time: "2026-11-05 14:45 WIB", note: "Farmer accepted" },
      { status: "Preparing Harvest", time: "2026-11-05 16:00 WIB", note: "Harvest ready" },
      { status: "Harvest Completed", time: "2026-11-05 17:30 WIB", note: "Cold packed" },
      { status: "Picked Up", time: "2026-11-06 05:30 WIB", note: "Picked up" },
      { status: "In Transit", time: "2026-11-06 06:15 WIB", note: "In transit" },
      { status: "Delivered", time: "2026-11-06 07:45 WIB", note: "Delivered & signed by Sous Chef Indra" }
    ],
    driver: {
      name: "Rahmat Hidayat",
      phone: "+62 813-2211-9900",
      vehicle: "Toyota Hilux Cold Box",
      licensePlate: "F 7192 AB",
      coldChainTemp: "7.2°C"
    },
    traceabilityQr: "https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=https://farmlink.id/traceability.html?batch=BATCH-TOM-2026-042"
  },
  {
    id: "ORD-2026-882",
    batchId: "BATCH-POT-2026-031",
    buyerId: "B03",
    buyerName: "Ibu Ratna Paramitha",
    businessName: "Segar Mart Fresh Supermarket",
    farmerId: "F02",
    farmerName: "Ibu Siti Rahmawati",
    farmName: "Barokah Tani Makmur Highland",
    orderDate: "2026-11-06T08:00:00+07:00",
    deliveryDate: "2026-11-07T05:30:00+07:00",
    deliveryAddress: "Jl. Buah Batu No. 210, Lengkong, Bandung",
    items: [
      {
        productId: "PRD-004",
        productName: "Kentang Granola Super Pangalengan",
        price: 13760,
        quantity: 500,
        unit: "kg",
        total: 6880000,
        image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=400&q=80"
      },
      {
        productId: "PRD-006",
        productName: "Kol Hijau Bulat Segar",
        price: 9200,
        quantity: 200,
        unit: "kg",
        total: 1840000,
        image: "https://images.unsplash.com/photo-1594282486552-05b4d80fbb9f?auto=format&fit=crop&w=400&q=80"
      }
    ],
    subtotal: 8720000,
    deliveryFee: 120000,
    platformFee: 50000,
    totalAmount: 8890000,
    paymentMethod: "BCA Corporate Net-30",
    paymentStatus: "Pending Verification",
    status: "Preparing Harvest", // Step 3 of 7
    statusHistory: [
      { status: "Order Placed", time: "2026-11-06 08:00 WIB", note: "PO #SM-2026-99 issued" },
      { status: "Farmer Accepted", time: "2026-11-06 08:25 WIB", note: "Ibu Siti accepted 700kg produce requirement" },
      { status: "Preparing Harvest", time: "2026-11-06 09:10 WIB", note: "Field team harvesting in Blok B Kebun Pangalengan" }
    ],
    traceabilityQr: "https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=https://farmlink.id/traceability.html?batch=BATCH-POT-2026-031"
  },
  {
    id: "ORD-2026-883",
    batchId: "BATCH-CHL-2026-119",
    buyerId: "B01",
    buyerName: "Chef Dewa Santika",
    businessName: "Resto Nusantara Gourmet Bandung",
    farmerId: "F05",
    farmerName: "Pak Budi Santoso",
    farmName: "Subang Tropical Horticulture",
    orderDate: "2026-11-06T10:15:00+07:00",
    deliveryDate: "2026-11-07T06:00:00+07:00",
    deliveryAddress: "Jl. Riau No. 128, Cihapit, Bandung",
    items: [
      {
        productId: "PRD-003",
        productName: "Cabe Merah Keriting Segar",
        price: 33250,
        quantity: 50,
        unit: "kg",
        total: 1662500,
        image: "https://images.unsplash.com/photo-1588252303782-cb80119abd6d?auto=format&fit=crop&w=400&q=80"
      }
    ],
    subtotal: 1662500,
    deliveryFee: 50000,
    platformFee: 20000,
    totalAmount: 1732500,
    paymentMethod: "QRIS Instant B2B",
    paymentStatus: "Paid",
    status: "Farmer Accepted", // Step 2 of 7
    statusHistory: [
      { status: "Order Placed", time: "2026-11-06 10:15 WIB", note: "Order placed" },
      { status: "Farmer Accepted", time: "2026-11-06 10:35 WIB", note: "Pak Budi confirmed harvest readiness" }
    ],
    traceabilityQr: "https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=https://farmlink.id/traceability.html?batch=BATCH-CHL-2026-119"
  }
];

const SEED_SUBSCRIPTIONS = [
  {
    id: "SUB-001",
    buyerId: "B01",
    businessName: "Resto Nusantara Gourmet",
    title: "Weekly Fresh Salad Greens & Herbs",
    schedule: "Every Monday & Thursday",
    timeSlot: "05:30 - 07:30 WIB",
    status: "Active",
    items: [
      { productId: "PRD-001", name: "Organic Romaine Lettuce", qty: 25, unit: "kg", price: 17100 },
      { productId: "PRD-007", name: "Kyuri Hidroponik", qty: 15, unit: "kg", price: 8460 }
    ],
    totalWeekly: 1108800,
    nextDelivery: "Monday, Nov 9, 2026",
    autoRenewal: true
  },
  {
    id: "SUB-002",
    buyerId: "B01",
    businessName: "Resto Nusantara Gourmet",
    title: "Bi-Weekly Kitchen Core Produce (Tomat & Cabe)",
    schedule: "Every Tuesday & Friday",
    timeSlot: "06:00 - 08:00 WIB",
    status: "Active",
    items: [
      { productId: "PRD-002", name: "Fresh Red Tomatoes", qty: 40, unit: "kg", price: 11280 },
      { productId: "PRD-003", name: "Cabe Merah Keriting", qty: 20, unit: "kg", price: 33250 }
    ],
    totalWeekly: 2232400,
    nextDelivery: "Tuesday, Nov 10, 2026",
    autoRenewal: true
  }
];

// Memory/Storage Key Constants
const STORAGE_KEYS = {
  FARMERS: "farmlink_farmers_v1",
  PRODUCTS: "farmlink_products_v1",
  BUYERS: "farmlink_buyers_v1",
  ORDERS: "farmlink_orders_v1",
  SUBSCRIPTIONS: "farmlink_subscriptions_v1",
  CART: "farmlink_cart_v1",
  CURRENT_USER: "farmlink_current_user_v1"
};

class FarmlinkStore {
  constructor() {
    this.init();
  }

  init() {
    if (!localStorage.getItem(STORAGE_KEYS.FARMERS)) {
      this.resetDemoData();
    }
    // Set default demo user if not logged in (Default to Chef Dewa - Buyer)
    if (!localStorage.getItem(STORAGE_KEYS.CURRENT_USER)) {
      this.setCurrentUser({
        id: "B01",
        role: "buyer",
        name: "Chef Dewa Santika",
        businessName: "Resto Nusantara Gourmet Bandung",
        avatar: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=400&q=80"
      });
    }
  }

  resetDemoData() {
    localStorage.setItem(STORAGE_KEYS.FARMERS, JSON.stringify(SEED_FARMERS));
    localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(SEED_PRODUCTS));
    localStorage.setItem(STORAGE_KEYS.BUYERS, JSON.stringify(SEED_BUYERS));
    localStorage.setItem(STORAGE_KEYS.ORDERS, JSON.stringify(SEED_ORDERS));
    localStorage.setItem(STORAGE_KEYS.SUBSCRIPTIONS, JSON.stringify(SEED_SUBSCRIPTIONS));
    localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify([]));
    console.log("🌱 Farmlink seed data initialized successfully.");
  }

  // --- FARMERS API ---
  getFarmers() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEYS.FARMERS)) || [];
    } catch (e) {
      return SEED_FARMERS;
    }
  }

  getFarmerById(id) {
    return this.getFarmers().find(f => f.id === id) || null;
  }

  saveFarmer(farmerData) {
    const farmers = this.getFarmers();
    const index = farmers.findIndex(f => f.id === farmerData.id);
    if (index >= 0) {
      farmers[index] = { ...farmers[index], ...farmerData };
    } else {
      farmerData.id = farmerData.id || "F-" + Date.now();
      farmers.unshift(farmerData);
    }
    localStorage.setItem(STORAGE_KEYS.FARMERS, JSON.stringify(farmers));
    return farmerData;
  }

  verifyFarmer(farmerId, status = "Verified", notes = "") {
    const farmers = this.getFarmers();
    const farmer = farmers.find(f => f.id === farmerId);
    if (farmer) {
      farmer.verificationStatus = status;
      farmer.verificationNotes = notes;
      localStorage.setItem(STORAGE_KEYS.FARMERS, JSON.stringify(farmers));
    }
    return farmer;
  }

  // --- PRODUCTS API ---
  getProducts() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEYS.PRODUCTS)) || [];
    } catch (e) {
      return SEED_PRODUCTS;
    }
  }

  getProductById(id) {
    return this.getProducts().find(p => p.id === id) || null;
  }

  getProductsByFarmer(farmerId) {
    return this.getProducts().filter(p => p.farmerId === farmerId);
  }

  saveProduct(productData) {
    const products = this.getProducts();
    const index = products.findIndex(p => p.id === productData.id);
    if (index >= 0) {
      products[index] = { ...products[index], ...productData };
    } else {
      productData.id = productData.id || "PRD-" + Date.now().toString().slice(-6);
      productData.batchId = productData.batchId || "BATCH-" + Date.now().toString().slice(-8);
      products.unshift(productData);
    }
    localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(products));
    return productData;
  }

  deleteProduct(id) {
    let products = this.getProducts();
    products = products.filter(p => p.id !== id);
    localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(products));
  }

  // --- ORDERS API ---
  getOrders() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEYS.ORDERS)) || [];
    } catch (e) {
      return SEED_ORDERS;
    }
  }

  getOrderById(id) {
    return this.getOrders().find(o => o.id === id) || null;
  }

  getOrdersByBuyer(buyerId) {
    return this.getOrders().filter(o => o.buyerId === buyerId);
  }

  getOrdersByFarmer(farmerId) {
    return this.getOrders().filter(o => o.farmerId === farmerId);
  }

  createOrder(orderData) {
    const orders = this.getOrders();
    const newOrder = {
      id: "ORD-2026-" + Math.floor(100 + Math.random() * 900),
      batchId: orderData.batchId || "BATCH-" + Math.floor(1000 + Math.random() * 9000),
      orderDate: new Date().toISOString(),
      status: "Farmer Accepted",
      statusHistory: [
        { status: "Order Placed", time: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }) + " WIB", note: "Order placed by buyer" },
        { status: "Farmer Accepted", time: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }) + " WIB", note: "Farmer confirmed capacity" }
      ],
      paymentStatus: "Paid",
      driver: {
        name: "Bambang Wijaya",
        phone: "+62 812-4455-6677",
        vehicle: "Daihatsu Gran Max Box Pendingin",
        licensePlate: "D 7721 FAR",
        coldChainTemp: "6.5°C"
      },
      ...orderData
    };
    orders.unshift(newOrder);
    localStorage.setItem(STORAGE_KEYS.ORDERS, JSON.stringify(orders));

    // Deduct available stock from products
    const products = this.getProducts();
    if (newOrder.items && Array.isArray(newOrder.items)) {
      newOrder.items.forEach(item => {
        const prod = products.find(p => p.id === item.productId);
        if (prod) {
          prod.availableStock = Math.max(0, prod.availableStock - (item.quantity || 0));
        }
      });
      localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(products));
    }

    return newOrder;
  }

  updateOrderStatus(orderId, newStatus, note = "") {
    const orders = this.getOrders();
    const order = orders.find(o => o.id === orderId);
    if (order) {
      order.status = newStatus;
      if (!order.statusHistory) order.statusHistory = [];
      const timeStr = new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }) + " WIB";
      order.statusHistory.push({
        status: newStatus,
        time: timeStr,
        note: note || `Status updated to ${newStatus}`
      });
      localStorage.setItem(STORAGE_KEYS.ORDERS, JSON.stringify(orders));
    }
    return order;
  }

  // --- CART API ---
  getCart() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEYS.CART)) || [];
    } catch (e) {
      return [];
    }
  }

  addToCart(productId, qty = 10) {
    const cart = this.getCart();
    const product = this.getProductById(productId);
    if (!product) return cart;

    const existingIndex = cart.findIndex(item => item.productId === productId);
    if (existingIndex >= 0) {
      cart[existingIndex].quantity += qty;
    } else {
      cart.push({
        productId: product.id,
        productName: product.name,
        price: product.price,
        unit: product.unit,
        image: product.image,
        farmerId: product.farmerId,
        farmerName: product.farmerName,
        farmName: product.farmName,
        location: product.location,
        quantity: Math.max(qty, product.minOrder || 1)
      });
    }
    localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(cart));
    window.dispatchEvent(new CustomEvent('cart-updated', { detail: { cart } }));
    return cart;
  }

  updateCartQuantity(productId, quantity) {
    let cart = this.getCart();
    const item = cart.find(i => i.productId === productId);
    if (item) {
      if (quantity <= 0) {
        cart = cart.filter(i => i.productId !== productId);
      } else {
        item.quantity = quantity;
      }
    }
    localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(cart));
    window.dispatchEvent(new CustomEvent('cart-updated', { detail: { cart } }));
    return cart;
  }

  removeFromCart(productId) {
    let cart = this.getCart();
    cart = cart.filter(item => item.productId !== productId);
    localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(cart));
    window.dispatchEvent(new CustomEvent('cart-updated', { detail: { cart } }));
    return cart;
  }

  clearCart() {
    localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify([]));
    window.dispatchEvent(new CustomEvent('cart-updated', { detail: { cart: [] } }));
  }

  getCartTotal() {
    const cart = this.getCart();
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const deliveryFee = cart.length > 0 ? 45000 : 0;
    const platformFee = cart.length > 0 ? 15000 : 0;
    const total = subtotal + deliveryFee + platformFee;
    return { subtotal, deliveryFee, platformFee, total, itemCount: cart.length };
  }

  // --- SUBSCRIPTIONS API ---
  getSubscriptions() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEYS.SUBSCRIPTIONS)) || [];
    } catch (e) {
      return SEED_SUBSCRIPTIONS;
    }
  }

  createSubscription(subData) {
    const subs = this.getSubscriptions();
    const newSub = {
      id: "SUB-" + Math.floor(100 + Math.random() * 900),
      status: "Active",
      ...subData
    };
    subs.unshift(newSub);
    localStorage.setItem(STORAGE_KEYS.SUBSCRIPTIONS, JSON.stringify(subs));
    return newSub;
  }

  toggleSubscription(id) {
    const subs = this.getSubscriptions();
    const sub = subs.find(s => s.id === id);
    if (sub) {
      sub.status = sub.status === "Active" ? "Paused" : "Active";
      localStorage.setItem(STORAGE_KEYS.SUBSCRIPTIONS, JSON.stringify(subs));
    }
    return sub;
  }

  deleteSubscription(id) {
    let subs = this.getSubscriptions();
    subs = subs.filter(s => s.id !== id);
    localStorage.setItem(STORAGE_KEYS.SUBSCRIPTIONS, JSON.stringify(subs));
  }

  // --- AUTH & CURRENT USER API ---
  getCurrentUser() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEYS.CURRENT_USER)) || {
        id: "B01",
        role: "buyer",
        name: "Chef Dewa Santika",
        businessName: "Resto Nusantara Gourmet Bandung"
      };
    } catch (e) {
      return null;
    }
  }

  setCurrentUser(user) {
    localStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(user));
    window.dispatchEvent(new CustomEvent('user-changed', { detail: { user } }));
  }

  logout() {
    localStorage.removeItem(STORAGE_KEYS.CURRENT_USER);
    // fallback default demo user as guest or prompt login
    window.location.href = "auth.html";
  }
}

// Global store instance
window.store = new FarmlinkStore();

