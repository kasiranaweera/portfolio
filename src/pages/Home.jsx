import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SparkleAnimation from "../components/SparkleAnimation";
import RecentProjectsCarousel from "../components/RecentProjectsCarousel";
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
  GraduationCap,
  FileText,
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

  // Recent Featured Projects for Carousel
  const recentProjects = [
    {
      title: "EduWingz",
      description:
        "An AI-powered education platform designed to transform learning by delivering personalized experiences tailored to individual student needs. Utilizing generative and agentic AI, the platform adapts teaching methods to unique learning patterns.",
      category: "Final Year Project",
      technologies: [
        "React JS",
        "Django",
        "MUI",
        "LangChain",
        "Deepseek",
        "SQLite",
        "Python",
      ],
      github: "https://github.com/kasiranaweera/eduwingz",
      live: "https://eduwingz.vercel.app",
      status: "Completed",
    },
    {
      title: "Knowingz Platform",
      description:
        "An educational platform dedicated to mathematics for school students, with focus on supporting O/L learners by providing essential study materials, past papers, and exam resources.",
      category: "Solo Project",
      technologies: [
        "Next JS",
        "Tailwind CSS",
        "JavaScript",
        "Latex",
        "Vercel",
      ],
      github: "https://github.com/kasiranaweera/ol-poddo",
      live: "https://ol-poddo.vercel.app",
      status: "Active Development",
    },
    {
      title: "Whisper AI-Psychiatric",
      description:
        "AI-powered mental health assistant featuring voice interaction, fine-tuned Gemma-3 model for psychological guidance, RAG for context-aware responses, and crisis detection.",
      category: "AI Project",
      technologies: [
        "Streamlit",
        "PyTorch",
        "Hugging Face",
        "Transformers",
        "Whisper",
        "FAISS",
        "Kokoro TTS",
      ],
      github:
        "https://github.com/kasiranaweera/whisper-ai-psychiatric-RAG-gemma3-finetuned",
      status: "Completed",
    },
    {
      title: "Z-Score Uni Finder",
      description:
        "ML-based recommender for university courses using Z-scores and UGC cutoff data (2020-2025) to help students make informed decisions about their educational future.",
      category: "ML Project",
      technologies: [
        "Next JS",
        "Tailwind CSS",
        "Machine Learning",
        "LightGBM",
        "Kaggle",
      ],
      github: "https://github.com/kasiranaweera/Z-ScoreUniFinder",
      live: "https://www.kaggle.com/datasets/ranaweerakasi/sri-lanakan-ugc-cutoff-marks-dataset-2020-2025",
      status: "Completed",
    },
    {
      title: "Road Accident Prediction",
      description:
        "ML-based traffic accident prediction using logistic regression, random forest, and neural networks achieving up to 89% accuracy, plus a Flask chatbot for real-time safety.",
      category: "ML Project",
      technologies: ["TensorFlow", "Scikit-learn", "Flask", "Python"],
      github: "https://github.com/kasiranaweera/road_accident_prediction",
      status: "Completed",
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
              <div className="h-4"></div>
              <p className="text-lg text-accent font-medium bg-accent/10 px-4 py-2 rounded-full inline-block">
                🎓 Software Engineering (UG) &nbsp;&nbsp; 🧠 Aspiring AI
                Engineer &nbsp;&nbsp; 🚀 Passionate about Gen & Agentic AI
              </p>
              <p className="text-lg text-muted-foreground max-w-5xl mx-auto leading-relaxed">
                I'm Sithija Ishan Ranaweera (KASI), Pioneering the future of
                artificial intelligence through cutting-edge research in
                generative models, multi-agent systems, and autonomous
                reasoning. Currently developing next-generation AI frameworks
                that push the boundaries of what's possible in machine
                intelligence and human-AI collaboration.
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
          <div className="fade-in-delayed flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 flex-wrap">
            <a href="/projects">
              <Button
                size="lg"
                className="bg-gradient-primary hover:opacity-90 transition-all duration-300 glow-primary hover:scale-105 px-8 py-3 animate-pulse-glow"
              >
                <Github className="w-5 h-5 mr-2" />
                Explore My Work
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
                Let's Talk
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

          {/* Mini About Section */}
          <div className="fade-in-delayed mb-12 mt-24">
            <h2 className="text-3xl font-semibold text-foreground mb-6 flex items-center justify-center">
              {/* <Brain className="w-7 h-7 mr-3 text-secondary-foreground" /> */}
              About Me & My Expertise
            </h2>
            <div className="max-w-3xl mx-auto">
              {/* About Content */}
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-all duration-300 mb-8">
                <div className="space-y-3">
                  <p className="text-base text-muted-foreground leading-relaxed">
                    I'm{" "}
                    <span className="font-semibold text-foreground">
                      Sithija Ishan Ranaweera (KASI)
                    </span>
                    , a passionate Software and AI/ML Engineer from Sri Lanka.
                    Currently pursuing my BSc (Hons) in Software Engineering at
                    Sri Lanka Technological Campus (SLTC), I’m dedicated to
                    advancing artificial intelligence through cutting-edge
                    research and real-world applications.
                  </p>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    My core focus lies in{" "}
                    <span className="font-semibold text-foreground">
                      Generative AI
                    </span>
                    ,{" "}
                    <span className="font-semibold text-foreground">
                      Agentic Systems
                    </span>
                    ,{" "}
                    <span className="font-semibold text-foreground">
                      Deep Learning
                    </span>
                    , and{" "}
                    <span className="font-semibold text-foreground">
                      multi-agent architectures
                    </span>
                    , building intelligent solutions that leverage advanced
                    LLMs, RAG pipelines, autonomous reasoning, diffusion models,
                    and orchestration frameworks to solve complex problems and
                    create meaningful impact. Whether developing AI-powered
                    educational platforms, conducting innovative ML research,
                    architecting scalable full-stack systems, or pushing the
                    boundaries of human-AI collaboration, I bring technical
                    depth, curiosity, and a relentless drive to build the next
                    generation of autonomous intelligence.
                  </p>
                </div>
              </Card>

              {/* Specializations Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="p-5 bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-center space-x-2 mb-2 justify-center">
                    <Zap className="w-5 h-5 text-primary" />
                    <h4 className="font-semibold text-foreground">
                      Generative & Agentic AI
                    </h4>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Multi-agent systems, LLMs, autonomous reasoning, and RAG
                    frameworks.
                  </p>
                </Card>

                <Card className="p-5 bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-center space-x-2 mb-2 justify-center">
                    <Zap className="w-5 h-5 text-primary" />
                    <h4 className="font-semibold text-foreground">
                      Full-Stack Development
                    </h4>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    React, Next.js, Django, Node.js, and MERN stack
                    applications.
                  </p>
                </Card>

                <Card className="p-5 bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-center space-x-2 mb-2 justify-center">
                    <Zap className="w-5 h-5 text-primary" />
                    <h4 className="font-semibold text-foreground">
                      Machine Learning
                    </h4>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    PyTorch, TensorFlow, neural networks, and AI research &
                    development.
                  </p>
                </Card>

                <Card className="p-5 bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-center space-x-2 mb-2 justify-center">
                    <Zap className="w-5 h-5 text-primary" />
                    <h4 className="font-semibold text-foreground">
                      Languages & Tools
                    </h4>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Python, Java, JavaScript, Docker, and cloud deployment.
                  </p>
                </Card>
              </div>
              <div className="pt-8 gap-2 flex justify-center">
                <a href="/about">
                  <Button
                    variant="outline"
                    className="border-primary/50 hover:bg-primary/10 hover:text-white transition-all duration-300 hover:scale-105 px-8 py-3 hover:shadow-primary"
                  >
                    <GraduationCap className="w-4 h-4 mr-2" />
                    Know My Story{" "}
                  </Button>
                </a>
                <a href="/cv">
                  <Button
                    variant="secondary"
                    className="hover:opacity-90 transition-all duration-300 hover:scale-105 px-8 py-3"
                  >
                    <FileText className="w-5 h-5 mr-2" />
                    View My CV
                  </Button>
                </a>
              </div>
            </div>
          </div>

          {/* Specializations */}
          {/* <Specializations /> */}

          {/* Tech Stack */}
          <TechStack />

          {/* Recent Projects Carousel Section */}
          <div className="fade-in-delayed mb-12 mt-24">
            <h2 className="text-3xl font-semibold text-foreground mb-4 flex items-center justify-center">
              {/* <Star className="w-7 h-7 mr-3 text-accent" /> */}
              Recent Projects Showcase
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8 text-center">
              Explore my latest AI, ML, and full-stack development projects that
              showcase innovation and technical excellence.
            </p>
            <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
              <RecentProjectsCarousel projects={recentProjects} />
            </div>
          </div>

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
