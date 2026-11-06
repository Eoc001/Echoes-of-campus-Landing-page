/* ═══════════════════════════════════════════════════════════
   Echoes of Campus — main.js (single file, three parts)
   PART 1: CONFIG    — Formspree endpoints + social links (EDIT THIS)
   PART 2: DATA      — team members + Campus Voices content (EDIT THIS)
   PART 3: BEHAVIOUR — navigation, modal, filters, forms (no edits needed)
   ═══════════════════════════════════════════════════════════ */

/* ── PART 1: CONFIG ─────────────────────────────────────────── */

/* ─────────────────────────────────────────────────────────────
   Echoes of Campus — central configuration.
   This is the ONLY file you need to touch to connect forms and socials.

   FORMSPREE
   1. Create your form(s) at https://formspree.io (free tier works).
   2. Set the recipient email address inside the Formspree dashboard —
      never hardcode a private email in this file.
   3. Paste the endpoint URLs below. You may use ONE shared form for
      both endpoints; a hidden `submission_type` field is always sent
      so your inbox can tell submissions apart.
   While the placeholder values remain, the forms show a clear
   "configuration needed" notice instead of a fake success state.

   SOCIAL LINKS
   Paste the REAL X and Instagram URLs to make those links appear.
   Leave null to hide the links completely.
   YouTube and Spotify are FUTURE channels. Do not add them until real
   links/content exist.
   ───────────────────────────────────────────────────────────── */

const CONFIG = {
  brandMessage: 'Everyone has a story. Every story needs to be heard.',

  formspree: {
    contactEndpoint: 'https://formspree.io/f/YOUR_CONTACT_FORM_ID',
    volunteerEndpoint: 'https://formspree.io/f/YOUR_VOLUNTEER_FORM_ID',
  },

  social: {
    x: null,        // e.g. 'https://x.com/yourhandle'
    instagram: null, // e.g. 'https://instagram.com/yourhandle'
    // Future channels — intentionally inactive for now:
    youtube: null,
    spotify: null,
  },
}

function formIsConfigured(endpoint) {
  return /^https:\/\/formspree\.io\/f\/.+/.test(endpoint) &&
    !endpoint.includes('YOUR_')
}

/* ── PART 2: DATA ─────────────────────────────────────────── */

/* ─────────────────────────────────────────────────────────────
   TEAM DATA — one entry per member.
   ⚠️  The 16 ID-card image files were NOT supplied with this build.
      1. Export each card as a PUBLIC-SAFE WebP (no private QR/barcode/ID data).
      2. Save them in assets/team/ as team-01.png … team-16.png
      3. Fill in name, role, departments and bio below. Do NOT guess — ask the team.
   `departments` supports MULTIPLE departments per person.
   Entries with placeholder: true render with a clear
   "to be replaced" treatment until real data is added.
   ───────────────────────────────────────────────────────────── */

const ID_CARD_PLACEHOLDER = 'assets/team/placeholder-id-card.svg'

const TEAM_MEMBERS = [
  {
    id: 'member-01',
    image: ID_CARD_PLACEHOLDER, // → assets/team/team-01.webp
    name: '',
    role: '',
    departments: [],
    bio: '',
    placeholder: true, // ← replace with real name, role & departments
  },
  {
    id: 'member-02',
    image: ID_CARD_PLACEHOLDER, // → assets/team/team-02.webp
    name: '',
    role: '',
    departments: [],
    bio: '',
    placeholder: true, // ← replace with real name, role & departments
  },
  {
    id: 'member-03',
    image: ID_CARD_PLACEHOLDER, // → assets/team/team-03.webp
    name: '',
    role: '',
    departments: [],
    bio: '',
    placeholder: true, // ← replace with real name, role & departments
  },
  {
    id: 'member-04',
    image: ID_CARD_PLACEHOLDER, // → assets/team/team-04.webp
    name: '',
    role: '',
    departments: [],
    bio: '',
    placeholder: true, // ← replace with real name, role & departments
  },
  {
    id: 'member-05',
    image: ID_CARD_PLACEHOLDER, // → assets/team/team-05.webp
    name: '',
    role: '',
    departments: [],
    bio: '',
    placeholder: true, // ← replace with real name, role & departments
  },
  {
    id: 'member-06',
    image: ID_CARD_PLACEHOLDER, // → assets/team/team-06.webp
    name: '',
    role: '',
    departments: [],
    bio: '',
    placeholder: true, // ← replace with real name, role & departments
  },
  {
    id: 'member-07',
    image: ID_CARD_PLACEHOLDER, // → assets/team/team-07.webp
    name: '',
    role: '',
    departments: [],
    bio: '',
    placeholder: true, // ← replace with real name, role & departments
  },
  {
    id: 'member-08',
    image: ID_CARD_PLACEHOLDER, // → assets/team/team-08.webp
    name: '',
    role: '',
    departments: [],
    bio: '',
    placeholder: true, // ← replace with real name, role & departments
  },
  {
    id: 'member-09',
    image: ID_CARD_PLACEHOLDER, // → assets/team/team-09.webp
    name: '',
    role: '',
    departments: [],
    bio: '',
    placeholder: true, // ← replace with real name, role & departments
  },
  {
    id: 'member-10',
    image: ID_CARD_PLACEHOLDER, // → assets/team/team-10.webp
    name: '',
    role: '',
    departments: [],
    bio: '',
    placeholder: true, // ← replace with real name, role & departments
  },
  {
    id: 'member-11',
    image: ID_CARD_PLACEHOLDER, // → assets/team/team-11.webp
    name: '',
    role: '',
    departments: [],
    bio: '',
    placeholder: true, // ← replace with real name, role & departments
  },
  {
    id: 'member-12',
    image: ID_CARD_PLACEHOLDER, // → assets/team/team-12.webp
    name: '',
    role: '',
    departments: [],
    bio: '',
    placeholder: true, // ← replace with real name, role & departments
  },
  {
    id: 'member-13',
    image: ID_CARD_PLACEHOLDER, // → assets/team/team-13.webp
    name: '',
    role: '',
    departments: [],
    bio: '',
    placeholder: true, // ← replace with real name, role & departments
  },
  {
    id: 'member-14',
    image: ID_CARD_PLACEHOLDER, // → assets/team/team-14.webp
    name: '',
    role: '',
    departments: [],
    bio: '',
    placeholder: true, // ← replace with real name, role & departments
  },
  {
    id: 'member-15',
    image: ID_CARD_PLACEHOLDER, // → assets/team/team-15.webp
    name: '',
    role: '',
    departments: [],
    bio: '',
    placeholder: true, // ← replace with real name, role & departments
  },
  {
    id: 'member-16',
    image: ID_CARD_PLACEHOLDER, // → assets/team/team-16.webp
    name: '',
    role: '',
    departments: [],
    bio: '',
    placeholder: true, // ← replace with real name, role & departments
  },
]

/* ─────────────────────────────────────────────────────────────
   CAMPUS VOICES — editorial content.
   ⚠️  No interviews or stories were supplied with this build, so the
      library below is EMPTY on purpose. Nothing here is invented.
      To publish a piece, add an object like:
      {
        id: 'story-01',
        category: 'Street Interviews',   // one of the CATEGORIES below
        title: 'The real question students were asked',
        excerpt: 'One or two honest lines about what this conversation covers.',
        image: 'assets/images/campus-voices/story-01.webp',
        mediaType: 'video',              // 'video' | 'article' | 'audio'
        date: '2026-01-15',              // only when verified — else omit
        url: './story-01.html',          // on-site page, OR
        externalUrl: 'https://x.com/…',// a real X/Instagram link
        featured: true,                  // one item can be featured
      }
   ───────────────────────────────────────────────────────────── */

const STORY_CATEGORIES = [
  'Street Interviews',
  'Campus Conversations',
  'Campus Pulse',
  'Personal Stories',
  'Events & Campaigns',
]

const STORIES = [];

/* ── PART 3: BEHAVIOUR ────────────────────────────────────── */

/* Echoes of Campus — site behaviour (vanilla JS, no dependencies) */
(function () {
  'use strict'

  const $ = (sel, ctx) => (ctx || document).querySelector(sel)
  const $$ = (sel, ctx) => Array.from((ctx || document).querySelectorAll(sel))

  /* ── Mobile navigation ─────────────────────────────────────── */
  function initNav() {
    const toggle = $('#nav-toggle')
    const panel = $('#mobile-menu')
    if (!toggle || !panel) return
    const links = $$('a', panel)

    function open() {
      panel.hidden = false
      toggle.setAttribute('aria-expanded', 'true')
      document.body.classList.add('menu-open')
      if (links[0]) links[0].focus()
    }
    function close(returnFocus) {
      panel.hidden = true
      toggle.setAttribute('aria-expanded', 'false')
      document.body.classList.remove('menu-open')
      if (returnFocus) toggle.focus()
    }
    toggle.addEventListener('click', () => {
      panel.hidden ? open() : close(false)
    })
    panel.addEventListener('click', (e) => { if (e.target.tagName === 'A') close(false) })
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !panel.hidden) close(true)
    })
  }

  /* ── Footer: year + social links ───────────────────────────── */
  function initFooter() {
    $$('.js-year').forEach((el) => { el.textContent = new Date().getFullYear() })
    const wrap = $('#footer-social')
    if (!wrap || !window.CONFIG) return
    const s = CONFIG.social
    const items = []
    if (s.x) items.push({ label: 'X (Twitter)', url: s.x })
    if (s.instagram) items.push({ label: 'Instagram', url: s.instagram })
    if (items.length) {
      wrap.innerHTML = items.map((i) =>
        `<li><a href="${i.url}" target="_blank" rel="noopener noreferrer">${i.label}</a></li>`).join('')
    } else {
      wrap.innerHTML = '<li class="social-soon">Social links coming soon</li>'
    }
  }

  /* ── Team grid + accessible modal ────────────────────────── */
  function initTeam() {
    const grid = $('#team-grid')
    if (!grid || !window.TEAM_MEMBERS) return

    grid.innerHTML = TEAM_MEMBERS.map((m, idx) => {
      const name = m.placeholder ? `Team member ${String(idx + 1).padStart(2, '0')}` : m.name
      const role = m.placeholder ? 'ID card to be added' : m.role
      const tags = m.placeholder
        ? '<span class="team-tag team-tag--pending">Awaiting member data</span>'
        : m.departments.map((d) => `<span class="team-tag">${d}</span>`).join('')
      return `
      <li class="team-card${m.placeholder ? ' team-card--placeholder' : ''}">
        <button type="button" class="team-card__button" data-member="${idx}"
                aria-haspopup="dialog" aria-label="View ID card for ${name}">
          <img src="${m.image}" alt="Echoes of Campus ID card for ${name}"
               loading="lazy" width="600" height="840">
        </button>
        <div class="team-card__meta">
          <h3>${name}</h3>
          <p class="team-card__role">${role}</p>
          <div class="team-card__tags">${tags}</div>
        </div>
      </li>`
    }).join('')

    /* modal */
    const modal = $('#team-modal')
    if (!modal) return
    const dialog = $('.team-modal__dialog', modal)
    const img = $('#team-modal-img')
    const nameEl = $('#team-modal-name')
    const roleEl = $('#team-modal-role')
    const tagsEl = $('#team-modal-tags')
    const bioEl = $('#team-modal-bio')
    const closeBtn = $('#team-modal-close')
    let lastFocus = null

    function openModal(idx) {
      const m = TEAM_MEMBERS[idx]
      const real = !m.placeholder
      const name = real ? m.name : `Team member ${String(idx + 1).padStart(2, '0')}`
      img.src = m.image
      img.alt = `Echoes of Campus ID card for ${name}`
      nameEl.textContent = name
      roleEl.textContent = real ? m.role : 'ID card to be added'
      tagsEl.innerHTML = real
        ? m.departments.map((d) => `<span class="team-tag">${d}</span>`).join('')
        : '<span class="team-tag team-tag--pending">Awaiting member data</span>'
      bioEl.textContent = real && m.bio ? m.bio
        : 'This member\u2019s details are being added. Replace the placeholder card and fill in their data in Part 2 of this file (TEAM_MEMBERS).'
      lastFocus = document.activeElement
      modal.hidden = false
      document.body.classList.add('modal-open')
      closeBtn.focus()
    }
    function closeModal() {
      modal.hidden = true
      document.body.classList.remove('modal-open')
      if (lastFocus) lastFocus.focus()
    }

    grid.addEventListener('click', (e) => {
      const btn = e.target.closest('.team-card__button')
      if (btn) openModal(Number(btn.dataset.member))
    })
    closeBtn.addEventListener('click', closeModal)
    modal.addEventListener('click', (e) => { if (e.target === modal) closeModal() })
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !modal.hidden) closeModal()
      if (e.key === 'Tab' && !modal.hidden) {
        /* simple focus trap inside the dialog */
        const focusables = $$('button, [href]', dialog)
        if (!focusables.length) return
        const first = focusables[0], last = focusables[focusables.length - 1]
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus() }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus() }
      }
    })
  }

  /* ── Campus Voices: filters + grid ───────────────────────── */
  function initVoices() {
    const grid = $('#voices-grid')
    if (!grid || !window.STORIES) return
    const empty = $('#voices-empty')
    const featuredSlot = $('#voices-featured')
    const count = $('#voices-count')

    const featured = STORIES.find((s) => s.featured) || null
    if (featuredSlot) {
      if (featured) {
        featuredSlot.innerHTML = storyCard(featured, true)
        featuredSlot.hidden = false
      } else {
        featuredSlot.hidden = true
      }
    }

    function storyCard(s, big) {
      const dest = s.url || s.externalUrl || '#'
      const ext = s.externalUrl && !s.url
      const date = s.date ? `<time datetime="${s.date}">${formatDate(s.date)}</time>` : ''
      const action = s.mediaType === 'video' ? 'Watch' : s.mediaType === 'article' ? 'Read' : 'Listen'
      return `
      <article class="story-card${big ? ' story-card--featured' : ''}">
        <a class="story-card__media" href="${dest}"${ext ? ' target="_blank" rel="noopener noreferrer"' : ''}>
          <img src="${s.image}" alt="" loading="lazy" width="1600" height="900">
        </a>
        <div class="story-card__body">
          <p class="story-card__meta"><span class="cat-label">${s.category}</span>${date}</p>
          <h3><a href="${dest}"${ext ? ' target="_blank" rel="noopener noreferrer"' : ''}>${s.title}</a></h3>
          <p class="story-card__excerpt">${s.excerpt}</p>
          <a class="story-card__action" href="${dest}"${ext ? ' target="_blank" rel="noopener noreferrer"' : ''}>${action}${ext ? ' on source' : ''} <span aria-hidden="true">→</span></a>
        </div>
      </article>`
    }

    function formatDate(iso) {
      const d = new Date(iso + 'T00:00:00')
      return d.toLocaleDateString('en-NG', { year: 'numeric', month: 'long', day: 'numeric' })
    }

    function render(filter) {
      const items = STORIES.filter((s) => filter === 'All' || s.category === filter)
      grid.innerHTML = items.map((s) => storyCard(s, false)).join('')
      const hasContent = items.length > 0
      grid.hidden = !hasContent
      if (empty) empty.hidden = hasContent
      if (count) count.hidden = hasContent
    }

    $$('.filter-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        $$('.filter-btn').forEach((b) => {
          b.classList.toggle('is-active', b === btn)
          b.setAttribute('aria-selected', b === btn ? 'true' : 'false')
        })
        render(btn.dataset.filter)
      })
    })

    render('All')

    /* homepage previews — same data file, no duplicated content */
    const homeWrap = $('#home-voices')
    const homeEmpty = $('#home-voices-empty')
    if (homeWrap) {
      const picks = featured
        ? [featured, ...STORIES.filter((s) => s !== featured).slice(0, 3)]
        : STORIES.slice(0, 4)
      if (picks.length) {
        homeWrap.innerHTML = picks.map((s, i) => storyCard(s, i === 0)).join('')
        homeWrap.hidden = false
        if (homeEmpty) homeEmpty.hidden = true
      }
    }
  }

  /* ── Forms → Formspree ───────────────────────────────────── */
  function initForm(formId, endpoint, successHtml) {
    const form = document.getElementById(formId)
    if (!form) return
    const notice = form.querySelector('.form-notice')
    const submitBtn = form.querySelector('button[type="submit"]')
    const configured = window.formIsConfigured(endpoint)

    if (!configured) {
      notice.className = 'form-notice form-notice--config'
      notice.textContent = 'Form setup needed: paste your Formspree endpoint into Part 1 of this file (CONFIG) to activate submissions. Nothing is sent anywhere until then.'
      notice.hidden = false
    }

    form.addEventListener('submit', async (e) => {
      e.preventDefault()
      if (!configured) {
        notice.className = 'form-notice form-notice--config'
        notice.textContent = 'This form is not connected yet. Add your Formspree endpoint in Part 1 of this file (CONFIG), then try again.'
        notice.hidden = false
        return
      }
      if (!form.reportValidity()) return

      const data = new FormData(form)
      data.set('submission_type', formId === 'contact-form' ? 'share_your_voice' : 'volunteer_application')
      submitBtn.disabled = true
      submitBtn.classList.add('is-loading')
      notice.className = 'form-notice'
      notice.textContent = 'Sending…'
      notice.hidden = false

      try {
        const res = await fetch(endpoint, {
          method: 'POST',
          body: data,
          headers: { Accept: 'application/json' },
        })
        if (!res.ok) throw new Error('Request failed: ' + res.status)
        form.reset()
        notice.className = 'form-notice form-notice--success'
        notice.setAttribute('tabindex', '-1')
        notice.innerHTML = successHtml
        notice.focus()
      } catch (err) {
        /* keep entered data so nothing is lost */
        notice.className = 'form-notice form-notice--error'
        notice.textContent = 'Something went wrong sending your submission. Your text is still here — please check your connection and try again.'
      } finally {
        submitBtn.disabled = false
        submitBtn.classList.remove('is-loading')
      }
    })
  }

  function initForms() {
    if (!window.CONFIG) return
    initForm('contact-form', CONFIG.formspree.contactEndpoint,
      '<strong>Thank you.</strong> Your message is in. The Echoes of Campus team reviews every submission that comes in, and we may follow up if you left contact details. Sharing something does not guarantee coverage, but nothing gets heard if it never reaches us.')
    initForm('volunteer-form', CONFIG.formspree.volunteerEndpoint,
      '<strong>Thank you for offering to help build this.</strong> Your application has been sent to the team for review. We will be in touch if there is a good fit.')

    /* Anonymous submission logic on the contact form:
       name/email stay optional unless the visitor asks for a reply. */
    const contact = document.getElementById('contact-form')
    if (contact) {
      const name = contact.querySelector('#cf-name')
      const email = contact.querySelector('#cf-email')
      const wantsReply = contact.querySelector('#cf-reply')
      const anon = contact.querySelector('#cf-anon')
      const sync = () => {
        if (wantsReply && wantsReply.checked) {
          if (email) email.required = true
          if (anon) { anon.checked = false; anon.disabled = true }
          if (name && anon) name.required = false
        } else {
          if (email) email.required = false
          if (anon) anon.disabled = false
        }
      }
      if (wantsReply) wantsReply.addEventListener('change', sync)
      if (anon) anon.addEventListener('change', () => {
        if (anon.checked && name) name.value = ''
      })
      sync()
    }
  }


  /* ── Staggered scroll reveal ─────────────────────────────── */
  function initReveal() {
    const targets = $$([
      '.hero__grid > *', '.brand-strip p', '.section-head', '.page-hero > *',
      '.two-col > *', '.cta-band', '.join-teaser', '.filter-bar',
      '.story-card', '.team-card', '.coverage-item', '.values-grid li',
      '.impact-grid li', '.form-panel', '.empty-state', '.footer-top > *',
    ].join(', '))
    if (!targets.length) return

    /* stagger siblings within the same parent, capped so long lists stay quick */
    const seen = new Map()
    targets.forEach((el) => {
      const parent = el.parentElement
      const idx = seen.get(parent) || 0
      seen.set(parent, idx + 1)
      el.style.setProperty('--rd', Math.min(idx, 10) * 150 + 'ms')
      el.classList.add('reveal')
    })

    if (!('IntersectionObserver' in window)) {
      targets.forEach((el) => el.classList.add('is-in'))
      return
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in')
          io.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' })
    targets.forEach((el) => io.observe(el))
  }

  /* ── Magnetic micro-interactions ───────────────────────────── */
  function initMagnetic() {
    const fine = window.matchMedia('(pointer: fine)').matches
    const calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!fine || calm) return

    const targets = $$('.btn, .link-more, .story-card__action')
    targets.forEach((el) => {
      el.classList.add('is-magnetic')
      const strength = el.classList.contains('btn') ? 0.3 : 0.2

      el.addEventListener('pointermove', (e) => {
        const r = el.getBoundingClientRect()
        const x = (e.clientX - r.left - r.width / 2) * strength
        const y = (e.clientY - r.top - r.height / 2) * strength
        el.style.transform = `translate(${x}px, ${y}px)`
      })
      el.addEventListener('pointerleave', () => { el.style.transform = '' })
    })
  }

  /* ── Motion engine: progress, kinetic type, parallax, glow ── */
  function initMotion() {
    const calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    /* 1. Scroll progress bar */
    const progress = document.createElement('div')
    progress.className = 'scroll-progress'
    progress.setAttribute('aria-hidden', 'true')
    progress.innerHTML = '<span class="scroll-progress__bar"></span>'
    document.body.appendChild(progress)
    const bar = progress.firstElementChild

    /* 10. Back-to-top */
    const toTop = document.createElement('button')
    toTop.type = 'button'
    toTop.className = 'scroll-top'
    toTop.setAttribute('aria-label', 'Back to top')
    toTop.textContent = '↑'
    document.body.appendChild(toTop)
    toTop.addEventListener('click', () =>
      window.scrollTo({ top: 0, behavior: calm ? 'auto' : 'smooth' }))

    /* 3. Kinetic headlines — split into words */
    const headlines = $$('.hero h1, .page-hero h1')
    headlines.forEach((h) => {
      const walk = (node) => {
        Array.from(node.childNodes).forEach((child) => {
          if (child.nodeType === 3 && child.textContent.trim()) {
            const frag = document.createDocumentFragment()
            child.textContent.split(/(\s+)/).forEach((part) => {
              if (!part) return
              if (/^\s+$/.test(part)) { frag.appendChild(document.createTextNode(part)); return }
              const outer = document.createElement('span')
              outer.className = 'word'
              const inner = document.createElement('span')
              inner.textContent = part
              outer.appendChild(inner)
              frag.appendChild(outer)
            })
            node.replaceChild(frag, child)
          } else if (child.nodeType === 1 && !child.classList.contains('word')) {
            walk(child)
          }
        })
      }
      walk(h)
      $$('.word', h).forEach((w, i) => w.querySelector('span').style.setProperty('--wd', i * 60 + 'ms'))
      h.classList.add('kinetic')
      if (calm) h.classList.add('is-in')
      else observeOnce(h)
    })

    /* 4. Image mask reveals — clip-path zeroes the image's own intersection
       rect, so watch each image's (unclipped) PARENT and toggle .is-in on
       the image itself when the parent enters the viewport. */
    const images = $$('.two-col img, .join-teaser img, .cta-band ~ * img, .page-hero + * img')
    images.forEach((img, i) => {
      img.style.setProperty('--rd', (i % 4) * 120 + 'ms')
      img.classList.add('img-reveal')
      if (calm) { img.classList.add('is-in'); return }
      const parent = img.parentElement || img
      parent.__imgTargets = parent.__imgTargets || []
      parent.__imgTargets.push(img)
      if (parent.__imgWatching) return
      parent.__imgWatching = true
      observeOnce(parent, (el) => {
        (el.__imgTargets || []).forEach((t) => t.classList.add('is-in'))
      })
    })

    /* 5. Brand strip word illumination */
    const stripP = $('.brand-strip p')
    let stripWords = []
    if (stripP) {
      stripP.innerHTML = stripP.textContent.trim().split(/\s+/)
        .map((w) => `<span class="w">${w}</span>`).join(' ')
      stripWords = $$('.brand-strip .w', stripP)
      if (calm) stripWords.forEach((w) => w.classList.add('lit'))
    }

    /* 8. Hero cursor glow */
    const hero = $('.hero')
    if (hero && !calm) {
      const glow = document.createElement('div')
      glow.className = 'hero__glow'
      glow.setAttribute('aria-hidden', 'true')
      hero.appendChild(glow)
      hero.addEventListener('pointermove', (e) => {
        const r = hero.getBoundingClientRect()
        glow.style.setProperty('--mx', ((e.clientX - r.left) / r.width * 100).toFixed(1) + '%')
        glow.style.setProperty('--my', ((e.clientY - r.top) / r.height * 100).toFixed(1) + '%')
      })
    }

    /* header scroll behaviour */
    const header = $('.site-header')
    let lastY = window.scrollY
    let ticking = false

    function onScroll() {
      const y = window.scrollY
      const max = document.documentElement.scrollHeight - window.innerHeight
      if (bar) bar.style.transform = `scaleX(${max > 0 ? Math.min(y / max, 1) : 0})`

      if (header) {
        header.classList.toggle('is-scrolled', y > 10)
        if (y > 160 && y > lastY + 4) header.classList.add('is-hidden')
        else if (y < lastY - 4 || y < 160) header.classList.remove('is-hidden')
      }
      if (toTop) toTop.classList.toggle('is-visible', y > 600)

      /* 5. brand strip words light up in sequence */
      if (stripWords.length) {
        const rect = stripP.getBoundingClientRect()
        const p = 1 - (rect.top + rect.height) / (window.innerHeight + rect.height)
        const lit = Math.round(Math.max(0, Math.min(1, p * 1.6)) * stripWords.length)
        stripWords.forEach((w, i) => w.classList.toggle('lit', i < lit))
      }

      /* 9. parallax on hero photos + 6. CTA circle rotation */
      if (!calm) {
        $$('.parallax-slow').forEach((el) => {
          const r = el.getBoundingClientRect()
          if (r.bottom > 0 && r.top < window.innerHeight) {
            const off = (r.top - window.innerHeight / 2) * -0.06
            el.style.transform = `translateY(${off.toFixed(1)}px)`
          }
        })
        const cta = $('.cta-band')
        if (cta) cta.style.setProperty('--cta-rot', (y * 0.05).toFixed(1) + 'deg')
      }

      lastY = y
      ticking = false
    }

    window.addEventListener('scroll', () => {
      if (!ticking) { ticking = true; requestAnimationFrame(onScroll) }
    }, { passive: true })
    onScroll()
  }

  /* shared one-shot IntersectionObserver — optional callback(el) fires
     instead of adding .is-in to the observed element itself */
  let sharedIO = null
  function observeOnce(el, onIn) {
    if (!('IntersectionObserver' in window)) {
      if (onIn) onIn(el); else el.classList.add('is-in')
      return
    }
    if (!sharedIO) {
      sharedIO = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.__onIn) entry.target.__onIn(entry.target)
            else entry.target.classList.add('is-in')
            sharedIO.unobserve(entry.target)
          }
        })
      }, { threshold: 0, rootMargin: '0px 0px -40px 0px' })
    }
    if (onIn) el.__onIn = onIn
    sharedIO.observe(el)
  }

  document.addEventListener('DOMContentLoaded', () => {
    initNav()
    initFooter()
    initTeam()
    initVoices()
    initForms()
    initReveal()
    initMagnetic()
    initMotion()
  })
})()
