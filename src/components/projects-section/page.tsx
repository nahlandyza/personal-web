import Image from "next/image";

export default function ProjectsSectionPage() {
  return (
    <section
      id="projects"
      className="min-h-screen bg-[#1E1E1E] relative pt-20 px-4"
    >
      <h2 className="pt-3.5 text-center text-4xl text-[#FF69B4] font-bold mb-2">
        Projects
      </h2>
      <div className="h-1 w-32 bg-[#FF69B4] mt-2 mx-auto mb-8"></div>

      {/* Responsive grid container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {/* Project 1 */}
        <div className="hover:bg-[#FF69B4] transition-colors p-4 rounded-xl">
          <div className="relative h-64 w-full rounded-2xl border-2 border-[#B0B0B0]">
            <Image
              src="/playminton.png"
              alt="Project 1"
              fill
              className="rounded-2xl object-cover"
            />
          </div>
          <div className="mt-7 grid place-items-center">
            <small className="text-[#B0B0B0] text-2xl font-semibold">
              BLOG
            </small>
            <p className="text-white text-lg text-justify mt-5">
              A clean and fast blog platform focused on developer content. Built
              with Tailwind, featuring custom components, syntax highlighting.
              Perfect for sharing insights, tutorials, and personal experiences
            </p>
          </div>
        </div>

        {/* Project 2 */}
        <div className="hover:bg-[#FF69B4] transition-colors p-4 rounded-xl">
          <div className="relative h-64 w-full rounded-2xl border-2 border-[#B0B0B0]">
            <Image
              src="/personal-web.png"
              alt="Project 2"
              fill
              className="rounded-2xl object-cover"
            />
          </div>
          <div className="mt-7 grid place-items-center">
            <small className="text-[#B0B0B0] text-2xl font-semibold">
              PERSONAL WEB
            </small>
            <p className="text-white text-lg text-justify mt-5">
              A fully responsive personal website built with Next.js and
              Tailwind CSS. Designed to act as a digital resume and a place to
              showcase projects, skills, and contact information.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
