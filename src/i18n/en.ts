export const en = {
  nav: {
    about: "About",
    technology: "Technology",
    process: "Process",
    phb: "PHB",
    impact: "Impact",
    invest: "Investors",
    contact: "Contact",
  },
  problem: {
    badge: "Why now",
    headline: "Industry faces two\nconverging crises",
    subheadline: "Two structural market failures create a unique opportunity for technology that solves both at once.",
    co2: {
      label: "Emissions allowance crisis",
      price_now: "€75/t",
      price_now_label: "current EU ETS price",
      price_2027: "€100+/t",
      price_2027_label: "consensus by 2027",
      price_2030: "€149/t",
      price_2030_label: "BNEF forecast for 2030",
      description: "Industrial companies pay more for every tonne of CO₂ emitted. The EU ETS allowance price is set to double by 2030 — every uncaptured tonne costs real money.",
    },
    plastic: {
      label: "Plastic industry crisis",
      points: [
        "EU banning single-use plastics based on PP and PE",
        "PLA — the main bioplastic alternative — does not biodegrade in nature or the sea",
        "Manufacturers need a drop-in substitute compatible with existing machinery",
        "No European CO₂-based PHB producer exists",
      ],
      description: "The plastics industry faces a regulatory tsunami. Existing bioplastic alternatives fail requirements — either not truly biodegradable, or requiring full reinvestment in machinery.",
    },
    conclusion: "Waste CO₂ + biodegradable plastic = structural opportunity",
  },
  hero: {
    badge: "Clean chemistry of the future",
    headline: "We turn\nCO₂ into plastic",
    invest_link: "Pre-seed round open →",
    subheadline:
      "Using electrocatalysis and synthetic biology, we convert industrial CO₂ emissions into formate and then into the biodegradable bioplastic PHB.",
    cta_primary: "How it works",
    cta_secondary: "Contact us",
    scroll_hint: "Explore",
  },
  process: {
    badge: "Four-step process",
    headline: "From emissions to material",
    subheadline:
      "Electrochemistry + biotechnology in one modular system. Free feedstock — we take CO₂ as waste gas from industrial partners.",
    steps: [
      {
        number: "01",
        label: "CO₂ Source",
        title: "Waste CO₂",
        description:
          "We take CO₂ as waste gas directly from industrial partners — breweries, yeast factories, or biogas plants. The input feedstock is free.",
        molecule: "co2",
        accent: "#ef4444",
      },
      {
        number: "02",
        label: "Electrolyzer",
        title: "CO₂ → Formate",
        description:
          "The electrolyzer converts CO₂ + H₂O using green electricity into potassium formate (HCOOK). Formate is a stable liquid — a natural \"CO₂ battery\" storable in tanks without special infrastructure.",
        molecule: "formate",
        accent: "#22c55e",
      },
      {
        number: "03",
        label: "Bioreactor",
        title: "Formate → PHB",
        description:
          "Cupriavidus necator bacteria ferment formate and accumulate PHB as an intracellular storage compound. No GMO — C. necator is a natural organism with a clean regulatory pathway.",
        molecule: "phb",
        accent: "#2dd4bf",
      },
      {
        number: "04",
        label: "PHB Pellets",
        title: "Biodegradable plastic",
        description:
          "The output is PHB pellets — a biodegradable thermoplastic with properties comparable to PP. Processors can use their existing machinery without reinvestment.",
        molecule: "pellets",
        accent: "#86efac",
      },
    ],
  },
  tech: {
    badge: "Technology",
    headline: "Pioneering science",
    subheadline:
      "We combine electrocatalysis and synthetic biology into one modular system with a scientifically validated foundation.",
    trl_title: "Technology Readiness Level (TRL)",
    trl_items: [
      { label: "Electrolyzer CO₂→formate", trl: 4, color: "#22c55e" },
      { label: "C. necator fermentation (PHB)", trl: 4.5, color: "#22c55e" },
      { label: "PHB extraction & purification", trl: 5, color: "#2dd4bf" },
      { label: "Integrated system", trl: 3, color: "#f59e0b" },
    ],
    references: "Scientific validation: Fink et al. 2020, Verma et al. Nature Energy 2019, Abarca et al. ACS 2024",
    electrolyzer: {
      title: "Electrolyzer CO₂ → Formate",
      description:
        "The membrane electrolyzer converts CO₂ + H₂O + 2e⁻ into potassium formate (HCOOK) at room temperature and atmospheric pressure. Formate is a stable liquid — a natural \"CO₂ battery\" storable without special infrastructure.",
      specs: ["TRL 4 — lab validated", "Reaction: CO₂ + H₂O + 2e⁻ → HCOOK", "Modular design", "Scalable from kW to MW"],
    },
    bioreactor: {
      title: "Bioreactor C. necator → PHB",
      description:
        "Cupriavidus necator bacteria ferment formate and accumulate PHB as an intracellular storage compound. No GMO — C. necator is a natural organism with a clean regulatory pathway.",
      specs: ["TRL 4–5 — fermentation optimized", "C. necator — no GMO", "Continuous operation", "R&D partner: Czech Academy of Sciences"],
    },
    site: {
      title: "Site identified",
      description: "Velkopopovický Brewery — unused premises with clean fermentation CO₂ on site. Ideal conditions for the first pilot unit.",
    },
    customers: {
      title: "First customers identified",
      names: ["Průša Research", "Fillamentum Industrial (Hulín)", "Fatra Napajedla"],
    },
  },
  phb: {
    badge: "PHB bioplastic",
    headline: "The plastic nature\ncan digest",
    subheadline: "PHB is not like other bioplastics. It's a true PP replacement — functionally, processually, and regulatorily.",
    comparison_title: "PHB vs. PLA vs. PP",
    properties: [
      {
        value: "180",
        unit: "days",
        title: "Biodegrades in nature",
        description: "In soil, fresh and saltwater, and marine environments. PLA biodegrades only in industrial composting at >55 °C.",
        accent: "#22c55e",
      },
      {
        value: "1:1",
        unit: "substitute",
        title: "PP-like properties",
        description: "Physical properties close to PP — processors can use existing injection molding, extrusion blow, and film lines without reinvestment.",
        accent: "#2dd4bf",
      },
      {
        value: "FDA",
        unit: "approved",
        title: "Biocompatible",
        description: "Biodegrades to 3-hydroxybutyrate — a natural human metabolite. Suitable for medical devices and direct food contact.",
        accent: "#86efac",
      },
      {
        value: "Food",
        unit: "safe",
        title: "Certifiable",
        description: "Danimer Scientific and TianAn Biopolymer have certified food-safe blends — the certification pathway is proven and precedents exist.",
        accent: "#4ade80",
      },
    ],
    applications_title: "Target applications",
    applications: [
      { label: "3D filaments", desc: "Průša Research, Fillamentum — drop-in replacement for PLA/PP filaments", icon: "🖨" },
      { label: "Packaging & films", desc: "Food packaging, agro films — functionally equivalent to PE/PP", icon: "📦" },
      { label: "Cosmetics", desc: "Exfoliating microbeads — PHB is exempt from REACH 2023/2055 microplastics ban", icon: "✨" },
      { label: "Medical devices", desc: "Resorbable implants, sutures — FDA-approved biocompatibility", icon: "🏥" },
    ],
    reach_note: "REACH 2023/2055 bans synthetic microplastics resistant to biodegradation. PHB biodegrades — it is by definition exempt from the ban, opening a premium cosmetics market of €11.3B (2035).",
  },
  impact: {
    badge: "Impact",
    headline: "Numbers that change the climate",
    subheadline: "Every ton of PHB we produce means less CO₂ in the atmosphere, less fossil plastic in landfill — and savings for our partners.",
    stats: [
      { value: "75", unit: "€/t", label: "current EU ETS price — rising to €149/t by 2030", suffix: "" },
      { value: "800", unit: "M €/yr", label: "European biodegradable thermoplastics market (TAM)", suffix: "" },
      { value: "180", unit: "days", label: "to full PHB biodegradation in nature", suffix: "" },
      { value: "70", unit: "k kg", label: "planned annual PHB production by 2035", suffix: "" },
    ],
  },
  about: {
    badge: "About us",
    headline: "The team changing the world",
    subheadline:
      "Two founders, one goal: bridge economics and science so that industrial CO₂ emissions stop being a liability and become a raw material.",
    mission:
      "Our mission is to accelerate industrial decarbonization by turning inevitable CO₂ emissions into valuable materials.",
  },
  contact: {
    badge: "Contact",
    headline: "Let's work together",
    subheadline:
      "Looking for a partner for a pilot project, investment, or research collaboration? Get in touch.",
    form: {
      name: "Name",
      email: "Email",
      message: "Message",
      submit: "Send message",
      placeholder_name: "John Smith",
      placeholder_email: "john@company.com",
      placeholder_message: "Describe your interest or project...",
    },
    info: {
      location: "Prague, Czech Republic",
      email: "hello@formitech.cz",
    },
  },
  invest: {
    badge: "Investment Opportunity",
    headline: "Pre-seed round\nis open",
    subheadline: "We're looking for our first investor to help us build the pilot unit and validate the path to commercial operation.",
    funding: {
      amount: "100k",
      currency: "€",
      label: "pre-seed",
      description: "We're opening our first investment round to build a pilot unit at the Velkopopovický Brewery site. Funds go directly to technology validation and first customer deliveries.",
      cta: "I want to invest",
      use: [
        { label: "Pilot unit", desc: "Build electrolyzer + bioreactor at Velkopopovice", pct: "55%" },
        { label: "R&D", desc: "Process optimization, PHB yield improvement", pct: "30%" },
        { label: "Certification & regulatory", desc: "Process certification, customer validation", pct: "15%" },
      ],
    },
    revenue: {
      title: "Three revenue streams",
      streams: [
        {
          label: "PHB pellet sales",
          desc: "B2B sales of biodegradable thermoplastic pellets to processors. Target price €5–8/kg at 70k kg/yr production.",
          highlight: "€5–8 / kg",
        },
        {
          label: "EU ETS savings sharing",
          desc: "Industrial partners share part of their saved emissions costs. Every captured tonne of CO₂ = €75–149 saved.",
          highlight: "€75–149 / t CO₂",
        },
        {
          label: "Process licensing",
          desc: "Mid-term goal: license the electrocatalytic process to other European producers without own production required.",
          highlight: "mid-term horizon",
        },
      ],
    },
    market: {
      title: "Addressable market",
      subtitle: "2030 projection",
      tam: { label: "TAM", name: "Total market", desc: "European biodegradable thermoplastics market", value: "€800M / yr" },
      sam: { label: "SAM", name: "Serviceable market", desc: "Manufacturers near CO₂ sources in CZ + DE + AT + SK", value: "€90M / yr" },
      som: { label: "SOM", name: "Realistic target", desc: "Formitech 2030 at 70k kg / yr capacity", value: "€3.5M / yr" },
    },
  },
  footer: {
    tagline: "Turning CO₂ into the future.",
    links: "Quick links",
    rights: "All rights reserved.",
  },
};
