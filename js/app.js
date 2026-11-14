/**
 * Single-Page Web Portfolio - Static View Only
 * Minimalist White & Sky Blue Theme
 * ICT Student: Tanakrit Thippawat (Sripatum University)
 */

const STORAGE_KEYS = {
  THEME: 'spu_portfolio_theme_v3',
  LANG: 'spu_portfolio_lang'
};

const AppData = {
  // ตั้งค่าเปิด/ปิดการแสดงผลแต่ละแท็บ
  sectionsVisibility: {
    about: true,          // ข้อมูลส่วนตัว
    education: true,      // ประวัติการศึกษา
    skills: true,         // ทักษะความสามารถ
    experience: true,     // ส่วนประสบการณ์ทำงาน
    projects: true,       // ผลงานของฉัน
    certifications: true, // การฝึกอบรม & ใบรับรอง
    contact: true         // ติดต่อฉัน
  },

  profile: {
    nameTh: "นาย ธนกฤต ทิพวัฒน์",
    nameEn: "Tanakrit Thippawat",
    titleTh: "นักศึกษา ICT",
    titleEn: "ICT Student",
    universityTh: "มหาวิทยาลัยศรีปทุม (วิทยาเขตบางเขน)",
    universityEn: "Sripatum University (Bangkhen Campus)",
    facultyTh: "คณะเทคโนโลยีสารสนเทศ",
    facultyEn: "Faculty of Information Technology",
    majorTh: "สาขาเทคโนโลยีสารสนเทศและการสื่อสาร (ICT)",
    majorEn: "Information and Communication Technology (ICT)",
    gpax: "3.56",
    email: "tanakrit.thi@spumail.net",
    personalEmail: "tlekung2006tk@gmail.com",
    phone: "093-130-0571",
    locationTh: "กรุงเทพมหานคร, ประเทศไทย",
    locationEn: "Bangkok, Thailand",
    bioTh: "นักศึกษาชั้นปีที่ 2 สาขาเทคโนโลยีสารสนเทศและการสื่อสาร (ICT) มหาวิทยาลัยศรีปทุม มีความมุ่งมั่นในการพัฒนาเว็บแอปพลิเคชันที่สะอาดตา ทันสมัย และตอบโจทย์ผู้ใช้งาน เชี่ยวชาญด้าน Frontend และ Full-Stack Web Development พร้อมเปิดรับโอกาสในการร่วมงานและสหกิจศึกษา",
    bioEn: "2nd-year ICT student at Sripatum University (Expected Graduation 2028) with a strong commitment to crafting clean, minimalist, and responsive web applications. Passionate about Frontend & Full-Stack engineering, modern UI/UX design, and ready for cooperative education and junior software engineer opportunities.",
    avatar: "image/1.jpg",
    github: "https://github.com/tanakrit-dev",
    instagram: "https://www.instagram.com/t1e_kun9/",
    facebook: "https://www.facebook.com/thanakrit.tipawat",
    linkedin: "https://linkedin.com/in/tanakrit-dev"
  },
  education: [
    {
      id: "edu-1",
      degreeTh: "ปริญญาตรี",
      degreeEn: "Bachelor's Degree",
      majorTh: "สาขาเทคโนโลยีสารสนเทศและการสื่อสาร (ICT)",
      majorEn: "Information and Communication Technology (ICT)",
      institutionTh: "มหาวิทยาลัยศรีปทุม (วิทยาเขตบางเขน)",
      institutionEn: "Sripatum University (Bangkhen Campus)",
      years: "2025 - Present",
      gpax: "3.56",
      honorsTh: "🌟 เกียรตินิยม (Honors Track - GPAX 3.56)",
      honorsEn: "🌟 Honors Track (GPAX 3.56)",
      descriptionTh: "มุ่งเน้นการพัฒนาระบบสารสนเทศ สถาปัตยกรรมเว็บแอปพลิเคชัน การบริหารจัดการฐานข้อมูลขนาดใหญ่ ระบบคลาวด์คอมพิวติ้ง และความมั่นคงปลอดภัยไซเบอร์ ได้รับทุนการศึกษาผลการเรียนดีเด่นต่อเนื่อง",
      descriptionEn: "Focusing on Software Architecture, Web Application Development, Relational & NoSQL Databases, Cloud Infrastructure, and Information Security. Recipient of University Academic Excellence Scholarships.",
      coursework: ["Web Architecture", "Database Systems", "Cloud Computing", "OOP & Systems", "Network Security"]
    },
    {
      id: "edu-2",
      degreeTh: "มัธยมศึกษาตอนปลาย",
      degreeEn: "Upper Secondary School",
      majorTh: "แผนการเรียนอังกฤษ - ญี่ปุ่น",
      majorEn: "English - Japanese Program",
      institutionTh: "โรงเรียนเศรษฐบุตรบำเพ็ญ",
      institutionEn: "Setthabut Bamphen School",
      years: "2021 - 2024",
      gpax: "3.01",
      honorsTh: "นักเรียนผลการเรียนดี (GPAX 3.01)",
      honorsEn: "Good Academic Record (GPAX 3.01)",
      descriptionTh: "ศึกษาทักษะการสื่อสารภาษาอังกฤษและภาษาญี่ปุ่นเป็นหลัก รวมถึงเรียนรู้วัฒนธรรมและไวยากรณ์เบื้องต้น",
      descriptionEn: "Focused on English and Japanese communication skills, including basic grammar and cultural studies.",
      coursework: ["English Language", "Japanese Language", "Basic Communication", "Cultural Studies"]
    }
  ],
  skills: [
    {
      category: "languages", titleTh: "Programming Languages", titleEn: "Programming Languages", icon: "💻",
      items: [
        { name: "JavaScript (ES6+)", level: 50, color: "amber" }, { name: "TypeScript", level: 40, color: "sky" },
        { name: "Python", level: 45, color: "emerald" }, { name: "PHP / SQL", level: 40, color: "blue" },
        { name: "C# / Java", level: 40, color: "indigo" }
      ]
    },
    {
      category: "frontend", titleTh: "Frontend Development", titleEn: "Frontend Development", icon: "🎨",
      items: [
        { name: "HTML5 & CSS3 / Flex & Grid", level: 50, color: "sky" }, { name: "Tailwind CSS", level: 45, color: "sky" },
        { name: "Vue.js 3 / Pinia", level: 40, color: "emerald" }, { name: "React / Next.js Basics", level: 40, color: "blue" },
        { name: "Responsive & UI/UX Usability", level: 45, color: "sky" }
      ]
    },
    {
      category: "backend", titleTh: "Backend & Database", titleEn: "Backend & Database", icon: "⚙️",
      items: [
        { name: "Node.js / Express", level: 45, color: "emerald" }, { name: "RESTful API Architecture", level: 50, color: "sky" },
        { name: "MySQL / PostgreSQL", level: 45, color: "blue" }, { name: "Cloudflare D1 & SQLite", level: 40, color: "sky" },
        { name: "JWT & Authentication", level: 40, color: "rose" }
      ]
    },
    {
      category: "tools", titleTh: "Tools & Cloud Platform", titleEn: "Tools & Cloud Platform", icon: "🚀",
      items: [
        { name: "Git & GitHub (CI/CD)", level: 50, color: "rose" }, { name: "Cloudflare (Pages/Workers/R2)", level: 45, color: "sky" },
        { name: "Docker Containers", level: 40, color: "blue" }, { name: "Postman & API Testing", level: 50, color: "amber" },
        { name: "Figma UI/UX Prototyping", level: 45, color: "purple" }
      ]
    }
  ],
  experiences: [], // เว้นว่างไว้ตามคำขอ
  projects: [
    {
      id: "proj-1",
      titleTh: "House Work",
      titleEn: "House Work",
      category: "Frontend",
      descriptionTh: "เว็บไซต์แอปพลิเคชันระบบจัดการงานบ้านและพอร์ตโฟลิโอส่วนตัว พัฒนาด้วยระบบ Frontend รองรับการใช้งานแบบ Responsive และดีไซน์ที่ใช้งานง่าย",
      descriptionEn: "Housework management web application and personal portfolio developed with Frontend technologies, featuring responsive design and clean UI.",
      imageUrl: "image/4.jpg",
      tags: ["HTML5", "Tailwind CSS", "JavaScript", "GitHub"],
      demoUrl: "https://tanakritthi-collab.github.io/ict12267finalproject/",
      githubUrl: "https://github.com/tanakritthi-collab/ict12267finalproject"
    },
    {
      id: "proj-2",
      titleTh: "Badminton Arena",
      titleEn: "Badminton Arena",
      category: "Full-Stack",
      descriptionTh: "เว็บไซต์แอปพลิเคชันระบบจองสนามแบดมินตันออนไลน์ ยกระดับการจองสนามรูปแบบใหม่ ง่ายเพียงปลายนิ้วสัมผัส พร้อมระบบจัดการหลังบ้านครบวงจร",
      descriptionEn: "Badminton Arena online booking web application, elevating court reservations with modern UI and full-stack management systems.",
      imageUrl: "image/5.jpg",
      tags: ["HTML5", "Tailwind CSS", "JavaScript", "GitHub"],
      demoUrl: "https://tanakritthi-collab.github.io/Final_ict12367/",
      githubUrl: "https://github.com/tanakritthi-collab/Final_ict12367"
    }
  ],
  certificates: [
    {
      id: "cert-aws-1",
      titleTh: "AWS Academy Graduate - Generative AI Foundations",
      titleEn: "AWS Academy Graduate - Generative AI Foundations",
      issuerTh: "AWS Academy",
      issuerEn: "AWS Academy",
      issueDate: "Sep 14, 2026",
      credentialId: "2cd35433-3fd3-4d1d-a87e-cbace86d516e",
      credentialUrl: "https://www.credly.com/badges/2cd35433-3fd3-4d1d-a87e-cbace86d516e",
      pdfDataUrl: "image/2.jpg",
      pdfName: "AWS_Generative_AI_Foundations.jpg"
    },
    {
      id: "cert-2",
      titleTh: "AWS Academy & Certificate of Achievement",
      titleEn: "AWS Academy & Certificate of Achievement",
      issuerTh: "AWS Academy",
      issuerEn: "AWS Academy",
      issueDate: "2026",
      credentialId: "AWS-ACHIEVEMENT-2026",
      credentialUrl: "",
      pdfDataUrl: "image/6.jpg",
      pdfName: "AWS_Certificate_Of_Achievement.jpg"
    }
  ]
};

const TRANSLATIONS = {
  th: {
    navAbout: "ข้อมูลส่วนตัว", navEducation: "ประวัติการศึกษา", navSkills: "ทักษะความสามารถ",
    navExperience: "ประสบการณ์ทำงาน", navProjects: "ผลงานของฉัน", navCertificates: "การฝึกอบรม & ใบรับรอง",
    navContact: "ติดต่อฉัน",
    statusOpenForWork: "พร้อมเริ่มงาน / สหกิจศึกษา (Open for Work)", greeting: "สวัสดีครับ, ผม",
    heroRoleSubtitle: "นักศึกษา ICT คณะเทคโนโลยีสารสนเทศ มหาวิทยาลัยศรีปทุม",
    statGpaxLabel: "เกรดเฉลี่ยสะสม (GPAX)", statProjectsLabel: "ผลงานพัฒนาเว็บ",
    statCertsLabel: "ใบรับรอง & คอร์ส", statStatusLabel: "นักศึกษาชั้นปีที่", statStatusVal: "2",
    btnViewProjects: "ดูผลงานทั้งหมด",
    infoFullName: "ชื่อ-นามสกุล", infoFaculty: "คณะ / สาขาวิชา", infoGpax: "เกรดเฉลี่ยสะสม", infoLocation: "ที่อยู่ปัจจุบัน",
    educationTitle: "ประวัติการศึกษา", educationSubtitle: "การศึกษาและเกียรติประวัติทางวิชาการ มหาวิทยาลัยศรีปทุม",
    skillsTitle: "ทักษะความสามารถ", skillsSubtitle: "เครื่องมือ เทคโนโลยี และภาษาโปรแกรมมิ่งที่เชี่ยวชาญ",
    experienceTitle: "ประสบการณ์ทำงาน", experienceSubtitle: "เส้นทางการฝึกงาน งานพาร์ตไทม์ และฟรีแลนซ์",
    projectsTitle: "ผลงานของฉัน (My Projects)", projectsSubtitle: "โปรเจกต์พัฒนาระบบ เว็บแอปพลิเคชัน และผลงานเชิงปฏิบัติจริง",
    filterAll: "ทั้งหมด", filterFullStack: "Full-Stack", filterFrontend: "Frontend", filterBackend: "Backend",
    certsTitle: "การฝึกอบรม & ใบรับรอง", certsSubtitle: "ใบประกาศนียบัตรวิชาชีพและการฝึกอบรมความเชี่ยวชาญ",
    contactTitle: "ติดต่อฉัน (Contact)", contactSubtitle: "พร้อมเปิดรับโอกาสฝึกงาน งานพาร์ตไทม์ และการแลกเปลี่ยนเรียนรู้ด้านไอที",
    directContactTitle: "ข้อมูลการติดต่อโดยตรง", phoneLabel: "เบอร์โทรศัพท์", emailLabel: "อีเมลมหาวิทยาลัย",
    personalEmailLabel: "อีเมลส่วนตัว", socialLabel: "โซเชียลมีเดีย", sendMessageTitle: "ส่งข้อความถึงผม",
    formName: "ชื่อของคุณ", formEmail: "อีเมลของคุณ", formSubject: "หัวข้อข้อความ",
    formMessage: "ข้อความที่คุณต้องการติดต่อ...", formSubmitBtn: "ส่งข้อความ",
    btnEnlargePhoto: "ขยายรูป", btnViewPdf: "เปิดดูใบรับรอง", modalPdfViewerTitle: "ดูตัวอย่างใบรับรอง", btnOpenNewTab: "เปิดในแท็บใหม่", btnDownloadPdf: "ดาวน์โหลดรูปภาพ"
  },
  en: {
    navAbout: "About Me", navEducation: "Education", navSkills: "Skills",
    navExperience: "Experience", navProjects: "Projects", navCertifications: "Certifications",
    navContact: "Contact",
    statusOpenForWork: "Open for Full-Stack & Frontend Role", greeting: "Hello, I am",
    heroRoleSubtitle: "ICT Student at Faculty of Information Technology, Sripatum University",
    statGpaxLabel: "Cumulative GPAX", statProjectsLabel: "Web Projects",
    statCertsLabel: "Certifications", statStatusLabel: "Academic Year", statStatusVal: "2",
    btnViewProjects: "Explore Projects",
    infoFullName: "Full Name", infoFaculty: "Faculty / Major", infoGpax: "Cumulative GPAX", infoLocation: "Location",
    educationTitle: "Education Background", educationSubtitle: "Academic milestones & honors at Sripatum University",
    skillsTitle: "Technical Skills", skillsSubtitle: "Programming languages, frameworks, and developer toolchains",
    experienceTitle: "Work Experience", experienceSubtitle: "Internships, freelance projects, and university tutoring",
    projectsTitle: "Featured Projects", projectsSubtitle: "Real-world web applications, dashboards, and software solutions",
    filterAll: "All", filterFullStack: "Full-Stack", filterFrontend: "Frontend", filterBackend: "Backend",
    certsTitle: "Training & Certifications", certsSubtitle: "Professional credentials and accredited coursework",
    contactTitle: "Get In Touch", contactSubtitle: "Open for internship, part-time work, and IT collaborative opportunities",
    directContactTitle: "Direct Contact Information", phoneLabel: "Phone Number", emailLabel: "University Email",
    personalEmailLabel: "Personal Email", socialLabel: "Social Media", sendMessageTitle: "Send Me a Message",
    formName: "Your Name", formEmail: "Your Email", formSubject: "Subject",
    formMessage: "Your message...", formSubmitBtn: "Send Message",
    btnEnlargePhoto: "Enlarge Photo", btnViewPdf: "View Certificate", modalPdfViewerTitle: "Certificate Preview", btnOpenNewTab: "Open in New Tab", btnDownloadPdf: "Download Image"
  }
};

const AppState = {
  theme: localStorage.getItem(STORAGE_KEYS.THEME) || 'light',
  lang: localStorage.getItem(STORAGE_KEYS.LANG) || 'th',
  activeFilter: 'all'
};

function applyTheme(theme) {
  AppState.theme = theme; localStorage.setItem(STORAGE_KEYS.THEME, theme);
  const html = document.documentElement; const themeIcons = document.querySelectorAll('.theme-toggle-icon'); const themeTexts = document.querySelectorAll('.theme-toggle-text');
  if (theme === 'dark') {
    html.classList.add('dark'); themeIcons.forEach(icon => icon.textContent = '🌙'); themeTexts.forEach(txt => txt.textContent = AppState.lang === 'th' ? 'โหมดมืด (Dark)' : 'Dark Mode');
  } else {
    html.classList.remove('dark'); themeIcons.forEach(icon => icon.textContent = '☀️'); themeTexts.forEach(txt => txt.textContent = AppState.lang === 'th' ? 'โหมดสว่าง (Light)' : 'Light Mode');
  }
}

function toggleTheme() { applyTheme(AppState.theme === 'dark' ? 'light' : 'dark'); }

function applyLanguage(lang) {
  AppState.lang = lang; localStorage.setItem(STORAGE_KEYS.LANG, lang);
  const langText = document.getElementById('langToggleText'); if (langText) langText.textContent = lang === 'th' ? 'TH 🇹🇭' : 'EN 🇬🇧';
  const dict = TRANSLATIONS[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) el.innerHTML = dict[key];
  });
  applyTheme(AppState.theme); renderProfile(); renderEducation(); renderSkills(); renderExperiences(); renderProjects(AppState.activeFilter); renderCertificates();
}

function toggleLanguage() { applyLanguage(AppState.lang === 'th' ? 'en' : 'th'); }

function applySectionsVisibility() {
  const vis = AppData.sectionsVisibility;
  for (const [key, isVisible] of Object.entries(vis)) {
    const navItem = document.getElementById(`nav-${key}`);
    if (navItem) {
      if (isVisible) navItem.classList.remove('hidden');
      else navItem.classList.add('hidden');
    }
    const sectionItem = document.getElementById(key);
    if (sectionItem) {
      if (isVisible) sectionItem.classList.remove('hidden');
      else sectionItem.classList.add('hidden');
    }
  }
}

function toggleDesktopSidebar() {
  const sidebar = document.getElementById('sidebar');
  const mainContent = document.getElementById('mainContent');
  if (sidebar.classList.contains('-translate-x-full')) {
    sidebar.classList.remove('-translate-x-full');
    mainContent.classList.add('lg:ml-72');
    mainContent.classList.remove('lg:ml-0');
  } else {
    sidebar.classList.add('-translate-x-full');
    mainContent.classList.remove('lg:ml-72');
    mainContent.classList.add('lg:ml-0');
  }
}

function renderProfile() {
  const p = AppData.profile; const isTh = AppState.lang === 'th';
  ['heroName','sidebarName','detailName'].forEach(id => { if(document.getElementById(id)) document.getElementById(id).textContent = isTh ? p.nameTh : p.nameEn; });
  ['heroTitle','sidebarTitle'].forEach(id => { if(document.getElementById(id)) document.getElementById(id).textContent = isTh ? p.titleTh : p.titleEn; });
  if (document.getElementById('heroBio')) document.getElementById('heroBio').textContent = isTh ? p.bioTh : p.bioEn;
  if (document.getElementById('detailMajor')) document.getElementById('detailMajor').textContent = isTh ? p.majorTh : p.majorEn;
  if (document.getElementById('detailLocation')) document.getElementById('detailLocation').textContent = isTh ? p.locationTh : p.locationEn;
}

function openImageLightbox() {
  const modal = document.getElementById('imageLightboxModal'); const img = document.getElementById('lightboxImage');
  if (modal && img) { img.src = AppData.profile.avatar; modal.classList.remove('hidden'); modal.classList.add('flex'); }
}
function closeImageLightbox() {
  const modal = document.getElementById('imageLightboxModal'); if (modal) { modal.classList.add('hidden'); modal.classList.remove('flex'); }
}

function renderEducation() {
  const container = document.getElementById('educationGrid'); if (!container) return;
  const isTh = AppState.lang === 'th';
  if (AppData.education.length === 0) { container.innerHTML = `<div class="col-span-full py-12 text-center text-slate-400"><span class="text-4xl block mb-2">🎓</span><p>${isTh ? 'ยังไม่มีข้อมูล' : 'No records'}</p></div>`; return; }
  
  container.innerHTML = AppData.education.map(item => {
    const degree = isTh ? (item.degreeTh || item.degreeEn) : (item.degreeEn || item.degreeTh);
    const major = isTh ? (item.majorTh || item.majorEn) : (item.majorEn || item.majorTh);
    const inst = isTh ? (item.institutionTh || item.institutionEn) : (item.institutionEn || item.institutionTh);
    const honors = isTh ? (item.honorsTh || item.honorsEn) : (item.honorsEn || item.honorsTh);
    const desc = isTh ? (item.descriptionTh || item.descriptionEn) : (item.descriptionEn || item.descriptionTh);
    const tags = (item.coursework || []).map(c => `<span class="px-2 py-0.5 rounded-md text-[11px] bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">${c.trim()}</span>`).join('');
    
    return `
      <div class="glass-card rounded-3xl p-6 sm:p-7 border border-slate-200 dark:border-white/10 relative overflow-hidden group flex flex-col justify-between">
        <div>
          <div class="flex items-start justify-between gap-4 mb-4">
            <div class="w-14 h-14 rounded-2xl bg-gradient-to-tr from-sky-500 to-blue-600 text-white flex items-center justify-center text-2xl shadow-sm">🏛️</div>
            <div class="flex items-center gap-2">
              <span class="px-3 py-1 rounded-full text-xs font-bold bg-sky-50 dark:bg-sky-950/40 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800/40">${item.years}</span>
            </div>
          </div>
          <h3 class="text-xl font-bold text-slate-900 dark:text-white">${degree}</h3>
          <p class="text-base font-semibold text-gradient-primary mt-0.5">${major}</p>
          <p class="text-xs font-medium text-slate-500 dark:text-slate-400 mt-1">${inst}</p>
          ${honors ? `<div class="mt-4 p-3 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 text-emerald-700 flex items-center justify-between"><span class="text-xs font-bold">${honors}</span>${item.gpax ? `<span class="text-sm font-black">${item.gpax}</span>` : ''}</div>` : ''}
          <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-4 leading-relaxed">${desc}</p>
        </div>
        ${tags ? `<div class="mt-5 pt-4 border-t border-slate-200 dark:border-white/10"><span class="text-[11px] font-semibold text-slate-500 block mb-2">หลักสูตรเด่น / รายวิชา:</span><div class="flex flex-wrap gap-1.5">${tags}</div></div>` : ''}
      </div>`;
  }).join('');
}

function renderSkills() {
  const container = document.getElementById('skillsGrid'); if (!container) return;
  const isTh = AppState.lang === 'th';
  container.innerHTML = AppData.skills.map(cat => {
    const catTitle = isTh ? (cat.titleTh || cat.titleEn) : (cat.titleEn || cat.titleTh);
    const itemsHtml = (cat.items || []).map(skill => {
      const colorClass = skill.color === 'emerald' ? 'bg-emerald-500 text-emerald-500' : skill.color === 'amber' ? 'bg-amber-500 text-amber-500' : skill.color === 'blue' ? 'bg-blue-500 text-blue-500' : skill.color === 'rose' ? 'bg-rose-500 text-rose-500' : skill.color === 'indigo' ? 'bg-indigo-500 text-indigo-500' : skill.color === 'purple' ? 'bg-purple-500 text-purple-500' : 'bg-sky-500 text-sky-500';
      const barColor = colorClass.split(' ')[0]; const textColor = colorClass.split(' ')[1];
      return `<div class="py-1.5"><div class="flex items-center justify-between text-xs font-medium mb-1"><span class="text-slate-800 dark:text-slate-200">${skill.name}</span><span class="${textColor} font-bold">${skill.level}%</span></div><div class="h-1.5 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden"><div class="h-full ${barColor} rounded-full transition-all duration-500" style="width: ${skill.level}%"></div></div></div>`;
    }).join('');
    return `<div class="glass-card rounded-3xl p-6 border border-slate-200 dark:border-white/10 flex flex-col justify-between"><div><div class="flex items-center justify-between mb-4"><div class="w-12 h-12 rounded-2xl bg-sky-50 dark:bg-sky-950/30 text-sky-500 border border-sky-200 dark:border-sky-800/40 flex items-center justify-center text-2xl">${cat.icon || '💻'}</div></div><h3 class="text-base font-bold text-slate-900 dark:text-white mb-3">${catTitle}</h3><div class="space-y-2">${itemsHtml || `<p class="text-xs text-slate-400 py-3 text-center">ไม่มีข้อมูล</p>`}</div></div></div>`;
  }).join('');
}

function renderExperiences() {
  const container = document.getElementById('experiencesTimeline'); if (!container) return;
  const isTh = AppState.lang === 'th';
  if (AppData.experiences.length === 0) { container.innerHTML = `<div class="py-12 text-center text-slate-400"><span class="text-4xl block mb-2">💼</span><p>${isTh ? 'ยังไม่มีรายการประสบการณ์ทำงาน' : 'No experiences found'}</p></div>`; return; }
  
  container.innerHTML = AppData.experiences.map((item) => {
    const role = isTh ? (item.roleTh || item.roleEn) : (item.roleEn || item.roleTh);
    const company = isTh ? (item.companyTh || item.companyEn) : (item.companyEn || item.companyTh);
    const period = isTh ? (item.periodTh || item.periodEn) : (item.periodEn || item.periodTh);
    const type = isTh ? (item.typeTh || item.typeEn) : (item.typeEn || item.typeTh);
    const desc = isTh ? (item.descriptionTh || item.descriptionEn) : (item.descriptionEn || item.descriptionTh);
    const tagBadges = (item.tags || []).map(t => `<span class="px-2 py-0.5 rounded text-[11px] bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">${t.trim()}</span>`).join('');
    
    return `
      <div class="relative">
        <div class="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-sky-500 border-4 border-white dark:border-slate-900 shadow-sm timeline-dot"></div>
        <div class="glass-card rounded-3xl p-6 border border-slate-200 dark:border-white/10">
          <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
            <span class="px-3 py-1 rounded-full text-xs font-bold bg-sky-50 text-sky-700 border border-sky-200">${period}</span>
            <span class="text-xs font-semibold text-emerald-600">${type}</span>
          </div>
          <h3 class="text-lg font-bold text-slate-900 dark:text-white">${role}</h3><h4 class="text-sm font-semibold text-sky-600 dark:text-sky-400 mb-3">${company}</h4>
          <div class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed whitespace-pre-line">${desc}</div>
          ${tagBadges ? `<div class="mt-4 flex flex-wrap gap-1.5">${tagBadges}</div>` : ''}
        </div>
      </div>`;
  }).join('');
}

function renderProjects(filter = 'all') {
  AppState.activeFilter = filter; const container = document.getElementById('projectsGrid'); if (!container) return;
  const isTh = AppState.lang === 'th';
  document.querySelectorAll('.project-filter-btn').forEach(btn => {
    btn.className = btn.getAttribute('data-filter') === filter ? 'project-filter-btn px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all shadow-sm bg-sky-500 text-white' : 'project-filter-btn px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all text-slate-600 hover:bg-slate-200/80';
  });
  
  const filteredProjects = AppData.projects.filter(p => {
    if (filter === 'all') return true;
    return p.category.toLowerCase() === filter.toLowerCase();
  });

  if (filteredProjects.length === 0) {
    container.innerHTML = `<div class="col-span-full py-16 text-center text-slate-400"><span class="text-4xl block mb-2">📂</span><p>${isTh ? 'ไม่พบผลงานในหมวดหมู่นี้' : 'No projects found in this category'}</p></div>`;
    return;
  }

  container.innerHTML = filteredProjects.map(singleProject => {
    const title = isTh ? (singleProject.titleTh || singleProject.titleEn) : (singleProject.titleEn || singleProject.titleTh);
    const desc = isTh ? (singleProject.descriptionTh || singleProject.descriptionEn) : (singleProject.descriptionEn || singleProject.descriptionTh);
    const tagBadges = (singleProject.tags || []).map(t => `<span class="px-2.5 py-0.5 text-xs rounded-md bg-sky-50 text-sky-700 border border-sky-200 font-medium">${t.trim()}</span>`).join('');

    return `
      <div class="glass-card rounded-2xl overflow-hidden flex flex-col border border-slate-200/80 w-full">
        <div class="relative h-56 w-full overflow-hidden bg-slate-900">
          <img src="${singleProject.imageUrl || 'image/4.jpg'}" class="w-full h-full object-cover" onerror="this.src='image/1.jpg'" />
          <div class="absolute top-3 left-3"><span class="px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md bg-white/90 text-sky-600 border border-sky-200">${singleProject.category}</span></div>
        </div>
        <div class="p-6 flex-1 flex flex-col justify-between">
          <div>
            <h3 class="text-lg sm:text-xl font-bold text-slate-900 mb-2">${title}</h3>
            <p class="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed">${desc}</p>
            <div class="flex flex-wrap gap-1.5 mb-5">${tagBadges}</div>
          </div>
          <div class="pt-4 border-t flex flex-wrap items-center justify-start gap-3">
            ${singleProject.demoUrl ? `<a href="${singleProject.demoUrl}" target="_blank" rel="noreferrer" class="px-4 py-2 rounded-xl text-xs sm:text-sm font-bold bg-sky-500 hover:bg-sky-600 text-white shadow-sm transition-all flex items-center gap-1.5"><span>🔗</span><span>ดูหน้าเว็บ (Demo)</span></a>` : ''}
            ${singleProject.githubUrl ? `<a href="${singleProject.githubUrl}" target="_blank" rel="noreferrer" class="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-slate-800 hover:bg-slate-900 text-white transition-all flex items-center gap-1.5"><span>💻</span><span>ดูผลงานจริง (GitHub)</span></a>` : ''}
          </div>
        </div>
      </div>`;
  }).join('');
}

function renderCertificates() {
  const container = document.getElementById('certificatesGrid'); if (!container) return;
  const isTh = AppState.lang === 'th';
  if (AppData.certificates.length === 0) { container.innerHTML = `<div class="col-span-full py-16 text-center text-slate-400"><span class="text-4xl block mb-2">📜</span><p>${isTh ? 'ยังไม่มีรายการใบรับรอง' : 'No certificates available'}</p></div>`; return; }
  
  container.innerHTML = AppData.certificates.map(item => {
    const title = isTh ? (item.titleTh || item.titleEn) : (item.titleEn || item.titleTh);
    const issuer = isTh ? (item.issuerTh || item.issuerEn) : (item.issuerEn || item.issuerTh);
    const hasPdf = Boolean(item.pdfDataUrl);
    return `
      <div class="glass-card rounded-2xl p-6 flex flex-col justify-between border border-slate-200/80">
        <div><div class="flex items-start justify-between gap-3 mb-4"><div class="w-12 h-12 rounded-xl flex items-center justify-center bg-sky-50 text-sky-600 border border-sky-200 text-2xl shadow-sm">🎓</div><div class="text-right"><span class="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600">${item.issueDate || '2024'}</span></div></div>
        <h3 class="text-base font-bold text-slate-900 mb-1.5">${title}</h3><p class="text-xs font-medium text-slate-500 mb-3 flex items-center gap-1.5"><span>🏛️</span><span>${issuer}</span></p>
        ${item.credentialId ? `<div class="mb-4"><span class="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200">ID: ${item.credentialId}</span></div>` : ''}
        </div>
        <div class="pt-4 border-t flex items-center justify-between gap-2">
          ${hasPdf ? `<button onclick="viewCertificatePdf('${item.id}')" class="px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-sky-500 text-white flex items-center gap-1.5"><span>📄</span><span>เปิดดูใบรับรอง</span></button>` : `<span class="text-xs text-slate-400">ไม่มีไฟล์</span>`}
          ${item.credentialUrl ? `<a href="${item.credentialUrl}" target="_blank" rel="noreferrer" class="px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 transition-colors">Credential ↗</a>` : ''}
        </div>
      </div>`;
  }).join('');
}

function viewCertificatePdf(certId) {
  const cert = AppData.certificates.find(c => c.id === certId); if (!cert || !cert.pdfDataUrl) return;
  document.getElementById('pdfViewerTitle').textContent = cert.pdfName || cert.titleTh;
  document.getElementById('pdfViewerFrame').src = cert.pdfDataUrl;
  document.getElementById('pdfViewerModal').classList.remove('hidden'); document.getElementById('pdfViewerModal').classList.add('flex');
}
function closePdfModal() { document.getElementById('pdfViewerModal').classList.add('hidden'); document.getElementById('pdfViewerModal').classList.remove('flex'); document.getElementById('pdfViewerFrame').src = ''; }

function setupNavigation() {
  const sections = document.querySelectorAll('section[id]'); const navLinks = document.querySelectorAll('.nav-link');
  window.addEventListener('scroll', () => {
    let current = ''; const scrollY = window.pageYOffset;
    sections.forEach(section => { if (scrollY >= section.offsetTop - 120 && scrollY < section.offsetTop - 120 + section.offsetHeight) current = section.getAttribute('id'); });
    navLinks.forEach(link => { link.classList.remove('active'); if (link.getAttribute('href') === `#${current}`) link.classList.add('active'); });
  });
}

function toggleMobileSidebar() {
  const sidebar = document.getElementById('sidebar'); const overlay = document.getElementById('sidebarOverlay');
  if (sidebar.classList.contains('-translate-x-full')) { sidebar.classList.remove('-translate-x-full'); overlay.classList.add('hidden'); }
  else { sidebar.classList.add('-translate-x-full'); overlay.classList.remove('hidden'); }
}

document.addEventListener('DOMContentLoaded', () => {
  applyTheme(AppState.theme); 
  applyLanguage(AppState.lang); 
  applySectionsVisibility();
  setupNavigation();
  document.querySelectorAll('#sidebar .nav-link').forEach(link => { link.addEventListener('click', () => { if (window.innerWidth < 1024) toggleMobileSidebar(); }); });
});