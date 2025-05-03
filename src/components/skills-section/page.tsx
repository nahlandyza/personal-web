import Image from "next/image";

export default function SkillsSectionPage() {
  return (
    <section id="skills" className="min-h-screen bg-[#1E1E1E] relative pt-20">
      <h2 className="text-4xl font-bold mb-2 text-center text-white">
        My <span className="text-[#FF69B4]">Skills</span>
      </h2>
      <div className="h-1 w-32 bg-[#FF69B4] mx-auto mb-6"></div>

      <h3 className="px-3.5 text-xl text-center  text-[#B0B0B0]">
        Technologies I use to build modern web applications
      </h3>
      <div className="my-18 grid grid-cols-5 relative justify-between mx-auto gap-2.5 px-8 place-items-center w-full max-w-[1100]">
        <div className="bg-[#FF69B4] w-fit p-8 rounded-full gap-10 border border-[#B0B0B0] grid place-items-center">
          {/* div untuk background putih */}
          <div className="bg-white p-6 rounded-full w-24 h-24">
            {/* div untuk pembungkus Image */}
            <div className="w-full h-full relative">
              <Image
                src="/javascript.png"
                alt="javascript logo"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <span className="text-2xl font-semibold">JavaScript</span>
        </div>

        <div className="bg-[#FF69B4] w-fit p-8 rounded-full gap-10 border border-[#B0B0B0] grid place-items-center">
          <div className="bg-white p-6 rounded-full w-24 h-24">
            <div className="w-full h-full relative">
              <Image
                src="/typescript.png"
                alt="typescript logo"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <span className="text-2xl font-semibold">TypeScript</span>
        </div>

        <div className="bg-[#FF69B4] w-fit p-8 rounded-full gap-10 border border-[#B0B0B0] grid place-items-center">
          <div className="bg-white p-6 rounded-full w-24 h-24">
            <div className="w-full h-full relative">
              <Image
                src="/html.png"
                alt="html logo"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <span className="text-2xl font-semibold">HTML</span>
        </div>

        <div className="bg-[#FF69B4] w-fit p-8 rounded-full gap-10 border border-[#B0B0B0] grid place-items-center">
          <div className="bg-white p-6 rounded-full w-24 h-24">
            <div className="w-full h-full relative">
              <Image
                src="/css.png"
                alt="css logo"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <span className="text-2xl font-semibold">CSS</span>
        </div>

        <div className="bg-[#FF69B4] w-fit p-8 rounded-full gap-10 border border-[#B0B0B0] grid place-items-center">
          <div className="bg-white p-6 rounded-full w-24 h-24">
            <div className="w-full h-full relative">
              <Image
                src="/react2.png"
                alt="react logo"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <span className="text-2xl font-semibold">React</span>
        </div>
      </div>
    </section>
  );
}

{
  /* <div className="bg-[#B0B0B0] h-24 relative">
          <Image
            src="/html.png"
            alt="html logo"
            fill
            className="object-contain"
          />
        </div>
        <div className="bg-[#B0B0B0] h-24 relative">
          <Image
            src="/css.png"
            alt="css logo"
            fill
            className="object-contain"
          />
        </div>
        <div className="bg-[#B0B0B0] h-24 relative">
          <Image
            src="/react.png"
            alt="react logo"
            fill
            className="object-contain"
          />
        </div> */
}
