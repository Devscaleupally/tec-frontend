/** Served from `public/pdf/` — used by Download on the Adaptive Cities report detail panels. */
export const ADAPTIVE_DETAILED_REPORT_PDF =
  "/pdf/Final-Detailed-Report_Adaptive.pdf";

export type ReportsListItem = {
  id: string;
  title: string;
  categories: string[];
  description: string;
  formats: string[];
  date: string;
  imageSrc: string;
};

export type ReportMediaKind =
  | "summary"
  | "full"
  | "podcast"
  | "infographic"
  | "video"
  | "glossary";

export type ReportMediaAsset = {
  kind: ReportMediaKind;
  title: string;
  duration: string;
  cta: string;
  ctaVariant: "read" | "view" | "play";
};

/** One bullet: bold lead sentence + supporting paragraph (summary view). */
export type ReportSummaryBullet = {
  lead: string;
  body: string;
};

export type ReportSummaryCard = {
  heading: string;
  bullets: ReportSummaryBullet[];
};

/** Structured summary panel (replaces plain summary text when present). */
export type ReportSummaryDetail = {
  /** Optional link for the Download control */
  downloadHref?: string;
  cards: ReportSummaryCard[];
};

/** One definition block in the Full Report “Key definitions” row. */
export type ReportFullDefinitionCard = {
  title: string;
  body: string;
  accent: "blue" | "red";
};

/** Structured full-report panel (cover + key definitions) when present. */
/** One timestamp line in the podcast “Key moments” panel. */
export type ReportPodcastTimestamp = {
  time: string;
  label: string;
};

export type ReportPodcastEpisode = {
  title: string;
  /** Display only, e.g. "12m 43sec" */
  durationLabel: string;
  /** Used for the player timeline when no audio file is provided. */
  durationSeconds: number;
  summary: string;
  keyMoments: ReportPodcastTimestamp[];
  /** Optional audio URL (e.g. MP3, M4A); if omitted, the scrubber simulates playback for demo. */
  audioSrc?: string;
};

export type ReportPodcastDetail = {
  downloadHref?: string;
  /** Defaults to "AI-Generated Podcast" */
  sectionTitle?: string;
  episodes: ReportPodcastEpisode[];
};

export type ReportInfographicSlide = {
  src: string;
  alt: string;
};

export type ReportInfographicDetail = {
  downloadHref?: string;
  /** Defaults to "Infographics" */
  sectionTitle?: string;
  slides: ReportInfographicSlide[];
};

export type ReportVideoDetail = {
  downloadHref?: string;
  /** Defaults to "Video Explainer" */
  sectionTitle?: string;
  videoSrc: string;
  videoTitle: string;
  /** Optional poster image for the player before play starts. */
  posterSrc?: string;
  whatYouWillLearn?: {
    title?: string;
    points: string[];
  };
};

export type ReportGlossaryTerm = {
  term: string;
  definition: string;
};

export type ReportGlossarySection = {
  heading: string;
  terms: ReportGlossaryTerm[];
};

export type ReportGlossaryDetail = {
  downloadHref?: string;
  /** Defaults to "Technical Glossary" */
  sectionTitle?: string;
  sections: ReportGlossarySection[];
};

export type ReportFullDetail = {
  downloadHref?: string;
  /** Defaults to “Detailed Report” */
  sectionTitle?: string;
  hero: {
    /** Optional; omit to avoid repeating the report title on the cover. */
    titleLine1?: string;
    titleLine2: string;
    dateLabel: string;
    preparedBy: string;
    coverImageSrc: string;
    coverImageAlt: string;
    /** e.g. Government of Dubai / TEC marks */
    logoSrcs?: string[];
  };
  keyDefinitions: {
    heading: string;
    logoSrcs?: string[];
    cards: ReportFullDefinitionCard[];
  };
};

export type ReportDetailFields = {
  whyItMatters: string;
  keyQuestionsIntro: string;
  keyQuestions: string[];
  mediaAssets: ReportMediaAsset[];
  /** Optional HTML-safe plain text shown in the panel below the cards when a format is selected. */
  mediaContentByKind?: Partial<Record<ReportMediaKind, string>>;
  /** When set for a report, the Summary format shows this layout instead of plain summary text. */
  summaryDetail?: ReportSummaryDetail;
  /** When set, the Full Report format shows this layout instead of plain media text. */
  fullDetail?: ReportFullDetail;
  /** When set, the Podcast format shows this layout instead of plain media text. */
  podcastDetail?: ReportPodcastDetail;
  /** When set, the Infographic format shows this carousel instead of plain media text. */
  infographicDetail?: ReportInfographicDetail;
  /** When set, the Video format shows a dedicated explainer player. */
  videoDetail?: ReportVideoDetail;
  /** When set, the Glossary format shows grouped terms and definitions. */
  glossaryDetail?: ReportGlossaryDetail;
};

export type ReportWithDetail = ReportsListItem & ReportDetailFields;

export const allReports: ReportsListItem[] = [
  {
    id: "r1",
    title: "From Smart to Adaptive Cities",
    categories: ["Economic", "Social", "Sustainability"],
    description:
      "How leading cities are moving beyond \"smart\" to build adaptive, resilient systems and what that could mean for Dubai's next urban agenda.",
    formats: ["Summary", "Full Report", "Podcast", "+All Formats"],
    date: "January 2026",
    imageSrc:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=80",
  },
  {
    id: "r2",
    title: "Healthcare Financing Systems & Payment Mechanisms",
    categories: ["Social", "Sustainability"],
    description:
      "How advanced health systems fund care, control costs, and measure value and what that implies for Dubai's long-term sustainability and competitiveness.",
    formats: ["Summary", "Full Report", "Podcast", "+All Formats"],
    date: "February 2026",
    imageSrc:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&q=80",
  },
  {
    id: "r3",
    title:
      "Leveraging AI for Data-Driven Efficiency and Insight Generation in Government Assessments",
    categories: ["Government Excellence", "Government Service Improvement"],
    description:
      "How AI can be leveraged effectively by government excellence functions to accelerate analysis, enhance insights, and support decision-making, with the guardrails required for responsible assessment.",
    formats: ["Summary", "Full Report", "Podcast", "+All Formats"],
    date: "March 2026",
    imageSrc:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80",
  },
  {
    id: "r4",
    title: "Virtual Asset Risks and Societal Crime",
    categories: ["Social", "Economic", "Societal Crime"],
    description:
      "An exploratory scan of emerging virtual asset risks and how leading jurisdictions build legal maturity and institutional readiness to respond.",
    formats: ["Summary", "Full Report", "Podcast", "+All Formats"],
    date: "April 2026",
    imageSrc:
      "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=1200&q=80",
  },
];

const standardMediaAssets: ReportMediaAsset[] = [
  {
    kind: "summary",
    title: "Summary",
    duration: "5 min read",
    cta: "Read",
    ctaVariant: "read",
  },
  {
    kind: "full",
    title: "Full Report",
    duration: "40-60 min",
    cta: "View",
    ctaVariant: "view",
  },
  {
    kind: "podcast",
    title: "Podcast",
    duration: "10-12 min",
    cta: "Play",
    ctaVariant: "play",
  },
  {
    kind: "infographic",
    title: "Infographic",
    duration: "7 min read",
    cta: "View",
    ctaVariant: "view",
  },
  {
    kind: "video",
    title: "Video",
    duration: "7 min",
    cta: "Play",
    ctaVariant: "play",
  },
  {
    kind: "glossary",
    title: "Glossary",
    duration: "20 min read",
    cta: "Read",
    ctaVariant: "read",
  },
];

const reportDetailById: Record<string, Partial<ReportDetailFields>> = {
  r1: {
    summaryDetail: {
      downloadHref: ADAPTIVE_DETAILED_REPORT_PDF,
      cards: [
        {
          heading: "Key Takeaways",
          bullets: [
            {
              lead:
                "Urban adaptivity is a structural capability, not a technology outcome.",
              body:
                "Across benchmark cities, adaptivity emerges from how governance, capital allocation, and data flows are organized—not from digital maturity alone.",
            },
            {
              lead:
                "Cities pursue distinct adaptive models shaped by political economy.",
              body:
                "Singapore's centrally integrated model, Abu Dhabi's capital-led system-building approach, and Dubai's market-driven, federated model each enable different forms of adaptivity.",
            },
            {
              lead:
                "Centralization improves coherence; decentralization improves speed.",
              body:
                "Integrated systems excel at long-horizon risk management and cross-sector coordination, whereas decentralized systems respond more quickly but face coordination frictions.",
            },
            {
              lead:
                "Operational adaptivity and strategic adaptivity are not the same.",
              body:
                "Many cities perform well in day-to-day responsiveness but struggle to adapt institutions, regulations, and investment logic at the system scale.",
            },
            {
              lead: "Dubai's challenge is coordination, not capability.",
              body:
                "The city's agility, capital availability, and execution strength are well established; adaptive limits arise primarily from cross-domain alignment rather than capacity gaps.",
            },
          ],
        },
        {
          heading: "Directional Insights",
          bullets: [
            {
              lead: "Singapore prioritizes system coherence over speed.",
              body:
                "Strong center-of-government control enables anticipatory planning, integrated land use, and risk management, but with a lower tolerance for experimentation.",
            },
            {
              lead: "Abu Dhabi uses capital as the primary adaptive lever.",
              body:
                "Strategic investment and state-led system building accelerate transformation, particularly in infrastructure and emerging sectors.",
            },
            {
              lead: "Dubai optimizes through markets and autonomy.",
              body:
                "Competition, decentralized authority, and private-sector participation drive rapid adaptation, but make cross-system orchestration more complex.",
            },
            {
              lead: "No single model dominates across all risk types.",
              body:
                "Climate resilience, economic shocks, demographic change, and technological disruption each favor different adaptive configurations.",
            },
            {
              lead: "Transferability lies in mechanisms, not governance form.",
              body:
                "Tools such as foresight integration, scenario-based investment planning, data interoperability, and adaptive regulation travel better than institutional blueprints.",
            },
          ],
        },
        {
          heading: "Implications for Policy Framing",
          bullets: [
            {
              lead: "Which dimensions of adaptivity matter most for Dubai now?",
              body:
                "Shock absorption, long-term resilience, social cohesion, economic diversification, or regulatory agility.",
            },
            {
              lead:
                "Where does coordination failure create the greatest adaptive risk?",
              body:
                "Land use, infrastructure, climate response, digital regulation, or social services.",
            },
            {
              lead:
                "Which elements of centralized models are selectively adoptable?",
              body:
                "Strategic foresight, cross-sector prioritization, or integrated performance tracking—without undermining autonomy.",
            },
            {
              lead:
                "How can adaptive capacity scale without slowing execution?",
              body:
                "What governance or data mechanisms improve alignment while preserving speed.",
            },
            {
              lead:
                "What risks require system-level adaptation rather than sectoral response?",
              body:
                "Climate exposure, ageing, labour market shifts, or AI-driven disruption.",
            },
          ],
        },
      ],
    },
    whyItMatters:
      "Adaptive cities treat uncertainty as a design input: infrastructure, services, and governance evolve as conditions change. For Dubai, this lens helps connect long-term competitiveness with resilience—linking economic opportunity, social outcomes, and environmental stewardship in a single, testable narrative.",
    keyQuestionsIntro:
      "This report is structured around practical questions leaders can use to stress-test priorities, investments, and delivery models:",
    keyQuestions: [
      "How are peer cities defining “adaptive” capacity beyond digital connectivity?",
      "Which institutional capabilities (data, procurement, talent, regulation) most constrain adaptation at scale?",
      "Where can Dubai sequence pilots that produce measurable learning without locking in the wrong path?",
      "What indicators best signal progress from smart services to adaptive systems?",
    ],
    fullDetail: {
      downloadHref: ADAPTIVE_DETAILED_REPORT_PDF,
      sectionTitle: "Detailed Report",
      hero: {
        titleLine2:
          "Exploratory Benchmarking and Directional Insights for Dubai",
        dateLabel: "January, 2026",
        preparedBy: "Prepared by Empact Consulting",
        coverImageSrc:
          "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1400&q=80",
        coverImageAlt: "Dubai skyline at dusk",
        logoSrcs: ["/logo-god2.png", "/Frame45.png"],
      },
      keyDefinitions: {
        heading: "Key Definitions",
        logoSrcs: ["/logo-god2.png", "/Frame45.png"],
        cards: [
          {
            title: "Adaptive City",
            accent: "blue",
            body:
              "A city with the capacity to continuously sense change, coordinate responses across systems and adjust policies, infrastructure and services over time in response to evolving risks, constraints and opportunities.",
          },
          {
            title: "Structural Model",
            accent: "red",
            body:
              "The underlying configuration of governance arrangements, institutional roles, economic strategy, operating systems and incentives that shapes how a city plans, invests and responds to change.",
          },
        ],
      },
    },
    podcastDetail: {
      downloadHref: ADAPTIVE_DETAILED_REPORT_PDF,
      sectionTitle: "AI-Generated Podcast",
      episodes: [
        {
          title: "Can Dubai's Speedboats Survive Cascading Risks",
          durationLabel: "12m 43sec",
          durationSeconds: 12 * 60 + 43,
          audioSrc:
            "/audio/Part1-Can_Dubai_Speedboats_Survive_Cascading_Risks.m4a",
          summary:
            "Dubai's model thrives on speed and flexibility but faces risks due to fragmented coordination and external dependencies. Managing cascading risks requires better cross-domain integration and anticipatory strategies.",
          keyMoments: [
            {
              time: "02:15",
              label: "Speed-driven model, limited coordination",
            },
            {
              time: "12:37",
              label: "Vulnerability to interconnected global risks",
            },
            {
              time: "14:30",
              label: "Decentralized autonomy, needs better integration",
            },
          ],
        },
        {
          title: "Benchmarking the Operational Reality of Adaptive Cities",
          durationLabel: "14m 16sec",
          durationSeconds: 14 * 60 + 16,
          audioSrc:
            "/audio/Part2-Benchmarking_the_Operational_Reality_of_Adaptive_Cities.m4a",
          summary:
            "Benchmark cities combine foresight, capital discipline, and delivery models that differ sharply from one another. This episode contrasts how centralized integration, state-led investment, and market-led autonomy shape what “adaptive” means in practice.",
          keyMoments: [
            {
              time: "03:40",
              label: "Defining adaptivity beyond digital services",
            },
            {
              time: "08:22",
              label: "Singapore, Abu Dhabi, Dubai: three structural paths",
            },
            {
              time: "11:05",
              label: "Trade-offs between speed and cross-system coherence",
            },
          ],
        },
        {
          title: "Upgrading Dubai From Resilience To Anticipation",
          durationLabel: "15m 42sec",
          durationSeconds: 15 * 60 + 42,
          audioSrc:
            "/audio/Part3-Upgrading_Dubai_From_Resilience_To_Anticipation.m4a",
          summary:
            "Resilience absorbs shocks; anticipation reshapes portfolios before stress arrives. For Dubai, the shift hinges on shared signals, interoperable data, and governance mechanisms that align incentives without slowing execution.",
          keyMoments: [
            {
              time: "01:50",
              label: "Why resilience tools plateau without foresight loops",
            },
            {
              time: "07:18",
              label: "Indicators that show progress toward adaptive systems",
            },
            {
              time: "13:44",
              label: "Sequencing pilots that produce learning, not lock-in",
            },
          ],
        },
      ],
    },
    infographicDetail: {
      downloadHref: ADAPTIVE_DETAILED_REPORT_PDF,
      sectionTitle: "Infographics",
      slides: [
        {
          src: "/Adaptive-Cities/Dimension-wise.png",
          alt: "Infographic slide 1: dimension-wise adaptive cities analysis",
        },
        {
          src: "/Adaptive-Cities/unsplash_Fr6zexbmjmc.png",
          alt: "Infographic slide 2: adaptive cities visual overview",
        },
        {
          src:
            "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=1600&q=80",
          alt: "Infographic slide 3: human capital and innovation",
        },
      ],
    },
    videoDetail: {
      downloadHref: ADAPTIVE_DETAILED_REPORT_PDF,
      sectionTitle: "Video Explainer",
      videoSrc: "/Adaptive-Cities/Adaptive_Cities.mp4",
      videoTitle: "Adaptive Cities Explainer Video",
      whatYouWillLearn: {
        title: "What you will learn",
        points: [
          "How Dubai's speed and flexibility create both opportunities and risks.",
          "The challenges of managing interconnected global risks in a decentralized system.",
          "Why better cross-domain coordination is crucial for long-term resilience.",
        ],
      },
    },
    glossaryDetail: {
      downloadHref: ADAPTIVE_DETAILED_REPORT_PDF,
      sectionTitle: "Technical Glossary",
      sections: [
        {
          heading: "Core Concepts",
          terms: [
            {
              term: "Adaptive City",
              definition:
                "A city with the capacity to continuously sense change, coordinate responses across systems, and adjust policies, infrastructure, and services over time in response to evolving risks, constraints, and opportunities.",
            },
            {
              term: "Adaptivity",
              definition:
                "The degree and nature of a city's responsiveness over time, encompassing both real-time operational responses and longer-term structural adjustments.",
            },
            {
              term: "Operational Adaptivity",
              definition:
                "Real-time sensing, prediction, and response within existing systems (e.g., service optimization, dashboards, AI-enabled operations).",
            },
            {
              term: "Strategic Adaptivity",
              definition:
                "Longer-horizon system reconfiguration through institutional reform, spatial planning, infrastructure investment, and policy redesign.",
            },
            {
              term: "Structural Model",
              definition:
                "The underlying configuration of governance arrangements, institutional roles, economic strategy, operating systems, and incentives that shapes how a city plans, invests, and responds to change.",
            },
            {
              term: "Operating Logic",
              definition:
                "The way decisions are prioritized, coordinated, and executed across government entities, markets, and institutions, including the balance between central control and decentralized action.",
            },
            {
              term: "Transferability",
              definition:
                "The extent to which adaptive initiatives can be adapted and implemented in another city, given differences in governance structure, institutional capacity, market dynamics, and development context.",
            },
          ],
        },
        {
          heading: "Development Approaches",
          terms: [
            {
              term: "Brownfield",
              definition:
                "The adaptation, integration, or upgrading of existing physical assets and digital systems, constrained by legacy infrastructure, data architectures, institutional processes, and operational dependencies.",
            },
            {
              term: "Greenfield",
              definition:
                "The development of new physical districts, infrastructure, or digital systems built from first principles, unconstrained by legacy assets, architectures, or institutional arrangements.",
            },
          ],
        },
        {
          heading: "Governance Models & Institutions",
          terms: [
            {
              term: "Whole-of-Government (WOG)",
              definition:
                "An integrated approach where government agencies operate as a unified system, sharing data, coordinating policies, and aligning operations across traditional departmental boundaries.",
            },
            {
              term: "SNDGG (Smart Nation and Digital Government Group) - Singapore",
              definition:
                "Government body sitting in Prime Minister's Office responsible for digitalization of government services and digital capability building across government.",
            },
            {
              term: "GovTech Singapore",
              definition:
                "Government Technology Agency, part of SNDGG, responsible for building digital infrastructure and platforms for Singapore's public sector.",
            },
            {
              term: "DGE (Department of Government Enablement) - Abu Dhabi",
              definition:
                'Central entity responsible for enabling Abu Dhabi Government to operate as "One Government," building shared digital infrastructure, talent management programs, and governance standards.',
            },
            {
              term: "ATRC (Advanced Technology Research Council) - Abu Dhabi",
              definition:
                "Entity established to define R&D priorities across academia and industry; houses TII (Technology Innovation Institute).",
            },
            {
              term: "CSF (Centre for Strategic Futures) - Singapore",
              definition:
                "Internal \"contrarian\" unit within Prime Minister's Office responsible for challenging policy assumptions and running long-term scenario planning exercises.",
            },
            {
              term: "FEC (Future Economy Council) - Singapore",
              definition:
                "Body responsible for coordinating economic transformation strategies across sectors.",
            },
          ],
        },
        {
          heading: "Digital Infrastructure & Platforms",
          terms: [
            {
              term: "SGTS (Singapore Government Tech Stack)",
              definition:
                'Centralized "Whole-of-Government" technology stack providing reusable components (NECTAR PaaS, APEX API Exchange, SHIP-HATS CI/CD) enabling agencies to build and scale applications without separate infrastructure.',
            },
            {
              term: "APEX (API Exchange) - Singapore",
              definition:
                "Government-wide API gateway facilitating secure data sharing between agencies without complex bilateral agreements.",
            },
            {
              term: "X-Road - Estonia/Tallinn",
              definition:
                "Secure data exchange layer enabling different databases and information systems to link up and function together; foundational to Estonia's digital government.",
            },
            {
              term: "TAMM - Abu Dhabi",
              definition:
                "AI-powered unified digital ecosystem consolidating 1,100+ services from 90+ government and private sector entities. Version 4.0 includes conversational AI assistant and automated service management.",
            },
            {
              term: "DubaiNow",
              definition:
                "Dubai's mobile application aggregating government and private sector services, providing unified access to 130+ services from 30+ entities.",
            },
            {
              term: "Singpass - Singapore",
              definition:
                "Singapore's National Digital Identity system enabling secure biometric authentication across 2,700+ government services.",
            },
            {
              term: "LifeSG - Singapore",
              definition:
                "Application consolidating 100+ government services organized around citizen life events rather than by government agency.",
            },
            {
              term: "MyInfo - Singapore",
              definition:
                'Data platform enabling "Tell us once" policy where citizens\' verified data can be reused across government services with consent.',
            },
            {
              term: "SNSP (Smart Nation Sensor Platform) - Singapore",
              definition:
                "Nationwide sensor network (plan to convert 110,000 lampposts into interconnected wireless sensors) providing data for urban operations and planning.",
            },
          ],
        },
        {
          heading: "Urban Planning & Development",
          terms: [
            {
              term: "Digital Twin",
              definition:
                "High-fidelity virtual replica of physical city systems combining real-time and historical data to simulate scenarios, test interventions, and inform planning decisions before physical implementation.",
            },
            {
              term: "Virtual Singapore",
              definition:
                "Singapore's national-scale 3D digital twin combining real-time and legacy data from multiple agencies to simulate urban scenarios for planning and resilience.",
            },
            {
              term: "DUCT (Digital Urban Climate Twin) - Singapore",
              definition:
                "Physics-based computational model integrating environmental and anthropogenic data to simulate city microclimate and test cooling strategies.",
            },
            {
              term: "TOD (Transit-Oriented Development)",
              definition:
                "Mixed-use development designed around public transportation hubs to promote walkability and reduce car dependency.",
            },
            {
              term: "15-Minute City / 20-Minute City",
              definition:
                "Urban planning concept where residents can access most daily necessities within 15-20 minutes by walking, cycling, or public transport.",
            },
            {
              term: "Blue-Green Infrastructure",
              definition:
                "Network combining water features (blue) and vegetation (green) to provide ecosystem services, manage stormwater, reduce urban heat, and enhance biodiversity.",
            },
          ],
        },
        {
          heading: "Economic Development & Innovation",
          terms: [
            {
              term: "ITM (Industry Transformation Maps) - Singapore",
              definition:
                "23 sector-specific 3-5 year strategies around productivity, skills development, innovation, and internationalization.",
            },
            {
              term: "OTR (Operation & Technology Roadmap) - Singapore",
              definition:
                "Helps businesses identify specific technologies and operational changes required to remain competitive within their industry transformation roadmap.",
            },
            {
              term: "JTM (Job Transformation Maps) - Singapore",
              definition:
                "Deep-dive analysis of how industry changes will impact specific job roles over 3-5 year horizon, linked to skills development programs.",
            },
            {
              term: "SkillsFuture - Singapore",
              definition:
                "National lifelong learning movement ensuring every Singaporean acquires skills required by future economy, with direct-to-citizen subsidy credits for approved courses.",
            },
            {
              term: "Queen Bee Networks - Singapore",
              definition:
                "Program where large industry-leading companies mentor and develop training for SMEs in their supply chain and ecosystem.",
            },
            {
              term: "FDI (Foreign Direct Investment)",
              definition:
                "Investment from foreign entities into domestic businesses or infrastructure, key metric for measuring city competitiveness.",
            },
            {
              term: "ICV (In-Country Value)",
              definition:
                "Metric measuring total value contributed to local economy by procurement spending, including local workforce, goods, services, and supplier development.",
            },
            {
              term: "Emiratization",
              definition:
                "UAE government policy to employ and develop Emirati nationals in meaningful and efficient jobs in the public and private sectors.",
            },
          ],
        },
        {
          heading: "Sovereign Wealth & Investment",
          terms: [
            {
              term: "SWF (Sovereign Wealth Fund)",
              definition:
                "State-owned investment fund managing national savings, often derived from commodity exports, for long-term strategic investment.",
            },
            {
              term: "ADIA (Abu Dhabi Investment Authority)",
              definition:
                "Long-term global portfolio investor managing Abu Dhabi's sovereign wealth for intergenerational savings.",
            },
            {
              term: "Mubadala Investment Company - Abu Dhabi",
              definition:
                "Strategic investor in technology, aerospace, healthcare, semiconductors; highly active dealmaker (~$29B across 52 deals in 2024).",
            },
            {
              term: "ADQ (Abu Dhabi Developmental Holding Company)",
              definition:
                "Focus on domestic critical infrastructure and strategic assets (Etihad Airways, AD Ports Group, Pure Health, TAQA).",
            },
            {
              term: "MGX - Abu Dhabi",
              definition:
                "Dedicated vehicle for AI infrastructure, semiconductors, and core technologies; founding partners include Mubadala and G42.",
            },
            {
              term: "AUM (Assets Under Management)",
              definition:
                "Total market value of investments managed by a financial institution or investment fund.",
            },
          ],
        },
        {
          heading: "Technology & AI",
          terms: [
            {
              term: "LLM (Large Language Model)",
              definition:
                "AI model trained on vast text data to understand and generate human language (e.g., GPT, Claude, Falcon).",
            },
            {
              term: "TII (Technology Innovation Institute) - Abu Dhabi",
              definition:
                "Advanced R&D entity conducting research in AI, quantum computing, advanced materials; developed Falcon 180B (sovereign LLM).",
            },
            {
              term: "G42 - Abu Dhabi",
              definition:
                "Technology holding company (Mubadala-backed) housing Core42 (sovereign cloud and AI infrastructure), M42 (healthcare technology), Khazna Data Centres, Presight (analytics).",
            },
            {
              term: "Stargate UAE",
              definition:
                "One of largest sovereign AI compute deployments globally (1-GW cluster), enabling AI training, simulation, and cross-sector deployment.",
            },
            {
              term: "API (Application Programming Interface)",
              definition:
                "Set of protocols enabling different software applications to communicate and share data.",
            },
            {
              term: "IoT (Internet of Things)",
              definition:
                "Network of physical objects embedded with sensors, software, and connectivity enabling data collection and exchange.",
            },
            {
              term: "BIM (Building Information Modeling)",
              definition:
                "Digital representation of physical and functional characteristics of buildings, enabling integrated planning and management.",
            },
          ],
        },
        {
          heading: "Climate & Environment",
          terms: [
            {
              term: "Urban Heat Island Effect",
              definition:
                "Phenomenon where urban areas experience significantly higher temperatures than surrounding rural areas due to human activities and built environment.",
            },
            {
              term: "Carbon Sequestration",
              definition:
                "Process of capturing and storing atmospheric carbon dioxide to mitigate climate change.",
            },
            {
              term: "Blue Carbon",
              definition:
                "Carbon captured by ocean and coastal ecosystems (e.g., mangroves, seagrasses).",
            },
            {
              term: "Embodied Carbon",
              definition:
                "Total greenhouse gas emissions associated with materials and construction processes throughout a building's lifecycle.",
            },
            {
              term: "Circular Economy",
              definition:
                "Economic system aimed at eliminating waste through continual reuse, recycling, and regeneration of materials and products.",
            },
            {
              term: "District Cooling",
              definition:
                "Centralized system producing and distributing chilled water to multiple buildings, more efficient than individual building chillers.",
            },
            {
              term: "Thermal Energy Storage",
              definition:
                "Technology storing cooling or heating capacity for later use, enabling load shifting from peak to off-peak periods.",
            },
          ],
        },
        {
          heading: "Mobility & Transport",
          terms: [
            {
              term: "MaaS (Mobility as a Service)",
              definition:
                "Integration of various transport modes into single mobility service accessible on demand through unified digital platform.",
            },
            {
              term: "ERP (Electronic Road Pricing) - Singapore",
              definition:
                "Dynamic congestion pricing system where drivers pay variable fees based on real-time traffic conditions.",
            },
            {
              term: "AV (Autonomous Vehicles)",
              definition:
                "Self-driving vehicles using sensors, AI, and mapping to navigate without human intervention.",
            },
            {
              term: "First-Last Mile",
              definition:
                "Journey segments connecting origin/destination to main public transport network; critical determinant of overall transit usability.",
            },
            {
              term: "Multi-Modal Transport",
              definition:
                "Transportation system integrating multiple modes (metro, bus, bike, walking) with seamless transfers and unified ticketing.",
            },
          ],
        },
        {
          heading: "Social & Community",
          terms: [
            {
              term: "Active Aging",
              definition:
                "Approach optimizing opportunities for health, participation, and security to enhance quality of life as people age.",
            },
            {
              term: "AAC (Active Ageing Centres) - Singapore",
              definition:
                "Community centers offering programs across social, physical health, cognitive, learning, and volunteerism domains for seniors.",
            },
            {
              term: "COC (Community of Care) - Singapore",
              definition:
                "Government-supported ecosystem helping seniors age in place through local networks, services, and professionals bridging hospital care with home/community support.",
            },
            {
              term: "EHR (Electronic Health Record)",
              definition:
                "Digital version of patient's medical history maintained over time across different healthcare providers.",
            },
            {
              term: "NABIDH - Dubai",
              definition:
                "Unified health information exchange connecting public and private healthcare providers across Dubai.",
            },
          ],
        },
        {
          heading: "Data & Sensing",
          terms: [
            {
              term: "RAHS (Risk Assessment and Horizon Scanning) - Singapore",
              definition:
                '"Whole-of-Government" operating system using AI and cognitive modeling to scan for "weak signals" of future disruptions.',
            },
            {
              term: "Pulse of the Economy - Singapore",
              definition:
                "Real-time economic dashboard using high-frequency, non-traditional data (electricity consumption, transport, job listings) to track economic health, bypassing quarterly GDP lag.",
            },
            {
              term: "Interoperability",
              definition:
                "Ability of different systems, organizations, and technologies to exchange and use information effectively.",
            },
            {
              term: "Data Standards",
              definition:
                "Agreed-upon formats and protocols ensuring consistent data collection, storage, and exchange across systems.",
            },
            {
              term: "Predictive Analytics",
              definition:
                "Use of historical data, statistical algorithms, and machine learning to identify likelihood of future outcomes.",
            },
          ],
        },
        {
          heading: "Performance & Evaluation",
          terms: [
            {
              term: "KPI (Key Performance Indicator)",
              definition:
                "Measurable value demonstrating effectiveness in achieving key objectives.",
            },
            {
              term: "Outcome-Based Metrics",
              definition:
                "Performance measures focusing on end results and impacts rather than activities or outputs.",
            },
            {
              term: "System-Level Indicators",
              definition:
                "Metrics measuring performance across multiple entities or domains rather than single departments.",
            },
          ],
        },
        {
          heading: "Regulatory & Policy",
          terms: [
            {
              term: "Regulatory Sandbox",
              definition:
                "Controlled environment allowing businesses to test innovative products, services, or business models with relaxed regulatory requirements.",
            },
            {
              term: "Unified License - Dubai",
              definition:
                "Single license enabling businesses to operate across multiple free zones and mainland, reducing regulatory fragmentation (launched 2025).",
            },
            {
              term: "Community Participation Policy - Dubai",
              definition:
                "Policy framework (launched 2025) enabling residents to participate in shaping policy, legislation, and government services.",
            },
            {
              term: "Services 360 - Dubai",
              definition:
                "Policy mandating move from reactive to proactive government service delivery.",
            },
          ],
        },
        {
          heading: "Research & Development",
          terms: [
            {
              term: "R&D (Research and Development)",
              definition:
                "Activities directed toward innovation, introduction, and improvement of products and processes.",
            },
            {
              term: "Commercialization Pathway",
              definition:
                "Process of bringing research outputs and innovations from laboratory to market deployment.",
            },
            {
              term: "Technology Transfer",
              definition:
                "Process of transferring knowledge, skills, methods, or technologies from one organization to another.",
            },
            {
              term: "Testbed / Living Lab",
              definition:
                "Real-world environment where new technologies and innovations can be tested with actual users before full-scale deployment.",
            },
          ],
        },
        {
          heading: "Key International Benchmarks",
          terms: [
            {
              term: "IMD Smart City Index",
              definition:
                "Annual ranking measuring how citizens perceive technology's contribution to urban life across health, safety, mobility, activities, opportunities, and governance.",
            },
            {
              term: "IESE Cities in Motion Index",
              definition:
                "Comprehensive city ranking using ~100 indicators across economy, human capital, social cohesion, environment, governance, urban planning, international outreach, technology, and mobility.",
            },
            {
              term: "Kearney Global Cities Index",
              definition:
                "Assessment of global city performance across business activity, human capital, information exchange, cultural experience, and political engagement.",
            },
            {
              term: "GSER (Global Startup Ecosystem Report)",
              definition:
                "Ranking measuring startup ecosystem maturity through ecosystem value, funding, exits, talent depth, and knowledge spillovers.",
            },
          ],
        },
        {
          heading: "Acronyms Reference",
          terms: [
            {
              term: "CCP",
              definition: "Career Conversion Programmes",
            },
            {
              term: "CNS",
              definition: "Community Networks for Seniors",
            },
            {
              term: "CTP",
              definition: "Capability Transfer Programme",
            },
            {
              term: "DET",
              definition: "Department of Economy and Tourism (Dubai)",
            },
            {
              term: "EV",
              definition: "Electric Vehicle",
            },
            {
              term: "HDB",
              definition: "Housing Development Board (Singapore)",
            },
            {
              term: "NTU",
              definition: "Nanyang Technological University",
            },
            {
              term: "NUS",
              definition: "National University of Singapore",
            },
            {
              term: "OEM",
              definition: "Open Electricity Market (Singapore)",
            },
            {
              term: "PDD",
              definition: "Punggol Digital District",
            },
            {
              term: "PMO",
              definition: "Prime Minister's Office",
            },
            {
              term: "SSG",
              definition: "SkillsFuture Singapore",
            },
            {
              term: "SUTD",
              definition: "Singapore University of Technology and Design",
            },
          ],
        },
      ],
    },
  },
  r2: {
    whyItMatters:
      "Financing and payment design shape who gets care, how quality is rewarded, and whether spending stays sustainable as populations age and technology accelerates. Understanding global mechanisms helps Dubai calibrate reforms to local delivery realities.",
    keyQuestionsIntro: "Questions explored in this scan include:",
    keyQuestions: [
      "How do mature systems blend public stewardship with market incentives?",
      "What payment models best align spending with outcomes?",
      "Where are the biggest risks of unintended cost-shifting?",
    ],
  },
  r3: {
    whyItMatters:
      "Government assessments generate sensitive, high-stakes data. AI can compress analysis cycles and surface patterns—but only where governance, transparency, and human judgment remain central.",
    keyQuestionsIntro: "Key questions include:",
    keyQuestions: [
      "Where can AI add speed without reducing accountability?",
      "What guardrails reduce bias and protect institutional trust?",
      "How should capability-building be sequenced across teams?",
    ],
  },
  r4: {
    whyItMatters:
      "Virtual assets intersect with financial integrity, consumer protection, and law enforcement in fast-moving ways. A structured view helps leaders prioritize readiness and cooperation.",
    keyQuestionsIntro: "This exploratory note asks:",
    keyQuestions: [
      "What risk typologies are emerging in comparable jurisdictions?",
      "Which legal and supervisory gaps show up repeatedly?",
      "What coordination mechanisms reduce harm without stifling innovation?",
    ],
  },
};

function defaultDetailForReport(report: ReportsListItem): ReportDetailFields {
  return {
    whyItMatters: `This report frames "${report.title}" for decision-makers who need credible context, trade-offs, and options rather than a single prescriptive answer.`,
    keyQuestionsIntro:
      "Across the evidence review, the analysis returns to a short set of guiding questions:",
    keyQuestions: [
      "What is changing in the global baseline, and why does it matter now?",
      "What are Dubai’s unique constraints and comparative advantages?",
      "What are pragmatic next steps that balance ambition with feasibility?",
    ],
    mediaAssets: standardMediaAssets,
  };
}

export function getReportWithDetail(id: string): ReportWithDetail | null {
  const base = allReports.find((r) => r.id === id);
  if (!base) return null;
  const extra = reportDetailById[id];
  const defaults = defaultDetailForReport(base);
  return {
    ...base,
    ...defaults,
    ...(extra ?? {}),
    mediaAssets: defaults.mediaAssets,
    mediaContentByKind: {
      ...defaults.mediaContentByKind,
      ...(extra?.mediaContentByKind ?? {}),
    },
  };
}

export const topicFilters = ["Economic", "Social", "Government", "Sustainability"];

export const dateFilters = ["2026", "2025", "2024", "2023"];
