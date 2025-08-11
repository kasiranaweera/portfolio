import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar, MapPin, Building } from "lucide-react";

const Work = () => {
  const workExperience = [
    {
      id: 1,
      role: "AI Research Intern",
      company: "Advanced AI Research Lab",
      type: "Research",
      location: "San Francisco, CA",
      period: "Jun 2024 - Present",
      description: "Leading research on multi-agent AI systems and autonomous reasoning frameworks. Developing novel architectures for agent coordination and communication.",
      achievements: [
        "Developed a multi-agent framework that improved task completion by 40%",
        "Published 2 papers on agentic AI in top-tier conferences",
        "Created open-source library for agent orchestration (500+ GitHub stars)"
      ],
      technologies: ["PyTorch", "LangChain", "AutoGen", "Transformers", "CUDA"],
      companyLogo: "🧠"
    },
    {
      id: 2,
      role: "Machine Learning Engineer Intern",
      company: "TechFlow Dynamics",
      type: "Engineering",
      location: "Remote",
      period: "Jan 2024 - May 2024",
      description: "Built and deployed production-ready ML models for real-time recommendation systems serving 1M+ users daily.",
      achievements: [
        "Improved recommendation accuracy by 25% using transformer architectures",
        "Reduced model inference time by 60% through optimization",
        "Implemented MLOps pipeline reducing deployment time from days to hours"
      ],
      technologies: ["TensorFlow", "Kubernetes", "Docker", "FastAPI", "PostgreSQL"],
      companyLogo: "⚡"
    },
    {
      id: 3,
      role: "AI Research Assistant",
      company: "University AI Lab",
      type: "Research",
      location: "On-campus",
      period: "Sep 2023 - Dec 2023",
      description: "Conducted research on generative AI applications in computer vision, focusing on diffusion models and neural style transfer.",
      achievements: [
        "Contributed to 3 research publications",
        "Developed novel GAN architecture for artistic style transfer",
        "Mentored 5 undergraduate students in ML research"
      ],
      technologies: ["PyTorch", "OpenCV", "Hugging Face", "Jupyter", "Git"],
      companyLogo: "🎓"
    },
    {
      id: 4,
      role: "Software Development Intern",
      company: "DataMinds Inc.",
      type: "Development",
      location: "New York, NY",
      period: "Jun 2023 - Aug 2023",
      description: "Developed data processing pipelines and built interactive dashboards for business intelligence applications.",
      achievements: [
        "Built ETL pipeline processing 10TB+ of data daily",
        "Created real-time analytics dashboard used by C-suite executives",
        "Optimized database queries improving performance by 300%"
      ],
      technologies: ["Python", "Apache Spark", "React", "D3.js", "AWS"],
      companyLogo: "📊"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Research": return "bg-blue-500/10 text-blue-500 border-blue-500/20";
      case "Engineering": return "bg-green-500/10 text-green-500 border-green-500/20";
      case "Development": return "bg-purple-500/10 text-purple-500 border-purple-500/20";
      default: return "bg-gray-500/10 text-gray-500 border-gray-500/20";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-background py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Work Experience
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              My professional journey in AI, machine learning, and software development
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-primary opacity-30"></div>
            
            <div className="space-y-12">
              {workExperience.map((work, index) => (
                <div key={work.id} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute left-1 md:left-5 w-6 h-6 bg-gradient-primary rounded-full border-4 border-background"></div>
                  
                  {/* Content */}
                  <div className="ml-12 md:ml-20">
                    <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-all duration-300">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                        <div className="flex items-start space-x-4 mb-4 lg:mb-0">
                          <div className="text-3xl">{work.companyLogo}</div>
                          <div>
                            <h3 className="text-xl font-semibold text-foreground mb-1">
                              {work.role}
                            </h3>
                            <div className="flex items-center space-x-2 mb-2">
                              <Building className="w-4 h-4 text-accent" />
                              <span className="text-accent font-medium">{work.company}</span>
                            </div>
                            <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                              <div className="flex items-center">
                                <Calendar className="w-4 h-4 mr-1" />
                                {work.period}
                              </div>
                              <div className="flex items-center">
                                <MapPin className="w-4 h-4 mr-1" />
                                {work.location}
                              </div>
                            </div>
                          </div>
                        </div>
                        <Badge className={`${getTypeColor(work.type)} border`}>
                          {work.type}
                        </Badge>
                      </div>

                      <p className="text-muted-foreground mb-4">
                        {work.description}
                      </p>

                      {/* Achievements */}
                      <div className="mb-4">
                        <h4 className="font-semibold text-foreground mb-2">Key Achievements:</h4>
                        <ul className="space-y-1">
                          {work.achievements.map((achievement, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex items-start">
                              <span className="text-primary mr-2">•</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {work.technologies.map((tech) => (
                            <Badge 
                              key={tech} 
                              variant="secondary" 
                              className="text-xs bg-secondary/60"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <Card className="p-8 bg-card/30 backdrop-blur-sm border-border/50">
              <h3 className="text-2xl font-semibold gradient-text mb-4">
                Looking for Opportunities
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                I'm always interested in discussing AI research opportunities, innovative projects, 
                and collaborations in the field of artificial intelligence.
              </p>
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:opacity-90 transition-all duration-300"
              >
                Let's Connect
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