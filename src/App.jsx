import { useEffect, useState } from 'react'

const brand = {
  instagram: 'https://www.instagram.com/rebel.fitnessatl/',
  phoneHref: 'tel:+14045550183',
  phoneLabel: '(404) 555-0183', // Replace with Rebel Fitness ATL's verified phone number.
  emailHref: 'mailto:hello@rebelfitnessatl.com',
  emailLabel: 'hello@rebelfitnessatl.com', // Replace with Rebel Fitness ATL's verified email.
  address: '123 Rebel Way, Atlanta, GA 30301', // Replace with Rebel Fitness ATL's verified address.
}

const routes = {
  home: { label: 'Home', hash: '#/' },
  about: { label: 'About', hash: '#/about' },
  programs: { label: 'Programs', hash: '#/programs' },
  memberships: { label: 'Memberships', hash: '#/memberships' },
  training: { label: 'Training', hash: '#/training' },
  results: { label: 'Results', hash: '#/results' },
  gallery: { label: 'Gallery', hash: '#/gallery' },
  testimonials: { label: 'Testimonials', hash: '#/testimonials' },
  contact: { label: 'Contact', hash: '#/contact' },
}

const navItems = [
  routes.about,
  routes.programs,
  routes.memberships,
  routes.training,
  routes.results,
  routes.gallery,
  routes.testimonials,
  routes.contact,
]

const stats = [
  ['500+', 'Athletes coached'],
  ['24/7', 'Rebel mindset'],
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

function normalizeRoute() {
  const route = window.location.hash.replace('#/', '').replace('#', '')
  return route && routes[route] ? route : 'home'
}

function App() {
  const [activeRoute, setActiveRoute] = useState(normalizeRoute)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleRoute = () => {
      setActiveRoute(normalizeRoute())
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    window.addEventListener('hashchange', handleRoute)
    return () => window.removeEventListener('hashchange', handleRoute)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="min-h-screen overflow-hidden bg-[#050505] text-white">
      <Header activeRoute={activeRoute} menuOpen={menuOpen} setMenuOpen={setMenuOpen} closeMenu={closeMenu} />
      <main>
        <RouteView activeRoute={activeRoute} />
      </main>
      <Footer />
    </div>
  )
}

function RouteView({ activeRoute }) {
  const pages = {
    home: <HomePage />,
    about: <AboutPage />,
    programs: <ProgramsPage />,
    memberships: <MembershipsPage />,
    training: <TrainingPage />,
    results: <ResultsPage />,
    gallery: <GalleryPage />,
    testimonials: <TestimonialsPage />,
    contact: <ContactPage />,
  }

  return pages[activeRoute] || pages.home
}

function RebelLogo({ compact = false }) {
  return (
    <div className="flex items-center gap-3">
      {/* Logo based on the supplied Rebel Fitness yellow-circle brand reference. Replace public/rebel-logo.svg with the final vector if the gym provides one. */}
      <img
        src={`${import.meta.env.BASE_URL}rebel-logo.svg`}
        alt="Rebel Fitness logo"
        className={compact ? 'h-12 w-12 rounded-full object-contain' : 'h-16 w-16 rounded-full object-contain shadow-[0_0_34px_rgba(255,213,0,0.35)]'}
      />
      {!compact && (
        <span className="leading-none">
          <span className="block text-2xl font-black uppercase tracking-normal">Rebel</span>
          <span className="mt-1 block text-[10px] font-black uppercase tracking-[0.42em] text-[#ffd500]">Fitness ATL</span>
        </span>
      )}
    </div>
  )
}

function Header({ activeRoute, menuOpen, setMenuOpen, closeMenu }) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/80 shadow-[0_18px_70px_rgba(0,0,0,0.45)] backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8">
        <a href={routes.home.hash} className="group" onClick={closeMenu}>
          <RebelLogo />
        </a>

        <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] p-1 xl:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.hash}
              className={`rounded-full px-3 py-2 text-[11px] font-black uppercase tracking-[0.14em] transition ${activeRoute === item.hash.replace('#/', '') ? 'bg-[#ffd500] text-black' : 'text-zinc-300 hover:bg-white hover:text-black'}`}
            >
              {item.label}
            </a>
          ))}
        </div>

        <a href={routes.contact.hash} className="hidden bg-[#ffd500] px-5 py-3 text-sm font-black uppercase tracking-[0.16em] text-black shadow-[0_0_38px_rgba(255,213,0,0.35)] transition hover:-translate-y-0.5 hover:bg-white hover:text-black lg:inline-flex">
          Join Now
        </a>

        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-11 w-11 items-center justify-center border border-white/15 bg-white/[0.04] xl:hidden"
        >
          <span className="space-y-1.5">
            <span className="block h-0.5 w-5 bg-white"></span>
            <span className="block h-0.5 w-5 bg-white"></span>
            <span className="block h-0.5 w-5 bg-white"></span>
          </span>
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-white/10 bg-black px-5 py-5 xl:hidden">
          <div className="grid gap-2 sm:grid-cols-2">
            {[routes.home, ...navItems].map((item) => (
              <a key={item.label} href={item.hash} onClick={closeMenu} className="border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-bold uppercase tracking-[0.18em] text-zinc-200">
                {item.label}
              </a>
            ))}
            <a href={routes.contact.hash} onClick={closeMenu} className="bg-[#ffd500] px-4 py-3 text-center text-sm font-black uppercase tracking-[0.18em] text-black sm:col-span-2">
              Join Now
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

function PageHero({ eyebrow, title, copy, image }) {
  return (
    <section className="brand-grid relative flex min-h-[58vh] items-end overflow-hidden pt-28">
      <div className="absolute inset-0 bg-cover bg-center opacity-65 grayscale" style={{ backgroundImage: `url(${image})` }}></div>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,5,0.96)_0%,rgba(5,5,5,0.78)_48%,rgba(5,5,5,0.48)_100%)]"></div>
      <div className="absolute left-0 top-28 h-28 w-1.5 bg-[#ffd500] shadow-[0_0_40px_rgba(255,213,0,0.7)]"></div>
      <div className="relative mx-auto w-full max-w-7xl px-5 py-20 lg:px-8">
        <p className="inline-flex border border-[#ffd500]/60 bg-[#ffd500]/15 px-4 py-2 text-xs font-black uppercase tracking-[0.26em] text-yellow-100 backdrop-blur">{eyebrow}</p>
        <h1 className="mt-6 max-w-4xl text-5xl font-black uppercase leading-[0.9] tracking-normal text-white sm:text-7xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">{copy}</p>
      </div>
    </section>
  )
}

function SectionIntro({ eyebrow, title, copy }) {
  return (
    <div className="reveal mx-auto mb-12 max-w-3xl text-center">
      <p className="text-xs font-black uppercase tracking-[0.28em] text-[#ffd500]">{eyebrow}</p>
      <h2 className="mx-auto mt-3 max-w-3xl text-4xl font-black uppercase leading-tight text-white md:text-5xl">{title}</h2>
      <div className="mx-auto mt-5 h-1 w-24 bg-gradient-to-r from-transparent via-[#ffd500] to-transparent"></div>
      {copy && <p className="mt-5 text-lg leading-8 text-zinc-400">{copy}</p>}
    </div>
  )
}

function HomePage() {
  return (
    <>
      <Hero />
      <BrandMarquee />
      <section className="px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionIntro eyebrow="Explore Rebel" title="A full site built around the gym journey" copy="Every core offer now has its own dedicated page, so visitors can move directly to the information that sells them." />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {navItems.slice(0, 8).map((item, index) => (
              <a key={item.label} href={item.hash} className="reveal angled-surface border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-2 hover:border-[#ffd500]/80" style={{ animationDelay: `${index * 60}ms` }}>
                <p className="text-3xl font-black text-[#ffd500]">0{index + 1}</p>
                <h3 className="mt-5 text-xl font-black uppercase">{item.label}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-400">Open the dedicated {item.label.toLowerCase()} page.</p>
              </a>
            ))}
          </div>
        </div>
      </section>
      <SocialCta />
    </>
  )
}

function Hero() {
  return (
    <section className="brand-grid relative flex min-h-screen items-center pt-24">
      {/* Replace this placeholder background with a real Rebel Fitness ATL hero image or video still. */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517963879433-6ad2b056d712?auto=format&fit=crop&w=1800&q=85')] bg-cover bg-center opacity-80 grayscale"></div>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,5,0.96)_0%,rgba(5,5,5,0.82)_44%,rgba(5,5,5,0.38)_100%)]"></div>
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#050505] to-transparent"></div>
      <div className="absolute left-0 top-28 h-28 w-1.5 bg-[#ffd500] shadow-[0_0_40px_rgba(255,213,0,0.7)]"></div>

      <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-5 py-24 lg:grid-cols-[1.02fr_0.68fr] lg:px-8">
        <div className="reveal max-w-4xl">
          <div className="mb-7 inline-flex items-center gap-3 border border-[#ffd500]/60 bg-[#ffd500]/15 px-4 py-2 text-xs font-black uppercase tracking-[0.26em] text-yellow-100 backdrop-blur">
            <span className="h-2 w-2 bg-[#ffd500]"></span>
            Atlanta strength. Rebel mindset.
          </div>
          <h1 className="max-w-5xl text-5xl font-black uppercase leading-[0.86] tracking-normal text-white sm:text-7xl lg:text-8xl">Built to break limits.</h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-300 sm:text-xl">
            Rebel Fitness ATL delivers high-energy coaching, premium strength programming, and a black-and-yellow training culture made for serious transformation.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href={routes.contact.hash} className="bg-[#ffd500] px-7 py-4 text-center text-sm font-black uppercase tracking-[0.18em] text-black shadow-[0_20px_60px_rgba(255,213,0,0.35)] transition hover:-translate-y-1 hover:bg-white">
              Join Now
            </a>
            <a href={routes.programs.hash} className="border border-white/20 bg-white/10 px-7 py-4 text-center text-sm font-black uppercase tracking-[0.18em] text-white backdrop-blur transition hover:-translate-y-1 hover:bg-white hover:text-black">
              View Classes
            </a>
          </div>
        </div>

        <div className="reveal grid content-end gap-4 lg:pt-24" style={{ animationDelay: '120ms' }}>
          <div className="angled-surface border border-white/15 bg-black/65 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.5)] backdrop-blur-md">
            <RebelLogo />
            <p className="mt-5 text-sm font-bold uppercase tracking-[0.22em] text-zinc-400">Quick access</p>
            <div className="mt-5 grid gap-3">
              {[routes.programs, routes.training, routes.memberships].map((item) => (
                <a key={item.label} href={item.hash} className="flex items-center justify-between border border-white/10 bg-white/[0.05] px-4 py-3 transition hover:border-[#ffd500] hover:bg-[#ffd500]/15">
                  <span className="font-bold">{item.label}</span>
                  <span className="text-sm font-black uppercase tracking-[0.14em] text-yellow-300">Open</span>
                </a>
              ))}
            </div>
          </div>
          <StatsGrid />
        </div>
      </div>
    </section>
  )
}

function StatsGrid() {
  return (
    <div className="grid grid-cols-3 border border-white/10 bg-white/[0.06] backdrop-blur">
      {stats.map(([value, label]) => (
        <div key={label} className="border-r border-white/10 p-4 last:border-r-0">
          <p className="text-2xl font-black text-white">{value}</p>
          <p className="mt-1 text-xs uppercase tracking-[0.14em] text-zinc-400">{label}</p>
        </div>
      ))}
    </div>
  )
}

function BrandMarquee() {
  const items = ['Strength', 'Conditioning', 'Personal Training', 'Transformation', 'ATL', 'Rebel Energy']

  return (
    <div className="overflow-hidden border-y border-white/10 bg-[#ffd500] py-4 text-black">
      <div className="marquee-track flex w-max gap-10 whitespace-nowrap">
        {[...items, ...items, ...items, ...items].map((item, index) => (
          <span key={`${item}-${index}`} className="text-xl font-black uppercase tracking-[0.18em]">{item}</span>
        ))}
      </div>
    </div>
  )
}

function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About" title="A serious training home for Atlanta rebels." copy="Rebel Fitness ATL blends premium coaching, powerful programming, and a high-accountability environment for members who want more than machines and mirrors." image="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=1500&q=80" />
      <section className="px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1fr] lg:items-center">
          <div className="reveal relative overflow-hidden border border-white/10 bg-zinc-950 shadow-[0_30px_90px_rgba(0,0,0,0.45)]">
            {/* Replace with a real gym floor, coach, or community photo. */}
            <img src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=1100&q=80" alt="Athlete training in a premium gym" className="h-full min-h-[420px] w-full object-cover opacity-90 grayscale transition duration-500 hover:grayscale-0" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black to-transparent p-6">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-white">Rebel standard</p>
            </div>
          </div>
          <FeatureGrid />
        </div>
      </section>
    </>
  )
}

function FeatureGrid() {
  return (
    <div className="reveal lg:pl-8" style={{ animationDelay: '100ms' }}>
      <p className="text-xs font-black uppercase tracking-[0.28em] text-[#ffd500]">The Difference</p>
      <h2 className="yellow-sweep mt-4 text-4xl font-black uppercase leading-tight md:text-6xl">Premium coaching with hard-edged energy.</h2>
      <p className="mt-10 text-lg leading-8 text-zinc-400">
        Use this page to tell Rebel Fitness ATL's story, explain the culture, and introduce the coaches once the real details are available.
      </p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {['Coach-led sessions', 'Strength and conditioning', 'Results-focused community', 'Clean premium facility'].map((item) => (
          <div key={item} className="angled-surface border border-white/10 bg-white/[0.04] p-5 transition hover:border-[#ffd500]/70 hover:bg-[#ffd500]/10">
            <span className="text-2xl font-black text-[#ffd500]">+</span>
            <p className="mt-2 font-bold uppercase tracking-[0.08em]">{item}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function ProgramsPage() {
  return (
    <>
      <PageHero eyebrow="Programs" title="Classes that hit different." copy="Choose the training style that matches your goal, then let the coaches, programming, and community carry the momentum." image="https://images.unsplash.com/photo-1571019613914-85f342c6a11e?auto=format&fit=crop&w=1500&q=80" />
      <section className="brand-grid px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {programs.map((program, index) => (
              <article key={program.title} className="reveal angled-surface group border border-white/10 bg-black p-6 transition duration-300 hover:-translate-y-2 hover:border-[#ffd500]/80 hover:shadow-[0_24px_70px_rgba(255,213,0,0.12)]" style={{ animationDelay: `${index * 80}ms` }}>
                <p className="text-xs font-black uppercase tracking-[0.22em] text-[#ffd500]">{program.tag}</p>
                <h3 className="mt-8 text-2xl font-black uppercase">{program.title}</h3>
                <p className="mt-4 leading-7 text-zinc-400">{program.description}</p>
                <a href={routes.contact.hash} className="mt-8 inline-flex text-sm font-black uppercase tracking-[0.16em] text-white transition group-hover:text-[#ffd500]">Book a Session</a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

function MembershipsPage() {
  return (
    <>
      <PageHero eyebrow="Memberships" title="Pick your path. Commit to the work." copy="Use these placeholder packages as a clean sales structure, then swap in Rebel Fitness ATL's real offers and pricing." image="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1500&q=80" />
      <section className="px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-3">
          {memberships.map((plan) => (
            <article key={plan.name} className={`reveal border p-7 ${plan.featured ? 'border-[#ffd500] bg-[#ffd500] text-black shadow-[0_0_80px_rgba(255,213,0,0.24)]' : 'border-white/10 bg-white/[0.04]'}`}>
              {plan.featured && <p className="mb-5 inline-flex bg-black px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-white">Most Popular</p>}
              <h3 className="text-2xl font-black uppercase">{plan.name}</h3>
              <p className="mt-5 text-5xl font-black">{plan.price}</p>
              <p className={`mt-5 leading-7 ${plan.featured ? 'text-black/70' : 'text-zinc-400'}`}>{plan.details}</p>
              <a href={routes.contact.hash} className={`mt-8 inline-flex w-full justify-center px-5 py-4 text-sm font-black uppercase tracking-[0.16em] transition ${plan.featured ? 'bg-white text-black hover:bg-black hover:text-white' : 'bg-white text-black hover:bg-[#ffd500]'}`}>Start Today</a>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

function TrainingPage() {
  return (
    <>
      <PageHero eyebrow="Personal Training" title="One-on-one coaching for your next level." copy="Private coaching gives you a custom plan, sharper technique, better accountability, and direct support from a Rebel coach." image="https://images.unsplash.com/photo-1534367610401-9f5ed68180aa?auto=format&fit=crop&w=1500&q=80" />
      <section className="relative overflow-hidden bg-black px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="reveal max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[#ffd500]">Private Coaching</p>
            <h2 className="yellow-sweep mt-4 text-4xl font-black uppercase leading-tight md:text-6xl">Custom coaching. Real accountability.</h2>
            <p className="mt-10 text-lg leading-8 text-zinc-400">Add trainer bios, package details, and booking requirements here once Rebel Fitness ATL provides exact details.</p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {['Movement assessment', 'Custom strength plan', 'Nutrition direction', 'Weekly progress reviews'].map((item) => (
              <p key={item} className="angled-surface border border-white/10 bg-white/[0.04] px-5 py-6 font-bold text-zinc-200">{item}</p>
            ))}
          </div>
          <a href={routes.contact.hash} className="mt-10 inline-flex bg-[#ffd500] px-7 py-4 text-sm font-black uppercase tracking-[0.18em] text-black transition hover:-translate-y-1 hover:bg-white">Book a Session</a>
        </div>
      </section>
    </>
  )
}

function ResultsPage() {
  return (
    <>
      <PageHero eyebrow="Results" title="Proof that the work works." copy="Add real before-and-after stories, member milestones, and performance wins here to create instant trust with new visitors." image="https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=1500&q=80" />
      <section className="px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {results.map((item, index) => (
            <div key={item} className="reveal angled-surface border border-white/10 bg-black p-6" style={{ animationDelay: `${index * 90}ms` }}>
              <p className="text-4xl font-black text-[#ffd500]">0{index + 1}</p>
              <p className="mt-5 text-lg font-bold leading-7 text-zinc-100">{item}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

function GalleryPage() {
  return (
    <>
      <PageHero eyebrow="Gallery" title="Inside the grind." copy="Placeholder visuals keep the layout premium while you collect real content from the gym, coaches, and members." image="https://images.unsplash.com/photo-1549476464-37392f717541?auto=format&fit=crop&w=1500&q=80" />
      <section className="px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((src, index) => (
            <div key={src} className="reveal group relative h-80 overflow-hidden border border-white/10 bg-zinc-950" style={{ animationDelay: `${index * 60}ms` }}>
              <img src={src} alt="Rebel Fitness ATL gallery placeholder" className="h-full w-full object-cover opacity-75 grayscale transition duration-500 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent"></div>
              <div className="absolute bottom-4 left-4 h-1 w-16 bg-[#ffd500]"></div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

function TestimonialsPage() {
  return (
    <>
      <PageHero eyebrow="Testimonials" title="The community speaks for itself." copy="Use this page for real member quotes, photos, screenshots, and transformation stories when available." image="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1500&q=80" />
      <section className="brand-grid px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article key={testimonial.quote} className="reveal border border-white/10 bg-black p-7 shadow-[0_24px_70px_rgba(0,0,0,0.24)]">
              <p className="text-5xl font-black text-[#ffd500]">&quot;</p>
              <p className="mt-4 text-lg leading-8 text-zinc-300">{testimonial.quote}</p>
              <p className="mt-8 text-sm font-black uppercase tracking-[0.18em] text-white">{testimonial.name}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Ready to train at Rebel?" copy="Fill out the form, call the gym, or message Rebel Fitness ATL on Instagram to schedule your first session." image="https://images.unsplash.com/photo-1517963879433-6ad2b056d712?auto=format&fit=crop&w=1500&q=80" />
      <section className="px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="reveal">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[#ffd500]">Location + Contact</p>
            <h2 className="yellow-sweep mt-4 text-4xl font-black uppercase leading-tight md:text-6xl">Book the first session.</h2>
            <div className="mt-10 grid gap-4">
              <a href={brand.phoneHref} className="border border-white/10 bg-white/[0.04] p-5 font-bold transition hover:border-[#ffd500]">Phone: {brand.phoneLabel}</a>
              <a href={brand.emailHref} className="border border-white/10 bg-white/[0.04] p-5 font-bold transition hover:border-[#ffd500]">Email: {brand.emailLabel}</a>
              <p className="border border-white/10 bg-white/[0.04] p-5 font-bold">Address: {brand.address}</p>
            </div>
          </div>
          <LeadForm />
        </div>
      </section>
      <SocialCta />
    </>
  )
}

function LeadForm() {
  return (
    <form className="reveal border border-white/10 bg-[#111] p-6 shadow-[0_30px_90px_rgba(0,0,0,0.45)] md:p-8" style={{ animationDelay: '120ms' }}>
      {/* Connect this form to the gym's CRM, booking tool, or email provider. */}
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold uppercase tracking-[0.14em] text-zinc-300">
          Name
          <input className="border border-white/10 bg-black px-4 py-3 text-white outline-none transition focus:border-[#ffd500]" placeholder="Your name" />
        </label>
        <label className="grid gap-2 text-sm font-bold uppercase tracking-[0.14em] text-zinc-300">
          Phone
          <input className="border border-white/10 bg-black px-4 py-3 text-white outline-none transition focus:border-[#ffd500]" placeholder="Your phone" />
        </label>
      </div>
      <label className="mt-5 grid gap-2 text-sm font-bold uppercase tracking-[0.14em] text-zinc-300">
        Goal
        <select className="border border-white/10 bg-black px-4 py-3 text-white outline-none transition focus:border-[#ffd500]">
          <option>Join the gym</option>
          <option>Book personal training</option>
          <option>Try a class</option>
          <option>Ask a question</option>
        </select>
      </label>
      <label className="mt-5 grid gap-2 text-sm font-bold uppercase tracking-[0.14em] text-zinc-300">
        Message
        <textarea className="min-h-32 border border-white/10 bg-black px-4 py-3 text-white outline-none transition focus:border-[#ffd500]" placeholder="Tell us what you want to change." />
      </label>
      <button type="button" className="mt-6 w-full bg-[#ffd500] px-7 py-4 text-sm font-black uppercase tracking-[0.18em] text-black transition hover:bg-white">Send Message</button>
    </form>
  )
}

function SocialCta() {
  return (
    <section className="bg-[#ffd500] px-5 py-16 text-black lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.28em] text-black/70">Follow the movement</p>
          <h2 className="mt-3 text-3xl font-black uppercase md:text-5xl">See the work on Instagram.</h2>
        </div>
        <a href={brand.instagram} target="_blank" rel="noreferrer" className="inline-flex justify-center bg-black px-7 py-4 text-sm font-black uppercase tracking-[0.18em] text-white transition hover:bg-white hover:text-black">@rebel.fitnessatl</a>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-black px-5 py-10 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
        <RebelLogo />
        <div className="flex flex-wrap gap-4 text-sm font-bold uppercase tracking-[0.14em] text-zinc-400">
          {[routes.home, ...navItems].map((item) => (
            <a key={item.label} href={item.hash} className="hover:text-white">{item.label}</a>
          ))}
          <a href={brand.instagram} target="_blank" rel="noreferrer" className="hover:text-white">Instagram</a>
        </div>
      </div>
    </footer>
  )
}

export default App
