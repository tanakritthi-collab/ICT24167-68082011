DROP TABLE IF EXISTS projects;
DROP TABLE IF EXISTS certificates;
DROP TABLE IF EXISTS experiences;
DROP TABLE IF EXISTS skills;
DROP TABLE IF EXISTS education;
DROP TABLE IF EXISTS profile;

CREATE TABLE profile (
  id TEXT PRIMARY KEY,
  name_th TEXT NOT NULL,
  name_en TEXT NOT NULL,
  title_th TEXT NOT NULL,
  title_en TEXT NOT NULL,
  university_th TEXT NOT NULL,
  university_en TEXT NOT NULL,
  faculty_th TEXT NOT NULL,
  faculty_en TEXT NOT NULL,
  major_th TEXT NOT NULL,
  major_en TEXT NOT NULL,
  gpax TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  location_th TEXT NOT NULL,
  location_en TEXT NOT NULL,
  bio_th TEXT NOT NULL,
  bio_en TEXT NOT NULL,
  avatar_url TEXT,
  github_url TEXT,
  linkedin_url TEXT,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE projects (
  id TEXT PRIMARY KEY,
  title_th TEXT NOT NULL,
  title_en TEXT,
  category TEXT NOT NULL CHECK(category IN ('Full-Stack', 'Frontend', 'Backend')),
  description_th TEXT NOT NULL,
  description_en TEXT,
  tags TEXT, 
  demo_url TEXT,
  github_url TEXT,
  image_url TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE certificates (
  id TEXT PRIMARY KEY,
  title_th TEXT NOT NULL,
  title_en TEXT,
  issuer_th TEXT NOT NULL,
  issuer_en TEXT,
  issue_date TEXT NOT NULL,
  credential_id TEXT,
  credential_url TEXT,
  pdf_name TEXT,
  pdf_url TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Seed Profile Only
INSERT INTO profile (
  id, name_th, name_en, title_th, title_en, university_th, university_en,
  faculty_th, faculty_en, major_th, major_en, gpax, email, phone,
  location_th, location_en, bio_th, bio_en, avatar_url, github_url, linkedin_url
) VALUES (
  'profile-1',
  'นาย ธนกฤต ทิพวัฒน์',
  'Tanakrit Thippawat',
  'นักศึกษา ICT & Junior Full-Stack Developer',
  'ICT Student & Junior Full-Stack Developer',
  'มหาวิทยาลัยศรีปทุม (วิทยาเขตบางเขน)',
  'Sripatum University (Bangkhen Campus)',
  'คณะเทคโนโลยีสารสนเทศ',
  'Faculty of Information Technology',
  'สาขาเทคโนโลยีสารสนเทศและการสื่อสาร (ICT)',
  'Information and Communication Technology (ICT)',
  '3.56',
  'tanakrit.thi@spu.ac.th',
  '093-130-0571',
  'กรุงเทพมหานคร, ประเทศไทย',
  'Bangkok, Thailand',
  'นักศึกษาชั้นปีที่ 2 สาขาเทคโนโลยีสารสนเทศและการสื่อสาร (ICT) มหาวิทยาลัยศรีปทุม มีความมุ่งมั่นในการพัฒนาเว็บแอปพลิเคชันที่สะอาดตา ทันสมัย และตอบโจทย์ผู้ใช้งาน เชี่ยวชาญด้าน Frontend และ Full-Stack Web Development',
  '2nd-year ICT student at Sripatum University passionate about Frontend & Full-Stack engineering with clean, minimalist design.',
  'image/1.jpg',
  'https://github.com/tanakrit-dev',
  'https://linkedin.com/in/tanakrit-dev'
);