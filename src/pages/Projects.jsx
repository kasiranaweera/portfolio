import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Github,
  ExternalLink,
  Star,
  Code2,
  X,
} from "lucide-react";

import imgp11 from "../../assets/img-p11.png";
import imgp12 from "../../assets/img-p12.png";
import imgp13 from "../../assets/img-p13.png";
import imgp21 from "../../assets/img-p21.png";
import imgp22 from "../../assets/img-p22.png";
import imgp31 from "../../assets/img-p31.jpeg";
import imgp32 from "../../assets/img-p32.jpeg";

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const closeModal = () => setSelectedImage(null);

  const featuredProjects = [
    {
      title: "EduWingz",
      description:
        "An AI-powered education platform designed to transform learning by delivering personalized experiences tailored to individual student needs.",
      longDescription:
        "EduWingz was built with React.js for the frontend and Django for backend logic, integrating RAG and LangChain for adaptive learning. Features include intelligent support, analytics, and real-time progress tracking. This reflects my experience in AI and full-stack development.",
      category: "Final Year Project",
      technologies: [
        "React JS",
        "Django",
        "MUI",
        "LangChain",
        "Deepseek",
        "SQLite",
        "Python",
      ],
      github: "https://github.com/kasi/agentflow",
      live: "",
      status: "Active Development",
      teamSize: "Ms. Ashika Muthukuda, Ms. Nishadi Disanayake",
      images: [imgp11, imgp12, imgp13],
    },
    {
      title: "Knowingz Platform",
      description:
        "An educational platform focused on mathematics for O/L learners, offering study materials, past papers, and interactive resources.",
      longDescription:
        "Built with Next.js and Tailwind CSS, Knowingz ensures responsive, accessible design. A solo project aimed at democratizing educational content for Sri Lankan students.",
      category: "Solo Project",
      technologies: ["Next JS", "Tailwind CSS", "JavaScript", "Latex", "Vercel"],
      github: "https://github.com/kasiranaweera/Knowingz",
      live: "",
      status: "Active Development",
      teamSize: "Solo Project",
      images: [imgp21, imgp22],
    },
    {
      title: "A9teen Project",
      description:
        "Proposed to SLTC Venture Program as a decentralized marketplace integrating blockchain and Web3 for transparent e-commerce.",
      longDescription:
        "Future implementation will use Next.js, Tailwind, and Ethereum-based smart contracts for secure, immutable transactions, empowering small businesses via decentralized tools.",
      category: "SLTC Venture Program Proposal",
      technologies: ["Next JS", "Tailwind CSS", "Blockchain", "Ethereum"],
      github: "",
      live: "",
      status: "Planning Phase",
      images: [imgp31, imgp32],
    },
  ];

  const otherProjects = [
    {
      title: "Z-Score Uni Finder",
      description:
        "ML-based recommender for university courses using Z-scores and UGC cutoff data to guide informed decisions.",
      technologies: [
        "Next JS",
        "Tailwind CSS",
        "Machine Learning",
        "LightGBM",
        "Kaggle",
      ],
      github: "https://github.com/kasiranaweera/Z-ScoreUniFinder",
      live: "https://www.kaggle.com/datasets/ranaweerakasi/sri-lanakan-ugc-cutoff-marks-dataset-2020-2025",
    },
    {
      title: "Whisper AI-Psychiatric",
      description:
        "AI mental health assistant featuring voice interaction, fine-tuned Gemma-3 model, and crisis detection.",
      technologies: [
        "Streamlit",
        "PyTorch",
        "Hugging Face",
        "Whisper",
        "FAISS",
      ],
      github:
        "https://github.com/kasiranaweera/whisper-ai-psychiatric-RAG-gemma3-finetuned",
    },
    {
      title: "GNN on OGBN-Arxiv",
      description:
        "Graph Neural Network implementation for node classification comparing GCN, GraphSAGE, and GAT models.",
      technologies: [
        "PyTorch Geometric",
        "OGB",
        "Scikit-learn",
        "NumPy",
      ],
      github: "https://github.com/kasiranaweera/GNN-ogbn-arxiv_dataset",
    },
    {
      title: "Road Accident Prediction",
      description:
        "ML-based traffic accident prediction using logistic regression, random forest, and neural networks with a Flask chatbot.",
      technologies: ["TensorFlow", "Flask", "Python"],
      github: "https://github.com/kasiranaweera/road_accident_prediction",
    },
    {
      title: "Brainbox Quiz App",
      description:
        "Full-stack quiz app using React & Material UI frontend with Django REST API backend, featuring timed and mixed-format questions.",
      technologies: ["React JS", "Material UI", "Django", "RestAPI"],
      github: "https://github.com/orgs/teammatess/repositories",
    },
    {
      title: "Smart Fan Control System",
      description:
        "IoT-based gesture-controlled fan system using computer vision and Arduino.",
      technologies: ["OpenCV", "Arduino", "Computer Vision"],
      github:
        "https://github.com/kasiranaweera/Smart-Fan-Control-Using-Image-Processing",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-background py-20">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6 pb-3">
            My Projects
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A collection of AI research projects, open-source tools, and
            innovative applications pushing the boundaries of technology.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-20">
          <h2 className="text-3xl font-semibold text-foreground mb-8 flex items-center animate-fade-in">
            <Star className="w-7 h-7 mr-3 text-accent" />
            Featured Projects
          </h2>

          <div className="space-y-12">
            {featuredProjects.map((project, index) => (
              <Card
                key={index}
                className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Info */}
                  <div className="lg:col-span-2">
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {project.title}
                    </h3>
                    <Badge
                      variant="secondary"
                      className="mb-3 bg-primary/10 text-primary"
                    >
                      {project.category}
                    </Badge>
                    <p className="text-lg text-muted-foreground mb-3">
                      {project.description}
                    </p>
                    <p className="text-sm text-muted-foreground mb-4">
                      {project.longDescription}
                    </p>

                    <div className="flex items-center gap-3 mb-2 font-semibold">
                      <span>Status:</span>
                      <Badge variant="secondary" className="text-xs">
                        {project.status}
                      </Badge>
                    </div>

                    {project.teamSize && (
                      <div className="text-sm mb-3 font-medium">
                        <strong>Team Members:</strong> {project.teamSize}
                      </div>
                    )}

                    {/* Technologies */}
                    {project.technologies.length > 0 && (
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-foreground mb-3">
                          Technologies
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <Badge
                              key={tech}
                              variant="outline"
                              className="border-primary/30 text-primary"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Buttons */}
                    <div className="flex flex-wrap gap-3">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button className="bg-gradient-primary">
                            <Github className="w-4 h-4 mr-2" />
                            View Code
                          </Button>
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button variant="outline">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live Demo
                          </Button>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Images */}
                  <div className="grid grid-cols-1 gap-3">
                    {project.images.map((src, idx) => (
                      <div
                        key={idx}
                        onClick={() => setSelectedImage(src)}
                        className="overflow-hidden rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
                      >
                        <img
                          src={src}
                          alt={`${project.title} screenshot ${idx + 1}`}
                          className="w-full h-40 object-cover hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h2 className="text-3xl font-semibold text-foreground mb-8 flex items-center animate-fade-in">
            <Code2 className="w-7 h-7 mr-3 text-primary" />
            Other Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <Card
                key={index}
                className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-semibold mb-3">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {project.description}
                </p>

                {/* Tech stack preview */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="text-xs border-border/50 text-muted-foreground"
                    >
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge
                      variant="outline"
                      className="text-xs border-border/50 text-muted-foreground"
                    >
                      +{project.technologies.length - 3}
                    </Badge>
                  )}
                </div>

                <div className="flex space-x-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button size="sm" variant="outline" className="w-full">
                        <Github className="w-3 h-3 mr-1" /> Code
                      </Button>
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button size="sm" variant="ghost" className="w-full">
                        <ExternalLink className="w-3 h-3 mr-1" /> Dataset
                      </Button>
                    </a>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-16 animate-fade-in">
          <Card className="p-8 bg-card/30 backdrop-blur-sm border-border/50">
            <h2 className="text-2xl font-semibold mb-4">
              Explore More on GitHub
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Check out my full portfolio, research code, and open-source
              contributions. ⭐ Star the projects you like!
            </p>
            <a
              href="https://github.com/kasiranaweera"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-gradient-primary hover:scale-105">
                <Github className="w-5 h-5 mr-2" />
                Visit GitHub Profile
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </a>
          </Card>
        </div>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
            onClick={closeModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.img
              src={selectedImage}
              alt="Preview"
              className="rounded-xl shadow-lg w-11/12 max-h-[80vh] object-contain"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
            />
            <button
              onClick={closeModal}
              aria-label="Close image preview"
              className="absolute top-5 right-5 bg-black/70 text-white rounded-full p-3 hover:bg-black transition"
            >
              <X className="w-6 h-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;
