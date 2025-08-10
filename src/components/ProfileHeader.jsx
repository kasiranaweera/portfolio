import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SparkleAnimation from "./SparkleAnimation";
import { Github, Linkedin, Mail, ExternalLink, Star, GitFork, Brain, Zap, Bot } from "lucide-react";

const ProfileHeader = () => {
  const techStack = [
    "Python", "PyTorch", "TensorFlow", "Transformers", "LangChain", "OpenAI API",
    "Hugging Face", "Scikit-learn", "Pandas", "NumPy", "CUDA", "Docker",
    "FastAPI", "Streamlit", "Jupyter", "Git", "MLOps", "AutoGen"
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
            <h1 className="text-5xl md:text-7xl font-bold gradient-text animate-scale-in">
              Kasi Ranaweera
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground animate-slide-up" style={{ animationDelay: '0.2s' }}>
              AI/ML Engineer & Generative AI Researcher
            </p>
            <div className="space-y-3 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <p className="text-lg text-accent font-medium bg-accent/10 px-4 py-2 rounded-full inline-block">
                🎓 Computer Science • 🧠 Gen AI & Agentic AI Specialist • 🚀 Innovation Leader
              </p>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Pioneering the future of artificial intelligence through cutting-edge research in generative models, 
                multi-agent systems, and autonomous reasoning. Currently developing next-generation AI frameworks 
                that push the boundaries of what's possible in machine intelligence and human-AI collaboration.
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-2">
                <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium">🔬 Research</span>
                <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-medium">🤖 AI Agents</span>
                <span className="px-3 py-1 bg-secondary/20 text-secondary-foreground rounded-full text-sm font-medium">⚡ Innovation</span>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="fade-in-delayed grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-all duration-300 hover:scale-105">
              <div className="flex items-center justify-center space-x-3 mb-2">
                <Brain className="w-6 h-6 text-primary" />
                <span className="text-2xl font-bold text-foreground">50+</span>
              </div>
              <p className="text-muted-foreground">AI Projects</p>
            </Card>
            
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-all duration-300 hover:scale-105">
              <div className="flex items-center justify-center space-x-3 mb-2">
                <Zap className="w-6 h-6 text-accent" />
                <span className="text-2xl font-bold text-foreground">15+</span>
              </div>
              <p className="text-muted-foreground">Research Papers</p>
            </Card>
            
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-all duration-300 hover:scale-105">
              <div className="flex items-center justify-center space-x-3 mb-2">
                <Bot className="w-6 h-6 text-secondary-foreground" />
                <span className="text-2xl font-bold text-foreground">8+</span>
              </div>
              <p className="text-muted-foreground">AI Agents Built</p>
            </Card>
          </div>

          {/* Specializations */}
          <div className="fade-in-delayed mb-8">
            <h3 className="text-2xl font-semibold mb-6 text-foreground">Research Focus</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <Card className="p-4 bg-card/30 backdrop-blur-sm border-border/50">
                <div className="flex items-center space-x-3 mb-2">
                  <Bot className="w-5 h-5 text-primary" />
                  <h4 className="font-semibold text-foreground">Agentic AI</h4>
                </div>
                <p className="text-sm text-muted-foreground">Multi-agent systems, autonomous reasoning, and AI orchestration frameworks</p>
              </Card>
              <Card className="p-4 bg-card/30 backdrop-blur-sm border-border/50">
                <div className="flex items-center space-x-3 mb-2">
                  <Zap className="w-5 h-5 text-accent" />
                  <h4 className="font-semibold text-foreground">Generative AI</h4>
                </div>
                <p className="text-sm text-muted-foreground">LLMs, diffusion models, and creative AI applications</p>
              </Card>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="fade-in-delayed mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-foreground">Tech Stack</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {techStack.map((tech, index) => (
                <Badge 
                  key={tech} 
                  variant="secondary" 
                  className="px-4 py-2 text-sm font-medium bg-secondary/80 hover:bg-secondary transition-all duration-300 hover:scale-110"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="fade-in-delayed flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:opacity-90 transition-all duration-300 glow-primary hover:scale-105 px-8 py-3 animate-pulse-glow"
            >
              <Github className="w-5 h-5 mr-2" />
              Explore AI Projects
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary/50 hover:bg-primary/10 transition-all duration-300 hover:scale-105 px-8 py-3 hover:shadow-primary"
            >
              <Brain className="w-5 h-5 mr-2" />
              Research Publications
            </Button>
            
            <Button 
              variant="secondary" 
              size="lg"
              className="bg-gradient-secondary hover:opacity-90 transition-all duration-300 hover:scale-105 px-8 py-3"
            >
              <Bot className="w-5 h-5 mr-2" />
              AI Demos
            </Button>
          </div>

          {/* Social Links */}
          <div className="fade-in-delayed flex justify-center space-x-6">
            <a 
              href="#" 
              className="p-3 rounded-full bg-secondary/50 hover:bg-secondary transition-all duration-300 hover:scale-110 glow-secondary"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="#" 
              className="p-3 rounded-full bg-secondary/50 hover:bg-secondary transition-all duration-300 hover:scale-110 glow-secondary"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="#" 
              className="p-3 rounded-full bg-secondary/50 hover:bg-secondary transition-all duration-300 hover:scale-110 glow-secondary"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Enhanced Background decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-primary rounded-full opacity-20 animate-float glow-primary"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-gradient-secondary rounded-full opacity-30 animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-20 w-12 h-12 bg-gradient-accent rounded-full opacity-25 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/3 right-32 w-8 h-8 bg-primary/20 rounded-full animate-bounce-subtle" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute bottom-1/3 left-1/4 w-6 h-6 bg-accent/30 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none"></div>
    </div>
  );
};

export default ProfileHeader;