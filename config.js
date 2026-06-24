/* ============================================================
   CONFIG — edit ONLY this file per client
   ============================================================ */

const CONFIG = {

  // ─── BUSINESS INFO ───────────────────────────────────────
  business: {
    name:      "CCTV Solar NNEF",
    phone:     "+27 73 149 8243",
    whatsapp:  "+27 73 149 8243",
    address:   "17A 5th Ave, Johannesburg, South Africa",
    hours:     "Mon–Fri 8am–5pm · Sat 8am–1pm · Emergencies 24/7",
    region:    "Gauteng",
    priceRange:"$$",
    suburbs: [
      "Johannesburg CBD",
      "Parktown",
      "Melville",
      "Westdene",
      "Brixton",
      "Newlands",
      "Sophiatown",
      "Auckland Park"
    ]
  },

  // ─── PAGE META / SEO ─────────────────────────────────────
  meta: {
    title:       "CCTV Solar NNEF — CCTV & solar installations in Johannesburg",
    description: "CCTV Solar NNEF provides professional CCTV security systems and solar power installations in Johannesburg. 3 Google reviews. Call for a quote today.",
    url:         ""  // Live domain — e.g. https://example.co.za (activates canonical + WebSite schema)
  },

  // ─── BRANDING ────────────────────────────────────────────
  branding: {
    palette:  "security",   // ember | security | forest | volt | tide
    ogImage:  "images/og.jpg"
  },

  // ─── CONTENT ─────────────────────────────────────────────
  content: {
    eyebrow:    "CCTV & solar · Johannesburg & surrounds",
    heroTitle:  "See everything. <em>Never lose power again.</em>",
    heroLead:   "CCTV Solar NNEF installs CCTV security systems and solar power solutions for homes and businesses across Johannesburg — reliable surveillance, backup power and load-shedding-proof installations.",

    googleRating: "5",
    reviewsCount: "3",
    featuredQuote: "Installed CCTV around our whole property and a solar backup system in the same week. Clean wiring, clear app setup and it just works.",
    featuredQuoteAuthor: "— Thandi M., Google review",

    trustSignals: ["CCTV installation", "Solar & backup power", "Remote monitoring", "24/7 emergency callouts"],

    // ─── SERVICES ──────────────────────────────────────────
    servicesTitle: "CCTV and solar, installed properly.",
    servicesLead:  "Security cameras and power systems that actually work when you need them — installed and set up correctly the first time.",
    services: [
      {
        icon:  "circuit",
        title: "CCTV camera installation",
        desc:  "Full camera systems for homes and businesses — positioned correctly, wired neatly and set up with remote viewing on your phone."
      },
      {
        icon:  "bolt",
        title: "Solar power systems",
        desc:  "Solar panel, inverter and battery installations sized to your household or business so load-shedding stops being a problem."
      },
      {
        icon:  "gauge",
        title: "Backup power & inverters",
        desc:  "Standalone inverter and battery backup for essential circuits — lights, Wi-Fi and security stay on when the power goes out."
      },
      {
        icon:  "shield",
        title: "Alarm & security integration",
        desc:  "CCTV linked with alarm systems and electric fencing so everything reports to one app and one control panel."
      },
      {
        icon:  "key",
        title: "Access control & gate automation",
        desc:  "Gate motors, intercoms and access control fitted and integrated with your existing security setup."
      },
      {
        icon:  "wrench",
        title: "System maintenance & repairs",
        desc:  "Faulty cameras, dead batteries or unresponsive systems diagnosed and repaired — we service what we install and what others left behind."
      },
    ],

    // ─── WORK GALLERY ──────────────────────────────────────
    galleryTitle: "The work, up close.",
    galleryLead:  "A look at the kind of installations we handle every week.",
    gallery: [
      {
        image:   "images/work-1.jpg",
        art:     "lockCylinderPick",
        fig:     "01 — CCTV installation",
        title:   "Positioned and wired properly",
        caption: "Cameras placed for full coverage with neat cable runs and a setup that's actually usable from your phone."
      },
      {
        image:   "images/work-2.jpg",
        art:     "lockCylinderPick",
        fig:     "02 — Solar power",
        title:   "Sized to your usage",
        caption: "Panels, inverter and battery capacity matched to real household or business consumption — not oversold, not undersized."
      },
      {
        image:   "images/work-3.jpg",
        art:     "lockCylinderPick",
        fig:     "03 — Backup power",
        title:   "Stays on when the grid doesn't",
        caption: "Essential circuits wired to backup power so lights, Wi-Fi and security keep running straight through an outage."
      },
      {
        image:   "images/work-4.jpg",
        art:     "lockCylinderPick",
        fig:     "04 — Alarm integration",
        title:   "Everything in one app",
        caption: "CCTV, alarm and electric fencing linked together so the whole property reports to a single control point."
      },
      {
        image:   "images/work-5.jpg",
        art:     "lockCylinderPick",
        fig:     "05 — Maintenance & repairs",
        title:   "Fixed, not replaced unnecessarily",
        caption: "Existing systems diagnosed properly — often a repair or a battery swap solves it, not a full reinstall."
      },
    ],

    // ─── PHOTO BAND ────────────────────────────────────────
    band: {
      image: "images/band.jpg",
      alt:   "CCTV Solar NNEF technician installing a camera system in Johannesburg",
      text:  "CCTV and solar installations that hold up — security and power you can rely on."
    },

    // ─── AREAS BLURB ───────────────────────────────────────
    areasTitle: "Based in Johannesburg. Installing across the wider area.",
    areasLead:  "We install in Johannesburg CBD, Parktown, Melville and the surrounding suburbs. Site visits and quotes available throughout the area.",
    areasNote:  "Outside this area? Call anyway — we cover most of greater Johannesburg.",

    // ─── WHY US ────────────────────────────────────────────
    whyTitle: "Why people trust us with security and power.",
    why: [
      {
        title: "We answer the phone",
        desc:  "Security and power issues do not keep office hours. We are available around the clock for emergencies and actually pick up."
      },
      {
        title: "Sized and quoted properly",
        desc:  "We assess your actual needs on site and quote accordingly — no oversized solar systems or camera counts you don't need."
      },
      {
        title: "Clean, professional installs",
        desc:  "Neat wiring, correctly positioned cameras and panels, and a setup that's actually easy to use once we leave."
      },
    ],

    // ─── REVIEWS ───────────────────────────────────────────
    reviewsTitle: "From 3 verified Google reviews.",
    reviews: [
      {
        body:   "Installed CCTV around our whole property and a solar backup system in the same week. Clean wiring, clear app setup and it just works.",
        name:   "Thandi M.",
        stars:  5,
        source: "Google"
      },
      {
        body:   "Solar and inverter installed after constant load-shedding frustration. Sized correctly and explained clearly. Very happy.",
        name:   "Peter H.",
        stars:  5,
        source: "Google"
      },
      {
        body:   "Fixed a CCTV system another company botched — found the actual fault, repaired it properly and didn't oversell a replacement.",
        name:   "Kim S.",
        stars:  5,
        source: "Google"
      },
    ],

    // ─── FAQ ────────────────────────────────────────────────
    faqTitle: "CCTV & solar questions.",
    faqLead:  "What most people ask before installing.",
    faq: [
      {
        q: "How many cameras do I actually need?",
        a: "Depends on your property layout — we assess on site and recommend coverage for entry points and blind spots rather than overselling cameras you don't need."
      },
      {
        q: "Can I view my cameras remotely?",
        a: "Yes — systems are set up with a phone app so you can view live and recorded footage from anywhere."
      },
      {
        q: "What size solar system do I need?",
        a: "We work out your actual usage and recommend a system sized to keep your essentials running, with options to scale up later."
      },
      {
        q: "Will my backup power run my whole house?",
        a: "A full system can, but most clients start with essential circuits — lights, Wi-Fi, security and fridge — which is more affordable and still solves load-shedding."
      },
      {
        q: "Do you service equipment another company installed?",
        a: "Yes — we diagnose and repair existing CCTV, alarm and solar installations, not just our own."
      },
    ],

    // ─── CONTACT ───────────────────────────────────────────
    contactTitle: "Tell us what you need covered.",
    contactLead:  "Send through your property size and what you're after and we will advise on the right setup.",
    contactPlaceholder: "e.g. 4-camera CCTV system, solar backup for load-shedding, existing system needs repair"
  }
};
