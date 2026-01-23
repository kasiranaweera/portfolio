'use client';

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Star, Code2, Sparkles, Rocket, ArrowRight } from "lucide-react";
import { ProjectImageModal } from "@/components/ProjectImageModal";
import { useState, useEffect } from "react";
import AnimatedBackground from "../components/AnimatedBackground";
import SparkleAnimation from "../components/SparkleAnimation";

import imgp11 from "../../assets/img-p11.png";
import imgp12 from "../../assets/img-p12.png";
import imgp13 from "../../assets/img-p13.png";
import imgp21 from "../../assets/img-p21.png";
import imgp22 from "../../assets/img-p22.png";
import imgp31 from "../../assets/img-p31.jpeg";
import imgp32 from "../../assets/img-p32.jpeg";
import imgp41 from "../../assets/img-p41.png";
import imgp42 from "../../assets/img-p42.png";

const ProjectCarouselCard = ({ project, openModal }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (!project.images || project.images.length === 0) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [project.images]);

  const currentImage = project.images?.[currentImageIndex]?.src || project.images?.[currentImageIndex];

  return (
    <Card className="p-8 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border-gradient-primary/30 hover:border-gradient-primary/60 transition-all duration-500 hover:shadow-2xl group cursor-pointer overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:via-accent/5 group-hover:to-primary/5 transition-all duration-500"></div>
      
      <div className="relative h-full">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 h-full">
          {/* Content Section - 3/5 */}
          <div className="lg:col-span-3 space-y-4 max-h-full">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-2">
              <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <Badge
                variant="secondary"
                className="bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 text-primary hover:from-primary/30 hover:to-accent/30 transition-all w-fit"
              >
                {project.category}
              </Badge>
            </div>

            <p className="text-base text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
              {project.description}
            </p>

            <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
              {project.longDescription}
            </p>

            {/* Key Points/Highlights */}
            <div className="space-y-2 pt-2">
              {project.highlights && project.highlights.length > 0 ? (
                <ul className="space-y-1">
                  {project.highlights.slice(0, 3).map((highlight, idx) => (
                    <li key={idx} className="text-xs text-muted-foreground flex items-start gap-2 group-hover:text-foreground transition-colors">
                      <span className="text-primary mt-1">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>

            {/* Status & Team */}
            <div className="flex flex-col gap-2 pt-2">
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold text-foreground">Status:</span>
                <Badge variant="secondary" className="text-xs bg-primary/10 border border-primary/30 text-primary">
                  {project.status}
                </Badge>
              </div>
              {project.teamSize && (
                <div className="flex items-center gap-3">
                  <span className="text-sm font-semibold text-foreground">Team:</span>
                  <span className="text-sm text-accent font-medium">{project.teamSize}</span>
                </div>
              )}
            </div>

            {/* Technologies */}
            {project.technologies && project.technologies.length > 0 && (
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-foreground mb-3">Tech Stack:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="border-primary/30 text-primary bg-primary/5 hover:bg-primary/15 hover:border-primary/60 transition-all"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            {(project.github || project.live) && (
            <div className="flex flex-wrap gap-3 pt-4 border-t border-primary/20">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="sm"
                    className="bg-gradient-primary hover:opacity-90 transition-all duration-300 group/btn"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                    <ArrowRight className="w-3 h-3 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-accent/50 text-accent hover:bg-accent/10 hover:border-accent/80 transition-all"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </Button>
                </a>
              )}
            </div>)}
          </div>

          {/* Image Carousel Section - 2/5 */}
          {project.images && project.images.length > 0 && (
            <div className="lg:col-span-2 flex flex-col h-full">
              <div 
                className="relative flex-1 overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group/img cursor-pointer"
                onClick={() => openModal(currentImage)}
              >
                {/* Blurred Background Image */}
                <img
                  src={currentImage}
                  alt={`${project.title} background`}
                  className="absolute inset-0 w-full h-full object-cover blur-lg scale-110"
                />
                
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/40"></div>

                {/* Clear Image on Top */}
                <img
                  src={currentImage}
                  alt={`${project.title} screenshot`}
                  className="relative w-full h-full object-contain group-hover/img:scale-105 transition-transform duration-300 z-10"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center bg-black/20 backdrop-blur-sm z-20">
                  <p className="text-white text-sm font-medium">Click to view fullscreen</p>
                </div>

                {/* Image Counter */}
                <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full text-white text-xs font-medium border border-white/20 z-30">
                  {currentImageIndex + 1} / {project.images.length}
                </div>

                {/* Navigation Dots */}
                {project.images.length > 1 && (
                  <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2 z-30">
                    {project.images.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentImageIndex(idx);
                        }}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          idx === currentImageIndex
                            ? "bg-white w-6"
                            : "bg-white/50 w-2 hover:bg-white/70"
                        }`}
                        aria-label={`Go to image ${idx + 1}`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};

const Projects = () => {
  const featuredProjects = [
    {
      title: "EduWingz",
      description:
        "AI-powered education platform with personalized learning experiences using generative AI and adaptive teaching methods.",
      highlights: [
        "Intelligent learning pattern recognition system",
        "Real-time support with AI assistance",
        "Comprehensive student progress analytics",
      ],
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
      github: "https://github.com/kasiranaweera/eduwingz",
      live: "https://eduwingz.vercel.app",
      status: "Active Development",
      teamSize: "Team Project",
      images: [imgp11, imgp12, imgp13],
    },
    {
      title: "HaiiBot",
      description:
        "AI-powered chatbot platform for shops to automate customer conversations and support across multiple channels.",
      highlights: [
        "Multi-channel support (WhatsApp, Telegram, Messenger)",
        "Shop-specific knowledge base",
        "Built-in ticketing system for complaints",
      ],
      category: "SaaS Application",
      technologies: [
        "React JS - Vite",
        "FastAPI",
        "Tailwind CSS",
        "LangChain",
        "Gemini AI",
        "SQLite",
        "Python",
      ],
      github: "",
      live: "",
      status: "Active Development",
      teamSize: "Solo Project",
      images: [imgp41, imgp42],
    },
    {
      title: "Knowingz Platform",
      description:
        "Educational platform for mathematics, providing study materials and exam resources for O/L learners.",
      highlights: [
        "Comprehensive study materials & past papers",
        "Interactive lessons and practice tools",
        "Expanding to full-fledged math learning solution",
      ],
      category: "Educational Platform",
      technologies: [
        "Next JS",
        "Tailwind CSS",
        "JavaScript",
        "Latex",
        "Vercel",
      ],
      github: "https://github.com/kasiranaweera/ol-poddo",
      live: "https://ol-poddo.vercel.app",
      status: "Active Development",
      teamSize: "Solo Project",
      images: [imgp21, imgp22],
    },
    {
      title: "A9teen Project",
      description:
        "Innovative Web3 digital marketplace concept blending blockchain technology with decentralized e-commerce.",
      highlights: [
        "Ethereum-based smart contracts",
        "NFT functionalities for digital assets",
        "Focus on small business empowerment",
      ],
      category: "SLTC Venture Program",
      technologies: [
        "Next JS",
        "Tailwind CSS",
        "Ethereum",
        "Smart Contracts",
        "Web3",
      ],
      github: "",
      live: "",
      status: "Planning Phase",
      teamSize: "Team Project",
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

    {
      title: "AR Space Education Application",
      description:
        "An immersive Augmented Reality (AR) educational application focused on solar system exploration and space phenomena. Built with Unity and Vuforia SDK to create interactive learning experiences.",
      technologies: ["Unity", "Vuforia Engine", "C#	"],
      github: "https://github.com/kasiranaweera/ar-space-education",
    },
  ];

  return (
    <ProjectImageModal>
      {({ openModal, selectedImage }) => (
        <div className="relative min-h-screen bg-gradient-background overflow-hidden">
          <AnimatedBackground />
          <SparkleAnimation />

          <div className="relative z-10 container mx-auto px-6 py-20 lg:py-32 backdrop-blur-sm">
            <div className="max-w-5xl mx-auto">
              {/* Hero Section */}
              <div className="text-center mb-20 lg:mb-32">
                {/* Animated Badge */}
                <div className="fade-in-up mb-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
                    <Sparkles className="w-4 h-4 text-primary animate-spin-slow" />
                    <span className="text-sm font-medium text-primary">My Creative Portfolio</span>
                  </div>
                </div>

                {/* Hero Heading */}
                <div className="fade-in-up space-y-6 mb-12">
                  <div className="space-y-4">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold gradient-text leading-tight animate-slide-up">
                      Featured
                      <br />
                      <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-shimmer">
                        Projects & Works
                      </span>
                    </h1>
                  </div>

                  <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in">
                    A collection of AI research projects, open-source tools, and innovative applications that push the boundaries of artificial intelligence and machine learning.
                  </p>
                </div>
              </div>

              {/* Featured Projects */}
              <div className="fade-in-delayed mb-24 relative group">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-accent/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                
                <div className="relative">
                  <div className="mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 flex items-center justify-center">
                      <Star className="w-8 h-8 mr-3 text-primary" />
                      Featured Projects
                    </h2>
                    <div className="h-1 w-20 bg-gradient-primary mx-auto rounded-full"></div>
                  </div>

                  <div className="space-y-8">
                    {featuredProjects.map((project, index) => (
                      <div
                        key={index}
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <ProjectCarouselCard project={project} openModal={openModal} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Other Projects */}
              <div className="fade-in-delayed mb-24 relative group">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-accent/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                
                <div className="relative">
                  <div className="mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 flex items-center justify-center">
                      <Code2 className="w-8 h-8 mr-3 text-accent" />
                      Other Notable Projects
                    </h2>
                    <div className="h-1 w-20 bg-gradient-primary mx-auto rounded-full"></div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {otherProjects.map((project, index) => (
                      <Card
                        key={index}
                        className="p-6 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border-gradient-primary/30 hover:border-gradient-primary/60 transition-all duration-500 hover:shadow-2xl hover:scale-105 group cursor-pointer"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:via-accent/5 group-hover:to-primary/5 transition-all duration-500 rounded-lg"></div>


                        <div className="relative space-y-4 flex flex-col justify-between h-full">
                          <div className="flex flex-col gap-2">
                            <h3 className="text-lg font-semibold text-foreground text-center group-hover:text-primary transition-colors">
                              {project.title}
                            </h3>
                            <p className="text-sm text-muted-foreground text-center leading-relaxed group-hover:text-foreground transition-colors">
                              {project.description}
                          </p>

                          {project.technologies && project.technologies.length > 0 && (
                            <div className="pt-2">
                              <div className="flex flex-wrap gap-2 items-center justify-center">
                                {project.technologies.slice(0, 3).map((tech) => (
                                  <Badge
                                    key={tech}
                                    variant="outline"
                                    className="text-xs border-primary/30 text-primary bg-primary/5 hover:bg-primary/15 transition-all"
                                  >
                                    {tech}
                                  </Badge>
                                ))}
                                {project.technologies.length > 3 && (
                                  <Badge
                                    variant="outline"
                                    className="text-xs border-accent/30 text-accent bg-accent/5"
                                  >
                                    +{project.technologies.length - 3}
                                  </Badge>
                                )}
                              </div>
                            </div>
                          )}

                          </div>

                          <div className="flex gap-2 pt-3 border-t border-primary/20">
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1"
                            >
                              <Button size="sm" variant="outline" className="w-full border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/60 transition-all">
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
                                <Button size="sm" variant="outline" className="w-full border-accent/30 text-accent hover:bg-accent/10 hover:border-accent/60 transition-all">
                                  <ExternalLink className="w-3 h-3 mr-1" />
                                  Live
                                </Button>
                              </a>
                            )}
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>

              {/* Call to Action Section */}
              <div className="fade-in-delayed relative group">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-accent/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                
                <Card className="relative p-10 md:p-12 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border-gradient-primary/30 hover:border-gradient-primary/60 transition-all duration-500 hover:shadow-2xl group cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:via-accent/5 group-hover:to-primary/5 transition-all duration-500 rounded-lg"></div>
                  
                  <div className="relative text-center space-y-6">
                    <div>
                      <h2 className="text-3xl md:text-4xl font-bold text-foreground group-hover:text-primary transition-colors">
                        Explore My Complete Work
                      </h2>
                    </div>
                    
                    <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto group-hover:text-foreground transition-colors">
                      Check out my complete portfolio of projects, research code, and open-source contributions on GitHub. Discover more innovative solutions and feel free to star ⭐ projects you find interesting!
                    </p>

                    <a
                      href="https://github.com/kasiranaweera"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        size="lg"
                        className="bg-gradient-primary mt-8 hover:opacity-90 transition-all duration-300 group/btn glow-primary hover:scale-105 px-8 py-3"
                      >
                        <Github className="w-5 h-5 mr-2" />
                        Visit GitHub Profile
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </a>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      )}
    </ProjectImageModal>
  );
};

export default Projects;