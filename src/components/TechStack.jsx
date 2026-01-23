'use client';

import { useState } from "react"
import Image_Techtool from "../../assets/image.png";
import { Computer, Star } from "lucide-react";

const technologies = [
  { name: "React", icon: "https://raw.githubusercontent.com/kasiranaweera/kasiranaweera/8f16b8d476fbe24e6a21f5f40d35d7ba6ad0eabb/icons/react_dark.svg", color: "border-blue-400 hover:border-blue-500" },
  { name: "Next.js", icon: "https://raw.githubusercontent.com/kasiranaweera/kasiranaweera/8f16b8d476fbe24e6a21f5f40d35d7ba6ad0eabb/icons/nextjs_icon_dark.svg", color: "border-gray-800 hover:border-gray-900" },
  { name: "JavaScript", icon: "https://raw.githubusercontent.com/kasiranaweera/kasiranaweera/8f16b8d476fbe24e6a21f5f40d35d7ba6ad0eabb/icons/javascript.svg", color: "border-blue-600 hover:border-blue-700" },
  { name: "Node.js", icon: "https://raw.githubusercontent.com/kasiranaweera/kasiranaweera/8f16b8d476fbe24e6a21f5f40d35d7ba6ad0eabb/icons/nodejs.svg", color: "border-green-500 hover:border-green-600" },
  { name: "Python", icon: "https://raw.githubusercontent.com/kasiranaweera/kasiranaweera/8f16b8d476fbe24e6a21f5f40d35d7ba6ad0eabb/icons/python.svg", color: "border-yellow-500 hover:border-yellow-600" },
  { name: "Docker", icon: "https://raw.githubusercontent.com/kasiranaweera/kasiranaweera/8f16b8d476fbe24e6a21f5f40d35d7ba6ad0eabb/icons/docker.svg", color: "border-blue-500 hover:border-blue-600" },
  { name: "PHP", icon: "https://raw.githubusercontent.com/kasiranaweera/kasiranaweera/8f16b8d476fbe24e6a21f5f40d35d7ba6ad0eabb/icons/php.svg", color: "border-orange-500 hover:border-orange-600" },
  { name: "Laravel", icon: "https://raw.githubusercontent.com/kasiranaweera/kasiranaweera/8f16b8d476fbe24e6a21f5f40d35d7ba6ad0eabb/icons/laravel.svg", color: "border-blue-700 hover:border-blue-800" },
]

const aiTechnologies = [
  { name: "TensorFlow", icon: "https://raw.githubusercontent.com/kasiranaweera/kasiranaweera/8f16b8d476fbe24e6a21f5f40d35d7ba6ad0eabb/icons/tensorflow.svg", color: "border-orange-400 hover:border-orange-500" },
  { name: "PyTorch", icon: "https://raw.githubusercontent.com/kasiranaweera/kasiranaweera/8f16b8d476fbe24e6a21f5f40d35d7ba6ad0eabb/icons/pytorch-icon.svg" },
  { name: "DeepSeek", icon: "https://raw.githubusercontent.com/kasiranaweera/kasiranaweera/cef9121eb17ce31d0fe30c017c4c1b55cea80af5/icons/deepseek.svg", color: "border-green-600 hover:border-green-700" },
  { name: "Hugging Face", icon: "https://raw.githubusercontent.com/kasiranaweera/kasiranaweera/8f16b8d476fbe24e6a21f5f40d35d7ba6ad0eabb/icons/hugging-face-icon.svg", color: "border-yellow-400 hover:border-yellow-500" },
  { name: "Scikit-learn", icon: "https://raw.githubusercontent.com/kasiranaweera/kasiranaweera/6d40ce531dc3cc7c219ae836f598a8e9dc39b6fa/icons/scikit-learn.svg", color: "border-blue-500 hover:border-blue-600" },
  { name: "Pandas", icon: "https://raw.githubusercontent.com/kasiranaweera/kasiranaweera/6d40ce531dc3cc7c219ae836f598a8e9dc39b6fa/icons/Pandas.svg", color: "border-purple-500 hover:border-purple-600" },
  { name: "NumPy", icon: "https://raw.githubusercontent.com/kasiranaweera/kasiranaweera/6d40ce531dc3cc7c219ae836f598a8e9dc39b6fa/icons/NumPy.svg", color: "border-indigo-500 hover:border-indigo-600" },
  { name: "Jupyter", icon: "https://raw.githubusercontent.com/kasiranaweera/kasiranaweera/6d40ce531dc3cc7c219ae836f598a8e9dc39b6fa/icons/Jupyter.svg", color: "border-orange-600 hover:border-orange-700" },
  { name: "Chroma", icon: "https://raw.githubusercontent.com/kasiranaweera/kasiranaweera/8f16b8d476fbe24e6a21f5f40d35d7ba6ad0eabb/icons/chroma.svg", color: "border-teal-500 hover:border-teal-600" },
  { name: "Keras", icon: "https://raw.githubusercontent.com/kasiranaweera/kasiranaweera/6d40ce531dc3cc7c219ae836f598a8e9dc39b6fa/icons/Keras.svg", color: "border-red-400 hover:border-red-500" },
  { name: "FastAPI", icon: "https://raw.githubusercontent.com/kasiranaweera/kasiranaweera/8f16b8d476fbe24e6a21f5f40d35d7ba6ad0eabb/icons/FastAPI.svg", color: "border-green-500 hover:border-green-600" },
  { name: "Streamlit", icon: "https://raw.githubusercontent.com/kasiranaweera/kasiranaweera/6d40ce531dc3cc7c219ae836f598a8e9dc39b6fa/icons/Streamlit.svg", color: "border-pink-500 hover:border-pink-600" },
]

export default function TechStack() {
  const [hoveredTech, setHoveredTech] = useState(null)

  return (
    <div className="fade-in-delayed mb-12 mt-24">
      {/* Header */}
      <div className="mb-12">
        <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4 flex items-center justify-center">
          <Computer className="w-8 h-8 mr-3 text-accent" />
          Tech Stack & Expertise
        </h3>
        <div className="h-1 w-20 bg-gradient-primary mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* LEFT SIDE - Image & Description */}
        <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border border-gradient-primary/30 hover:border-gradient-primary/60 transition-all duration-500 hover:shadow-2xl p-8">
          {/* Animated background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/15 group-hover:via-accent/5 group-hover:to-primary/10 transition-all duration-500"></div>
          
          {/* Shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          
          <div className="relative flex flex-col h-full">
            <img
              src={Image_Techtool.src}
              alt="Tech Stack Illustration"
              className="w-full h-64 object-cover rounded-xl shadow-lg mb-6 group-hover:scale-105 transition-transform duration-500"
            />
            <div className="text-sm leading-relaxed text-muted-foreground group-hover:text-foreground transition-colors duration-300">
              I work with a diverse set of tools and technologies to build efficient, scalable AI-powered applications and full-stack solutions. My expertise covers frontend and backend development, machine learning frameworks, cloud deployment, and software engineering best practices; enabling me to deliver end-to-end intelligent systems.
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - Tech Icons */}
        <div className="flex flex-col gap-12">
          {/* Core Tools */}
          <div>
            <div className="mb-8">
              <h4 className="text-2xl font-bold text-foreground mb-4 text-center">Core Technologies</h4>
              <div className="h-0.5 w-16 bg-gradient-primary mx-auto rounded-full"></div>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-md mx-auto">
              {technologies.map((tech) => (
                <div
                  key={tech.name}
                  className="flex flex-col items-center group cursor-pointer"
                  onMouseEnter={() => setHoveredTech(tech.name)}
                  onMouseLeave={() => setHoveredTech(null)}
                >
                  <div
                    className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border-2 border-gradient-primary/40 hover:border-gradient-primary/80 flex items-center justify-center transition-all duration-300 group-hover:scale-120 group-hover:shadow-xl group-hover:-translate-y-2 ${hoveredTech === tech.name ? "scale-125 shadow-2xl -translate-y-3 bg-gradient-primary/20" : ""}`}
                  >
                    <img src={tech.icon} alt={`${tech.name} logo`} className="w-8 h-8 object-contain" />
                    {/* Glow effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur"></div>
                  </div>
                  <p className="text-xs font-semibold text-foreground mt-3 text-center group-hover:text-primary transition-colors">{tech.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* AI & ML Tools */}
          <div>
            <div className="mb-8">
              <h4 className="text-2xl font-bold text-foreground mb-4 text-center">AI & ML Technologies</h4>
              <div className="h-0.5 w-16 bg-gradient-primary mx-auto rounded-full"></div>
            </div>
            <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-6 gap-4 max-w-2xl mx-auto">
              {aiTechnologies.map((tech, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center group cursor-pointer"
                  onMouseEnter={() => setHoveredTech(tech.name)}
                  onMouseLeave={() => setHoveredTech(null)}
                >
                  <div
                    className={`relative w-14 h-14 rounded-xl bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border-2 border-gradient-primary/40 hover:border-gradient-primary/80 flex items-center justify-center transition-all duration-300 group-hover:scale-120 group-hover:shadow-lg group-hover:-translate-y-2 ${hoveredTech === tech.name ? "scale-125 shadow-xl -translate-y-3 bg-gradient-primary/20" : ""}`}
                  >
                    <img src={tech.icon} alt={`${tech.name} logo`} className="w-6 h-6 object-contain" />
                    {/* Glow effect */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur"></div>
                  </div>
                  <p className="text-xs font-semibold text-foreground mt-2 text-center group-hover:text-primary transition-colors">{tech.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
