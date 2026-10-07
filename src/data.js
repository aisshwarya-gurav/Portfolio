
export const profile = {
  name: "Aisshwarya Gurav",
  tagline: "Final-year CSE (AI & ML) student · Builds software end to end",
  about:
    "I build full-stack applications with React and FastAPI, and add ML and LLM-agent features served through APIs. " +
    "Project intern at Grasim Industries, research intern at NITK Surathkal, and IEEE published.",
  links: [
    { label: "GitHub", url: "https://github.com/aisshwarya-gurav" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/aisshwarya-gurav-4b1bb0281/" },
    { label: "LeetCode", url: "https://leetcode.com/u/GuravAisshwarya/" },
  ],
};

export const projects = [
  { name: "ReconTax AI", stack: ["React", "FastAPI", "LightGBM", "OCR", "LLM agents"],
    desc: "Invoice fraud scoring and GST reconciliation platform built at the Razorpay Hackathon. I led the React dashboard." },
  { name: "CATS (Grasim Industries)", stack: ["React", "PostgreSQL", "Supabase", "LLM"],
    desc: "Candidate Application Tracking System; workflow automation cut manual screening effort by 35%." },
  { name: "Liver Fibrosis Grading (NITK)", stack: ["TensorFlow", "Transfer Learning"],
    desc: "Grades 0–3 from medical images; 87.5% accuracy with InceptionResNetV2." },
  { name: "Agentic RAG", stack: ["Gemini", "Agno", "ChromaDB"],
    desc: "Question answering over PDFs and the web with query rewriting and cited answers." },
];

export const skills = {
  Languages: ["Java", "Python", "JavaScript", "SQL"],
  Development: ["React", "FastAPI", "REST APIs", "PostgreSQL", "MongoDB", "Git"],
  "AI / ML": ["TensorFlow", "scikit-learn", "LightGBM", "LLM agents", "RAG"],
};