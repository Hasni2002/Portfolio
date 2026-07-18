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
      id: "proj-1",
      title: "Engineering Survey Camp",
      description: "An intensive two-week practical surveying camp conducted in Sri Lanka, focusing on establishing geodetic control networks, topographic mapping, and road alignment design.",
      techStack: ["Civil 3D", "AutoCAD", "Microsoft Excel"],
      imageUrl: "/images/hero.jpeg",
      githubUrl: "https://github.com/Hasni2002",
    },
    {
      id: "proj-2",
      title: "Groundwater Modeling & Aquifer Simulation",
      description: "Computational research analyzing groundwater flow dynamics and aquifer depletion rates in the northern dry zone of Sri Lanka using finite difference modeling.",
      techStack: ["MATLAB", "Python", "QGIS"],
      imageUrl: "/images/groundwater.png",
      githubUrl: "https://github.com/Hasni2002",
    },
    {
      id: "proj-3",
      title: "Seismic Optimization of Multi-Story Concrete Structure",
      description: "Structural design and seismic evaluation of a G+8 residential building conforming to Eurocode 2 and Eurocode 8 design guidelines.",
      techStack: ["ETABS", "SAP2000", "AutoCAD", "Revit"],
      imageUrl: "/images/structural.png",
      githubUrl: "https://github.com/Hasni2002",
    },
    {
      id: "proj-4",
      title: "Highway Intersection & Pavement Design Project",
      description: "Comprehensive layout planning and structural pavement design for a dual-carriageway collector highway linking industrial zones.",
      techStack: ["Civil 3D", "MS Excel", "AutoCAD"],
      imageUrl: "/images/highway.png",
      githubUrl: "https://github.com/Hasni2002",
    }
  ],
  certificates: [
    {
      id: "cert-1",
      title: "Student Membership Confirmation",
      issuer: "Institution of Civil Engineers (ICE), UK",
      date: "2024",
      url: "/certificates/ICE_Student_Membership.pdf"
    },
    {
      id: "cert-2",
      title: "Design of High-rise Buildings (CPD)",
      issuer: "Structural Design Institute",
      date: "2025",
      url: "/certificates/Design_of_High_Rise_Buildings_SAP2000.pdf"
    },
    {
      id: "cert-3",
      title: "AI in Construction Technology Webinar",
      issuer: "Structural Design Institute",
      date: "2025",
      url: "/certificates/AI_in_Construction_Technology_Webinar.pdf"
    },
    {
      id: "cert-4",
      title: "Precast Housing Solutions Hybrid Technical Talk",
      issuer: "Structural Design Institute",
      date: "2026",
      url: "/certificates/Precast_Housing_Solutions_Seminar.pdf"
    },
    {
      id: "cert-5",
      title: "Basics of Engineering Management",
      issuer: "Alison Learning",
      date: "2026",
      url: "/certificates/Basics_of_Engineering_Management.pdf"
    },
    {
      id: "cert-6",
      title: "Site Management Safety Training Scheme (SMSTS)",
      issuer: "Alison Learning",
      date: "2026",
      url: "/certificates/Site_Management_Safety_Training.pdf"
    },
    {
      id: "cert-7",
      title: "Introduction to Structural Mechanics",
      issuer: "SCEL University",
      date: "2024",
      url: "/certificates/Introduction_to_Structural_Mechanics.pdf"
    },
    {
      id: "cert-8",
      title: "Accelerating Manuscript Preparation using AI",
      issuer: "SCEL Webinar Series",
      date: "2024",
      url: "/certificates/AI_Manuscript_Preparation_Webinar.pdf"
    },
    {
      id: "cert-9",
      title: "Concrete Mix Design & Rheology",
      issuer: "Industrial Webinar Program",
      date: "2024",
      url: "/certificates/Concrete_Mix_Design_and_Rheology.pdf"
    },
    {
      id: "cert-10",
      title: "Geotechnical Site Investigation Certificate",
      issuer: "National Engineering Council",
      date: "2025",
      url: "/certificates/Geotechnical_Site_Investigation.pdf"
    },
    {
      id: "cert-11",
      title: "Introduction to Prestressed Concrete",
      issuer: "Continuous Professional Development Program",
      date: "2026",
      url: "/certificates/Introduction_to_Prestressed_Concrete.pdf"
    },
    {
      id: "cert-12",
      title: "Introduction to Highway Design",
      issuer: "Institution of Civil Engineers - UK (SLAICE)",
      date: "2025",
      url: "/certificates/Introduction_to_Highway_Design.pdf"
    },
    {
      id: "cert-13",
      title: "AutoCAD CAD Workshop Certificate",
      issuer: "Faculty of Engineering, KDU",
      date: "2025",
      url: "/certificates/CAD_Workshop_Certificate.pdf"
    },
    {
      id: "cert-14",
      title: "Floating City Design Workshop",
      issuer: "Faculty of Engineering, KDU",
      date: "2025",
      url: "/certificates/Floating_City_Design_Workshop.pdf"
    },
    {
      id: "cert-15",
      title: "Mathematical Society Membership",
      issuer: "KDU Engineering Mathematical Society",
      date: "2024",
      url: "/certificates/Mathematical_Society_Membership.pdf"
    },
    {
      id: "cert-16",
      title: "MATLAB Fundamentals Course Completion",
      issuer: "MathWorks",
      date: "2024",
      url: "/certificates/MATLAB_Fundamentals_Course.pdf"
    },
    {
      id: "cert-17",
      title: "WS2_34 Workshop Certificate",
      issuer: "Faculty of Engineering, KDU",
      date: "2025",
      url: "/certificates/WS2_34_Workshop_Certificate.pdf"
    }
  ]
};
