import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Brain,
  GraduationCap,
  Award,
  Target,
  Code,
  BookOpen,
  FileText,
  ExternalLink,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import AnimatedBackground from "../components/AnimatedBackground";
import SparkleAnimation from "../components/SparkleAnimation";

const About = () => {
  const skills = [
    "Machine Learning",
    "Deep Learning",
    "Neural Networks",
    "Computer Vision",
    "PyTorch",
    "TensorFlow",
    "LangChain",
    "Hugging Face",
    "Generative AI",
    "Agentic AI",
    "Retrieval-Augmented Generation (RAG)",
  ];

  const skills2 = [
    "React.js",
    "Next.js",
    "Django",
    "Tailwind CSS",
    "Node.js",
    "SQL & NoSQL Database",
    "Material UI",
  ];

  const edudata = [
    {
      topic: "IBM AI Engineering Specialization",
      company: "IBM",
      date: "Sep 2024",
      dec1: "GZDFFFL6N89N",
      link: "https://www.coursera.org/account/accomplishments/specialization/GZDFFFL6N89N",
    },
    {
      topic: "AI/ML Engineer - Stage 1",
      company: "SLIIT",
      date: "Aug 2023",
      dec1: "7hgu7jancd",
      link: "https://code.sliit.org/certificates/7hgu7jancd",
    },
    {
      topic: "AI/ML Engineer - Stage 2",
      company: "SLIIT",
      date: "Jan 2027",
      dec1: "bpl3sw86eu",
      link: "https://code.sliit.org/certificates/bpl3sw86eu",
    },
    {
      topic: "Cybersecurity Essentials",
      company: "Cisco Networking Academy",
      date: "Mar 2022",
      dec1: "",
      link: "https://drive.google.com/file/d/1qnhmRDkAC91ZSbvqtT4fhkqcDamqDMDr/view?usp=sharing",
    },
  ];

  const experience = [
    {
      role: "BSc (Hons) in Software Engineering",
      company: "Sri Lanka Technological Campus (SLTC) ",
      period: "2022 - Present",
      description:
        "Comprehensive foundation in core Computer Science, Software Architecture, and SCRUM/Agile principles. My coursework emphasizes skills critical for modern tech, including Artificial Intelligence, Machine Learning, and full-stack deployment (React/Django). This education directly drives my research and practical work with Generative AI and Agentic Systems.",
    },
    {
      role: "Grade 6 to 13",
      company: "Mahinda Rajapaksha College, Homagama",
      period: "2012 - 2020",
      description:
        "During my school years, I actively took part in leadership roles, extracurricular activities, and sports, developing strong teamwork, discipline, and organizational skills. I also participated in NCC training and represented my school in Karate and athletics competitions.",
      sub_dec1:
        "Deputy Head Prefect (2020): Supported the Head Prefect in overseeing student discipline and coordinating academic, cultural, and sports events, fostering effective team collaboration.",
      sub_dec2:
        "House Captain (2019): Led house teams in school competitions, motivating peers and organizing inter-house sports meets and activities.",
      sub_dec3:
        "School Cadet Platoon Member: Attained ranks of Cadet (CDT), Lance Corporal (LCpl), and Corporal (Cpl), participating in leadership training, drills, and team-building exercises.",
      sub_dec4:
        "Sports & Athletics: Competed in Karate and Athletics, representing my school and honing discipline, focus, and teamwork through consistent training and events.",
    },
  ];

  const achievements = [
    {
      topic: "Codemania v5.0",
      company: "IEEE Computer Society of SLTC",
      date: "Jan 2025",
      dec1: "",
      link: "https://drive.google.com/file/d/1tEprnlmnwB43VdvQ-1kNCktb1BQXzEaP/view?usp=sharing",
    },
    {
      topic: "CodeMania v3.0",
      company: "IEEE Computer Society of SLTC",
      date: "Oct 2022",
      dec1: "SLTC/IEEE/CS/CV3/108",
      link: "https://drive.google.com/file/d/1yZlp9U-z5QmXUzD7xelXTHg2RYf6_H9B/view?usp=sharing",
    },
    {
      topic: "Rocketry Design & Modeling Competition",
      company: "SEDS Sri Lanka",
    },
    {
      topic: "Volunter of the Month",
      company: "IEEE IAS SLTC and SEDS SLTC",
    }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-background overflow-hidden">
      <AnimatedBackground />
      <SparkleAnimation />

      <div className="relative z-10 container mx-auto px-6 py-20 lg:py-32 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto">
          {/* HERO SECTION */}
          <div className="text-center mb-20 lg:mb-32">
            {/* Animated Badge */}
            <div className="fade-in-up mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
                <Sparkles className="w-4 h-4 text-primary animate-spin-slow" />
                <span className="text-sm font-medium text-primary">Learn About My Journey</span>
              </div>
            </div>

            {/* Hero Heading */}
            <div className="fade-in-up space-y-6 mb-12">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold gradient-text leading-tight animate-slide-up">
                  My Story & 
                  <br />
                  <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-shimmer">
                    Professional Journey
                  </span>
                </h1>
              </div>

              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in">
                Passionate software engineering undergraduate and AI enthusiast, dedicated to advancing technology through generative AI, agentic AI, and full-stack development, with a focus on creating innovative solutions for education and community impact.
              </p>
            </div>
          </div>

          {/* JOURNEY & SKILLS SECTION */}
          <div className="fade-in-delayed mb-24 relative group">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-accent/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative">
              {/* My Journey Card */}
              <Card className="p-8 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border-gradient-primary/30 hover:border-gradient-primary/60 transition-all duration-500 hover:shadow-2xl group cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:via-accent/5 group-hover:to-primary/5 transition-all duration-500 rounded-lg"></div>
                
                <div className="relative">
                  <h2 className="text-2xl font-semibold mb-6 flex items-center group-hover:text-primary transition-colors">
                    <Brain className="w-6 h-6 mr-3 text-primary" />
                    My Journey
                  </h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                    <p>
                      I am a passionate undergraduate software engineering student
                      at Sri Lanka Technological Campus (SLTC), specializing in AI
                      engineering with a focus on generative and agentic AI. With a
                      strong foundation in machine learning, full-stack development,
                      and leadership, I build scalable AI-powered applications that
                      solve real-world problems in education and beyond.
                    </p>
                    <p>
                      Over the years, I've gained diverse experience through student
                      societies, event management, and innovative coding projects.
                      As Vice Chairman of SEDS SLTC and Sub-Committee Head at IEEE
                      Industry Applications Society (IAS) of SLTC, I've led teams,
                      organized events, and mentored peers.
                    </p>
                    <p>
                      Driven by critical thinking, teamwork, and creativity, I aim
                      to become a tech leader who creates impactful solutions.
                    </p>
                  </div>
                </div>
              </Card>

              {/* Skills Card */}
              <Card className="p-8 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border-gradient-primary/30 hover:border-gradient-primary/60 transition-all duration-500 hover:shadow-2xl group cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:via-accent/5 group-hover:to-primary/5 transition-all duration-500 rounded-lg"></div>
                
                <div className="relative">
                  <h3 className="text-2xl font-semibold mb-4 flex items-center text-primary">
                    <Target className="w-6 h-6 mr-3" />
                    AI & Machine Learning
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {skills.map((skill, index) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="px-3 py-2 text-sm bg-gradient-to-r from-primary/20 to-accent/20 hover:from-primary/40 hover:to-accent/40 border border-primary/30 hover:border-primary/60 transition-all duration-300 hover:scale-105"
                        style={{ animationDelay: `${index * 0.05}s` }}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  
                  <h3 className="text-2xl font-semibold mb-4 flex items-center text-accent">
                    <Code className="w-6 h-6 mr-3" />
                    Web Development
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skills2.map((skill, index) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="px-3 py-2 text-sm bg-gradient-to-r from-accent/20 to-secondary/20 hover:from-accent/40 hover:to-secondary/40 border border-accent/30 hover:border-accent/60 transition-all duration-300 hover:scale-105"
                        style={{ animationDelay: `${index * 0.05}s` }}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* EDUCATION SECTION */}
          <div className="fade-in-delayed mb-24 relative group">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-accent/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
            
            <div className="relative">
              <div className="mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 flex items-center justify-center">
                  <GraduationCap className="w-8 h-8 mr-3 text-primary" />
                  Education & Experience
                </h2>
                <div className="h-1 w-20 bg-gradient-primary mx-auto rounded-full"></div>
              </div>

              <div className="space-y-6">
                {experience.map((exp, index) => (
                  <Card
                    key={index}
                    className="p-6 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border-gradient-primary/30 hover:border-gradient-primary/60 transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] group cursor-pointer"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:via-accent/5 group-hover:to-primary/5 transition-all duration-500 rounded-lg"></div>
                    
                    <div className="relative">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                        <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                          {exp.role}
                        </h3>
                        <span className="text-sm text-primary font-medium bg-primary/10 px-3 py-1 rounded-full border border-primary/30 group-hover:border-primary/60 transition-all duration-300 mt-2 md:mt-0">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-accent font-medium mb-3 text-lg group-hover:text-primary transition-colors">
                        {exp.company}
                      </p>
                      <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                        {exp.description}
                      </p>
                      {[exp.sub_dec1, exp.sub_dec2, exp.sub_dec3, exp.sub_dec4].map((subdec, idx) => subdec && (
                        <div key={idx} className="flex mt-3 ml-2">
                          <p className="text-muted-foreground mr-3 group-hover:text-foreground transition-colors">
                            •
                          </p>
                          <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                            {subdec}
                          </p>
                        </div>
                      ))}
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* CERTIFICATIONS & ACHIEVEMENTS SECTION */}
          <div className="fade-in-delayed mb-24 relative group">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-accent/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
            
            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Certifications Card */}
              <Card className="p-8 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border-gradient-primary/30 hover:border-gradient-primary/60 transition-all duration-500 hover:shadow-2xl group cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:via-accent/5 group-hover:to-primary/5 transition-all duration-500 rounded-lg"></div>
                
                <div className="relative">
                  <h2 className="text-2xl font-semibold mb-6 flex items-center group-hover:text-primary transition-colors">
                    <GraduationCap className="w-6 h-6 mr-3 text-primary" />
                    Educational Certifications
                  </h2>
                  <div className="space-y-4">
                    {edudata.map((data, index) => (
                      <div key={index} className="border-b border-border/30 last:border-b-0 pb-4 last:pb-0 hover:bg-primary/5 p-3 rounded-lg transition-all duration-300">
                        <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {data.topic}
                        </h3>
                        <p className="text-accent font-medium mb-2">
                          {data.company}
                        </p>
                        <p className="text-muted-foreground text-sm mb-3 group-hover:text-foreground transition-colors">
                          Issued: {data.date}
                          {data.dec1 && <br />}
                          {data.dec1 && <>Credential ID: {data.dec1}</>}
                        </p>
                        <Link href={data.link} target="_blank">
                          <span className="text-primary hover:text-accent font-medium text-sm flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                            Show credential
                            <ExternalLink className="w-3 h-3" />
                          </span>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>

              {/* Achievements Card */}
              <Card className="p-8 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border-gradient-primary/30 hover:border-gradient-primary/60 transition-all duration-500 hover:shadow-2xl group cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:via-accent/5 group-hover:to-primary/5 transition-all duration-500 rounded-lg"></div>
                
                <div className="relative">
                  <h2 className="text-2xl font-semibold mb-6 flex items-center group-hover:text-accent transition-colors">
                    <Award className="w-6 h-6 mr-3 text-accent" />
                    Achievements
                  </h2>
                  <div className="space-y-4">
                    {achievements.map((data, index) => (
                      <div key={index} className="border-b border-border/30 last:border-b-0 pb-4 last:pb-0 hover:bg-accent/5 p-3 rounded-lg transition-all duration-300">
                        <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                          {data.topic}
                        </h3>
                        <p className="text-accent font-medium mb-2">
                          {data.company}
                        </p>
                        {data.date && (
                          <p className="text-muted-foreground text-sm mb-3 group-hover:text-foreground transition-colors">
                            Issued: {data.date}
                            {data.dec1 && <br />}
                            {data.dec1 && <>Credential ID: {data.dec1}</>}
                          </p>
                        )}
                        {data.link && (
                          <Link href={data.link} target="_blank">
                            <span className="text-primary hover:text-accent font-medium text-sm flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                              Show credential
                              <ExternalLink className="w-3 h-3" />
                            </span>
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* CTA SECTION */}
          <div className="fade-in-delayed mb-12 relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border border-gradient-primary/30 hover:border-gradient-primary/60 transition-all duration-500 p-12 md:p-16">
              {/* Animated background overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/15 group-hover:via-accent/5 group-hover:to-primary/10 transition-all duration-500"></div>
              
              {/* Decorative corner accents */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-primary opacity-5 rounded-full blur-3xl pointer-events-none"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-accent opacity-5 rounded-full blur-3xl pointer-events-none"></div>
              
              <div className="relative z-10 text-center space-y-6">
                <div>
                  <h2 className="text-3xl pb-2 md:text-4xl font-bold gradient-text mb-3">
                    Ready to Collaborate?
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed group-hover:text-foreground transition-colors">
                    I'm always interested in connecting with fellow developers, researchers, and innovators. Let's explore opportunities to build something amazing together through AI, machine learning, and full-stack development.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 flex-wrap">
                  <Link href="/cv">
                    <Button
                      size="lg"
                      className="bg-gradient-primary hover:opacity-90 transition-all duration-300 glow-primary hover:scale-105 px-8 py-3 group"
                    >
                      <FileText className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                      View My CV
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-primary/50 hover:bg-primary/10 hover:text-white transition-all duration-300 hover:scale-105 px-8 py-3 hover:shadow-primary hover:border-primary/80 group"
                    >
                      <Sparkles className="w-5 h-5 mr-2 group-hover:animate-spin-slow" />
                      Get in Touch
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
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

export default About;
