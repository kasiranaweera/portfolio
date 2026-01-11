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

const RecentProjectsCarousel = ({ projects }) => {
  if (!projects || projects.length === 0) {
    return null;
  }

  return (
    <div className="w-full py-12">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {projects.map((project, index) => (
            <CarouselItem
              key={index}
              className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3"
            >
              <Card className="h-full p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-all duration-300 hover:shadow-lg flex flex-col">
                {/* Project Header */}
                <div className="mb-4">
                  <div className="flex items-start justify-center mb-3">
                    <h3 className="text-xl font-bold text-foreground pr-2">
                      {project.title}
                    </h3>
                  </div>
                  <div className="flex justify-center gap-1 items-center">
                    <Badge
                      variant="secondary"
                      className="bg-primary/10 text-primary whitespace-nowrap text-xs"
                    >
                      {project.category || "Project"}
                    </Badge>

                    <>
                      {project.status && (
                        <Badge
                          variant="outline"
                          className="border-accent/50 text-accent text-xs"
                        >
                          {project.status}
                        </Badge>
                      )}
                    </>
                  </div>
                </div>

                {/* Project Description */}
                <p className="text-sm text-muted-foreground mb-4 line-clamp-5 text-center">
                  {project.description}
                </p>
                {/* Technologies */}
                {project.technologies && project.technologies.length > 0 && (
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1 justify-center">
                      {project.technologies.slice(0, 5).map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="border-primary/30 text-primary text-xs hover:bg-primary/10 transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 5 && (
                        <Badge
                          variant="outline"
                          className="border-primary/30 text-primary text-xs"
                        >
                          +{project.technologies.length - 5}
                        </Badge>
                      )}
                    </div>
                  </div>
                )}

                {/* Actions */}
                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border/30">
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
                        className="w-full bg-gradient-primary hover:opacity-90 transition-all duration-300 text-xs"
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
                        className="w-full border-accent/50 text-accent hover:bg-accent/10 text-xs"
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
        <div className="flex justify-center gap-4 mt-6">
          <CarouselPrevious className="w-10 h-10 bg-primary/10 border-primary/30 hover:bg-primary/20 transition-colors" />
          <CarouselNext className="w-10 h-10 bg-primary/10 border-primary/30 hover:bg-primary/20 transition-colors" />
        </div>
      </Carousel>
      <div className="flex justify-center mt-4">
        <a href="/projects">
          <Button
            variant="default"
            className="bg-gradient-primary hover:opacity-90 transition-all duration-300"
          >
            View All Projects
          </Button>
        </a>
      </div>
    </div>
  );
};

export default RecentProjectsCarousel;
