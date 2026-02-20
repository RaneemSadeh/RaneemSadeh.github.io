export interface Project {
  title: string;
  category: string;
  year: string;
  description: string;
  image: string;`r`n  githubLink: string;`n  githubLink: string;`n}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface Skill {
  category: string;
  items: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isThinking?: boolean;
}
