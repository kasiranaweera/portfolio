import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, GraduationCap, Award, Target } from "lucide-react";

const About = () => {
  const skills = [
    "Machine Learning", "Deep Learning", "Neural Networks", "Computer Vision",
    "Natural Language Processing", "Reinforcement Learning", "MLOps", "Data Science"
  ];

  const experience = [
    {
      role: "AI Research Intern",
      company: "Tech Innovation Lab",
      period: "2024 - Present",
      description: "Working on cutting-edge research in agentic AI and multi-agent systems."
    },
    {
      role: "ML Engineering Intern",
      company: "StartupAI",
      period: "2023 - 2024",
      description: "Developed and deployed machine learning models for production systems."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-background py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              About Me
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Passionate AI researcher and developer exploring the frontiers of artificial intelligence
            </p>
          </div>

          {/* Story Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-semibold mb-6 flex items-center">
                <Brain className="w-6 h-6 mr-3 text-primary" />
                My Journey
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I'm a Computer Science undergraduate with an insatiable curiosity for artificial intelligence. 
                  My journey began with fascination about how machines could learn and think, leading me down 
                  the rabbit hole of neural networks and deep learning.
                </p>
                <p>
                  Today, I specialize in generative AI and agentic systems, working on research that pushes 
                  the boundaries of what's possible with autonomous AI agents. I believe we're on the cusp 
                  of a revolution in how AI systems interact and collaborate.
                </p>
                <p>
                  When I'm not coding or researching, you'll find me contributing to open-source projects, 
                  writing technical blogs, or exploring the latest papers in AI research.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-6 flex items-center">
                <Target className="w-6 h-6 mr-3 text-accent" />
                Core Skills
              </h2>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="secondary" 
                    className="px-3 py-1 bg-secondary/80 hover:bg-secondary transition-all duration-300"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-8 flex items-center">
              <GraduationCap className="w-6 h-6 mr-3 text-primary" />
              Experience
            </h2>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <Card key={index} className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-lg font-semibold text-foreground">{exp.role}</h3>
                    <span className="text-sm text-primary font-medium">{exp.period}</span>
                  </div>
                  <p className="text-accent font-medium mb-2">{exp.company}</p>
                  <p className="text-muted-foreground">{exp.description}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-2xl font-semibold mb-8 flex items-center">
              <Award className="w-6 h-6 mr-3 text-accent" />
              Education & Achievements
            </h2>
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Bachelor of Computer Science
              </h3>
              <p className="text-accent font-medium mb-2">University of Technology</p>
              <p className="text-muted-foreground mb-4">
                Specialization in Artificial Intelligence and Machine Learning
              </p>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">• Dean's List for Academic Excellence</p>
                <p className="text-sm text-muted-foreground">• Research Assistant in AI Lab</p>
                <p className="text-sm text-muted-foreground">• Published 3 papers in AI conferences</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;