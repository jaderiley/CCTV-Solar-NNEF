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
    title:       "CCTV Solar NNEF — Locksmith in johannesburg",
    description: "CCTV Solar NNEF provides professional locksmith in Johannesburg. 3 Google reviews. Call for a quote today.",
    url:         ""  // Live domain — e.g. https://example.co.za (activates canonical + WebSite schema)
  },

  // ─── BRANDING ────────────────────────────────────────────
  branding: {
    palette:  "security",   // ember | security | forest | volt | tide
    ogImage:  "images/og.jpg"
  },

  // ─── CONTENT ─────────────────────────────────────────────
  content: {
    eyebrow:    "Locksmith · Johannesburg & surrounds",
    heroTitle:  "Locked out? <em>We are on our way.</em>",
    heroLead:   "CCTV Solar NNEF provides fast, professional locksmith services across Johannesburg. Emergency lockouts, key cutting, lock installation and safe opening.",

    googleRating: "5",
    reviewsCount: "3",
    featuredQuote: "Locked out at 9pm — they answered immediately, arrived in 20 minutes and had me inside in five. Excellent service.",
    featuredQuoteAuthor: "— Thandi M., Google review",

    trustSignals: ["Emergency lockouts", "Key cutting", "Lock upgrades", "24/7 available"],

    // ─── SERVICES ──────────────────────────────────────────
    servicesTitle: "Professional locksmith services.",
    servicesLead:  "Emergency lockouts, key cutting and lock installation — honest advice, fair pricing.",
    services: [
      {
        icon:  "key",
        title: "Emergency lockouts",
        desc:  "Locked out of your house, car, office or safe — we respond quickly and open it without damaging your lock where possible."
      },
      {
        icon:  "door",
        title: "Key cutting & duplication",
        desc:  "House keys, security keys and high-security keys cut on the spot. Walk-ins welcome."
      },
      {
        icon:  "padlock",
        title: "Lock installation & upgrades",
        desc:  "New locks and security upgrades installed and correctly fitted. We advise on what is actually worth spending."
      },
      {
        icon:  "safe",
        title: "Safe opening & servicing",
        desc:  "Forgot the combination? Inherited a safe? We open and service most domestic and small commercial safes."
      },
      {
        icon:  "keyring",
        title: "Master key systems",
        desc:  "One key for multiple doors — designed and cut for homes, offices and complexes."
      },
      {
        icon:  "wrench",
        title: "Lock repairs after break-ins",
        desc:  "Same-day repairs after a forced entry. We carry common stock so you are not left with a broken door overnight."
      },
    ],

    // ─── WORK GALLERY ──────────────────────────────────────
    galleryTitle: "The work, up close.",
    galleryLead:  "A look at the kind of work we handle every week.",
    gallery: [
      {
        image:   "images/work-1.jpg",
        art:     "lockCylinderPick",
        fig:     "01 — Emergency lockouts",
        title:   "Opened without damage",
        caption: "Most locked doors opened non-destructively — no drilling unless the lock is damaged or seized."
      },
      {
        image:   "images/work-2.jpg",
        art:     "lockCylinderPick",
        fig:     "02 — Key cutting",
        title:   "Cut to the original",
        caption: "Keys traced and cut on calibrated machines so duplicates match the original bitting precisely."
      },
      {
        image:   "images/work-3.jpg",
        art:     "lockCylinderPick",
        fig:     "03 — Lock upgrades",
        title:   "Anti-pick, anti-drill",
        caption: "Standard cylinders replaced with high-security alternatives — often the best value security upgrade available."
      },
      {
        image:   "images/work-4.jpg",
        art:     "lockCylinderPick",
        fig:     "04 — Master key systems",
        title:   "One key, multiple doors",
        caption: "Master key system designed so one key opens all doors while each room keeps its own individual key."
      },
      {
        image:   "images/work-5.jpg",
        art:     "lockCylinderPick",
        fig:     "05 — Safe opening",
        title:   "Opened and serviced",
        caption: "Dial mechanisms and bolt-work diagnosed before anything else is tried — safe opened without damage where possible."
      },
    ],

    // ─── PHOTO BAND ────────────────────────────────────────
    band: {
      image: "images/band.jpg",
      alt:   "CCTV Solar NNEF team at work in Johannesburg",
      text:  "Fast, reliable locksmith service — residential and emergency."
    },

    // ─── AREAS BLURB ───────────────────────────────────────
    areasTitle: "Based in Johannesburg. Serving the wider area.",
    areasLead:  "We cover Johannesburg CBD, Parktown, Melville and the surrounding suburbs. Emergency response available throughout the area.",
    areasNote:  "Outside this area? Call anyway — we cover most of greater Johannesburg for emergencies.",

    // ─── WHY US ────────────────────────────────────────────
    whyTitle: "Why people call us first.",
    why: [
      {
        title: "We answer the phone",
        desc:  "Lockouts do not keep office hours. We are available around the clock and actually pick up."
      },
      {
        title: "Price before we start",
        desc:  "We quote on the phone where possible and confirm on site before touching your lock."
      },
      {
        title: "Skilled, experienced locksmiths",
        desc:  "Not a franchised callout centre — skilled locksmiths who have actually done this work for years."
      },
    ],

    // ─── REVIEWS ───────────────────────────────────────────
    reviewsTitle: "From 3 verified Google reviews.",
    reviews: [
      {
        body:   "Locked out at 9pm — they answered immediately, arrived in 20 minutes and had me inside in five. Excellent service.",
        name:   "Thandi M.",
        stars:  5,
        source: "Google"
      },
      {
        body:   "New lock installed after a break-in. Same day, quality lock, fair price. Would definitely recommend.",
        name:   "Peter H.",
        stars:  5,
        source: "Google"
      },
      {
        body:   "Key cut for an old lock with no original to copy from — decoded it on site and cut a perfect key. Impressed.",
        name:   "Kim S.",
        stars:  5,
        source: "Google"
      },
    ],

    // ─── FAQ ────────────────────────────────────────────────
    faqTitle: "Locksmith questions.",
    faqLead:  "What most people ask before calling.",
    faq: [
      {
        q: "How quickly can you get to me?",
        a: "Response time depends on your location and time of day, but we aim to be with you within 30–45 minutes for emergencies in our area."
      },
      {
        q: "Will you have to break or drill my lock?",
        a: "Not usually. Most lockouts can be opened non-destructively. Drilling is a last resort and we will always explain why before doing it."
      },
      {
        q: "Is there a call-out fee?",
        a: "We quote on the phone where possible and confirm on site before starting. No surprise charges."
      },
      {
        q: "Can you cut a key without the original?",
        a: "In many cases yes — we can decode the lock on site and cut a new key from that."
      },
      {
        q: "Can you open a safe I have inherited with no combination?",
        a: "Often yes. We start by diagnosing the mechanism before drilling — most domestic safes can be opened without damage."
      },
    ],

    // ─── CONTACT ───────────────────────────────────────────
    contactTitle: "Tell us what is happened.",
    contactLead:  "Send through the details and we will advise on how quickly we can get to you.",
    contactPlaceholder: "e.g. locked out of house in Randburg, key broken in lock, need new lock after break-in"
  }
};
