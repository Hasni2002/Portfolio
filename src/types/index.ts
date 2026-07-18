export interface ProjectCalculations {
  formula: string;
  description: string;
  result: string;
}

export interface Project {
  id: string;
  title: string;
  category?: string;
  description: string;
  techStack: string[];
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
  objectives?: string[];
  problemStatement?: string;
  methodology?: string[];
  calculations?: ProjectCalculations[];
  constructionProcess?: string[];
  gallery?: string[];
  results?: string;
  lessonsLearned?: string[];
  futureImprovements?: string[];
  reportPdfUrl?: string;
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

export interface SiteVisit {
  id: string;
  title: string;
  location: string;
  date: string;
  description: string;
  imageUrl: string;
  category: 'construction' | 'bridge' | 'water' | 'geotech' | 'laboratory' | 'survey';
}

export interface Experience {
  id: string;
  role: string;
  organization: string;
  period: string;
  description: string[];
  category: 'internship' | 'leadership' | 'training' | 'volunteer';
}

export interface Skill {
  name: string;
  level: number; // 0 to 100
  icon?: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date?: string;
  url?: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  description?: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    role: string;
    tagline: string;
    bio: string;
    email: string;
    github: string;
    linkedin: string;
    profileImage?: string;
  };
  education: Education[];
  skills: SkillCategory[];
  projects: Project[];
  certificates: Certificate[];
  research: ResearchPaper[];
  siteVisits: SiteVisit[];
  experience: Experience[];
}
