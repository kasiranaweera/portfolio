"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Github,
  ExternalLink,
  Star,
  Code2,
  Sparkles,
  Rocket,
  ArrowRight,
} from "lucide-react";
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
import imgp51 from "../../assets/img-p51.png";

const ProjectCarouselCard = ({ project, openModal }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (!project.images || project.images.length === 0) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [project.images]);

  const currentImage =
    project.images?.[currentImageIndex]?.src ||
    project.images?.[currentImageIndex];

  return (
    <Card className="p-8 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border-gradient-primary/30 hover:border-gradient-primary/60 transition-all duration-500 hover:shadow-2xl group cursor-pointer overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:via-accent/5 group-hover:to-primary/5 transition-all duration-500"></div>

      <div className="relative h-full">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4 border-b pb-4">
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
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 h-full">
          {/* Content Section - 3/5 */}
          <div className="lg:col-span-3 space-y-4 max-h-full">
            <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
              {project.description}
            </p>

            <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
              {project.longDescription}
            </p>

            {/* Key Points/Highlights */}
            <div className="space-y-2 pt-2">
              {project.highlights && project.highlights.length > 0 ? (
                <ul className="space-y-1">
                  {project.highlights.slice(0, 5).map((highlight, idx) => (
                    <li
                      key={idx}
                      className="text-xs text-muted-foreground flex items-start gap-2 group-hover:text-foreground transition-colors"
                    >
                      <span className="text-primary mt-1">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>

            <div className="mt-4">
              <div className="flex flex-col gap-3">
                {/* Status & Team */}
                <div className="flex flex-col gap-2 pt-2">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-semibold text-foreground">
                      Status:
                    </span>
                    <Badge
                      variant="secondary"
                      className="text-xs bg-primary/10 border border-primary/30 text-primary"
                    >
                      {project.status}
                    </Badge>
                  </div>
                  {/* {project.teamSize && (
                <div className="flex items-center gap-3">
                  <span className="text-sm font-semibold text-foreground">
                    Team:
                  </span>
                  <span className="text-sm text-accent font-medium">
                    {project.teamSize}
                  </span>
                </div>
              )} */}
                </div>

                {/* Technologies */}
                {project.technologies && project.technologies.length > 0 && (
                  <div className="flex gap-3">
                    <span className="text-sm font-semibold text-foreground">
                      Tech Stack:
                    </span>
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

                {project.impact && (
                  <div className="flex gap-3">
                    <span className="text-sm w-30 font-semibold text-foreground">
                      Impact:
                    </span>
                    <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                      {project.impact}
                    </p>
                  </div>
                )}
              </div>
            </div>
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
                  <p className="text-white text-sm font-medium">
                    Click to view fullscreen
                  </p>
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
              {/* Action Buttons */}
              {(project.github || project.live) && (
                <div className="flex flex-wrap gap-3 pt-4 mt-4 border-t border-primary/20 justify-center sm:justify-end">
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
                </div>
              )}
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
      title: "EduWingz - AI-Powered Education Platform",
      description:
        "EduWingz is a revolutionary AI-powered education platform designed to transform learning through personalization. The platform adapts to individual student learning patterns, providing customized teaching methods, content, and pacing. It combines generative AI with agentic systems to create an intelligent tutoring experience.",
      highlights: [
        "Personalized learning paths based on student performance and preferences",
        "AI-generated explanations and examples tailored to individual understanding levels",
        "Real-time progress tracking and analytics",
        "Interactive modules with adaptive difficulty",
        "Multi-modal content delivery (text, visual, interactive)",
        "Intelligent assessment and feedback system",
        "Student dashboard with learning insights",
      ],
      category: "Generative AI, Education Technology",
      technologies: [
        "React.js with Material UI",
        "Django REST framework",
        "LangChain",
        "RAG System",
        "DeepSeek & Gemini API",
        "SQLite",
        "FAISS vector store",
        "Vercel",
        "Render",
      ],
      github: "https://github.com/kasiranaweera/eduwingz",
      live: "https://eduwingz.vercel.app",
      status: "Final Year Project - Completed",
      teamSize: "Team Project",
      images: [imgp11, imgp12, imgp13],
      impact:
        "Demonstrated potential to improve learning outcomes through personalization while reducing teacher workload. Currently being piloted with test user groups.",
    },

    {
      title: "Knowingz Platform",
      description:
        "Knowingz is a comprehensive educational platform dedicated to mathematics for O/Level students in Sri Lanka. The platform provides free access to study materials, past papers, and interactive learning tools, addressing the gap in accessible quality education resources.",
      highlights: [
        "Comprehensive study materials organized by topics",
        "Complete collection of past papers with solutions",
        "Interactive mathematical tools and calculators",
        "Virtual mathematical keyboard for equation writing",
        "Practice problems with instant feedback",
        "Topic-wise video explanations",
        "Progress tracking for students",
        "Mobile-responsive design for learning anywhere",
      ],
      category: "Education Technology, Full-Stack",
      technologies: [
        "Next.js 14",
        "Tailwind CSS",
        "LaTeX integration",
        "Markdown-based content system",
        "Vercel",
        "User engagement tracking",
      ],
      github: "https://github.com/kasiranaweera/ol-poddo",
      live: "https://ol-poddo.vercel.app",
      status: "Completed",
      teamSize: "Solo Project",
      images: [imgp21, imgp22],
      impact:
        "Provides free educational resources to thousands of students who may not have access to expensive tuition or study materials. Contributing to educational equality in Sri Lanka.",
    },
    {
      title: "AI Assistant with MCP Servers",
      description:
        "An advanced AI assistant built using the Model Context Protocol (MCP), demonstrating integration of multiple AI services and tools. This project explores the cutting-edge of agentic AI, where multiple specialized components work together to solve complex tasks.",
      highlights: [
        "Multi-tool integration through MCP protocol",
        "LangChain orchestration for agent coordination",
        "Groq integration for high-speed inference",
        "Context-aware conversation management",
        "Tool selection and execution",
        "Error handling and fallback mechanisms",
      ],
      category: "Generative AI, Agentic Systems",
      technologies: [
        "LangChain",
        "Groq",
        "MCP",
        "Python with async capabilities",
      ],
      github: "https://github.com/kasiranaweera/AI-Assistant-With-MCP-Servers",
      live: "",
      status: "Completed",
      teamSize: "Solo Project",
      images: [imgp51],
      impact:
        " Showcases the potential of agentic AI systems to perform complex tasks by leveraging multiple specialized tools. Lays groundwork for future AI assistants that can seamlessly integrate diverse capabilities.",
    },
    {
      title: "HaiiBot - AI-powered chatbot platform",
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
      title: "Z-Score University Finder",
      category: "Machine Learning, Education",
      status: "Completed",
      Features: [
        "Historical cutoff analysis (2020-2025)",
        "Personalized course recommendations",
        "Probability estimation for admission",
        "Trend analysis and visualization",
        "Alternative course suggestions",
        "University comparison tools",
      ],
      description:
        "ML-based recommender for university courses using Z-scores and UGC cutoff data (2020-2025) to help make informed decisions.",
      technologies: [
        "Next JS",
        "Tailwind CSS",
        "Machine Learning",
        "LightGBM",
        "Kaggle",
        "Comprehensive UGC cutoff dataset",
      ],
      github: "https://github.com/kasiranaweera/Z-ScoreUniFinder",
      live: "https://www.kaggle.com/datasets/ranaweerakasi/sri-lanakan-ugc-cutoff-marks-dataset-2020-2025",
    },
    {
      title: "Whisper AI-Psychiatric",
      category: "AI & Healthcare, NLP",
      status: "Completed",
      description:
        "An innovative AI-powered mental health assistant that provides psychological support through voice interaction. The system uses fine-tuned language models, RAG for contextual responses, and crisis detection to offer sensitive, helpful mental health guidance.",
      technologies: [
        "OpenAI Whisper",
        "Fine-tuned Gemma-3 on psychology datasets",
        "FAISS vector database",
        "Kokoro TTS",
        "Streamlit",
        "PyTorch",
      ],
      github:
        "https://github.com/kasiranaweera/whisper-ai-psychiatric-RAG-gemma3-finetuned",
    },
    {
      title: "GenAI App with Docker & Hugging Face",
      category: "Generative AI, DevOps",
      status: "Completed",
      description:
        "Demonstration of building and deploying generative AI applications using Docker containers and Hugging Face Spaces. Showcases modern deployment practices for AI applications.",
      technologies: [
        "Docker",
        "Hugging Face Hub",
        "Hugging Face Spaces",
        "LangChain",
        "Environment-based settings",
      ],
      github: "https://github.com/kasiranaweera/GenAI-App",
      live: "https://huggingface.co/spaces/kasi-ranaweera/TextGenerationWithDockers",
    },
    {
      title: "Graph Neural Network on OGBN-arXiv",
      category: "Deep Learning, Research",
      status: "Completed",
      description:
        "Implementation and comparison of Graph Neural Networks (GCN, GraphSAGE, GAT) for node classification on the arXiv citation network. Explores different GNN architectures and their effectiveness on large-scale academic networks.",
      technologies: [
        "PyTorch Geometric",
        "OGBN-arXiv (Open Graph Benchmark)",
        "GCN, GraphSAGE, GAT",
        "Scikit-learn",
        "Matplotlib",
        "NumPy",
        "Google Colab",
      ],
      github: "https://github.com/kasiranaweera/GNN-ogbn-arxiv_dataset",
    },
    {
      title: "Road Accident Prediction System",
      category: "Machine Learning, Public Safety",
      satus: "Completed",
      description:
        "ML-based traffic accident prediction system achieving up to 89% accuracy using ensemble methods. Includes a Flask-based chatbot for real-time safety recommendations based on conditions.",
      technologies: [
        "Logistic Regression",
        "Random Forest",
        "Neural Networks",
        "TensorFlow",
        "Scikit-learn",
        "Flask API",
        "Pandas",
        "NumPy",
        "Up to 89% on test data",
      ],
      github: "https://github.com/kasiranaweera/road_accident_prediction",
    },
    {
      title: "Brainbox Quiz Application",
      category: "Full-Stack Development, Education",
      status: "Completed",
      description:
        "Full-stack quiz platform with React frontend and Django backend. Features real-time quiz functionality, score tracking, and user management.",
      technologies: [
        "React.js with modern hooks",
        "Material UI",
        "Django REST framework",
        "PostgreSQL",
        "JWT tokens",
        "WebSockets",
      ],
      github: "https://github.com/orgs/teammatess/repositories",
    },
    {
      title: "Smart Fan Control with Gesture Recognition",
      category: "IoT, Computer Vision",
      status: "Completed",
      description:
        "IoT-based system integrating sensors and machine learning for gesture recognition to enable automated fan control. Demonstrates practical application of CV and IoT integration.",
      technologies: [
        "OpenCV, MediaPipe",
        "TensorFlow",
        "sensors",
        "relay modules",
        "Python",
        "Aurdino",
        "MQTT protocol",
      ],
      github:
        "https://github.com/kasiranaweera/Smart-Fan-Control-Using-Image-Processing",
    },

    {
      title: "AR Space Education Application",
      category: "AR/VR, Education",
      status: "Completed",
      description:
        "Immersive Augmented Reality educational application focused on solar system exploration and space phenomena. Built with Unity and Vuforia SDK to create interactive learning experiences.",
      technologies: [
        "Unity 3D",
        "Vuforia",
        "C#",
        "Custom and asset store",
        "Android/iOS compatible",
      ],
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
                    <span className="text-sm font-medium text-primary">
                      My Creative Portfolio
                    </span>
                  </div>
                </div>

                {/* Hero Heading */}
                <div className="fade-in-up space-y-6 mb-12">
                  <div className="space-y-4">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold gradient-text leading-tight animate-slide-up">
                      Building Intelligent
                      <br />
                      <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-shimmer">
                        Solutions That Matter
                      </span>
                    </h1>
                  </div>

                  <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in">
                    This portfolio showcases my journey in AI/ML engineering and
                    full-stack development. Each project represents a step
                    toward making technology more accessible, intelligent, and
                    impactful. From educational platforms to mental health
                    assistants, I focus on creating solutions that address
                    real-world challenges.{" "}
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
                        <ProjectCarouselCard
                          project={project}
                          openModal={openModal}
                        />
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

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                    {otherProjects.map((project, index) => (
                      <Card
                        key={index}
                        className="p-6 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border-gradient-primary/30 hover:border-gradient-primary/60 transition-all duration-500 hover:shadow-2xl hover:scale-105 group cursor-pointer"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:via-accent/5 group-hover:to-primary/5 transition-all duration-500 rounded-lg"></div>

                        <div className="relative space-y-4 flex flex-col justify-between h-full">
                          <div className="border-b pb-4">
                            <h3 className="text-lg font-semibold text-foreground text-center group-hover:text-primary transition-colors">
                              {project.title}
                            </h3>
                            <div className="justify-center flex gap-2 mt-2">
                              <Badge
                                key={`${index}-category`}
                                variant="outline"
                                className="text-xs border-primary/30 text-primary bg-primary/5 hover:bg-primary/15 transition-all"
                              >
                                {project.category}
                              </Badge>
                              <Badge
                                key={`${index}-status`}
                                variant="outline"
                                className="text-xs border-primary/30 text-primary bg-primary/5 hover:bg-primary/15 transition-all"
                              >
                                {project.status}
                              </Badge>
                            </div>
                          </div>
                          <div className="flex flex-col gap-2">
                            <p className="text-sm text-muted-foreground text-center leading-relaxed group-hover:text-foreground transition-colors">
                              {project.description}
                            </p>

                            {project.technologies &&
                              project.technologies.length > 0 && (
                                <div className="pt-2">
                                  <div className="flex flex-wrap gap-2 items-center justify-center">
                                    {project.technologies
                                      .slice(0, 10)
                                      .map((tech) => (
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
                              <Button
                                size="sm"
                                variant="outline"
                                className="w-full border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/60 transition-all"
                              >
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
                                <Button
                                  size="sm"
                                  variant="outline"
                                  className="w-full border-accent/30 text-accent hover:bg-accent/10 hover:border-accent/60 transition-all"
                                >
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
                        Want to see the code?
                      </h2>
                    </div>

                    <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto group-hover:text-foreground transition-colors">
                      All projects are open-source and available on GitHub. Feel free to explore, fork, or contribute!
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
