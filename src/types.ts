/**
 * TypeScript type definitions for the resume data used throughout the portfolio.
 * All shapes are derived from the original resumeData.js structure.
 */

export interface SocialLink {
  name: string;
  url: string;
  className: string;
}

export interface Education {
  UniversityName: string;
  specialization: string;
  MonthOfPassing: string;
  YearOfPassing: string;
  Achievements: string;
}

export interface WorkHistory {
  CompanyName: string;
  specialization: string;
  MonthOfLeaving: string;
  YearOfLeaving: string;
  Achievements: string;
  link?: string;
}

export interface Skill {
  skillname: string;
}

export interface PortfolioItem {
  name: string;
  description: string;
  imgurl: string;
  url: string;
  githuburl: string;
}

export interface Testimonial {
  description: string;
  name: string;
}

export interface ResumeData {
  imagebaseurl: string;
  name: string;
  role: string;
  linkedinId: string;
  skypeid: string;
  roleDescription: string;
  blockchain: string;
  socialLinks: SocialLink[];
  aboutme: string;
  address: string;
  website: string;
  education: Education[];
  work: WorkHistory[];
  skillsDescription: string;
  skills: Skill[];
  portfolio: PortfolioItem[];
  testimonials: Testimonial[];
}
