'use client';

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import AnimatedBackground from "../components/AnimatedBackground";
import SparkleAnimation from "../components/SparkleAnimation";
import {
  Mail,
  Github,
  Linkedin,
  MapPin,
  Phone,
  Calendar,
  MessageCircle,
  ExternalLink,
  Clock,
  Facebook,
  Globe,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { ContactForm } from "@/components/ContactForm";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "ranaweerakasi@gmail.com",
      description: "Best for detailed discussions and collaborations",
      link: "mailto:ranaweerakasi@gmail.com",
      primary: true,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/kasi-ranaweera",
      description: "Professional networking and career opportunities",
      link: "https://linkedin.com/in/kasi-ranaweera",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/kasiranaweera",
      description: "Code collaboration and open source projects",
      link: "https://github.com/kasiranaweera",
    },
    {
      icon: Facebook,
      label: "Facebook",
      value: "@kasiranaweera",
      description: "AI research updates and quick questions",
      link: "https://facebook.com/kasi_ai",
    },
  ];

  const quickInfo = [
    {
      icon: MapPin,
      label: "Location",
      value: "Sri Lanka",
      description: "Pacific Time Zone (UTC-8)",
    },
    {
      icon: Clock,
      label: "Response Time",
      value: "24-48 hours",
      description: "Usually faster for urgent matters",
    },
    {
      icon: Globe,
      label: "Languages",
      value: "English, Sinhala",
      description: "Fluent in both languages",
    },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-background overflow-hidden">
      <AnimatedBackground />
      <SparkleAnimation />

      <div className="relative z-10 container mx-auto px-6 py-20 lg:py-32 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            {/* Animated Badge */}
            <div className="fade-in-up mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
                <Sparkles className="w-4 h-4 text-primary animate-spin-slow" />
                <span className="text-sm font-medium text-primary">Let's Connect</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6 animate-slide-up">
              Get In Touch
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in">
              Let's collaborate on exciting AI & Web projects, discuss research
              opportunities, or explore how we can push the boundaries of
              artificial intelligence together.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="p-8 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border-border/50 animate-fade-in hover:border-primary/60 transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] group cursor-pointer relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:via-accent/5 group-hover:to-primary/5 transition-all duration-500 rounded-lg"></div>
                
                <div className="relative">
                  <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center group-hover:text-primary transition-colors">
                    <MessageCircle className="w-6 h-6 mr-3 text-primary" />
                    Send a Message
                  </h2>

                  <ContactForm />
                </div>
              </Card>
            </div>

            {/* Contact Info & Quick Actions */}
            <div className="space-y-6">
              {/* Contact Methods */}
              <Card
                className="p-6 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border-border/50 animate-fade-in hover:border-primary/60 transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] group cursor-pointer relative"
                style={{ animationDelay: "0.2s" }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:via-accent/5 group-hover:to-primary/5 transition-all duration-500 rounded-lg"></div>
                
                <div className="relative">
                  <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center group-hover:text-primary transition-colors">
                    <Mail className="w-5 h-5 mr-2 text-primary" />
                    Contact Methods
                  </h3>
                  <div className="space-y-4">
                    {contactMethods.map((method, index) => (
                      <a
                        key={index}
                        href={method.link}
                        className="flex items-start space-x-3 p-3 rounded-lg hover:bg-primary/5 transition-all duration-300 group/item"
                      >
                        <div
                          className={`p-2 rounded-lg transition-all duration-300 flex-shrink-0 ${
                            method.primary ? "bg-primary/10" : "bg-secondary/10"
                          }`}
                        >
                          <method.icon
                            className={`w-4 h-4 ${
                              method.primary
                                ? "text-primary"
                                : "text-secondary-foreground"
                            }`}
                          />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-foreground group-hover/item:text-primary transition-colors">
                            {method.label}
                          </p>
                          <p className="text-sm text-accent">{method.value}</p>
                          <p className="text-xs text-muted-foreground">
                            {method.description}
                          </p>
                        </div>
                        <ExternalLink className="w-3 h-3 text-muted-foreground opacity-0 group-hover/item:opacity-100 transition-opacity" />
                      </a>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Quick Info */}
              <Card
                className="p-6 mt-8 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border-border/50 animate-fade-in hover:border-accent/60 transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] group cursor-pointer relative"
                style={{ animationDelay: "0.4s" }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/0 to-accent/0 group-hover:from-accent/10 group-hover:via-primary/5 group-hover:to-accent/5 transition-all duration-500 rounded-lg"></div>
                
                <div className="relative">
                  <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center group-hover:text-accent transition-colors">
                    <Globe className="w-5 h-5 mr-2 text-accent" />
                    Quick Info
                  </h3>
                  <div className="space-y-4 flex gap-8 justify-evenly items-center">
                    {quickInfo.map((info, index) => (
                      <div key={index} className="flex items-start space-x-3 py-3 px-8 rounded-lg hover:bg-accent/5 transition-all duration-300 group/item">
                        <div className="p-2 rounded-lg bg-accent/10 flex-shrink-0">
                          <info.icon className="w-4 h-4 text-accent" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground group-hover/item:text-accent transition-colors">
                            {info.label}
                          </p>
                          <p className="text-sm text-accent">{info.value}</p>
                          <p className="text-xs text-muted-foreground">
                            {info.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>

          {/* Call to Action */}
          <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <Card className="p-8 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border-border/50 hover:border-primary/60 transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] group cursor-pointer relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:via-accent/5 group-hover:to-primary/5 transition-all duration-500 rounded-lg"></div>
              
              <div className="relative">
                <h2 className="text-2xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                  Ready to Collaborate?
                </h2>
                <p className="text-muted-foreground mb-6 max-w-3xl mx-auto group-hover:text-foreground transition-colors">
                  Whether you're a researcher, entrepreneur, student, or fellow AI
                  enthusiast, I'm always excited to connect with like-minded
                  individuals who share a passion for advancing artificial
                  intelligence.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-gradient-primary hover:opacity-90 transition-all duration-300 hover:scale-105 group/btn"
                  >
                    <Calendar className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                    Schedule a Call
                  </Button>
                  <a href="https://github.com/kasiranaweera">
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-accent/50 text-accent hover:bg-accent/10 hover:border-accent/100 transition-all duration-300 w-full group/btn"
                    >
                      <Github className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                      Collaborate on GitHub
                    </Button>
                  </a>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
