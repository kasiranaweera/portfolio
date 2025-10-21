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
import { useState } from "react";

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const closeModal = () => setSelectedImage(null);

  const featuredProjects = [
    {
      title: "EduWingz",
      description:
        "An AI-powered education platform designed to transform learning by delivering personalized experiences tailored to individual student needs. Utilizing generative and agentic AI, the platform adapts teaching methods to unique learning patterns, offering real-time support, intelligent course recommendations, and engaging interactive modules. This project reflects my commitment to merging technology and education to create impactful, scalable solutions that empower students and educators alike.",
      longDescription:
        "To achieve these goals, EduWingz was built with React.js for a responsive frontend and Django for robust backend logic, incorporating Retrieval-Augmented Generation (RAG) and LangChain to develop an intelligent learning pattern recognition system that identifies individual student learning styles. The platform features an adaptive teaching methodology framework, a real-time support system for immediate assistance, and a comprehensive analytics platform to track and visualize student progress. Through agile methodologies and team collaboration, we designed a personalized content delivery system, enhancing my expertise in AI, full-stack development, and user-centered design.",
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
        "An educational platform dedicated to mathematics for school students, with a current focus on supporting O/L learners by providing essential study materials, past papers, and exam resources. Designed to bridge gaps in accessible education, the platform is actively expanding into a full-fledged math learning solution, incorporating interactive lessons, practice tools, and dedicated student support features to foster deeper understanding and engagement.",
      longDescription:
        "Built with Next.js for efficient server-side rendering and Tailwind CSS for a clean, responsive design, Knowingz ensures seamless user experiences across devices. This solo project highlights my full-stack development skills while advancing my goal of democratizing quality educational content for underserved communities in Sri Lanka.",
      category: "Solo Project",
      technologies: [
        "Next JS",
        "Tailwind CSS",
        "JavaScript",
        "Latex",
        "Vercel",
      ],
      github: "https://github.com/kasi/agentflow",
      live: "",
      status: "Active Development",
      teamSize: "SOlo Project",
      images: [imgp21, imgp22],
    },
    {
      title: "A9teen Project",
      description:
        "I proposed A9teen to the SLTC Venture Program as an innovative digital marketplace concept, blending entrepreneurship with blockchain technology to create a decentralized platform for secure, transparent e-commerce. The project emphasizes Web3 integration for enhanced user trust through immutable transactions and community-driven governance, addressing key challenges in traditional marketplaces like data privacy and centralization. My contributions focused on the pitching, planning, and concept design phases, where I crafted compelling narratives and strategic roadmaps to highlight its potential for scalable business solutions in emerging markets.",
      longDescription:
        "Looking ahead, I plan to implement A9teen by developing a full-stack prototype using Next.js and Tailwind CSS for the frontend, integrating Ethereum-based smart contracts for transaction handling, and incorporating NFT functionalities for unique digital assets. Future phases will include beta testing with local entrepreneurs, expanding to cross-border payments via stablecoins, and partnering with SLTC incubators for real-world deployment, ultimately aiming to empower small businesses in Sri Lanka with accessible Web3 tools.",
      category: "SLTC Venture Program Proposal",
      technologies: [],
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
        "ML-based recommender for university courses using Z-scores and UGC cutoff data (2020-2025) to help make informed decisions.",
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
        "AI-powered mental health assistant featuring voice interaction, fine-tuned Gemma-3 model for psychological guidance, RAG for context-aware responses, and crisis detection.",
      technologies: [
        "Streamlit",
        "PyTorch",
        "Hugging Face",
        "Transformers",
        "Whisper",
        "FAISS",
        "Kokoro TTS",
      ],
      github:
        "https://github.com/kasiranaweera/whisper-ai-psychiatric-RAG-gemma3-finetuned",
    },
    {
      title: "GNN on OGBN-Arxiv",
      description:
        "Graph Neural Network implementation for node classification on arXiv citation dataset, comparing GCN, GraphSAGE, and GAT models with evaluation and hyperparameter tuning.",
      technologies: [
        "PyTorch Geometric",
        "OGB",
        "Scikit-learn",
        "Matplotlib",
        "NumPy",
      ],
      github: "https://github.com/kasiranaweera/GNN-ogbn-arxiv_dataset",
    },
    {
      title: "Road Accident Prediction",
      description:
        "ML-based traffic accident prediction using logistic regression, random forest, and neural networks (up to 89% accuracy), plus a Flask chatbot for real-time safety recommendations.",
      technologies: ["TensorFlow", "Scikit-learn", "Flask", "Python"],
      github: "https://github.com/kasiranaweera/road_accident_prediction",
    },
    {
      title: "Brainbox Quiz App",
      description:
        "Full-stack quiz system with React.js & Material UI for the frontend and Django REST API backend. Features time-based questions and multiple types such as MCQs, short-answer, and mixed formats.",
      technologies: ["React JS", "Material UI", "Django", "RestAPI"],
      github: "https://github.com/orgs/teammatess/repositories",
    },
    {
      title: "Smart Fan Control System with Gesture Recognition",
      description:
        "IoT-based system integrating sensors and machine learning gesture recognition for automated fan control.",
      technologies: [
        "Open CV2",
        "Gesture Recognition",
        "Arduino",
        "Computer Vision",
      ],
      github:
        "https://github.com/kasiranaweera/Smart-Fan-Control-Using-Image-Processing",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-background py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6 pb-3">
              My Projects
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A collection of AI research projects, open-source tools, and
              innovative applications that push the boundaries of artificial
              intelligence and machine learning.
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
                    {/* Project Info */}
                    <div className="lg:col-span-2">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="text-2xl font-bold text-foreground">
                              {project.title}
                            </h3>
                            <Badge
                              variant="secondary"
                              className="bg-primary/10 text-primary"
                            >
                              {project.category}
                            </Badge>
                          </div>
                          <p className="text-lg text-muted-foreground mb-4">
                            {project.description}
                          </p>
                          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                            {project.longDescription}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 mb-3 font-semibold ">
                        <span className="text-sm text-foreground">
                          Status:{" "}
                        </span>
                        <Badge variant="secondary" className="text-xs">
                          {project.status}
                        </Badge>
                      </div>
                      {project.teamSize && (
                        <div className="flex items-center gap-3 font-semibold mb-3">
                          <span className="text-sm text-foreground flex items-center">
                            Team Members:
                          </span>
                          <span className="text-sm font-medium">
                            {project.teamSize}
                          </span>
                        </div>
                      )}

                      {/* Technologies */}
                      {project.technologies &&
                        project.technologies.length > 0 && (
                          <div className="mb-6">
                            <h4 className="text-sm font-semibold text-foreground mb-3">
                              Technologies
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.map((tech) => (
                                <Badge
                                  key={tech}
                                  variant="outline"
                                  className="border-primary/30 text-primary hover:bg-primary/10 transition-colors"
                                >
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}

                      {/* Actions */}
                      {project.github && (
                        <div className="flex flex-wrap gap-3">
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Button
                              variant="default"
                              className="bg-gradient-primary hover:opacity-90 transition-all duration-300"
                            >
                              <Github className="w-4 h-4 mr-2" />
                              View Code
                            </Button>
                          </a>
                          {project.live && (
                            <a
                              href={project.live}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Button
                                variant="outline"
                                className="border-accent/50 text-accent hover:bg-accent/10"
                              >
                                <ExternalLink className="w-4 h-4 mr-2" />
                                Live Demo
                              </Button>
                            </a>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Stats & Info */}
                    <div className="space-y-6">
                      <div className="p-4 rounded-lg border border-border/50">
                        <div className="grid grid-cols-1 gap-3">
                          {project.images.map((src, index) => (
                            <div
                              key={index}
                              onClick={() => setSelectedImage(src)}
                              className="overflow-hidden rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
                            >
                              <img
                                src={src}
                                alt={`${project.title} screenshot ${index + 1}`}
                                className="w-full h-40 object-cover hover:scale-110 transition-transform duration-300"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
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
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
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
                  </div>

                  <div className="flex space-x-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button size="sm" variant="outline" className="w-full">
                        <Github className="w-3 h-3 mr-1" />
                        Code
                      </Button>
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <Button size="sm" variant="ghost" className="w-full">
                          <ExternalLink className="w-3 h-3 mr-1" />
                          Dataset
                        </Button>
                      </a>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 animate-fade-in">
            <Card className="p-8 bg-card/30 backdrop-blur-sm border-border/50">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Explore More on GitHub
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Check out my complete portfolio of projects, research code, and
                open-source contributions on GitHub. Star ⭐ projects you find
                interesting!
              </p>
              <a
                href="https://github.com/kasiranaweera"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-gradient-primary hover:opacity-90 transition-all duration-300 hover:scale-105"
                >
                  <Github className="w-5 h-5 mr-2" />
                  Visit GitHub Profile
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </a>
            </Card>
          </div>
        </div>
      </div>

      {/* Popup Modal */}
      {selectedImage && (
        <div
          onClick={closeModal}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50"
        >
          <div className="relative w-11/12 h-11/12 px-4 justify-center align-middle flex">
            <img
              src={selectedImage}
              alt="Preview"
              className="rounded-xl shadow-lg w-full max-h-[80vh] object-contain"
            />
          </div>
          <button
            onClick={closeModal}
            className="absolute top-5 right-5 bg-black/60 text-white rounded-full p-3 hover:bg-black transition"
            aria-label="Close image preview"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Projects;
