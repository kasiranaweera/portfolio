import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import AnimatedBackground from "../components/AnimatedBackground";
import SparkleAnimation from "../components/SparkleAnimation";
import {
  Download,
  FileText,
  Sparkles,
  ArrowRight,
  Mail,
  ExternalLink,
} from "lucide-react";

const CV = () => {
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
                <span className="text-sm font-medium text-primary">Professional Profile</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6 animate-slide-up">
              My Resume & CV
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in">
              View my professional experience, education, technical skills, and
              projects. Download my CV or get in touch to discuss collaboration
              opportunities.
            </p>
          </div>

          {/* CV Viewer Card */}
          <Card className="overflow-hidden shadow-2xl border-border/50 animate-fade-in hover:border-primary/60 transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] group cursor-pointer relative" style={{ animationDelay: "0.2s" }}>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:via-accent/5 group-hover:to-primary/5 transition-all duration-500 rounded-lg pointer-events-none"></div>
            
            {/* Header */}
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 px-6 py-4 border-b border-border/50">
              <div className="flex items-center justify-between relative z-10">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <FileText className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">CV Viewer</h3>
                    <p className="text-sm text-muted-foreground">
                      KASI Ranaweera - Professional CV
                    </p>
                  </div>
                </div>
                {/* <a href="/cv.pdf" className="hidden sm:block">
                  <Button
                    size="sm"
                    className="bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 group/btn transition-all duration-300 hover:scale-105"
                    variant="outline"
                  >
                    <Download className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                    Download
                  </Button>
                </a> */}
              </div>
            </div>

            {/* CV Images Gallery */}
            <div className="bg-white/80 backdrop-blur-sm space-y-4 p-6 sm:p-8 relative z-10">
              <div className="flex flex-col gap-6">
                <div className="group/img cursor-pointer transition-all duration-300 origin-center">
                  <img
                    src="/cv-page-0.png"
                    alt="CV Page 1"
                    className="w-full rounded-lg shadow-lg border border-border/50 group-hover/img:border-primary/50 group-hover/img:shadow-xl transition-all duration-300"
                  />
                </div>
                <div className="group/img cursor-pointer transition-all duration-300 origin-center">
                  <img
                    src="/cv-page-1.png"
                    alt="CV Page 2"
                    className="w-full rounded-lg shadow-lg border border-border/50 group-hover/img:border-primary/50 group-hover/img:shadow-xl transition-all duration-300"
                  />
                </div>
              </div>
            </div>
          </Card>

          {/* Info Section */}
          <div className="mt-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Card className="p-6 sm:p-8 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border-border/50 hover:border-accent/60 transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] group cursor-pointer relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/0 to-accent/0 group-hover:from-accent/10 group-hover:via-primary/5 group-hover:to-accent/5 transition-all duration-500 rounded-lg"></div>
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 relative">
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 flex items-center group-hover:text-accent transition-colors">
                    <FileText className="w-5 h-5 mr-2 text-accent" />
                    Need a copy of my CV?
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    You can view my CV above. To download a copy for your records or to discuss
                    specific opportunities, please get in touch!
                  </p>
                </div>
                <a href="/contact" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    className="bg-gradient-primary hover:opacity-90 transition-all duration-300 hover:scale-105 w-full sm:w-auto group/btn"
                  >
                    <Mail className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                    Get in Touch
                  </Button>
                </a>
              </div>
            </Card>
          </div>

          {/* Quick Stats
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <Card className="p-6 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border-border/50 hover:border-primary/60 transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] group cursor-pointer relative text-center">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:via-accent/5 group-hover:to-primary/5 transition-all duration-500 rounded-lg"></div>
              <div className="relative">
                <div className="text-3xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform duration-300">
                  20+
                </div>
                <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">Projects Completed</p>
              </div>
            </Card>
            <Card className="p-6 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border-border/50 hover:border-accent/60 transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] group cursor-pointer relative text-center">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/0 to-accent/0 group-hover:from-accent/10 group-hover:via-primary/5 group-hover:to-accent/5 transition-all duration-500 rounded-lg"></div>
              <div className="relative">
                <div className="text-3xl font-bold text-accent mb-2 group-hover:scale-110 transition-transform duration-300">
                  8+
                </div>
                <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">AI Models Built</p>
              </div>
            </Card>
            <Card className="p-6 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border-border/50 hover:border-secondary/60 transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] group cursor-pointer relative text-center">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/0 via-secondary/0 to-secondary/0 group-hover:from-secondary/10 group-hover:via-primary/5 group-hover:to-secondary/5 transition-all duration-500 rounded-lg"></div>
              <div className="relative">
                <div className="text-3xl font-bold text-secondary-foreground mb-2 group-hover:scale-110 transition-transform duration-300">
                  3+
                </div>
                <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">End-to-End Solutions</p>
              </div>
            </Card>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default CV;
