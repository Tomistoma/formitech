export const cs = {
  nav: {
    about: "O nás",
    technology: "Technologie",
    process: "Proces",
    phb: "PHB",
    impact: "Dopad",
    invest: "Investoři",
    contact: "Kontakt",
  },
  problem: {
    badge: "Proč teď",
    headline: "Průmysl čelí dvěma\nkonvergujícím krizím",
    subheadline: "Dvě strukturální selhání trhu vytvářejí unikátní příležitost pro technologii, která řeší obě najednou.",
    co2: {
      label: "Krize emisních povolenek",
      price_now: "75 EUR/t",
      price_now_label: "aktuální cena EU ETS",
      price_2027: "100+ EUR/t",
      price_2027_label: "konsenzus do 2027",
      price_2030: "149 EUR/t",
      price_2030_label: "prognóza BNEF pro rok 2030",
      description: "Průmyslové podniky platí stále více za každou tunu emitovaného CO₂. Cena emisní povolenky EU ETS se má do roku 2030 zdvojnásobit — každá nezachycená tuna stojí reálné peníze.",
    },
    plastic: {
      label: "Krize plastového průmyslu",
      points: [
        "EU zakazuje jednorázové plasty na bázi PP a PE",
        "PLA — hlavní bioplastická alternativa — nebiodegraduje v přírodě ani v moři",
        "Výrobci potřebují náhradu kompatibilní se stávajícím strojním parkem",
        "Žádný evropský výrobce CO₂-based PHB neexistuje",
      ],
      description: "Plastový průmysl čelí regulatorní tsunami. Existující bioplastické alternativy nesplňují požadavky — buď nejsou skutečně biodegradabilní, nebo vyžadují kompletní reinvestici do strojního parku.",
    },
    conclusion: "Odpadní CO₂ + biodegradabilní plast = strukturální příležitost",
  },
  hero: {
    badge: "Čistá chemie budoucnosti",
    headline: "Proměňujeme\nCO₂ v plast",
    invest_link: "Otevřeno pre-seed kolo →",
    subheadline:
      "Elektrokatalýzou a syntetickou biologií přeměňujeme průmyslové emise CO₂ na formiát a poté na biodegradabilní bioplast PHB.",
    cta_primary: "Jak to funguje",
    cta_secondary: "Kontaktujte nás",
    scroll_hint: "Prozkoumejte",
  },
  process: {
    badge: "Čtyř-krokový proces",
    headline: "Od emisí k materiálu",
    subheadline:
      "Elektrochemie + biotechnologie v jednom modulárním systému. Vstup zdarma — CO₂ odebíráme jako odpadní plyn od průmyslových partnerů.",
    steps: [
      {
        number: "01",
        label: "Zdroj CO₂",
        title: "Odpadní CO₂",
        description:
          "CO₂ odebíráme jako odpadní plyn přímo od průmyslových partnerů — pivovarů, závodů na velkovýrobu kvasnic nebo bioplynových stanic. Vstupní surovina je zdarma.",
        molecule: "co2",
        accent: "#ef4444",
      },
      {
        number: "02",
        label: "Elektrolyzér",
        title: "CO₂ → Formiát",
        description:
          "Elektrolyzér přeměňuje CO₂ + H₂O pomocí zelené elektřiny na draselný formiát (HCOOK). Formiát je stabilní kapalina — přirozená \"CO₂ baterie\" skladovatelná v nádobách.",
        molecule: "formate",
        accent: "#22c55e",
      },
      {
        number: "03",
        label: "Bioreaktor",
        title: "Formiát → PHB",
        description:
          "Bakterie Cupriavidus necator fermentují formiát a akumulují PHB jako zásobní látku. Žádné GMO — C. necator má čistou certifikační cestu, ambice využití GMO v budoucnu.",
        molecule: "phb",
        accent: "#2dd4bf",
      },
      {
        number: "04",
        label: "PHB pelety",
        title: "Biodegradabilní plast",
        description:
          "Výsledkem jsou PHB pelety — biodegradabilní termoplast s vlastnostmi srovnatelnými s PP. Zpracovatelé mohou použít stávající strojní park bez reinvestice.",
        molecule: "pellets",
        accent: "#86efac",
      },
    ],
  },
  tech: {
    badge: "Technologie",
    headline: "Průkopnická věda",
    subheadline:
      "Kombinujeme elektrokatalýzu a syntetickou biologii do jednoho modulárního systému s vědecky ověřeným základem.",
    trl_title: "Technologická připravenost (TRL)",
    trl_items: [
      { label: "Elektrolyzér CO₂→formiát", trl: 4, color: "#22c55e" },
      { label: "Fermentace C. necator (PHB)", trl: 4.5, color: "#22c55e" },
      { label: "Extrakce a čištění PHB", trl: 5, color: "#2dd4bf" },
      { label: "Integrovaný systém", trl: 3, color: "#f59e0b" },
    ],
    references: "Vědecká validace: Fink et al. 2020, Verma et al. Nature Energy 2019, Abarca et al. ACS 2024",
    electrolyzer: {
      title: "Elektrolyzér CO₂ → Formiát",
      description:
        "Membránový elektrolyzér přeměňuje CO₂ + H₂O + 2e⁻ na draselný formiát (HCOOK) za pokojové teploty a atmosférického tlaku. Formiát je stabilní kapalina — přirozená \"CO₂ baterie\" skladovatelná bez speciální infrastruktury.",
      specs: ["TRL 4 — laboratorně ověřeno", "Reakce CO₂ + H₂O + 2e⁻ → HCOOK", "Modulární design", "Škálovatelné od kW do MW"],
    },
    bioreactor: {
      title: "Bioreaktor C. necator → PHB",
      description:
        "Bakterie Cupriavidus necator fermentují formiát a akumulují PHB jako intracelulární zásobní látku. Žádné GMO — C. necator je přírodní mikroorganismus s čistou regulatorní cestou.",
      specs: ["TRL 4–5 — fermentace optimalizována", "C. necator — bez GMO", "Kontinuální provoz", "R&D partner: ÚM AV ČR"],
    },
    site: {
      title: "Identifikovaná lokalita",
      description: "Velkopopovický pivovar — nevyužitý areál s čistým CO₂ z fermentace přímo na místě. Ideální podmínky pro první pilotní jednotku.",
    },
    customers: {
      title: "První zákazníci identifikováni",
      names: ["Průša Research", "Fillamentum Industrial (Hulín)", "Fatra Napajedla"],
    },
  },
  phb: {
    badge: "PHB bioplast",
    headline: "Plast, který příroda\numí strávit",
    subheadline: "PHB není jako ostatní bioplasty. Je to skutečná náhrada za PP — funkčně, procesně i regulatorně.",
    comparison_title: "PHB vs. PLA vs. PP",
    properties: [
      {
        value: "180",
        unit: "dní",
        title: "Biodegraduje v přírodě",
        description: "V půdě, sladké i slané vodě a mořském prostředí. PLA biodegraduje pouze v průmyslové kompostárně při teplotě >55 °C.",
        accent: "#22c55e",
      },
      {
        value: "1:1",
        unit: "substitut",
        title: "Vlastnosti jako PP",
        description: "Fyzikální vlastnosti blízké PP — zpracovatelé mohou používat stávající strojní park pro vstřikování, extruzní foukání i fólii bez reinvestice.",
        accent: "#2dd4bf",
      },
      {
        value: "FDA",
        unit: "approved",
        title: "Biokompatibilní",
        description: "Biodegraduje na 3-hydroxybutyrát — přirozený metabolit lidského těla. Vhodný pro lékařské pomůcky a přímý kontakt s potravinami.",
        accent: "#86efac",
      },
      {
        value: "Food",
        unit: "safe",
        title: "Certifikovatelný",
        description: "Danimer Scientific a TianAn Biopolymer mají certifikované food-safe blendy — cesta k certifikaci je ověřena a precedent existuje.",
        accent: "#4ade80",
      },
    ],
    applications_title: "Cílové aplikace",
    applications: [
      { label: "3D filamenty", desc: "Průša Research, Fillamentum — drop-in náhrada za PLA/PP filamenty", icon: "🖨" },
      { label: "Obaly a fólie", desc: "Potravinové obaly, agro fólie — funkčně ekvivalentní PE/PP", icon: "📦" },
      { label: "Kosmetika", desc: "Mikrokuličky peelingů — PHB je exempt z REACH 2023/2055 zákazu mikroplastů", icon: "✨" },
      { label: "Lékařské pomůcky", desc: "Vstřebatelné implantáty, suture — FDA schválená biokompatibilita", icon: "🏥" },
    ],
    reach_note: "REACH 2023/2055 zakazuje syntetické mikroplasty odolné vůči biodegradaci. PHB biodegraduje — je z definice vyjmuto ze zákazu a otevírá prémiový kosmetický trh €11,3 mld (2035).",
  },
  impact: {
    badge: "Dopad",
    headline: "Čísla, která mění klima",
    subheadline: "Každá tuna PHB, kterou vyrobíme, znamená méně CO₂ v atmosféře, méně fosilního plastu na skládce — a úspory pro naše partnery.",
    stats: [
      { value: "75", unit: "EUR/t", label: "aktuální cena EU ETS — a roste na 149 EUR/t (2030)", suffix: "" },
      { value: "800", unit: "M €/rok", label: "evropský trh biodegradabilních termoplastů (TAM)", suffix: "" },
      { value: "180", unit: "dní", label: "do úplné biodegradace PHB v přírodě", suffix: "" },
      { value: "70", unit: "tis. kg", label: "plánovaná roční produkce PHB v roce 2035", suffix: "" },
    ],
  },
  about: {
    badge: "O nás",
    headline: "Tým, který mění svět",
    subheadline:
      "Dva zakladatelé, jeden cíl: propojit ekonomiku a vědu tak, aby průmyslové emise CO₂ přestaly být nákladem a staly se surovinou.",
    mission:
      "Naším posláním je urychlit dekarbonizaci průmyslu tím, že z nevyhnutelných emisí CO₂ vytváříme hodnotné materiály.",
  },
  contact: {
    badge: "Kontakt",
    headline: "Pojďme spolupracovat",
    subheadline:
      "Hledáte partnera pro pilotní projekt, investici nebo výzkumnou spolupráci? Ozvěte se nám.",
    form: {
      name: "Jméno",
      email: "E-mail",
      message: "Zpráva",
      submit: "Odeslat zprávu",
      placeholder_name: "Jan Novák",
      placeholder_email: "jan@firma.cz",
      placeholder_message: "Popište váš zájem nebo projekt...",
    },
    info: {
      location: "Praha, Česká republika",
      email: "hello@formitech.cz",
    },
  },
  invest: {
    badge: "Investiční příležitost",
    headline: "Pre-seed kolo\nje otevřeno",
    subheadline: "Hledáme prvního investora, který nám pomůže postavit pilotní jednotku a validovat cestu ke komerčnímu provozu.",
    funding: {
      amount: "100k",
      currency: "€",
      label: "pre-seed",
      description: "Otevíráme první investiční kolo na stavbu pilotní jednotky v areálu Velkopopovického pivovaru. Prostředky půjdou přímo do validace technologie a prvních zákaznických dodávek.",
      cta: "Chci investovat",
      use: [
        { label: "Pilotní jednotka", desc: "Stavba elektrolyzéru + bioreaktoru ve Velkopopovicích", pct: "55 %" },
        { label: "Výzkum & vývoj", desc: "Optimalizace procesu, zvýšení výtěžnosti PHB", pct: "30 %" },
        { label: "Certifikace & regulace", desc: "Procesní certifikace, zákaznická validace", pct: "15 %" },
      ],
    },
    revenue: {
      title: "Tři zdroje příjmů",
      streams: [
        {
          label: "Prodej PHB pelet",
          desc: "B2B prodej biodegradabilních termoplastových pelet zpracovatelům. Cílová cena €5–8/kg při produkci 70 tis. kg/rok.",
          highlight: "€5–8 / kg",
        },
        {
          label: "Úspora EU ETS povolenek",
          desc: "Průmysloví partneři sdílejí část ušetřených emisních nákladů. Každá zachycená tuna CO₂ = €75–149 ušetřených.",
          highlight: "€75–149 / t CO₂",
        },
        {
          label: "Licencování procesu",
          desc: "Střednědobý cíl: licencovat elektrokatalytický proces dalším evropským výrobcům bez nutnosti vlastní produkce.",
          highlight: "střední horizont",
        },
      ],
    },
    market: {
      title: "Adresovatelný trh",
      subtitle: "Projekce 2030",
      tam: { label: "TAM", name: "Celkový trh", desc: "Evropský trh biodegradabilních termoplastů", value: "€800M / rok" },
      sam: { label: "SAM", name: "Dostupný trh", desc: "Výrobci u CO₂ zdrojů v CZ + DE + AT + SK", value: "€90M / rok" },
      som: { label: "SOM", name: "Reálný cíl", desc: "Formitech 2030 při kapacitě 70 tis. kg / rok", value: "€3,5M / rok" },
    },
  },
  footer: {
    tagline: "Proměňujeme CO₂ v budoucnost.",
    links: "Rychlé odkazy",
    rights: "Všechna práva vyhrazena.",
  },
};
