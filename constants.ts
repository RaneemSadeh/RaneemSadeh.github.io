import { Experience, Project, Skill } from './types';

export const RESUME_CONTEXT = `
You are Raneem Sa’deh, an AI Engineer and GenAI/RAG Specialist based in Amman, Jordan.
You are chatting with a recruiter or potential client on your portfolio website.
Always answer in the first person ("I am...", "I did...").
Keep answers concise, professional, yet friendly.

Contact Info:
- Phone: +962 780 473 652
- Email: raneem.sadeh@gmail.com
- LinkedIn: linkedin.com/in/raneem-sadeh
- GitHub: Available upon request

Education:
- BSc in AI and Data Science from Al-Hussein Technical University (HTU), Amman (Mar 2022 – 2026). GPA: 3.8.
- Coursework: ML, DL, CV, Advanced Algorithms, OS, Databases.

Technical Skills:
- GenAI & LLM: RAG Architecture, LLM Deployment, Prompt Engineering, OpenAI API, LangChain, Guardrails, LLM Observability.
- AI/ML: NLP, Computer Vision, TensorFlow, PyTorch, Reinforcement Learning (DQN), Object Tracking.
- Data Engineering: ETL, Vector DBs, MongoDB, SQL, Pandas.
- Development: Python, Node.js, Java, C++, GCP, AWS, Docker, Kubernetes.

Experience:
1. AI/ML Engineer (Freelance) - 2022 to Present.
   - Architected production-grade GenAI solutions (940+ hours).
   - Built end-to-end RAG pipelines.
   - Implemented guardrails and observability.
2. Technical Lead @ DSC - Apr 2024 to Present.
   - Supervised 10+ ML projects, managed 150+ members.
3. Scientific Research Specialist @ HTU - July 2025 (Upcoming/Current).
   - Lead research initiatives and proposal reviews.

Projects:
- RAG-Powered System: LangChain & OpenAI embeddings for document retrieval.
- BiaEye: YOLOv11-based waste detection (95% accuracy). Presented at COP29.
- NASA Geomagnetic Storm Forecasting: Novel RNN architecture.
- ExcelCancer Care: AI ultrasound wave tuning for early detection.
- Robotic Arm Balancing: Deep Q-Learning (DQN) with TensorFlow.

Research & Publications:
- BiaEye: AI-Powered Waste Monitoring System (IEEE, 2024).
- ExcelCancer Care: AI for Early Diagnosis (AI in Healthcare, 2025).

Certifications:
- Machine Learning Specialization (Stanford).
- Deep Learning Specialization (DeepLearning.AI).
- 1st Place IFTP Global Innovation Challenge (Texas A&M).
- 3rd Place IEEE Pitching Competition ("Rafeeq").
`;

export const PROJECTS: Project[] = [
  {
    title: "BiaEye",
    category: "Computer Vision & Sustainability",
    year: "2024",
    description: "YOLOv11-based waste detection system achieving 95% accuracy. Presented at COP29.",
    image: "https://www.i2vsys.com/assets/images/products/garbage.png",
    githubLink: "https://github.com/RaneemSadeh/BiaEye-Smart-Waste-Vision"
  },
  {
    title: "RAG System",
    category: "Generative AI",
    year: "2023",
    description: "Intelligent document retrieval and question-answering using LangChain and OpenAI.",
    image: "https://towardsdatascience.com/wp-content/uploads/2024/11/1xyqy96VhzeTbEKrjGqkwjA.png",
    githubLink: "https://github.com/RaneemSadeh/Islamic-Chat-Bot"
  },
  {
    title: "NASA Storm Forecast",
    category: "Deep Learning (RNN)",
    year: "2023",
    description: "Novel RNN architecture for solar storm prediction and mission-critical solutions.",
    image: "https://i.ytimg.com/vi/TGlIddR5-88/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGDMgMih_MA8=&rs=AOn4CLA-nnh62Zre7wOnp7NDpAdz6KoSyg",
    githubLink: ""
  },
  {
    title: "ExcelCancer Care",
    category: "Healthcare AI",
    year: "2025",
    description: "AI-based 'Deep Learning' early detection research for ultrasound wave tuning.",
    image: "https://techieyantechnologies.com/wp-content/uploads/2022/06/2022-06-28.png",
    githubLink: ""
  },
  {
    title: "MarhabaJordan",
    category: "SDLC and AI",
    year: "2023",
    description: "MarhabaJordan is a centralized tourism booking platform connecting travelers with local service providers.",
    image: "https://images.prismic.io/intuzwebsite/3cb158a5-3642-4641-8fea-623e43b831be_Frame+20.png?auto=compress,format",
    githubLink: "https://github.com/RaneemSadeh/MarhabaJordan-Tourism-Platform"
  },
  {
    title: "Robotic Arm",
    category: "Robotics and Deep Learning",
    year: "2023",
    description: "Deep Q-Learning (DQN) model designed to control a robotic arm in the Pendulum-v1 environment from the Gymnasium library by OpenAI.",
    image: "https://www.mdpi.com/robotics/robotics-13-00063/article_deploy/html/images/robotics-13-00063-g001.png",
    githubLink: "https://github.com/RaneemSadeh/Robotic-Arm-Balancing-DQN"
  }
];

export const EXPERIENCE: Experience[] = [
  {
    role: "AI/ML Engineer",
    company: "Freelance",
    period: "2022 - Present",
    description: [
      "Architected production-grade GenAI solutions & RAG systems.",
      "Implemented guardrails and observability for LLMs.",
      "Designed scalable ML pipelines for classification & regression."
    ]
  },
  {
    role: "Technical Lead",
    company: "DSC",
    period: "Apr 2024 - Present",
    description: [
      "Supervised 10+ ML projects & managed 150+ members.",
      "Organized 5+ national AI competitions."
    ]
  },
  {
    role: "Scientific Research Specialist",
    company: "Scientific Research and Innovation Department, HTU",
    period: "July 2025 - Present",
    description: [
      "Leading initiatives to advance scientific research.",
      "Developing and reviewing proposals for national priorities."
    ]
  }
];

export const SKILLS: Skill[] = [
  {
    category: "GenAI & LLM",
    items: ["RAG Architecture", "LangChain", "Prompt Engineering", "LLM Observability", "Guardrails"]
  },
  {
    category: "AI & ML",
    items: ["TensorFlow", "PyTorch", "Computer Vision", "NLP", "Reinforcement Learning"]
  },
  {
    category: "Cloud & DevOps",
    items: ["GCP", "AWS", "Kubernetes", "Docker", "CI/CD"]
  },
  {
    category: "Development",
    items: ["Python", "Node.js", "C++", "React", "SQL & NoSQL"]
  }
];
