export default function Hero() {


  // Randomize top/left for each skill
  const skills = [
    { name: "React", logo: "/logos/react.png" },
    { name: "Python", logo: "/logos/python.png" },
    { name: "JavaScript", logo: "/logos/javascript.png" },
    { name: "Java", logo: "/logos/java.png" },
    { name: "Tailwind", logo: "/logos/tailwind.png" },
    { name: "Node.js", logo: "/logos/node.png" },
    { name: "Git", logo: "/logos/git.png" },
    { name: "TypeScript", logo: "/logos/typescript.png" },
    { name: "HTML", logo: "/logos/html.png" },
    { name: "CSS", logo: "/logos/css.png" },
    { name: "SQL", logo: "/logos/sql.png" },
    { name: "Figma", logo: "/logos/figma.png" },
    { name: "AWS", logo: "/logos/aws.png" },
    { name: "WordPress", logo: "/logos/wordpress.png" },
  ].map((skill, i) => ({
    ...skill,
    top: `${Math.floor(Math.random() * 85)}%`,
    left: `${Math.floor(Math.random() * 60)}%`,
    float: `animate-float${i % 3}`,
  }));
  
  return (
    <section className="w-full h-screen flex bg-gradient-to-br from-sky-100 to-blue-200 overflow-hidden relative">
      {/* Left 2/3: Floating skill bubbles */}
      <div className="w-2/3 relative z-0">
        {skills.map((skill, i) => (
          <div
            key={i}
            className={`absolute ${skill.float}`}
            style={{
              top: skill.top,
              left: skill.left,
              animationDuration: `${6 + (i % 3)}s`,
            }}
          >
            <div className="w-28 h-28 rounded-full bg-white bg-opacity-90 backdrop-blur-sm shadow-md flex flex-col items-center justify-center text-center text-gray-700 p-2">
              <img src={skill.logo} alt={skill.name} className="w-8 h-8 mb-1" />
              <span className="text-sm">{skill.name}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Right 1/3 Card */}
        <div className="w-1/3 h-full flex items-center justify-center z-10">
            <div className="w-96 min-h-[400px] rounded-2xl p-6 shadow-md bg-white bg-opacity-90 backdrop-blur-sm text-center flex flex-col justify-center">
                <div className="text-sm text-gray-500">Hello, I'm</div>
                <div className="text-4xl font-extrabold text-gray-900 leading-tight">Edwin Miyatake</div>
                <div className="text-sm font-medium text-gray-600">Software Developer</div>
            </div>
        </div>

    </section>
  );
}
