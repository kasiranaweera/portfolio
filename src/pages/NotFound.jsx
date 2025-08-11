import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Home, ArrowLeft, Search, Brain } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-background flex items-center justify-center py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <Card className="p-12 bg-card/50 backdrop-blur-sm border-border/50 animate-fade-in">
            {/* 404 Icon */}
            <div className="mb-8">
              <div className="w-24 h-24 mx-auto rounded-full bg-gradient-primary/20 flex items-center justify-center mb-4">
                <Brain className="w-12 h-12 text-primary" />
              </div>
              <h1 className="text-6xl md:text-8xl font-bold gradient-text mb-4">404</h1>
            </div>

            {/* Error Message */}
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
                Page Not Found
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                The page you're looking for seems to have wandered off into the digital void. 
                Even our AI agents couldn't locate it!
              </p>
              <p className="text-sm text-muted-foreground">
                This might happen if the page was moved, deleted, or you entered the wrong URL.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                size="lg" 
                className="bg-gradient-primary hover:opacity-90 transition-all duration-300 hover:scale-105"
              >
                <Link to="/">
                  <Home className="w-4 h-4 mr-2" />
                  Back to Home
                </Link>
              </Button>
              
              <Button 
                asChild
                variant="outline" 
                size="lg"
                className="border-primary/50 hover:bg-primary/10 transition-all duration-300 hover:scale-105"
              >
                <Link to="/projects">
                  <Search className="w-4 h-4 mr-2" />
                  Explore Projects
                </Link>
              </Button>
            </div>

            {/* Helpful Links */}
            <div className="mt-8 pt-8 border-t border-border/50">
              <p className="text-sm text-muted-foreground mb-4">Looking for something specific?</p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <Link 
                  to="/about" 
                  className="text-primary hover:text-accent transition-colors"
                >
                  About Me
                </Link>
                <Link 
                  to="/work" 
                  className="text-primary hover:text-accent transition-colors"
                >
                  Work Experience
                </Link>
                <Link 
                  to="/projects" 
                  className="text-primary hover:text-accent transition-colors"
                >
                  Projects
                </Link>
                <Link 
                  to="/contact" 
                  className="text-primary hover:text-accent transition-colors"
                >
                  Contact
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default NotFound;