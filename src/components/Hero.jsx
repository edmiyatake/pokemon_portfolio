import Squirtle from '../assets/mySquirtle.svg'

export default function Hero() {


  // Randomize top/left for each skill
  const skills = [
    { name: "WordPress", logo: "/logos/wordpress.png", top: "5%", left: "22%" },
    { name: "Git", logo: "/logos/git.png", top: "8%", left: "68%" },
    { name: "SQL", logo: "/logos/sql.png", top: "12%", left: "45%" },
    { name: "Figma", logo: "/logos/figma.png", top: "18%", left: "58%" },
    { name: "HTML", logo: "/logos/html.png", top: "15%", left: "75%" },
    { name: "Java", logo: "/logos/java.png", top: "24%", left: "30%" },
    { name: "AWS", logo: "/logos/aws.png", top: "28%", left: "50%" },
    { name: "JavaScript", logo: "/logos/javascript.png", top: "32%", left: "65%" },
    { name: "Node.js", logo: "/logos/node.png", top: "35%", left: "42%" },
    { name: "CSS", logo: "/logos/css.png", top: "22%", left: "14%" },
    { name: "React", logo: "/logos/react.png", top: "38%", left: "25%" },
    { name: "TypeScript", logo: "/logos/typescript.png", top: "42%", left: "18%" },
    { name: "Python", logo: "/logos/python.png", top: "40%", left: "10%" },
    { name: "Tailwind", logo: "/logos/tailwind.png", top: "45%", left: "60%" },
  ].map((skill, i) => ({
    ...skill,
    float: `animate-float${i % 3}`,
  }));




  
  return (
    <section className="w-full h-screen flex bg-gradient-to-br from-sky-100 to-blue-200 overflow-hidden relative">
      {/* Left 2/3: SVG + Floating skill bubbles */}
      <div className="w-2/3 relative z-0">
        <img
          src={Squirtle}
          alt="My Drawing"
          className="absolute left-[-80px] bottom-0 w-[850px] sm:w-[1000px] drop-shadow-2xl z-10"
        />

        {/* Floating bubbles */}
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
            <div className="w-28 h-28 rounded-full border border-white bg-white/50 backdrop-blur-xl shadow-lg flex flex-col items-center justify-center text-center text-gray-800 transition-transform duration-300 hover:scale-105">
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
