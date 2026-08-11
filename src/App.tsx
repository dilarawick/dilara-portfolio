import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Code2, Mail, PenTool, Sparkles } from 'lucide-react'

const projects = [
  {
    title: 'Banking Application',
    description: 'A secure digital banking experience with a polished, reassuring interface.',
    stack: ['Java', 'Spring Boot', 'MySQL'],
  },
  {
    title: 'Utility Management System',
    description: 'A practical admin platform focused on service flow and operational clarity.',
    stack: ['PHP', 'JavaScript', 'SQL Server'],
  },
  {
    title: 'Smart Tourist Guide',
    description: 'A mobile-first travel assistant built to make exploration feel effortless.',
    stack: ['Flutter', 'Node.js', 'PostgreSQL'],
  },
  {
    title: 'IoT Smart Warehouse',
    description: 'An intelligent monitoring system connecting hardware, data, and real-time feedback.',
    stack: ['IoT', 'RFID', 'Sensors'],
  },
]

const designItems = ['UI/UX', 'Figma', 'Event Flyers', 'Social Media', 'Branding']

function App() {
  const [activeView, setActiveView] = useState<'develop' | 'design' | null>(null)
  const isDevelop = activeView === 'develop'
  const isDesign = activeView === 'design'

  return (
    <div className="min-h-screen bg-transparent text-slate-900">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 lg:px-8">
        <a href="#home" className="text-lg font-semibold uppercase tracking-[0.3em] text-violet-700">
          Dilara
        </a>
        <nav className="hidden gap-6 text-sm font-medium text-slate-600 md:flex">
          <a href="#projects" className="transition hover:text-violet-700">Projects</a>
          <a href="#designs" className="transition hover:text-violet-700">Designs</a>
          <a href="#about" className="transition hover:text-violet-700">About</a>
          <a href="#contact" className="transition hover:text-violet-700">Contact</a>
        </nav>
      </header>

      <main id="home" className="mx-auto flex max-w-6xl flex-col gap-10 px-6 pb-16 lg:px-8">
        <section className="rounded-[36px] border border-violet-100 bg-white/85 p-8 shadow-[0_25px_70px_-25px_rgba(109,40,217,0.35)] backdrop-blur-xl lg:p-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="mx-auto max-w-4xl text-center"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-violet-600">
              Software Engineering Undergraduate
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-[0.15em] text-slate-900 sm:text-5xl lg:text-6xl">
              DILARA SETHMINI
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">
              I build digital experiences through code and creative design, bringing thoughtful interfaces to life with a balance of structure and personality.
            </p>
          </motion.div>

          <div className="relative mt-10 overflow-hidden rounded-[32px] border border-violet-200 bg-slate-950 p-4 lg:p-6">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(167,139,250,0.25),_transparent_45%),radial-gradient(circle_at_bottom_right,_rgba(244,114,182,0.2),_transparent_40%)]" />
            <div className="relative mx-auto flex max-w-5xl flex-col gap-4 lg:flex-row lg:gap-6">
              <motion.button
                type="button"
                whileHover={{ y: -4, scale: 1.01, rotateY: -4 }}
                onMouseEnter={() => setActiveView('develop')}
                onMouseLeave={() => setActiveView(null)}
                onClick={() => setActiveView('develop')}
                animate={
                  isDevelop
                    ? { x: 0, rotateY: -12, scale: 1.03, opacity: 1 }
                    : isDesign
                      ? { x: -92, rotateY: -24, scale: 0.92, opacity: 0.5 }
                      : { x: 0, rotateY: 0, scale: 1, opacity: 1 }
                }
                transition={{ type: 'spring', stiffness: 120, damping: 18 }}
                style={{ transformStyle: 'preserve-3d' }}
                className="group flex-1 rounded-[28px] border border-violet-200/60 bg-gradient-to-br from-violet-50 to-white p-8 text-left shadow-[0_20px_45px_-20px_rgba(109,40,217,0.5)]"
              >
                <div className="flex items-center justify-between">
                  <div className="rounded-2xl bg-violet-600 p-3 text-white">
                    <Code2 size={22} />
                  </div>
                  <span className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-600">
                    Develop
                  </span>
                </div>
                <h2 className="mt-6 text-2xl font-semibold text-slate-900">Projects</h2>
                <p className="mt-3 text-slate-600">
                  Software I&apos;ve built, from full-stack systems to intelligent product ideas.
                </p>
                <div className="mt-6 inline-flex items-center gap-2 font-semibold text-violet-700">
                  Explore <ArrowRight size={16} className="transition group-hover:translate-x-1" />
                </div>
              </motion.button>

              <motion.button
                type="button"
                whileHover={{ y: -4, scale: 1.01, rotateY: 4 }}
                onMouseEnter={() => setActiveView('design')}
                onMouseLeave={() => setActiveView(null)}
                onClick={() => setActiveView('design')}
                animate={
                  isDesign
                    ? { x: 0, rotateY: 12, scale: 1.03, opacity: 1 }
                    : isDevelop
                      ? { x: 92, rotateY: 24, scale: 0.92, opacity: 0.5 }
                      : { x: 0, rotateY: 0, scale: 1, opacity: 1 }
                }
                transition={{ type: 'spring', stiffness: 120, damping: 18 }}
                style={{ transformStyle: 'preserve-3d' }}
                className="group flex-1 rounded-[28px] border border-fuchsia-200/60 bg-gradient-to-br from-fuchsia-50 to-white p-8 text-left shadow-[0_20px_45px_-20px_rgba(192,132,252,0.45)]"
              >
                <div className="flex items-center justify-between">
                  <div className="rounded-2xl bg-fuchsia-600 p-3 text-white">
                    <PenTool size={22} />
                  </div>
                  <span className="text-sm font-semibold uppercase tracking-[0.25em] text-fuchsia-600">
                    Design
                  </span>
                </div>
                <h2 className="mt-6 text-2xl font-semibold text-slate-900">Designs</h2>
                <p className="mt-3 text-slate-600">
                  Creative visual work including UI/UX, branding, and polished digital content.
                </p>
                <div className="mt-6 inline-flex items-center gap-2 font-semibold text-fuchsia-700">
                  Explore <ArrowRight size={16} className="transition group-hover:translate-x-1" />
                </div>
              </motion.button>
            </div>

            <motion.div
              initial={false}
              animate={{ opacity: activeView ? 1 : 0.9, y: activeView ? 0 : 8 }}
              transition={{ duration: 0.25 }}
              className="relative mt-4 rounded-[24px] border border-white/10 bg-slate-900/80 px-6 py-5 text-white"
            >
              <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.3em] text-violet-200">
                <Sparkles size={15} />
                {isDevelop ? 'Development mode' : isDesign ? 'Design mode' : 'Explore the path'}
              </div>
              <div className="mt-3 flex flex-wrap gap-2 text-sm text-violet-100">
                {isDevelop ? (
                  <>
                    <span className="rounded-full bg-white/10 px-3 py-1">React</span>
                    <span className="rounded-full bg-white/10 px-3 py-1">Spring Boot</span>
                    <span className="rounded-full bg-white/10 px-3 py-1">Clean architecture</span>
                  </>
                ) : isDesign ? (
                  <>
                    <span className="rounded-full bg-white/10 px-3 py-1">Figma</span>
                    <span className="rounded-full bg-white/10 px-3 py-1">Visual storytelling</span>
                    <span className="rounded-full bg-white/10 px-3 py-1">Brand systems</span>
                  </>
                ) : (
                  <span className="rounded-full bg-white/10 px-3 py-1">Hover or click either side to preview the experience</span>
                )}
              </div>
            </motion.div>
          </div>
        </section>

        <section id="projects" className="space-y-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-600">Projects</p>
            <h2 className="mt-2 text-3xl font-semibold text-slate-900">Software I&apos;ve built</h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {projects.map((project) => (
              <article key={project.title} className="rounded-[24px] border border-violet-100 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900">{project.title}</h3>
                <p className="mt-3 text-slate-600">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="rounded-full bg-violet-50 px-3 py-1 text-sm text-violet-700">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="designs" className="rounded-[28px] border border-violet-100 bg-white/80 p-8 shadow-sm lg:p-10">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-600">Design</p>
              <h2 className="mt-2 text-3xl font-semibold text-slate-900">Creative work & visual identity</h2>
            </div>
            <p className="max-w-xl text-slate-600">
              The visual side of my work focuses on storytelling, clarity, and polished presentation across digital products and brand assets.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {designItems.map((item) => (
              <div key={item} className="rounded-[20px] border border-violet-100 bg-gradient-to-br from-violet-50 to-white p-5 text-center text-slate-700 shadow-sm">
                {item}
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="grid gap-6 rounded-[28px] border border-violet-100 bg-white/70 p-8 shadow-sm lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-600">About</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900">A thoughtful developer with a strong eye for detail.</h2>
          </div>
          <p className="text-lg text-slate-600">
            I enjoy transforming ideas into polished digital experiences with clean structure, smooth interactions, and a modern visual language. My focus is on building interfaces that feel both beautiful and practical.
          </p>
        </section>

        <section id="contact" className="rounded-[28px] border border-violet-100 bg-violet-950 p-8 text-white lg:p-10">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-200">Contact</p>
              <h2 className="mt-2 text-3xl font-semibold">Ready to build something memorable?</h2>
              <p className="mt-3 max-w-2xl text-violet-100">
                If you want a modern portfolio, landing page, or polished digital experience, I&apos;d love to hear from you.
              </p>
            </div>
            <a
              href="mailto:hello@dilara.dev"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 font-semibold text-violet-950 transition hover:bg-violet-100"
            >
              <Mail size={18} />
              hello@dilara.dev
            </a>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
