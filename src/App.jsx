import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useInView, useScroll, useTransform } from 'framer-motion'
import {
  SiPython, SiCplusplus, SiJavascript, SiMysql, SiR,
  SiTensorflow, SiPytorch, SiScikitlearn, SiNeo4J,
  SiReact, SiFastapi, SiNodedotjs, SiFirebase, SiDocker,
  SiBlender, SiThreedotjs, SiFigma, SiGit, SiLinux, SiGithub,
} from 'react-icons/si'

/* ─── palette ─────────────────────────────────────── */
const P = {
  cream:     '#F9F2EC',
  parchment: '#F5DCD9',
  blush:     '#F6C9C9',
  sakura:    '#EC9C9D',
  milkTea:   '#AA7F66',
  aloewood:  '#7F5836',
  chocolate: '#443025',
  ink:       '#2A1A10',
}

/* ─── fade-up ────────────────────────────────────── */
function Reveal({ children, delay = 0, y = 24, style = {} }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  return (
    <motion.div ref={ref}
      style={style}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </motion.div>
  )
}

/* ─── section label ──────────────────────────────── */
function Label({ children }) {
  return (
    <p style={{
      fontFamily: "'Jost', sans-serif",
      fontWeight: 300,
      fontSize: '0.68rem',
      letterSpacing: '0.25em',
      textTransform: 'uppercase',
      color: P.sakura,
      marginBottom: '0.75rem',
    }}>{children}</p>
  )
}

/* ─── section heading ────────────────────────────── */
function Heading({ children, italic, light }) {
  return (
    <h2 style={{
      fontFamily: "'Cormorant Garamond', serif",
      fontWeight: light ? 300 : 400,
      fontStyle: italic ? 'italic' : 'normal',
      fontSize: 'clamp(2rem, 4vw, 3rem)',
      color: P.chocolate,
      lineHeight: 1.1,
      marginBottom: '3rem',
    }}>{children}</h2>
  )
}

/* ─── thin divider ───────────────────────────────── */
function Rule({ color = P.blush }) {
  return <div style={{ height: 1, background: color, width: '100%', margin: '0' }} />
}

/* ─── data ───────────────────────────────────────── */
const SKILLS = [
  'Python', 'C++', 'JavaScript', 'SQL', 'R',
  'TensorFlow', 'PyTorch', 'Scikit-learn', 'NLP', 'Adversarial ML',
  'GraphRAG', 'Neo4j', 'Qdrant', 'tree-sitter', 'SentenceTransformers',
  'ReactJS', 'FastAPI', 'Node.js', 'Firebase', 'Docker',
  'OWASP', 'NIST CSF', 'AI Threat Modeling',
  'Blender', 'Three.js', 'Figma', 'Git', 'Linux',
]

const SKILL_CATEGORIES = [
  {
    cat: 'Languages',
    items: [
      { name: 'Python', Icon: SiPython },
      { name: 'C++', Icon: SiCplusplus },
      { name: 'JavaScript', Icon: SiJavascript },
      { name: 'SQL', Icon: SiMysql },
      { name: 'R', Icon: SiR },
    ],
  },
  {
    cat: 'AI & ML',
    items: [
      { name: 'TensorFlow', Icon: SiTensorflow },
      { name: 'PyTorch', Icon: SiPytorch },
      { name: 'Scikit-learn', Icon: SiScikitlearn },
    ],
  },
  {
    cat: 'Graph & Data',
    items: [
      { name: 'Neo4j', Icon: SiNeo4J },
    ],
  },
  {
    cat: 'Development',
    items: [
      { name: 'React', Icon: SiReact },
      { name: 'FastAPI', Icon: SiFastapi },
      { name: 'Node.js', Icon: SiNodedotjs },
      { name: 'Firebase', Icon: SiFirebase },
      { name: 'Docker', Icon: SiDocker },
    ],
  },
  {
    cat: 'Design & 3D',
    items: [
      { name: 'Blender', Icon: SiBlender },
      { name: 'Three.js', Icon: SiThreedotjs },
      { name: 'Figma', Icon: SiFigma },
    ],
  },
  {
    cat: 'Tools',
    items: [
      { name: 'Git', Icon: SiGit },
      { name: 'GitHub', Icon: SiGithub },
      { name: 'Linux', Icon: SiLinux },
    ],
  },
]

const ABOUT_CARDS = [
  { label: 'Pursuing', title: "Bachelor's in Information Technology", sub: 'IGDTUW · 2024–2028' },
  { label: 'Interest', title: 'AI/ML & Deep Learning', sub: 'Research-driven exploration of intelligent systems' },
  { label: 'Interest', title: 'Full-Stack Development', sub: 'Building end-to-end products that work' },
  { label: 'Interest', title: 'Web3 & Decentralized Systems', sub: 'Exploring the next layer of the internet' },
  { label: 'Interest', title: 'Design & UI/UX', sub: 'Where logic meets aesthetics' },
  { label: 'Beyond Code', title: 'Reading & Writing', sub: 'Poetry and prose, evermore' },
]

const PROJECTS = [
  {
    num: '01',
    title: 'CodeScope AI',
    role: 'GraphRAG · Code Intelligence',
    desc: 'Built an AI system that turns large codebases into interactive knowledge, making exploration, reasoning, and understanding feel conversational instead of overwhelming.',
    tags: ['GraphRAG', 'Neo4j', 'Qdrant', 'Groq', 'tree-sitter'],
    href: 'https://github.com/aziraxariza/codescope-ai',
    img: '/projects/codescope.jpg',
  },
  {
    num: '02',
    title: 'IGDTUW 3D Campus Map',
    role: 'Three.js · WebGL · Blender',
    desc: 'Developed an interactive 3D digital twin of IGDTUW campus, enabling users to explore buildings, landmarks, and information in an engaging virtual environment.',
    tags: ['Blender', 'Three.js', 'WebGL'],
    href: 'https://github.com/aziraxariza/3D-MAP-IGDTUW',
    img: '/projects/campus-map.jpg',
  },
  {
    num: '03',
    title: 'Graphire',
    role: 'Graph ML · Women in Tech Platform',
    desc: 'Graph-based platform modeling users, skills, and opportunities as typed nodes. Collaborative filtering on skill embeddings for mentor matching, with LLM Q&A over graph traversal results.',
    tags: ['GNN', 'LLM', 'RAG', 'FastAPI'],
    href: 'https://github.com/aziraxariza/graphire',
    img: '/projects/graphire.jpg',
  },
  {
    num: '04',
    title: 'Kumhar',
    role: 'UI/UX · Design · Figma',
    desc: 'Designed a marketplace prototype connecting pottery sellers and buyers through a trusted digital platform, featuring credibility badges to foster transparency, authenticity, and buyer confidence.',
    tags: ['Figma', 'UI/UX', 'Design'],
    href: '',
    img: '/projects/project-04.jpg',
  },
  {
    num: '05',
    title: 'Watrons',
    role: 'Game Development · EdGame for Kids',
    desc: 'Developed and deployed an interactive 3D educational game in Roblox Studio to promote water conservation through engaging, mission-based gameplay, immersive environments, game mechanics and user interactions.',
    tags: ['Roblox Studio', 'Lua', 'Game Development', '3D Dev'],
    href: 'https://github.com/aziraxariza/watrons',
    img: '/projects/project-05.jpg',
  },
  {
    num: '06',
    title: 'ASL Air Canvas',
    role: 'Computer Vision · OpenCV · MediaPipe',
    desc: 'Computer vision application that enables users to draw in the air using hand tracking while recognizing ASL gestures for intuitive and accessible interaction.',
    tags: ['OpenCV', 'MediaPipe', 'Python', 'Computer Vision', 'AI'],
    href: 'https://github.com/aziraxariza/ASL-AirCanvas',
    img: '/projects/project-06.jpg',
  },
  {
    num: '07',
    title: 'SREAP',
    role: '3D Design · Blender',
    desc: 'Conceptualized a smart traffic management system integrating AI-powered violation detection, IoT-enabled road infrastructure, and predictive analytics, complemented by realistic 3D visualizations created in Blender.',
    tags: ['Blender', 'AI', 'Computer Vision', '3D Design'],
    href: '',
    img: '/projects/project-07.jpg',
  },
  {
    num: '08',
    title: 'gaiA',
    role: 'Web3 · Blockchain · Sustainability',
    desc: 'Web3 marketplace enabling users to buy, sell, repair, and refurbish products while earning NFT rewards and promoting a circular, sustainable economy.',
    tags: ['Web3', 'Blockchain', 'NFT','HTML', 'CSS', 'JavaScript'],
    href: 'https://github.com/aziraxariza/GaiaNew',
    img: '/projects/project-08.jpg',
  },
  {
    num: '09',
    title: 'Chompion',
    role: 'UI/UX · Product Design · Figma',
    desc: 'Designed a personalized nutrition platform for women, featuring AI-inspired meal planning, dietary preference onboarding, calorie tracking, and health-focused recommendations for conditions like PCOD and pregnancy.',
    tags: ['Figma', 'UI/UX', 'HealthTech', 'Mobile', 'Design'],
    href: 'https://github.com/aziraxariza',
    img: '/projects/project-09.jpg',
  },
]

const EXPERIENCE = [
  {
    period: 'Summer 2026',
    org: 'IGDTUW',
    role: 'Research Intern',
    focus: 'Generative AI & Cybersecurity',
  },
  {
    period: 'Winter 2026',
    org: 'DRDO',
    role: 'R&D Intern',
    focus: 'Advanced Machine Learning & AI',
  },
  {
    period: 'Summer 2025',
    org: 'TaskVeda',
    role: 'AI & Deep Learning Intern',
    focus: 'NLP · ML & DL',
  },
]

/* ─── Intro video (autoplay fullscreen on load) ───── */
function IntroVideo({ onDone }) {
  const videoRef = useRef(null)
  const [muted, setMuted] = useState(true)

  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    // muted autoplay is allowed by all browsers without user interaction
    v.muted = true
    v.play().catch(() => {})

    const handleEnd = () => onDone()
    v.addEventListener('ended', handleEnd)
    return () => v.removeEventListener('ended', handleEnd)
  }, [onDone])

  const unmute = () => {
    const v = videoRef.current
    if (!v) return
    v.muted = false
    v.play().catch(() => {})
    setMuted(false)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      onClick={muted ? unmute : undefined}
      style={{
        position: 'fixed', inset: 0, zIndex: 999,
        background: '#0a0505',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        cursor: muted ? 'pointer' : 'default',
      }}>
      <video
        ref={videoRef}
        src="/hero-video.mp4"
        playsInline
        autoPlay
        muted
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
      {muted && (
        <div style={{
          position: 'absolute', bottom: 90, left: '50%', transform: 'translateX(-50%)',
          background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.25)',
          borderRadius: 4, padding: '8px 20px', color: '#fff',
          fontFamily: "'Jost'", fontSize: '0.78rem', letterSpacing: '0.1em',
          backdropFilter: 'blur(4px)', pointerEvents: 'none',
        }}>
          🔊 TAP FOR SOUND
        </div>
      )}
      <button
        onClick={(e) => { e.stopPropagation(); onDone() }}
        style={{
          position: 'absolute', top: 24, right: 28,
          background: 'rgba(255,255,255,0.12)',
          border: '1px solid rgba(255,255,255,0.25)',
          borderRadius: 4, padding: '6px 16px',
          color: '#fff', fontFamily: "'Jost'", fontSize: '0.78rem',
          letterSpacing: '0.1em', backdropFilter: 'blur(4px)',
        }}>
        SKIP
      </button>
    </motion.div>
  )
}

/* ─── Nav ────────────────────────────────────────── */
function Nav({ setVideoOpen }) {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', h)
    return () => window.removeEventListener('scroll', h)
  }, [])

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.6 }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        padding: '0 max(5vw, 1.5rem)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        height: 60,
        borderBottom: scrolled ? `1px solid ${P.sakura}55` : '1px solid transparent',
        background: scrolled ? 'rgba(249,242,236,0.96)' : 'transparent',
        backdropFilter: scrolled ? 'blur(8px)' : 'none',
        transition: 'all 0.3s ease',
      }}>
      <span style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontWeight: 400, fontSize: '1.15rem', color: P.chocolate,
        letterSpacing: '0.03em',
      }}>
        Ariza <em style={{ color: P.sakura }}>Wasim</em>
      </span>
      <div className="desktop-nav-links" style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
        {['Work', 'Experience', 'Skills', 'Contact'].map(l => (
          <a key={l} href={'#' + l.toLowerCase()}
            style={{ fontSize: '0.75rem', letterSpacing: '0.12em', color: P.aloewood, fontWeight: 400 }}>
            {l.toUpperCase()}
          </a>
        ))}
        <button
          onClick={() => setVideoOpen(true)}
          style={{
            fontSize: '0.72rem', letterSpacing: '0.12em',
            padding: '7px 18px', borderRadius: 2,
            border: `1px solid ${P.sakura}`, background: 'transparent',
            color: P.sakura, fontFamily: "'Jost'",
          }}>
          ▶ REEL
        </button>
      </div>
    </motion.nav>
  )
}

/* ─── Hero ───────────────────────────────────────── */
function Hero({ setVideoOpen }) {
  const { scrollY } = useScroll()
  const imgY = useTransform(scrollY, [0, 500], [0, 60])

  return (
    <section style={{
      minHeight: '100vh',
      display: 'grid', gridTemplateColumns: '1fr 1fr',
      background: P.cream,
      overflow: 'hidden',
    }}>
      {/* Left */}
      <div style={{
        padding: 'max(120px, 15vh) max(4vw, 2rem) 4rem max(7vw, 2.5rem)',
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
        borderRight: `1px solid ${P.sakura}55`,
      }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.9 }}>
          <Label>B.Tech IT · IGDTUW · 2024–2028</Label>
          <h1 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 300,
            fontSize: 'clamp(3.5rem, 6vw, 5.5rem)',
            lineHeight: 0.95,
            color: P.chocolate,
            letterSpacing: '-0.01em',
            marginBottom: '1.5rem',
          }}>
            Ariza<br />
            <em style={{ fontStyle: 'italic', color: P.milkTea }}>Wasim</em>
          </h1>
          <div style={{ width: 40, height: 1, background: P.sakura, marginBottom: '1.5rem' }} />
          <p style={{
            fontSize: '0.95rem', lineHeight: 1.85,
            color: P.aloewood, maxWidth: 340, fontWeight: 300,
            marginBottom: '2.5rem',
          }}>
            Software Engineer building intelligent systems at the intersection of AI, graph technologies, and security.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#work"
              style={{
                padding: '10px 28px', borderRadius: 2,
                background: P.chocolate, color: P.cream,
                fontSize: '0.75rem', letterSpacing: '0.12em',
                fontFamily: "'Jost'", fontWeight: 400,
              }}>VIEW WORK</a>
            <button onClick={() => setVideoOpen(true)}
              style={{
                padding: '10px 28px', borderRadius: 2,
                border: `1px solid ${P.milkTea}`, background: 'transparent',
                color: P.milkTea, fontSize: '0.75rem', letterSpacing: '0.12em',
                fontFamily: "'Jost'", fontWeight: 400,
              }}>▶ PLAY REEL</button>
          </div>
          <div style={{ display: 'flex', gap: '1.5rem', marginTop: '3rem' }}>
            {[
              ['GitHub', 'https://github.com/aziraxariza'],
              ['LinkedIn', 'https://www.linkedin.com/in/ariza-wasim-98652a2ab/'],
              ['Email', 'mailto:arizawasim@gmail.com'],
            ].map(([label, href]) => (
              <a key={label} href={href} target="_blank" rel="noreferrer"
                style={{ fontSize: '0.7rem', letterSpacing: '0.15em', color: P.milkTea, borderBottom: `1px solid ${P.sakura}88`, paddingBottom: 2 }}>
                {label.toUpperCase()}
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Right — image with parallax */}
      <motion.div style={{ position: 'relative', overflow: 'hidden', background: P.parchment }}>
        <motion.div style={{ y: imgY, height: '110%', width: '100%', position: 'absolute', top: 0 }}>
          <img src="/hero-image.png" alt="Ariza Wasim"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
        </motion.div>
        {/* sakura wash overlay */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(236,156,157,0.12) 0%, rgba(240,230,218,0.05) 60%)' }} />
      </motion.div>
    </section>
  )
}

/* ─── Video Modal ─────────────────────────────────── */
function VideoModal({ open, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          onClick={onClose}
          style={{
            position: 'fixed', inset: 0, zIndex: 200,
            background: 'rgba(26,10,5,0.95)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem',
          }}>
          <motion.div initial={{ scale: 0.92, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.92, opacity: 0 }} transition={{ duration: 0.3 }}
            onClick={e => e.stopPropagation()}
            style={{ position: 'relative', width: '100%', maxWidth: 900, aspectRatio: '16/9' }}>
            <video src="/hero-video.mp4" autoPlay controls
              style={{ width: '100%', height: '100%', display: 'block', borderRadius: 2 }} />
            <button onClick={onClose} style={{
              position: 'absolute', top: -36, right: 0,
              background: 'none', border: 'none',
              color: 'rgba(255,255,255,0.6)', fontSize: '0.75rem',
              letterSpacing: '0.15em', fontFamily: "'Jost'",
            }}>ESC / CLOSE ×</button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

/* ─── Work / Projects ────────────────────────────── */
function Work() {
  return (
    <section id="work" style={{ padding: '8rem max(7vw, 2rem)', background: P.cream }}>
      <Reveal>
        <Label>Selected Work</Label>
        <Heading>Projects</Heading>
      </Reveal>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
        {PROJECTS.map((p, i) => (
          <Reveal key={i} delay={i * 0.06}>
            <a href={p.href} target="_blank" rel="noreferrer">
              <div style={{
                border: `1px solid ${P.sakura}55`,
                borderRadius: 4,
                overflow: 'hidden',
                background: P.cream,
                display: 'flex', flexDirection: 'column',
                height: '100%',
                transition: 'transform 0.25s, box-shadow 0.25s, border-color 0.25s',
              }}
                onMouseOver={e => {
                  e.currentTarget.style.transform = 'translateY(-4px)'
                  e.currentTarget.style.boxShadow = `0 12px 30px ${P.sakura}33`
                  e.currentTarget.style.borderColor = P.sakura
                }}
                onMouseOut={e => {
                  e.currentTarget.style.transform = 'none'
                  e.currentTarget.style.boxShadow = 'none'
                  e.currentTarget.style.borderColor = `${P.sakura}55`
                }}>
                {/* equal-size image slot */}
                <div style={{
                  width: '100%', aspectRatio: '16/10',
                  background: `linear-gradient(135deg, ${P.blush} 0%, ${P.parchment} 100%)`,
                  position: 'relative', overflow: 'hidden',
                }}>
                  <img
                    src={p.img}
                    alt={p.title}
                    onError={(e) => { e.currentTarget.style.display = 'none' }}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                  <span style={{
                    position: 'absolute', top: 10, left: 10,
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: '0.8rem', color: P.chocolate,
                    background: 'rgba(249,242,236,0.85)',
                    padding: '2px 9px', borderRadius: 2,
                  }}>{p.num}</span>
                </div>

                <div style={{ padding: '1.5rem 1.4rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.4rem', fontWeight: 400, color: P.chocolate, lineHeight: 1.15, marginBottom: '0.3rem' }}>{p.title}</p>
                  <p style={{ fontSize: '0.68rem', letterSpacing: '0.1em', color: P.sakura, fontWeight: 500, marginBottom: '0.85rem' }}>{p.role}</p>
                  <p style={{ fontSize: '0.82rem', color: P.aloewood, lineHeight: 1.7, fontWeight: 300, flex: 1, marginBottom: '1rem' }}>{p.desc}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {p.tags.map(t => (
                      <span key={t} style={{
                        fontSize: '0.65rem', letterSpacing: '0.06em',
                        border: `1px solid ${P.sakura}66`, borderRadius: 2,
                        padding: '2px 8px', color: P.aloewood,
                        background: `${P.sakura}0d`,
                      }}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

/* ─── Experience ─────────────────────────────────── */
function Experience() {
  return (
    <section id="experience" style={{ padding: '7rem max(7vw, 2rem)', background: P.parchment }}>
      <Reveal>
        <Label>Where I've Worked</Label>
        <Heading italic>Experience</Heading>
      </Reveal>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0', borderTop: `1px solid ${P.sakura}55`, borderLeft: `1px solid ${P.sakura}55` }}>
        {EXPERIENCE.map((e, i) => (
          <Reveal key={i} delay={i * 0.1}>
            <div style={{
              padding: '2.5rem 2rem',
              borderRight: `1px solid ${P.sakura}40`,
              borderBottom: `1px solid ${P.sakura}40`,
              minHeight: 200,
            }}>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '3rem', fontWeight: 300, color: P.blush, lineHeight: 1, marginBottom: '1rem' }}>{e.period}</p>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.3rem', color: P.chocolate, marginBottom: '0.4rem' }}>{e.org}</p>
              <p style={{ fontSize: '0.75rem', letterSpacing: '0.1em', color: P.milkTea, marginBottom: '0.5rem', fontWeight: 300 }}>{e.role.toUpperCase()}</p>
              <p style={{ fontSize: '0.82rem', color: P.aloewood, fontWeight: 300 }}>{e.focus}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

/* ─── Skills carousel ────────────────────────────── */
function Skills() {
  const row1 = SKILLS.slice(0, 14)
  const row2 = SKILLS.slice(14)

  const MarqueeRow = ({ items, reverse, speed = 28 }) => {
    const doubled = [...items, ...items]
    return (
      <div style={{ overflow: 'hidden', width: '100%', padding: '0.6rem 0' }}>
        <motion.div
          style={{ display: 'flex', gap: '1rem', width: 'max-content' }}
          animate={{ x: reverse ? ['0%', '-50%'] : ['-50%', '0%'] }}
          transition={{ duration: speed, repeat: Infinity, ease: 'linear' }}>
          {doubled.map((skill, i) => (
            <div key={i} style={{
              flexShrink: 0,
              padding: '10px 24px',
              border: `1px solid ${P.sakura}55`,
              borderRadius: 2,
              background: P.cream,
              fontFamily: "'Jost', sans-serif",
              fontWeight: 300,
              fontSize: '0.82rem',
              letterSpacing: '0.08em',
              color: P.chocolate,
              whiteSpace: 'nowrap',
            }}>
              {skill}
            </div>
          ))}
        </motion.div>
      </div>
    )
  }

  return (
    <section id="skills" style={{ padding: '7rem 0', background: P.cream, overflow: 'hidden' }}>
      <div style={{ padding: '0 max(7vw, 2rem)', marginBottom: '3rem' }}>
        <Reveal>
          <Label>Capabilities</Label>
          <Heading light>Skills & Technologies</Heading>
        </Reveal>
      </div>
      <MarqueeRow items={row1} reverse={false} speed={35} />
      <MarqueeRow items={row2} reverse={true} speed={30} />

      {/* Categorized logo grid */}
      <div style={{ padding: '5rem max(7vw, 2rem) 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2.5rem' }}>
          {SKILL_CATEGORIES.map((group, gi) => (
            <Reveal key={group.cat} delay={gi * 0.06}>
              <div>
                <p style={{
                  fontSize: '0.7rem', letterSpacing: '0.18em', color: P.sakura,
                  fontWeight: 400, marginBottom: '1.1rem', textTransform: 'uppercase',
                  borderBottom: `1px solid ${P.sakura}66`, paddingBottom: '0.6rem',
                }}>{group.cat}</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  {group.items.map(({ name, Icon }) => (
                    <div key={name} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <Icon size={16} color={P.aloewood} />
                      <span style={{ fontSize: '0.85rem', color: P.chocolate, fontWeight: 300 }}>{name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── About Me carousel ──────────────────────────── */
function AboutMe() {
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(3)

  useEffect(() => {
    const calc = () => {
      const w = window.innerWidth
      setVisible(w < 700 ? 1 : w < 1100 ? 2 : 3)
    }
    calc()
    window.addEventListener('resize', calc)
    return () => window.removeEventListener('resize', calc)
  }, [])

  const maxIndex = Math.max(0, ABOUT_CARDS.length - visible)
  const next = () => setIndex(i => Math.min(i + 1, maxIndex))
  const prev = () => setIndex(i => Math.max(i - 1, 0))

  const cardWidth = 100 / visible

  return (
    <section style={{ padding: '7rem max(7vw, 2rem)', background: P.parchment, overflow: 'hidden' }}>
      <Reveal>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem', marginBottom: '3rem' }}>
          <div>
            <Label>A Little More</Label>
            <Heading italic>About Me</Heading>
          </div>
          <div style={{ display: 'flex', gap: '0.6rem' }}>
            <button onClick={prev} disabled={index === 0} style={{
              width: 38, height: 38, borderRadius: '50%', border: `1px solid ${P.sakura}`,
              background: 'transparent', color: P.aloewood, fontSize: '1rem',
              opacity: index === 0 ? 0.35 : 1,
            }}>←</button>
            <button onClick={next} disabled={index === maxIndex} style={{
              width: 38, height: 38, borderRadius: '50%', border: `1px solid ${P.sakura}`,
              background: 'transparent', color: P.aloewood, fontSize: '1rem',
              opacity: index === maxIndex ? 0.35 : 1,
            }}>→</button>
          </div>
        </div>
      </Reveal>

      <div style={{ overflow: 'hidden' }}>
        <motion.div
          style={{ display: 'flex' }}
          animate={{ x: `-${index * cardWidth}%` }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          {ABOUT_CARDS.map((card, i) => (
            <div key={i} style={{ flex: `0 0 ${cardWidth}%`, padding: '0 0.75rem', boxSizing: 'border-box' }}>
              <div style={{
                background: `linear-gradient(165deg, ${P.cream} 0%, #FCEDEC 100%)`,
                border: `1px solid ${P.sakura}66`,
                borderTop: `4px solid ${P.sakura}`,
                borderRadius: 3,
                padding: '2rem 1.6rem',
                height: 230,
                display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                boxShadow: `0 4px 18px ${P.sakura}1a`,
              }}>
                <p style={{ fontSize: '0.66rem', letterSpacing: '0.2em', color: P.sakura, fontWeight: 500, textTransform: 'uppercase', marginBottom: '1.2rem' }}>{card.label}</p>
                <div>
                  <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.4rem', color: P.chocolate, lineHeight: 1.25, marginBottom: '0.6rem' }}>{card.title}</p>
                  <p style={{ fontSize: '0.78rem', color: P.aloewood, fontWeight: 300 }}>{card.sub}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

/* ─── Contact ────────────────────────────────────── */
function Contact() {
  return (
    <section id="contact" style={{
      padding: '9rem max(7vw, 2rem)',
      background: P.chocolate,
      display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center',
    }}>
      <Reveal>
        <Label><span style={{ color: P.milkTea }}>Get in touch</span></Label>
        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontWeight: 300, fontSize: 'clamp(2.5rem, 4vw, 4rem)',
          color: P.cream, lineHeight: 1.05, marginBottom: '1.5rem',
        }}>
          Let's build<br /><em style={{ color: P.sakura }}>something together.</em>
        </h2>
        <p style={{ fontSize: '0.88rem', color: P.milkTea, lineHeight: 1.8, fontWeight: 300, maxWidth: 380 }}>
        Building at the intersection of AI, research and product engineering. Open to collaborations, internships, and hackathons.
        </p>
      </Reveal>
      <Reveal delay={0.15}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {[
            ['arizawasim07@gmail.com', 'mailto:arizawasim07@gmail.com', 'EMAIL'],
            ['linkedin.com/in/ariza-wasim', 'https://www.linkedin.com/in/ariza-wasim-98652a2ab/', 'LINKEDIN'],
            ['github.com/aziraxariza', 'https://github.com/aziraxariza', 'GITHUB'],
          ].map(([label, href, badge]) => (
            <a key={badge} href={href} target="_blank" rel="noreferrer"
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '1.25rem 1.5rem',
                border: `1px solid rgba(242,207,200,0.2)`,
                borderRadius: 2,
                transition: 'border-color 0.2s, background 0.2s',
              }}
              onMouseOver={e => { e.currentTarget.style.borderColor = P.sakura; e.currentTarget.style.background = 'rgba(236,156,157,0.06)' }}
              onMouseOut={e => { e.currentTarget.style.borderColor = 'rgba(242,207,200,0.2)'; e.currentTarget.style.background = 'transparent' }}>
              <span style={{ fontSize: '0.88rem', color: P.cream, fontWeight: 300 }}>{label}</span>
              <span style={{ fontSize: '0.62rem', letterSpacing: '0.15em', color: P.sakura }}>{badge} →</span>
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  )
}

/* ─── Footer ─────────────────────────────────────── */
function Footer() {
  return (
    <footer style={{
      padding: '1.5rem max(7vw, 2rem)',
      background: P.ink,
      borderTop: `2px solid ${P.sakura}`,
      display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem',
    }}>
      <p style={{ fontSize: '0.68rem', color: 'rgba(170,127,102,0.5)', letterSpacing: '0.1em' }}>
        © 2026 ARIZA WASIM
      </p>
      <p style={{ fontSize: '0.68rem', color: 'rgba(170,127,102,0.4)', letterSpacing: '0.08em' }}>
        IGDTUW · B.TECH IT · NEW DELHI
      </p>
    </footer>
  )
}

/* ─── Background Music Toggle ────────────────────── */
function MusicToggle() {
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)

  const toggle = () => {
    const a = audioRef.current
    if (!a) return
    if (playing) {
      a.pause()
      setPlaying(false)
    } else {
      a.volume = 0.35
      a.play().catch(() => {})
      setPlaying(true)
    }
  }

  return (
    <>
      <audio ref={audioRef} src="/bgm.mp3" loop />
      <motion.button
        onClick={toggle}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        style={{
          position: 'fixed', bottom: 24, right: 24, zIndex: 60,
          width: 48, height: 48, borderRadius: '50%',
          background: P.cream,
          border: `1px solid ${P.sakura}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: `0 4px 16px ${P.sakura}40`,
          gap: 2,
        }}
        title={playing ? 'Pause music' : 'Play music'}
      >
        {playing ? (
          <div style={{ display: 'flex', gap: 3, alignItems: 'flex-end', height: 16 }}>
            {[0, 1, 2].map(i => (
              <motion.span key={i}
                animate={{ height: ['30%', '100%', '30%'] }}
                transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.15, ease: 'easeInOut' }}
                style={{ width: 3, background: P.sakura, borderRadius: 2, display: 'block' }}
              />
            ))}
          </div>
        ) : (
          <svg width="16" height="16" viewBox="0 0 16 16" fill={P.sakura}>
            <path d="M3 2.5v11l10-5.5-10-5.5z" />
          </svg>
        )}
      </motion.button>
    </>
  )
}

/* ─── App ────────────────────────────────────────── */
export default function App() {
  const [introDone, setIntroDone] = useState(false)
  const [videoOpen, setVideoOpen] = useState(false)

  return (
    <>
      <AnimatePresence>
        {!introDone && <IntroVideo onDone={() => setIntroDone(true)} />}
      </AnimatePresence>

      {introDone && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <Nav setVideoOpen={setVideoOpen} />
          <VideoModal open={videoOpen} onClose={() => setVideoOpen(false)} />
          <MusicToggle />
          <main>
            <Hero setVideoOpen={setVideoOpen} />
            <Work />
            <Experience />
            <Skills />
            <AboutMe />
            <Contact />
          </main>
          <Footer />
        </motion.div>
      )}
    </>
  )
}
