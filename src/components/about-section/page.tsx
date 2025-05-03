import Image from "next/image";
export default function AboutSectionPage() {
  return (
    <section id="about" className="h-dvh bg-[#1E1E1E] relative pt-25">
      <h2 className="text-center text-4xl font-bold mb-2 text-white">
        About <span className="text-[#FF69B4]">me</span>
      </h2>
      <div className="h-1 w-32 bg-[#FF69B4] mb-6 mx-auto"></div>
      <h3 className=" text-[#B0B0B0] text-xl pt-2.5 mb-9">
        Curiuos About me? Here You Have it:
      </h3>

      {/* for contain */}
      <div className="grid grid-cols-3 my-11 mx-20">
        <div className="col-span-1 relative justify-end w-[250px] h-[250px] ml-0 my-auto mx-auto rounded-full border-4 border-[#FF69B4]">
          <Image
            src="/picture-profile.png"
            alt="profile picture"
            fill
            className="rounded-full object-cover"
          />
        </div>
        <p className="col-span-2 text-[#F5F5F5] text-2xl max-w-5xl text-justify my-auto mx-auto">
          Hi I found myself drawn to the creativity and logic of building
          websites. I’m a Chemistry graduate with a newfound passion for web
          development. While my academic background taught me precision and
          critical thinking. Now, I’m diving into the world of front-end and
          full-stack development — learning by doing, experimenting with code,
          and slowly crafting my place in tech, one project at a time.
        </p>
      </div>
    </section>
  );
}
