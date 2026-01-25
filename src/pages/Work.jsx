"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ProjectImageModal } from "@/components/ProjectImageModal";
import { useState } from "react";
import {
  Calendar,
  MapPin,
  ExternalLink,
  Building,
  Users,
  Trophy,
  Github,
  Star,
  GitFork,
  Eye,
  Zap,
  Brain,
  Bot,
  Code2,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import AnimatedBackground from "../components/AnimatedBackground";
import SparkleAnimation from "../components/SparkleAnimation";
import Image_Techtool from "../../assets/image.jpeg";
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
// This component needs 'use client' for modal and state management

const Work = () => {
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
      period: "Sep 2022 - Nov 2025",
      position: [
        {
          title: "Vice Chairman",
          time: "Jul 2024 - Nov 2025",
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
          time: "Sep 2022 - Jul 2023",
          description: [
            "Actively supported various society projects and events.",
            "Assisted in organizing Technomind Robotic Competition, helping with logistics, coordination, and execution.",
          ],
          images: [],
        },
      ],
    },
  ];

  const academicProjects = [
    {
      title: "AI-Powered Research & Innovation",
      icon: Brain,
      description: "Applied machine learning to academic research challenges",
      projects: [
        {
          name: "Deep Learning for Computer Vision",
          description: "Developed CNN models for image classification and object detection"
        },
        {
          name: "NLP & Text Analysis Projects",
          description: "Built text summarization and sentiment analysis applications"
        },
        {
          name: "Data Science & Analytics",
          description: "Analyzed complex datasets using statistical methods and visualization"
        }
      ]
    },
    {
      title: "Software Development & Architecture",
      icon: Code2,
      description: "Full-stack development projects applying best practices",
      projects: [
        {
          name: "Web Applications & APIs",
          description: "Created scalable web apps with modern frameworks and microservices"
        },
        {
          name: "Database Management",
          description: "Designed and optimized database systems for complex applications"
        },
        {
          name: "Cloud & DevOps",
          description: "Deployed applications using Docker, Kubernetes, and cloud platforms"
        }
      ]
    },
    {
      title: "Community & Open Source Contributions",
      icon: Users,
      description: "Contributing to tech community through collaboration and knowledge sharing",
      projects: [
        {
          name: "Technical Workshops & Mentoring",
          description: "Conducted workshops on AI/ML, web development, and emerging technologies"
        },
        {
          name: "Research Collaboration",
          description: "Participated in research initiatives on AI applications and problem-solving"
        },
        {
          name: "Knowledge Sharing",
          description: "Shared learnings through blog posts, presentations, and community events"
        }
      ]
    }
  ];

  const otherProjects = [
    {
      title: "NASA Space Apps Colombo",
      rank: "Event & Logistics Team Member",
      description:
        "I supported the coordination and logistics of NASA's global hackathon in Colombo. I assisted in managing venue setup, organizing the prize-giving event, and providing participant support. Collaborating closely with the organizing team, I ensured the smooth execution of competition activities, contributing to a successful and impactful event.",
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
    <ProjectImageModal>
      {({ openModal, selectedImage }) => (
        <div className="relative min-h-screen bg-gradient-background overflow-hidden">
          <AnimatedBackground />
          <SparkleAnimation />

          <div className="relative z-10 container mx-auto px-6 py-20 lg:py-32 backdrop-blur-sm">
            <div className="max-w-6xl mx-auto">
              {/* HERO SECTION */}
              <div className="text-center mb-20 lg:mb-32">
                {/* Animated Badge */}
                <div className="fade-in-up mb-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
                    <Sparkles className="w-4 h-4 text-primary animate-spin-slow" />
                    <span className="text-sm font-medium text-primary">Explore My Experience</span>
                  </div>
                </div>

                {/* Hero Heading */}
                <div className="fade-in-up space-y-6 mb-12">
                  <div className="space-y-4">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold gradient-text leading-tight animate-slide-up">
                      Building Experience Through
                      <br />
                      <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-shimmer">
                        Projects & Community Impact
                      </span>
                    </h1>
                  </div>

                  <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in">
While completing my undergraduate degree, I've gained practical experience through academic projects, research initiatives, and community volunteer work. My journey has been focused on applying AI/ML knowledge to solve real-world problems and contributing to the tech community.                  </p>
                </div>
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
                  <Card className="p-8 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border-gradient-primary/30 hover:border-gradient-primary/60 transition-all duration-500 hover:shadow-2xl group cursor-pointer">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:via-accent/5 group-hover:to-primary/5 transition-all duration-500 rounded-lg"></div>
                    
                    <div className="relative">
                      {/* Header */}
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                        <div>
                          <h2 className="text-2xl font-bold text-foreground mb-2 flex items-center group-hover:text-primary transition-colors">
                            <Building className="w-6 h-6 mr-3 text-primary" />
                            {work.company}
                          </h2>
                          <h3 className="text-xl text-accent font-semibold mb-3 group-hover:text-primary transition-colors">
                            {work.role}
                          </h3>
                        </div>
                        <div className="flex flex-col lg:items-end space-y-2">
                          <Badge
                            variant="secondary"
                            className="bg-primary/10 text-primary border border-primary/30 group-hover:bg-primary/20 group-hover:border-primary/60 transition-all duration-300"
                          >
                            {work.type}
                          </Badge>
                          <div className="flex items-center text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                            <Calendar className="w-4 h-4 mr-1" />
                            {work.period}
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                            <MapPin className="w-4 h-4 mr-1" />
                            {work.location}
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground mb-6 leading-relaxed group-hover:text-foreground transition-colors">
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
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>

          <div className="pl-5 border-t pt-10">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 flex items-center justify-center">
              <Users className="w-8 h-8 mr-3 text-primary" />
              Volunteering & Community
            </h2>
            <div className="h-1 w-20 bg-gradient-primary mx-auto rounded-full"></div>
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
                  <Card className="p-8 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border-gradient-primary/30 hover:border-gradient-primary/60 transition-all duration-500 hover:shadow-2xl group cursor-pointer">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:via-accent/5 group-hover:to-primary/5 transition-all duration-500 rounded-lg"></div>
                    
                    <div className="relative">
                      {/* Header */}
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                        <div>
                          <h2 className="text-2xl font-bold text-foreground mb-2 flex items-center group-hover:text-primary transition-colors">
                            <Building className="w-6 h-6 mr-3 text-primary" />
                            {data.company}
                          </h2>
                        </div>
                        <div className="flex flex-col lg:items-end space-y-2">
                          <div className="flex items-center text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                            <Calendar className="w-4 h-4 mr-1" />
                            {data.period}
                          </div>
                        </div>
                      </div>

                      {/* Positions */}
                      {data.position.length > 0 && (
                        <>
                          {data.position.map((work, index) => (
                            <div key={index} className="mb-6 pb-6 border-b border-border/30 last:border-b-0 last:pb-0 group-hover:bg-primary/5 p-3 rounded-lg transition-all duration-300">
                              <h3 className="text-xl text-accent font-semibold mb-3 group-hover:text-primary transition-colors">
                                {work.title}
                                {` (${work.time})`}
                              </h3>
                              <div className="space-y-2">
                                {work.description.map((achievement, idx) => (
                                  <div
                                    key={idx}
                                    className="flex items-start space-x-3"
                                  >
                                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                    <p className="text-muted-foreground group-hover:text-foreground transition-colors">
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
                                          className="overflow-hidden rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105"
                                          onClick={() => openModal(src.src)}
                                        >
                                          <img
                                            src={src.src}
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
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>

          {/* Academic Projects & Research Section */}
          <div className="fade-in-delayed mb-24 relative group mt-24">
            <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-primary/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
            
            <div className="relative">
              <div className="mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 flex items-center justify-center">
                  <Sparkles className="w-8 h-8 mr-3 text-accent animate-spin-slow" />
                  Academic & Research Journey
                </h2>
                <p className="text-center text-muted-foreground text-lg max-w-3xl mx-auto mb-6">
                  Applying AI/ML knowledge to solve real-world problems through academic projects, research initiatives, and collaborative learning experiences.
                </p>
                <div className="h-1 w-20 bg-gradient-accent mx-auto rounded-full"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6">
                {academicProjects.map((project, index) => {
                  const IconComponent = project.icon;
                  return (
                    <Card
                      key={index}
                      className="p-8 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border-gradient-accent/30 hover:border-gradient-accent/60 transition-all duration-500 hover:shadow-2xl hover:scale-105 group cursor-pointer"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/0 to-accent/0 group-hover:from-accent/10 group-hover:via-primary/5 group-hover:to-accent/5 transition-all duration-500 rounded-lg"></div>
                      
                      <div className="relative">
                        {/* Icon & Title */}
                        <div className="mb-6">
                          <div className="w-12 h-12 bg-gradient-to-br from-accent/20 to-primary/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                            <IconComponent className="w-6 h-6 text-accent group-hover:text-primary transition-colors" />
                          </div>
                          <h3 className="text-2xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                            {project.title}
                          </h3>
                          <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                            {project.description}
                          </p>
                        </div>

                        {/* Projects List */}
                        <div className="space-y-4">
                          {project.projects.map((proj, idx) => (
                            <div
                              key={idx}
                              className="border border-border/30 rounded-lg p-4 bg-background/30 hover:bg-background/50 hover:border-accent/50 transition-all duration-300"
                            >
                              <h4 className="text-sm font-semibold text-foreground mb-2 flex items-start gap-2">
                                <span className="text-accent mt-1">✦</span>
                                <span>{proj.name}</span>
                              </h4>
                              <p className="text-xs text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                                {proj.description}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="fade-in-delayed mb-24 relative group mt-16">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-accent/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
            
            <div className="relative">
              <div className="mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 flex items-center justify-center">
                  <Trophy className="w-8 h-8 mr-3 text-accent" />
                  Projects & Initiatives
                </h2>
                <div className="h-1 w-20 bg-gradient-primary mx-auto rounded-full"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
            {otherProjects.map((project, index) => (
              <Card
                key={index}
                className="p-6 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border-gradient-primary/30 hover:border-gradient-primary/60 transition-all duration-500 hover:shadow-2xl hover:scale-105 group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:via-accent/5 group-hover:to-primary/5 transition-all duration-500 rounded-lg"></div>
                
                <div className="relative">
                  <h3 className="text-2xl font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <h3 className="text-xl text-accent font-semibold mb-6 group-hover:text-primary transition-colors">
                    {project.rank}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed group-hover:text-foreground transition-colors">
                    {project.description}
                  </p>

                  {/* Projects */}
                  {project.projects.length > 0 && (
                    <>
                      <div className="my-6">
                        <h3 className="text-xl text-foreground font-semibold mb-6 group-hover:text-primary transition-colors">
                          Key Projects
                        </h3>
                        <div className="grid grid-cols-1 gap-4">
                          {project.projects.map((proj, idx) => (
                            <div key={idx} className="border rounded-xl gap-3 bg-background/30 border-border/50 p-6 hover:bg-background/50 hover:border-border/80 transition-all duration-300">
                              <h5 className="text-l text-accent font-semibold pb-3 group-hover:text-primary transition-colors">
                                {proj.name}
                              </h5>
                              {proj.description.map((desc, i) => (
                                <div key={i} className="flex gap-2">
                                  <p className="text-sm text-muted-foreground leading-relaxed">
                                    {"-"}
                                  </p>
                                  <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
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
                              className="overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105"
                              onClick={() => openModal(src.src)}
                            >
                              <img
                                src={src.src}
                                alt={`Gallery ${index}`}
                                className="w-full h-20 object-cover hover:scale-110 transition-transform duration-300"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </Card>
            ))}
            </div>
          </div>
          </div>

          {/* Professional Goals & Work Availability */}
          <div className="fade-in-delayed mb-24 relative group mt-24">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-accent/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
            
            <div className="relative">
              <div className="mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 flex items-center justify-center">
                  <Zap className="w-8 h-8 mr-3 text-primary animate-pulse" />
                  Goals & Availability
                </h2>
                <div className="h-1 w-20 bg-gradient-primary mx-auto rounded-full"></div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Professional Goals */}
                <div className="relative group cursor-pointer">
                  <Card className="p-8 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border-gradient-primary/30 hover:border-gradient-primary/60 transition-all duration-500 hover:shadow-2xl h-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:via-accent/5 group-hover:to-primary/5 transition-all duration-500 rounded-lg"></div>
                    
                    <div className="relative">
                      <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center group-hover:text-primary transition-colors">
                        <Brain className="w-6 h-6 mr-3 text-primary" />
                        Professional Goals
                      </h3>

                      <div className="space-y-6">
                        {/* Short-term Goals */}
                        <div>
                          <h4 className="text-lg font-semibold text-accent mb-3 group-hover:text-primary transition-colors">
                            Short-term (1-2 years)
                          </h4>
                          <ul className="space-y-2">
                            <li className="flex items-start gap-3">
                              <span className="text-primary text-lg leading-none">→</span>
                              <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                                Complete BSc with distinction
                              </span>
                            </li>
                            <li className="flex items-start gap-3">
                              <span className="text-primary text-lg leading-none">→</span>
                              <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                                Publish research on educational AI
                              </span>
                            </li>
                            <li className="flex items-start gap-3">
                              <span className="text-primary text-lg leading-none">→</span>
                              <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                                Contribute to major open-source AI projects
                              </span>
                            </li>
                            <li className="flex items-start gap-3">
                              <span className="text-primary text-lg leading-none">→</span>
                              <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                                Gain industry experience in AI/ML roles
                              </span>
                            </li>
                          </ul>
                        </div>

                        {/* Long-term Goals */}
                        <div>
                          <h4 className="text-lg font-semibold text-accent mb-3 group-hover:text-primary transition-colors">
                            Long-term (3-5 years)
                          </h4>
                          <ul className="space-y-2">
                            <li className="flex items-start gap-3">
                              <span className="text-primary text-lg leading-none">→</span>
                              <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                                Pursue graduate studies (MSc/PhD in AI/ML)
                              </span>
                            </li>
                            <li className="flex items-start gap-3">
                              <span className="text-primary text-lg leading-none">→</span>
                              <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                                Lead research projects with social impact
                              </span>
                            </li>
                            <li className="flex items-start gap-3">
                              <span className="text-primary text-lg leading-none">→</span>
                              <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                                Build successful EdTech products
                              </span>
                            </li>
                          </ul>
                        </div>

                        {/* Vision */}
                        <div className="pt-4 border-t border-border/30">
                          <p className="text-sm font-semibold text-foreground mb-2">Ultimate Vision:</p>
                          <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors italic">
                            Leverage AI to democratize education and create impactful solutions that improve lives, particularly in developing countries.
                          </p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>

                {/* Work Availability */}
                <div className="relative group cursor-pointer">
                  <Card className="p-8 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border-gradient-accent/30 hover:border-gradient-accent/60 transition-all duration-500 hover:shadow-2xl h-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/0 to-accent/0 group-hover:from-accent/10 group-hover:via-primary/5 group-hover:to-accent/5 transition-all duration-500 rounded-lg"></div>
                    
                    <div className="relative">
                      <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center group-hover:text-accent transition-colors">
                        <Users className="w-6 h-6 mr-3 text-accent" />
                        Work Availability
                      </h3>

                      <div className="space-y-6">
                        {/* Current Status */}
                        <div className="bg-primary/10 border border-primary/30 rounded-lg p-4">
                          <p className="text-sm font-semibold text-primary mb-1">Current Status</p>
                          <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                            Final Year Student (Graduating 2026)
                          </p>
                        </div>

                        {/* Available For */}
                        <div>
                          <h4 className="text-lg font-semibold text-accent mb-3 group-hover:text-primary transition-colors">
                            Available For
                          </h4>
                          <ul className="space-y-2">
                            <li className="flex items-start gap-3">
                              <span className="text-accent text-lg leading-none">◆</span>
                              <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                                Internships in AI/ML or Software Engineering
                              </span>
                            </li>
                            <li className="flex items-start gap-3">
                              <span className="text-accent text-lg leading-none">◆</span>
                              <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                                Part-time remote work
                              </span>
                            </li>
                            <li className="flex items-start gap-3">
                              <span className="text-accent text-lg leading-none">◆</span>
                              <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                                Freelance AI/ML projects
                              </span>
                            </li>
                            <li className="flex items-start gap-3">
                              <span className="text-accent text-lg leading-none">◆</span>
                              <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                                Research collaborations
                              </span>
                            </li>
                          </ul>
                        </div>

                        {/* Preferred Work */}
                        <div>
                          <h4 className="text-lg font-semibold text-accent mb-3 group-hover:text-primary transition-colors">
                            Preferred Focus
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {["AI/ML Engineering", "Full-stack Dev", "EdTech", "Research", "Remote/Hybrid"].map((item) => (
                              <Badge
                                key={item}
                                variant="outline"
                                className="border-accent/30 text-accent hover:bg-accent/10 transition-colors text-xs"
                              >
                                {item}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="fade-in-delayed mb-12 relative group mt-24">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border border-gradient-primary/30 hover:border-gradient-primary/60 transition-all duration-500 p-12 md:p-16">
              {/* Animated background overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/15 group-hover:via-accent/5 group-hover:to-primary/10 transition-all duration-500"></div>
              
              {/* Decorative corner accents */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-primary opacity-5 rounded-full blur-3xl pointer-events-none"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-accent opacity-5 rounded-full blur-3xl pointer-events-none"></div>
              
              <div className="relative z-10 text-center space-y-6">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-3">
                    Interested in Collaboration?
                  </h2>
                  <p className="text-lg mb-8 text-muted-foreground max-w-2xl mx-auto leading-relaxed group-hover:text-foreground transition-colors">
                    I'm always open to discussing new opportunities, research collaborations, or innovative AI projects. Let's build the future of AI together!
                  </p>
                </div>
                <a href="/contact">
                  <Button
                    size="lg"
                    className="bg-gradient-primary hover:opacity-90 transition-all duration-300 glow-primary hover:scale-105 px-10 py-3 group shadow-lg hover:shadow-2xl hover:shadow-primary/50"
                  >
                    <Sparkles className="w-5 h-5 mr-2 group-hover:animate-spin-slow" />
                    Get In Touch
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
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
      </div>
        </div>
        )}
    </ProjectImageModal>
  );
};

export default Work;
