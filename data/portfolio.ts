/** Professional background is from the supplied resume; new project and artwork
 * descriptions are based on project notes, screenshots, and portfolio assets.
 * Game screenshots are shown as captured; promotional artwork is separately labeled.
 */
export const site = {
  url: (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").replace(/\/+$/, ""),
  title: "Kennu M. Martos | Programmer & Graphic Designer",
  description: "Kennu M. Martos is a programmer and graphic designer based in Biliran, Philippines. Explore his web development, API integration, and branding experience.",
};
export const profile = {
  name: "Kennu M. Martos", shortName: "Kennu Martos", initials: "KM",
  title: "Programmer & Graphic Designer", location: "Biliran, Biliran, Philippines",
  email: "martoskennu01@gmail.com",
  phones: [{ label: "0939 456 3639", href: "tel:+639394563639" }, { label: "0966 846 7434", href: "tel:+639668467434" }],
  photo: "/images/kennu-martos.png", resume: "/Kennu-Martos-Resume.pdf",
  summary: "I build user-focused websites, connect systems through APIs, and create visual identities that bring a brand to life.",
  about: "I'm Kennu, a programmer and graphic designer from Biliran. My experience brings together job-board development, company websites, RESTful APIs, and brand visuals. I enjoy working across the details that make a digital experience useful and the design choices that make it feel considered.",
  aboutSecondary: "With a BS in Computer Science from Naval State University, I bring both technical thinking and a creative eye to collaborative projects, ongoing improvements, and new ideas.",
  // Change this only after confirming availability. Null hides the status.
  availability: null as string | null,
};
export const navigation = [
  { id: "home", label: "Home" }, { id: "about", label: "About" },
  { id: "skills", label: "Skills" }, { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" }, { id: "design", label: "Design" },
  { id: "services", label: "Services" }, { id: "contact", label: "Contact" },
];
export const skills = [
  { title: "Languages & front end", icon: "code", note: "From structure to interaction", items: ["C#", "JavaScript", "PHP", "Java", "HTML", "CSS / SCSS", "Angular / AngularJS", "jQuery / Ajax"] },
  { title: "Back end & APIs", icon: "server", note: "Connecting the moving parts", items: ["ASP.NET / .NET", "Node.js", "REST / RESTful APIs", "Webhooks", "JSON", "XML", "CSV", "Postman"] },
  { title: "Databases & integration", icon: "database", note: "Making data work together", items: ["SQL", "MySQL", "SSMS", "Microsoft Graph", "QuickBase", "Fulcrum", "Salesforce"] },
  { title: "Development toolkit", icon: "terminal", note: "Building, maintaining, improving", items: ["WordPress", "Visual Studio", "Visual Studio Code", "Git", "Pipelines", "XAMPP", "WampServer", "Office 365"] },
  { title: "Graphic design", icon: "pen", note: "Clear ideas, visual expression", items: ["Logo design", "Branding", "Graphic elements", "UI implementation", "Photoshop", "Illustrator", "Canva"] },
];
export const experience = [
  { title: "Web Developer", company: "Japan Intertrade Call Center Corporation", shortCompany: "JICC", location: "Cebu City, Cebu", dates: "", summary: "Helping people find their next opportunity abroad.", bullets: ["Contributed to a user-friendly job board for people seeking overseas opportunities.", "Implemented UI designs and backend processes, with responsibilities for platform enhancements and maintenance."], tags: ["Web development", "UI implementation", "Backend development"] },
  { title: "IT Staff", company: "3kr’s Travel and Tours Enterprises", shortCompany: "3kr’s Travel & Tours", location: "Naval, Biliran", dates: "", summary: "Practical IT support for everyday connectivity.", bullets: ["Applied IT and networking skills to improve client connectivity.", "Addressed service requirements and supported technical operations."], tags: ["IT support", "Networking", "Client connectivity"] },
  { title: "Web Developer / API Developer", company: "Allied Fusion Services Inc.", shortCompany: "Allied Fusion Services", location: "Cebu City, Cebu", dates: "", summary: "Bringing web development, integration, and brand design together.", bullets: ["Led development of the company website and designed its logo and graphic elements as part of a rebranding initiative.", "Developed WordPress web projects tailored to client requirements.", "Built REST and RESTful APIs with JSON, XML, and CSV responses, integrating client database data.", "Maintained and enhanced client projects to address changing needs."], tags: ["WordPress", "RESTful APIs", "Data integration", "Brand design"] },
];
export interface ProjectImage { src: string; alt: string; width?: number; height?: number }
export interface Project {
  title: string; slug: string; categories: string[]; client: string; description: string;
  longDescription: string; role: string; technologies: string[]; features: string[];
  problem: string; solution: string; result?: string; challenges?: string;
  thumbnail?: string; images: ProjectImage[]; github?: string; demo?: string;
  year?: string; featured: boolean; accent: string; code: string;
}
export const projects: Project[] = [
  {
    title: "Battle Tanks Roblox", slug: "battle-tanks-roblox",
    categories: ["Games", "Programming"], client: "Independent Game Project",
    description: "A multiplayer tank combat experience on Roblox with distinct battle modes, custom tanks, abilities, and progression.",
    longDescription: "Battle Tanks for Roblox adapts the tank-combat experience for Roblox players. The project explores arena battles, Battle Royale, Survival gameplay, custom tank configurations, and a responsive game interface designed around quick access to modes and equipment.",
    role: "Game development & UI design", technologies: ["Roblox", "Luau", "Game UI", "Multiplayer gameplay"],
    features: ["Battle Royale matches designed around 20 players", "Survival battles with up to 12 players", "Tank selection, garage and customizable abilities", "Mode selection, equipment screens and progression UI"],
    problem: "A multiplayer tank game needs readable combat interfaces, clear match modes, and a consistent experience as players move between menus and battles.",
    solution: "Developed the Roblox adaptation and designed a unified interface for tank selection, abilities, game modes, and multiplayer gameplay.",
    result: "An evolving Roblox tank-combat game documented with actual interface and gameplay screenshots alongside promotional artwork.",
    thumbnail: "/projects/battle-tanks-roblox/game-thumbnail.webp",
    images: [
      { src: "/projects/battle-tanks-roblox/game-thumbnail.webp", alt: "Battle Tanks Roblox — wide-format game promotional thumbnail artwork", width: 1672, height: 941 },
      { src: "/projects/battle-tanks-roblox/screenshot-2026-11-06-041542.webp", alt: "Battle Tanks Roblox — main lobby, play controls and game mode selection", width: 1917, height: 1078 },
      { src: "/projects/battle-tanks-roblox/screenshot-2026-11-06-041600.webp", alt: "Battle Tanks Roblox — interactive tank garage and selection screen", width: 1919, height: 1079 },
      { src: "/projects/battle-tanks-roblox/screenshot-2026-11-06-041609.webp", alt: "Battle Tanks Roblox — tank specifications and equipment details", width: 1919, height: 1079 },
      { src: "/projects/battle-tanks-roblox/screenshot-2026-11-06-041615.webp", alt: "Battle Tanks Roblox — active and passive abilities management screen", width: 1919, height: 1079 },
      { src: "/projects/battle-tanks-roblox/screenshot-2026-11-06-041625.webp", alt: "Battle Tanks Roblox — match setup and game selection dialog", width: 1919, height: 1077 },
      { src: "/projects/battle-tanks-roblox/screenshot-2026-11-06-041629.webp", alt: "Battle Tanks Roblox — multiplayer game mode configuration panel", width: 1919, height: 1079 },
      { src: "/projects/battle-tanks-roblox/screenshot-2026-11-06-041652.webp", alt: "Battle Tanks Roblox — gameplay screenshot showing the battlefield and combat HUD", width: 1919, height: 1079 },
      { src: "/projects/battle-tanks-roblox/game-icon.webp", alt: "Battle Tanks Roblox — square game cover and promotional icon artwork", width: 1254, height: 1254 }
    ],
    featured: true, accent: "cyan", code: "01 / ROBLOX"
  },
  {
    title: "Battle Tanks Mobile", slug: "battle-tanks-mobile",
    categories: ["Games", "Mobile", "Programming"], client: "Independent Game Project",
    description: "An Android tank-combat game featuring multiplayer modes, survival battles, tank customization, and tactical abilities.",
    longDescription: "The Android edition of Battle Tanks focuses on accessible tank combat with modes for solo and multiplayer play. The game includes a garage, skins, progression, abilities, and match setup across Team Battle, Battle Royale, Survival and Bot Match experiences.",
    role: "Game development & UI design", technologies: ["Android", "Game systems", "UI/UX", "Local multiplayer"],
    features: ["Team Battle, Battle Royale and Survival modes", "Bot Match and local-network co-op gameplay", "Tank garage, skins, active and passive abilities", "Progression, rewards and configurable match settings"],
    problem: "Multiple game modes and tank systems need to remain intuitive on a smaller mobile screen without getting in the way of combat.",
    solution: "Designed and iterated on the game systems and UI, bringing tank selection, equipment, abilities, match setup and progression together.",
    result: "A mobile tank-combat game documented with actual gameplay, menus, loadout screens and the app icon.",
    thumbnail: "/projects/battle-tanks-mobile/64509.webp",
    images: [
      { src: "/projects/battle-tanks-mobile/64509.webp", alt: "Battle Tanks Mobile — main garage interface and tank selection", width: 1536, height: 691 },
      { src: "/projects/battle-tanks-mobile/64510.webp", alt: "Battle Tanks Mobile — match setup and selected tank interface", width: 1536, height: 691 },
      { src: "/projects/battle-tanks-mobile/64511.webp", alt: "Battle Tanks Mobile — game mode selection and available match types", width: 1536, height: 691 },
      { src: "/projects/battle-tanks-mobile/64512.webp", alt: "Battle Tanks Mobile — selected tank, weapons and equipment settings", width: 1536, height: 691 },
      { src: "/projects/battle-tanks-mobile/64513.webp", alt: "Battle Tanks Mobile — active and passive ability selection cards", width: 1536, height: 691 },
      { src: "/projects/battle-tanks-mobile/64514.webp", alt: "Battle Tanks Mobile — ability details and loadout interface", width: 1536, height: 691 },
      { src: "/projects/battle-tanks-mobile/64515.webp", alt: "Battle Tanks Mobile — in-game top-down tank battle with movement and combat controls", width: 1536, height: 691 },
      { src: "/projects/battle-tanks-mobile/app-icon.webp", alt: "Battle Tanks Mobile — official square app icon artwork", width: 1254, height: 1254 }
    ],
    featured: true, accent: "blue", code: "02 / ANDROID"
  },
  {
    title: "GMT System (Grant Management System)", slug: "gmt-grant-management-system",
    categories: ["Web", "Programming", "Systems"], client: "Grant Management System",
    description: "A web-based grant management dashboard for project tracking, federal funding analysis, and quarterly progress reporting.",
    longDescription: "GMT brings project information, grant records and funding data into one reporting workspace. The supplied screenshots show project phase and status charts, funding allocations, cost summaries, quarterly project progress reports and searchable grant tables.",
    role: "Web application project", technologies: ["Web dashboards", "Reporting interfaces", "Data visualization"],
    features: ["Project tracking by phase, status and location", "Funding source summaries and allocation analysis", "FEMA PA quarterly project progress reports", "Searchable, sortable project tables and export controls", "Budget and project progress visualizations"],
    problem: "Managing multiple grant-funded projects requires teams to review project progress, funding and reporting information across many records.",
    solution: "A dashboard-based interface brings high-level charts together with detailed grant tables, report filters and project tracking views.",
    result: "A visual reporting system with dashboards and detailed tables; the gallery contains five supplied screenshots of the system.",
    thumbnail: "/projects/gmt-projects-overview.png",
    images: [
      { src: "/projects/gmt-projects-overview.png", alt: "GMT projects dashboard showing phases, status and project cost by funding status", width: 1901, height: 936 },
      { src: "/projects/gmt-quarterly-grant-report.png", alt: "GMT FEMA PA quarterly project progress report with searchable grant records", width: 1895, height: 939 },
      { src: "/projects/gmt-funding-sources.png", alt: "GMT all funds summary with allocations, obligations and expenditures", width: 1899, height: 941 },
      { src: "/projects/gmt-program-funding.png", alt: "GMT program funding charts and funding by disaster report", width: 1901, height: 942 },
      { src: "/projects/gmt-project-progress.png", alt: "GMT project progress report showing reporting periods and completion percentages", width: 1894, height: 963 }
    ],
    featured: true, accent: "violet", code: "03 / SYSTEM"
  },
  { title: "International job board", slug: "international-job-board", categories: ["Programming", "Web"], client: "JICC", description: "A user-focused platform connecting job seekers with opportunities abroad.", longDescription: "A job board website developed at Japan Intertrade Call Center Corporation to help users find preferred job opportunities abroad.", role: "Web Developer", technologies: [], features: ["Job opportunity discovery", "UI design implementation", "Backend processes", "Platform enhancements and maintenance"], problem: "Job seekers need an approachable way to discover work opportunities abroad.", solution: "Contributed to the interface and backend processes that support a user-friendly job-search platform.", result: "Contributed to the job board's development, enhancement, and maintenance.", images: [], featured: true, accent: "cyan", code: "04 / WEB" },
  {
    title: "Company website & rebrand", slug: "company-website-rebrand",
    categories: ["Web", "Graphic Design"], client: "Allied Fusion Services",
    description: "Corporate website development and a coordinated visual identity for Allied Fusion Services.",
    longDescription: "A corporate website and rebranding initiative at Allied Fusion Services Inc. The gallery features real desktop captures of the website’s home, About, Careers and Contact pages.",
    role: "Web Developer / Graphic Designer", technologies: ["Web development", "UI implementation", "Brand design"],
    features: ["Corporate home page and interior page development", "Responsive website presentation", "Logo design and company graphic identity", "Coordinated website and brand graphics"],
    problem: "The organization needed a clear online presence consistent with its visual identity.",
    solution: "Developed the company website while creating supporting logo and visual design work for the rebranding effort.",
    result: "A corporate website with coordinated home, about, careers and contact pages, shown in full-page captures.",
    thumbnail: "/projects/allied-fusion/www-alliedfusionbpo-com-desktop.webp",
    images: [
      { src: "/projects/allied-fusion/www-alliedfusionbpo-com-desktop.webp", alt: "Allied Fusion corporate website — home page above-the-fold design", width: 1920, height: 1080 },
      { src: "/projects/allied-fusion/www-alliedfusionbpo-com-desktop-1.webp", alt: "Allied Fusion corporate website — full home page layout and sections", width: 1905, height: 8387 },
      { src: "/projects/allied-fusion/www-alliedfusionbpo-com-about-us-desktop.webp", alt: "Allied Fusion corporate website — About Us page", width: 1905, height: 6045 },
      { src: "/projects/allied-fusion/www-alliedfusionbpo-com-careers-desktop.webp", alt: "Allied Fusion corporate website — Careers page", width: 1905, height: 3705 },
      { src: "/projects/allied-fusion/www-alliedfusionbpo-com-talk-to-us-desktop.webp", alt: "Allied Fusion corporate website — Contact / Talk to Us page", width: 1905, height: 3184 }
    ],
    featured: true, accent: "violet", code: "05 / WEB + DESIGN"
  },
  { title: "APIs & database integration", slug: "api-database-integration", categories: ["Programming"], client: "Allied Fusion Services", description: "RESTful APIs connecting client data with the applications that need it.", longDescription: "API development work at Allied Fusion Services Inc. involving client database integration and structured data responses.", role: "API Developer", technologies: ["REST / RESTful APIs", "JSON", "XML", "CSV"], features: ["Client database integration", "Structured API responses", "Ongoing client-project maintenance"], problem: "Client projects required ways to access and exchange database information.", solution: "Designed and implemented APIs returning JSON, XML, and CSV data based on client requirements.", result: "Delivered API integrations and supported continued development of client projects.", images: [], featured: true, accent: "blue", code: "06 / API" },
  { title: "Job-seeker web application", slug: "job-seeker-thesis", categories: ["Programming", "Web"], client: "Naval State University", description: "A Computer Science thesis focused on connecting job seekers and online vacancies.", longDescription: "A university thesis project involving a web application for job seekers and online job vacancies.", role: "Computer Science student / Thesis project", technologies: [], features: ["Web application", "Job-seeker focus", "Online vacancy information"], problem: "The thesis explored how a web application could serve job seekers and online job vacancies.", solution: "Created a recruitment-focused web application as part of the BS Computer Science program.", images: [], featured: false, accent: "silver", code: "07 / THESIS" },
];
export interface DesignProject {
  title: string; slug: string; category: string; description: string; objective?: string;
  creativeDirection?: string; process?: string; tools: string[]; typography?: string[];
  palette?: string[]; result?: string; cover?: string; gallery: ProjectImage[];
  year?: string; featured: boolean;
}
export const designProjects: DesignProject[] = [
  {
    "title": "Horizon Unified — Brand Identity",
    "slug": "horizon-unified-brand-identity",
    "category": "Brand Identity",
    "description": "An extensive corporate identity exploration featuring horizon motifs, logo variants, icon systems and brand presentation boards.",
    "objective": "Explore a flexible corporate logo family for Horizon Unified BPO Corp.",
    "creativeDirection": "Multiple logo treatments and colorways, presented with associated iconography and physical branding applications.",
    "tools": [],
    "result": "Four branded presentation boards and nine logo explorations from the supplied files.",
    "cover": "/design/covers/horizon-unified.webp",
    "gallery": [
      {
        "src": "/design/horizon-unified/horizon-unified-corporate-brand-board-v2.webp",
        "alt": "Horizon Unified — blue corporate brand board with logo, icon and signage treatments",
        "width": 2800,
        "height": 1867
      },
      {
        "src": "/design/horizon-unified/horizon-unified-corporate-brand-board-v2-1.webp",
        "alt": "Horizon Unified — blue branding applications and presentation board",
        "width": 2800,
        "height": 2100
      },
      {
        "src": "/design/horizon-unified/horizon-unified-corporate-brand-board.webp",
        "alt": "Horizon Unified — green brand identity and corporate application board",
        "width": 2800,
        "height": 1867
      },
      {
        "src": "/design/horizon-unified/horizon-unified-corporate-brand-board-1-1.webp",
        "alt": "Horizon Unified — original horizon symbol brand identity board",
        "width": 2800,
        "height": 2100
      },
      {
        "src": "/design/horizon-unified/horizon-unified-v1-1.webp",
        "alt": "Horizon Unified — logo exploration v1.1",
        "width": 2083,
        "height": 1250
      },
      {
        "src": "/design/horizon-unified/horizon-unified-v1-2.webp",
        "alt": "Horizon Unified — logo exploration v1.2",
        "width": 2083,
        "height": 1250
      },
      {
        "src": "/design/horizon-unified/horizon-unified-v1.webp",
        "alt": "Horizon Unified — logo exploration v1",
        "width": 2083,
        "height": 1250
      },
      {
        "src": "/design/horizon-unified/horizon-unified-v2-1.webp",
        "alt": "Horizon Unified — logo exploration v2.1",
        "width": 2083,
        "height": 1250
      },
      {
        "src": "/design/horizon-unified/horizon-unified-v2-2.webp",
        "alt": "Horizon Unified — logo exploration v2.2",
        "width": 2083,
        "height": 1250
      },
      {
        "src": "/design/horizon-unified/horizon-unified-v2-3.webp",
        "alt": "Horizon Unified — logo exploration v2.3",
        "width": 2083,
        "height": 1250
      },
      {
        "src": "/design/horizon-unified/horizon-unified-v2.webp",
        "alt": "Horizon Unified — logo exploration v2",
        "width": 2083,
        "height": 1250
      },
      {
        "src": "/design/horizon-unified/horizon-unified-v3-1.webp",
        "alt": "Horizon Unified — logo exploration v3.1",
        "width": 2083,
        "height": 1250
      },
      {
        "src": "/design/horizon-unified/horizon-unified-v3.webp",
        "alt": "Horizon Unified — logo exploration v3",
        "width": 2083,
        "height": 1250
      }
    ],
    "featured": true
  },
  {
    "title": "Discount Uniform International — Branding",
    "slug": "discount-uniform-international-branding",
    "category": "Brand Identity",
    "description": "Logo identity, illustrated emblem concepts and brand application presentations for Discount Uniform International.",
    "objective": "Develop a recognizable emblem and consistent branding across different layouts.",
    "creativeDirection": "An interlocking DUI monogram with varied arrangements, colorways and supporting identity applications.",
    "tools": [],
    "result": "Twelve matching identity designs and variations from the original graphics folder.",
    "cover": "/design/covers/dui-branding.webp",
    "gallery": [
      {
        "src": "/design/dui-branding/dui-branding.webp",
        "alt": "Discount Uniform International — coordinated stationery and identity application presentation",
        "width": 2800,
        "height": 1575
      },
      {
        "src": "/design/dui-branding/dui-branding-logo-fina-v1.webp",
        "alt": "Discount Uniform International — brand logo presentation v1",
        "width": 1333,
        "height": 1333
      },
      {
        "src": "/design/dui-branding/dui-branding-logo-fina-v1-2.webp",
        "alt": "Discount Uniform International — brand logo presentation v1-2",
        "width": 1333,
        "height": 1333
      },
      {
        "src": "/design/dui-branding/dui-branding-logo-fina-v2.webp",
        "alt": "Discount Uniform International — brand logo presentation v2",
        "width": 1333,
        "height": 1333
      },
      {
        "src": "/design/dui-branding/dui-branding-logo-fina-v2-2.webp",
        "alt": "Discount Uniform International — brand logo presentation v2-2",
        "width": 1333,
        "height": 1333
      },
      {
        "src": "/design/dui-branding/dui-round-badge.webp",
        "alt": "Discount Uniform International — circular corporate emblem",
        "width": 1536,
        "height": 1024
      },
      {
        "src": "/design/dui-branding/dui-logo-v1.webp",
        "alt": "Discount Uniform International — logo concept v1",
        "width": 647,
        "height": 647
      },
      {
        "src": "/design/dui-branding/dui-logo-v2.webp",
        "alt": "Discount Uniform International — logo concept v2",
        "width": 648,
        "height": 579
      },
      {
        "src": "/design/dui-branding/dui-logo-v3-1.webp",
        "alt": "Discount Uniform International — logo concept v3.1",
        "width": 1509,
        "height": 577
      },
      {
        "src": "/design/dui-branding/dui-logo-v3.webp",
        "alt": "Discount Uniform International — logo concept v3",
        "width": 1509,
        "height": 577
      },
      {
        "src": "/design/dui-branding/dui-logo-v4-1.webp",
        "alt": "Discount Uniform International — logo concept v4.1",
        "width": 1341,
        "height": 859
      },
      {
        "src": "/design/dui-branding/dui-logo-v4.webp",
        "alt": "Discount Uniform International — logo concept v4",
        "width": 1341,
        "height": 859
      }
    ],
    "featured": true
  },
  {
    "title": "BS Lending Corporation — Logo Explorations",
    "slug": "bs-lending-logo-explorations",
    "category": "Logo Design",
    "description": "Corporate logo and monogram iterations exploring secure, professional lending-industry iconography.",
    "objective": "Create a recognizable business mark across alternative concepts.",
    "creativeDirection": "Shield, lock and lettermark concepts with coordinated blue-and-gold variations.",
    "tools": [],
    "result": "Five logo proposals and refinements.",
    "cover": "/design/covers/blc-lending.webp",
    "gallery": [
      {
        "src": "/design/blc-lending/bslendingcoporation-logo-v2.webp",
        "alt": "BS Lending Corporation — BeSupport logo design proposal",
        "width": 2800,
        "height": 2800
      },
      {
        "src": "/design/blc-lending/bslendingcoporation-logo-v3.webp",
        "alt": "BS Lending Corporation — BLC monogram logo variation v3",
        "width": 2800,
        "height": 2800
      },
      {
        "src": "/design/blc-lending/bslendingcoporation-logo-v3-1.webp",
        "alt": "BS Lending Corporation — BLC monogram logo variation v3.1",
        "width": 2800,
        "height": 2800
      },
      {
        "src": "/design/blc-lending/bslendingcoporation-logo-v3-2.webp",
        "alt": "BS Lending Corporation — BLC monogram logo variation v3.2",
        "width": 2800,
        "height": 2800
      },
      {
        "src": "/design/blc-lending/bslendingcoporation-logo-v3-3.webp",
        "alt": "BS Lending Corporation — BLC monogram logo variation v3.3",
        "width": 2800,
        "height": 2800
      }
    ],
    "featured": true
  },
  {
    "title": "Allied Fusion — Corporate Identity",
    "slug": "allied-fusion-corporate-identity",
    "category": "Corporate Design",
    "description": "A cohesive set of employee identification cards, corporate signatures and branded lanyard graphics.",
    "objective": "Design an internal identity suite that is easy to recognize across everyday staff materials.",
    "creativeDirection": "Orange, black and white brand elements carried through ID card templates, stationery and contact assets.",
    "tools": [],
    "result": "Ten pieces of corporate identification and communication artwork.",
    "cover": "/design/covers/allied-fusion-identity.webp",
    "gallery": [
      {
        "src": "/design/allied-fusion-corporate/allied-fusion-id-2.webp",
        "alt": "Allied Fusion — branded employee identification card front and back mockup",
        "width": 1725,
        "height": 1242
      },
      {
        "src": "/design/allied-fusion-corporate/allied-fusion-id.webp",
        "alt": "Allied Fusion — alternate corporate employee ID mockup",
        "width": 1725,
        "height": 1242
      },
      {
        "src": "/design/allied-fusion-corporate/id-empty-front.webp",
        "alt": "Allied Fusion — clean employee identification card front design",
        "width": 643,
        "height": 1018
      },
      {
        "src": "/design/allied-fusion-corporate/id-empty-back.webp",
        "alt": "Allied Fusion — clean employee identification card reverse design",
        "width": 642,
        "height": 1017
      },
      {
        "src": "/design/allied-fusion-corporate/id-back.webp",
        "alt": "Allied Fusion — employee ID back panel design",
        "width": 789,
        "height": 1164
      },
      {
        "src": "/design/allied-fusion-corporate/id-back2.webp",
        "alt": "Allied Fusion — alternate employee ID reverse layout",
        "width": 788,
        "height": 1163
      },
      {
        "src": "/design/allied-fusion-corporate/afsi-id-sling.webp",
        "alt": "Allied Fusion — branded ID card lanyard and sling design",
        "width": 1575,
        "height": 2800
      },
      {
        "src": "/design/allied-fusion-corporate/christian-cenizaalliedfusionbpo.webp",
        "alt": "Allied Fusion — Christian Ceniza corporate signature or contact strip",
        "width": 2708,
        "height": 833
      },
      {
        "src": "/design/allied-fusion-corporate/tomokaalliedfusionbpo.webp",
        "alt": "Allied Fusion — Tomoka corporate signature or contact strip",
        "width": 2708,
        "height": 833
      },
      {
        "src": "/design/allied-fusion-corporate/yukoalliedfusionbpo.webp",
        "alt": "Allied Fusion — Yuko corporate signature or contact strip",
        "width": 2708,
        "height": 833
      }
    ],
    "featured": true
  },
  {
    "title": "Allied Fusion — Recruitment Campaign",
    "slug": "allied-fusion-recruitment-campaign",
    "category": "Campaign Design",
    "description": "A series of recruitment banner designs with alternate layouts and color treatments.",
    "objective": "Create high-visibility recruitment graphics for hiring campaigns.",
    "creativeDirection": "Vertical campaign posters using bold typography and contrasting color systems.",
    "tools": [],
    "result": "Four supplied recruitment banner executions.",
    "cover": "/design/covers/recruitment-campaign.webp",
    "gallery": [
      {
        "src": "/design/recruitment-campaign/recruitment-banner.webp",
        "alt": "Allied Fusion — full-resolution We Are Hiring recruitment campaign banner",
        "width": 1465,
        "height": 2800
      },
      {
        "src": "/design/recruitment-campaign/recruitment-banner-v1.webp",
        "alt": "Allied Fusion — recruitment banner version 1, vertical campaign layout",
        "width": 1465,
        "height": 2800
      },
      {
        "src": "/design/recruitment-campaign/recruitment-banner-v2.webp",
        "alt": "Allied Fusion — recruitment banner version 2, red visual direction",
        "width": 1465,
        "height": 2800
      },
      {
        "src": "/design/recruitment-campaign/recruitment-banner-v3.webp",
        "alt": "Allied Fusion — recruitment banner version 3, light visual direction",
        "width": 1465,
        "height": 2800
      }
    ],
    "featured": true
  },
  {
    "title": "Music Identity — Logo & Business Cards",
    "slug": "music-logo-business-cards",
    "category": "Print & Identity",
    "description": "Expressive music-inspired logo designs paired with matching business card compositions.",
    "objective": "Build a distinctive music-oriented graphic identity suitable for business cards and brand collateral.",
    "creativeDirection": "Illustrated instrument motifs, black-and-white variants, red accents and coordinated business card presentations.",
    "tools": [],
    "result": "Ten logo and print-layout variations.",
    "cover": "/design/covers/music-branding.webp",
    "gallery": [
      {
        "src": "/design/music-branding/logo.webp",
        "alt": "Music-themed brand identity — logo variation Logo",
        "width": 2800,
        "height": 2800
      },
      {
        "src": "/design/music-branding/logo-v4.webp",
        "alt": "Music-themed brand identity — logo variation Logo v4",
        "width": 2800,
        "height": 2800
      },
      {
        "src": "/design/music-branding/logo-black.webp",
        "alt": "Music-themed brand identity — logo variation Logo Black",
        "width": 2800,
        "height": 2800
      },
      {
        "src": "/design/music-branding/logo-black-v3.webp",
        "alt": "Music-themed brand identity — logo variation Logo Black v3",
        "width": 2800,
        "height": 2800
      },
      {
        "src": "/design/music-branding/logo2-v1.webp",
        "alt": "Music-themed brand identity — logo variation Logo2 v1",
        "width": 2800,
        "height": 2800
      },
      {
        "src": "/design/music-branding/business-card.webp",
        "alt": "Music-themed brand identity — business card layout Business Card",
        "width": 2083,
        "height": 2083
      },
      {
        "src": "/design/music-branding/business-card-v2.webp",
        "alt": "Music-themed brand identity — business card layout Business Card v2",
        "width": 2083,
        "height": 2083
      },
      {
        "src": "/design/music-branding/business-card-v3.webp",
        "alt": "Music-themed brand identity — business card layout Business Card v3",
        "width": 2083,
        "height": 2083
      },
      {
        "src": "/design/music-branding/business-card-v4.webp",
        "alt": "Music-themed brand identity — business card layout Business Card v4",
        "width": 2083,
        "height": 2083
      },
      {
        "src": "/design/music-branding/mesa-de-trabajo-13x.webp",
        "alt": "Music-themed brand identity — combined business card layout artboard",
        "width": 1501,
        "height": 1501
      }
    ],
    "featured": true
  },
  {
    "title": "Battle Tanks — Game UI & Artwork",
    "slug": "battle-tanks-ui-artwork",
    "category": "Game UI Design",
    "description": "Actual game menu and gameplay screenshots alongside promotional artwork for the Roblox and mobile editions.",
    "objective": "Present the combat, garage, equipment and gameplay interfaces with clear visual hierarchy.",
    "creativeDirection": "Colorful, high-contrast game panels, tank visuals, ability selection and readable tactical interfaces.",
    "tools": [],
    "result": "Roblox and mobile UI captures with two promotional game icons.",
    "cover": "/design/covers/battle-tanks-game-ui.webp",
    "gallery": [
      {
        "src": "/projects/battle-tanks-roblox/screenshot-2026-11-06-041542.webp",
        "alt": "Battle Tanks Roblox — main menu and mode selection UI",
        "width": 1917,
        "height": 1078
      },
      {
        "src": "/projects/battle-tanks-roblox/screenshot-2026-11-06-041600.webp",
        "alt": "Battle Tanks Roblox — garage interface and tank selection design",
        "width": 1919,
        "height": 1079
      },
      {
        "src": "/projects/battle-tanks-roblox/screenshot-2026-11-06-041609.webp",
        "alt": "Battle Tanks Roblox — tank info panel and equipment design",
        "width": 1919,
        "height": 1079
      },
      {
        "src": "/projects/battle-tanks-roblox/screenshot-2026-11-06-041615.webp",
        "alt": "Battle Tanks Roblox — active and passive abilities interface",
        "width": 1919,
        "height": 1079
      },
      {
        "src": "/projects/battle-tanks-roblox/screenshot-2026-11-06-041652.webp",
        "alt": "Battle Tanks Roblox — combat HUD and gameplay controls",
        "width": 1919,
        "height": 1079
      },
      {
        "src": "/projects/battle-tanks-roblox/game-icon.webp",
        "alt": "Battle Tanks Roblox — promotional game icon artwork",
        "width": 1254,
        "height": 1254
      },
      {
        "src": "/projects/battle-tanks-mobile/64509.webp",
        "alt": "Battle Tanks Mobile — garage screen design",
        "width": 1536,
        "height": 691
      },
      {
        "src": "/projects/battle-tanks-mobile/64511.webp",
        "alt": "Battle Tanks Mobile — match mode UI",
        "width": 1536,
        "height": 691
      },
      {
        "src": "/projects/battle-tanks-mobile/64513.webp",
        "alt": "Battle Tanks Mobile — skills selection panel",
        "width": 1536,
        "height": 691
      },
      {
        "src": "/projects/battle-tanks-mobile/64515.webp",
        "alt": "Battle Tanks Mobile — gameplay HUD screenshot",
        "width": 1536,
        "height": 691
      },
      {
        "src": "/projects/battle-tanks-mobile/app-icon.webp",
        "alt": "Battle Tanks Mobile — app icon design",
        "width": 1254,
        "height": 1254
      }
    ],
    "featured": true
  }
];
export const services = [
  { number: "01", title: "Web development", text: "User-focused websites and web applications, from company sites to job boards and ongoing improvements.", icon: "code" },
  { number: "02", title: "APIs & integration", text: "RESTful APIs and data connections that help applications work with client databases and structured information.", icon: "server" },
  { number: "03", title: "Graphic design", text: "Logos, brand visuals, and supporting graphic elements that give a business a considered visual identity.", icon: "pen" },
  { number: "04", title: "Website maintenance", text: "Continued development and maintenance to keep web projects aligned with changing requirements.", icon: "terminal" },
];
export const workflowSteps = [
  { title: "Understand", description: "Start with the people, purpose, and requirements." },
  { title: "Plan", description: "Bring the technical and creative direction into focus." },
  { title: "Create", description: "Build the functionality and develop the visual language." },
  { title: "Refine", description: "Review how it works and polish how it feels." },
  { title: "Deliver", description: "Prepare the work for handover and continued improvement." },
];
export const education = [{ school: "Naval State University", degree: "BS Computer Science", dates: "June 2015 - April 2019", description: "Studied computer programming and graphics design. Completed a thesis involving a web application for job seekers and online vacancies." }];
export const certifications: { title: string; issuer?: string; date?: string; url?: string }[] = [];
export const socialLinks: { label: string; url: string }[] = [];
