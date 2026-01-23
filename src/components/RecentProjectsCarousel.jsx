import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Github, ExternalLink } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const RecentProjectsCarousel = ({ projects }) => {
  const [api, setApi] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const autoScrollRef = useRef(null);

  useEffect(() => {
    if (!api) return;

    const startAutoScroll = () => {
      if (isHovered) return;
      
      autoScrollRef.current = setInterval(() => {
        api.scrollNext();
      }, 4000); // Scroll every 4 seconds
    };

    const stopAutoScroll = () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
      }
    };

    startAutoScroll();

    return () => stopAutoScroll();
  }, [api, isHovered]);

  if (!projects || projects.length === 0) {
    return null;
  }

  return (
    <div 
      className="w-full py-12"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        setApi={setApi}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {projects.map((project, index) => (
            <CarouselItem
              key={index}
              className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3"
            >
              <Card className="h-full p-6 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border-gradient-primary/30 hover:border-gradient-primary/60 transition-all duration-300 hover:shadow-2xl hover:scale-105 group flex flex-col">
                {/* Animated background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:via-accent/5 group-hover:to-primary/5 transition-all duration-500 rounded-lg pointer-events-none"></div>

                {/* Project Header */}
                <div className="mb-4 relative z-10">
                  <div className="flex items-start justify-center mb-3">
                    <h3 className="text-xl font-bold text-foreground pr-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <div className="flex justify-center gap-1 items-center">
                    <Badge
                      variant="secondary"
                      className="bg-primary/10 text-primary whitespace-nowrap text-xs group-hover:bg-primary/20 transition-colors"
                    >
                      {project.category || "Project"}
                    </Badge>

                    <>
                      {project.status && (
                        <Badge
                          variant="outline"
                          className="border-accent/50 text-accent text-xs group-hover:border-accent/80 transition-colors"
                        >
                          {project.status}
                        </Badge>
                      )}
                    </>
                  </div>
                </div>

                {/* Project Description */}
                <p className="text-sm text-muted-foreground mb-4 line-clamp-5 text-center group-hover:text-foreground transition-colors relative z-10">
                  {project.description}
                </p>
                {/* Technologies */}
                {project.technologies && project.technologies.length > 0 && (
                  <div className="mb-4 relative z-10">
                    <div className="flex flex-wrap gap-1 justify-center">
                      {project.technologies.slice(0, 5).map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="border-primary/30 text-primary text-xs hover:bg-primary/10 transition-colors group-hover:border-primary/60"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 5 && (
                        <Badge
                          variant="outline"
                          className="border-primary/30 text-primary text-xs group-hover:border-primary/60"
                        >
                          +{project.technologies.length - 5}
                        </Badge>
                      )}
                    </div>
                  </div>
                )}

                {/* Actions */}
                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border/30 relative z-10">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button
                        variant="default"
                        size="sm"
                        className="w-full bg-gradient-primary hover:opacity-90 transition-all duration-300 text-xs group-hover:shadow-lg group-hover:shadow-primary/50"
                      >
                        <Github className="w-3 h-3 mr-1" />
                        Code
                      </Button>
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full border-accent/50 text-accent hover:bg-accent/10 text-xs group-hover:border-accent/80 transition-colors"
                      >
                        <ExternalLink className="w-3 h-3 mr-1" />
                        Demo
                      </Button>
                    </a>
                  )}
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Carousel Controls */}
        <div className="flex justify-center gap-4 mt-8">
          <CarouselPrevious className="w-10 h-10 bg-gradient-to-br from-primary/20 to-accent/10 border-primary/40 hover:bg-gradient-to-br hover:from-primary/40 hover:to-accent/20 hover:border-primary/60 transition-all duration-300 hover:scale-110" />
          <CarouselNext className="w-10 h-10 bg-gradient-to-br from-primary/20 to-accent/10 border-primary/40 hover:bg-gradient-to-br hover:from-primary/40 hover:to-accent/20 hover:border-primary/60 transition-all duration-300 hover:scale-110" />
        </div>
      </Carousel>
      <div className="flex justify-center mt-6">
        <a href="/projects">
          <Button
            variant="default"
            className="bg-gradient-primary hover:opacity-90 transition-all duration-300 hover:scale-105 group"
          >
            View All Projects
            <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </a>
      </div>
    </div>
  );
};

export default RecentProjectsCarousel;
