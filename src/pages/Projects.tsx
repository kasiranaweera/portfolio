import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Star, GitFork, Eye } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "AgentFlow",
      description: "A comprehensive framework for building and orchestrating multi-agent AI systems with natural language interfaces.",
      longDescription: "AgentFlow enables developers to create sophisticated AI agent networks that can collaborate, delegate tasks, and reason collectively. Features include agent memory management, inter-agent communication protocols, and a visual workflow designer.",
      image: "🤖",
      technologies: ["Python", "LangChain", "FastAPI", "Redis", "PostgreSQL"],
      category: "Agentic AI",
      stats: { stars: 1240, forks: 180, views: 15600 },
      status: "Active",
      featured: true,
      links: {
        github: "#",
        demo: "#",
        docs: "#"
      }
    },
    {
      id: 2,
      title: "Neural Style Transformer",
      description: "Real-time artistic style transfer using optimized transformer architectures for mobile and web applications.",
      longDescription: "This project implements state-of-the-art neural style transfer techniques optimized for real-time performance. Includes a web interface and mobile SDK for seamless integration.",
      image: "🎨",
      technologies: ["PyTorch", "TensorScript", "React", "WebGL", "ONNX"],
      category: "Computer Vision",
      stats: { stars: 890, forks: 120, views: 8400 },
      status: "Complete",
      featured: true,
      links: {
        github: "#",
        demo: "#"
      }
    },
    {
      id: 3,
      title: "LLM Fine-tuning Toolkit",
      description: "Streamlined toolkit for fine-tuning large language models with custom datasets and domain-specific knowledge.",
      longDescription: "A comprehensive solution for researchers and developers to fine-tune LLMs efficiently. Includes data preprocessing, distributed training, and model evaluation components.",
      image: "🧠",
      technologies: ["Transformers", "PyTorch", "Docker", "Weights & Biases", "Gradio"],
      category: "NLP",
      stats: { stars: 2100, forks: 340, views: 21000 },
      status: "Active",
      featured: true,
      links: {
        github: "#",
        docs: "#"
      }
    },
    {
      id: 4,
      title: "AI Research Assistant",
      description: "An intelligent research assistant that helps scientists discover, summarize, and analyze academic papers using RAG architecture.",
      longDescription: "This AI assistant leverages retrieval-augmented generation to help researchers stay updated with the latest developments in their field, generate literature reviews, and identify research gaps.",
      image: "📚",
      technologies: ["OpenAI API", "ChromaDB", "Streamlit", "LangChain", "arXiv API"],
      category: "Research Tools",
      stats: { stars: 567, forks: 78, views: 5200 },
      status: "Beta",
      featured: false,
      links: {
        github: "#",
        demo: "#"
      }
    },
    {
      id: 5,
      title: "Distributed ML Pipeline",
      description: "Scalable machine learning pipeline for training and deploying models across distributed computing environments.",
      longDescription: "A production-ready MLOps solution that handles data preprocessing, model training, hyperparameter optimization, and deployment with built-in monitoring and versioning.",
      image: "⚡",
      technologies: ["Kubernetes", "MLflow", "Apache Spark", "TensorFlow", "Prometheus"],
      category: "MLOps",
      stats: { stars: 734, forks: 156, views: 9800 },
      status: "Active",
      featured: false,
      links: {
        github: "#"
      }
    },
    {
      id: 6,
      title: "Vision Transformer Playground",
      description: "Interactive platform for experimenting with Vision Transformers (ViTs) on custom datasets and architectures.",
      longDescription: "A web-based tool that allows researchers to experiment with different ViT configurations, visualize attention maps, and compare performance across various computer vision tasks.",
      image: "👁️",
      technologies: ["PyTorch", "Gradio", "timm", "Matplotlib", "Pillow"],
      category: "Computer Vision",
      stats: { stars: 445, forks: 67, views: 4100 },
      status: "Complete",
      featured: false,
      links: {
        github: "#",
        demo: "#"
      }
    }
  ];

  const categories = ["All", "Agentic AI", "Computer Vision", "NLP", "Research Tools", "MLOps"];
  
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active": return "bg-green-500/10 text-green-500 border-green-500/20";
      case "Complete": return "bg-blue-500/10 text-blue-500 border-blue-500/20";
      case "Beta": return "bg-yellow-500/10 text-yellow-500 border-yellow-500/20";
      default: return "bg-gray-500/10 text-gray-500 border-gray-500/20";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-background py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              My Projects
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A collection of AI/ML projects spanning research, development, and open-source contributions
            </p>
          </div>

          {/* Featured Projects */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-8 text-foreground">Featured Projects</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {projects.filter(p => p.featured).map((project) => (
                <Card key={project.id} className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-all duration-300 hover:scale-[1.02]">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="text-3xl">{project.image}</div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
                        <Badge className={`${getStatusColor(project.status)} border text-xs mt-1`}>
                          {project.status}
                        </Badge>
                      </div>
                    </div>
                    <Badge variant="secondary" className="bg-secondary/60">
                      {project.category}
                    </Badge>
                  </div>

                  <p className="text-muted-foreground mb-4">
                    {project.longDescription}
                  </p>

                  {/* Stats */}
                  <div className="flex items-center space-x-4 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      {project.stats.stars}
                    </div>
                    <div className="flex items-center">
                      <GitFork className="w-4 h-4 mr-1" />
                      {project.stats.forks}
                    </div>
                    <div className="flex items-center">
                      <Eye className="w-4 h-4 mr-1" />
                      {project.stats.views}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex space-x-2">
                    {project.links.github && (
                      <Button variant="outline" size="sm">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    )}
                    {project.links.demo && (
                      <Button variant="outline" size="sm">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </Button>
                    )}
                    {project.links.docs && (
                      <Button variant="outline" size="sm">
                        📖 Docs
                      </Button>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* All Projects */}
          <div>
            <h2 className="text-2xl font-semibold mb-8 text-foreground">All Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <Card key={project.id} className="p-6 bg-card/30 backdrop-blur-sm border-border/50 hover:bg-card/50 transition-all duration-300 hover:scale-105">
                  <div className="flex items-start justify-between mb-3">
                    <div className="text-2xl">{project.image}</div>
                    <Badge className={`${getStatusColor(project.status)} border text-xs`}>
                      {project.status}
                    </Badge>
                  </div>

                  <h3 className="text-lg font-semibold text-foreground mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{project.description}</p>

                  <Badge variant="secondary" className="bg-secondary/60 text-xs mb-3">
                    {project.category}
                  </Badge>

                  {/* Stats */}
                  <div className="flex items-center space-x-3 mb-3 text-xs text-muted-foreground">
                    <div className="flex items-center">
                      <Star className="w-3 h-3 mr-1" />
                      {project.stats.stars}
                    </div>
                    <div className="flex items-center">
                      <GitFork className="w-3 h-3 mr-1" />
                      {project.stats.forks}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex space-x-2">
                    {project.links.github && (
                      <Button variant="outline" size="sm" className="text-xs px-2 py-1 h-7">
                        <Github className="w-3 h-3 mr-1" />
                        Code
                      </Button>
                    )}
                    {project.links.demo && (
                      <Button variant="outline" size="sm" className="text-xs px-2 py-1 h-7">
                        <ExternalLink className="w-3 h-3 mr-1" />
                        Demo
                      </Button>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <Card className="p-8 bg-card/30 backdrop-blur-sm border-border/50">
              <h3 className="text-2xl font-semibold gradient-text mb-4">
                Explore More on GitHub
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Check out my complete portfolio of open-source projects, contributions, and research code on GitHub.
              </p>
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:opacity-90 transition-all duration-300"
              >
                <Github className="w-5 h-5 mr-2" />
                View All Projects
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