import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Mail,
  Github,
  Linkedin,
  MapPin,
  Phone,
  Calendar,
  Send,
  MessageCircle,
  ExternalLink,
  Clock,
  Facebook,
  Globe,
} from "lucide-react";
import { useState, useRef } from "react";

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const formData = new FormData(form.current);
      const name = formData.get("from_name");
      const email = formData.get("from_email");
      const subject = formData.get("subject");
      const category = formData.get("category");
      const message = formData.get("message");

      // Create email body with all form details
      const emailBody = `
Hello Kasi,

I am reaching out regarding: ${subject}

Collaboration Type: ${category}

${message}

---
Sent from: ${name} (${email})
      `.trim();

      // Create mailto link
      const mailtoLink = `mailto:ranaweerakasi@gmail.com?subject=${encodeURIComponent(
        `[Portfolio] ${subject}`
      )}&body=${encodeURIComponent(emailBody)}`;

      // Open Gmail (or default email client)
      window.location.href = mailtoLink;

      setSubmitStatus({
        type: "success",
        message: "✅ Opening your email client... Complete and send the message!",
      });

      // Reset form after a short delay
      setTimeout(() => {
        form.current.reset();
        setSubmitStatus(null);
      }, 2000);
    } catch (error) {
      console.error("Error:", error);
      setSubmitStatus({
        type: "error",
        message: "❌ Could not open email client. Please email directly: ranaweerakasi@gmail.com",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
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

  // const collaborationAreas = [
  //   "AI Research & Publications",
  //   "Open Source Projects",
  //   "Speaking Engagements",
  //   "Technical Mentoring",
  //   "Startup Consulting",
  //   "Research Internships"
  // ];

  return (
    <div className="min-h-screen bg-gradient-background py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Let's collaborate on exciting AI & Web projects, discuss research
              opportunities, or explore how we can push the boundaries of
              artificial intelligence together.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 animate-fade-in">
                <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center">
                  <MessageCircle className="w-6 h-6 mr-3 text-primary" />
                  Send a Message
                </h2>

                {submitStatus && (
                  <div
                    className={`mb-6 p-4 rounded-lg ${
                      submitStatus.type === "success"
                        ? "bg-green-500/10 text-green-600 border border-green-500/20"
                        : "bg-red-500/10 text-red-600 border border-red-500/20"
                    }`}
                  >
                    {submitStatus.message}
                  </div>
                )}

                <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="from_name"
                        placeholder="Your full name"
                        className="mt-1"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="from_email"
                        type="email"
                        placeholder="your.email@example.com"
                        className="mt-1"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="What would you like to discuss?"
                      className="mt-1"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="category">Collaboration Type</Label>
                    <select
                      id="category"
                      name="category"
                      className="w-full mt-1 px-3 py-2 bg-background border border-input rounded-md text-foreground"
                      required
                    >
                      <option value="">Select a category</option>
                      <option value="research">Research Collaboration</option>
                      <option value="project">Project Partnership</option>
                      <option value="speaking">Speaking Engagement</option>
                      <option value="mentoring">Mentoring Request</option>
                      <option value="consulting">Consulting Inquiry</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me more about your project, research, or collaboration idea..."
                      rows={18}
                      className="mt-1"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-primary hover:opacity-90 transition-all duration-300 hover:scale-105 disabled:opacity-50"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Card>
            </div>

            {/* Contact Info & Quick Actions */}
            <div className="space-y-6">
              {/* Contact Methods */}
              <Card
                className="p-6 bg-card/50 backdrop-blur-sm border-border/50 animate-fade-in"
                style={{ animationDelay: "0.2s" }}
              >
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Contact Methods
                </h3>
                <div className="space-y-4">
                  {contactMethods.map((method, index) => (
                    <a
                      key={index}
                      href={method.link}
                      className="flex items-start space-x-3 p-3 rounded-lg hover:bg-background/50 transition-colors group"
                    >
                      <div
                        className={`p-2 rounded-lg ${
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
                        <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                          {method.label}
                        </p>
                        <p className="text-sm text-accent">{method.value}</p>
                        <p className="text-xs text-muted-foreground">
                          {method.description}
                        </p>
                      </div>
                      <ExternalLink className="w-3 h-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  ))}
                </div>
              </Card>

              {/* Quick Info */}
              <Card
                className="p-6 bg-card/50 backdrop-blur-sm border-border/50 animate-fade-in"
                style={{ animationDelay: "0.4s" }}
              >
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Quick Info
                </h3>
                <div className="space-y-4">
                  {quickInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="p-2 rounded-lg bg-accent/10">
                        <info.icon className="w-4 h-4 text-accent" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">
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
              </Card>

              {/* Collaboration Areas
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <h3 className="text-xl font-semibold text-foreground mb-4">Open to Collaboration</h3>
                <div className="space-y-2">
                  {collaborationAreas.map((area, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm text-muted-foreground">{area}</span>
                    </div>
                  ))}
                </div>
              </Card> */}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-8 animate-fade-in">
            <Card className="p-8 bg-card/30 backdrop-blur-sm border-border/50">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Let's Build the Future of AI
              </h2>
              <p className="text-muted-foreground mb-6 max-w-3xl mx-auto">
                Whether you're a researcher, entrepreneur, student, or fellow AI
                enthusiast, I'm always excited to connect with like-minded
                individuals who share a passion for advancing artificial
                intelligence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-primary hover:opacity-90 transition-all duration-300 hover:scale-105"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule a Call
                </Button>
                <a href="https://github.com/kasiranaweera">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-accent/50 text-accent hover:bg-accent/10"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Collaborate on GitHub
                  </Button>
                </a>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
