import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Github, Linkedin, Twitter, MapPin, Phone, Send } from "lucide-react";

const Contact = () => {
  const socialLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "alex.chen@example.com",
      href: "mailto:alex.chen@example.com",
      description: "Drop me a line anytime"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "@alexchen",
      href: "#",
      description: "Check out my projects"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Alex Chen",
      href: "#",
      description: "Let's connect professionally"
    },
    {
      icon: Twitter,
      label: "Twitter",
      value: "@alexchen_ai",
      href: "#",
      description: "Follow my AI journey"
    }
  ];

  const contactInfo = [
    {
      icon: MapPin,
      label: "Location",
      value: "San Francisco, CA",
      description: "Available for remote work globally"
    },
    {
      icon: Phone,
      label: "Response Time",
      value: "24-48 hours",
      description: "I'll get back to you quickly"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-background py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Let's collaborate on AI research, discuss innovative projects, or explore new opportunities together
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50">
                <h2 className="text-2xl font-semibold mb-6 text-foreground">Send me a message</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName" className="text-sm font-medium text-foreground">
                        First Name
                      </Label>
                      <Input 
                        id="firstName" 
                        placeholder="John" 
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-sm font-medium text-foreground">
                        Last Name
                      </Label>
                      <Input 
                        id="lastName" 
                        placeholder="Doe" 
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email
                    </Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="john@example.com" 
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="subject" className="text-sm font-medium text-foreground">
                      Subject
                    </Label>
                    <Input 
                      id="subject" 
                      placeholder="AI Research Collaboration" 
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-sm font-medium text-foreground">
                      Message
                    </Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell me about your project or idea..."
                      rows={6}
                      className="mt-1"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-gradient-primary hover:opacity-90 transition-all duration-300"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Quick Contact */}
              <Card className="p-6 bg-card/30 backdrop-blur-sm border-border/50">
                <h3 className="text-xl font-semibold mb-4 text-foreground">Quick Contact</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <info.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{info.label}</p>
                        <p className="text-sm text-accent">{info.value}</p>
                        <p className="text-xs text-muted-foreground">{info.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Social Links */}
              <Card className="p-6 bg-card/30 backdrop-blur-sm border-border/50">
                <h3 className="text-xl font-semibold mb-4 text-foreground">Connect with me</h3>
                <div className="space-y-4">
                  {socialLinks.map((social, index) => (
                    <a 
                      key={index}
                      href={social.href}
                      className="flex items-start space-x-3 p-3 rounded-lg hover:bg-secondary/50 transition-all duration-300 group"
                    >
                      <div className="p-2 rounded-lg bg-secondary/50 group-hover:bg-secondary transition-colors">
                        <social.icon className="w-5 h-5 text-secondary-foreground" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                          {social.label}
                        </p>
                        <p className="text-sm text-accent">{social.value}</p>
                        <p className="text-xs text-muted-foreground">{social.description}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </Card>

              {/* Availability */}
              <Card className="p-6 bg-card/30 backdrop-blur-sm border-border/50">
                <h3 className="text-xl font-semibold mb-4 text-foreground">Current Availability</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-foreground">Available for new opportunities</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <p>• Research collaborations</p>
                    <p>• AI/ML consulting projects</p>
                    <p>• Speaking engagements</p>
                    <p>• Open source contributions</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-16">
            <Card className="p-8 bg-card/30 backdrop-blur-sm border-border/50">
              <h3 className="text-2xl font-semibold mb-6 text-center gradient-text">
                Frequently Asked Questions
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">What type of projects do you work on?</h4>
                  <p className="text-sm text-muted-foreground">
                    I specialize in AI/ML research, generative AI applications, multi-agent systems, 
                    and cutting-edge deep learning projects.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Are you available for consulting?</h4>
                  <p className="text-sm text-muted-foreground">
                    Yes! I offer consulting services for AI strategy, model development, 
                    and technical guidance for ML projects.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Do you collaborate on research?</h4>
                  <p className="text-sm text-muted-foreground">
                    Absolutely! I'm always interested in research collaborations, 
                    especially in agentic AI and generative models.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">How quickly do you respond?</h4>
                  <p className="text-sm text-muted-foreground">
                    I typically respond to emails and messages within 24-48 hours, 
                    often much sooner.
                  </p>
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