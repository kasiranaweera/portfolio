import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, GraduationCap, Award, Target, Code, BookOpen } from "lucide-react";

const About = () => {
  const skills = [
    "Machine Learning", "Deep Learning", "Neural Networks", "Computer Vision",
    "Natural Language Processing", "Reinforcement Learning", "MLOps", "Data Science",
    "PyTorch", "TensorFlow", "Transformers", "LangChain", "Hugging Face"
  ];

  const experience = [
    {
      role: "AI Research Intern",
      company: "Tech Innovation Lab",
      period: "2024 - Present",
      description: "Working on cutting-edge research in agentic AI and multi-agent systems. Developing autonomous reasoning frameworks."
    },
    {
      role: "ML Engineering Intern",
      company: "StartupAI",
      period: "2023 - 2024",
      description: "Developed and deployed machine learning models for production systems. Built MLOps pipelines."
    },
    {
      role: "Research Assistant",
      company: "University AI Lab",
      period: "2022 - 2023",
      description: "Conducted research on generative AI models and published papers on transformer architectures."
    }
  ];

  const achievements = [
    "Dean's List for Academic Excellence (3 consecutive semesters)",
    "Research Assistant in AI Lab (2+ years)",
    "Published 15+ papers in top-tier AI conferences",
    "Winner of National AI Hackathon 2023",
    "Google Developer Student Club AI Lead",
    "Open Source Contributor (10k+ GitHub stars)"
  ];

  return (
    <div className="min-h-screen bg-gradient-background py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
              About Me
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Passionate AI researcher and developer exploring the frontiers of artificial intelligence, 
              with a focus on generative models and autonomous agent systems.
            </p>
          </div>

          {/* Story Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 animate-fade-in">
              <h2 className="text-2xl font-semibold mb-6 flex items-center">
                <Brain className="w-6 h-6 mr-3 text-primary" />
                My Journey
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
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
                  writing technical blogs, or exploring the latest papers in AI research. I'm particularly 
                  excited about the intersection of multimodal AI and human-computer interaction.
                </p>
              </div>
            </Card>

            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-2xl font-semibold mb-6 flex items-center">
                <Target className="w-6 h-6 mr-3 text-accent" />
                Core Skills & Technologies
              </h2>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <Badge 
                    key={skill} 
                    variant="secondary" 
                    className="px-3 py-2 text-sm bg-secondary/80 hover:bg-secondary transition-all duration-300 hover:scale-105"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>

          {/* Experience */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold mb-8 flex items-center animate-fade-in">
              <Code className="w-7 h-7 mr-3 text-primary" />
              Professional Experience
            </h2>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <Card 
                  key={index} 
                  className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-all duration-300 hover:scale-[1.02] animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h3 className="text-xl font-semibold text-foreground">{exp.role}</h3>
                    <span className="text-sm text-primary font-medium bg-primary/10 px-3 py-1 rounded-full">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-accent font-medium mb-3 text-lg">{exp.company}</p>
                  <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Education & Achievements */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 animate-fade-in">
              <h2 className="text-2xl font-semibold mb-6 flex items-center">
                <GraduationCap className="w-6 h-6 mr-3 text-primary" />
                Education
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Bachelor of Computer Science
                  </h3>
                  <p className="text-accent font-medium mb-2">University of Technology</p>
                  <p className="text-muted-foreground mb-3">
                    Specialization in Artificial Intelligence and Machine Learning
                  </p>
                  <p className="text-sm text-primary">Expected Graduation: 2024</p>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-2xl font-semibold mb-6 flex items-center">
                <Award className="w-6 h-6 mr-3 text-accent" />
                Achievements
              </h2>
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-muted-foreground">{achievement}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;