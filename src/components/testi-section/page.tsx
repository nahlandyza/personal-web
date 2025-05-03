import Image from "next/image";

const testimonials = [
  {
    name: "Vincent Revel",
    role: "Founder - xyz.com",
    image: "/avatar1.png",
    quote:
      "“Amazing job! The delivery exceeded expectations. Highly skilled and professional. I’d recommend and definitely work with them again.”",
  },
  {
    name: "Shakila Michelle",
    role: "Founder - abc.com",
    image: "/avatar2.png",
    quote:
      "“Brilliant developer! Communication was smooth and the work was top-quality. A real asset to any dev team!”",
  },
  {
    name: "Dominic Toretto",
    role: "Freelancer",
    image: "/avatar3.png",
    quote:
      "“Fantastic to collaborate with! Always on time, great ideas, and delivers code like a champ. Five stars from me.”",
  },
];

export default function TestiSectionPage() {
  return (
    <section
      id="testi"
      className="min-h-screen bg-[#1E1E1E] text-white py-20 px-6"
    >
      <div className="text-center mb-12">
        <h2 className="pt-3.5 text-center text-4xl font-bold mb-2 h-fit text-[#FF69B4]">
          Testimonial
        </h2>
        <div className="h-1 w-32 bg-[#FF69B4] mx-auto mb-6"></div>
        <p className="text-xl mt-4 text-[#B0B0B0]">
          Nice things people have said about me:
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-[#FF69B4] p-8 rounded-xl">
            <div className=" relative w-[80] h-[80] mx-auto mb-5">
              <Image
                src={t.image}
                alt={t.name}
                fill
                className="rounded-full mx-auto mb-6 object-cover"
              />
            </div>
            <p className="text-center italic mb-6">{t.quote}</p>
            <h3 className="text-center text-lg font-bold text-[#1E1E1E]">
              {t.name}
            </h3>
            <p className="text-center text-sm">{t.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
