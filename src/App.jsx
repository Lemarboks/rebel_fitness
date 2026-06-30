import { useState } from 'react'

const navItems = [
  ['About', '#about'],
  ['Programs', '#programs'],
  ['Memberships', '#memberships'],
  ['Results', '#results'],
  ['Contact', '#contact'],
]

const stats = [
  ['500+', 'Athletes coached'],
  ['24/7', 'Mindset'],
  ['6', 'Training styles'],
]

const programs = [
  {
    title: 'Strength Lab',
    description: 'Progressive barbell, dumbbell, and machine-based training built for real strength.',
    tag: 'Build muscle',
  },
  {
    title: 'Rebel Conditioning',
    description: 'High-output circuits, sled pushes, ropes, intervals, and sweat-heavy team energy.',
    tag: 'Burn fast',
  },
  {
    title: 'Bootcamp ATL',
    description: 'Group sessions for every level with coaching, accountability, and weekly structure.',
    tag: 'Train together',
  },
  {
    title: 'Mobility + Recovery',
    description: 'Move better, reduce soreness, and stay ready for the next hard training block.',
    tag: 'Recover smarter',
  },
]

const memberships = [
  {
    name: 'Starter',
    price: '$99', // Replace with Rebel Fitness ATL actual monthly pricing.
    details: 'Open gym access, intro assessment, and member app access.',
  },
  {
    name: 'Unlimited',
    price: '$169', // Replace with Rebel Fitness ATL actual monthly pricing.
    details: 'Unlimited classes, open gym, progress check-ins, and priority booking.',
    featured: true,
  },
  {
    name: 'Elite Coaching',
    price: 'Custom', // Replace with Rebel Fitness ATL actual personal coaching package price.
    details: 'Personal training plan, nutrition guidance, private sessions, and weekly accountability.',
  },
]

const results = [
  'Fat loss and body recomposition programs',
  'Strength gains with measurable progress tracking',
  'Beginner-friendly coaching with advanced standards',
  'Community accountability that keeps members consistent',
]

const galleryImages = [
  // Replace these placeholder image URLs with real Rebel Fitness ATL gym, coach, and member photos.
  'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1571019613914-85f342c6a11e?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1549476464-37392f717541?auto=format&fit=crop&w=900&q=80',
]

const testimonials = [
  {
    quote: 'Rebel gave me the structure I needed. The coaches push hard, but they know exactly how to meet you where you are.',
    name: 'Member Name', // Replace with a real member testimonial name.
  },
  {
    quote: 'The energy is different here. I got stronger, dropped weight, and actually started looking forward to training.',
    name: 'Member Name', // Replace with a real member testimonial name.
  },
  {
    quote: 'Premium facility, serious programming, and a community that makes you show up even on the hard days.',
    name: 'Member Name', // Replace with a real member testimonial name.
  },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="min-h-screen overflow-hidden bg-[#070707] text-white">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} closeMenu={closeMenu} />
      <main>
        <Hero />
        <About />
        <Programs />
        <Memberships />
        <PersonalTraining />
        <Results />
        <Gallery />
        <Testimonials />
        <Contact />
        <SocialCta />
      </main>
      <Footer />
    </div>
  )
}

function Header({ menuOpen, setMenuOpen, closeMenu }) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/75 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#top" className="group flex items-center gap-3" onClick={closeMenu}>
          <span className="flex h-11 w-11 items-center justify-center border border-red-500 bg-red-600 text-lg font-black tracking-tight shadow-[0_0_30px_rgba(220,38,38,0.35)]">RF</span>
          <span>
            <span className="block text-sm font-black uppercase tracking-[0.24em]">Rebel</span>
            <span className="block text-xs font-semibold uppercase tracking-[0.32em] text-zinc-400">Fitness ATL</span>
          </span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {navItems.map(([label, href]) => (
            <a key={label} href={href} className="text-sm font-bold uppercase tracking-[0.18em] text-zinc-300 transition hover:text-white">
              {label}
            </a>
          ))}
        </div>

        <a href="#contact" className="hidden bg-white px-5 py-3 text-sm font-black uppercase tracking-[0.16em] text-black transition hover:bg-red-600 hover:text-white lg:inline-flex">
          Join Now
        </a>

        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-11 w-11 items-center justify-center border border-white/15 lg:hidden"
        >
          <span className="space-y-1.5">
            <span className="block h-0.5 w-5 bg-white"></span>
            <span className="block h-0.5 w-5 bg-white"></span>
            <span className="block h-0.5 w-5 bg-white"></span>
          </span>
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-white/10 bg-black px-5 py-5 lg:hidden">
          <div className="grid gap-2">
            {navItems.map(([label, href]) => (
              <a key={label} href={href} onClick={closeMenu} className="border border-white/10 px-4 py-3 text-sm font-bold uppercase tracking-[0.18em] text-zinc-200">
                {label}
              </a>
            ))}
            <a href="#contact" onClick={closeMenu} className="bg-red-600 px-4 py-3 text-center text-sm font-black uppercase tracking-[0.18em] text-white">
              Join Now
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center pt-24">
      {/* Replace this placeholder background with a real Rebel Fitness ATL hero image or video still. */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517963879433-6ad2b056d712?auto=format&fit=crop&w=1800&q=85')] bg-cover bg-center"></div>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.92)_0%,rgba(0,0,0,0.76)_43%,rgba(0,0,0,0.28)_100%)]"></div>
      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#070707] to-transparent"></div>

      <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-5 py-24 lg:grid-cols-[1.05fr_0.65fr] lg:px-8">
        <div className="reveal max-w-4xl">
          <p className="mb-5 inline-flex border border-red-500/50 bg-red-600/15 px-4 py-2 text-xs font-black uppercase tracking-[0.26em] text-red-200">
            Atlanta strength. Rebel mindset.
          </p>
          <h1 className="max-w-4xl text-5xl font-black uppercase leading-[0.9] tracking-normal text-white sm:text-7xl lg:text-8xl">
            Train harder. Move better. Become unstoppable.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-300 sm:text-xl">
            Rebel Fitness ATL is built for people who want premium coaching, gritty training, and a community that refuses average.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#contact" className="bg-red-600 px-7 py-4 text-center text-sm font-black uppercase tracking-[0.18em] text-white shadow-[0_18px_55px_rgba(220,38,38,0.32)] transition hover:-translate-y-1 hover:bg-red-500">
              Join Now
            </a>
            <a href="#programs" className="border border-white/20 bg-white/10 px-7 py-4 text-center text-sm font-black uppercase tracking-[0.18em] text-white backdrop-blur transition hover:-translate-y-1 hover:bg-white hover:text-black">
              View Classes
            </a>
          </div>
        </div>

        <div className="reveal grid content-end gap-4 lg:pt-24" style={{ animationDelay: '120ms' }}>
          <div className="border border-white/15 bg-black/55 p-5 backdrop-blur-md">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-zinc-400">This week at Rebel</p>
            <div className="mt-5 grid gap-3">
              {['Strength Lab', 'Rebel Conditioning', 'Bootcamp ATL'].map((item) => (
                <div key={item} className="flex items-center justify-between border border-white/10 bg-white/[0.04] px-4 py-3">
                  <span className="font-bold">{item}</span>
                  <span className="text-sm text-red-300">Book</span>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-3 border border-white/10 bg-white/[0.06] backdrop-blur">
            {stats.map(([value, label]) => (
              <div key={label} className="border-r border-white/10 p-4 last:border-r-0">
                <p className="text-2xl font-black text-white">{value}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.14em] text-zinc-400">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function SectionIntro({ eyebrow, title, copy }) {
  return (
    <div className="reveal mx-auto mb-12 max-w-3xl text-center">
      <p className="text-xs font-black uppercase tracking-[0.28em] text-red-400">{eyebrow}</p>
      <h2 className="mt-3 text-4xl font-black uppercase leading-tight text-white md:text-5xl">{title}</h2>
      {copy && <p className="mt-5 text-lg leading-8 text-zinc-400">{copy}</p>}
    </div>
  )
}

function About() {
  return (
    <section id="about" className="bg-[#070707] px-5 py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1fr] lg:items-center">
        <div className="reveal overflow-hidden border border-white/10 bg-zinc-950">
          {/* Replace with a real gym floor, coach, or community photo. */}
          <img src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=1100&q=80" alt="Athlete training in a premium gym" className="h-full min-h-[420px] w-full object-cover opacity-90" />
        </div>
        <div className="reveal lg:pl-8" style={{ animationDelay: '100ms' }}>
          <p className="text-xs font-black uppercase tracking-[0.28em] text-red-400">About Rebel Fitness ATL</p>
          <h2 className="mt-4 text-4xl font-black uppercase leading-tight md:text-6xl">A serious training home for Atlanta rebels.</h2>
          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Rebel Fitness ATL blends premium coaching, powerful programming, and a high-accountability environment for members who want more from their gym than machines and mirrors.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {['Coach-led sessions', 'Strength and conditioning', 'Results-focused community', 'Clean premium facility'].map((item) => (
              <div key={item} className="border border-white/10 bg-white/[0.04] p-5">
                <span className="text-2xl font-black text-red-500">+</span>
                <p className="mt-2 font-bold uppercase tracking-[0.08em]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Programs() {
  return (
    <section id="programs" className="bg-[#101010] px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionIntro eyebrow="Programs" title="Classes that hit different" copy="Choose the training style that matches your goal, then let the coaches, programming, and community carry the momentum." />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {programs.map((program, index) => (
            <article key={program.title} className="reveal group border border-white/10 bg-black p-6 transition duration-300 hover:-translate-y-2 hover:border-red-500/70" style={{ animationDelay: `${index * 80}ms` }}>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-red-400">{program.tag}</p>
              <h3 className="mt-8 text-2xl font-black uppercase">{program.title}</h3>
              <p className="mt-4 leading-7 text-zinc-400">{program.description}</p>
              <a href="#contact" className="mt-8 inline-flex text-sm font-black uppercase tracking-[0.16em] text-white transition group-hover:text-red-400">
                Book a Session
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Memberships() {
  return (
    <section id="memberships" className="bg-[#070707] px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionIntro eyebrow="Memberships" title="Pick your path. Commit to the work." copy="Use these placeholder packages as a clean sales structure, then swap in Rebel Fitness ATL's real offers and pricing." />
        <div className="grid gap-5 lg:grid-cols-3">
          {memberships.map((plan) => (
            <article key={plan.name} className={`reveal border p-7 ${plan.featured ? 'border-red-500 bg-red-600 text-white shadow-[0_0_70px_rgba(220,38,38,0.22)]' : 'border-white/10 bg-white/[0.04]'}`}>
              {plan.featured && <p className="mb-5 inline-flex bg-black px-3 py-1 text-xs font-black uppercase tracking-[0.18em]">Most Popular</p>}
              <h3 className="text-2xl font-black uppercase">{plan.name}</h3>
              <p className="mt-5 text-5xl font-black">{plan.price}</p>
              <p className={`mt-5 leading-7 ${plan.featured ? 'text-red-50' : 'text-zinc-400'}`}>{plan.details}</p>
              <a href="#contact" className={`mt-8 inline-flex w-full justify-center px-5 py-4 text-sm font-black uppercase tracking-[0.16em] transition ${plan.featured ? 'bg-white text-black hover:bg-black hover:text-white' : 'bg-white text-black hover:bg-red-600 hover:text-white'}`}>
                Start Today
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function PersonalTraining() {
  return (
    <section className="relative overflow-hidden bg-black px-5 py-24 lg:px-8">
      <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-[url('https://images.unsplash.com/photo-1534367610401-9f5ed68180aa?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center opacity-45 lg:block"></div>
      <div className="relative mx-auto max-w-7xl">
        <div className="reveal max-w-2xl">
          <p className="text-xs font-black uppercase tracking-[0.28em] text-red-400">Personal Training</p>
          <h2 className="mt-4 text-4xl font-black uppercase leading-tight md:text-6xl">One-on-one coaching for your next level.</h2>
          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Private coaching gives you a custom plan, sharper technique, better accountability, and direct support from a Rebel coach.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {['Movement assessment', 'Custom strength plan', 'Nutrition direction', 'Weekly progress reviews'].map((item) => (
              <p key={item} className="border border-white/10 bg-white/[0.04] px-4 py-3 font-bold text-zinc-200">{item}</p>
            ))}
          </div>
          <a href="#contact" className="mt-9 inline-flex bg-red-600 px-7 py-4 text-sm font-black uppercase tracking-[0.18em] text-white transition hover:-translate-y-1 hover:bg-red-500">
            Book a Session
          </a>
        </div>
      </div>
    </section>
  )
}

function Results() {
  return (
    <section id="results" className="bg-[#101010] px-5 py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1fr] lg:items-center">
        <div className="reveal">
          <p className="text-xs font-black uppercase tracking-[0.28em] text-red-400">Transformations</p>
          <h2 className="mt-4 text-4xl font-black uppercase leading-tight md:text-6xl">Results you can feel, track, and see.</h2>
          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Add real before-and-after stories, member milestones, and performance wins here to create instant proof for new visitors.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {results.map((item, index) => (
            <div key={item} className="reveal border border-white/10 bg-black p-6" style={{ animationDelay: `${index * 90}ms` }}>
              <p className="text-4xl font-black text-red-500">0{index + 1}</p>
              <p className="mt-5 text-lg font-bold leading-7 text-zinc-100">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Gallery() {
  return (
    <section className="bg-[#070707] px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionIntro eyebrow="Gallery" title="Inside the grind" copy="Placeholder visuals keep the layout premium while you collect real content from the gym, coaches, and members." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((src, index) => (
            <div key={src} className="reveal group relative h-72 overflow-hidden border border-white/10 bg-zinc-950" style={{ animationDelay: `${index * 60}ms` }}>
              <img src={src} alt="Rebel Fitness ATL gallery placeholder" className="h-full w-full object-cover opacity-80 transition duration-500 group-hover:scale-105 group-hover:opacity-100" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  return (
    <section className="bg-[#101010] px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionIntro eyebrow="Testimonials" title="The community speaks for itself" />
        <div className="grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article key={testimonial.quote} className="reveal border border-white/10 bg-black p-7">
              <p className="text-5xl font-black text-red-600">"</p>
              <p className="mt-4 text-lg leading-8 text-zinc-300">{testimonial.quote}</p>
              <p className="mt-8 text-sm font-black uppercase tracking-[0.18em] text-white">{testimonial.name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="bg-[#070707] px-5 py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="reveal">
          <p className="text-xs font-black uppercase tracking-[0.28em] text-red-400">Location + Contact</p>
          <h2 className="mt-4 text-4xl font-black uppercase leading-tight md:text-6xl">Ready to train at Rebel?</h2>
          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Fill out the form, call the gym, or message Rebel Fitness ATL on Instagram to schedule your first session.
          </p>
          <div className="mt-8 grid gap-4">
            {/* Replace phone number, email, and address with verified Rebel Fitness ATL contact details. */}
            <a href="tel:+14045550183" className="border border-white/10 bg-white/[0.04] p-5 font-bold transition hover:border-red-500">Phone: (404) 555-0183</a>
            <a href="mailto:hello@rebelfitnessatl.com" className="border border-white/10 bg-white/[0.04] p-5 font-bold transition hover:border-red-500">Email: hello@rebelfitnessatl.com</a>
            <p className="border border-white/10 bg-white/[0.04] p-5 font-bold">Address: 123 Rebel Way, Atlanta, GA 30301</p>
          </div>
        </div>

        <form className="reveal border border-white/10 bg-[#111] p-6 md:p-8" style={{ animationDelay: '120ms' }}>
          {/* Connect this form to the gym's CRM, booking tool, or email provider. */}
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-bold uppercase tracking-[0.14em] text-zinc-300">
              Name
              <input className="border border-white/10 bg-black px-4 py-3 text-white outline-none transition focus:border-red-500" placeholder="Your name" />
            </label>
            <label className="grid gap-2 text-sm font-bold uppercase tracking-[0.14em] text-zinc-300">
              Phone
              <input className="border border-white/10 bg-black px-4 py-3 text-white outline-none transition focus:border-red-500" placeholder="Your phone" />
            </label>
          </div>
          <label className="mt-5 grid gap-2 text-sm font-bold uppercase tracking-[0.14em] text-zinc-300">
            Goal
            <select className="border border-white/10 bg-black px-4 py-3 text-white outline-none transition focus:border-red-500">
              <option>Join the gym</option>
              <option>Book personal training</option>
              <option>Try a class</option>
              <option>Ask a question</option>
            </select>
          </label>
          <label className="mt-5 grid gap-2 text-sm font-bold uppercase tracking-[0.14em] text-zinc-300">
            Message
            <textarea className="min-h-32 border border-white/10 bg-black px-4 py-3 text-white outline-none transition focus:border-red-500" placeholder="Tell us what you want to change." />
          </label>
          <button type="button" className="mt-6 w-full bg-red-600 px-7 py-4 text-sm font-black uppercase tracking-[0.18em] text-white transition hover:bg-red-500">
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

function SocialCta() {
  return (
    <section className="bg-red-600 px-5 py-16 text-white lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.28em] text-red-100">Follow the movement</p>
          <h2 className="mt-3 text-3xl font-black uppercase md:text-5xl">See the work on Instagram.</h2>
        </div>
        <a href="https://www.instagram.com/rebel.fitnessatl/" target="_blank" rel="noreferrer" className="inline-flex justify-center bg-black px-7 py-4 text-sm font-black uppercase tracking-[0.18em] text-white transition hover:bg-white hover:text-black">
          @rebel.fitnessatl
        </a>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-black px-5 py-10 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-black uppercase tracking-[0.18em]">Rebel Fitness ATL</p>
          <p className="mt-2 text-sm text-zinc-500">Premium strength, conditioning, and personal training in Atlanta.</p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm font-bold uppercase tracking-[0.14em] text-zinc-400">
          <a href="tel:+14045550183" className="hover:text-white">Call</a>
          <a href="mailto:hello@rebelfitnessatl.com" className="hover:text-white">Email</a>
          <a href="https://www.instagram.com/rebel.fitnessatl/" target="_blank" rel="noreferrer" className="hover:text-white">Instagram</a>
        </div>
      </div>
    </footer>
  )
}

export default App
