// Project Screenshots
import tabletalkImg from '../../assets/Projects/tabletalk.png';
import hirehuntImg from '../../assets/Projects/hirehunt.png';
import nexusImg from '../../assets/Projects/nexus.png';
import arogyaImg from '../../assets/Projects/arogya.png';
import codenestImg from '../../assets/Projects/codenest.png';

// Tech Logos for Stack Badges
import reactLogo from '../../assets/skillLogo/React.svg';
import nodeLogo from '../../assets/skillLogo/Node.js.svg';
import postgresLogo from '../../assets/skillLogo/PostgresSQL.svg';
import mysqlLogo from '../../assets/skillLogo/MySQL.svg';
import tailwindLogo from '../../assets/skillLogo/Tailwind CSS.svg';
import fastapiLogo from '../../assets/skillLogo/FastAPI.svg';
import pythonLogo from '../../assets/skillLogo/Python.svg';
import scikitLogo from '../../assets/skillLogo/scikit-learn.svg';
import mongoLogo from '../../assets/skillLogo/MongoDB.png';
import expressLogo from '../../assets/skillLogo/Express.png';
import jsLogo from '../../assets/skillLogo/JavaScript.svg';
import tsLogo from '../../assets/skillLogo/TypeScript.svg';
import flaskLogo from '../../assets/skillLogo/Flask.svg';

// Strict Sequence: 1. TableTalk, 2. HireHunt, 3. NEXUS, 4. Arogya, 5. CodeNest
export const PROJECTS_DATA = [
  {
    id: 'tabletalk',
    title: 'TableTalk',
    tagline: 'Autonomous AI Data Analyst',
    description:
      'An autonomous AI data analyst that queries uploaded CSV files in plain English. An agent writes and executes SQL in an in-memory sandbox, self-corrects on errors, and streams back interactive charts and tables with full execution logs.',
    image: tabletalkImg,
    techStack: [
      { name: 'React 19', icon: reactLogo },
      { name: 'DuckDB', icon: postgresLogo },
      { name: 'LangGraph.js', icon: jsLogo },
      { name: 'TypeScript', icon: tsLogo },
      { name: 'Tailwind CSS 4', icon: tailwindLogo }
    ],
    fullStack: {
      'Frontend': [
        'React 19',
        'TypeScript',
        'Vite',
        'Tailwind CSS 4',
        'React Router',
        'Recharts',
        'react-markdown with remark-gfm',
        'Lucide'
      ],
      'Backend': [
        'Node.js',
        'Express',
        'TypeScript',
        'Zod',
        'Multer',
        'Helmet',
        'express-rate-limit'
      ],
      'Database': ['MongoDB (Mongoose)'],
      'Analytics Engine': ['DuckDB (sandboxed, in-memory per question)'],
      'AI / Agent': ['LangGraph.js', 'LangChain', 'Google Gemini'],
      'Auth & Security': ['JWT in httpOnly cookies', 'bcrypt'],
      'Streaming': ['Server-Sent Events (SSE)']
    },
    github: 'https://github.com/RaiyanChandle',
    liveDemo: 'https://github.com/RaiyanChandle'
  },
  {
    id: 'hirehunt',
    title: 'HireHunt',
    tagline: 'Autonomous Hiring & ATS Platform',
    description:
      'An autonomous hiring platform that pairs a full-stack web app with an AI service. Resumes are ingested, embedded, and matched against job requirements through an agentic pipeline, and the platform gives ATS-style scoring and feedback.',
    image: hirehuntImg,
    techStack: [
      { name: 'FastAPI', icon: fastapiLogo },
      { name: 'LangChain', icon: scikitLogo },
      { name: 'ChromaDB', icon: mongoLogo },
      { name: 'React 18', icon: reactLogo },
      { name: 'Python', icon: pythonLogo }
    ],
    fullStack: {
      'Frontend': [
        'React 18',
        'Vite',
        'Tailwind CSS 4',
        'DaisyUI',
        'Framer Motion',
        'OGL',
        'React Router',
        'Axios'
      ],
      'Backend': ['Node.js', 'Express 4', 'Mongoose', 'JWT', 'bcryptjs', 'Multer'],
      'Database': ['MongoDB (app data)', 'ChromaDB (vector store)'],
      'AI Service': [
        'FastAPI',
        'LangChain',
        'Pydantic',
        'OpenRouter',
        'OpenAI embeddings',
        'pypdf',
        'docx2txt'
      ],
      'Services': ['Cloudinary (uploads)']
    },
    github: 'https://github.com/RaiyanChandle/HireHunt',
    liveDemo: 'https://github.com/RaiyanChandle/HireHunt'
  },
  {
    id: 'nexus',
    title: 'NEXUS',
    tagline: 'College ERP & Academic Management System',
    description:
      'A college ERP and academic management system that brings administration, academics, and exams into one platform, with role-based access for admins, teachers, students, and parents. It supports document uploads and SMS notifications.',
    image: nexusImg,
    techStack: [
      { name: 'React 19', icon: reactLogo },
      { name: 'Node.js', icon: nodeLogo },
      { name: 'PostgreSQL', icon: postgresLogo },
      { name: 'Sequelize', icon: mysqlLogo },
      { name: 'Tailwind CSS 4', icon: tailwindLogo }
    ],
    fullStack: {
      'Frontend': ['React 19', 'Vite', 'Tailwind CSS 4', 'React Router', 'Phosphor Icons', 'Lucide'],
      'Backend': ['Node.js', 'Express 5', 'Sequelize', 'JWT', 'bcrypt', 'Multer', 'CORS'],
      'Database': ['PostgreSQL'],
      'Services': ['Cloudinary (uploads)', 'Twilio (SMS notifications)']
    },
    github: 'https://github.com/RaiyanChandle/NEXUSUpdated',
    liveDemo: 'https://github.com/RaiyanChandle/NEXUSUpdated'
  },
  {
    id: 'arogya',
    title: 'Arogya',
    tagline: 'Telemedicine Platform (SIH 2025 Finalist)',
    description:
      'A telemedicine platform for remote healthcare, with video consultations, online payments, location-aware features, and multilingual support. An ML triage service prioritizes cases by urgency and routes each patient to the right specialist, and LLMs assist across the platform.',
    image: arogyaImg,
    techStack: [
      { name: 'React 19', icon: reactLogo },
      { name: 'Flask ML', icon: flaskLogo },
      { name: 'Google Gemini', icon: pythonLogo },
      { name: 'Node.js', icon: nodeLogo },
      { name: 'MongoDB', icon: mongoLogo }
    ],
    fullStack: {
      'Frontend': [
        'React 19',
        'Vite',
        'Tailwind CSS 4',
        'React Router',
        'Motion',
        'Headless UI',
        'React Hot Toast',
        'Leaflet',
        'jsPDF',
        'PWA support'
      ],
      'Backend': ['Node.js', 'Express 5', 'Mongoose', 'Multer', 'node-cron'],
      'Database': ['MongoDB'],
      'Auth': ['Clerk'],
      'AI / ML': [
        'Google Gemini',
        'Groq',
        'Flask triage microservice with MLflow (urgency classifier, specialist classifier, duration regressor)'
      ],
      'Services': [
        'ZegoCloud (video)',
        'Razorpay (payments)',
        'Twilio (SMS)',
        'Cloudinary (uploads)',
        'Google Translate API'
      ]
    },
    github: 'https://github.com/RaiyanChandle',
    liveDemo: 'https://github.com/RaiyanChandle'
  },
  {
    id: 'codenest',
    title: 'CodeNest',
    tagline: 'Real-Time Mock Interview Platform',
    description:
      'A mock interview platform where candidates solve coding problems in a browser-based editor with sandboxed code execution, backed by real-time chat and video for live interview sessions.',
    image: codenestImg,
    techStack: [
      { name: 'React 19', icon: reactLogo },
      { name: 'Monaco Editor', icon: jsLogo },
      { name: 'Stream Video', icon: expressLogo },
      { name: 'Node.js', icon: nodeLogo },
      { name: 'Piston API', icon: tailwindLogo }
    ],
    fullStack: {
      'Frontend': [
        'React 19',
        'Vite',
        'Tailwind CSS 4',
        'DaisyUI',
        'React Router',
        'TanStack Query',
        'Monaco Editor',
        'Framer Motion',
        'React Resizable Panels',
        'Axios',
        'React Hot Toast'
      ],
      'Backend': ['Node.js', 'Express 5', 'Mongoose'],
      'Database': ['MongoDB'],
      'Auth': ['Clerk'],
      'Real-time': ['Stream (chat and video)'],
      'Background Jobs': ['Inngest'],
      'Code Execution': ['Piston API (sandboxed multi-language execution)']
    },
    github: 'https://github.com/RaiyanChandle/CodeNest',
    liveDemo: 'https://github.com/RaiyanChandle/CodeNest'
  }
];

