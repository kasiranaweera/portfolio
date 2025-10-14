import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Brain,
  GraduationCap,
  Award,
  Target,
  Code,
  BookOpen,
} from "lucide-react";
import { Link } from "react-router-dom";

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
      link: "https://drive.google.com/file/d/1VSw9D64BxajK74akcLjht63MIuq1geQ7/view?usp=drive_link",
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
    }
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
              Passionate software engineering undergraduate and AI enthusiast,
              dedicated to advancing technology through generative AI, agentic
              AI, and full-stack development, with a focus on creating
              innovative solutions for education and community impact.
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
            </Card>

            <Card
              className="p-8 bg-card/50 backdrop-blur-sm border-border/50 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              <h2 className="text-2xl font-semibold mb-6 flex items-center">
                <Target className="w-6 h-6 mr-3 text-accent" />
                AI & Machine Learning
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
              <h2 className="text-2xl font-semibold mb-6 flex items-center mt-8">
                <Target className="w-6 h-6 mr-3 text-accent" />
                Web Development
              </h2>
              <div className="flex flex-wrap gap-3">
                {skills2.map((skill, index) => (
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
              Education
            </h2>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <Card
                  key={index}
                  className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-all duration-300 hover:scale-[1.02] animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h3 className="text-xl font-semibold text-foreground">
                      {exp.role}
                    </h3>
                    <span className="text-sm text-primary font-medium bg-primary/10 px-3 py-1 rounded-full">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-accent font-medium mb-3 text-lg">
                    {exp.company}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                  {exp.sub_dec1 && (
                    <>
                      <div className="flex m-1">
                        <p className="text-muted-foreground leading-relaxed mr-2">
                          -
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                          {exp.sub_dec1}
                        </p>
                      </div>
                    </>
                  )}
                  {exp.sub_dec2 && (
                    <>
                      <div className="flex m-1">
                        <p className="text-muted-foreground leading-relaxed mr-2">
                          -
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                          {exp.sub_dec2}
                        </p>
                      </div>
                    </>
                  )}
                  {exp.sub_dec3 && (
                    <>
                      <div className="flex m-1">
                        <p className="text-muted-foreground leading-relaxed mr-2">
                          -
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                          {exp.sub_dec3}
                        </p>
                      </div>
                    </>
                  )}
                  {exp.sub_dec4 && (
                    <>
                      <div className="flex m-1">
                        <p className="text-muted-foreground leading-relaxed mr-2">
                          -
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                          {exp.sub_dec4}
                        </p>
                      </div>
                    </>
                  )}
                </Card>
              ))}
            </div>
          </div>

          {/* Education & Achievements */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 animate-fade-in">
              <h2 className="text-2xl font-semibold mb-6 flex items-center">
                <GraduationCap className="w-6 h-6 mr-3 text-primary" />
                Educational Certifications
              </h2>
              <div className="border-t pt-3"></div>
              {edudata.map((data, index) => (
                <div className="space-y-4 border-b p-3">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {data.topic}
                    </h3>
                    <p className="text-accent font-medium mb-2">
                      {data.company}
                    </p>

                    <p className="text-muted-foreground mb-3">
                      Issued: {data.date}
                      <br /> {data.dec1 && <>Credential ID: {data.dec1}</>}
                    </p>

                    <p className="text-m text-primary">
                      <Link to={data.link}>Show credential</Link>
                    </p>
                  </div>
                </div>
              ))}
            </Card>

            <Card
              className="p-8 bg-card/50 backdrop-blur-sm border-border/50 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              <h2 className="text-2xl font-semibold mb-6 flex items-center">
                <Award className="w-6 h-6 mr-3 text-accent" />
                Achievements
              </h2>
                            <div className="border-t pt-3"></div>
              <div className="space-y-3">
                {achievements.map((data, index) => (
                <div className="space-y-4 border-b p-3">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {data.topic}
                    </h3>
                    <p className="text-accent font-medium mb-2">
                      {data.company}
                    </p>

                    <p className="text-muted-foreground mb-3">
                      Issued: {data.date}
                      <br /> {data.dec1 && <>Credential ID: {data.dec1}</>}
                    </p>

                    <p className="text-m text-primary">
                      <Link to={data.link}>Show credential</Link>
                    </p>
                  </div>
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
