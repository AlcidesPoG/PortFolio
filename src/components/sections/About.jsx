import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = ["JavaScript", "React", "Vue"];
  const backendSkills = [
    "C#",
    ".Net",
    "SQL",
    "SQL Server",
    "MongoDB",
    "GraphQL",
  ];
  return (
    <section
      id="about"
      className="min-h-screen-flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              {" "}
              Passionate developer with experience in building scalable backend
              services, APIs, and web applications. While I’m comfortable
              working across the full stack, my main interest and strength lie
              in backend development.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3>Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                  hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                      key={key}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3>Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                  hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                      key={key}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>A.S. in Software Development </strong> - Instituto
                  Tecnologico de las Americas (ITLA) (2019-2022)
                </li>
                <li>
                  Relevant Coursework: Web Development, Databases, Version
                  Control...{" "}
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
              <div className="space-y-4 text-gray-300">
                <div className="">
                  <h4 className="font-semibold">
                    Fullstack Developer at Tennos Business (2022 - 2024)
                  </h4>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>
                      Maintenance and development of a private payment system
                      using cards and printed vouchers.
                    </li>
                    <li>
                      Maintenance and improvement of an internal CRM and ERP
                      system.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
