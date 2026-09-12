import { useState } from 'react';

function Marquee({ items, bg = '#5b5bff', color = '#fff7a8' }: { items: string[]; bg?: string; color?: string }) {
  const row = [...items, ...items, ...items, ...items];
  return (
    <div className="overflow-hidden border-y-4 border-black py-2" style={{ background: bg }}>
      <div className="marquee-track gap-8 pr-8">
        {[0, 1].map((half) => (
          <div key={half} className="flex shrink-0 items-center gap-8">
            {row.map((t, i) => (
              <span key={i} className="font-pixel flex items-center gap-8 text-[13px]" style={{ color }}>
                {t} <span>★</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function PixelCloud({ className = '', scale = 1 }: { className?: string; scale?: number }) {
  return (
    <div className={`pixel-cloud ${className}`} style={{ transform: `scale(${scale})`, width: 120, height: 36 }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 10px)', gridAutoRows: 9, gap: 0 }}>
        {['....XXXX....', '..XXXXXXXX..', '.XXXXXXXXXX.', 'XXXXXXXXXXXX'].map((r, y) =>
          r.split('').map((c, x) => (
            <div key={`${y}-${x}`} style={{ width: 10, height: 9, background: c === 'X' ? '#c9b8ff' : 'transparent', boxShadow: c === 'X' ? 'inset -2px -2px 0 #ff8fc7, inset 2px 2px 0 #ffffff' : 'none' }} />
          ))
        )}
      </div>
    </div>
  );
}

function PixelStar({ left, top, delay = '0s', size = 14 }: { left: string; top: string; delay?: string; size?: number }) {
  return <div className="star absolute select-none" style={{ left, top, animationDelay: delay, color: '#ffe45e', fontSize: size }}>★</div>;
}

function RetroWindow({ title, children, className = '', wide = false }: { title: string; children: React.ReactNode; className?: string; wide?: boolean }) {
  return (
    <div className={`retro-window ${className}`} style={{ maxWidth: wide ? 340 : 300 }}>
      <div className="window-titlebar">
        <div className="window-dots"><i /><i /><i /></div>
        <span className="font-pixel title-pill" style={{ fontSize: 8 }}>{title}</span>
        <div className="window-dots"><i /><i /><i /></div>
      </div>
      <div className="font-body p-3 text-[13.5px] leading-snug" style={{ color: '#7c1149' }}>{children}</div>
    </div>
  );
}

function PixelGirl({ big = false }: { big?: boolean }) {
  const s = big ? 7 : 5;
  const px: [number, number, string][] = [
    [3, 0, '#5b2b1a'], [4, 0, '#5b2b1a'], [5, 0, '#5b2b1a'], [6, 0, '#5b2b1a'],
    [2, 1, '#5b2b1a'], [3, 1, '#7a3f24'], [4, 1, '#7a3f24'], [5, 1, '#7a3f24'], [6, 1, '#7a3f24'], [7, 1, '#5b2b1a'],
    [1, 2, '#ff8fc7'], [2, 2, '#7a3f24'], [3, 2, '#ffcf9e'], [4, 2, '#ffcf9e'], [5, 2, '#ffcf9e'], [6, 2, '#ffcf9e'], [7, 2, '#7a3f24'], [8, 2, '#ff8fc7'],
    [1, 3, '#3dff9e'], [2, 3, '#5b2b1a'], [3, 3, '#ffcf9e'], [4, 3, '#3a1c22'], [5, 3, '#ffcf9e'], [6, 3, '#3a1c22'], [7, 3, '#5b2b1a'], [8, 3, '#3dff9e'],
    [2, 4, '#5b2b1a'], [3, 4, '#ffcf9e'], [4, 4, '#ff9e9e'], [5, 4, '#ffcf9e'], [6, 4, '#ff9e9e'], [7, 4, '#5b2b1a'],
    [2, 5, '#5b2b1a'], [3, 5, '#ffcf9e'], [4, 5, '#ff6e9e'], [5, 5, '#ffcf9e'], [6, 5, '#5b2b1a'],
    [3, 6, '#ffffff'], [4, 6, '#ffffff'], [5, 6, '#ffffff'], [6, 6, '#ffffff'],
    [2, 7, '#ffcf9e'], [3, 7, '#ffffff'], [4, 7, '#ff2f9d'], [5, 7, '#ffffff'], [6, 7, '#ffcf9e'],
    [2, 8, '#ffcf9e'], [3, 8, '#3dff9e'], [4, 8, '#3dff9e'], [5, 8, '#3dff9e'], [6, 8, '#ffcf9e'],
    [3, 9, '#ffffff'], [4, 9, '#ffffff'], [5, 9, '#ffffff'],
    [2, 10, '#ffffff'], [3, 10, '#8a6fff'], [5, 10, '#8a6fff'], [6, 10, '#ffffff'],
  ];
  const shadow = px.map(([x, y, c]) => `${x * s}px ${y * s}px 0 0 ${c}`).join(',');
  return (
    <div className="floaty" style={{ filter: 'drop-shadow(4px 4px 0 rgba(0,0,0,0.6))', width: 10 * s, height: 12 * s }}>
      <div style={{ width: s, height: s, boxShadow: shadow }} />
      <div className="mx-auto mt-2 h-2 w-20 bg-black/60" style={{ borderRadius: 999 }} />
    </div>
  );
}

const TOOLS = ['Figma', 'Procreate', 'Illustrator', 'Canva', 'Blender'];
const SKILLS = ['User Interface Design (UI)', 'User Research', 'Design Thinking', 'Prototyping', 'Usability Testing', 'Visual Design', 'Graphic Design', 'User Empathy', 'Visual thinking', 'Reliability'];
const PROJECTS = [
  { title: 'Cozy Dev App', tag: 'MISSION 01', desc: 'A cute habit tracker with pixel pets, streaks and cozy rewards that make shipping daily wins fun.', stack: ['React', 'Tailwind', 'Vite'], color: '#ff2f9d' },
  { title: 'Pixel Shop UI', tag: 'MISSION 02', desc: 'Playful e-commerce UI with game-style quests, chests and collectible badges to boost checkout.', stack: ['Figma', 'Prototyping', 'UI'], color: '#3dff9e' },
  { title: 'Tama Design System', tag: 'MISSION 03', desc: 'A pink Tamagotchi-inspired design system: chunky buttons, retro windows and readable pixel type.', stack: ['Design System', 'CSS', 'Docs'], color: '#fff7a8' },
];

export default function App() {
  const [started, setStarted] = useState(false);
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  return (
    <div className="font-body min-h-screen overflow-x-hidden" style={{ background: '#0d0d1d' }}>
      <div className="mx-auto flex items-center justify-between px-4 py-2" style={{ maxWidth: 1100 }}>
        <span className="font-pixel text-[10px]" style={{ color: '#ff6ec7' }}>XP: UI/UX LEVEL 03</span>
        <div className="flex items-center gap-2">
          <span style={{ color: '#ff6ec7' }}>♥</span>
          <div style={{ width: 90, height: 10, background: '#fff', border: '2px solid #000' }}>
            <div style={{ width: '70%', height: '100%', background: '#3dff9e' }} />
          </div>
          <span className="font-pixel text-[10px]" style={{ color: '#ffb3d9' }}>PLAYER 01</span>
        </div>
      </div>
      <header className="relative mx-auto px-4 pt-2" style={{ maxWidth: 1100 }}>
        <PixelCloud className="absolute" scale={1} />
        <div className="absolute right-8 top-0 hidden md:block"><PixelCloud scale={1.2} /></div>
        <PixelStar left="2%" top="20%" size={16} />
        <PixelStar left="95%" top="18%" size={18} delay="0.6s" />
        <div className="hero-glow scanlines relative overflow-hidden rounded-2xl border-4 bg-black px-4 py-10 text-center" style={{ borderColor: '#3dff9e' }}>
          <p className="font-pixel hero-year text-xl md:text-3xl">2026</p>
          <h1 className="font-pixel hero-title mt-4 text-3xl leading-relaxed md:text-6xl">PORTFOLIO</h1>
          <button onClick={() => { setStarted(true); scrollTo('level01'); }} className="pixel-btn pixel-btn-green mx-auto mt-8 block px-8 py-4 text-sm bounce-soft">START</button>
          {started && <p className="font-pixel mt-4 text-[10px]" style={{ color: '#3dff9e' }}>GAME STARTED!</p>}
        </div>
        <div className="relative mt-[-8px] flex items-end justify-between">
          <div className="ml-4"><PixelGirl /></div>
          <div className="floaty mr-10 hidden items-end gap-6 sm:flex">
            <div style={{ fontSize: 34 }}>🐱</div>
            <div style={{ fontSize: 44 }}>🌳</div>
          </div>
        </div>
      </header>
      <div className="grass-strip h-4 w-full border-y-4 border-black" />
      <Marquee items={['About Me', 'About Me', 'About Me', 'About Me']} />
      <div className="grass-strip h-3 w-full" />
      <section id="level01" className="relative mx-auto px-4 py-10" style={{ maxWidth: 1100 }}>
        <PixelStar left="6%" top="12%" size={26} delay="0.4s" />
        <div className="grid gap-8 lg:grid-cols-[220px_1fr_320px]">
          <div>
            <h2 className="font-pixel text-4xl leading-snug" style={{ color: '#ff6ec7' }}>Level<br />01</h2>
            <p className="font-pixel mt-4 text-[11px] leading-relaxed" style={{ color: '#ff8fc7' }}>Meet the<br />player</p>
            <p className="font-pixel mt-6 text-xl leading-relaxed" style={{ color: '#3dff9e' }}>Dilara<br />Wick</p>
            <div className="mt-6 flex gap-2">
              <button onClick={() => scrollTo('missions')} className="pixel-btn px-3 py-2" style={{ background: '#ff2f9d', color: '#fff', border: '3px solid #000', boxShadow: '3px 3px 0 #000' }}>PROJECTS</button>
              <button onClick={() => scrollTo('contact')} className="pixel-btn px-3 py-2" style={{ background: '#fff7a8', color: '#7c1149', border: '3px solid #000', boxShadow: '3px 3px 0 #000' }}>TALK</button>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="ds-top w-full p-3" style={{ maxWidth: 420 }}>
              <div className="ds-screen relative flex items-center justify-center p-6" style={{ minHeight: 210 }}>
                <span className="absolute left-4 top-1/2" style={{ color: '#ffe45e', fontSize: 26 }}>★</span>
                <PixelGirl big />
              </div>
            </div>
            <div className="ds-body w-full p-4" style={{ maxWidth: 460 }}>
              <div className="ds-touch mx-auto mt-2 p-3" style={{ maxWidth: 300, minHeight: 90 }} />
            </div>
          </div>
          <div className="flex justify-center lg:justify-start">
            <RetroWindow title="Hello !!" wide className="h-fit">
              <p><b>Player:</b> Dilara Wick</p>
              <p className="mt-1"><b>Role:</b> UI/UX and visual Designer</p>
              <p className="mt-1"><b>Mission:</b> Create thoughtful, interesting and user friendly designs.</p>
              <p className="mt-1"><b>Status:</b> Ready to explore, build, and win.</p>
              <p className="mt-2 font-semibold">Lets start the game!</p>
            </RetroWindow>
          </div>
        </div>
        <div className="mt-6 grid w-full gap-4 md:grid-cols-3" style={{ maxWidth: 720, margin: '24px auto 0' }}>
          <RetroWindow title="Weapons Mastery">
            <div className="flex flex-wrap gap-2">
              {TOOLS.map((t) => (<span key={t} className="font-body px-2 py-1 text-[12px] font-semibold" style={{ background: '#1a0f24', color: '#ffd7ea', border: '2px solid #ff2f9d' }}>{t}</span>))}
            </div>
          </RetroWindow>
          <RetroWindow title="Training Log">
            <p className="font-semibold">Bachelor of design (ux/ui)</p>
            <p>Chitkara University, Punjab</p>
            <p className="font-pixel mt-2 text-[9px]">2023-27</p>
          </RetroWindow>
          <RetroWindow title="Skills Mastery">
            <ul className="list-none space-y-1 text-[12.5px] font-medium">
              {SKILLS.map((s) => (<li key={s}>• {s}</li>))}
            </ul>
          </RetroWindow>
        </div>
      </section>
      <Marquee items={['Missions', 'Missions', 'Missions', 'Missions']} bg="#ff2f9d" color="#fff7a8" />
      <section id="missions" className="mx-auto px-4 py-12" style={{ maxWidth: 1100 }}>
        <h2 className="font-pixel text-center text-2xl md:text-3xl" style={{ color: '#ff6ec7', textShadow: '2px 2px 0 #000' }}>★ MISSIONS ★</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {PROJECTS.map((p) => (
            <article key={p.title} className="retro-window overflow-hidden">
              <div className="window-titlebar">
                <div className="window-dots"><i /><i /><i /></div>
                <span className="font-pixel title-pill" style={{ fontSize: 8 }}>{p.tag}</span>
                <div className="window-dots"><i /><i /><i /></div>
              </div>
              <div className="p-4" style={{ background: '#ffe3f1' }}>
                <h3 className="font-pixel text-[13px] leading-relaxed" style={{ color: '#7c1149' }}>{p.title}</h3>
                <p className="font-body mt-2 text-[13.5px]" style={{ color: '#7c1149' }}>{p.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.stack.map((s) => (<span key={s} className="font-body px-2 py-1 text-[11px] font-bold" style={{ background: '#fff', border: '2px solid #7c1149', color: '#7c1149' }}>{s}</span>))}
                </div>
                <button className="pixel-btn mt-4 w-full py-3" style={{ background: '#3dff9e', border: '3px solid #000', boxShadow: '3px 3px 0 #000', color: '#063' }}>PLAY ▶</button>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section id="contact" className="mx-auto px-4 pb-10" style={{ maxWidth: 1100 }}>
        <div className="relative overflow-hidden rounded-2xl border-4 border-black p-8 text-center" style={{ background: '#ffe3f1', boxShadow: '8px 8px 0 #ff2f9d' }}>
          <h2 className="font-pixel text-xl md:text-2xl" style={{ color: '#c2145c' }}>GAME OVER? NEVER!</h2>
          <p className="font-body mx-auto mt-3 max-w-xl text-[15px] font-medium" style={{ color: '#7c1149' }}>Lets co-op on your next cute idea — portfolio quests, cozy apps, or pixel-perfect design systems.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a href="mailto:hello@dilara.dev" className="pixel-btn px-6 py-3 no-underline" style={{ background: '#ff2f9d', color: '#fff', border: '3px solid #000', boxShadow: '4px 4px 0 #000' }}>EMAIL ME</a>
            <button onClick={() => scrollTo('level01')} className="pixel-btn px-6 py-3" style={{ background: '#fff', border: '3px solid #000', boxShadow: '4px 4px 0 #000', color: '#7c1149' }}>RESTART</button>
          </div>
          <p className="font-pixel mt-6 text-[9px]" style={{ color: '#c2145c' }}>© 2026 DILARA WICK</p>
        </div>
      </section>
      <div className="night-ground h-10 w-full border-t-4 border-black" />
    </div>
  );
}