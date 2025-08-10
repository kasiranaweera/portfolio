import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, ExternalLink, Building, Users, Trophy } from "lucide-react";

const Work = () => {
  const workExperience = [
    {
      company: "Tech Innovation Lab",
      role: "AI Research Intern",
      period: "Jan 2024 - Present",
      location: "San Francisco, CA",
      type: "Remote",
      description: "Leading research on agentic AI systems and multi-agent frameworks. Developing novel approaches to autonomous reasoning and decision-making in AI agents.",
      achievements: [
        "Developed a multi-agent reasoning framework that improved task completion by 40%",
        "Published 3 research papers in top-tier AI conferences",
        "Led a team of 5 researchers on advanced AI agent architectures",
        "Created open-source tools used by 1000+ developers worldwide"
      ],
      technologies: ["PyTorch", "LangChain", "AutoGen", "Transformers", "CUDA", "Docker"],
      projects: [
        {
          name: "AgentFlow",
          description: "A framework for building and orchestrating AI agent workflows"
        },
        {
          name: "ReasonAI",
          description: "Advanced reasoning engine for autonomous decision-making"
        }
      ]
    },
    {
      company: "StartupAI",
      role: "ML Engineering Intern",
      period: "Jun 2023 - Dec 2023",
      location: "New York, NY",
      type: "Hybrid",
      description: "Built and deployed production-ready machine learning models for customer behavior prediction and recommendation systems.",
      achievements: [
        "Improved model accuracy by 25% through advanced feature engineering",
        "Reduced inference time by 60% through model optimization",
        "Built MLOps pipeline serving 1M+ daily predictions",
        "Mentored 3 junior developers on ML best practices"
      ],
      technologies: ["Python", "TensorFlow", "Scikit-learn", "AWS", "Kubernetes", "MLflow"],
      projects: [
        {
          name: "SmartRec",
          description: "Real-time recommendation system with 99.9% uptime"
        },
        {
          name: "BehaviorPredict",
          description: "Customer behavior prediction model with 92% accuracy"
        }
      ]
    },
    {
      company: "University AI Lab",
      role: "Research Assistant",
      period: "Sep 2022 - May 2023",
      location: "Boston, MA",
      type: "On-site",
      description: "Conducted cutting-edge research on generative AI models, focusing on transformer architectures and their applications in creative AI.",
      achievements: [
        "Co-authored 5 papers published in IEEE and ACM conferences",
        "Developed novel attention mechanisms for transformer models",
        "Created datasets used by 500+ researchers globally",
        "Won 'Best Student Research' award at AI Conference 2023"
      ],
      technologies: ["PyTorch", "Hugging Face", "Jupyter", "Git", "LaTeX", "Python"],
      projects: [
        {
          name: "CreativeGPT",
          description: "AI model for generating creative content with human-like quality"
        },
        {
          name: "AttentionPlus",
          description: "Enhanced attention mechanism for better transformer performance"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-background py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
              Work Experience
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              My professional journey in AI research and machine learning engineering, 
              building cutting-edge solutions and advancing the field of artificial intelligence.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-primary opacity-50"></div>

            {workExperience.map((work, index) => (
              <div 
                key={index} 
                className="relative mb-16 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-6 w-4 h-4 bg-gradient-primary rounded-full ring-4 ring-background items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>

                {/* Content */}
                <div className="md:ml-20">
                  <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-all duration-300">
                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                      <div>
                        <h2 className="text-2xl font-bold text-foreground mb-2 flex items-center">
                          <Building className="w-6 h-6 mr-3 text-primary" />
                          {work.company}
                        </h2>
                        <h3 className="text-xl text-accent font-semibold mb-3">{work.role}</h3>
                      </div>
                      <div className="flex flex-col lg:items-end space-y-2">
                        <Badge variant="secondary" className="bg-primary/10 text-primary">
                          {work.type}
                        </Badge>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4 mr-1" />
                          {work.period}
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <MapPin className="w-4 h-4 mr-1" />
                          {work.location}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {work.description}
                    </p>

                    {/* Key Achievements */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                        <Trophy className="w-5 h-5 mr-2 text-accent" />
                        Key Achievements
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {work.achievements.map((achievement, idx) => (
                          <div key={idx} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-sm text-muted-foreground">{achievement}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-foreground mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {work.technologies.map((tech) => (
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

                    {/* Key Projects */}
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-3">Key Projects</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {work.projects.map((project, idx) => (
                          <div key={idx} className="bg-background/50 p-4 rounded-lg border border-border/50">
                            <h5 className="font-semibold text-foreground mb-2">{project.name}</h5>
                            <p className="text-sm text-muted-foreground">{project.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 animate-fade-in">
            <Card className="p-8 bg-card/30 backdrop-blur-sm border-border/50">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Interested in Collaboration?</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                I'm always open to discussing new opportunities, research collaborations, 
                or innovative AI projects. Let's build the future of AI together!
              </p>
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:opacity-90 transition-all duration-300 hover:scale-105"
              >
                Get In Touch
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;