// All 16 critical roles for V-Mart Talent Density Cockpit
// Single source of truth — drives Roles Map, Skill Delta, Sourcing, and AI context

export type RoleStatus = "existing" | "elevated" | "proposed";
export type Cluster =
  | "Strategic Leadership"
  | "Merchandising & Private Label"
  | "Store Operations & Frontline"
  | "Supply Chain"
  | "Digital, Tech & LimeRoad"
  | "Strategy & Transformation"
  | "CHRO Office";

export interface SkillDimension {
  dimension: string;
  current: number; // 1-5
  topDecile: number; // 1-5
}

export interface Role {
  id: string;
  number: number;
  name: string;
  status: RoleStatus;
  segment: string;
  cluster: Cluster;
  reportsTo: string;
  seniority: string;
  essence: string;
  whyCritical: string;
  valueAtStakeNote: string;
  kpis: string[];
  capabilities: { name: string; description: string }[];
  benchmarks: string;
  sourcing: {
    summary: string;
    targetCompanies: string[];
    compBand: string;
    leadTime: string;
  };
  buildVsBuy: string;
  developmentPathway: string;
  first90Days: string;
  skillDelta: SkillDimension[];
}

export const roles: Role[] = [
  {
    id: "coo-retail",
    number: 1,
    name: "COO — Retail Business",
    status: "existing",
    segment: "Retail Trade",
    cluster: "Strategic Leadership",
    reportsTo: "MD",
    seniority: "C-Suite",
    essence:
      "Translates strategy into 577 storefronts of execution. Strong incumbent; the strategic conversation is about how the seat evolves as VMart institutionalizes from founder-proximate to professionalized.",
    whyCritical:
      "Owns the entire offline P&L (~₹3,500+ Cr) and the 60–90 stores/year expansion engine. Every operational lever — store productivity, SSSG, regional execution, inventory turn — flows through this seat. As VMart institutionalizes, the COO seat carries the operating rhythm that frees the MD to focus on strategy and capital allocation.",
    valueAtStakeNote:
      "Indicative: small shifts in store productivity and SSSG translate into significant absolute rupees given the revenue base.",
    kpis: [
      "SSSG (same-store sales growth)",
      "Store EBITDA margin",
      "Inventory turn",
      "New store breakeven time",
      "Regional performance variance",
      "Talent bench depth at zonal level",
    ],
    capabilities: [
      { name: "Multi-format retail operations DNA at scale", description: "Comfort running multiple formats and 500+ stores simultaneously." },
      { name: "Regional structure design", description: "Has architected zonal/regional layers in similar geographies." },
      { name: "Talent multiplier", description: "Develops zonal heads who develop store managers." },
      { name: "Data-driven decision-making", description: "Reads dashboards, doesn't outsource the call." },
      { name: "Founder partnership", description: "Operates as strategic partner to a founder-MD without friction." },
      { name: "Omnichannel comfort", description: "Sees the offline business as part of an integrated customer journey." },
    ],
    benchmarks:
      "Trent's leadership (Noel Tata + Sanjay Pasari combination) is widely admired in value fashion ops. Reliance Retail Fashion COOs operate at scale. D-Mart's COO discipline sets the gold standard in value retail operations.",
    sourcing: {
      summary:
        "Internal succession often the right call here for culture continuity. External search is appropriate when a specific gap (e.g., omnichannel orchestration) needs new DNA.",
      targetCompanies: ["Trent", "Reliance Retail Fashion", "ABFRL", "Westside", "Pantaloons", "Domino's India"],
      compBand: "₹2–4 Cr+",
      leadTime: "6–9 months (external)",
    },
    buildVsBuy:
      "Internal succession typically preferred at this stage given founder culture. External hire makes sense if a specific capability gap needs new DNA.",
    developmentPathway:
      "For the existing strong incumbent, expanding mandate (perhaps adding LimeRoad oversight), external board exposure, executive education at HBS/INSEAD AMP. For potential zonal-head successors, structured rotation through HQ functions, P&L exposure, sponsored AMP-level program.",
    first90Days:
      "Not directly applicable as filled. For successor planning: visible alignment with MD, building zonal trust, surgical first decisions that signal continuity-plus-improvement.",
    skillDelta: [
      { dimension: "Multi-format Ops at Scale", current: 4.2, topDecile: 4.5 },
      { dimension: "Regional Structure Design", current: 3.5, topDecile: 4.5 },
      { dimension: "Data-Driven Decision-Making", current: 3.2, topDecile: 4.7 },
      { dimension: "Omnichannel Orchestration", current: 2.5, topDecile: 4.5 },
      { dimension: "Talent Multiplier", current: 3.8, topDecile: 4.3 },
    ],
  },
  {
    id: "cdo",
    number: 2,
    name: "Chief Digital Officer",
    status: "proposed",
    segment: "LimeRoad + Omnichannel",
    cluster: "Strategic Leadership",
    reportsTo: "MD",
    seniority: "C-Suite",
    essence:
      "A unified executive owner for LimeRoad turnaround, omnichannel integration, and digital revenue strategy — accountabilities currently distributed across multiple owners.",
    whyCritical:
      "LimeRoad is in turnaround; omnichannel is increasingly central to competing with Zudio, Reliance Trends, and Meesho. A single accountable executive accelerates decision velocity and unifies digital strategy under one P&L view. Many retailers reach the point where this consolidation becomes valuable — VMart may be there.",
    valueAtStakeNote:
      "Directional: dedicated digital leadership has historically accelerated turnarounds and unlocked omnichannel revenue contribution at peer retailers.",
    kpis: [
      "LimeRoad EBITDA path to breakeven",
      "Omnichannel revenue contribution",
      "Digital CAC",
      "Cross-channel customer LTV",
      "Tech debt resolution velocity",
    ],
    capabilities: [
      { name: "Digital P&L ownership", description: "Has run a digital business with full P&L accountability." },
      { name: "Omnichannel architecture", description: "Designs offline-online integration that customers actually feel." },
      { name: "Consumer brand intuition", description: "Reads category dynamics in fashion/lifestyle commerce." },
      { name: "Tech-business translation", description: "Bridges engineering and commercial teams without friction." },
      { name: "Investor and board narrative", description: "Articulates digital strategy at board level credibly." },
      { name: "Team building in scarce talent market", description: "Attracts and retains digital talent at non-digital-native employers." },
    ],
    benchmarks:
      "Reliance Retail's CDOs have built integrated digital-physical infrastructure. Tata Digital represents the legacy-to-digital playbook. ABFRL has navigated a similar journey. Walmart's CDO playbook offers global perspective.",
    sourcing: {
      summary:
        "External hire is the typical path — operating fluency from Day 1 matters when one P&L is loss-making.",
      targetCompanies: ["Reliance Retail Digital", "Tata Digital", "ABFRL Digital", "Walmart Labs", "Meesho (SVP)", "Flipkart (SVP)"],
      compBand: "₹3–5 Cr+ CTC plus ESOP",
      leadTime: "6–9 months",
    },
    buildVsBuy: "External hire is the typical path. Internal candidates are rare at this seniority for digital P&L breadth.",
    developmentPathway: "Not applicable as proposed role.",
    first90Days:
      "Listen and audit LimeRoad operations and people; map omnichannel integration opportunities; align with COO on shared resources; establish a digital metrics dashboard for the board; deliver one quick win on LimeRoad cost or growth within the quarter.",
    skillDelta: [
      { dimension: "Digital P&L Leadership", current: 1.5, topDecile: 4.5 },
      { dimension: "Omnichannel Architecture", current: 1.8, topDecile: 4.3 },
      { dimension: "Tech-Business Translation", current: 2.2, topDecile: 4.5 },
      { dimension: "Board-Level Narrative", current: 2.5, topDecile: 4.5 },
      { dimension: "Talent Magnetism", current: 1.8, topDecile: 4.3 },
    ],
  },
  {
    id: "chro",
    number: 3,
    name: "Chief Human Resources Officer",
    status: "existing",
    segment: "Cross-cutting",
    cluster: "Strategic Leadership",
    reportsTo: "MD",
    seniority: "C-Suite",
    essence:
      "The strategic owner of VMart's people agenda during one of the most consequential institutional transitions in the company's history.",
    whyCritical:
      "With 12,000 employees, dual business architecture, restructuring underway, and the founder-to-institution transition, the CHRO seat is arguably the most strategically critical seat in the org for the next 18–24 months. Org design, restructuring execution, and talent density across both businesses converge here.",
    valueAtStakeNote:
      "Hard to quantify directly; the CHRO's effectiveness shapes nearly every other role's productivity through restructuring and capability decisions.",
    kpis: [
      "Org health (engagement, attrition)",
      "Leadership bench strength",
      "Restructuring execution quality",
      "Talent density in critical roles",
      "HR function maturity",
      "Cost-per-hire and time-to-fill at scale",
    ],
    capabilities: [
      { name: "Strategic HR / org design", description: "Has architected reorgs in growth-stage retail or consumer companies." },
      { name: "Founder-to-institution transition", description: "Experience navigating professionalization without losing founder DNA." },
      { name: "Dual-business HR architecture", description: "Comfort designing HR for very different talent populations under one roof." },
      { name: "Restructuring program leadership", description: "Has run transformation programs end-to-end." },
      { name: "Analytics-driven decision-making", description: "Uses people data to brief CEO and board." },
      { name: "Board-level credibility", description: "Operates as a peer to the MD and board." },
    ],
    benchmarks:
      "CHROs at Trent, Reliance Retail, ABFRL, and Tata Group have navigated similar institutionalization journeys. Cross-industry models from companies that have done founder transitions well — Bajaj, ITC, HUL — also offer playbooks.",
    sourcing: {
      summary:
        "The deeper question is the strength of the CHRO's leadership team, where mixed sourcing typically works.",
      targetCompanies: ["Trent", "Reliance Retail", "ABFRL", "Tata Group", "HUL", "ITC", "Asian Paints", "Bajaj"],
      compBand: "₹3–5 Cr+ CTC",
      leadTime: "Not applicable",
    },
    buildVsBuy: "Not applicable for the seat itself. Strengthening the team underneath (HRBP heads, OD leaders) is where the real conversation sits.",
    developmentPathway: "Not applicable.",
    first90Days:
      "For someone joining the CHRO Office: deep immersion in business priorities, build relationships across the leadership team, understand the restructuring context, identify the 3 most pressing people priorities for the next 6 months — and align the CHRO's calendar accordingly.",
    skillDelta: [
      { dimension: "Strategic HR / Org Design", current: 4.0, topDecile: 4.5 },
      { dimension: "Restructuring Leadership", current: 3.8, topDecile: 4.5 },
      { dimension: "Dual-Business HR Architecture", current: 3.2, topDecile: 4.3 },
      { dimension: "Analytics Maturity", current: 2.8, topDecile: 4.5 },
      { dimension: "Board Credibility", current: 4.0, topDecile: 4.5 },
    ],
  },
  {
    id: "cto",
    number: 4,
    name: "Chief Technology Officer",
    status: "proposed",
    segment: "Cross-cutting",
    cluster: "Strategic Leadership",
    reportsTo: "MD",
    seniority: "C-Suite",
    essence:
      "Elevation to C-suite reflects the role technology plays in modern retail's competitive battle. The current VP-IT seat is operationally strong; the strategic conversation is about elevation, not replacement.",
    whyCritical:
      "ERP transformation, e-commerce platform health, AI/ML adoption, omnichannel tech, data infrastructure — increasingly all roads run through technology in retail. C-suite presence ensures tech investment aligns with business strategy at the boardroom level, not just IT operations.",
    valueAtStakeNote:
      "Directional: top-quartile retail CTOs have historically delivered 3–5% revenue uplift via tech-enabled customer experience and 100+ bps margin via process automation.",
    kpis: [
      "Platform uptime and performance",
      "Tech debt reduction velocity",
      "Capability delivery cadence",
      "Tech function attrition",
      "Vendor cost optimization",
      "Security and compliance posture",
    ],
    capabilities: [
      { name: "Modern tech stack fluency", description: "Comfortable across cloud, microservices, DevOps, mobile, data platforms." },
      { name: "Retail tech specifically", description: "Has built or transformed retail-specific systems (ERP, POS, e-commerce, supply chain)." },
      { name: "Team building in talent-heavy markets", description: "Can attract senior engineers to non-digital-native employers." },
      { name: "Vendor partnership management", description: "Negotiates and runs strategic vendor relationships at enterprise scale." },
      { name: "C-suite operating", description: "Comfortable explaining technology to non-tech peers at board level." },
      { name: "Product-engineering bridge thinking", description: "Sees engineering as enabler of product, not separate function." },
    ],
    benchmarks:
      "CTOs at Trent, Reliance Retail, ABFRL, D-Mart represent the retail playbook. Digital-native CTOs at Meesho, Flipkart, Myntra represent the digital ambition layer. BFSI CTOs (HDFC, Kotak) who have moved to retail offer interesting cross-pollination.",
    sourcing: {
      summary:
        "External hire is typically the faster path; current internal IT leadership may be strong on operations but the strategic-CTO breadth is rare.",
      targetCompanies: ["Trent", "Reliance Retail", "ABFRL", "Flipkart", "Meesho", "Myntra", "HDFC Bank", "Kotak"],
      compBand: "₹3–5 Cr+ CTC plus ESOP",
      leadTime: "6–9 months",
    },
    buildVsBuy: "External hire is typically the faster path. Internal elevation viable with deliberate exposure plan over 18 months.",
    developmentPathway:
      "For internal elevation: structured exposure to retail digital strategy, board interaction, executive education (Stanford/INSEAD AMP), shadow assignments with peer CTOs, advisor mentor model.",
    first90Days:
      "Audit tech estate; partner with CFO on tech investment portfolio; align with CDO on omnichannel; quick wins on platform reliability; 18-month tech strategy presentation to board.",
    skillDelta: [
      { dimension: "Modern Tech Stack Fluency", current: 2.8, topDecile: 4.5 },
      { dimension: "Retail Tech Depth", current: 3.5, topDecile: 4.5 },
      { dimension: "Strategic Tech Leadership", current: 2.2, topDecile: 4.5 },
      { dimension: "Talent Magnetism", current: 2.5, topDecile: 4.3 },
      { dimension: "Board-Level Operating", current: 2.8, topDecile: 4.5 },
    ],
  },
  {
    id: "buying-merch-president",
    number: 5,
    name: "President — Buying & Merchandising",
    status: "existing",
    segment: "Retail Trade",
    cluster: "Merchandising & Private Label",
    reportsTo: "MD",
    seniority: "C-Suite-adjacent",
    essence:
      "Owns the fashion call. In value fashion, this single seat determines whether ₹3,500+ Cr of inventory becomes full-price sell-through or markdown loss. A foundational existing role; conversation is about evolving the function, not replacing it.",
    whyCritical:
      "In value fashion, the merchandising call differentiates competitive outcomes more than almost any other lever. This role distinguishes VMart from Zudio (whose merchandising depth is widely admired) and from Reliance Trends (which competes on assortment breadth).",
    valueAtStakeNote:
      "Directional: 100 bps of gross margin from better merchandising decisions translates to roughly ₹35–40 Cr at FY26 revenue base.",
    kpis: [
      "Gross margin %",
      "Sell-through at full price",
      "Markdown %",
      "Assortment freshness (% new SKUs each season)",
      "Private label mix",
      "Merchandiser productivity (revenue per merchandiser)",
    ],
    capabilities: [
      { name: "Fashion intuition meets data", description: "Reads trends with both hands — gut and dashboard." },
      { name: "Private label development depth", description: "Has built PL programs with measurable margin impact." },
      { name: "Sourcing and vendor partnership", description: "Long-standing relationships across India and nearshore manufacturing." },
      { name: "Merchandiser team building", description: "Develops the next generation of category leaders." },
      { name: "Trend-spotting across geographies", description: "Reads Tier IV India alongside global fashion currents." },
      { name: "Modernizing the function", description: "Comfort introducing analytics and AI into traditional merchandising." },
    ],
    benchmarks:
      "Trent's merchandising team is widely respected industry-wide. Reliance Trends competes on scale and breadth. ABFRL combines brand and value layers. Internationally, Zara/Inditex merchandising remains the gold standard for fast-fashion responsiveness.",
    sourcing: {
      summary:
        "Internal continuity is often the right call given institutional fashion sense. The team underneath (category heads) is where external hires often add the most value.",
      targetCompanies: ["Trent", "ABFRL", "Reliance Retail Fashion", "Westside", "Pantaloons", "Zara India", "H&M India"],
      compBand: "₹2–4 Cr",
      leadTime: "Not applicable",
    },
    buildVsBuy: "Internal preferred unless specific gaps. External hires more valuable at category-head level underneath.",
    developmentPathway:
      "For the existing strong incumbent, exposure to digital merchandising (Myntra study tour), private label depth-building (Zudio competitive intelligence), and successor planning for the team underneath. For category heads being groomed, structured P&L exposure, vendor management experience, sponsored AMP-level program.",
    first90Days: "Not applicable as filled.",
    skillDelta: [
      { dimension: "Fashion Intuition + Data", current: 4.0, topDecile: 4.5 },
      { dimension: "Private Label Depth", current: 3.5, topDecile: 4.7 },
      { dimension: "Sourcing Network", current: 4.2, topDecile: 4.5 },
      { dimension: "Modernization (Analytics/AI)", current: 2.5, topDecile: 4.5 },
      { dimension: "Team Building", current: 3.8, topDecile: 4.3 },
    ],
  },
  {
    id: "private-label",
    number: 6,
    name: "Head of Private Label Development & Design",
    status: "elevated",
    segment: "Retail Trade",
    cluster: "Merchandising & Private Label",
    reportsTo: "President, Buying & Merchandising",
    seniority: "Sr. Director / VP",
    essence:
      "Private label is the central margin lever in modern value fashion. This seat owns whether VMart's PL program can become a Zudio-class differentiator over the next 3–5 years.",
    whyCritical:
      "Private label growth typically improves gross margin meaningfully for each percentage point shift in mix (industry directional benchmark: 100–200 bps per 5pp shift). It also builds brand IP that is genuinely difficult for competitors to replicate. VMart already has PLs (Gold Line Fashion etc.) — the conversation is about depth, design quality, and design velocity.",
    valueAtStakeNote:
      "Directional: a 5pp shift in private label mix translates to approximately 100–200 bps of gross margin at industry benchmarks.",
    kpis: [
      "Private label revenue mix %",
      "PL gross margin vs branded mix",
      "PL sell-through rate",
      "PL customer rating",
      "Design-to-store cycle time",
      "PL inventory turn vs branded",
    ],
    capabilities: [
      { name: "Fashion design DNA at value price points", description: "Understands the constraint of designing within tight cost envelopes." },
      { name: "Sourcing and manufacturer network", description: "Has relationships across India + nearshore (Bangladesh, Vietnam)." },
      { name: "Trend analytics", description: "Combines instinct with data — runway, social, search, sales." },
      { name: "Product development cycle management", description: "Compresses concept-to-store from months to weeks." },
      { name: "Cost engineering", description: "Designs for margin, not just for aesthetics." },
      { name: "Brand positioning for private label", description: "Builds PL brands that customers see as desirable, not just cheap." },
    ],
    benchmarks:
      "Trent's Zudio is the obvious benchmark — in-house design strength is acknowledged as their key competitive advantage. Reliance Retail's PL scale is large but quality variance is wider. Westside's Tata-led approach is design-led.",
    sourcing: {
      summary:
        "Mix. Senior design leadership often externally hired; the broader design org can build organically with the right leadership.",
      targetCompanies: ["Trent (Zudio)", "Reliance Retail Fashion", "Westside", "ABFRL", "Pantaloons", "Zara", "H&M", "M&S"],
      compBand: "₹70L–1.5 Cr",
      leadTime: "4–6 months",
    },
    buildVsBuy: "Mix. Senior design leadership often externally hired; broader design org can build organically.",
    developmentPathway:
      "For an internal candidate: exposure to design-first organizations (HBS Inditex case + Zudio competitive intelligence), sponsored CFD/design management program, mentoring relationship with international fashion advisor.",
    first90Days:
      "Audit current PL portfolio; visit competitor stores and benchmark systematically; identify 3 categories where PL push has highest ROI in next 12 months; partner with merchandising on category-level strategy.",
    skillDelta: [
      { dimension: "Value-Point Design DNA", current: 2.8, topDecile: 4.5 },
      { dimension: "Sourcing Network Depth", current: 3.5, topDecile: 4.5 },
      { dimension: "Trend Analytics", current: 2.5, topDecile: 4.3 },
      { dimension: "Cycle-Time Compression", current: 2.2, topDecile: 4.5 },
      { dimension: "PL Brand Building", current: 2.5, topDecile: 4.7 },
    ],
  },
  {
    id: "demand-forecasting",
    number: 7,
    name: "Head of Demand Forecasting & Replenishment",
    status: "elevated",
    segment: "Retail Trade",
    cluster: "Merchandising & Private Label",
    reportsTo: "President, Buying & Merchandising",
    seniority: "Sr. Director / VP",
    essence:
      "VMart's planning function is operationally strong; layering modern ML-based forecasting on top is a build-on opportunity that aligns with management's own commentary on early AI adoption.",
    whyCritical:
      "Inventory is VMart's largest balance sheet line — ₹818 Cr in Q1 FY26 at ~93 days. Industry top-quartile in fashion retail tends to run 60–75 days. With 10,000+ SKUs, 60–120 day lead times, and seasonal cycles around Diwali, Eid, and end-of-season, demand forecasting is widely cited as the highest-leverage analytical function in fashion retail. Modern ML methods have shown 10–20% accuracy lift over traditional approaches in similar contexts.",
    valueAtStakeNote:
      "Indicative: closing inventory days toward top-quartile could unlock significant working capital. Markdown reduction and stockout recovery are additional levers. Numbers refine with VMart-specific baseline analysis.",
    kpis: [
      "Forecast accuracy (MAPE) at category, store, SKU level",
      "Inventory days",
      "Inventory provision %",
      "Stockout rate at SKU-store-day level",
      "Markdown % of revenue",
      "Sell-through at full price",
      "Forecast-to-buy decision cycle time",
    ],
    capabilities: [
      { name: "Statistical and ML forecasting depth", description: "Hands-on with time series, gradient boosting, neural networks. Has shipped models in production." },
      { name: "Retail and fashion domain expertise", description: "Understands seasonality, festive patterns, regional variation, fashion category dynamics specifically." },
      { name: "Inventory optimization and assortment planning", description: "Connects forecasting to OTB, SKU rationalization, store clustering, allocation." },
      { name: "Cross-functional partnership", description: "Works fluidly with merchandising, supply chain, finance, tech." },
      { name: "MLOps judgment", description: "Full lifecycle ownership from notebook to monitored production." },
      { name: "Data infrastructure judgment", description: "Can spec data models integrating POS, ERP, supply chain, and external data." },
    ],
    benchmarks:
      "Myntra, Flipkart Fashion, and Meesho have built deep ML-based forecasting capability over the last 4–5 years. Reliance Retail (AJIO/Trends) has matured via Jio AI infrastructure. Trent benefits from Tata group analytics. The collective takeaway: this capability has consolidated rapidly across the industry, and the playbook for building it is now well-documented.",
    sourcing: {
      summary:
        "Senior leader is typically a buy decision given the scarcity of this profile internally. The team underneath can be built via mix of campus hires and lateral mid-level hires.",
      targetCompanies: ["Myntra", "Flipkart Fashion", "Meesho", "Reliance Retail/AJIO", "Trent", "ABFRL", "Zara India", "Amazon India"],
      compBand: "₹70L–1.2 Cr senior; ₹40–70L director",
      leadTime: "4–5 months",
    },
    buildVsBuy: "Buy externally for the senior leader; build the team underneath via campus + lateral mix.",
    developmentPathway:
      "For a current planning manager being considered for elevation: advanced ML/forecasting program (ISB-CDS, IIM-B Analytics), cross-functional rotation through merchandising/SCM/finance, conference exposure (NRF Big Show, RILA), external mentor from Myntra/Flipkart planning leadership, and a sponsored 6-month project on Top-100 SKU forecasting with measurable inventory or markdown impact. The IDP doubles as retention.",
    first90Days:
      "The strongest hires tend to spend their first month auditing rather than building — accuracy by category, data infrastructure mapping, decision flow from forecast to buy to allocate to markdown. Days 31–60 build credibility through quick wins on a top-100 SKU pilot. Days 61–90 produce a 12–18 month roadmap with capex/opex ask — covering build vs SaaS decision (Blue Yonder, SAP IBP, custom on Databricks/Snowflake), team plan, and infrastructure investment.",
    skillDelta: [
      { dimension: "Statistical/ML Forecasting", current: 1.8, topDecile: 4.5 },
      { dimension: "Fashion Domain Depth", current: 3.5, topDecile: 4.0 },
      { dimension: "Inventory Optimization", current: 3.0, topDecile: 4.5 },
      { dimension: "MLOps / Production Models", current: 1.5, topDecile: 4.3 },
      { dimension: "Cross-Functional Influence", current: 3.2, topDecile: 4.3 },
    ],
  },
  {
    id: "real-estate",
    number: 8,
    name: "Head of Real Estate & New Store Development",
    status: "existing",
    segment: "Retail Trade",
    cluster: "Store Operations & Frontline",
    reportsTo: "COO",
    seniority: "Sr. Director / VP",
    essence:
      "With 60–90 stores added annually, real estate quality directly determines the quality of VMart's growth. Each wrong site is dead capital; each right site compounds.",
    whyCritical:
      "VMart competes for the same Tier II/III high streets as Zudio, Reliance Trends, and increasingly D-Mart Apparel. Site selection rigor — catchment analytics, footfall modeling, deal economics, landlord relationships — is now a competitive differentiator, not just a real-estate function.",
    valueAtStakeNote:
      "Directional: a wrong site can cost ₹2–3 Cr in dead capital plus opportunity cost in the first year alone. With 60–90 sites annually, even a 10% improvement in selection quality compounds materially.",
    kpis: [
      "New store breakeven time",
      "First-year store revenue vs plan",
      "Site rejection rate (a discipline indicator)",
      "Rent as % of revenue",
      "Landlord renewal rates",
      "Real estate transaction cost per store",
    ],
    capabilities: [
      { name: "Tier II/III India real estate network depth", description: "Knows the cities, the corridors, the local players." },
      { name: "Deal-making with diverse landlords", description: "Many landlords are family-owned; relationships matter as much as terms." },
      { name: "Catchment analytics", description: "Reads footfall data, demographic data, competitor proximity." },
      { name: "Legal and compliance fluency", description: "Comfort across 26 states' regulations." },
      { name: "Site economics modeling", description: "Builds 5-year P&L for every site before signing." },
      { name: "Relationship continuity over time", description: "Landlord renewals are where real value is captured or lost." },
    ],
    benchmarks:
      "Trent's real estate engine for Zudio's expansion is well-respected. D-Mart's site selection discipline is industry-legendary. Reliance Retail's scale-driven approach offers another model.",
    sourcing: {
      summary:
        "Often a mix — leader externally for breadth, regional teams from local market knowledge.",
      targetCompanies: ["Trent", "D-Mart", "Reliance Retail", "Big Bazaar legacy talent", "Spencer's Retail", "Domino's India", "Burger King India"],
      compBand: "₹50L–1 Cr",
      leadTime: "4–5 months",
    },
    buildVsBuy: "Mixed approach — leader externally for breadth, regional teams from local market knowledge.",
    developmentPathway:
      "For an internal RE leader: exposure to other retail RE leaders (informal network building), data analytics certification, catchment modeling tool fluency, structured benchmarking visits to competitor formats.",
    first90Days:
      "Audit current pipeline and decision quality of last 50 stores; benchmark against industry; introduce or refine catchment analytics; align with COO on FY27 expansion targets.",
    skillDelta: [
      { dimension: "Tier II/III Network Depth", current: 4.0, topDecile: 4.3 },
      { dimension: "Catchment Analytics", current: 2.5, topDecile: 4.5 },
      { dimension: "Deal Economics Rigor", current: 3.5, topDecile: 4.3 },
      { dimension: "Multi-State Compliance", current: 4.0, topDecile: 4.0 },
      { dimension: "Site Selection Discipline", current: 3.2, topDecile: 4.5 },
    ],
  },
  {
    id: "frontline-experience",
    number: 9,
    name: "Head of Frontline Experience & Store Manager Capability",
    status: "proposed",
    segment: "Retail Trade",
    cluster: "Store Operations & Frontline",
    reportsTo: "CHRO, dotted line to COO",
    seniority: "VP / Sr. Director",
    essence:
      "Many growing retailers reach a point where consolidating frontline accountability under a single owner becomes valuable. Worth a CHRO-level call on whether VMart is at that point.",
    whyCritical:
      "Frontline staff and store managers are arguably the most visible expression of VMart's brand to its customers. With the network at 577 stores and growing 60–90 stores annually, the strength of the SM cadre directly shapes customer experience, attrition cost, and store productivity. Top retailers in similar geographies — Trent, Reliance Retail, D-Mart — have each invested in a senior, dedicated owner for this; the architecture differs but the accountability is centralized.",
    valueAtStakeNote:
      "Directional, based on industry benchmarks: a 10pp reduction in frontline attrition typically unlocks ₹15–20 Cr in direct cost (rehiring + productivity loss) and contributes meaningfully to SSSG through staff stability.",
    kpis: [
      "Frontline attrition rate",
      "0–90 day attrition (where most exits happen)",
      "Store manager bench strength",
      "Internal promotion rate to SM positions",
      "Store-level NPS",
      "Time-to-productivity for new hires",
      "Engagement scores by region",
    ],
    capabilities: [
      { name: "Frontline workforce strategy at scale", description: "Designing systems for thousands across hundreds of locations." },
      { name: "Adult learning design for low-tech contexts", description: "Comfortable with voice, video, gamification, WhatsApp/IVR delivery." },
      { name: "Store manager capability architecture", description: "Has built SM competency frameworks with measurable productivity uplift." },
      { name: "High-volume dispersed hiring funnel design", description: "Knowledge of local hiring channels in Tier II/III India." },
      { name: "Engagement & culture in distributed workforce", description: "Has run blue-collar engagement programs at scale." },
      { name: "People analytics for frontline", description: "Comfortable with cohort analysis by store, region, tenure band." },
    ],
    benchmarks:
      "Trent (Zudio) typically runs frontline attrition lower than industry average, supported by structured SM career paths and competitive SM compensation. Reliance Retail runs dedicated frontline academies, strong on scale though sometimes impersonal. D-Mart's store manager development is widely respected for its rigor.",
    sourcing: {
      summary:
        "Among direct retail peers, plus cross-industry from QSR, auto dealer training, and bank BC channel managers — all run distributed, low-tech, blue-collar workforces.",
      targetCompanies: ["Trent", "Reliance Retail Fashion", "D-Mart", "Westside", "Spencer's", "Domino's India", "Jubilant FoodWorks", "Maruti", "Bajaj Auto"],
      compBand: "₹50–80L VP; ₹35–50L Sr. Director",
      leadTime: "3–4 months",
    },
    buildVsBuy:
      "External hire is often the faster path given the systems-design depth this role needs. Internal elevation is viable with a structured development runway.",
    developmentPathway:
      "A 9-month structured build for an internal candidate: external benchmarking immersion (3-day visits to one or two best-in-class peers), 6-month embedded rotation with field ops, sponsored advanced program in workforce analytics, mentorship from a retail-veteran CHRO outside VMart, and a 90-day diagnostic project with measurable attrition impact in one zone.",
    first90Days:
      "A new incumbent (whether external or internal) would likely benefit from spending the first month listening — 25+ store visits, 10+ SM 1:1s, reading 50+ exit interviews — before designing anything. The next 60 days build a diagnostic and pilot one program in one zone with measurable data. By Day 90, a 12-month roadmap to CHRO and COO with a funding ask.",
    skillDelta: [
      { dimension: "Frontline Strategy at Scale", current: 1.8, topDecile: 4.5 },
      { dimension: "Adult Learning for Low-Tech", current: 2.0, topDecile: 4.3 },
      { dimension: "SM Capability Architecture", current: 2.2, topDecile: 4.5 },
      { dimension: "People Analytics for Frontline", current: 1.5, topDecile: 4.5 },
      { dimension: "Distributed Workforce Engagement", current: 2.5, topDecile: 4.3 },
    ],
  },
  {
    id: "supply-chain",
    number: 10,
    name: "Head of Supply Chain & Distribution",
    status: "existing",
    segment: "Retail Trade (with LimeRoad fulfillment intersection)",
    cluster: "Supply Chain",
    reportsTo: "COO",
    seniority: "Sr. Director / VP",
    essence:
      "The operational backbone that gets product from origin to 577 stores reliably. As stores expand into deeper geographies and LimeRoad needs Tier III/IV fulfillment, this function becomes increasingly competitive moat.",
    whyCritical:
      "Service level (in-stock %), cost-per-case, and replenishment cycle directly impact both customer experience and working capital. Reaching Motihari and Sambalpur with the same reliability as a Tier I customer is genuinely hard. The same network increasingly needs to support LimeRoad's e-commerce fulfilment.",
    valueAtStakeNote:
      "Directional: 50–100 bps of revenue typically sits in transportation and DC operations costs at scale. Service level improvements drive measurable SSSG.",
    kpis: [
      "In-stock % at store level",
      "Cost per case shipped",
      "Replenishment cycle time",
      "DC throughput",
      "Transportation cost as % of revenue",
      "Demand-supply variance",
    ],
    capabilities: [
      { name: "SC network design", description: "Has designed multi-DC networks for retail at scale." },
      { name: "DC operations", description: "Runs warehouses with strong throughput and accuracy metrics." },
      { name: "Transportation/logistics optimization", description: "Negotiates and manages 3PL relationships effectively." },
      { name: "Supplier integration", description: "Has built EDI and modern supplier integration platforms." },
      { name: "Tech-enabled SC (WMS, TMS, RFID)", description: "Comfort with SC tech stack modernization." },
      { name: "Cross-channel fulfillment thinking", description: "Sees offline + online fulfilment as integrated, not separate." },
    ],
    benchmarks:
      "D-Mart's SC discipline is industry-respected. Reliance Retail's scale infrastructure offers depth. Flipkart and Amazon SC offer the digital DNA layer. ABFRL's apparel-specific SC playbook is also relevant.",
    sourcing: {
      summary:
        "Leader externally for senior breadth; build the layer below.",
      targetCompanies: ["D-Mart", "Reliance Retail", "Flipkart", "Amazon India", "Ecom Express", "Delhivery", "ABFRL", "Pantaloons"],
      compBand: "₹70L–1.5 Cr",
      leadTime: "4–5 months",
    },
    buildVsBuy: "Leader externally for senior breadth; build the layer below.",
    developmentPathway:
      "Industry exposure (D-Mart visit, ASCM CSCP certification), tech upgrade fluency, data analytics for SC, mentor from Amazon/Flipkart SC leadership.",
    first90Days:
      "Audit network design (DCs, hubs, last-mile); cost benchmarking; identify 2–3 quick wins; build a 3-year SC strategy aligned with store expansion and LimeRoad fulfilment.",
    skillDelta: [
      { dimension: "SC Network Design at Scale", current: 3.5, topDecile: 4.5 },
      { dimension: "Tech-Enabled SC (WMS, TMS)", current: 2.5, topDecile: 4.5 },
      { dimension: "Transportation Optimization", current: 3.5, topDecile: 4.3 },
      { dimension: "Cross-Channel Fulfilment", current: 2.0, topDecile: 4.3 },
      { dimension: "Supplier Integration", current: 3.0, topDecile: 4.3 },
    ],
  },
  {
    id: "limeroad-engineering",
    number: 11,
    name: "Head of Engineering — LimeRoad Platform",
    status: "existing",
    segment: "LimeRoad/Digital",
    cluster: "Digital, Tech & LimeRoad",
    reportsTo: "CDO (proposed) or current digital owner",
    seniority: "Sr. Director / VP",
    essence:
      "Owns whether the LimeRoad platform can scale, integrate with offline, and ship features at the velocity needed to stay relevant in digital fashion.",
    whyCritical:
      "Tech debt from the pre-acquisition era is a known issue. Platform health directly affects LimeRoad's ability to run customer experiments, integrate with VMart's offline ecosystem, and reduce operating cost. Engineering velocity becomes the constraint or enabler of the turnaround.",
    valueAtStakeNote:
      "Directional: tech debt resolution and platform reliability typically save 15–25% of infrastructure cost while unlocking 2–3x feature velocity.",
    kpis: [
      "Platform uptime/SLA",
      "Deployment frequency",
      "Tech debt reduction velocity",
      "Engineering team retention",
      "Cost of tech infrastructure",
      "Time-to-ship-feature",
    ],
    capabilities: [
      { name: "Modern engineering leadership", description: "Microservices, cloud-native, DevOps culture." },
      { name: "Product-engineering partnership", description: "Sees engineering in service of product outcomes." },
      { name: "Team building in talent-scarce environment", description: "Can attract senior engineers without digital-native employer brand." },
      { name: "Mobile-first thinking", description: "LimeRoad is largely mobile; deep mobile architecture experience." },
      { name: "Platform reliability discipline", description: "SRE thinking, observability, incident management." },
      { name: "Pragmatic tech-debt management", description: "Knows when to refactor vs ship; doesn't fall in love with rewrites." },
    ],
    benchmarks:
      "Engineering leaders at Meesho, Myntra, Flipkart, Nykaa Fashion represent the digital benchmark. Product-led companies like Cred, Razorpay, PhonePe offer cross-industry DNA.",
    sourcing: {
      summary:
        "External hire is typically faster — internal post-acquisition leadership has often been more about stabilization than next-stage scaling.",
      targetCompanies: ["Meesho", "Myntra", "Flipkart", "Nykaa Fashion", "Cred", "Razorpay", "PhonePe"],
      compBand: "₹1–2 Cr CTC + ESOP",
      leadTime: "5–7 months",
    },
    buildVsBuy: "External hire is typically faster.",
    developmentPathway:
      "If internal candidate exists, exposure to peer engineering leaders, cloud architect certification, advisor mentor model.",
    first90Days:
      "Tech debt audit; team capability assessment; align with Head of Product on roadmap; first quick win on platform reliability or infrastructure cost.",
    skillDelta: [
      { dimension: "Modern Engineering Leadership", current: 2.5, topDecile: 4.5 },
      { dimension: "Mobile-First Architecture", current: 3.0, topDecile: 4.5 },
      { dimension: "Platform Reliability", current: 2.8, topDecile: 4.3 },
      { dimension: "Talent Magnetism", current: 2.0, topDecile: 4.3 },
      { dimension: "Product Partnership", current: 2.5, topDecile: 4.3 },
    ],
  },
  {
    id: "limeroad-product",
    number: 12,
    name: "Head of Product Management — LimeRoad",
    status: "existing",
    segment: "LimeRoad/Digital",
    cluster: "Digital, Tech & LimeRoad",
    reportsTo: "CDO (proposed)",
    seniority: "Sr. Director / VP",
    essence:
      "Product management is what makes a digital marketplace win consumer love. LimeRoad's turnaround isn't only about cost — it's about whether the product is good enough to differentiate.",
    whyCritical:
      "In a category dominated by Meesho's mass-market product and Myntra's premium polish, LimeRoad needs sharp product leadership to find a differentiated lane. Industry observation suggests women's fashion in the ₹500–1,000 segment is the natural positioning — but executing that requires deep consumer product thinking.",
    valueAtStakeNote:
      "Directional: top-quartile product leaders in digital fashion typically lift conversion 30–50% and retention by similar margins through targeted experimentation.",
    kpis: [
      "App engagement (DAU/MAU)",
      "Conversion rate",
      "AOV (average order value)",
      "Repeat purchase rate",
      "Product feature delivery velocity",
      "NPS",
      "Cohort retention",
    ],
    capabilities: [
      { name: "Consumer product instinct in fashion", description: "Reads what women in the target segment actually want." },
      { name: "Data-driven product development", description: "Comfortable with A/B testing, cohort analysis, funnel optimization." },
      { name: "Product-engineering-design integration", description: "Coordinates the three legs of the product stool effectively." },
      { name: "Pricing/promotion strategy", description: "Understands how unit economics shift with promotional design." },
      { name: "Constraint-based environment comfort", description: "LimeRoad isn't well-funded vs competitors — leader must operate with discipline." },
      { name: "Consumer behavior research", description: "Spends time with users, doesn't only read dashboards." },
    ],
    benchmarks:
      "Product leaders at Myntra, Nykaa Fashion, Meesho. Internationally: Etsy, Depop, Shein product playbooks each offer different lessons.",
    sourcing: {
      summary:
        "Buy for senior leadership; build the team underneath.",
      targetCompanies: ["Myntra", "Nykaa Fashion", "Meesho", "Flipkart Fashion", "Etsy", "Cred"],
      compBand: "₹80L–1.5 Cr CTC",
      leadTime: "4–6 months",
    },
    buildVsBuy: "Buy for senior leadership; build the team underneath.",
    developmentPathway:
      "For an internal product person, mentoring with external advisor, sponsored Reforge / Product School programs, exposure to peer product leaders.",
    first90Days:
      "Customer research (interviews + cohort data analysis); audit current product roadmap; identify 1–2 sharp differentiation bets; build 12-month product strategy.",
    skillDelta: [
      { dimension: "Consumer Product Instinct", current: 2.5, topDecile: 4.5 },
      { dimension: "Data-Driven Development", current: 2.2, topDecile: 4.5 },
      { dimension: "Cross-Functional Integration", current: 3.0, topDecile: 4.3 },
      { dimension: "Pricing/Promotion Strategy", current: 2.5, topDecile: 4.3 },
      { dimension: "Differentiation Thinking", current: 2.0, topDecile: 4.5 },
    ],
  },
  {
    id: "growth-marketing",
    number: 13,
    name: "Head of Growth & Performance Marketing — Digital",
    status: "existing",
    segment: "LimeRoad/Digital",
    cluster: "Digital, Tech & LimeRoad",
    reportsTo: "CDO (proposed)",
    seniority: "Sr. Director / VP",
    essence:
      "Owns the unit economics of LimeRoad's customer acquisition and retention. In digital fashion, this seat is often the difference between profitable scale and burning cash.",
    whyCritical:
      "LimeRoad's CAC and LTV define whether the business model works post-turnaround. Best-in-class digital fashion companies have built sophisticated growth engines — performance marketing, lifecycle CRM, content/influencer integration — that VMart's traditional retail marketing playbook doesn't naturally produce.",
    valueAtStakeNote:
      "Directional: 20–30% improvement in marketing efficiency is typical when an experienced growth leader replaces traditional marketing approaches in digital commerce.",
    kpis: [
      "CAC",
      "LTV/CAC ratio",
      "CAC payback period",
      "Channel mix optimization",
      "Marketing spend efficiency",
      "Cohort retention curves",
    ],
    capabilities: [
      { name: "Performance marketing depth", description: "Google, Meta, programmatic — knows the levers and the failure modes." },
      { name: "SEO/organic", description: "Long-term durable acquisition matters as much as paid." },
      { name: "Content/influencer marketing", description: "Increasingly crucial in fashion specifically." },
      { name: "CRM and lifecycle marketing", description: "Retention drives unit economics more than acquisition." },
      { name: "Analytics-driven experimentation culture", description: "Tests hypotheses; doesn't ship campaigns on intuition." },
      { name: "Constraint-tight unit economics comfort", description: "Has scaled growth without the luxury of unlimited budgets." },
    ],
    benchmarks:
      "Growth leaders at Meesho, Cred, PhonePe, Myntra, Nykaa Fashion. D2C brand growth heads at Mamaearth, BoAt, Sugar Cosmetics offer cross-industry DNA.",
    sourcing: {
      summary:
        "Buy for the leader; build team underneath.",
      targetCompanies: ["Meesho", "Cred", "Myntra", "Nykaa Fashion", "Flipkart", "Mamaearth", "BoAt", "Sugar Cosmetics"],
      compBand: "₹70L–1.5 Cr",
      leadTime: "3–5 months",
    },
    buildVsBuy: "Buy for the leader; build team underneath.",
    developmentPathway: "Not primary path here — typically external.",
    first90Days:
      "Audit marketing spend efficiency by channel; rebuild channel mix based on LTV not just CAC; identify quick wins on CAC reduction; align with Head of Product on retention features.",
    skillDelta: [
      { dimension: "Performance Marketing", current: 2.2, topDecile: 4.5 },
      { dimension: "Lifecycle / CRM", current: 2.5, topDecile: 4.3 },
      { dimension: "Content / Influencer", current: 2.0, topDecile: 4.3 },
      { dimension: "Unit Economics Discipline", current: 2.5, topDecile: 4.5 },
      { dimension: "Experimentation Culture", current: 2.2, topDecile: 4.5 },
    ],
  },
  {
    id: "data-science-ml",
    number: 14,
    name: "Head of Data Science & ML",
    status: "proposed",
    segment: "Cross-cutting (bridges Retail Trade and LimeRoad)",
    cluster: "Digital, Tech & LimeRoad",
    reportsTo: "CTO if elevated; otherwise MD direct",
    seniority: "VP / SVP",
    essence:
      "Across Indian retail, dedicated DS/ML leadership has scaled rapidly in the last 3–4 years — primarily at digital-natives. VMart has the opportunity to build this thoughtfully, with the benefit of observing what worked elsewhere.",
    whyCritical:
      "VMart sits on a meaningful data asset: ~210 million transactions per year across 577 stores plus LimeRoad's behavioral data plus customer, supply chain, and people data. This data could inform many strategic questions — pricing, store-level assortment, customer segmentation, attrition prediction, marketing attribution — where ML-based answers are now standard at industry top quartile. The 2026 layer on top is GenAI: intelligent merchandiser copilots, store-manager assistants, automated content generation for LimeRoad listings.",
    valueAtStakeNote:
      "Directional: a well-executed DS/ML function tends to compound — Year 1 typically yields concrete impact in one or two flagship use cases (commonly demand forecasting and personalized assortment); Year 2–3 sees the function become a cross-business multiplier. The exact ₹ figures vary widely by execution quality.",
    kpis: [
      "Production ML models deployed with measurable business outcomes",
      "₹ business impact attributed to DS/ML initiatives",
      "Decision velocity for analytical questions",
      "Self-service analytics adoption by business teams",
      "Team capability and retention",
      "Cross-business intelligence flow between LimeRoad and Retail Trade",
    ],
    capabilities: [
      { name: "Technical depth in ML/AI", description: "Has personally built and deployed production models, not just managed teams." },
      { name: "Business translation", description: "Strong commercial instinct on which ML problems are worth solving." },
      { name: "Team building under brand-deficit conditions", description: "Can attract DS talent at a company that isn't yet a tier-1 employer brand for data scientists." },
      { name: "MLOps and production engineering", description: "Comfortable with the full lifecycle from data to deployed model." },
      { name: "Cross-functional influence", description: "Sells ML to merchandisers and ops leaders without leaning on jargon." },
      { name: "Modern AI / GenAI fluency", description: "Fluent in LLM applications, RAG systems, agentic workflows." },
    ],
    benchmarks:
      "Meesho's DS organization has scaled to roughly 150 people over ~4 years with ML embedded in ranking, recommendations, fraud, pricing, search, and supply planning. Myntra and Flipkart Fashion have similar maturity. Trent benefits from Tata group infrastructure but is more operationally driven than ML-driven (a window of opportunity for VMart). Reliance Retail has invested heavily in Jio AI; deployment maturity in retail use cases is still building.",
    sourcing: {
      summary:
        "Tier 1 (digital-native): Meesho, Flipkart, Myntra, Amazon India, Walmart Labs Bengaluru. Tier 2 (cross-industry strong DS DNA): Cred, Razorpay, PhonePe, Swiggy, Zomato. Tier 3 (legacy-org-doing-the-journey): Tata Digital, Tata 1mg, ABFRL, ICICI/HDFC analytics heads.",
      targetCompanies: ["Meesho", "Flipkart", "Myntra", "Amazon India", "Walmart Labs", "Cred", "Razorpay", "PhonePe", "Swiggy", "Tata Digital"],
      compBand: "₹1.5–3 Cr CTC + meaningful ESOP",
      leadTime: "6–9 months",
    },
    buildVsBuy:
      "Senior leader: buy externally — non-negotiable. This level of capability does not exist at VMart and cannot be developed organically in under 5 years. Team layer: mix. Senior ICs (10–15 in a Year 1–2 buildout) — buy from target companies. Junior team — campus + lateral mid-level.",
    developmentPathway:
      "For internal talent currently leading analytics: ISB CDS or IIM-B AI/ML executive program; 12-month rotation through ops, merchandising, supply chain; external mentor from a digital-native DS leader; conference exposure (re:Invent, NeurIPS); 1–2 large impact projects with measurable outcomes. For some strong internal candidates, a senior IC track may be more rewarding and impactful than the people-leadership path.",
    first90Days:
      "Listen and audit: meet every CXO and key function head, understand business pain points first, technology second, map data assets across Retail Trade and LimeRoad, identify the 3 ML use cases with highest ROI for Year 1. Days 31–60: build the case, secure 2–3 senior hires in critical pillars. Days 61–90: ship one production model with measurable business outcome — visible impact unlocks budget and credibility.",
    skillDelta: [
      { dimension: "Technical ML/AI Depth", current: 1.5, topDecile: 4.7 },
      { dimension: "Business Translation", current: 2.0, topDecile: 4.5 },
      { dimension: "MLOps / Production", current: 1.2, topDecile: 4.5 },
      { dimension: "Talent Magnetism", current: 1.5, topDecile: 4.3 },
      { dimension: "GenAI Fluency", current: 1.8, topDecile: 4.5 },
    ],
  },
  {
    id: "strategy-transformation",
    number: 15,
    name: "Head of Strategy & Transformation",
    status: "elevated",
    segment: "Cross-cutting",
    cluster: "Strategy & Transformation",
    reportsTo: "MD",
    seniority: "Sr. Director / VP",
    essence:
      "With restructuring underway, capability building, and dual-business complexity, this seat is the MD's strategic muscle — frames decisions, runs special projects, manages M&A pipeline.",
    whyCritical:
      "Restructuring program governance; new strategic initiatives; competitive intelligence; capital allocation analytics — all benefit from a dedicated strategy function as VMart professionalizes. Currently this work is likely distributed across CFO office and MD office; consolidation accelerates execution.",
    valueAtStakeNote:
      "Directional: strategic decisions touched by this role typically involve hundreds of crores in capital allocation; rigor here pays back many multiples of the role's cost.",
    kpis: [
      "Strategic project execution",
      "M&A pipeline quality",
      "Competitive intelligence cadence",
      "Board and investor narrative quality",
      "Transformation milestones on track",
      "Analyst-grade financial modeling for strategic decisions",
    ],
    capabilities: [
      { name: "Strategy consulting DNA", description: "McKinsey/BCG/Bain-trained or equivalent rigor." },
      { name: "Program management at scale", description: "Has run multi-workstream transformation programs." },
      { name: "Financial analytics", description: "Comfortable with valuation, scenario modeling, capital allocation frameworks." },
      { name: "Founder/MD comfort", description: "Operates effectively in a founder-led culture." },
      { name: "Cross-functional influence", description: "Drives outcomes through influence, not authority." },
      { name: "Board-level communication", description: "Written and verbal at investor and board level." },
    ],
    benchmarks:
      "Heads of Strategy at Trent, ABFRL, Tata Group, Reliance Retail. Cross-industry: senior strategy talent from McKinsey, BCG, Bain moving into industry.",
    sourcing: {
      summary:
        "Often buy from consulting; possible internal succession from finance/strategy lateral moves.",
      targetCompanies: ["McKinsey", "BCG", "Bain", "Reliance Retail Strategy", "ABFRL Strategy", "Tata Strategic Management Group"],
      compBand: "₹1–2 Cr+",
      leadTime: "4–6 months",
    },
    buildVsBuy: "Often buy from consulting; possible internal succession from finance/strategy lateral moves.",
    developmentPathway:
      "For an internal candidate: sponsored Wharton/Kellogg AMP, structured rotation through finance and ops, exposure to board-level work, mentor from external strategy leader.",
    first90Days:
      "Map current strategic agenda; identify the 3 most pressing strategy questions facing the MD; build governance for the active restructuring program; establish a competitive intelligence cadence (monthly briefs on Zudio, Reliance Trends, Meesho, Myntra); align with CFO on capital allocation framework.",
    skillDelta: [
      { dimension: "Strategy Consulting Rigor", current: 2.5, topDecile: 4.5 },
      { dimension: "Transformation Program Mgmt", current: 2.8, topDecile: 4.5 },
      { dimension: "Financial Analytics", current: 3.5, topDecile: 4.5 },
      { dimension: "Board-Level Communication", current: 3.0, topDecile: 4.5 },
      { dimension: "Cross-Functional Influence", current: 3.2, topDecile: 4.3 },
    ],
  },
  {
    id: "chief-of-staff-chro",
    number: 16,
    name: "Chief of Staff to the CHRO",
    status: "proposed",
    segment: "CHRO Office / Cross-cutting",
    cluster: "CHRO Office",
    reportsTo: "CHRO",
    seniority: "Sr. Director equivalent (program leader, not a people manager)",
    essence:
      "Acts as the transformation agent across the HR function — driving horizontal alignment, accelerating strategic priorities, and giving the CHRO a force multiplier during VMart's most consequential institutional transition.",
    whyCritical:
      "The CHRO office is currently running multiple parallel agendas — the active restructuring, talent strategy across two distinct businesses, comp and benefits decisions, capability building, leadership development, people analytics buildout — and each tends to have its own functional owner. What is often missing at this stage of CHRO office evolution is a connective layer: a strategic partner sitting across all workstreams, surfacing what the CHRO needs to decide and when, and accelerating execution. The role is pivotal at VMart in three specific ways: restructuring execution (orchestration of workstreams), strategic synthesis (turning ambiguity into structured choices), and horizontal coordination (translating strategy into aligned execution across functions).",
    valueAtStakeNote:
      "Directional: program rigor under transformation typically determines whether the CHRO's strategic intent translates into measurable competitive wins. The seat is a force multiplier, not an additional layer.",
    kpis: [
      "Restructuring program milestones on track",
      "CHRO decision velocity (time from issue surfacing to decision made)",
      "Strategic priorities execution rate",
      "Quality of analytics support to CHRO",
      "Cross-function alignment indicators",
      "Effectiveness of CHRO leadership team operating cadence",
    ],
    capabilities: [
      { name: "Program management at scale", description: "Particularly transformation programs with high political sensitivity." },
      { name: "Strategic synthesis", description: "Converting messy reality into structured choices for the CHRO." },
      { name: "Horizontal influence without authority", description: "Works through others, not over them." },
      { name: "Communication craft", description: "Written and verbal, at CXO and board level." },
      { name: "Analytical rigor combined with people instinct", description: "Comfortable with both data and emotion." },
      { name: "Confidentiality and political sensitivity", description: "Handles sensitive information with discretion." },
      { name: "Thoughtful disagreement", description: "Pushes back on the principal constructively." },
    ],
    benchmarks:
      "The Chief of Staff to CHRO model is well-established at Microsoft, Google, Tata Group, ITC, and HUL. Within retail specifically, Reliance Retail and Tata Trent have used similar setups during transformation phases. The cross-industry playbook for this role has matured considerably in the last five years.",
    sourcing: {
      summary:
        "Existing Chiefs of Staff to senior leaders at large enterprises. Strategy consulting backgrounds with HR or people-strategy specialization. Senior HRBPs who have demonstrated breadth beyond function. Program managers from major transformation programs at peer companies.",
      targetCompanies: ["Microsoft", "Google", "Tata Group", "ITC", "HUL", "Reliance Retail", "Tata Trent", "McKinsey People & Org practice", "BCG People practice"],
      compBand: "₹50L–1 Cr",
      leadTime: "2–4 months (broader talent pool)",
    },
    buildVsBuy:
      "Either is viable. Internal candidates from HRBP, OD, or strategy backgrounds with the right capability mix can grow into this role. External hires from consulting or sitting Chief-of-Staff positions bring fresh frameworks and cross-company benchmarks. The qualifier is less about background and more about whether the candidate has the operating instinct for what makes a CHRO's office work.",
    developmentPathway:
      "Exposure to peer Chief of Staff networks (informal but high-value); executive education in change management (HBS PMD, Wharton CHRO Program); structured exposure to each HR sub-function if not already breadth-experienced; advisor mentor relationship with a sitting CoS at a peer company.",
    first90Days:
      "Listen across the CHRO's leadership team to understand current rhythm, pain points, and unmet needs. Map the strategic priorities portfolio across the function. Build the operating cadence — decision-making meetings, monthly reviews, board-prep flow. Deliver one quick win that demonstrates the role's value early — often a strategic dashboard, clearer governance for the active restructuring, or analytical depth on a specific question the CHRO has been carrying without dedicated support.",
    skillDelta: [
      { dimension: "Transformation Program Mgmt", current: 1.8, topDecile: 4.5 },
      { dimension: "Strategic Synthesis", current: 2.5, topDecile: 4.5 },
      { dimension: "Horizontal Influence", current: 2.5, topDecile: 4.3 },
      { dimension: "Analytical + People Instinct", current: 2.0, topDecile: 4.5 },
      { dimension: "Communication Craft", current: 3.0, topDecile: 4.5 },
    ],
  },
];

export const clusters: Cluster[] = [
  "Strategic Leadership",
  "Merchandising & Private Label",
  "Store Operations & Frontline",
  "Supply Chain",
  "Digital, Tech & LimeRoad",
  "Strategy & Transformation",
  "CHRO Office",
];

export const clusterColors: Record<Cluster, string> = {
  "Strategic Leadership": "accent-forest",
  "Merchandising & Private Label": "accent-rust",
  "Store Operations & Frontline": "accent-gold",
  "Supply Chain": "ink-soft",
  "Digital, Tech & LimeRoad": "accent-forest",
  "Strategy & Transformation": "ink-soft",
  "CHRO Office": "accent-rust",
};

export const getRoleById = (id: string): Role | undefined =>
  roles.find((r) => r.id === id);

export const rolesByCluster = (): Record<Cluster, Role[]> => {
  const grouped = {} as Record<Cluster, Role[]>;
  clusters.forEach((c) => (grouped[c] = []));
  roles.forEach((r) => grouped[r.cluster].push(r));
  return grouped;
};
