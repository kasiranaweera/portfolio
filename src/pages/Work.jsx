import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  Calendar,
  MapPin,
  ExternalLink,
  Building,
  Users,
  Trophy,
  X,
  Github,
  Star,
  GitFork,
  Eye,
  Zap,
  Brain,
  Bot,
  Code2,
} from "lucide-react";
import Image_Techtool from "../../assets/image.png";
import imgv11 from "../../assets/img-v11.jpg";
import imgv12 from "../../assets/img-v12.jpg";
import imgv13 from "../../assets/img-v13.jpg";
import imgv21 from "../../assets/img-v21.jpeg";
import imgv22 from "../../assets/img-v22.jpg";
import imgv31 from "../../assets/img-v31.jpg";
import imgv32 from "../../assets/img-v32.jpeg";
import imgv33 from "../../assets/img-v33.jpg";
import imgv41 from "../../assets/img-v41.jpg";
import imgv51 from "../../assets/img-v51.jpeg";
import imgv52 from "../../assets/img-v52.jpeg";
import imgv53 from "../../assets/img-v53.jpeg";
import imgv61 from "../../assets/img-v61.jpeg";
import imgv62 from "../../assets/img-v62.jpeg";
import imgv63 from "../../assets/img-v63.jpeg";
import imgv71 from "../../assets/img-v71.jpeg";
import imgv72 from "../../assets/img-v72.jpeg";
import imgv73 from "../../assets/img-v73.jpeg";
import imgv81 from "../../assets/img-v81.jpeg";
import imgv82 from "../../assets/img-v82.jpg";
import imgv83 from "../../assets/img-v83.jpg";
import imgv91 from "../../assets/img-v91.jpeg";

const Work = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const closeModal = () => setSelectedImage(null);

  const workExperience = [
    {
      company: "Orel IT",
      role: "Associate Image Processor",
      period: "Nov 2022 - Jun 2022",
      location: "Sri Lanka",
      type: "Full-time",
      description:
        "During my tenure at OREL IT as an Associate Image Processor, I collaborated on international projects, contributing to data preparation for autonomous vehicle systems. I annotated and labeled objects in road video clips, ensuring high-quality datasets for machine learning models while maintaining accuracy and consistency in line with project guidelines. This role provided valuable experience in computer vision data processing, teamwork, and managing complex datasets.",
      achievements: [],
      technologies: [],
      projects: [],
    },
  ];

  const volunteering = [
    {
      company: "SEDS SLTC",
      period: "Sep 2022 - present",
      position: [
        {
          title: "Vice Chairman",
          time: "Jul 2024 - Present",
          description: [
            "Supported event coordination and logistics for the Colombo edition of NASA’s global hackathon.",
            "Assisted in managing venue setup, prize-giving event organization, and participant support.",
            "Collaborated with the organizing team to ensure smooth flow of competition activities.",
          ],
          images: [imgv11, imgv12, imgv13],
        },
        {
          title: "Assistant Project Manager",
          time: "Dec 2022 - Jul 2024",
          description: [
            "Assisted in planning and managing large-scale student projects.",
            "Coordinated tasks between sub-teams and ensured timely project delivery.",
          ],
          images: [imgv21, imgv22],
        },
        {
          title: "Member",
          time: "Sep 2022 - Jul 2024",
          description: [
            "Actively collaborated with fellow members in planning and organizing events.",
            "Supported the execution of Stargaze ’22 Night Camp, assisting with logistics and participant coordination.",
            "Gained hands-on experience in teamwork, event organization, and project support.",
          ],
          images: [],
        },
      ],
    },
    {
      company: "IEEE Industry Applications Society of SLTC",
      period: "3 years",
      position: [
        {
          title: "Assistant Webmaster",
          time: "Jul 2024 - Aug 2025",
          description: [
            "Maintained and updated digital platforms for society activities.",
            "Guided the creation and design of flyers, posters, and other digital materials to support events and promotions.",
          ],
          images: [imgv31, imgv32, imgv33],
        },
        {
          title: "Sub-Committee Head of Membership Development",
          time: "Jun 2023 - Jul 2024",
          description: [
            "Led membership development initiatives to grow and engage student participation.",
            "Collaborated with other sub-committees and the executive team to align membership efforts with overall society goals.",
          ],
          images: [imgv41],
        },
        {
          title: "Member",
          time: "Sep 2022 - Jul 2024",
          description: [
            "Actively supported various society projects and events.",
            "Assisted in organizing Technomind Robotic Competition, helping with logistics, coordination, and execution.",
          ],
          images: [],
        },
      ],
    },
  ];

  const otherProjects = [
    {
      title: "NASA Space Apps Colombo",
      rank: "Event & Logistics Team Member",
      description:
        "I supported the coordination and logistics of NASA’s global hackathon in Colombo. I assisted in managing venue setup, organizing the prize-giving event, and providing participant support. Collaborating closely with the organizing team, I ensured the smooth execution of competition activities, contributing to a successful and impactful event.",
      images: [imgv51, imgv52, imgv53],
      projects: [],
    },
    {
      title: "Media Unit of SLTC Research University",
      rank: "Program Head (OC) – Master Designer V2.0",
      description:
        "I directed the overall program flow of a national-level graphic design competition. I organized workshops to train and inspire participants, fostering their creative skills. Collaborating with the media unit team, I managed event schedules, publicity, and participant engagement, ensuring a well-executed and impactful competition.",
      images: [imgv61, imgv62, imgv63],
      projects: [],
    },
    {
      title: "SEDS SLTC",
      description:
        "A student-led organization focused on space, astronomy, and STEM-related projects, where I actively contributed to event management, project coordination, and leadership initiatives.",
      images: [imgv71, imgv72, imgv73],
      projects: [
        {
          name: "Project Manager – Stargaze ’23 Night Camp (SEDS SLTC)",
          description: [
            "Successfully managed planning, logistics, and execution of the astronomy camp.",
          ],
        },
        {
          name: "Stargaze ’24 (SEDS SLTC)",
          description: [
            "Provided guidance and strategic advice to the organizing team.",
            "Mentored team members in planning, coordination, and execution of the camp.",
          ],
        },{name: "Technomind Robotic Competition – Design Team (OC)", description: [
          "Designed flyers, banners, and promotional materials for the two-day robotics competition.",
          "Assisted in event setup, coordination, and judging processes.",
          "Collaborated with the technical and logistics teams to ensure successful event execution."
        ]}
      ],
    },
    {
      title: "IEEE Industry Applications Society of SLTC",
      description:
        "A professional student society promoting industrial applications and engineering innovations, where I supported projects, membership development, and organized technical and entrepreneurial events.",
      images: [imgv81, imgv82, imgv83],
      projects: [
        {
          name: "Venturify’24 – Co-Project Manager (IEEE IAS of SLTC & SLIIT)",
          description: [
            "Led both online and physical workshops focused on entrepreneurship for students.",
            "Planned and executed the event agenda, including keynote sessions and panel discussion.",
            "Coordinated a team of volunteers to ensure smooth event operations.",
            "Monitored participant progress and provided guidance for the final physical workshop.",
          ],
        },
        {
          name: " InnovMind V2.0 – Vice Project Manager (IEEE IAS SLTC)",
          description: [
            "Supported the planning and execution of a robotics workshop and competition.",
            "Assisted in coordinating workshops, technical sessions, and team logistics.",
            "Ensured smooth communication between project teams and participants.",
          ],
        },
        
      ],
    },{
      title: "IEEE Student Branch of SLTC",
      role: "Treasurer – Spark6 Project",
      description:"I managed financial planning and budgeting for a student awareness initiative. I oversaw fund allocation, expense tracking, and resource management to ensure seamless project execution. Collaborating with the organizing team, I supported event logistics and participant engagement, contributing to the project's success.",
      images: [imgv91],
      projects: [],
    },
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
              My professional journey in AI, ML, and software engineering
              centers on developing innovative solutions and driving community
              impact through leadership and volunteering in technology-focused
              initiatives.
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
                        <h3 className="text-xl text-accent font-semibold mb-3">
                          {work.role}
                        </h3>
                      </div>
                      <div className="flex flex-col lg:items-end space-y-2">
                        <Badge
                          variant="secondary"
                          className="bg-primary/10 text-primary"
                        >
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
                    {work.achievements.length > 0 && (
                      <>
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                            <Trophy className="w-5 h-5 mr-2 text-accent" />
                            Key Achievements
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {work.achievements.map((achievement, idx) => (
                              <div
                                key={idx}
                                className="flex items-start space-x-3"
                              >
                                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                <p className="text-sm text-muted-foreground">
                                  {achievement}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </>
                    )}

                    {/* Technologies */}
                    {work.technologies.length > 0 && (
                      <>
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-foreground mb-3">
                            Technologies Used
                          </h4>
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
                      </>
                    )}

                    {/* Key Projects */}
                    {work.projects.length > 0 && (
                      <>
                        <div>
                          <h4 className="text-lg font-semibold text-foreground mb-3">
                            Key Projects
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {work.projects.map((project, idx) => (
                              <div
                                key={idx}
                                className="bg-background/50 p-4 rounded-lg border border-border/50"
                              >
                                <h5 className="font-semibold text-foreground mb-2">
                                  {project.name}
                                </h5>
                                <p className="text-sm text-muted-foreground">
                                  {project.description}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </>
                    )}
                  </Card>
                </div>
              </div>
            ))}
          </div>

          <div className="pl-5 border-t pt-10">
            <h2 className="text-3xl font-semibold mb-8 flex items-center animate-fade-in">
              <Users className="w-7 h-7 mr-3 text-primary" />
              Volunteering
            </h2>
          </div>

          {/* Voluntering */}
          <div className="relative">
            {/* Vertical line */}
            <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-primary opacity-50"></div>

            {volunteering.map((data, index) => (
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
                          {data.company}
                        </h2>
                      </div>
                      <div className="flex flex-col lg:items-end space-y-2">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4 mr-1" />
                          {data.period}
                        </div>
                      </div>
                    </div>

                    {/* Key Achievements */}
                    {data.position.length > 0 && (
                      <>
                        {data.position.map((work, index) => (
                          <div className="mb-6">
                            <h3 className="text-xl text-accent font-semibold mb-3">
                              {work.title}
                              {` (${work.time})`}
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-1 gap-3">
                              {work.description.map((achievement, idx) => (
                                <div
                                  key={idx}
                                  className="flex items-start space-x-3"
                                >
                                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                  <p className="text-muted-foreground">
                                    {achievement}
                                  </p>
                                </div>
                              ))}
                            </div>
                            {/* Mini Gallery */}
                            {work.images.length > 0 && (
                              <>
                                <div className="mx-auto py-3">
                                  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
                                    {work.images.map((src, index) => (
                                      <div
                                        key={index}
                                        onClick={() => setSelectedImage(src)}
                                        className="overflow-hidden rounded-2xl shadow-md hover:shadow-lg transition-all duration-300"
                                      >
                                        <img
                                          src={src}
                                          alt={`Gallery ${index}`}
                                          className="w-full h-24 object-cover hover:scale-110 transition-transform duration-300"
                                        />
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </>
                            )}
                          </div>
                        ))}
                      </>
                    )}
                  </Card>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
            {otherProjects.map((project, index) => (
              <Card
                key={index}
                className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-2xl font-semibold text-foreground mb-1">
                  {project.title}
                </h3>
                <h3 className="text-xl text-accent font-semibold mb-6">
                  {project.rank}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Projects */}
                {project.projects.length > 0 && (
                  <>
                    <div className="my-6">
                      <h3 className="text-xl text-foreground font-semibold mb-6">
                        Key Projects
                      </h3>
                      <div className="grid grid-cols-1 gap-4">
                        {project.projects.map((proj, idx) => (
                          <div className="border rounded-xl gap-3 bg-background/30 border-border/50 p-6">
                            <h5 className="text-l text-accent font-semibold pb-3">
                              {proj.name}
                            </h5>
                            {proj.description.map((desc, i) => (
                              <div className="flex gap-2">
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                  {"-"}
                                </p>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                  {desc}
                                </p>
                              </div>
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                )}

                {/* Mini Gallery */}
                {project.images.length > 0 && (
                  <>
                    <div className="mx-auto py-3">
                      <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-4 gap-3">
                        {project.images.map((src, index) => (
                          <div
                            key={index}
                            onClick={() => setSelectedImage(src)}
                            className="overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                          >
                            <img
                              src={src}
                              alt={`Gallery ${index}`}
                              className="w-full h-20 object-cover hover:scale-110 transition-transform duration-300"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 animate-fade-in">
            <Card className="p-8 bg-card/30 backdrop-blur-sm border-border/50">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Interested in Collaboration?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                I'm always open to discussing new opportunities, research
                collaborations, or innovative AI projects. Let's build the
                future of AI together!
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
      {/* Popup Modal */}
      {selectedImage && (
        <div
          onClick={closeModal}
          className="fixed inset-0 bg-black/10 backdrop-blur-sm flex items-center justify-center z-50"
        >
          <div className="relative w-11/12 h-11/12 px-4 justify-center align-middle flex">
            <img
              src={selectedImage}
              alt="Preview"
              className="rounded-xl shadow-lg w-full max-h-[80vh] object-contain"
            />
          </div>
          <button
            onClick={closeModal}
            className="absolute top-5 right-5 bg-black/60 text-white rounded-full p-3 hover:bg-black transition"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Work;
