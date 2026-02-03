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
  Zap,
  Layers,
  Microscope,
  Lightbulb,
  Users,
  Heart,
  Rocket,
  Share2,
  Briefcase,
  Keyboard,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import AnimatedBackground from "../components/AnimatedBackground";
import SparkleAnimation from "../components/SparkleAnimation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const About = () => {
  const skills = [
    "PyTorch",
    "TensorFlow & Keras",
    "n8n Automation",
    "LangChain & LangGraph",
    "FAISS (Vector DBs)",
    "Transformers",
    "Scikit-learn",
    "RAG",
    "Pandas",
    "NumPy",
    "Matplotlib",
    "Jupyter Notebooks",
    "Hugging Face",
    "Google Colab",
    "Kaggle",
    "Streamlit",
  ];

  const skills2 = [
    "React.js",
    "Next.js",
    "Django",
    "Tailwind CSS",
    "Node.js",
    "SQL & NoSQL Database",
    "Material UI",
    "FastAPI",
    "Express.js",
    "Laravel(PHP)",
    "RESTful APIs",
  ];

  const skills3 = [
    "Python",
    "JavaScript",
    "TypeScript",
    "Java",
    "C++",
    "PHP",
    "SQL",
    "HTML/CSS",
    "Bash",
  ];
  const skills4 = [
    "Git & GitHub",
    "Docker & Docker Compose",
    "Kubernetes",
    "Jira (Agile/SCRUM)",
    "VS Code",
    "PyCharm",
    "Postman",
  ];
  const skills5 = [
    "Model Context Protocol (MCP)",
    "Unity (Vuforia)",
    "LaTeX",
    "Whisper (STT)",
    "TTS engines (Kokoro)",
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
      date: "Jan 2026",
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
      period: "2022 - Present(Final Year)",
      description:
        "Comprehensive foundation in core Computer Science, Software Architecture, and SCRUM/Agile principles. My coursework emphasizes skills critical for modern tech. Focus Areas:",
      sub_dec1: "Artificial Intelligence & Machine Learning",
      sub_dec2: "Software Architecture & Design",
      sub_dec3: "Data Structures & Algorithms",
      sub_dec4: "Web Application Development",
      sub_dec5: "Database Management Systems",
      sub_dec6: "Agile Software Development",
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
    },
  ];

  const expertiseAreas = [
    {
      id: "generative-ai",
      title: "Generative & Agentic AI",
      icon: Zap,
      description:
        "I work extensively with large language models and autonomous agent systems, building applications that can reason, plan, and execute complex tasks.",
      skills: [
        "Fine-tuning and deploying LLMs (Gemma, DeepSeek, LLaMA)",
        "Building multi-agent systems with LangChain",
        "Implementing RAG (Retrieval-Augmented Generation) pipelines",
        "Designing autonomous reasoning frameworks",
        "Creating context-aware conversational AI",
        "Prompt engineering and optimization",
      ],
    },
    {
      id: "deep-learning",
      title: "Deep Learning & Neural Networks",
      icon: Brain,
      description:
        "My deep learning work spans multiple architectures and applications across domains.",
      skills: [
        "Graph Neural Networks for citation analysis and recommendation",
        "Transformer models for NLP tasks",
        "Convolutional networks for computer vision",
        "Fine-tuning pre-trained models (Gemma-3, BERT, GPT variants)",
        "Neural architecture design and optimization",
        "Transfer learning strategies",
      ],
    },
    {
      id: "ml-engineering",
      title: "Machine Learning Engineering",
      icon: Layers,
      description:
        "Building production-ready ML systems with focus on scalability and performance.",
      skills: [
        "Recommendation systems using collaborative filtering",
        "Predictive analytics with ensemble methods",
        "Classification using Random Forest, LightGBM",
        "Time series forecasting",
        "Model deployment and MLOps",
        "Performance optimization and monitoring",
      ],
    },
    {
      id: "full-stack",
      title: "Full-Stack Development",
      icon: Code,
      description:
        "Creating end-to-end applications with modern tech stacks and best practices.",
      skills: [
        "Frontend: React.js, Next.js, TypeScript",
        "Backend: Django, Node.js, FastAPI",
        "Database: PostgreSQL, MongoDB, Vector DBs",
        "Deployment: Docker, Vercel, cloud platforms",
        "API Design: RESTful, GraphQL",
        "State management and authentication",
      ],
    },
    {
      id: "research",
      title: "Research & Innovation",
      icon: Microscope,
      description:
        "Contributing to AI advancement through cutting-edge research and development.",
      skills: [
        "Educational technology research",
        "Mental health AI applications",
        "Graph-based learning systems",
        "IoT and embedded AI",
        "AR/VR educational experiences",
        "Open-source contributions",
      ],
    },
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
                <span className="text-sm font-medium text-primary">
                  Learn About My Journey
                </span>
              </div>
            </div>

            {/* Hero Heading */}
            <div className="fade-in-up space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold gradient-text leading-tight animate-slide-up">
                  My Journey in
                  <br />
                  <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-shimmer">
                    AI & Software Engineering
                  </span>
                </h1>
              </div>
              <div className="fade-in-delayed mb-24 mt-24 relative group ">
                <div className="absolute top-1/2 -translate-y-1/2 inset-0 bg-gradient-to-b from-primary/50 via-transparent to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full shadow-2xl group-hover:shadow-primary/50"></div>

                <div className="relative mt-12 text-muted-foreground group">
                  <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in group-hover:text-foreground transition-colors">
                    Hi, I'm Sithija Ishan Ranaweera, known as KASI in the tech
                    community. I'm a Software Engineer and AI/ML specialist from
                    Colombo, Sri Lanka, currently in my final year pursuing a
                    BSc (Hons) in Software Engineering at Sri Lanka
                    Technological Campus (SLTC), where I began my journey in
                    June 2022.
                  </p>
                  <p className="text-lg mt-4 md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in group-hover:text-foreground transition-colors">
                    My passion lies at the intersection of artificial
                    intelligence and real-world problem-solving. I'm fascinated
                    by how generative AI, autonomous agents, and deep learning
                    can transform industries, particularly education and
                    healthcare. Every project I undertake is driven by a simple
                    question: "How can technology make a meaningful difference
                    in people's lives?"
                  </p>
                  <p className="text-lg md:text-xl mt-4 text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in group-hover:text-foreground transition-colors">
                    From an early age, I've been captivated by the potential of
                    technology to solve complex problems. This curiosity evolved
                    into a focused passion for AI and machine learning during my
                    undergraduate studies. Today, I specialize in building
                    intelligent systems that don't just process data, but
                    understand context, adapt to users, and provide genuine
                    value.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* EDUCATION SECTION */}
          <div className="fade-in-delayed mb-8 relative group">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-accent/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

            <div className="relative">
              <div className="mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 flex items-center justify-center">
                  <GraduationCap className="w-8 h-8 mr-3 text-primary" />
                  Educational Background
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
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-1">
                        <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                          {exp.role}
                        </h3>
                        <span className="text-sm text-primary font-medium bg-primary/10 px-3 py-1 rounded-full border border-primary/30 group-hover:border-primary/60 transition-all duration-300 mt-2 md:mt-0">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-accent font-medium mb-3 text-base transition-colors">
                        {exp.company}
                      </p>
                      <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                        {exp.description}
                      </p>
                      {[
                        exp.sub_dec1,
                        exp.sub_dec2,
                        exp.sub_dec3,
                        exp.sub_dec4,
                      ].map(
                        (subdec, idx) =>
                          subdec && (
                            <div key={idx} className="flex mt-3 ml-2">
                              <p className="text-muted-foreground mr-3 group-hover:text-foreground transition-colors">
                                •
                              </p>
                              <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                                {subdec}
                              </p>
                            </div>
                          ),
                      )}
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
                      <div
                        key={index}
                        className="border-b border-border/30 last:border-b-0 pb-4 last:pb-0 hover:bg-primary/5 p-3 rounded-lg transition-all duration-300"
                      >
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
                      <div
                        key={index}
                        className="border-b border-border/30 last:border-b-0 pb-4 last:pb-0 hover:bg-accent/5 p-3 rounded-lg transition-all duration-300"
                      >
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

          {/* JOURNEY & SKILLS SECTION */}
          <div className="fade-in-delayed mb-24 relative group">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-accent/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
<div className="mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 flex items-center justify-center">
                  <Rocket className="w-8 h-8 mr-3 text-primary" />
                  Core Expertise & Technical Skills
                </h2>
                <div className="h-1 w-20 bg-gradient-primary mx-auto rounded-full"></div>
              </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative">
              {/* Expertise Accordion */}
              <Card className="p-8 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border-gradient-primary/30 hover:border-gradient-primary/60 transition-all duration-500 hover:shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 hover:from-primary/10 hover:via-accent/5 hover:to-primary/5 transition-all duration-500 rounded-lg"></div>

                <div className="relative">
                  <Accordion
                    type="multiple"
                    className="w-full"
                    defaultValue={["generative-ai", "deep-learning"]}
                  >
                    {expertiseAreas.map((area, index) => {
                      const IconComponent = area.icon;
                      return (
                        <AccordionItem key={area.id} value={area.id}>
                          <AccordionTrigger className="text-lg font-semibold hover:no-underline hover:text-primary transition-colors py-4 px-4 hover:bg-primary/5 rounded-lg">
                            <div className="flex items-center gap-3">
                              <IconComponent className="w-5 h-5 text-primary flex-shrink-0" />
                              <span>{area.title}</span>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="px-4 py-4">
                            <div className="space-y-4">
                              <p className="text-foreground leading-relaxed text-base">
                                {area.description}
                              </p>
                              <div className="space-y-2">
                                {area.skills.map((skill, idx) => (
                                  <div
                                    key={idx}
                                    className="flex items-start gap-3"
                                  >
                                    <Lightbulb className="w-4 h-4 text-accent flex-shrink-0 mt-1" />
                                    <p className="text-foreground text-sm leading-relaxed">
                                      {skill}
                                    </p>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      );
                    })}
                  </Accordion>
                </div>
              </Card>

              {/* Skills Card */}
              <Card className="p-8 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border-gradient-primary/30 hover:border-gradient-primary/60 transition-all duration-500 hover:shadow-2xl group cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:via-accent/5 group-hover:to-primary/5 transition-all duration-500 rounded-lg"></div>

                <div className="relative">
                  <h3 className="text-2xl font-semibold mb-4 flex items-center text-primary">
                    <Code className="w-6 h-6 mr-3" />
                    Programming Languages
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-4 border-b pb-4">
                    {skills3.map((skill, index) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="px-3 py-2 text-xs bg-gradient-to-r from-accent/20 to-secondary/20 hover:from-accent/40 hover:to-secondary/40 border border-accent/30 hover:border-accent/60 transition-all duration-300 hover:scale-105"
                        style={{ animationDelay: `${index * 0.05}s` }}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  <h3 className="text-2xl font-semibold mb-4 flex items-center text-primary">
                    <Target className="w-6 h-6 mr-3" />
                    AI/ML Frameworks and Tools
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-4 border-b pb-4">
                    {skills.map((skill, index) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="px-3 py-2 text-xs bg-gradient-to-r from-primary/20 to-accent/20 hover:from-primary/40 hover:to-accent/40 border border-primary/30 hover:border-primary/60 transition-all duration-300 hover:scale-105"
                        style={{ animationDelay: `${index * 0.05}s` }}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  <h3 className="text-2xl font-semibold mb-4 flex items-center text-primary">
                    <Code className="w-6 h-6 mr-3" />
                    Web Development
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-4 border-b pb-4">
                    {skills2.map((skill, index) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="px-3 py-2 text-xs bg-gradient-to-r from-accent/20 to-secondary/20 hover:from-accent/40 hover:to-secondary/40 border border-accent/30 hover:border-accent/60 transition-all duration-300 hover:scale-105"
                        style={{ animationDelay: `${index * 0.05}s` }}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  <h3 className="text-2xl font-semibold mb-4 flex items-center text-primary">
                    <Code className="w-6 h-6 mr-3" />
                    DevOps & Tools
                  </h3>
                  <div className="flex flex-wrap gap-2 border-b pb-4 mb-4">
                    {skills4.map((skill, index) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="px-3 py-2 text-xs bg-gradient-to-r from-accent/20 to-secondary/20 hover:from-accent/40 hover:to-secondary/40 border border-accent/30 hover:border-accent/60 transition-all duration-300 hover:scale-105"
                        style={{ animationDelay: `${index * 0.05}s` }}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  <h3 className="text-2xl font-semibold mb-4 flex items-center text-primary">
                    <Code className="w-6 h-6 mr-3" />
                    Specialized Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skills5.map((skill, index) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="px-3 py-2 text-xs bg-gradient-to-r from-accent/20 to-secondary/20 hover:from-accent/40 hover:to-secondary/40 border border-accent/30 hover:border-accent/60 transition-all duration-300 hover:scale-105"
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

          

          {/* COMMUNITY IMPACT & LEADERSHIP SECTION */}
          <div className="fade-in-delayed mb-24 relative group">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-accent/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

            <div className="relative">
              <div className="mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 flex items-center justify-center">
                  <Users className="w-8 h-8 mr-3 text-primary" />
                  Community Impact & Leadership
                </h2>
                <div className="h-1 w-20 bg-gradient-primary mx-auto rounded-full"></div>
              </div>

              {/* Volunteer & Leadership Roles */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center">
                  <Heart className="w-6 h-6 mr-3 text-accent" />
                  Volunteer & Leadership Roles
                </h3>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  I believe in giving back to the tech community and fostering the next generation of innovators:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  {/* NASA Space Apps Card */}
                  <Card className="relative p-6 bg-gradient-to-br from-primary/10 via-accent/5 to-card/30 backdrop-blur-md border border-primary/30 hover:border-primary/60 transition-all duration-300 hover:shadow-xl shadow-primary/20 group overflow-hidden">
                    <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500"></div>
                    <div className="relative">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent p-2 mb-4 group-hover:scale-110 transition-transform">
                        <Rocket className="w-full h-full text-white" />
                      </div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">NASA Space Apps Challenge</h4>
                      <p className="text-sm text-muted-foreground">Event volunteer and technical mentor</p>
                    </div>
                  </Card>

                  {/* IEEE Workshops Card */}
                  <Card className="relative p-6 bg-card/30 backdrop-blur-md border border-border/40 hover:border-accent/60 transition-all duration-300 hover:shadow-lg group overflow-hidden">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-accent/10 rounded-full blur-xl group-hover:bg-accent/20 transition-colors duration-300 -mr-10 -mt-10"></div>
                    <div className="relative">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent to-secondary p-2 mb-4 group-hover:scale-110 transition-transform">
                        <BookOpen className="w-full h-full text-white" />
                      </div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">IEEE Workshops</h4>
                      <p className="text-sm text-muted-foreground">Conducting hands-on workshops on AI/ML fundamentals</p>
                    </div>
                  </Card>

                  {/* Student Communities Card */}
                  <Card className="relative p-6 bg-gradient-to-br from-accent/10 via-secondary/5 to-card/30 backdrop-blur-md border border-accent/30 hover:border-accent/60 transition-all duration-300 hover:shadow-lg group overflow-hidden">
                    <div className="absolute top-0 left-0 w-24 h-24 bg-accent/15 rounded-full blur-2xl group-hover:scale-125 transition-transform -ml-12 -mt-12"></div>
                    <div className="relative">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-secondary to-primary p-2 mb-4 group-hover:scale-110 transition-transform">
                        <Users className="w-full h-full text-white" />
                      </div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">Student Tech Communities</h4>
                      <p className="text-sm text-muted-foreground">Active member and contributor</p>
                    </div>
                  </Card>

                  {/* Open Source Card */}
                  <Card className="relative p-6 bg-white/5 backdrop-blur-lg border border-white/10 hover:border-primary/50 transition-all duration-300 group overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-accent/0 group-hover:from-primary/5 group-hover:to-accent/5 transition-all duration-300"></div>
                    <div className="relative">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary p-2 mb-4 group-hover:rotate-12 transition-transform">
                        <Code className="w-full h-full text-white" />
                      </div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">Open Source</h4>
                      <p className="text-sm text-muted-foreground">Contributing to educational and AI projects</p>
                    </div>
                  </Card>

                  {/* Peer Mentoring Card */}
                  <Card className="relative p-6 bg-card/20 backdrop-blur-md border-2 border-primary/30 hover:border-primary/80 transition-all duration-300 hover:shadow-lg hover:shadow-primary/50 group overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent to-accent p-2 mb-4 group-hover:animate-pulse">
                        <Lightbulb className="w-full h-full text-white" />
                      </div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">Peer Mentoring</h4>
                      <p className="text-sm text-muted-foreground">Helping fellow students with programming and AI</p>
                    </div>
                  </Card>

                  {/* Educational Initiatives Card */}
                  <Card className="relative p-6 bg-gradient-to-br from-card/40 to-card/10 backdrop-blur-sm border border-border/20 hover:border-secondary/50 transition-all duration-300 hover:shadow-lg group overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                    <div className="relative">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary via-accent to-secondary p-2 mb-4 group-hover:scale-110 transition-transform">
                        <GraduationCap className="w-full h-full text-white" />
                      </div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">Educational Initiatives</h4>
                      <p className="text-sm text-muted-foreground">Developing free platforms for students</p>
                    </div>
                  </Card>
                </div>
              </div>

              {/* Educational Initiatives Details */}
              <div className="mb-12">
                <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center">
                  <Sparkles className="w-6 h-6 mr-3 text-primary" />
                  Educational Initiatives
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <Card className="p-6 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border-gradient-primary/30 hover:border-gradient-primary/60 transition-all duration-500 hover:shadow-2xl group cursor-pointer">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:via-accent/5 group-hover:to-primary/5 transition-all duration-500 rounded-lg"></div>
                    <div className="relative">
                      <h4 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                        <Rocket className="w-5 h-5 mr-3 text-primary" />
                        Platform Development
                      </h4>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <span className="text-primary mt-1">→</span>
                          <p className="text-muted-foreground leading-relaxed">
                            Developing free educational platforms (Knowingz/OL-Poddo) for Sri Lankan students
                          </p>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-accent mt-1">→</span>
                          <p className="text-muted-foreground leading-relaxed">
                            Creating accessible learning resources for mathematics and science
                          </p>
                        </li>
                      </ul>
                    </div>
                  </Card>

                  <Card className="p-6 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border-gradient-primary/30 hover:border-gradient-primary/60 transition-all duration-500 hover:shadow-2xl group cursor-pointer">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:via-accent/5 group-hover:to-primary/5 transition-all duration-500 rounded-lg"></div>
                    <div className="relative">
                      <h4 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                        <Share2 className="w-5 h-5 mr-3 text-accent" />
                        Knowledge Sharing
                      </h4>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <span className="text-primary mt-1">→</span>
                          <p className="text-muted-foreground leading-relaxed">
                            Organizing study groups and coding sessions
                          </p>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-accent mt-1">→</span>
                          <p className="text-muted-foreground leading-relaxed">
                            Sharing knowledge through GitHub repositories and documentation
                          </p>
                        </li>
                      </ul>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>

          {/* MY APPROACH TO DEVELOPMENT SECTION */}
          <div className="fade-in-delayed mb-24 relative group">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-accent/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

            <div className="relative">
              <div className="mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 flex items-center justify-center">
                  <Keyboard className="w-8 h-8 mr-3 text-accent" />
                  My Approach to Development
                </h2>
                <div className="h-1 w-20 bg-gradient-accent mx-auto rounded-full"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Problem-First Mindset */}
                <Card className="relative p-6 bg-gradient-to-br from-primary/10 via-accent/5 to-card/30 backdrop-blur-md border border-primary/30 hover:border-primary/60 transition-all duration-300 hover:shadow-xl shadow-primary/20 group overflow-hidden">
                  <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500"></div>
                  <div className="relative">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent p-2 mb-4 group-hover:scale-110 transition-transform">
                      <Target className="w-full h-full text-white" />
                    </div>
                    <h4 className="text-xl font-semibold text-foreground mb-3">Problem-First Mindset</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      I start every project by deeply understanding the problem and the people it affects. Technology is a tool, and the best solutions come from empathy and insight into user needs.
                    </p>
                  </div>
                </Card>

                {/* Iterative Innovation */}
                <Card className="relative p-6 bg-card/30 backdrop-blur-md border border-border/40 hover:border-accent/60 transition-all duration-300 hover:shadow-lg group overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-accent/10 rounded-full blur-xl group-hover:bg-accent/20 transition-colors duration-300 -mr-10 -mt-10"></div>
                  <div className="relative">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent to-secondary p-2 mb-4 group-hover:scale-110 transition-transform">
                      <Zap className="w-full h-full text-white" />
                    </div>
                    <h4 className="text-xl font-semibold text-foreground mb-3">Iterative Innovation</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      I believe in rapid prototyping, continuous testing, and iterative improvement. Building, learning, and adapting quickly leads to better outcomes than pursuing perfection from the start.
                    </p>
                  </div>
                </Card>

                {/* Collaborative Spirit */}
                <Card className="relative p-6 bg-gradient-to-br from-accent/10 via-secondary/5 to-card/30 backdrop-blur-md border border-accent/30 hover:border-accent/60 transition-all duration-300 hover:shadow-lg group overflow-hidden">
                  <div className="absolute top-0 left-0 w-24 h-24 bg-accent/15 rounded-full blur-2xl group-hover:scale-125 transition-transform -ml-12 -mt-12"></div>
                  <div className="relative">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-secondary to-primary p-2 mb-4 group-hover:scale-110 transition-transform">
                      <Users className="w-full h-full text-white" />
                    </div>
                    <h4 className="text-xl font-semibold text-foreground mb-3">Collaborative Spirit</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      The best projects emerge from diverse perspectives. I actively seek collaboration, value feedback, and believe that knowledge sharing accelerates collective growth.
                    </p>
                  </div>
                </Card>

                {/* Ethical AI Development */}
                <Card className="relative p-6 bg-white/5 backdrop-blur-lg border border-white/10 hover:border-primary/50 transition-all duration-300 group overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-accent/0 group-hover:from-primary/5 group-hover:to-accent/5 transition-all duration-300"></div>
                  <div className="relative">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary p-2 mb-4 group-hover:rotate-12 transition-transform">
                      <Brain className="w-full h-full text-white" />
                    </div>
                    <h4 className="text-xl font-semibold text-foreground mb-3">Ethical AI Development</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      I'm committed to building AI systems that are fair, transparent, and beneficial. This means considering bias, privacy, and societal impact in every design decision.
                    </p>
                  </div>
                </Card>
              </div>
            </div>
          </div>

          {/* BEYOND CODE SECTION */}
          <div className="fade-in-delayed mb-24 relative group">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-accent/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

            <div className="relative">
              <div className="mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 flex items-center justify-center">
                  <Sparkles className="w-8 h-8 mr-3 text-secondary" />
                  Beyond Code
                </h2>
                <div className="h-1 w-20 bg-gradient-secondary mx-auto rounded-full"></div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Personal Interests Card */}
                <Card className="p-8 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border-gradient-primary/30 hover:border-gradient-primary/60 transition-all duration-500 hover:shadow-2xl group cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:via-accent/5 group-hover:to-primary/5 transition-all duration-500 rounded-lg"></div>

                  <div className="relative">
                    <h3 className="text-2xl font-semibold mb-6 flex items-center text-primary">
                      <Heart className="w-6 h-6 mr-3" />
                      Personal Interests
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <span className="text-accent text-lg">✓</span>
                        <p className="text-muted-foreground leading-relaxed">
                          Reading research papers on latest AI advancements
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-accent text-lg">✓</span>
                        <p className="text-muted-foreground leading-relaxed">
                          Experimenting with new frameworks and technologies
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-accent text-lg">✓</span>
                        <p className="text-muted-foreground leading-relaxed">
                          Participating in tech communities and forums
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-accent text-lg">✓</span>
                        <p className="text-muted-foreground leading-relaxed">
                          Exploring the intersection of AI and creativity
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-accent text-lg">✓</span>
                        <p className="text-muted-foreground leading-relaxed">
                          Contributing to open-source projects
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-accent text-lg">✓</span>
                        <p className="text-muted-foreground leading-relaxed">
                          Sharing knowledge with the community
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Philosophy Card */}
                <Card className="p-8 bg-gradient-to-br from-accent/10 via-secondary/5 to-card/40 backdrop-blur-xl border-gradient-primary/30 hover:border-accent/60 transition-all duration-500 hover:shadow-2xl group cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-primary/0 to-accent/0 group-hover:from-accent/10 group-hover:via-secondary/5 group-hover:to-accent/5 transition-all duration-500 rounded-lg"></div>

                  <div className="relative">
                    <h3 className="text-2xl font-semibold mb-6 flex items-center text-accent">
                      <Lightbulb className="w-6 h-6 mr-3" />
                      My Philosophy
                    </h3>
                    <div className="space-y-6">
                      <blockquote className="pl-6 border-l-4 border-primary/50 hover:border-primary/80 transition-all">
                        <p className="text-lg text-foreground italic font-medium leading-relaxed group-hover:text-primary transition-colors">
                          "AI is not about replacing human intelligence—it's about augmenting it. The future I'm building is one where technology amplifies human potential, makes education accessible to all, and solves problems that improve lives."
                        </p>
                      </blockquote>
                      <div className="pt-4 space-y-4">
                        <div className="flex items-start gap-3">
                          <Sparkles className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                          <p className="text-muted-foreground leading-relaxed">
                            This philosophy guides every decision I make, from the projects I choose to the way I mentor others.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
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
                    I'm always interested in connecting with fellow developers,
                    researchers, and innovators. Let's explore opportunities to
                    build something amazing together through AI, machine
                    learning, and full-stack development.
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
