"use client";

import { lazy, Suspense, useEffect, useRef, useState, type FormEvent, type PointerEvent } from "react";
import { ArrowDown, ArrowRight, ArrowUpRight, Braces, Check, Code2, Copy, Database, Download, GraduationCap, Layers3, Mail, MapPin, Menu, Palette, PenTool, Phone, Server, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { certifications, designProjects, education, experience, navigation, workflowSteps, profile, projects, services, skills, socialLinks, type DesignProject, type Project } from "@/data/portfolio";

const ProjectViewer = lazy(() => import("./ProjectViewer"));
const DesignViewer = lazy(() => import("./DesignViewer"));
const icons = { code: Code2, server: Server, database: Database, terminal: Terminal, pen: PenTool };
const projectFilters = ["All", ...new Set(projects.flatMap(project => project.categories))];

function SkillIcon({ name, ...props }: { name: string; size?: number; className?: string }) {
  const Icon = icons[name as keyof typeof icons] || Code2;
  return <Icon {...props} aria-hidden="true" />;
}

function SectionHeading({ number, eyebrow, title, description }: { number: string; eyebrow: string; title: React.ReactNode; description?: string }) {
  return <div className="section-heading reveal"><div className="eyebrow"><span>{number}</span><span className="eyebrow-line" />{eyebrow}</div><h2>{title}</h2>{description && <p>{description}</p>}</div>;
}

function Navbar({ active }: { active: string }) {
  const [open, setOpen] = useState(false);
  return <header className="site-header"><div className="nav-wrap">
    <a href="#home" className="monogram" aria-label="Kennu Martos, home"><span className="bracket">&lt;</span>km<span className="bracket">/&gt;</span><span className="monogram-dot" /></a>
    <nav className="desktop-nav" aria-label="Main navigation">{navigation.map(item => <a key={item.id} href={`#${item.id}`} aria-current={active === item.id ? "location" : undefined}>{item.label}</a>)}</nav>
    <a href={profile.resume} download="Kennu-Martos-Resume.pdf" className="button button-small button-outline nav-resume"><Download size={15} /><span className="nav-download-label">Download </span>Resume<span className="sr-only">, PDF</span></a>
    <Sheet open={open} onOpenChange={setOpen}><SheetTrigger asChild><Button className="mobile-menu-button" variant="ghost" aria-label="Open navigation"><Menu size={23} /></Button></SheetTrigger><SheetContent className="mobile-menu" side="right"><SheetTitle className="mobile-menu-title">Kennu Martos</SheetTitle><SheetDescription>Programmer & Graphic Designer</SheetDescription><nav aria-label="Mobile navigation">{navigation.map((item, index) => <SheetClose asChild key={item.id}><a href={`#${item.id}`} aria-current={active === item.id ? "location" : undefined}><span>0{index + 1}</span>{item.label}<ArrowUpRight size={18} /></a></SheetClose>)}</nav><a href={profile.resume} download="Kennu-Martos-Resume.pdf" className="button button-primary"><Download size={18} />Download Resume</a></SheetContent></Sheet>
  </div></header>;
}

function HeroWorkspace() {
  const stage = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => () => { if (timeout.current) clearTimeout(timeout.current); }, []);
  const snippet = 'const creator = {\n  name: "Kennu Martos",\n  roles: ["Programmer", "Graphic Designer"],\n  approach: "Code + Creativity"\n};';
  async function copySnippet() {
    try { await navigator.clipboard.writeText(snippet); setCopied(true); setCopyError(false); timeout.current = setTimeout(() => setCopied(false), 2000); }
    catch { setCopyError(true); }
  }
  function move(event: PointerEvent<HTMLDivElement>) {
    if (!stage.current || event.pointerType !== "mouse" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const box = stage.current.getBoundingClientRect();
    stage.current.style.setProperty("--move-x", `${((event.clientX - box.left) / box.width - .5) * 9}px`);
    stage.current.style.setProperty("--move-y", `${((event.clientY - box.top) / box.height - .5) * 9}px`);
  }
  return <div className="hero-stage" ref={stage} onPointerMove={move} onPointerLeave={() => { stage.current?.style.setProperty("--move-x", "0px"); stage.current?.style.setProperty("--move-y", "0px"); }}>
    <div className="stage-grid" aria-hidden="true" />
    <div className="workspace-window">
      <div className="window-chrome"><span className="window-dots" aria-hidden="true"><i /><i /><i /></span><span>creator.workspace</span><Braces size={15} /></div>
      <Tabs defaultValue="design" className="workspace-tabs"><TabsList aria-label="Explore code and design" className="workspace-tab-list"><TabsTrigger value="code"><Code2 size={15} />Code</TabsTrigger><TabsTrigger value="design"><Palette size={15} />Design</TabsTrigger></TabsList>
        <TabsContent value="design" className="design-canvas"><div className="canvas-meta"><span>TYPOGRAPHY EXPLORATION</span><span>01 / 02</span></div><div className="type-selection"><span className="selection-handle a" /><span className="selection-handle b" /><span className="selection-handle c" /><span className="selection-handle d" /><span className="type-aa">Aa<span>.</span></span><span className="selection-label">Form meets function</span></div><div className="canvas-bottom"><span>Clarity in every<br />line & layer.</span><span className="color-swatches" aria-label="Cyan, violet, blue, and off-white palette"><i /><i /><i /><i /></span></div></TabsContent>
        <TabsContent value="code" className="code-canvas"><div className="code-file"><span>creator.js</span><Button variant="ghost" size="sm" onClick={copySnippet} aria-label={copied ? "Code copied" : "Copy code"}>{copied ? <Check size={16} /> : <Copy size={16} />}</Button></div><pre><code><span className="syntax-purple">const</span> creator = {"{"}<br />{"  "}name: <span className="syntax-cyan">"Kennu Martos"</span>,<br />{"  "}roles: [<br />{"    "}<span className="syntax-cyan">"Programmer"</span>,<br />{"    "}<span className="syntax-cyan">"Graphic Designer"</span><br />{"  "}],<br />{"  "}approach: <span className="syntax-cyan">"Code + Creativity"</span><br />{"}"};</code></pre><span className="code-footnote">// Technical thinking. Creative execution.</span><span className="sr-only" role="status">{copied ? "Code copied to clipboard." : copyError ? "Clipboard unavailable. You can select and copy the code." : ""}</span></TabsContent>
      </Tabs>
      <div className="workspace-status"><span><Layers3 size={13} />Code + creativity</span><span>Made to work together</span></div>
    </div>
    <div className="floating-code" aria-hidden="true"><span className="floating-label"><Terminal size={14} />creative-thinking.js</span><span><b>function</b> create(idea) {"{"}</span><span className="code-indent"><em>return</em> code + design;</span><span>{"}"}</span><span className="code-caret" /></div>
    <span className="stage-coordinate">DESIGNED WITH INTENT. BUILT WITH LOGIC.</span>
  </div>;
}

function Hero() {
  return <section id="home" className="hero"><div className="container hero-inner"><div className="hero-copy"><div className="eyebrow"><span className="small-cross" aria-hidden="true">+</span>CODE × DESIGN</div><p className="hello">Hello, I'm</p><h1>Kennu M.<br />Martos<span className="cyan">.</span></h1><p className="hero-role">Programmer <span>×</span> Graphic Designer</p><p className="hero-description">{profile.summary}</p><div className="hero-actions"><a href="#projects" className="button button-primary">View my work<ArrowUpRight size={18} /></a><a href="#contact" className="button button-outline">Let's talk<ArrowRight size={17} /></a></div><a className="text-link resume-link" href={profile.resume} download="Kennu-Martos-Resume.pdf"><Download size={16} />Download resume<span>PDF</span></a>{profile.availability && <p className="availability">{profile.availability}</p>}</div><HeroWorkspace /><div className="hero-baseline"><span><MapPin size={14} />Based in Biliran, Philippines</span><a href="#about">A little more about me<ArrowDown size={15} /></a></div></div></section>;
}

function About() {
  return <section id="about" className="section container"><div className="about-layout"><div className="portrait-wrap reveal"><div className="portrait-frame"><img src={profile.photo} width="289" height="342" alt="Portrait of Kennu M. Martos" loading="lazy" /><span className="portrait-corner top" /><span className="portrait-corner bottom" /></div><div className="portrait-caption"><span>KENNU M. MARTOS</span><span>Developer. Designer. Problem solver.</span></div></div><div><SectionHeading number="01" eyebrow="THE PERSON BEHIND THE WORK" title={<>A builder's mindset.<br /><span className="soft-text">A designer's eye.</span></>} /><div className="about-text"><p>{profile.about}</p><p>{profile.aboutSecondary}</p></div><div className="about-principles"><div><Code2 /><h3>Development</h3><p>Useful interfaces.<br />Thoughtful implementation.</p></div><div><PenTool /><h3>Design</h3><p>Clear communication.<br />Considered visual details.</p></div><div><Braces /><h3>Problem solving</h3><p>Practical thinking.<br />Connected solutions.</p></div></div></div></div></section>;
}

function Skills() {
  return <section id="skills" className="section section-shaded"><div className="container"><SectionHeading number="02" eyebrow="MY TOOLKIT" title={<>The tools behind<br /><span className="soft-text">the ideas.</span></>} description="A mix of development technologies and creative tools, ready to work together." /><div className="skills-grid">{skills.map((group, i) => <article className={`skill-category reveal ${i === 4 ? "skill-creative" : ""}`} key={group.title}><div className="skill-heading"><span className="icon-frame"><SkillIcon name={group.icon} size={22} /></span><span className="mono">0{i + 1}</span></div><h3>{group.title}</h3><p>{group.note}</p><div className="tags">{group.items.map(item => <span key={item}>{item}</span>)}</div></article>)}</div></div></section>;
}

function DualExpertise() {
  return <section className="section container dual-section"><div className="dual-title reveal"><div className="eyebrow">TWO DISCIPLINES. ONE APPROACH.</div><h2>Where <span className="cyan">code</span> meets <span className="violet">design.</span></h2></div><div className="dual-panels"><article className="dual-panel developer-panel reveal"><Code2 className="dual-icon" size={37} /><span className="mono">THE TECHNICAL SIDE</span><h3>Programmer</h3><p>From user-facing websites to the APIs behind them, I turn requirements into practical digital solutions.</p><ul><li>Web application development</li><li>RESTful APIs & data integration</li><li>UI implementation & maintenance</li></ul></article><div className="dual-join" aria-label="Connected disciplines">×</div><article className="dual-panel designer-panel reveal"><PenTool className="dual-icon" size={37} /><span className="mono">THE CREATIVE SIDE</span><h3>Graphic Designer</h3><p>From the company logo to supporting graphics, I help shape how a brand communicates visually.</p><ul><li>Company logos & brand visuals</li><li>Graphic elements for rebranding</li><li>Photoshop, Illustrator & Canva</li></ul></article></div></section>;
}

function Experience() {
  return <section id="experience" className="section container experience-layout"><div className="experience-intro"><SectionHeading number="03" eyebrow="PROFESSIONAL EXPERIENCE" title={<>Real work.<br /><span className="soft-text">Different perspectives.</span></>} description="Experience across web development, API integration, graphic design, and IT support." /><a href={profile.resume} download="Kennu-Martos-Resume.pdf" className="text-link">The full story in my resume<ArrowUpRight size={16} /></a></div><div className="timeline">{experience.map((job, i) => <article className="timeline-item reveal" key={job.company}><div className="timeline-marker" aria-hidden="true" /><div className="job-meta"><span>{job.shortCompany}</span>{job.dates && <span>{job.dates}</span>}</div><h3>{job.title}</h3><p className="company-name">{job.company}</p><p className="job-location"><MapPin size={13} />{job.location}</p><p className="job-summary">{job.summary}</p><ul>{job.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}</ul><div className="tags">{job.tags.map(tag => <span key={tag}>{tag}</span>)}</div></article>)}</div></section>;
}

function ProjectCard({ project, onOpen }: { project: Project; onOpen: () => void }) {
  return <article className={`project-card reveal accent-${project.accent}`}><Button variant="ghost" className="project-open" onClick={onOpen} aria-label={`View case study: ${project.title}`}><div className={`project-visual ${project.thumbnail ? "has-preview" : ""}`}>{project.thumbnail ? <><img src={project.thumbnail} alt={`${project.title} project preview`} loading="lazy" /><span className="project-image-label">{project.code}</span><span className="project-image-open"><ArrowUpRight size={20} /></span></> : <><div className="project-visual-meta"><span>{project.code}</span><span>PROJECT OVERVIEW</span></div><div className="project-placeholder"><span>{project.client}</span><strong>{project.title}</strong></div><div className="project-visual-bottom"><span>Project visuals to be added</span><ArrowUpRight size={22} /></div></>}</div><div className="project-content"><div className="project-categories">{project.categories.join(" / ")}{project.year && <span>{project.year}</span>}</div><h3>{project.title}<ArrowUpRight size={21} /></h3><p>{project.description}</p><span className="project-read">Explore project<ArrowRight size={15} /></span></div></Button></article>;
}

function Projects({ onOpen }: { onOpen: (project: Project) => void }) {
  return <section id="projects" className="section section-shaded"><div className="container"><div className="section-topline"><SectionHeading number="04" eyebrow="SELECTED DEVELOPMENT" title={<>Ideas put<br /><span className="soft-text">into practice.</span></>} description="Selected projects and contributions from my professional and academic work." /><span className="section-side-note">WEB DEVELOPMENT<br />APIs & INTEGRATIONS<br />BRAND EXPERIENCES</span></div><Tabs defaultValue="All" className="project-tabs"><TabsList className="project-filters" aria-label="Filter projects">{projectFilters.map(filter => <TabsTrigger key={filter} value={filter}>{filter}<span className="filter-count">{filter === "All" ? projects.length : projects.filter(p => p.categories.includes(filter)).length}</span></TabsTrigger>)}</TabsList>{projectFilters.map(filter => <TabsContent value={filter} key={filter}><div className="project-grid">{projects.filter(project => filter === "All" || project.categories.includes(filter)).map(project => <ProjectCard key={project.slug} project={project} onOpen={() => onOpen(project)} />)}</div></TabsContent>)}</Tabs></div></section>;
}

function DesignGallery({ onOpen }: { onOpen: (project: DesignProject) => void }) {
  const designFilters = ["All", ...new Set(designProjects.map(project => project.category))];
  const [selectedFilter, setSelectedFilter] = useState("All");
  const filtered = designProjects.filter(project => selectedFilter === "All" || project.category === selectedFilter);
  return <section id="design" className="section container"><div className="design-section-heading"><SectionHeading number="05" eyebrow="GRAPHIC DESIGN & CREATIVE WORK" title={<>Designs with<br /><span className="violet">a distinct point of view.</span></>} description="Brand identities, print layouts, campaign graphics and game interfaces — a curated gallery of work." /><span className="design-gallery-count"><Palette size={17} />{designProjects.length} creative collections</span></div>
    <div className="design-filter-row" role="group" aria-label="Filter graphic design work">{designFilters.map(filter => <button key={filter} type="button" className={selectedFilter === filter ? "design-filter active" : "design-filter"} aria-pressed={selectedFilter === filter} onClick={() => setSelectedFilter(filter)}>{filter}</button>)}</div>
    <div className="design-portfolio-grid">{filtered.map((project, index) => <article className="design-art-card reveal" key={project.slug}><button type="button" className="design-art-cover" onClick={() => onOpen(project)} aria-label={`View artwork: ${project.title}`}><img src={project.cover || project.gallery[0]?.src} alt={`${project.title} portfolio artwork preview`} loading="lazy" /><span className="design-art-overlay"><span className="design-art-number">{String(index + 1).padStart(2, "0")} / {String(filtered.length).padStart(2, "0")}</span><span className="design-art-view">View gallery <ArrowUpRight size={17} /></span></span></button><div className="design-art-copy"><span className="design-art-category">{project.category} <span>· {project.gallery.length} visuals</span></span><h3>{project.title}</h3><p>{project.description}</p><button type="button" className="design-art-link" onClick={() => onOpen(project)}>Explore creative work <ArrowRight size={16} /></button></div></article>)}</div>
  </section>;
}

function Services() {
  return <section id="services" className="section section-shaded"><div className="container"><div className="services-layout"><SectionHeading number="06" eyebrow="HOW I CAN HELP" title={<>Your next idea.<br /><span className="soft-text">Let's make it real.</span></>} description="Technical development and visual design, with attention to the details that connect them." /><div className="service-list">{services.map(service => <article className="service-row reveal" key={service.title}><span className="service-number">{service.number}</span><div><h3>{service.title}</h3><p>{service.text}</p></div><SkillIcon name={service.icon} size={25} /></article>)}</div></div><div className="process"><div className="process-heading"><span className="eyebrow">FROM IDEA TO DELIVERY</span><h3>A considered process.</h3></div><div className="process-steps">{workflowSteps.map((step, index) => <article key={step.title} className="reveal"><span>0{index + 1}</span><h4>{step.title}</h4><p>{step.description}</p></article>)}</div></div></div></section>;
}

function Education() {
  return <section className="section container education-section"><div className="eyebrow"><GraduationCap size={20} />THE FOUNDATION</div>{education.map(item => <div className="education-row reveal" key={item.school}><div><h2>{item.degree}</h2><p>{item.school}</p><span className="mono">{item.dates}</span></div><p>{item.description}</p></div>)}{certifications.length > 0 && <div className="certifications"><h2>Certifications</h2>{certifications.map(cert => <article key={cert.title}><h3>{cert.title}</h3><p>{cert.issuer} {cert.date}</p>{cert.url && <a href={cert.url} target="_blank" rel="noreferrer">View credential<ArrowUpRight size={15} /></a>}</article>)}</div>}</section>;
}

function ResumeCTA() {
  return <section className="container resume-banner reveal"><div className="resume-icon"><Download size={28} /></div><div><h2>The complete picture.</h2><p>My experience, skills, and education, all in one place.</p></div><div className="resume-banner-actions"><a href={profile.resume} download="Kennu-Martos-Resume.pdf" className="button button-primary">Download resume<Download size={17} /></a><a href="#contact" className="text-link">Get in touch<ArrowUpRight size={16} /></a></div></section>;
}

function ContactForm() {
  const [projectType, setProjectType] = useState("Website");
  const [message, setMessage] = useState("");
  const [draftBody, setDraftBody] = useState("");
  const [draftUrl, setDraftUrl] = useState("");
  const [copied, setCopied] = useState(false);
  const lastPrepared = useRef(0);
  const choices = ["Programming", "Website", "Application", "Graphic Design", "UI design", "Freelance Project", "Job Opportunity", "Other"];
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    if (String(data.get("website_url") || "").trim()) return;
    if (Date.now() - lastPrepared.current < 3000) { setMessage("Your email draft is ready below."); return; }
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const subject = String(data.get("subject") || "").trim();
    const text = String(data.get("message") || "").trim();
    if (name.length < 2 || subject.length < 3 || text.length < 10) { setMessage("Please add your name, a subject, and at least 10 characters about your project."); return; }
    const body = `Hi Kennu,\n\n${text}\n\nProject type: ${projectType}\nName: ${name}\nEmail: ${email}`;
    const url = `mailto:${profile.email}?subject=${encodeURIComponent(`[${projectType}] ${subject}`)}&body=${encodeURIComponent(body)}`;
    setDraftBody(`To: ${profile.email}\nSubject: [${projectType}] ${subject}\n\n${body}`);
    setDraftUrl(url); setCopied(false); lastPrepared.current = Date.now();
    setMessage("Your draft is ready. Send it from your email app, or copy it below.");
    window.location.href = url;
  }
  async function copyDraft() { try { await navigator.clipboard.writeText(draftBody); setCopied(true); } catch { setMessage("Clipboard access is unavailable. Select and copy the draft below."); } }
  return <form className="contact-form" onSubmit={submit}><div className="form-two"><div className="field"><label htmlFor="contact-name">Your name</label><input id="contact-name" name="name" autoComplete="name" placeholder="Alex Santos" required minLength={2} maxLength={100} /></div><div className="field"><label htmlFor="contact-email">Email address</label><input id="contact-email" name="email" type="email" autoComplete="email" placeholder="alex@company.com" required maxLength={160} /></div></div><div className="form-two"><div className="field"><label htmlFor="contact-subject">Subject</label><input id="contact-subject" name="subject" placeholder="A project to talk about" required minLength={3} maxLength={120} /></div><div className="field"><label htmlFor="contact-type">Project type</label><Select value={projectType} onValueChange={setProjectType} name="projectType"><SelectTrigger id="contact-type" className="form-select"><SelectValue /></SelectTrigger><SelectContent>{choices.map(choice => <SelectItem key={choice} value={choice}>{choice}</SelectItem>)}</SelectContent></Select></div></div><div className="field"><label htmlFor="contact-message">Tell me about it</label><textarea id="contact-message" name="message" rows={5} placeholder="What are you working on, and how can I help?" minLength={10} maxLength={1800} required /></div><div className="honeypot" aria-hidden="true"><label htmlFor="contact-website">Leave this field empty</label><input id="contact-website" name="website_url" tabIndex={-1} autoComplete="off" /></div><div className="form-footer"><p>Opens your email app.<br />You review and send the message.</p><Button type="submit" className="button button-primary">Prepare email<ArrowUpRight size={18} /></Button></div><p className="form-status" role="status">{message}</p>{draftUrl && <div className="draft-fallback"><div><a href={draftUrl} className="text-link">Open email draft<ArrowUpRight size={15} /></a><Button type="button" variant="ghost" onClick={copyDraft} className="text-link">{copied ? <Check size={15} /> : <Copy size={15} />}{copied ? "Copied" : "Copy draft"}</Button></div><details><summary>View your draft</summary><pre>{draftBody}</pre></details></div>}</form>;
}

function Contact() {
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
  async function copyEmail() { try { await navigator.clipboard.writeText(profile.email); setCopied(true); setCopyError(false); } catch { setCopyError(true); } }
  return <section id="contact" className="section container contact-section"><div className="contact-layout"><div><SectionHeading number="07" eyebrow="LET'S CONNECT" title={<>Good things start<br />with a <span className="cyan">conversation.</span></>} description="Have a project in mind, a role to discuss, or an idea to explore? I'd like to hear about it." /><div className="contact-details"><div className="contact-email"><Mail size={19} /><a href={`mailto:${profile.email}`}>{profile.email}</a><Button variant="ghost" size="icon" aria-label={copied ? "Email copied" : "Copy email address"} onClick={copyEmail}>{copied ? <Check size={16} /> : <Copy size={16} />}</Button></div>{profile.phones.map(phone => <a href={phone.href} key={phone.href}><Phone size={17} />{phone.label}</a>)}<p><MapPin size={18} />{profile.location}</p><span role="status" className="copy-status">{copyError ? "Select and copy the email address above." : copied ? "Email address copied." : ""}</span>{socialLinks.map(link => <a key={link.url} href={link.url} target="_blank" rel="noreferrer">{link.label}<ArrowUpRight size={16} /></a>)}</div></div><ContactForm /></div></section>;
}

function Footer() {
  return <footer className="footer"><div className="container"><div className="footer-top"><div><a href="#home" className="footer-name">{profile.shortName}<span className="cyan">.</span></a><p>{profile.title}</p></div><nav aria-label="Footer navigation"><a href="#projects">Work</a><a href="#about">About</a><a href="#contact">Contact</a><a href="#home" aria-label="Back to top"><ArrowUpRight size={21} /></a></nav></div><div className="footer-bottom"><p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p><p>Built with code, creativity, and attention to detail.</p></div></div></footer>;
}

export default function Portfolio() {
  const [active, setActive] = useState("home");
  const [project, setProject] = useState<Project | null>(null);
  const [design, setDesign] = useState<DesignProject | null>(null);
  useEffect(() => {
    let scheduled = false;
    let frame = 0;
    const update = () => { let current = "home"; for (const section of navigation) { const el = document.getElementById(section.id); if (el && el.getBoundingClientRect().top < window.innerHeight * .34) current = section.id; } setActive(current); scheduled = false; };
    const scroll = () => { if (!scheduled) { scheduled = true; frame = requestAnimationFrame(update); } };
    window.addEventListener("scroll", scroll, { passive: true }); update();
    const observer = new IntersectionObserver(entries => { entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add("revealed"); observer.unobserve(entry.target); } }); }, { threshold: .1 });
    document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
    return () => { window.removeEventListener("scroll", scroll); cancelAnimationFrame(frame); observer.disconnect(); };
  }, []);
  return <><a className="skip-link" href="#about">Skip to main content</a><Navbar active={active} /><main><Hero /><div className="discipline-strip"><div className="container"><span><Code2 size={19} />WEB DEVELOPMENT</span><span><Braces size={19} />API INTEGRATION</span><span><PenTool size={19} />GRAPHIC DESIGN</span><span><Layers3 size={19} />BRAND IDENTITY</span></div></div><About /><Skills /><DualExpertise /><Experience /><Projects onOpen={setProject} /><DesignGallery onOpen={setDesign} /><Services /><Education /><ResumeCTA /><Contact /></main><Footer /><Suspense fallback={<div className="viewer-loading" role="status">Opening project…</div>}>{project && <ProjectViewer project={project} onClose={() => setProject(null)} />}{design && <DesignViewer project={design} onClose={() => setDesign(null)} />}</Suspense></>;
}
