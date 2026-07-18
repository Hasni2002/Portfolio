import type { PortfolioData } from '../types';
import profileImg from '../assets/images/profile.png';

export const portfolioData: PortfolioData = {
  personal: {
    name: "HASNI AHAMED",
    role: "Civil Engineer Intern",
    tagline: "Designing resilient infrastructure. Building sustainable communities. Engineering tomorrow.",
    bio: "Motivated and detail-oriented Civil Engineering undergraduate at General Sir John Kotelawala Defence University, with hands-on exposure to structural analysis, surveying, and design software gained through academic projects and competitions. Possesses a solid foundation in engineering principles, complemented by strong analytical, problem-solving and teamwork skills developed through active participation in professional societies and extracurricular activities. Eager to secure an internship placement to apply theoretical knowledge to practical engineering challenges while contributing positively to a professional engineering environment.",
    email: "swrd119@gmail.com",
    phone: "+94 741860010",
    github: "https://github.com/Hasni2002",
    linkedin: "https://www.linkedin.com/in/hasniahamed",
    profileImage: profileImg,
  },
  education: [
    {
      id: "edu-1",
      degree: "BSc (Hons) in Engineering in Civil Engineering",
      institution: "General Sir John Kotelawala Defence University, Sri Lanka",
      period: "2024 - Present",
      description: "Dean's List / Highly Competitive Performance. Key modules include Structural Analysis, Reinforced Concrete Design, Soil Mechanics & Geotechnical Engineering, Hydraulics & Hydrology, Highway & Transportation Engineering, Environmental Engineering, and Computational Methods & FEA."
    },
    {
      id: "edu-2",
      degree: "GCE Advanced Level (Physical Science Stream)",
      institution: "KM/KM/Shams Central College, Sri Lanka",
      period: "2020",
      description: "Achieved A Grades in Mathematics & Physics. Key subjects: Combined Mathematics, Physics, Chemistry."
    }
  ],
  skills: [
    {
      title: "Technical Competencies",
      skills: [
        { name: "AutoCAD", level: 90 },
        { name: "SolidWorks", level: 85 },
        { name: "LaTeX", level: 80 },
        { name: "MATLAB", level: 85 },
        { name: "SAP2000", level: 80 },
        { name: "ABAQUS", level: 75 },
        { name: "Python", level: 85 },
        { name: "MS Excel & MS Office", level: 95 }
      ]
    },
    {
      title: "Personal Skills",
      skills: [
        { name: "Presentation & Reporting", level: 90 },
        { name: "Decision Making & Adaptability", level: 90 },
        { name: "Problem Solving & Teamwork", level: 95 },
        { name: "Leadership & Analytical Thinking", level: 90 },
        { name: "Emotional Intelligence", level: 85 },
        { name: "Critical Thinking", level: 85 }
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
        "/Portfolio/images/hero.jpeg",
        "/Portfolio/projects/survey-camp/images/WhatsApp Image 2026-07-18 at 12.00.37 PM.jpeg",
        "/Portfolio/projects/survey-camp/images/WhatsApp Image 2026-07-18 at 12.00.38 PM.jpeg",
        "/Portfolio/projects/survey-camp/images/WhatsApp Image 2026-07-18 at 12.01.02 PM.jpeg",
        "/Portfolio/projects/survey-camp/images/WhatsApp Image 2026-07-18 at 12.03.01 PM.jpeg",
        "/Portfolio/projects/survey-camp/images/WhatsApp Image 2026-07-18 at 12.03.02 PM.jpeg",
        "/Portfolio/projects/survey-camp/images/WhatsApp Image 2026-07-18 at 12.03.29 PM.jpeg",
        "/Portfolio/projects/survey-camp/images/WhatsApp Image 2026-07-18 at 12.04.13 PM.jpeg",
        "/Portfolio/projects/survey-camp/images/WhatsApp Image 2026-07-18 at 12.05.36 PM (1).jpeg",
        "/Portfolio/projects/survey-camp/images/WhatsApp Image 2026-07-18 at 12.05.36 PM (2).jpeg",
        "/Portfolio/projects/survey-camp/images/WhatsApp Image 2026-07-18 at 12.05.36 PM.jpeg",
        "/Portfolio/projects/survey-camp/images/WhatsApp Image 2026-07-18 at 12.05.37 PM.jpeg",
        "/Portfolio/projects/survey-camp/images/WhatsApp Image 2026-07-18 at 12.05.44 PM.jpeg",
        "/Portfolio/projects/survey-camp/images/WhatsApp Image 2026-07-18 at 12.06.00 PM.jpeg"
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
      imageUrl: "/Portfolio/images/hero.jpeg",
      githubUrl: "https://github.com/Hasni2002",
      documents: [
        { title: "Detail Drawing", url: "/Portfolio/projects/survey-camp/documents/01-DETAIL DRAWING-Layout1.pdf" },
        { title: "Contour with Points", url: "/Portfolio/projects/survey-camp/documents/03 Contour with points-Layout1.pdf" },
        { title: "Contour on Detail", url: "/Portfolio/projects/survey-camp/documents/04 Contour on detail - Layout1.pdf" },
        { title: "All Stations", url: "/Portfolio/projects/survey-camp/documents/05 ALL stations-Layout1.pdf" },
        { title: "Propose Plan", url: "/Portfolio/projects/survey-camp/documents/06 PROPOSE PLAN-Layout3.pdf" },
        { title: "Propose Plan with Contour", url: "/Portfolio/projects/survey-camp/documents/07 PROPOSE PLAN - WITH CONTOUR-Layout1.pdf" },
        { title: "Longitudinal Section Final", url: "/Portfolio/projects/survey-camp/documents/08 LS FINAL-Layout2.pdf" },
        { title: "Cross Section 0000-0030", url: "/Portfolio/projects/survey-camp/documents/09 cs final-0000-0030.pdf" },
        { title: "Cross Section 0040-0070", url: "/Portfolio/projects/survey-camp/documents/10 cs final-0040-0070.pdf" },
        { title: "Cross Section 0080-0110", url: "/Portfolio/projects/survey-camp/documents/11 cs final-0080-0110.pdf" },
        { title: "Cross Section 0110-0130", url: "/Portfolio/projects/survey-camp/documents/12 cs final-0110-0130.pdf" },
        { title: "Contour with 0.1 Interval", url: "/Portfolio/projects/survey-camp/documents/contour with o.1 interval-Layout1.pdf" }
      ]
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
      gallery: ["/Portfolio/images/groundwater.png"],
      results: "Delineated critical drawdown zones and provided recommendations for maximum sustainable extraction limits, suggesting a 20% reduction in pumping during dry seasons to prevent seawater intrusion.",
      lessonsLearned: [
        "Aquifer heterogeneity complicates deterministic models; stochastic models represent field conditions better.",
        "Accurate boundaries (recharge sources) are key to stable numerical calculations."
      ],
      futureImprovements: [
        "Expand to a fully integrated MODFLOW model utilizing physical spatial grids.",
        "Integrate IoT-enabled real-time piezometric level sensors for model validation."
      ],
      imageUrl: "/Portfolio/images/groundwater.png",
      githubUrl: "https://github.com/Hasni2002",
      reportPdfUrl: "/Portfolio/certificates/MATLAB_Fundamentals_Course.pdf"
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
      gallery: ["/Portfolio/images/structural.png"],
      results: "Successfully designed structural members complying with structural safety rules. Shear wall optimizations reduced lateral top displacement by 32%, saving 12% in concrete material volumes.",
      lessonsLearned: [
        "Torsional modes of vibration must be avoided early in structural floor planning.",
        "Joint confinement details play a vital role in ensuring structural ductility."
      ],
      futureImprovements: [
        "Perform a non-linear push-over analysis to verify structural collapse margins.",
        "Introduce steel-concrete composite sections to reduce column dimensions."
      ],
      imageUrl: "/Portfolio/images/structural.png",
      githubUrl: "https://github.com/Hasni2002",
      reportPdfUrl: "/Portfolio/certificates/Design_of_High_Rise_Buildings_SAP2000.pdf"
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
      gallery: [
        "/Portfolio/images/highway.png",
        "/Portfolio/projects/highway-design/images/WhatsApp Image 2026-07-18 at 12.07.53 PM (1).jpeg",
        "/Portfolio/projects/highway-design/images/WhatsApp Image 2026-07-18 at 12.07.53 PM (2).jpeg",
        "/Portfolio/projects/highway-design/images/WhatsApp Image 2026-07-18 at 12.07.53 PM.jpeg",
        "/Portfolio/projects/highway-design/images/WhatsApp Image 2026-07-18 at 12.07.54 PM (1).jpeg",
        "/Portfolio/projects/highway-design/images/WhatsApp Image 2026-07-18 at 12.07.54 PM (2).jpeg",
        "/Portfolio/projects/highway-design/images/WhatsApp Image 2026-07-18 at 12.07.54 PM.jpeg"
      ],
      results: "Redesigned flexible pavement cross-section and drafted a channelized intersection layout with dedicated left-turn lanes, reducing delay times by 45%.",
      lessonsLearned: [
        "Drainage coefficient parameters drastically affect pavement thickness requirements.",
        "Vehicle classifications are non-linear variables; neglecting axle weights leads to premature failure."
      ],
      futureImprovements: [
        "Develop rigid concrete pavement options for high-temperature resistance.",
        "Simulate traffic flow using micro-simulation modeling tools (VISSIM)."
      ],
      imageUrl: "/Portfolio/images/highway.png",
      githubUrl: "https://github.com/Hasni2002",
      reportPdfUrl: "/Portfolio/certificates/Introduction_to_Highway_Design.pdf",
      documents: [
        { title: "HDP Group 3", url: "/Portfolio/projects/highway-design/documents/HDP Group 3.pdf" }
      ]
    },
    {
      id: "vertical-wind-turbine",
      title: "Vertical Axis Wind Turbine Project",
      category: "Renewable Energy Engineering",
      description: "Design, structural analysis, and prototyping of a Vertical Axis Wind Turbine (VAWT) optimized for low wind speed environments.",
      objectives: [
        "Design a robust and aerodynamic blade profile for optimal wind energy capture.",
        "Perform structural analysis to ensure stability under dynamic wind loads.",
        "Prototype and test the efficiency of the wind turbine model."
      ],
      problemStatement: "The need for efficient and compact renewable energy solutions for urban and low wind speed regions where traditional horizontal axis turbines are impractical.",
      methodology: [
        "Aerodynamic profiling and CAD modeling of the turbine blades.",
        "Material selection for weight reduction and structural integrity.",
        "Fabrication of the prototype and performance testing in simulated wind conditions."
      ],
      calculations: [],
      techStack: ["CAD Modeling", "Structural Analysis", "Renewable Energy Systems"],
      gallery: [
        "/Portfolio/projects/vertical-wind-turbine/images/WhatsApp Image 2026-07-18 at 12.08.41 PM.jpeg",
        "/Portfolio/projects/vertical-wind-turbine/images/WhatsApp Image 2026-07-18 at 12.09.26 PM.jpeg",
        "/Portfolio/projects/vertical-wind-turbine/images/WhatsApp Image 2026-07-18 at 12.09.27 PM.jpeg"
      ],
      results: "Successfully designed and prototyped a functional Vertical Axis Wind Turbine capable of generating power at lower wind thresholds.",
      lessonsLearned: [
        "Balancing the turbine assembly is critical to reducing vibration and mechanical wear.",
        "Blade pitch angle significantly impacts the start-up torque of vertical turbines."
      ],
      futureImprovements: [
        "Implement a smart braking system to prevent over-speeding during storms.",
        "Integrate a more efficient alternator to increase power output conversion."
      ],
      imageUrl: "/Portfolio/projects/vertical-wind-turbine/images/WhatsApp Image 2026-07-18 at 12.08.41 PM.jpeg",
      githubUrl: "https://github.com/Hasni2002",
      documents: [
        { title: "Final VAWT Report", url: "/Portfolio/projects/vertical-wind-turbine/documents/final VAWT.pdf" }
      ]
    }
  ],
  research: [
    {
      id: "soil-structure-interaction",
      title: "Performance of Quad 4 Elements in Soil-Structure Interaction",
      abstract: "This study investigates the computational accuracy and efficiency of 4-node quadrilateral (Quad-4) elements in finite element modeling of soil-structure interaction (SSI). By simulating foundation settlements and stress distributions under various loading conditions, the research highlights the shear locking phenomena in standard Quad-4 formulations and evaluates enhanced assumed strain methods in computational mechanics to mitigate stiffness overestimation.",
      keywords: ["Finite Element Method", "Computational Mechanics", "Soil-Structure Interaction", "Quad-4 Elements", "Shear Locking", "Geotechnical Engineering"],
      researchArea: "Computational Mechanics & Geotechnical Engineering",
      technicalReportUrl: "#",
      conferencePaper: "Under Preparation",
      futureScope: [
        "Extend the analysis to higher-order elements (e.g., Quad-8) for comparative accuracy.",
        "Implement non-linear constitutive soil models to simulate elastoplastic behavior.",
        "Analyze dynamic soil-structure interaction under seismic loading conditions."
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
      role: "Student Member",
      organization: "ASCE, ICE (UK), IStructE",
      period: "Present",
      description: [
        "Student Member, American Society of Civil Engineers (ASCE)",
        "Student Member, Institution of Civil Engineers (ICE), UK",
        "Student Member, Institution of Structural Engineers (IStructE)"
      ],
      category: "leadership"
    },
    {
      id: "exp-3",
      role: "Executive Member & Volunteer",
      organization: "KDU Societies & SEDS",
      period: "Present",
      description: [
        "Executive Member, Mathematical Society of KDU (2025)",
        "Member of Highway Engineering Society, Civil Engineering Society, Engineering Student Society",
        "Volunteer Member, Students for the Exploration and Development of Space (SEDS)"
      ],
      category: "volunteer"
    }
  ],
  siteVisits: [
    {
      id: "visit-1",
      title: "Multi-Story Commercial Building Site",
      location: "Colombo, Sri Lanka",
      date: "March 2025",
      description: "Inspected ready-mix concrete casting of a thick foundation slab. Observed structural reinforcement spacing, post-tensioning duct layouts, and concrete slump test quality audits.",
      imageUrl: "/Portfolio/images/visit_building.png",
      category: "construction"
    },
    {
      id: "visit-2",
      title: "Southern Highway Expansion Project",
      location: "Galle-Matara Link, Sri Lanka",
      date: "July 2024",
      description: "Studied roadbed preparation, sub-grade soil compaction, bituminous layer spreading, and embankment slope stabilization utilizing geotextile sheets.",
      imageUrl: "/Portfolio/images/highway.png",
      category: "construction"
    },
    {
      id: "visit-3",
      title: "Suspension Bridge Inspection Site",
      location: "Central Province, Sri Lanka",
      date: "November 2024",
      description: "Evaluated anchorage blocks, steel cables rust layers, hanger connection configurations, and checked concrete bridge abutment cracking.",
      imageUrl: "/Portfolio/images/visit_bridge.png",
      category: "bridge"
    },
    {
      id: "visit-4",
      title: "Municipal Water Treatment Facility",
      location: "Labugama Reservoir Area, Sri Lanka",
      date: "February 2025",
      description: "Studied flow hydraulics across aeration basins, coagulant dosing chambers, sedimentation basins, and sand filter beds.",
      imageUrl: "/Portfolio/images/visit_water.png",
      category: "water"
    }
  ],
  certificates: [
    { id: "cert-1", title: "AutoCAD Workshop", issuer: "Highway Engineering Society of KDU", date: "2025" },
    { id: "cert-2", title: "Floating City Design Competition", issuer: "ASCE Student Chapter of NSBM Green University", date: "2025" },
    { id: "cert-3", title: "Design of High-Rise Buildings Course", issuer: "Structural Design Institute", date: "2026" },
    { id: "cert-4", title: "Applied Machine Learning in Civil Engineering", issuer: "University of Moratuwa", date: "2026" },
    { id: "cert-5", title: "Basics of Engineering Management", issuer: "Alison", date: "2026" },
    { id: "cert-6", title: "Site Management Safety Training Scheme (SMSTS)", issuer: "Alison", date: "2026" },
    { id: "cert-7", title: "Fundamental of MATLAB (Self-Paced Training)", issuer: "Math works", date: "2024" },
    { id: "cert-8", title: "Smarter, Stronger, Greener, AI enabled energy infrastructure", issuer: "gapHQ & Engineers Without Borders", date: "2026" },
    { id: "cert-9", title: "Behaviour of Ductile Detailing & Implementation Difficulties", issuer: "SSN - ICI Student Chapter (India)", date: "2026" },
    { id: "cert-10", title: "Introduction to Prestressed concrete design", issuer: "ICE - UK (SLAICE)", date: "2026" },
    { id: "cert-11", title: "Introduction to Highway design", issuer: "ICE - UK (SLAICE)", date: "2025" },
    { id: "cert-12", title: "Discover how structures withstand and extremes", issuer: "IAPS SL Chapter & gapHQ", date: "2026" },
    { id: "cert-13", title: "Accelerating manuscript preparation using AI", issuer: "IAPS SL Chapter & gapHQ", date: "2026" },
    { id: "cert-14", title: "AI in Construction Technology", issuer: "SDI", date: "2025" },
    { id: "cert-15", title: "Pre-Cast Housing Solutions – Immediate Response for Disasters", issuer: "SDI", date: "2026" },
    { id: "cert-16", title: "Humanitarian Engineering, Building a Better World", issuer: "gapHQ & Engineers Without Borders", date: "2026" },
    { id: "cert-17", title: "Research Into Words; Writing Clear and Effective Abstracts", issuer: "gapHQ & Engineers Without Borders", date: "2026" }
  ]
};
