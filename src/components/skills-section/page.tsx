import Image from "next/image";

export default function SkillsSectionPage() {
  return (
    <section
      id="skills"
      className="min-h-screen w-full bg-[#1E1E1E] relative pt-20"
    >
      <h2 className="text-4xl font-bold mb-2 text-center text-white">
        My <span className="text-[#FF69B4]">Skills</span>
      </h2>
      <div className="h-1 w-32 bg-[#FF69B4] mx-auto mb-6"></div>

      <h3 className="px-3.5 text-xl text-center text-[#B0B0B0]">
        Technologies I use to build modern web applications
      </h3>

      <div className="my-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-6 md:px-12 xl:px-28 place-items-center">
        {[
          { name: "JavaScript", src: "/javascript.png" },
          { name: "TypeScript", src: "/typescript.png" },
          { name: "HTML", src: "/html.png" },
          { name: "CSS", src: "/css.png" },
          { name: "React", src: "/react2.png" },
        ].map((tech) => (
          <div
            key={tech.name}
            className="bg-[#FF69B4] w-fit p-6 rounded-full border border-[#B0B0B0] grid place-items-center gap-4"
          >
            <div className="bg-white p-4 rounded-full w-24 h-24 relative">
              <Image
                src={tech.src}
                alt={`${tech.name} logo`}
                fill
                className="object-contain"
              />
            </div>
            <span className="text-2xl font-semibold">{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
