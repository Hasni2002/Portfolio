import type { PortfolioData } from '../types';

export const portfolioData: PortfolioData = {
  personal: {
    name: "HASNI AHAMED",
    role: "Civil Engineering Undergraduate",
    tagline: "Designing resilient infrastructure. Building sustainable communities. Engineering tomorrow.",
    bio: "I am a highly driven Civil Engineering undergraduate at General Sir John Kotelawala Defence University, seeking opportunities in structural and geotechnical design to utilize my computational modeling, FEM, and project management skills in global consultancy environments. My mission is to apply computational mechanics and sustainable design principles to engineer resilient infrastructure that harmonizes with the environment and empowers local communities.",
    email: "hasni@example.com",
    github: "https://github.com/Hasni2002",
    linkedin: "https://www.linkedin.com/in/hasniahamed",
    profileImage: "/images/hasni.jpg",
  },
  education: [
    {
      id: "edu-1",
      degree: "BSc (Hons) in Engineering in Civil Engineering",
      institution: "General Sir John Kotelawala Defence University, Sri Lanka",
      period: "2022 - Present",
      description: "Dean's List / Highly Competitive Performance. Key modules include Structural Analysis, Reinforced Concrete Design, Soil Mechanics & Geotechnical Engineering, Hydraulics & Hydrology, Highway & Transportation Engineering, Environmental Engineering, and Computational Methods & FEA."
    },
    {
      id: "edu-2",
      degree: "GCE Advanced Level (Physical Science Stream)",
      institution: "High School, Sri Lanka",
      period: "2020",
      description: "Achieved A Grades in Mathematics & Physics. Key subjects: Combined Mathematics, Physics, Chemistry."
    }
  ],
  skills: [
    {
      title: "Core Engineering",
      skills: [
        { name: "Structural Engineering", level: 85 },
        { name: "Transportation Engineering", level: 75 },
        { name: "Environmental Engineering", level: 80 },
        { name: "Construction Management", level: 82 },
        { name: "Surveying", level: 90 },
        { name: "Hydrology", level: 78 },
        { name: "Geotechnical Engineering", level: 80 },
        { name: "Finite Element Analysis", level: 83 }
      ]
    },
    {
      title: "Software Skills",
      skills: [
        { name: "AutoCAD", level: 95 },
        { name: "Civil 3D", level: 85 },
        { name: "Revit", level: 80 },
        { name: "SAP2000", level: 85 },
        { name: "ETABS", level: 82 },
        { name: "MATLAB", level: 78 },
        { name: "Python", level: 80 },
        { name: "QGIS", level: 75 }
      ]
    }
  ],
  projects: [
    {
      id: "survey-camp",
      title: "Engineering Survey Camp - KDU",
      category: "Surveying & Road Alignment",
      description: "An intensive two-week practical surveying camp conducted in Sri Lanka, focusing on establishing geodetic control networks, topographic mapping, and road alignment design.",
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
        { formula: "e + f = v² / (gR)", description: "Superelevation equation to balance lateral centrifugal force on curves.", result: "e = 5.5% (for v = 40 km/h, R = 120m)" },
        { formula: "Correction = ΣEL × (Li / ΣL)", description: "Bowditch Traverse adjustment for linear errors.", result: "Error closed to within 1:10,000 accuracy limit." }
      ],
      techStack: ["Civil 3D", "AutoCAD", "Microsoft Excel"],
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
      imageUrl: "/images/hero.jpeg",
      githubUrl: "https://github.com/Hasni2002",
      reportPdfUrl: "/certificates/CAD_Workshop_Certificate.pdf"
    },
    {
      id: "groundwater-research",
      title: "Groundwater Modeling & Aquifer Simulation",
      category: "Hydrology & Geotechnical Research",
      description: "Computational research analyzing groundwater flow dynamics and aquifer depletion rates in the northern dry zone of Sri Lanka using finite difference modeling.",
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
        { formula: "s = (Q / 4πT) W(u)", description: "Theis equation for transient groundwater flow in a confined aquifer.", result: "Drawdown s = 2.4m at radial distance of 50m." },
        { formula: "T = K × D", description: "Aquifer transmissivity calculated from hydraulic conductivity and thickness.", result: "T = 145 m²/day" }
      ],
      techStack: ["MATLAB", "Python", "QGIS"],
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
      imageUrl: "/images/groundwater.png",
      githubUrl: "https://github.com/Hasni2002",
      reportPdfUrl: "/certificates/MATLAB_Fundamentals_Course.pdf"
    },
    {
      id: "structural-design",
      title: "Seismic Optimization of Multi-Story Concrete Structure",
      category: "Structural Engineering",
      description: "Structural design and seismic evaluation of a G+8 residential building conforming to Eurocode 2 and Eurocode 8 design guidelines.",
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
        { formula: "T₁ = 0.075 × H^(3/4)", description: "Empirical formula for fundamental natural period of concrete buildings.", result: "T₁ = 0.88 seconds (Building Height H = 27m)" },
        { formula: "M_Ed ≤ M_Rd", description: "Eurocode 2 ultimate limit state moment capacity comparison.", result: "M_Rd = 340 kNm > M_Ed = 295 kNm (Safe)" }
      ],
      techStack: ["ETABS", "SAP2000", "AutoCAD", "Revit"],
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
      imageUrl: "/images/structural.png",
      githubUrl: "https://github.com/Hasni2002",
      reportPdfUrl: "/certificates/Design_of_High_Rise_Buildings_SAP2000.pdf"
    },
    {
      id: "transportation-engineering",
      title: "Highway Intersection & Pavement Design Project",
      category: "Transportation Engineering",
      description: "Comprehensive layout planning and structural pavement design for a dual-carriageway collector highway linking industrial zones.",
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
        { formula: "ESAL = N × G_t × F_d × G_f", description: "Design traffic estimation formula for pavement lifespan.", result: "ESAL = 1.25 × 10^7 load repetitions." },
        { formula: "SN = a₁D₁ + a₂D₂m₂ + a₃D₃m₃", description: "AASHTO structural number equation for layer sizing.", result: "SN = 4.2 (Asphalt = 4\", Base = 6\", Subbase = 8\")" }
      ],
      techStack: ["Civil 3D", "MS Excel", "AutoCAD"],
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
      imageUrl: "/images/highway.png",
      githubUrl: "https://github.com/Hasni2002",
      reportPdfUrl: "/certificates/Introduction_to_Highway_Design.pdf"
    }
  ],
  research: [
    {
      id: "groundwater-dynamics",
      title: "Computational Analysis of Aquifer Recharge Dynamics in Heterogeneous Geotechnical Profiles",
      abstract: "This study explores groundwater flow rates through highly variable soil layers using finite difference approximations. By analyzing borehole datasets from Sri Lanka, we mapped vertical hydraulic conductivities and modeled fluid flow patterns. The paper presents drawdown behaviors, aquifer recharging profiles, and evaluates sustainable water usage limits for deep tube-well installations.",
      keywords: ["Groundwater Hydrology", "Aquifer Modeling", "Finite Difference Method", "Geotechnical Characterization", "Sustainable Extraction"],
      researchArea: "Geotechnical Hydrology & Computational Hydraulics",
      technicalReportUrl: "/certificates/MATLAB_Fundamentals_Course.pdf",
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
      conferencePaper: "IESL Student Session (Abstract Accepted)",
      futureScope: [
        "Incorporate chemical admixture interaction variables in the training set.",
        "Verify model outputs on ultra-high-performance concrete (UHPC) mixtures.",
        "Develop a desktop GUI for onsite concrete mix adjustments."
      ]
    }
  ],
  experience: [
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
  ],
  siteVisits: [
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
    }
  ],
  certificates: [
    { id: "cert-1", title: "Student Membership Confirmation", issuer: "Institution of Civil Engineers (ICE), UK", date: "2024", url: "/certificates/ICE_Student_Membership.pdf" },
    { id: "cert-2", title: "Design of High-rise Buildings (CPD)", issuer: "Structural Design Institute", date: "2025", url: "/certificates/Design_of_High_Rise_Buildings_SAP2000.pdf" },
    { id: "cert-3", title: "AI in Construction Technology Webinar", issuer: "Structural Design Institute", date: "2025", url: "/certificates/AI_in_Construction_Technology_Webinar.pdf" },
    { id: "cert-4", title: "Precast Housing Solutions Hybrid Technical Talk", issuer: "Structural Design Institute", date: "2026", url: "/certificates/Precast_Housing_Solutions_Seminar.pdf" },
    { id: "cert-5", title: "Basics of Engineering Management", issuer: "Alison Learning", date: "2026", url: "/certificates/Basics_of_Engineering_Management.pdf" },
    { id: "cert-6", title: "Site Management Safety Training Scheme (SMSTS)", issuer: "Alison Learning", date: "2026", url: "/certificates/Site_Management_Safety_Training.pdf" },
    { id: "cert-7", title: "Introduction to Structural Mechanics", issuer: "SCEL University", date: "2024", url: "/certificates/Introduction_to_Structural_Mechanics.pdf" },
    { id: "cert-8", title: "Accelerating Manuscript Preparation using AI", issuer: "SCEL Webinar Series", date: "2024", url: "/certificates/AI_Manuscript_Preparation_Webinar.pdf" },
    { id: "cert-9", title: "Concrete Mix Design & Rheology", issuer: "Industrial Webinar Program", date: "2024", url: "/certificates/Concrete_Mix_Design_and_Rheology.pdf" },
    { id: "cert-10", title: "Geotechnical Site Investigation Certificate", issuer: "National Engineering Council", date: "2025", url: "/certificates/Geotechnical_Site_Investigation.pdf" },
    { id: "cert-11", title: "Introduction to Prestressed Concrete", issuer: "Continuous Professional Development Program", date: "2026", url: "/certificates/Introduction_to_Prestressed_Concrete.pdf" },
    { id: "cert-12", title: "Introduction to Highway Design", issuer: "Institution of Civil Engineers - UK (SLAICE)", date: "2025", url: "/certificates/Introduction_to_Highway_Design.pdf" },
    { id: "cert-13", title: "AutoCAD CAD Workshop Certificate", issuer: "Faculty of Engineering, KDU", date: "2025", url: "/certificates/CAD_Workshop_Certificate.pdf" },
    { id: "cert-14", title: "Floating City Design Workshop", issuer: "Faculty of Engineering, KDU", date: "2025", url: "/certificates/Floating_City_Design_Workshop.pdf" },
    { id: "cert-15", title: "Mathematical Society Membership", issuer: "KDU Engineering Mathematical Society", date: "2024", url: "/certificates/Mathematical_Society_Membership.pdf" },
    { id: "cert-16", title: "MATLAB Fundamentals Course Completion", issuer: "MathWorks", date: "2024", url: "/certificates/MATLAB_Fundamentals_Course.pdf" },
    { id: "cert-17", title: "WS2_34 Workshop Certificate", issuer: "Faculty of Engineering, KDU", date: "2025", url: "/certificates/WS2_34_Workshop_Certificate.pdf" }
  ]
};
