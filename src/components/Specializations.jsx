import React from "react";
import { Card } from "@/components/ui/card";
import { Zap } from "lucide-react";

const Specializations = () => {
  return (
    <div>
      {/* Specializations */}
      <div className="fade-in-delayed mb-8 mt-16">
        <h3 className="text-2xl font-semibold mb-6 text-foreground">
          Research Focus & Expertise
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <Card className="p-4 bg-card/30 backdrop-blur-sm border-border/50">
            <div className="flex justify-center items-center space-x-3 mb-2">
              <Zap className="w-8 h-8 text-primary" />
            </div>
            <h4 className="font-semibold text-foreground text-lg mb-2">
              Generative & Agentic AI
            </h4>
            <p className="text-sm text-muted-foreground">
              Multi-agent systems, autonomous reasoning, and AI orchestration
              frameworks. Large language models (LLMs), diffusion models, and
              creative AI applications.
            </p>
          </Card>
          <Card className="p-4 bg-card/30 backdrop-blur-sm border-border/50">
            <div className="flex justify-center items-center space-x-3 mb-2">
              <Zap className="w-8 h-8 text-primary" />
            </div>
            <h4 className="font-semibold text-foreground text-lg mb-2">
              React & MERN Stack
            </h4>
            <p className="text-sm text-muted-foreground">
              Building interactive and scalable frontend applications. Fullstack
              development with MongoDB, Express.js, React, and Node.js
            </p>
          </Card>
          <Card className="p-4 bg-card/30 backdrop-blur-sm border-border/50">
            <div className="flex justify-center items-center space-x-3 mb-2">
              <Zap className="w-8 h-8 text-primary" />
            </div>
            <h4 className="font-semibold text-foreground text-lg mb-2">
              Java & Python
            </h4>
            <p className="text-sm text-muted-foreground">
              Robust and portable programming language used for building
              enterprise-grade applications and Android development. Versatile
              and beginner-friendly language widely used for AI, machine
              learning, and data analysis.
            </p>
          </Card>
          <Card className="p-4 bg-card/30 backdrop-blur-sm border-border/50">
            <div className="flex justify-center items-center space-x-3 mb-2">
              <Zap className="w-8 h-8 text-primary" />
            </div>
            <h4 className="font-semibold text-foreground text-lg mb-2">
              AI Research & Development
            </h4>
            <p className="text-sm text-muted-foreground">
              Applied AI, machine learning, and innovative AI solutions.
              Exploring and creating advanced algorithms and models to push the
              boundaries of artificial intelligence and build innovative AI
              solutions.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Specializations;
