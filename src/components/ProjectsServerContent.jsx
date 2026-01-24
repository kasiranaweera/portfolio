// Server component - renders static project content for SEO
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Star, Code2, Sparkles, Rocket, ArrowRight } from "lucide-react";

export function ProjectsServerContent({ projects }) {
  return (
    <div className="fade-in-delayed mb-24 mt-24 relative group">
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
      
      <div className="relative">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 flex items-center justify-center">
            <Star className="w-8 h-8 mr-3 text-accent animate-spin-slow" />
            Featured Projects
          </h2>
          <div className="h-1 w-20 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-12 text-center">
          Explore my featured AI, ML, and full-stack development projects that showcase technical expertise and innovation.
        </p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-8">
          {projects.map((project, idx) => (
            <Card
              key={idx}
              className="p-8 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border-gradient-primary/30 hover:border-gradient-primary/60 transition-all duration-500 hover:shadow-2xl group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:via-accent/5 group-hover:to-primary/5 transition-all duration-500 rounded-lg"></div>
              
              <div className="relative space-y-6">
                {/* Title and Category */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <Badge
                    variant="secondary"
                    className="bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 text-primary hover:from-primary/30 hover:to-accent/30 transition-all w-fit"
                  >
                    {project.category}
                  </Badge>
                </div>

                {/* Description */}
                <p className="text-base text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                  {project.description}
                </p>

                {/* Highlights */}
                {project.highlights && project.highlights.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-foreground">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.highlights.slice(0, 3).map((highlight, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2 group-hover:text-foreground transition-colors">
                          <span className="text-primary mt-0.5">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Status */}
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="text-sm font-semibold text-foreground">Status:</span>
                  <Badge variant="secondary" className="text-xs bg-primary/10 border border-primary/30 text-primary">
                    {project.status}
                  </Badge>
                  {project.teamSize && (
                    <>
                      <span className="text-sm font-semibold text-foreground">Team:</span>
                      <Badge variant="secondary" className="text-xs bg-accent/10 border border-accent/30 text-accent">
                        {project.teamSize}
                      </Badge>
                    </>
                  )}
                </div>

                {/* Technologies */}
                {project.technologies && project.technologies.length > 0 && (
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-3">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="border-primary/30 text-primary bg-primary/5 hover:bg-primary/15 hover:border-primary/60 transition-all"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                {(project.github || project.live) && (
                  <div className="flex flex-wrap gap-3 pt-4 border-t border-primary/20">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          size="sm"
                          className="bg-gradient-primary hover:opacity-90 transition-all duration-300 group/btn"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          View Code
                          <ArrowRight className="w-3 h-3 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-accent/50 text-accent hover:bg-accent/10 hover:border-accent/80 transition-all"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                          <ArrowRight className="w-3 h-3 ml-1" />
                        </Button>
                      </a>
                    )}
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
