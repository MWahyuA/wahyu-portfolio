// ============================================================
// Portfolio Data – Single source of truth for all content
// ============================================================

export interface Experience {
  id: string;
  position: string;
  company: string;
  workType: string;
  period: string;
  points: string[];
  link?: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: ("ui/ux" | "design" | "website")[];
  thumbnail: string;

  description: string;
  role: string;
  period: string;
  techStack: string[];
  points?: string[];
  links?: { label: string; url: string }[];
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  credentialUrl?: string;
  image: string;
}

export interface Profile {
  name: string;
  tagline: string;
  heroSubtitle: string;
  photo: string;
  bio: string;
  skills: {
    category: string;
    level: string;
    tools: string;
    iconSvg: string;
  }[];
  social: {
    linkedin: string;
    github: string;
    instagram: string;
    behance?: string;
    email: string;
  };
  cvUrl: string;
}

// ---------- Profile ----------
export const profile: Profile = {
  name: "Muhammad Wahyu Anggoro",
  tagline: "UI/UX Designer & Web Developer",
  heroSubtitle:
    "Building beautiful, functional, and impactful digital experiences.",
  photo: "/images/profile.webp",
  bio: "Computer Engineering Technology graduate from Politeknik Negeri Semarang <strong>(GPA 3.76/4.00)</strong> with <strong>1 year</strong> of work experience in UI/UX Design and Web Development. Passionate about building intuitive, user-centered digital solutions.",
  skills: [
    {
      category: "UI/UX Designer",
      level: "Proficient",
      tools: "Figma, Canva, Framer",
      iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M4 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H4zm16 4v2H4V7h16zm0 4v8h-6v-8h6zm-8 0v8H4v-8h8z"/></svg>'
    },
    {
      category: "Web Developer",
      level: "Intermediate",
      tools: "Laravel, Tailwind CSS, Bootstrap, Next JS",
      iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline><line x1="12" y1="4" x2="12" y2="20"></line></svg>'
    },
    {
      category: "Graphic Designer",
      level: "Intermediate",
      tools: "Canva, Corel Draw, Adobe After Effect",
      iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l10 6.5v7L12 22 2 15.5v-7L12 2z"></path><path d="M12 22v-6.5"></path><path d="M22 8.5l-10 6.5-10-6.5"></path><path d="M2 15.5l10-6.5 10 6.5"></path></svg>'
    },
    {
      category: "Machine Learning",
      level: "Elementary",
      tools: "Kaggle, Google Colab, Python",
      iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>'
    }
  ],
  social: {
    linkedin: "https://www.linkedin.com/in/muhammad-wahyu-anggoro/",
    github: "https://github.com/MWahyuA",
    instagram: "https://www.instagram.com/mwa_awang/",
    behance: "https://www.behance.net/MWahyuA",
    email: "mwahyua24@gmail.com",
  },
  cvUrl: "/CV_Muhammad-Wahyu-Anggoro_English.pdf",
};

// ---------- Experiences ----------
export const experiences: Experience[] = [
  {
    id: "exp-6",
    position: "UI/UX Designer",
    company: "Manifestasi",
    workType: "Freelance",
    period: "Sep 2025 – Present",
    points: [
      "Created a responsive marketplace website with 3 types of users (buyers, sellers, admin) called Khinaya & Developed a Khinaya mobile app design for ordering products (buyers) within 3 months, increasing projected user engagement.",
      "Redesigned the KSPS website to make it more modern and accessible, completing the UI overhaul in just 1.5 months.",
      "Delivered a comprehensive redesign of the PPID website for the Dinas Kelautan dan Perikanan Provinsi Jawa Tengah in under 2 months, improving public information discoverability and user intuitiveness.",
    ],
  },
  {
    id: "exp-5",
    position: "UI/UX Designer",
    company: "PT Violet Global Indonesia",
    workType: "Fulltime",
    period: "Oct 2025 – Mar 2026",
    points: [
      "Collaborating directly as part of a single team with the P3K KOMDIGI Jawa Tengah staff on various website and app development projects",
      "Designed a digital market dashboard and traditional market stock monitoring system named Pasarku (Responsive Website) in less than 2 months, streamlining the stock monitoring process.",
      "Developed a seamless mobile application design for Pasarku couriers, accelerating the delivery management workflow.",
      "Created a responsive website design for Omah Lestari, successfully bridging borrowers, developers, vendors, the Central Java Provincial Government, and bank employees into a unified 3-month project delivery.",
      "Designed an intuitive responsive website dashboard for Narativa, an advanced sentiment analysis tool, completed in 1 month.",
    ],
    link: "https://drive.google.com/file/d/1IV3IsjBAu1Ovp8A6vcuU1dRmhgP99_PV/view?usp=sharing",
  },
  {
    id: "exp-4",
    position: "UI/UX Designer",
    company: "PT Campus Digital Indonesia",
    workType: "Internship (MSIB Batch 7)",
    period: "Sep 2024 – Dec 2025",
    points: [
      "Became a project leader who led 5 members (2 UI/UX Designers & 3 Software Developers) in a project to create a consultation website called 'PersonalityTalk' and completed the project in 4 months.",
      "Redesigned the PersonalityTalk website from a static platform into an interactive and user-friendly experience.",
      "Integrated new features including Consultation, Courses, Mental Health Information, Mental Tests, and Articles.",
      "Executed the end-to-end design process, from competitor analysis and system architecture to desktop and mobile UI design.",
      "Created tailored page designs and access workflows for three distinct user roles: users, admins, and psychologists.",
      "Coordinated closely with the software development team to ensure design fidelity during website implementation.",
      "Conducted post-deployment testing and documented comprehensive testing results.",
    ],
    link: "https://drive.google.com/file/d/1HzsixdSFJh6nFhWCUQETYeYsdmz-AZ5F/view?usp=sharing",
  },
  {
    id: "exp-3",
    position: "UI/UX Designer",
    company: "PT Bisa Aritificial Indonesia",
    workType: "Studi Independen (MSIB Batch 6)",
    period: "Feb 2024 – Jul 2024",
    points: [
      "Demonstrated proficiency in UI/UX principles by successfully delivering multiple portfolios and final projects.",
      "Acquired a solid understanding of Design Thinking methodologies and the Business Model Canvas framework.",
      "Mastered the creation of gamification elements, design systems, user flows, wireframes, high-fidelity designs, and interactive prototypes.",
      "Developed content creation skills, focusing on video editing as well as 2D and 3D animation techniques.",
      "Sharpened soft skills by organizing webinars and serving as a guest speaker on UI/UX topics on two separate occasions.",
    ],
    link: "https://drive.google.com/file/d/17_dABA7X_ZfivgmHSEXlZo6iFnjCftZH/view?usp=sharing",
  },
  {
    id: "exp-2",
    position: "Research Development Workshop Division",
    company: "Polytechnic Computer Club",
    workType: "Student Activity Unit",
    period: "May 2023 – May 2024",
    points: [
      "Served as Chief Executive for the Techcomfest 2024 Competition, successfully managing a total of 252 participating teams.",
      "Served as Deputy Chairperson for the Techcomfest 2024 National Seminar, coordinating an event that attracted 41 registrants.",
      "Coordinated and supervised the Workshop Division along with its sub-departments, including Multimedia, Software, and Network.",
      "Provided strategic input, feedback, and recommendations to optimize the work programs of UKM PCC.",
    ],
    link: "https://drive.google.com/file/d/1B8ExyWyuUrLyWpBt2FuoB83QLmof6Jw6/view?usp=sharing",
  },
  {
    id: "exp-1",
    position: "Multimedia Staff",
    company: "Polytechnic Computer Club",
    workType: "Student Activity Unit",
    period: "May 2022 – May 2023",
    points: [
      "Responsible for leading the Workshop Division and enhancing the technical hard skills of UKM PCC members and administrators in the multimedia field.",
      "Served as a trainer for Training Basic 2022, delivering a UI/UX session to an audience of 40 participants.",
      "Served as a trainer for PCC Class 2023, conducting a UI/UX workshop for an audience of 32 participants.",
      "Produced 6 comprehensive portfolios specializing in multimedia design.",
    ],
    link: "https://drive.google.com/file/d/1TXV5XYbO9IKf7vtUnrL6ldooSAu3fjzl/view?usp=sharing",
  },

];

// ---------- Projects ----------
export const projects: Project[] = [
  {
    id: "proj-18",
    slug: "redesign-ppid-dkp-provjateng",
    title: "Redesign PPID DKP Prov Jateng",
    category: ["ui/ux"],
    thumbnail: "/images/projects/1.webp",

    description:
      "This project focuses on the digital transformation of Pejabat Pengelola Informasi dan Dokumentasi (PPID) platform operated by the Dinas Kelautan & Perikanan (DKP) Provinsi Jawa Tengah. Its primary objective is to overhaul the complex information architecture into a more modern, transparent, and user-centric interface, in order to meet public information disclosure standards.",
    role: "UI/UX Designer",
    period: "Apr 2026 – May 2026",
    techStack: ["Figma", "Canva"],
    points: [
      "Conducted extensive user research aiming to understand public needs regarding maritime information.",
      "Redesigned the primary information architecture for better structural flow.",
      "Designed 63+ high-fidelity responsive screens each for desktop and mobile platforms."
    ],
    links: [],
  },
  {
    id: "proj-17",
    slug: "redesign-ksps",
    title: "Redesign KSPS",
    category: ["ui/ux"],
    thumbnail: "/images/projects/2.webp",
    description:
      "Redesigning the KSPS website from a previously less engaging and outdated interface into a modern, visually appealing, and highly accessible digital platform. The new design focuses on improving user experience through a cleaner layout, intuitive navigation, and responsive design that ensures optimal performance across various devices.",
    role: "UI/UX Designer",
    period: "Feb 2026 – Jul 2026",
    techStack: ["Figma", "Canva"],
    points: [
      "Revamped an outdated interface into a modern, visually appealing, and highly accessible digital platform.",
      "Improved the overall user experience by designing a cleaner layout and intuitive navigation.",
      "Designed 5+ high-quality responsive layouts each for desktop and mobile devices."
    ],
    links: [],
  },
  {
    id: "proj-16",
    slug: "omah-lestari",
    title: "Omah Lestari",
    category: ["ui/ux"],
    thumbnail: "/images/projects/3.webp",
    description:
      "Omah Lestari is a fully responsive, integrated web platform designed to simplify and manage financing processes for home ownership (KPR), home construction, and land purchases. It serves a diverse ecosystem of users including Applicants, Developers, Vendors, the Central Java Provincial Government, and Bank Employees by providing a seamless, role-based system that enhances efficiency, transparency, and collaboration across all stakeholders.",
    role: "UI/UX Designer",
    period: "Nov 2025 – Mar 2026",
    techStack: ["Figma", "Canva", "Stitch"],
    points: [
      "Designed an integrated web platform bridging Applicants, Developers, Vendors, Government entities, and Bank Employees.",
      "Simplified complex financing processes for home ownership (KPR), construction, and land purchases.",
      "Designed 83+ high-fidelity responsive screens each for desktop, tablet, and mobile platforms."
    ],
    links: [],
  },
  {
    id: "proj-15",
    slug: "narativa",
    title: "Narativa",
    category: ["ui/ux"],
    thumbnail: "/images/projects/4.webp",
    description:
      "Narativa is a fully responsive dashboard website designed to perform web crawling, system monitoring, and sentiment analysis in a centralized platform. The system enables users to automatically collect data from various online sources, monitor the health and performance of multiple services or containers in real time, and analyze public sentiment based on text or social media content.",
    role: "UI/UX Designer",
    period: "Dec 2025 – Dec 2025",
    techStack: ["Figma", "Stitch"],
    points: [
      "Designed a comprehensive dashboard to centralize web crawling, system monitoring, and sentiment analysis.",
      "Created Light Theme & Dark Theme.",
      "Designed 41+ high-fidelity responsive screens each for desktop, tablet, and mobile platforms."
    ],
    links: [],
  },
  {
    id: "proj-14",
    slug: "khinaya",
    title: "Khinaya",
    category: ["ui/ux"],
    thumbnail: "/images/projects/5.webp",
    description:
      "Khinaya is a fully responsive marketplace website designed to facilitate seamless buying and selling transactions. The platform supports three primary user roles Buyers, Sellers, and Admins each equipped with specific features and permissions tailored to their needs. Buyers can browse products, make purchases, and manage their orders. Sellers are provided with tools to list products, track sales, and manage their storefronts. Meanwhile, Admins oversee the entire ecosystem, ensuring smooth operations through user management, content moderation, and system monitoring.",
    role: "UI/UX Designer",
    period: "Sep 2025 – Dec 2025",
    techStack: ["Figma", "Canva"],
    points: [
      "Designed a comprehensive marketplace accommodating three primary user roles: Buyers, Sellers, and Admins.",
      "Provided a robust administrative dashboard for user management, content moderation, and system monitoring.",
      "Designed 60+ high-fidelity responsive screens each for desktop and mobile platforms.",
    ],
    links: [],
  },
  {
    id: "proj-13",
    slug: "pasarku",
    title: "Pasarku",
    category: ["ui/ux"],
    thumbnail: "/images/projects/6.webp",
    description:
      "Pasarku is a stock monitoring website that records, tracks, and secures the availability of essential commodities across markets in Central Java. It provides real-time stock data to help authorities maintain stable supply and prevent shortages. In addition, Pasarku includes a marketplace feature for buying and selling goods, and currently, the marketplace development has reached the stage of creating a courier mobile app.",
    role: "UI/UX Designer",
    period: "Oct 2025 – Oct 2025",
    techStack: ["Figma"],
    points: [
      "Designed a real-time tracking interface to monitor essential commodities availability across Central Java markets.",
      "Helped authorities secure stable supply chains by visually presenting critical stock data.",
      "Designed 10+ high-fidelity responsive screens each for desktop, tablet, and mobile platforms.",
    ],
    links: [],
  },
  {
    id: "proj-12",
    slug: "momera",
    title: "Momera",
    category: ["ui/ux"],
    thumbnail: "/images/projects/7.webp",
    description:
      "Momera is a social media platform where users can capture, share, and relive their moments because everyone has their own moments.",
    role: "UI/UX Designer",
    period: "Oct 2025 – Oct 2025",
    techStack: ["Figma"],
    points: [
      "Crafted a user-friendly social media platform dedicated to capturing and reliving personal moments.",
      "Focused on high accessibility and intuitive sharing interactions to boost user engagement.",
      "Designed 18+ responsive high-fidelity screens each for desktop, tablet, and mobile platforms, fully adapted for both light and dark themes.",
    ],
    links: [{ label: "Figma", url: "https://www.figma.com/design/biIij1xSGeD4ZBV9bEXcCl/Momera?node-id=556-20753&t=RInPZ4wzTO0Zl611-1" }],
  },
  {
    id: "proj-11",
    slug: "facelys",
    title: "Facelys",
    category: ["ui/ux", "website"],
    thumbnail: "/images/projects/8.webp",
    description:
      "FaceLys is a fully responsive website designed to detect facial skin health and provide recommendations for suitable active ingredients as well as compatible skincare products. Using image analysis and personalized assessment, the platform evaluates various skin conditions such as acne, redness, hyperpigmentation, and dark circle under eye",
    role: "UI/UX Designer & Full Stack Developer",
    period: "Mar 2025 – Jul 2025",
    techStack: ["Figma", "Flask", "TailwindCSS", "YoloV11", "TF-IDF", "DigitalOcean"],
    points: [
      "Implemented a personalized assessment flow recommending active ingredients and skincare products.",
      "Seamlessly integrated computer vision capabilities (Yolov11) into a user-friendly interactive interface.",
      "Designed 8+ high-fidelity screens for desktop.",
    ],
    links: [{ label: "Figma", url: "https://www.figma.com/design/GSGc29Tt2zhlc1C1Q5sAm5/Facelys?node-id=0-1&t=F0Iy4ILoMWw761QU-1" }, { label: "Github", url: "https://github.com/MWahyuA/FaceLys" }, { label: "Video Demo", url: "https://www.canva.com/design/DAGtDYH296o/8CtTHSLjVTZymWbuLamJ-g/watch?utm_content=DAGtDYH296o&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=ha412a6d8f7" }],
  },
  {
    id: "proj-10",
    slug: "personalitytalk",
    title: "PersonalityTalk",
    category: ["ui/ux"],
    thumbnail: "/images/projects/9.webp",
    description:
      "PersonalityTalk is a fully responsive website designed to detect facial skin health and provide recommendations for suitable active ingredients as well as compatible skincare products. Using image analysis and personalized assessment, the platform evaluates various skin conditions such as acne, redness, hyperpigmentation, and dark circle under eye.",
    role: "UI/UX Designer",
    period: "Sep 2024 – Dec 2024",
    techStack: ["Figma", "Canva"],
    points: [
      "Led a team of 5 members (Designers and Developers) to redesign a static psychology consultation platform.",
      "Integrated Consultation, Courses, Mental Health Information, Mental Tests, and Articles into a cohesive experience.",
      "Designed 70+ responsive high-fidelity screens each for desktop, tablet, and mobile platforms.",
    ],
    links: [{ label: "Behance", url: "https://www.behance.net/gallery/231867411/PersonalityTalk-Psychologist-Consultation-Website" }],
  },
  {
    id: "proj-9",
    slug: "irentz",
    title: "IRentZ",
    category: ["ui/ux"],
    thumbnail: "/images/projects/10.webp",
    description:
      "In an individual project by looking at iphone rentals that still use conventional methods that are less easy, less transparent and difficult to get info so I raised this case study to create an online iPhone rental application-based platform.",
    role: "UI/UX Designer",
    period: "Mar 2024 – May 2024",
    techStack: ["Figma", "Canva"],
    points: [
      "Analyzed pain points in conventional iPhone rental methods to design a transparent, online platform.",
      "Standardized an easier, trackable renting experience through well-researched user flows.",
      "Designed 30+ mobile app screens.",
    ],
    links: [{ label: "Behance Detail", url: "https://www.behance.net/gallery/199549903/Creating-Online-iPhone-Rental-platform-IRentz" }, { label: "Behance Usability Testing", url: "https://www.behance.net/gallery/210480137/Usability-Testing-IRentz" }],
  },
  {
    id: "proj-8",
    slug: "gelora-musik",
    title: "Gelora Musik",
    category: ["ui/ux"],
    thumbnail: "/images/projects/11.webp",
    description:
      "In the final assignment / capstone project in Independent Study Batch 6 of BISA AI partners, my team took the Music Event Organizer business where the business focus we chose focused on B2B (Business to Business) where we offered clients to fellow businesses (Agencies / Music Labels).",
    role: "UI/UX Designer",
    period: "Mar 2024 – May 2024",
    techStack: ["Figma", "Canva"],
    points: [
      "Focused on B2B target market designing a platform for Agencies and Music Labels.",
      "Ensured a streamlined process for organizing and managing music events effectively.",
      "Delivered a complete case study capturing the Music Event Organizer business needs."
    ],
    links: [{ label: "Behance", url: "https://www.behance.net/gallery/199493593/Music-Event-Organizer-website-Gelora-Musik" }],
  },
  {
    id: "proj-7",
    slug: "sikantin",
    title: "SiKantin",
    category: ["ui/ux"],
    thumbnail: "/images/projects/12.webp",
    description:
      "In the independent study task Batch 6 of BISA AI Partners we createrd a user interface of a food sales application in a school canteen with various paymen options to help students buy food in the canteen.",
    role: "UI/UX Designer",
    period: "Apr 2024 – Apr 2024",
    techStack: ["Figma", "Canva"],
    points: [
      "Created a user-friendly UI for a digital school canteen platform.",
      "Integrated various payment options to simplify meal purchasing for students.",
      "Helped standardize modern digital transactions within the school environment."
    ],
    links: [{ label: "Behance", url: "https://www.behance.net/gallery/198940757/School-Canteen-Platform-Sikantin" }],
  },
  {
    id: "proj-6",
    slug: "jobsync",
    title: "JobSync",
    category: ["ui/ux"],
    thumbnail: "/images/projects/13.webp",
    description:
      "My team received a Case Study with the theme 'Technology for Careers' which presented the design of applications to support careers, applications used to find work, recruit workers and network. We give it the name 'JobSync'. The aim of making this Case Study is to participate in Identitas Manajemen Informatika Competition 2023",
    role: "UI/UX Designer",
    period: "Nov 2023 – Nov 2023",
    techStack: ["Figma"],
    points: [
      "Designed an all-in-one platform to support careers, job seeking, and professional networking.",
      "Tailored the user experience to compete in the Identitas Manajemen Informatika Competition 2023.",
      "Streamlined the recruitment process through intuitive 'One Click' application flows."
    ],
    links: [{ label: "Behance", url: "https://www.behance.net/gallery/185845583/JobSync-Looking-for-Work-With-One-Click" }],
  },
  {
    id: "proj-5",
    slug: "room-booking",
    title: "Room Booking",
    category: ["ui/ux"],
    thumbnail: "/images/projects/14.webp",
    description:
      "My team received the case study 'Booking a Room at Polines'. This case study was made for the purpose of the Information System Design assignment.",
    role: "UI/UX Designer",
    period: "Nov 2023 – Nov 2023",
    techStack: ["Figma"],
    points: [
      "Designed a booking system to simplify the room reservation process at Polines.",
      "Fulfilled UI requirements for the Information System Design assignment.",
      "Reduced scheduling conflicts by providing clear visual room availability."
    ],
    links: [{ label: "Figma", url: "https://www.figma.com/proto/stw27mQr1ZLLKgTgh5I2DV/Desain-Perancangan-Sistem-Peminjaman-Tempat-TI3A-Kel.-4?node-id=116-812&starting-point-node-id=116%3A812&scaling=scale-down&show-proto-sidebar=1&mode=design&t=bNzf73wyZ2BEZqTP-1" }],
  },
  {
    id: "proj-4",
    slug: "rythm-game",
    title: "Rythm Game",
    category: ["website"],
    thumbnail: "/images/projects/16.webp",
    description:
      "My team received the Final Project of Semester 4 in the Game Programming course with a case study on Making Rhythm Games.",
    role: "Game Developer",
    period: "Jun 2023 – Jul 2023",
    techStack: ["Unity", "Canva", "C#"],
    points: [
      "Acted as a Game Developer to build a fully functional Rhythm Game for the Semester 4 Final Project.",
      "Programmed game mechanics in C# utilizing the Unity engine.",
      "Collaborated to sync graphical assets and rhythmic progression within the game loop."
    ],
    links: [{ label: "GitHub", url: "https://github.com/MWahyuA/Game-Rhythm" }],
  },
  {
    id: "proj-3",
    slug: "loinventory",
    title: "LoInventory",
    category: ["website"],
    thumbnail: "/images/projects/17.webp",
    description:
      "I created a Goods Lending Website using the Laravel framework & Bootsrap which aims to be the Final Project of Semester 4 in the Framework-Based Web Programming course.",
    role: "Web Developer",
    period: "Jun 2023 – Jun 2023",
    techStack: ["Laravel", "Bootstrap", "PHP", "MySQL"],
    points: [
      "Constructed a comprehensive Goods Lending Web Application using Laravel and Bootstrap.",
      "Integrated a stable MySQL database to handle inventory tracking and loans administration.",
      "Delivered a successful Framework-Based Web Programming final project."
    ],
    links: [{ label: "GitHub", url: "https://github.com/MWahyuA/Peminjaman-Barang-Laravel" }],
  },
  {
    id: "proj-2",
    slug: "sportify",
    title: "Sportify",
    category: ["ui/ux"],
    thumbnail: "/images/projects/15.webp",
    description:
      "My team received a Case Study 'Creating a Sport Booking Platform', we named the platform 'Sportify'. Making this Case Study is for Talenthub assignments and can be a portfolio for me.",
    role: "UI/UX Designer",
    period: "Apr 2023 – Apr 2023",
    techStack: ["Figma"],
    points: [
      "Designed 'Sportify', an intuitive booking platform tailored specifically for sports venues.",
      "Addressed user friction in conventional field reservations offering a seamless 'one-click' experience.",
      "Produced a cohesive UI case study serving as a high-quality portfolio piece."
    ],
    links: [{ label: "Behance", url: "https://www.behance.net/gallery/185390537/Sportify-Pesan-Lapangan-dengan-sekali-Click" }],
  },
  {
    id: "proj-1",
    slug: "portfolio-staff-multimedia",
    title: "Portfolio Staff Multimedia",
    category: ["ui/ux", "design"],
    thumbnail: "/images/projects/18.webp",
    description:
      "When I was a multimedia department staff at UKM PCC, I produced several products such as UI Web Portfolio, Video Design and Graphic Design.",
    role: "UI/UX Designer, Designer",
    period: "May 2022 – May 2023",
    techStack: ["Figma", "Canva", "Adobe After Effects", "CorelDraw"],
    points: [
      "Produced diverse digital products ensuring strong visual identity for UKM PCC.",
      "Created highly detailed UI designs, Video Designs, and Graphic Designs.",
      "Delivered 6 comprehensive portfolios highlighting multimedia expertise."
    ],
    links: [{ label: "Behance", url: "https://www.behance.net/gallery/185657023/Portofolio-Muhammad-Wahyu-Anggoro-Multimedia-UKM-PCC" }],
  },
];

// ---------- Certificates ----------
export const certificates: Certificate[] = [
  {
    id: "cert-6",
    title: "Learn Web Front-End for Beginners",
    issuer: "Dicoding Indonesia",
    credentialUrl: "https://drive.google.com/file/d/19GLq2-tbbxVkCb2ZCQQirrffNUm_-Lw2/view?usp=sharing",
    image: "/images/certs/1.webp",
  },
  {
    id: "cert-5",
    title: "TOEIC",
    issuer: "ETS",
    credentialUrl: "https://drive.google.com/file/d/1lydfRxujOYhyXjOwuRK0AfnXTpGCgq3x/view?usp=sharing",
    image: "/images/certs/2.webp",
  },
  {
    id: "cert-4",
    title: "Junior Web Programmer",
    issuer: "BNSP",
    credentialUrl: "https://drive.google.com/file/d/1E3ETinPTsfRNmHr9wDDdxTpT6VRx21Wl/view?usp=sharing",
    image: "/images/certs/3.webp",
  },
  {
    id: "cert-3",
    title: "UI/UX Designer Associate",
    issuer: "CERNS",
    credentialUrl: "https://drive.google.com/file/d/1r1EOgCtgvyEpbbyHNcENA99TRi0BQxLU/view?usp=sharing",
    image: "/images/certs/4.webp",
  },
  {
    id: "cert-2",
    title: "UI/UX Design",
    issuer: "Talenthub (Kemnaker)",
    credentialUrl: "https://drive.google.com/file/d/1NV_M7Q5syDD28lZgCVy7D9EZDX7Rs9Bu/view?usp=sharing",
    image: "/images/certs/5.webp",
  },
  {
    id: "cert-1",
    title: "Database Programming with SQL",
    issuer: "Oracle Academy",
    credentialUrl: "https://drive.google.com/file/d/1rQJSRYU-FPGb1Pwj2IgOQwIJkwjO9CDF/view?usp=sharing",
    image: "/images/certs/6.webp",
  },
];

// ---------- Category Filter Options ----------
export const categoryFilters = [
  { label: "All", value: "all" },
  { label: "UI/UX", value: "ui/ux" },
  { label: "Design", value: "design" },
  { label: "Website", value: "website" },
] as const;
