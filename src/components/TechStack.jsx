import { useState } from "react"
import Image_Techtool from "../../assets/image.png";

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
      <h3 className="text-2xl font-semibold mb-6 text-foreground">Tech Stack</h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* LEFT SIDE */}
        <div className="flex flex-col border p-6 rounded-lg bg-card/50 backdrop-blur-sm">
          <img
            src={Image_Techtool}
            alt="Tech Stack Illustration"
            className="w-full h-64 object-cover rounded-lg shadow-md mb-4"
          />
          <div className="text-sm leading-relaxed text-muted-foreground">
            I work with a diverse set of tools and technologies to build efficient, scalable AI-powered applications and
            full-stack solutions. My expertise covers frontend and backend development, machine learning frameworks,
            cloud deployment, and software engineering best practices; enabling me to deliver end-to-end intelligent
            systems.
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col gap-8">
          {/* Core Tools */}
          <div className="text-center">
            <div className="relative mb-8">
              <h4 className="text-xl font-bold text-foreground mb-6">Core Tools</h4>
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
                    className={`w-16 h-16 rounded-lg bg-white border-2 ${tech.color} flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-md hover:shadow-lg ${hoveredTech === tech.name ? "scale-110 shadow-lg" : ""}`}
                  >
                    <img src={tech.icon} alt={`${tech.name} logo`} className="w-12 h-12 object-contain" />
                  </div>
                  <p className="text-xs font-medium text-foreground mt-2 text-center">{tech.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* AI & ML Tools */}
          <div className="text-center">
            <h4 className="text-xl font-bold text-foreground mb-6">AI & ML Technologies</h4>
            <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-6 gap-4 max-w-2xl mx-auto">
              {aiTechnologies.map((tech, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center group cursor-pointer"
                  onMouseEnter={() => setHoveredTech(tech.name)}
                  onMouseLeave={() => setHoveredTech(null)}
                >
                  <div
                    className={`w-12 h-12 rounded-lg bg-white border-2 ${tech.color} flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-sm hover:shadow-md ${hoveredTech === tech.name ? "scale-110 shadow-md" : ""}`}
                  >
                    <img src={tech.icon} alt={`${tech.name} logo`} className="w-7 h-7 object-contain" />
                  </div>
                  <p className="text-xs font-medium text-foreground mt-2 text-center">{tech.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
