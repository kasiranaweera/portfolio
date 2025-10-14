import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Star, GitFork, Eye, Calendar, Users, Zap, Brain, Bot, Code2 } from "lucide-react";

const Projects = () => {
  const featuredProjects = [
    {
      title: "AgentFlow",
      description: "A comprehensive framework for building, orchestrating, and managing AI agent workflows. Features visual workflow designer, real-time monitoring, and seamless integration with popular LLM APIs.",
      longDescription: "AgentFlow revolutionizes how developers create multi-agent AI systems. With its intuitive visual interface, you can design complex agent interactions, implement conditional logic, and monitor performance in real-time.",
      category: "Agentic AI",
      technologies: ["Python", "FastAPI", "React", "LangChain", "Docker", "Redis"],
      github: "https://github.com/kasi/agentflow",
      live: "https://agentflow.ai",
      stats: { stars: 2340, forks: 456, watchers: 123 },
      featured: true,
      status: "Active Development",
      teamSize: 8,
      impact: "Used by 1000+ developers worldwide"
    },
    {
      title: "ReasonAI",
      description: "Advanced reasoning engine that enables AI systems to perform complex logical reasoning, causal inference, and decision-making with human-like accuracy.",
      longDescription: "ReasonAI implements state-of-the-art reasoning algorithms including chain-of-thought, tree-of-thought, and novel reasoning patterns to solve complex problems autonomously.",
      category: "AI Research",
      technologies: ["PyTorch", "Transformers", "CUDA", "Python", "Jupyter"],
      github: "https://github.com/kasi/reasonai",
      live: "https://reasonai-demo.com",
      stats: { stars: 1890, forks: 234, watchers: 89 },
      featured: true,
      status: "Research Phase",
      teamSize: 5,
      impact: "3 published papers, 500+ citations"
    },
    {
      title: "NeuralChat",
      description: "Next-generation conversational AI with advanced memory management, personality customization, and multi-modal capabilities including vision and voice.",
      longDescription: "NeuralChat combines cutting-edge language models with innovative memory architectures to create AI assistants that truly understand context and maintain coherent long-term conversations.",
      category: "Generative AI",
      technologies: ["Python", "OpenAI API", "Whisper", "DALL-E", "FastAPI", "PostgreSQL"],
      github: "https://github.com/kasi/neuralchat",
      live: "https://neuralchat.app",
      stats: { stars: 3456, forks: 678, watchers: 234 },
      featured: true,
      status: "Production",
      teamSize: 12,
      impact: "10M+ conversations processed"
    }
  ];

  const otherProjects = [
    {
      title: "MLOps Pipeline",
      description: "End-to-end MLOps solution with automated model training, validation, deployment, and monitoring capabilities.",
      technologies: ["Python", "Kubernetes", "MLflow", "Prometheus", "Grafana"],
      github: "https://github.com/kasi/mlops-pipeline",
      stats: { stars: 567, forks: 123 }
    },
    {
      title: "DataViz AI",
      description: "AI-powered data visualization tool that automatically generates insights and beautiful charts from raw data.",
      technologies: ["React", "D3.js", "Python", "Pandas", "OpenAI API"],
      github: "https://github.com/kasi/dataviz-ai",
      live: "https://dataviz-ai.com",
      stats: { stars: 890, forks: 156 }
    },
    {
      title: "Smart Recommender",
      description: "Real-time recommendation system using collaborative filtering and deep learning for personalized user experiences.",
      technologies: ["TensorFlow", "Redis", "FastAPI", "PostgreSQL"],
      github: "https://github.com/kasi/smart-recommender",
      stats: { stars: 432, forks: 87 }
    },
    {
      title: "Vision Transformer Plus",
      description: "Enhanced Vision Transformer architecture with improved attention mechanisms for computer vision tasks.",
      technologies: ["PyTorch", "CUDA", "OpenCV", "Jupyter"],
      github: "https://github.com/kasi/vit-plus",
      stats: { stars: 1234, forks: 289 }
    },
    {
      title: "TextGen Studio",
      description: "Creative writing assistant powered by fine-tuned language models with style transfer capabilities.",
      technologies: ["Transformers", "Gradio", "Python", "Hugging Face"],
      github: "https://github.com/kasi/textgen-studio",
      live: "https://textgen-studio.app",
      stats: { stars: 678, forks: 134 }
    },
    {
      title: "AI Ethics Toolkit",
      description: "Comprehensive toolkit for assessing and mitigating bias in AI models with fairness metrics and reporting.",
      technologies: ["Python", "Scikit-learn", "Streamlit", "Matplotlib"],
      github: "https://github.com/kasi/ai-ethics-toolkit",
      stats: { stars: 345, forks: 67 }
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-background py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
              My Projects
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A collection of AI research projects, open-source tools, and innovative applications 
              that push the boundaries of artificial intelligence and machine learning.
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
                            <h3 className="text-2xl font-bold text-foreground">{project.title}</h3>
                            <Badge variant="secondary" className="bg-primary/10 text-primary">
                              {project.category}
                            </Badge>
                          </div>
                          <p className="text-lg text-muted-foreground mb-4">{project.description}</p>
                          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                            {project.longDescription}
                          </p>
                        </div>
                      </div>

                      {/* Technologies */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-foreground mb-3">Technologies</h4>
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

                      {/* Actions */}
                      <div className="flex flex-wrap gap-3">
                        <Button 
                          variant="default" 
                          className="bg-gradient-primary hover:opacity-90 transition-all duration-300"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          View Code
                        </Button>
                        {project.live && (
                          <Button variant="outline" className="border-accent/50 text-accent hover:bg-accent/10">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live Demo
                          </Button>
                        )}
                      </div>
                    </div>

                    {/* Stats & Info */}
                    <div className="space-y-6">
                      {/* GitHub Stats */}
                      <div className="bg-background/50 p-4 rounded-lg border border-border/50">
                        <h4 className="text-sm font-semibold text-foreground mb-3">GitHub Stats</h4>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-muted-foreground flex items-center">
                              <Star className="w-3 h-3 mr-1" />
                              Stars
                            </span>
                            <span className="text-sm font-medium">{project.stats.stars.toLocaleString()}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-muted-foreground flex items-center">
                              <GitFork className="w-3 h-3 mr-1" />
                              Forks
                            </span>
                            <span className="text-sm font-medium">{project.stats.forks}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-muted-foreground flex items-center">
                              <Eye className="w-3 h-3 mr-1" />
                              Watching
                            </span>
                            <span className="text-sm font-medium">{project.stats.watchers}</span>
                          </div>
                        </div>
                      </div>

                      {/* Project Details */}
                      <div className="bg-background/50 p-4 rounded-lg border border-border/50">
                        <h4 className="text-sm font-semibold text-foreground mb-3">Project Details</h4>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-muted-foreground">Status</span>
                            <Badge variant="secondary" className="text-xs">
                              {project.status}
                            </Badge>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-muted-foreground flex items-center">
                              <Users className="w-3 h-3 mr-1" />
                              Team Size
                            </span>
                            <span className="text-sm font-medium">{project.teamSize}</span>
                          </div>
                          <div className="pt-2">
                            <span className="text-sm text-muted-foreground">Impact</span>
                            <p className="text-xs text-accent mt-1">{project.impact}</p>
                          </div>
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
                  <h3 className="text-xl font-semibold text-foreground mb-3">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
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
                        <Badge variant="outline" className="text-xs border-border/50 text-muted-foreground">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                    <div className="flex items-center space-x-3">
                      <span className="flex items-center">
                        <Star className="w-3 h-3 mr-1" />
                        {project.stats.stars}
                      </span>
                      <span className="flex items-center">
                        <GitFork className="w-3 h-3 mr-1" />
                        {project.stats.forks}
                      </span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline" className="flex-1">
                      <Github className="w-3 h-3 mr-1" />
                      Code
                    </Button>
                    {project.live && (
                      <Button size="sm" variant="ghost" className="flex-1">
                        <ExternalLink className="w-3 h-3 mr-1" />
                        Demo
                      </Button>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 animate-fade-in">
            <Card className="p-8 bg-card/30 backdrop-blur-sm border-border/50">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Explore More on GitHub</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Check out my complete portfolio of projects, research code, and open-source contributions 
                on GitHub. Star ⭐ projects you find interesting!
              </p>
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:opacity-90 transition-all duration-300 hover:scale-105"
              >
                <Github className="w-5 h-5 mr-2" />
                Visit GitHub Profile
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
