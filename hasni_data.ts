export interface Milestone {
  id: string;
  year: string;
  title: string;
  subtitle: string;
  description: string;
  category: 'academic' | 'professional' | 'field' | 'milestone';
  icon?: string;
}

export interface Skill {
  name: string;
  description: string;
  level: number; // 0-100 for hover details or custom graphics
  iconName: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface ProjectCalculations {
  formula: string;
  description: string;
  result: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  heroImage: string;
  overview: string;
  objectives: string[];
  problemStatement: string;
  methodology: string[];
  calculations: ProjectCalculations[];
  softwareUsed: string[];
  constructionProcess?: string[];
  gallery: string[];
  results: string;
  lessonsLearned: string[];
  futureImprovements: string[];
  reportPdfUrl?: string;
  presentationUrl?: string;
}

export interface ResearchPaper {
  id: string;
  title: string;
  abstract: string;
  keywords: string[];
  researchArea: string;
  technicalReportUrl?: string;
  presentationUrl?: string;
  conferencePaper?: string;
  futureScope: string[];
}

export interface Experience {
  id: string;
  role: string;
  organization: string;
  period: string;
  description: string[];
  category: 'internship' | 'leadership' | 'training' | 'volunteer';
}

export interface SiteVisit {
  id: string;
  title: string;
  location: string;
  date: string;
  description: string;
  imageUrl: string;
  category: 'construction' | 'bridge' | 'water' | 'geotech' | 'laboratory' | 'survey';
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  verificationUrl: string;
  pdfUrl?: string;
}

export interface Achievement {
  id: string;
  title: string;
  awarder: string;
  date: string;
  description: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'survey' | 'construction' | 'lab' | 'research' | 'infrastructure' | 'nature' | 'university' | 'drone' | 'visits';
  imageUrl: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
}

export const personalInfo = {
  name: "HASNI AHAMED",
  title: "Civil Engineering Undergraduate",
  headline: "Structural Engineering | Sustainable Infrastructure | Computational Mechanics | Research Enthusiast",
  tagline: "Designing resilient infrastructure. Building sustainable communities. Engineering tomorrow.",
  university: "General Sir John Kotelawala Defence University, Sri Lanka",
  mission: "To apply computational mechanics and sustainable design principles to engineer resilient infrastructure that harmonizes with the environment and empowers local communities.",
  vision: "To pioneer carbon-neutral structural materials and innovative, seismic-resilient construction methodologies that redefine urban and rural landscapes in developing nations.",
  objective: "A highly driven Civil Engineering undergraduate seeking opportunities in structural and geotechnical design to utilize my computational modeling, FEM, and project management skills in global consultancy environments.",
  philosophy: "Engineering is not just about calculations; it is the art of transforming ideas and constraints into resilient, sustainable, and beautiful realities that stand the test of time.",
  futureGoals: [
    "Pursue a Master's and PhD in Computational Mechanics and Advanced Structural Engineering.",
    "Contribute to international sustainable infrastructure codes and standards.",
    "Obtain Chartered Engineer (C.Eng) status with the Institution of Engineers, Sri Lanka (IESL).",
    "Develop AI-driven optimization algorithms for reinforced concrete structures."
  ],
  stats: [
    { label: "Engineering Projects", value: "10+" },
    { label: "Research Topics", value: "3" },
    { label: "Technical Skills", value: "20+" },
    { label: "Laboratory Experiments", value: "15+" },
    { label: "Survey Camps", value: "1" },
    { label: "Site Visits", value: "12+" },
    { label: "Certifications", value: "17" },
    { label: "LinkedIn Connections", value: "500+" },
    { label: "Years of Learning", value: "4" }
  ]
};

export const timelineSteps: Milestone[] = [
  {
    id: "step-1",
    year: "2018 - 2020",
    title: "Advanced Level Education",
    subtitle: "High School Studies",
    description: "Completed secondary education in Physical Science Stream (Mathematics, Physics, Chemistry) with exceptional academic performance.",
    category: "academic"
  },
  {
    id: "step-2",
    year: "2022 - Present",
    title: "Civil Engineering Undergraduate",
    subtitle: "General Sir John Kotelawala Defence University",
    description: "Enrolled in the BSc (Hons) in Engineering in Civil Engineering. Focus on structural analysis, hydraulics, geotechnical mechanics, and computational tools.",
    category: "academic"
  },
  {
    id: "step-3",
    year: "2024",
    title: "Engineering Survey Camp",
    subtitle: "Practical Field Training",
    description: "Completed intensive 2-week field surveying camp, managing levelling, contouring, road alignment design, and total station traverse calculations.",
    category: "field"
  },
  {
    id: "step-4",
    year: "2025",
    title: "Advanced Research Phase",
    subtitle: "Groundwater & Structural Research",
    description: "Initiated key research projects focusing on groundwater flow simulations, finite element structural analysis, and concrete mix design optimization.",
    category: "professional"
  },
  {
    id: "step-5",
    year: "2025",
    title: "Computational & Finite Element Projects",
    subtitle: "SAP2000, Revit, & ETABS Workflows",
    description: "Successfully designed and simulated multi-story concrete structures and steel truss bridges under static and dynamic loading.",
    category: "professional"
  },
  {
    id: "step-6",
    year: "2026",
    title: "Industrial Internship",
    subtitle: "Civil Design & Site Engineering",
    description: "Active exposure to site execution and structural drafting workflows under chartered civil engineers, bridging academic theory and physical construction.",
    category: "professional"
  },
  {
    id: "step-7",
    year: "Future Goal",
    title: "Graduate Engineer",
    subtitle: "Entry to Professional Practice",
    description: "Aiming to join a globally recognized engineering consultancy to design complex structural systems and sustainable infrastructures.",
    category: "milestone"
  },
  {
    id: "step-8",
    year: "Future Goal",
    title: "Chartered Engineer",
    subtitle: "Professional Registration (IESL / ICE)",
    description: "Acquire professional licensing and charter status to lead signature infrastructure projects with a focus on sustainable materials and structural safety.",
    category: "milestone"
  }
];

export const educationList = [
  {
    degree: "BSc (Hons) in Engineering in Civil Engineering",
    institution: "General Sir John Kotelawala Defence University, Sri Lanka",
    period: "2022 - Present",
    gpa: "Dean's List / Highly Competitive Performance",
    keyModules: [
      "Structural Analysis I & II",
      "Reinforced Concrete Design",
      "Soil Mechanics & Geotechnical Engineering",
      "Hydraulics & Hydrology",
      "Highway & Transportation Engineering",
      "Environmental Engineering",
      "Computational Methods & FEA"
    ]
  },
  {
    degree: "GCE Advanced Level (Physical Science Stream)",
    institution: "High School, Sri Lanka",
    period: "2020",
    gpa: "A Grades in Mathematics & Physics",
    keyModules: [
      "Combined Mathematics",
      "Physics",
      "Chemistry"
    ]
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Core Engineering",
    skills: [
      { name: "Structural Engineering", description: "Design of RC and steel elements, structural dynamics, load distributions, and load path analysis.", level: 85, iconName: "Layers" },
      { name: "Transportation Engineering", description: "Highway geometric alignment design, pavement thickness calculations, and traffic flow analysis.", level: 75, iconName: "Navigation" },
      { name: "Environmental Engineering", description: "Water purification hydraulics, wastewater treatment layouts, and EIA documentation.", level: 80, iconName: "Leaf" },
      { name: "Construction Management", description: "Resource levelling, critical path method scheduling (CPM), costing, and site safety plans.", level: 82, iconName: "Briefcase" },
      { name: "Surveying", description: "Theodolite traverse adjustments, GPS leveling, contour modeling, and total station surveying.", level: 90, iconName: "Compass" },
      { name: "Hydrology", description: "Runoff volume predictions, catchment discharge modeling, and open-channel hydraulics.", level: 78, iconName: "Droplet" },
      { name: "Geotechnical Engineering", description: "Retaining wall analysis, shear strength, bearing capacity of shallow/deep foundations.", level: 80, iconName: "Mountain" },
      { name: "Finite Element Analysis", description: "Discretization models, meshing strategies, shell element dynamics, and structural stress validation.", level: 83, iconName: "Cpu" },
      { name: "Computational Mechanics", description: "Applying mathematical models to simulate structural deformations, elastic limits, and yielding.", level: 80, iconName: "Calculator" },
      { name: "Machine Learning in Civil", description: "Applying regressions and neural networks to predict concrete compressive strength and soil stability.", level: 70, iconName: "Brain" }
    ]
  },
  {
    title: "Software Skills",
    skills: [
      { name: "AutoCAD", description: "2D drafting, structural details, layout drawings, and architectural base mapping.", level: 95, iconName: "DraftingCompass" },
      { name: "Civil 3D", description: "Corridor creation, roadway profiles, cut-and-fill volumetrics, and digital terrain mapping.", level: 85, iconName: "MapPin" },
      { name: "Revit", description: "BIM building modeling, structural rebar scheduling, and architectural coordination.", level: 80, iconName: "Box" },
      { name: "SAP2000", description: "Frame structures modeling, finite element bridge analysis, and seismic response spectrum analysis.", level: 85, iconName: "Activity" },
      { name: "ETABS", description: "Multi-story building modeling, shear wall layouts, and concrete frame reinforcement optimizations.", level: 82, iconName: "Home" },
      { name: "MATLAB", description: "Numerical integration, matrix calculations for structural stiffness, and graphing data.", level: 78, iconName: "Terminal" },
      { name: "Python", description: "Automating data parsing, QGIS scripting, machine learning models, and structural parameter solver.", level: 80, iconName: "Code" },
      { name: "QGIS", description: "Hydrological catchment delineation, watershed mapping, and GIS spatial layer overlays.", level: 75, iconName: "Globe" },
      { name: "MS Project", description: "Gantt charts creation, resource allocations, dependency linking, and project baseline audits.", level: 80, iconName: "Calendar" },
      { name: "Microsoft Office", description: "Advanced Excel modeling, presentation styling, technical report composition.", level: 90, iconName: "FileSpreadsheet" }
    ]
  }
];

export const projectsList: Project[] = [
  {
    id: "survey-camp",
    title: "Engineering Survey Camp - KDU",
    category: "Surveying & Road Alignment",
    heroImage: "/images/hero.jpeg",
    overview: "An intensive two-week practical surveying camp conducted in Sri Lanka, focusing on establishing geodetic control networks, topographic mapping, and road alignment design.",
    objectives: [
      "Establish primary and secondary control points using Total Stations.",
      "Conduct topographic surveying of a 5-hectare rugged terrain.",
      "Design a 1.2km optimal road alignment with appropriate horizontal curves.",
      "Produce final longitudinal profiles and cross-sections."
    ],
    problemStatement: "Providing accurate topographical mapping of a highly undulating area with dense vegetation and design an engineering road profile matching gradient standards while minimizing cut-and-fill volumes.",
    methodology: [
      "Executed closed traverse adjustments using Bowditch correction methods.",
      "Obtained high-precision spot levels and contour details using leveling instruments.",
      "Calculated horizontal curve elements (radius, transition curve lengths, deflection angles).",
      "Modelled the digital terrain and road corridor using AutoCAD Civil 3D."
    ],
    calculations: [
      { formula: "e + f = \\frac{v^2}{gR}", description: "Superelevation equation to balance lateral centrifugal force on curves.", result: "e = 5.5% (for v = 40 km/h, R = 120m)" },
      { formula: "Correction = \\Sigma E_L \\times \\frac{L_i}{\\Sigma L}", description: "Bowditch Traverse adjustment for linear errors.", result: "Error closed to within 1:10,000 accuracy limit." }
    ],
    softwareUsed: ["Civil 3D", "AutoCAD", "Microsoft Excel"],
    constructionProcess: [
      "Field Reconnaissance and point clearing.",
      "Total station traversing and triangulation.",
      "Differential leveling loops for benchmarks.",
      "Cross-sectional detailing at 20m intervals."
    ],
    gallery: [
      "/images/hero.jpeg",
      "/images/survey_site.jpg"
    ],
    results: "Successfully produced a comprehensive contour map of the 5-hectare area and a detailed, cost-optimized road corridor alignment with a mass-haul diagram showing balanced cut-and-fill allocations.",
    lessonsLearned: [
      "Precision in benchmarking is vital; early errors propagate rapidly.",
      "Team synchronization and field logistics heavily influence survey schedules."
    ],
    futureImprovements: [
      "Integrate RTK-GPS systems for faster control point verification.",
      "Utilize drone photogrammetry to build a high-resolution 3D mesh overlay."
    ],
    reportPdfUrl: "/certificates/CAD_Workshop_Certificate.pdf",
    presentationUrl: "#"
  },
  {
    id: "groundwater-research",
    title: "Groundwater Modeling & Aquifer Simulation",
    category: "Hydrology & Geotechnical Research",
    heroImage: "/images/groundwater.png",
    overview: "Computational research analyzing groundwater flow dynamics and aquifer depletion rates in the northern dry zone of Sri Lanka using finite difference modeling.",
    objectives: [
      "Model hydraulic conductivity distributions in a heterogeneous aquifer.",
      "Simulate seasonal water table fluctuations under changing abstraction rates.",
      "Evaluate drawdown curves surrounding a agricultural tube well cluster."
    ],
    problemStatement: "Accelerated aquifer depletion caused by unregulated agricultural tube wells, leading to high saline intrusion and critical water scarcity during dry periods.",
    methodology: [
      "Gathered geological borehole logs and pumping test datasets.",
      "Implemented a 2D finite difference flow model in MATLAB and Python.",
      "Simulated transient state aquifer recharge scenarios over a 12-month cycle.",
      "Analyzed spatial drawdown contours to establish safe yield parameters."
    ],
    calculations: [
      { formula: "s = \\frac{Q}{4\\pi T} W(u)", description: "Theis equation for transient groundwater flow in a confined aquifer.", result: "Drawdown s = 2.4m at radial distance of 50m." },
      { formula: "T = K \\times D", description: "Aquifer transmissivity calculated from hydraulic conductivity and thickness.", result: "T = 145 m┬▓/day" }
    ],
    softwareUsed: ["MATLAB", "Python", "QGIS", "MS Excel"],
    gallery: ["/images/groundwater.png"],
    results: "Delineated critical drawdown zones and provided recommendations for maximum sustainable extraction limits, suggesting a 20% reduction in pumping during dry seasons to prevent seawater intrusion.",
    lessonsLearned: [
      "Aquifer heterogeneity complicates deterministic models; stochastic models represent field conditions better.",
      "Accurate boundaries (recharge sources) are key to stable numerical calculations."
    ],
    futureImprovements: [
      "Expand to a fully integrated MODFLOW model utilizing physical spatial grids.",
      "Integrate IoT-enabled real-time piezometric level sensors for model validation."
    ],
    reportPdfUrl: "/certificates/MATLAB_Fundamentals_Course.pdf",
    presentationUrl: "#"
  },
  {
    id: "structural-design",
    title: "Seismic Optimization of Multi-Story Concrete Structure",
    category: "Structural Engineering",
    heroImage: "/images/structural.png",
    overview: "Structural design and seismic evaluation of a G+8 residential building conforming to Eurocode 2 and Eurocode 8 design guidelines.",
    objectives: [
      "Create structural frame skeleton configurations using ETABS.",
      "Analyze structural frames under dead, live, wind, and seismic loading.",
      "Optimize shear wall placements to minimize lateral drift.",
      "Design reinforcement details for critical beam-column joints."
    ],
    problemStatement: "Designing a high-rise building on a moderate-seismic zone, ensuring dynamic drift compliance while maintaining aesthetic spatial layouts and concrete cost efficiency.",
    methodology: [
      "Constructed a 3D structural model in ETABS with shell and frame nodes.",
      "Applied response spectrum analysis representing seismic zones.",
      "Performed structural optimization iterations on shear wall geometry.",
      "Drafted standard rebar layouts in AutoCAD and Revit Structure."
    ],
    calculations: [
      { formula: "T_1 = 0.075 \\times H^{3/4}", description: "Empirical formula for fundamental natural period of concrete buildings.", result: "T_1 = 0.88 seconds (Building Height H = 27m)" },
      { formula: "M_{Ed} \\le M_{Rd}", description: "Eurocode 2 ultimate limit state moment capacity comparison.", result: "M_Rd = 340 kNm > M_Ed = 295 kNm (Safe)" }
    ],
    softwareUsed: ["ETABS", "SAP2000", "AutoCAD", "Revit"],
    gallery: ["/images/structural.png"],
    results: "Successfully designed structural members complying with structural safety rules. Shear wall optimizations reduced lateral top displacement by 32%, saving 12% in concrete material volumes.",
    lessonsLearned: [
      "Torsional modes of vibration must be avoided early in structural floor planning.",
      "Joint confinement details play a vital role in ensuring structural ductility."
    ],
    futureImprovements: [
      "Perform a non-linear push-over analysis to verify structural collapse margins.",
      "Introduce steel-concrete composite sections to reduce column dimensions."
    ],
    reportPdfUrl: "/certificates/Design_of_High_Rise_Buildings_SAP2000.pdf",
    presentationUrl: "#"
  },
  {
    id: "transportation-engineering",
    title: "Highway Intersection & Pavement Design Project",
    category: "Transportation Engineering",
    heroImage: "/images/highway.png",
    overview: "Comprehensive layout planning and structural pavement design for a dual-carriageway collector highway linking industrial zones.",
    objectives: [
      "Estimate cumulative equivalent single axle loads (ESALs) for 20 years.",
      "Determine flexible pavement thickness layers using AASHTO standards.",
      "Design a channelized T-junction layout to improve traffic throughput."
    ],
    problemStatement: "Premature pavement cracking and high congestion levels at an existing unsignalized intersection due to heavy industrial container truck transport.",
    methodology: [
      "Conducted 12-hour traffic count assessments and classified vehicle groups.",
      "Calculated ESAL projections incorporating annual growth rates.",
      "Determined structural numbers (SN) and pavement thicknesses.",
      "Modelled traffic flows and signal layouts using Civil 3D."
    ],
    calculations: [
      { formula: "ESAL = N \\times G_t \\times F_d \\times G_f", description: "Design traffic estimation formula for pavement lifespan.", result: "ESAL = 1.25 \\times 10^7 load repetitions." },
      { formula: "SN = a_1 D_1 + a_2 D_2 m_2 + a_3 D_3 m_3", description: "AASHTO structural number equation for layer sizing.", result: "SN = 4.2 (Asphalt = 4\", Base = 6\", Subbase = 8\")" }
    ],
    softwareUsed: ["Civil 3D", "MS Excel", "AutoCAD"],
    gallery: ["/images/highway.png"],
    results: "Redesigned flexible pavement cross-section and drafted a channelized intersection layout with dedicated left-turn lanes, reducing delay times by 45%.",
    lessonsLearned: [
      "Drainage coefficient parameters drastically affect pavement thickness requirements.",
      "Vehicle classifications are non-linear variables; neglecting axle weights leads to premature failure."
    ],
    futureImprovements: [
      "Develop rigid concrete pavement options for high-temperature resistance.",
      "Simulate traffic flow using micro-simulation modeling tools (VISSIM)."
    ],
    reportPdfUrl: "/certificates/Introduction_to_Highway_Design.pdf",
    presentationUrl: "#"
  }
];

export const researchList: ResearchPaper[] = [
  {
    id: "groundwater-dynamics",
    title: "Computational Analysis of Aquifer Recharge Dynamics in Heterogeneous Geotechnical Profiles",
    abstract: "This study explores groundwater flow rates through highly variable soil layers using finite difference approximations. By analyzing borehole datasets from Sri Lanka, we mapped vertical hydraulic conductivities and modeled fluid flow patterns. The paper presents drawdown behaviors, aquifer recharging profiles, and evaluates sustainable water usage limits for deep tube-well installations.",
    keywords: ["Groundwater Hydrology", "Aquifer Modeling", "Finite Difference Method", "Geotechnical Characterization", "Sustainable Extraction"],
    researchArea: "Geotechnical Hydrology & Computational Hydraulics",
    technicalReportUrl: "/certificates/MATLAB_Fundamentals_Course.pdf",
    presentationUrl: "#",
    conferencePaper: "KDU Annual International Research Conference (Under Review)",
    futureScope: [
      "Expand model parameters to cover 3D transient groundwater movement.",
      "Implement machine learning tools to calibrate soil hydraulic coefficients.",
      "Model contaminant transportation pathways through aquifer zones."
    ]
  },
  {
    id: "concrete-optimization",
    title: "Predicting Compressive Strength of High-Performance Concrete Using Machine Learning",
    abstract: "High-performance concrete mix optimization requires balancing water-cement ratios, aggregate grading, and fly ash percentages. This paper develops a regression neural network mapping concrete ingredients to compressive strengths. The model achieved a 94% prediction accuracy, representing a faster alternative to traditional 28-day cylinder crushing tests.",
    keywords: ["Concrete Strength", "Predictive Modeling", "Neural Networks", "Sustainable Concrete", "Mix Optimization"],
    researchArea: "Materials Engineering & Artificial Intelligence",
    technicalReportUrl: "/certificates/Concrete_Mix_Design_and_Rheology.pdf",
    presentationUrl: "#",
    conferencePaper: "IESL Student Session (Abstract Accepted)",
    futureScope: [
      "Incorporate chemical admixture interaction variables in the training set.",
      "Verify model outputs on ultra-high-performance concrete (UHPC) mixtures.",
      "Develop a desktop GUI for onsite concrete mix adjustments."
    ]
  }
];

export const experienceList: Experience[] = [
  {
    id: "exp-1",
    role: "Engineering Trainee (Civil)",
    organization: "Leading Infrastructure Developer / Consultancy, Sri Lanka",
    period: "May 2026 - Present",
    description: [
      "Gained site engineering exposure, monitoring concrete casting, foundation reinforcement laying, and quality control audits.",
      "Drafted detailed reinforcement layouts for column, beam, and retaining wall configurations using AutoCAD.",
      "Assisted in leveling checks and coordinate offsets on concrete foundations.",
      "Attended project progress meetings, tracking work schedules against MS Project baselines."
    ],
    category: "internship"
  },
  {
    id: "exp-2",
    role: "Student Member & Coordinator",
    organization: "Institution of Civil Engineers (ICE) Sri Lanka Student Chapter",
    period: "2023 - Present",
    description: [
      "Coordinated student technical workshops, inviting guest speakers from global design consultancies.",
      "Managed digital publications, creating newsletters summarizing civil engineering research trends.",
      "Participated in inter-university mock design challenges, showcasing structural concepts."
    ],
    category: "leadership"
  },
  {
    id: "exp-3",
    role: "Participant - Civil Survey Camp",
    organization: "Faculty of Engineering, KDU",
    period: "2024",
    description: [
      "Led a 6-member group in topographic surveys, establishing benchmark control loops and traversing profiles.",
      "Computed leveling calculations and traverse corrections.",
      "Designed a complete road stretch alignment using Civil 3D."
    ],
    category: "training"
  }
];

export const siteVisitsList: SiteVisit[] = [
  {
    id: "visit-1",
    title: "Multi-Story Commercial Building Site",
    location: "Colombo, Sri Lanka",
    date: "March 2025",
    description: "Inspected ready-mix concrete casting of a thick foundation slab. Observed structural reinforcement spacing, post-tensioning duct layouts, and concrete slump test quality audits.",
    imageUrl: "/images/visit_building.png",
    category: "construction"
  },
  {
    id: "visit-2",
    title: "Southern Highway Expansion Project",
    location: "Galle-Matara Link, Sri Lanka",
    date: "July 2024",
    description: "Studied roadbed preparation, sub-grade soil compaction, bituminous layer spreading, and embankment slope stabilization utilizing geotextile sheets.",
    imageUrl: "/images/highway.png",
    category: "construction"
  },
  {
    id: "visit-3",
    title: "Suspension Bridge Inspection Site",
    location: "Central Province, Sri Lanka",
    date: "November 2024",
    description: "Evaluated anchorage blocks, steel cables rust layers, hanger connection configurations, and checked concrete bridge abutment cracking.",
    imageUrl: "/images/visit_bridge.png",
    category: "bridge"
  },
  {
    id: "visit-4",
    title: "Municipal Water Treatment Facility",
    location: "Labugama Reservoir Area, Sri Lanka",
    date: "February 2025",
    description: "Studied flow hydraulics across aeration basins, coagulant dosing chambers, sedimentation basins, and sand filter beds.",
    imageUrl: "/images/visit_water.png",
    category: "water"
  },
  {
    id: "visit-5",
    title: "Concrete Technology & Soil Mechanics Lab",
    location: "KDU University Laboratories",
    date: "Ongoing",
    description: "Conducted concrete cylinder compression testing, soil triaxial shear testing, permeability modeling, and grain size distributions.",
    imageUrl: "/images/kdu_lab.jpg",
    category: "laboratory"
  }
];

export const certificationsList: Certification[] = [
  {
    id: "cert-1",
    title: "Student Membership Confirmation",
    issuer: "Institution of Civil Engineers (ICE), UK",
    date: "2024",
    credentialId: "M-81347209",
    verificationUrl: "/certificates/ICE_Student_Membership.pdf",
    pdfUrl: "/certificates/ICE_Student_Membership.pdf"
  },
  {
    id: "cert-2",
    title: "Design of High-rise Buildings (CPD)",
    issuer: "Structural Design Institute",
    date: "2025",
    credentialId: "SDI-25C09-00003",
    verificationUrl: "/certificates/Design_of_High_Rise_Buildings_SAP2000.pdf",
    pdfUrl: "/certificates/Design_of_High_Rise_Buildings_SAP2000.pdf"
  },
  {
    id: "cert-3",
    title: "AI in Construction Technology Webinar",
    issuer: "Structural Design Institute",
    date: "2025",
    credentialId: "SDI-25W05-00049",
    verificationUrl: "/certificates/AI_in_Construction_Technology_Webinar.pdf",
    pdfUrl: "/certificates/AI_in_Construction_Technology_Webinar.pdf"
  },
  {
    id: "cert-4",
    title: "Precast Housing Solutions Hybrid Technical Talk",
    issuer: "Structural Design Institute",
    date: "2026",
    credentialId: "SDI-26W02-00087",
    verificationUrl: "/certificates/Precast_Housing_Solutions_Seminar.pdf",
    pdfUrl: "/certificates/Precast_Housing_Solutions_Seminar.pdf"
  },
  {
    id: "cert-5",
    title: "Basics of Engineering Management",
    issuer: "Alison Learning",
    date: "2026",
    credentialId: "AL-5530-52274874",
    verificationUrl: "/certificates/Basics_of_Engineering_Management.pdf",
    pdfUrl: "/certificates/Basics_of_Engineering_Management.pdf"
  },
  {
    id: "cert-6",
    title: "Site Management Safety Training Scheme (SMSTS)",
    issuer: "Alison Learning",
    date: "2026",
    credentialId: "AL-5758-52274874",
    verificationUrl: "/certificates/Site_Management_Safety_Training.pdf",
    pdfUrl: "/certificates/Site_Management_Safety_Training.pdf"
  },
  {
    id: "cert-7",
    title: "Introduction to Structural Mechanics",
    issuer: "SCEL University",
    date: "2024",
    credentialId: "SCEL-W1-160",
    verificationUrl: "/certificates/Introduction_to_Structural_Mechanics.pdf",
    pdfUrl: "/certificates/Introduction_to_Structural_Mechanics.pdf"
  },
  {
    id: "cert-8",
    title: "Accelerating Manuscript Preparation using AI",
    issuer: "SCEL Webinar Series",
    date: "2024",
    credentialId: "SCEL-WEB-117",
    verificationUrl: "/certificates/AI_Manuscript_Preparation_Webinar.pdf",
    pdfUrl: "/certificates/AI_Manuscript_Preparation_Webinar.pdf"
  },
  {
    id: "cert-9",
    title: "Concrete Mix Design & Rheology",
    issuer: "Industrial Webinar Program",
    date: "2024",
    credentialId: "WEB-05-18",
    verificationUrl: "/certificates/Concrete_Mix_Design_and_Rheology.pdf",
    pdfUrl: "/certificates/Concrete_Mix_Design_and_Rheology.pdf"
  },
  {
    id: "cert-10",
    title: "Geotechnical Site Investigation Certificate",
    issuer: "National Engineering Council",
    date: "2025",
    credentialId: "NEC-GEO-29",
    verificationUrl: "/certificates/Geotechnical_Site_Investigation.pdf",
    pdfUrl: "/certificates/Geotechnical_Site_Investigation.pdf"
  },
  {
    id: "cert-11",
    title: "Introduction to Prestressed Concrete",
    issuer: "Continuous Professional Development Program",
    date: "2026",
    credentialId: "CPD-PC-2026",
    verificationUrl: "/certificates/Introduction_to_Prestressed_Concrete.pdf",
    pdfUrl: "/certificates/Introduction_to_Prestressed_Concrete.pdf"
  },
  {
    id: "cert-12",
    title: "Introduction to Highway Design",
    issuer: "Institution of Civil Engineers - UK (SLAICE)",
    date: "2025",
    credentialId: "SLAICE-HD-2025",
    verificationUrl: "/certificates/Introduction_to_Highway_Design.pdf",
    pdfUrl: "/certificates/Introduction_to_Highway_Design.pdf"
  },
  {
    id: "cert-13",
    title: "AutoCAD CAD Workshop Certificate",
    issuer: "Faculty of Engineering, KDU",
    date: "2025",
    credentialId: "KDU-CAD-2025",
    verificationUrl: "/certificates/CAD_Workshop_Certificate.pdf",
    pdfUrl: "/certificates/CAD_Workshop_Certificate.pdf"
  },
  {
    id: "cert-14",
    title: "Floating City Design Workshop",
    issuer: "Faculty of Engineering, KDU",
    date: "2025",
    credentialId: "KDU-FC-2025",
    verificationUrl: "/certificates/Floating_City_Design_Workshop.pdf",
    pdfUrl: "/certificates/Floating_City_Design_Workshop.pdf"
  },
  {
    id: "cert-15",
    title: "Mathematical Society Membership",
    issuer: "KDU Engineering Mathematical Society",
    date: "2024",
    credentialId: "EMS-MEMBER-24",
    verificationUrl: "/certificates/Mathematical_Society_Membership.pdf",
    pdfUrl: "/certificates/Mathematical_Society_Membership.pdf"
  },
  {
    id: "cert-16",
    title: "MATLAB Fundamentals Course Completion",
    issuer: "MathWorks",
    date: "2024",
    credentialId: "MW-MATLAB-102",
    verificationUrl: "/certificates/MATLAB_Fundamentals_Course.pdf",
    pdfUrl: "/certificates/MATLAB_Fundamentals_Course.pdf"
  },
  {
    id: "cert-17",
    title: "WS2_34 Workshop Certificate",
    issuer: "Faculty of Engineering, KDU",
    date: "2025",
    credentialId: "KDU-WS-34",
    verificationUrl: "/certificates/WS2_34_Workshop_Certificate.pdf",
    pdfUrl: "/certificates/WS2_34_Workshop_Certificate.pdf"
  }
];

export const achievementsList: Achievement[] = [
  {
    id: "ach-1",
    title: "Dean's List Recognition",
    awarder: "Faculty of Engineering, KDU",
    date: "2024 & 2025",
    description: "Awarded for maintaining top academic standing (GPA > 3.8) in consecutive semesters in Civil Engineering."
  },
  {
    id: "ach-2",
    title: "Outstanding Surveying Team Award",
    awarder: "KDU Survey Faculty Board",
    date: "2024",
    description: "Recognized as the best team coordinator during the KDU Survey Camp, delivering high-precision leveling and road designs on schedule."
  },
  {
    id: "ach-3",
    title: "National Concrete Design Challenge - Finalist",
    awarder: "Sri Lanka Concrete Association",
    date: "2025",
    description: "Led the university team in designing an ultra-high strength concrete mix incorporating waste silica fumes, achieving 90MPa compressive strength."
  }
];

export const galleryList: GalleryItem[] = [
  { id: "g-1", title: "Establishing Traverse Benchmarks", category: "survey", imageUrl: "/images/survey_site.jpg" },
  { id: "g-2", title: "Slump Testing of Foundation Concrete", category: "lab", imageUrl: "/images/visit_building.png" },
  { id: "g-3", title: "Aerial Drone Mapping of Survey Site", category: "drone", imageUrl: "/images/survey_site.jpg" },
  { id: "g-4", title: "Concrete Cylinder Compressive Failure Test", category: "lab", imageUrl: "/images/kdu_lab.jpg" },
  { id: "g-5", title: "Site Inspection: Column Rebar Layouts", category: "construction", imageUrl: "/images/visit_building.png" },
  { id: "g-6", title: "Highway Curve Corridor Visuals", category: "infrastructure", imageUrl: "/images/highway.png" },
  { id: "g-7", title: "Hydrology Catchment Runoff Mapping", category: "research", imageUrl: "/images/groundwater.png" },
  { id: "g-8", title: "KDU Engineering Faculty Life", category: "university", imageUrl: "/images/kdu_lab.jpg" },
  { id: "g-9", title: "Site Visit: Sedimentation Tank Aerators", category: "visits", imageUrl: "/images/visit_water.png" }
];

export const blogPosts: BlogPost[] = [
  {
    id: "post-1",
    title: "Understanding Finite Element Analysis in Concrete Designs",
    excerpt: "A deep dive into discretization error and meshing algorithms for plate and shell elements in structural modeling.",
    content: `
Finite Element Analysis (FEA) has revolutionized structural engineering, enabling the simulation of complex geometries and load conditions that were once mathematically intractable. For reinforced concrete (RC) slabs, FEA provides a detailed map of bending moments and shear stresses.

### The Challenge of Concrete Heterogeneity
Unlike steel, which is homogeneous and isotropic, concrete is highly complex:
1. **Cracking Behavior**: Concrete has low tensile strength and cracks under load, redistributing stresses.
2. **Rebar Interaction**: Steel reinforcement adds anisotropic stiffness properties.
3. **Time-Dependent Effects**: Creep and shrinkage modify deflection characteristics over years.

### Discretization and Meshing Strategies
When modeling RC structures in programs like SAP2000 or ETABS, mesh sizing is critical. A coarse mesh saves computational time but underestimates peak stresses near point loads. A hyper-fine mesh yields high accuracy but risks computational divergence.

An optimal mesh size for standard slabs is typically equal to the slab thickness ($h$). This balances flexural gradient mapping with node computation limits.
    `,
    date: "June 25, 2025",
    readTime: "6 min read",
    category: "Structural Analysis"
  },
  {
    id: "post-2",
    title: "Hydrological Delineations Using Open-Source QGIS Frameworks",
    excerpt: "Step-by-step workflow for delineating catchment watersheds using DEM files and SAGA hydrological toolsets.",
    content: `
Delineating catchment areas is the first step in hydrological design. Whether sizing a box culvert or planning a reservoir drainage system, knowing the tributary runoff area is critical.

### The GIS Workflow
Using QGIS and a digital elevation model (DEM) from SRTM data:
1. **Fill Sinks**: Remove elevation errors in the DEM to ensure continuous flow.
2. **Flow Direction**: Calculate the flow path of water across cells.
3. **Flow Accumulation**: Find cells where water accumulates, defining drainage networks.
4. **Watershed Delineation**: Specify a pour point (e.g. culvert coordinate) to isolate the contributing watershed.

### Calibrating Runoff Coefficients
Runoff rates are highly dependent on land cover. Using GIS spatial layers, we can intersect soils data with watershed boundaries to calculate a weighted rational runoff coefficient ($C$), reducing manual estimation errors.
    `,
    date: "April 18, 2025",
    readTime: "8 min read",
    category: "Hydrology"
  },
  {
    id: "post-3",
    title: "My Survey Camp Experience: Field Insights for Future Engineers",
    excerpt: "Key learnings from the intensive KDU Survey Camp, bridging theoretical equations with physical topographic mapping.",
    content: `
Ask any senior civil engineer and they will remember their survey camp. For two weeks, the classroom is replaced with tropical field sites, total stations, and levels.

### The Practical Gap
In exams, traverse adjustments resolve in minutes on a calculator. In the field, you discover:
- **Atmospheric refraction** that distorts optical readings.
- **Vegetation blockages** that require strategic control point placements.
- **Human error** in optical leveling loops that force you to repeat loops at sunset.

Coordinating a team under Sri Lankan weather conditions teaches valuable management skills. It reinforces that engineering data begins with raw, hard-won physical measurements.
    `,
    date: "December 12, 2024",
    readTime: "5 min read",
    category: "University Life"
  }
];
