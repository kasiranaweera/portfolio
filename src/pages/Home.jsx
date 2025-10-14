import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SparkleAnimation from "../components/SparkleAnimation";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Star,
  GitFork,
  Brain,
  Zap,
  Bot,
} from "lucide-react";
import Specializations from "../components/Specializations";
import TechStack from "../components/TechStack";

const Home = () => {
  const techStack = [
    "Python",
    "PyTorch",
    "TensorFlow",
    "Transformers",
    "LangChain",
    "OpenAI API",
    "Hugging Face",
    "Scikit-learn",
    "Pandas",
    "NumPy",
    "CUDA",
    "Docker",
    "FastAPI",
    "Streamlit",
    "Jupyter",
    "Git",
    "MLOps",
    "AutoGen",
  ];

  const technologies = [
    { name: "React", icon: "/placeholder-gpkqp.png", color: "border-blue-400" },
    {
      name: "Node.js",
      icon: "/nodejs-green-logo.png",
      color: "border-green-500",
    },
    {
      name: "MongoDB",
      icon: "/placeholder-pl82f.png",
      color: "border-green-600",
    },
    {
      name: "Express.js",
      icon: "/placeholder-2a92r.png",
      color: "border-gray-600",
    },
    {
      name: "Python",
      icon: "/python-logo-yellow-blue.png",
      color: "border-yellow-500",
    },
    { name: "Java", icon: "/java-logo-red.png", color: "border-red-500" },
    { name: "Docker", icon: "/docker-logo-blue.png", color: "border-blue-500" },
    { name: "AWS", icon: "/placeholder-rd9xh.png", color: "border-orange-500" },
  ];

  const aiTechnologies = [
    {
      name: "TensorFlow",
      icon: "/tensorflow-logo-orange.png",
      color: "border-orange-400",
    },
    { name: "PyTorch", icon: "/pytorch-logo-red.png", color: "border-red-400" },
    {
      name: "Scikit-learn",
      icon: "/scikit-learn-logo-blue-orange.png",
      color: "border-blue-400",
    },
    {
      name: "Google Cloud",
      icon: "/placeholder.svg?height=32&width=32",
      color: "border-blue-500",
    },
    {
      name: "Git",
      icon: "/placeholder.svg?height=32&width=32",
      color: "border-orange-600",
    },
    {
      name: "REST API",
      icon: "/placeholder.svg?height=32&width=32",
      color: "border-indigo-500",
    },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-background overflow-hidden">
      <SparkleAnimation />

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Avatar */}
          <div className="fade-in-up mb-8">
            <div className="relative inline-block">
              <div className="w-32 h-32 mx-auto rounded-full bg-gradient-primary p-1 glow-primary">
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center text-3xl font-bold gradient-text">
                  <Brain className="w-16 h-16" />
                </div>
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-secondary rounded-full flex items-center justify-center animate-float">
                <Bot className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>

          {/* Name and Title */}
          <div className="fade-in-up space-y-4 mb-12">
            {/* <p
              className="text-xl md:text-2xl text-muted-foreground animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              AI/ML Engineer & Developer
            </p>
            <h1 className="text-5xl md:text-7xl font-bold gradient-text animate-scale-in">
              KASI Ranaweera
            </h1>
            <h4 className="text-2xl md:text-4xl font-bold gradient-text animate-scale-in">
              _sithija_
            </h4>
            <div class="h-4"></div> */}
            <div
              className="space-y-3 animate-slide-up"
              style={{ animationDelay: "0.4s" }}
            >
              <h1 className="text-5xl md:text-7xl font-bold gradient-text animate-scale-in">
                AI is the Engine that Powers the Future{" "}
              </h1>
              <div class="h-4"></div>
              <p className="text-lg text-accent font-medium bg-accent/10 px-4 py-2 rounded-full inline-block">
                🎓 Software Engineering (UG) &nbsp;&nbsp; 🧠 Aspiring AI Engineer &nbsp;&nbsp; 🚀 Passionate about Gen & Agentic AI
              </p>
              <p className="text-lg text-muted-foreground max-w-5xl mx-auto leading-relaxed">
                I'm KASI Ranaweera, Pioneering the future of artificial
                intelligence through cutting-edge research in generative models,
                multi-agent systems, and autonomous reasoning. Currently
                developing next-generation AI frameworks that push the
                boundaries of what's possible in machine intelligence and
                human-AI collaboration.
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-2">
                <span className="px-3 py-1 bg-secondary/20 text-secondary-foreground rounded-full text-sm font-medium">
                  🔬 Research
                </span>
                <span className="px-3 py-1 bg-secondary/20 text-secondary-foreground rounded-full text-sm font-medium">
                  🤖 AI Models
                </span>
                <span className="px-3 py-1 bg-secondary/20 text-secondary-foreground rounded-full text-sm font-medium">
                  ⚡ Innovation
                </span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="fade-in-delayed flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a href="https://github.com/kasiranaweera">
              <Button
                size="lg"
                className="bg-gradient-primary hover:opacity-90 transition-all duration-300 glow-primary hover:scale-105 px-8 py-3 animate-pulse-glow"
              >
                <Github className="w-5 h-5 mr-2" />
                Explore AI Projects
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </a>
            <a href="/contact">
              {" "}
              <Button
                variant="outline"
                size="lg"
                className="border-primary/50 hover:bg-primary/10 hover:text-white transition-all duration-300 hover:scale-105 px-8 py-3 hover:shadow-primary"
              >
                <Star className="w-5 h-5 mr-2" />
                Let's Collaborate
              </Button>
            </a>
          </div>

          {/* Stats Cards */}
          <div className="fade-in-delayed grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-all duration-300 hover:scale-105">
              <div className="flex items-center justify-center space-x-3 mb-2">
                <Brain className="w-6 h-6 text-primary" />
                <span className="text-2xl font-bold text-foreground">20+</span>
              </div>
              <p className="text-muted-foreground">AI & Software Projects</p>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-all duration-300 hover:scale-105">
              <div className="flex items-center justify-center space-x-3 mb-2">
                <Zap className="w-6 h-6 text-accent" />
                <span className="text-2xl font-bold text-foreground">3+</span>
              </div>
              <p className="text-muted-foreground">End to End Solutions</p>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-all duration-300 hover:scale-105">
              <div className="flex items-center justify-center space-x-3 mb-2">
                <Bot className="w-6 h-6 text-secondary-foreground" />
                <span className="text-2xl font-bold text-foreground">8+</span>
              </div>
              <p className="text-muted-foreground">AI Models</p>
            </Card>
          </div>

          {/* Scroll Indicator */}
          <div className="flex bottom-6 sm:bottom-8  transform -translate-x-1/2 animate-bounce justify-center">
            <div className="w-5 sm:w-6 h-8 sm:h-10 border-2 border-black/30 dark:border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-2 sm:h-3 bg-black/50 dark:bg-white/50 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>

          {/* Specializations */}
          <Specializations />

          {/* Tech Stack */}
          <TechStack />

          {/* Call Section */}
          <div className="fade-in-delayed mb-12 mt-24">
            <h3 className="text-2xl font-semibold mb-6 text-foreground mt-20">
              Ready to Build the Future Together?
            </h3>
            <div className="text-md leading-relaxed text-muted-foreground px-10 mb-8">
              Join me in creating intelligent, impactful solutions through AI,
              machine learning, and cutting-edge software engineering. Whether
              you’re looking to collaborate, share ideas, or start a project —
              let’s make it happen.
            </div>
            <a href="/contact">
              {" "}
              <Button
                variant="outline"
                size="lg"
                className="border-primary/50 hover:bg-primary/10 hover:text-white transition-all duration-300 hover:scale-105 px-8 py-3 hover:shadow-primary"
              >
                <Star className="w-5 h-5 mr-2" />
                Let's Collaborate
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Enhanced Background decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-primary rounded-full opacity-20 animate-float glow-primary"></div>
      <div
        className="absolute bottom-20 right-10 w-16 h-16 bg-gradient-secondary rounded-full opacity-30 animate-float"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute top-1/2 left-20 w-12 h-12 bg-gradient-accent rounded-full opacity-25 animate-float"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute top-1/3 right-32 w-8 h-8 bg-primary/20 rounded-full animate-bounce-subtle"
        style={{ animationDelay: "0.5s" }}
      ></div>
      <div
        className="absolute bottom-1/3 left-1/4 w-6 h-6 bg-accent/30 rounded-full animate-pulse"
        style={{ animationDelay: "1.5s" }}
      ></div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none"></div>
    </div>
  );
};

export default Home;
