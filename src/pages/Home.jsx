'use client';

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import SparkleAnimation from "../components/SparkleAnimation";
import RecentProjectsCarousel from "../components/RecentProjectsCarousel";
import {
  Mail,
  Star,
  Brain,
  Zap,
  Bot,
  GraduationCap,
  FileText,
  Sparkles,
  Code,
  Cpu,
  Rocket,
  ArrowRight,
} from "lucide-react";
import TechStack from "../components/TechStack";
import { useState, useEffect } from "react";

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const recentProjects = [
    {
      title: "EduWingz",
      description:
        "An AI-powered education platform designed to transform learning by delivering personalized experiences tailored to individual student needs. Utilizing generative and agentic AI, the platform adapts teaching methods to unique learning patterns.",
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
      status: "Completed",
    },
    {
      title: "Knowingz Platform",
      description:
        "An educational platform dedicated to mathematics for school students, with focus on supporting O/L learners by providing essential study materials, past papers, and exam resources.",
      category: "Solo Project",
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
    },
    {
      title: "Whisper AI-Psychiatric",
      description:
        "AI-powered mental health assistant featuring voice interaction, fine-tuned Gemma-3 model for psychological guidance, RAG for context-aware responses, and crisis detection.",
      category: "AI Project",
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
      status: "Completed",
    },
    {
      title: "Z-Score Uni Finder",
      description:
        "ML-based recommender for university courses using Z-scores and UGC cutoff data (2020-2025) to help students make informed decisions about their educational future.",
      category: "ML Project",
      technologies: [
        "Next JS",
        "Tailwind CSS",
        "Machine Learning",
        "LightGBM",
        "Kaggle",
      ],
      github: "https://github.com/kasiranaweera/Z-ScoreUniFinder",
      live: "https://www.kaggle.com/datasets/ranaweerakasi/sri-lanakan-ugc-cutoff-marks-dataset-2020-2025",
      status: "Completed",
    },
    {
      title: "Road Accident Prediction",
      description:
        "ML-based traffic accident prediction using logistic regression, random forest, and neural networks achieving up to 89% accuracy, plus a Flask chatbot for real-time safety.",
      category: "ML Project",
      technologies: ["TensorFlow", "Scikit-learn", "Flask", "Python"],
      github: "https://github.com/kasiranaweera/road_accident_prediction",
      status: "Completed",
    },
  ];

  const highlights = [
    { icon: <Brain className="w-6 h-6" />, label: "20+", value: "AI & Software Projects" },
    { icon: <Zap className="w-6 h-6" />, label: "3+", value: "End-to-End Solutions" },
    { icon: <Bot className="w-6 h-6" />, label: "8+", value: "AI Models Built" },
  ];

  const specialties = [
    {
      icon: <Sparkles className="w-5 h-5" />,
      title: "Generative & Agentic AI",
      description: "Multi-agent systems, LLMs, autonomous reasoning, and RAG frameworks.",
    },
    {
      icon: <Code className="w-5 h-5" />,
      title: "Full-Stack Development",
      description: "React, Next.js, Django, Node.js, and MERN stack applications.",
    },
    {
      icon: <Cpu className="w-5 h-5" />,
      title: "Machine Learning",
      description: "PyTorch, TensorFlow, neural networks, and AI research & development.",
    },
    {
      icon: <Rocket className="w-5 h-5" />,
      title: "Languages & Tools",
      description: "Python, Java, JavaScript, Docker, and cloud deployment.",
    },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-background overflow-hidden">
      <SparkleAnimation />

      <div className="relative z-10 container mx-auto px-6 py-20 lg:py-32">
        <div className="max-w-5xl mx-auto">
          {/* HERO SECTION */}
          <div className="text-center mb-20 lg:mb-32">
            {/* Animated Badge */}
            <div className="fade-in-up mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
                <Sparkles className="w-4 h-4 text-primary animate-spin-slow" />
                <span className="text-sm font-medium text-primary">Welcome to My Portfolio</span>
              </div>
            </div>

            {/* Profile Avatar with Enhanced Animation */}
            <div className="fade-in-up mb-12">
              <div className="relative inline-block group">
                <div className="absolute inset-0 bg-gradient-primary rounded-full blur-3xl opacity-40 group-hover:opacity-60 transition-opacity duration-500 animate-pulse-glow"></div>
                <div className="relative w-40 h-40 mx-auto rounded-full bg-gradient-primary p-1 glow-primary">
                  <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                    <div className="relative">
                      <Brain className="w-20 h-20 text-primary animate-float" />
                      <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-secondary rounded-full flex items-center justify-center animate-bounce-subtle">
                        <Cpu className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Hero Heading */}
            <div className="fade-in-up space-y-6 mb-12">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold gradient-text leading-tight animate-slide-up">
                  Pioneering the Future with
                  <br />
                  <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-shimmer">
                    Intelligent AI Solutions
                  </span>
                </h1>
              </div>

              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in">
                I'm <span className="font-semibold text-foreground">Sithija Ishan Ranaweera (KASI)</span>, a Software Engineer & AI/ML enthusiast pushing the boundaries of generative AI, multi-agent systems, and autonomous reasoning.
              </p>

              {/* Quick Stats Pills */}
              <div className="flex flex-wrap justify-center gap-3 pt-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <div className="px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-sm font-medium text-foreground hover:bg-primary/20 transition-all duration-300">
                  🎓 Software Engineering (UG)
                </div>
                <div className="px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-sm font-medium text-foreground hover:bg-accent/20 transition-all duration-300">
                  🧠 AI/ML Engineer
                </div>
                <div className="px-4 py-2 rounded-full bg-secondary/10 border border-secondary/50 text-sm font-medium text-foreground hover:bg-secondary/20 transition-all duration-300">
                  🚀 GenAI & Agents
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="fade-in-delayed flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 flex-wrap">
              <a href="/projects">
                <Button
                  size="lg"
                  className="bg-gradient-primary hover:opacity-90 transition-all duration-300 glow-primary hover:scale-105 px-8 py-3 animate-pulse-glow group"
                >
                  <Rocket className="w-5 h-5 mr-2 group-hover:translate-y-[-2px] transition-transform" />
                  Explore My Work
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>

              <a href="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary/50 hover:bg-primary/10 hover:text-white transition-all duration-300 hover:scale-105 px-8 py-3 hover:shadow-primary"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Get in Touch
                </Button>
              </a>
            </div>
          </div>

          {/* HIGHLIGHTS SECTION */}
          <div className="fade-in-delayed grid grid-cols-1 md:grid-cols-3 gap-6 mb-24 relative">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border border-gradient-primary/30 hover:border-gradient-primary/60 transition-all duration-500 hover:scale-110 hover:shadow-2xl cursor-pointer"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                {/* Animated gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/20 group-hover:via-accent/10 group-hover:to-primary/10 transition-all duration-500"></div>
                
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                
                {/* Content - Horizontal Layout */}
                <div className="relative p-8 flex items-center justify-between h-full gap-4">
                  {/* Icon on Left */}
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-primary/30 to-accent/20 group-hover:from-primary/50 group-hover:to-accent/30 transition-all duration-300 transform group-hover:scale-125 group-hover:-rotate-12 shadow-lg group-hover:shadow-primary/50 flex-shrink-0">
                    <span className="text-primary group-hover:text-accent transition-colors duration-300">{item.icon}</span>
                  </div>
                  
                  {/* Content on Right */}
                  <div className="flex-grow space-y-1">
                    <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent group-hover:animate-pulse">
                      {item.label}
                    </div>
                    <p className="text-xs md:text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300 line-clamp-2">
                      {item.value}
                    </p>
                  </div>
                  
                  {/* Decorative line */}
                  <div className="h-0 group-hover:h-12 w-1 bg-gradient-to-b from-primary to-accent rounded-full transition-all duration-500 flex-shrink-0"></div>
                </div>
              </div>
            ))}
          </div>

          {/* ABOUT SECTION */}
          <div className="fade-in-delayed mb-24 relative group">
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-accent/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
            
            <div className="relative">
              <div className="mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 flex items-center justify-center">
                  <Brain className="w-8 h-8 mr-3 text-primary" />
                  About Me & My Expertise
                </h2>
                <div className="h-1 w-20 bg-gradient-primary mx-auto rounded-full"></div>
              </div>

              <div className="max-w-4xl mx-auto">
                {/* About Content */}
                <Card className="p-8 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border-gradient-primary/30 hover:border-gradient-primary/60 transition-all duration-500 hover:shadow-2xl mb-12 group">
                  {/* Animated background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:via-accent/5 group-hover:to-primary/5 transition-all duration-500 rounded-lg"></div>
                  
                  <div className="relative space-y-4">
                    <p className="text-base text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                      I'm <span className="font-semibold text-foreground">Sithija Ishan Ranaweera (KASI)</span>, a passionate Software and AI/ML Engineer from Sri Lanka. Currently pursuing my BSc (Hons) in Software Engineering at Sri Lanka Technological Campus (SLTC), I'm dedicated to advancing artificial intelligence through cutting-edge research and real-world applications.
                    </p>
                    <p className="text-base text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                      My core focus lies in <span className="font-semibold text-foreground">Generative AI</span>, <span className="font-semibold text-foreground">Agentic Systems</span>, <span className="font-semibold text-foreground">Deep Learning</span>, and <span className="font-semibold text-foreground">multi-agent architectures</span>, building intelligent solutions that leverage advanced LLMs, RAG pipelines, autonomous reasoning, diffusion models, and orchestration frameworks.
                    </p>
                  </div>
                </Card>

                {/* Specializations Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                  {specialties.map((item, idx) => (
                    <Card
                      key={idx}
                      className="p-6 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border-gradient-primary/30 hover:border-gradient-primary/60 transition-all duration-500 hover:shadow-2xl hover:scale-105 group cursor-pointer"
                      style={{ animationDelay: `${idx * 0.1}s` }}
                    >
                      {/* Animated background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:via-accent/5 group-hover:to-primary/5 transition-all duration-500 rounded-lg"></div>
                      
                      <div className="relative flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary/30 to-accent/20 group-hover:from-primary/50 group-hover:to-accent/30 transition-all text-primary group-hover:scale-125 group-hover:text-accent shadow-lg">
                            {item.icon}
                          </div>
                        </div>
                        <div className="flex-grow">
                          <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                            {item.title}
                          </h4>
                          <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="pt-4 gap-2 flex flex-col sm:flex-row justify-center flex-wrap">
                  <a href="/about">
                    <Button
                      variant="outline"
                      className="border-primary/50 hover:bg-primary/10 hover:text-white transition-all duration-300 hover:scale-105 px-8 py-3 hover:shadow-primary hover:border-primary/80 group"
                    >
                      <GraduationCap className="w-4 h-4 mr-2 group-hover:-translate-y-1 transition-transform" />
                      Know My Story
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </a>
                  <a href="/cv">
                    <Button
                      variant="secondary"
                      className="hover:opacity-90 transition-all duration-300 hover:scale-105 px-8 py-3 group hover:shadow-lg"
                    >
                      <FileText className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                      View My CV
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* TECH STACK */}
          <TechStack />

          {/* PROJECTS SECTION */}
          <div className="fade-in-delayed mb-24 mt-24 relative group">
            {/* Background glow effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
            
            <div className="relative">
              <div className="mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 flex items-center justify-center">
                  <Star className="w-8 h-8 mr-3 text-accent animate-spin-slow" />
                  Recent Projects Showcase
                </h2>
                <div className="h-1 w-20 bg-gradient-primary mx-auto rounded-full"></div>
              </div>

              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-12 text-center">
                Explore my latest AI, ML, and full-stack development projects that showcase innovation and technical excellence.
              </p>
              
              <div className="relative">
                {/* Decorative corner accents */}
                <div className="absolute -top-4 -left-4 w-32 h-32 bg-gradient-primary opacity-5 rounded-full blur-3xl pointer-events-none"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-accent opacity-5 rounded-full blur-3xl pointer-events-none"></div>
                
                <div style={{ maxWidth: "1200px", margin: "0 auto" }} className="relative z-10">
                  <RecentProjectsCarousel projects={recentProjects} />
                </div>
              </div>
            </div>
          </div>

          {/* CTA SECTION */}
          <div className="fade-in-delayed mb-12 mt-24 text-center relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border border-gradient-primary/30 hover:border-gradient-primary/60 transition-all duration-500 p-12 md:p-16">
              {/* Animated background overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/15 group-hover:via-accent/5 group-hover:to-primary/10 transition-all duration-500"></div>
              
              {/* Decorative corner accents */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-primary opacity-5 rounded-full blur-3xl pointer-events-none"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-accent opacity-5 rounded-full blur-3xl pointer-events-none"></div>
              
              <div className="relative z-10">
                <h3 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  Ready to Build the Future Together?
                </h3>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed group-hover:text-foreground transition-colors">
                  Join me in creating intelligent, impactful solutions through AI, machine learning, and cutting-edge software engineering. Let's transform ideas into reality.
                </p>
                <a href="/contact">
                  <Button
                    size="lg"
                    className="bg-gradient-primary hover:opacity-90 transition-all duration-300 glow-primary hover:scale-110 px-10 py-3 group shadow-lg hover:shadow-2xl hover:shadow-primary/50"
                  >
                    <Sparkles className="w-5 h-5 mr-2 group-hover:animate-spin-slow" />
                    Let's Collaborate
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-primary rounded-full opacity-10 animate-float glow-primary blur-3xl"></div>
      <div
        className="absolute bottom-32 right-10 w-24 h-24 bg-gradient-secondary rounded-full opacity-15 animate-float blur-3xl"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute top-1/2 left-20 w-16 h-16 bg-gradient-accent rounded-full opacity-20 animate-float blur-2xl"
        style={{ animationDelay: "2s" }}
      ></div>
    </div>
  );
};

export default Home;
