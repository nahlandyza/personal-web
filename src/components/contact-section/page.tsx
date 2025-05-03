import { FaWhatsapp, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export default function ContactSectionPage() {
  return (
    <section
      id="contact"
      className="bg-[#1E1E1E] text-white min-h-screen flex flex-col items-center justify-center px-4"
    >
      <h2 className="text-4xl font-bold mb-2">
        Contact <span className="text-[#FF69B4]">Me</span>
      </h2>
      <div className="h-1 w-32 bg-[#FF69B4] mb-6"></div>

      <p className="text-lg text-[#B0B0B0] text-center max-w-xl mb-8">
        Have a project in mind? I`d love to hear from you! <br />
        Reach out to me, and let`s turn your ideas into reality.
      </p>

      <div className="flex flex-col gap-4 w-full max-w-sm">
        <Link
          href="https://wa.me/+6281295299090"
          className="bg-[#FF69B4] hover:bg-pink-300 transition-colors flex items-center px-4 py-3 rounded"
        >
          <FaWhatsapp className="mr-3" />
          Whatsapp
        </Link>
        <Link
          href="mailto:nahla.damayanti@gmail.com"
          className="bg-[#FF69B4] hover:bg-pink-300 transition-colors flex items-center px-4 py-3 rounded"
        >
          <FaEnvelope className="mr-3" />
          Email Me
        </Link>
        <Link
          href="https://github.com/"
          className="bg-[#FF69B4] hover:bg-pink-300 transition-colors flex items-center px-4 py-3 rounded"
        >
          <FaGithub className="mr-3" />
          GitHub
        </Link>
        <Link
          href="https://linkedin.com"
          className="bg-[#FF69B4] hover:bg-pink-300 transition-colors flex items-center px-4 py-3 rounded"
        >
          <FaLinkedin className="mr-3" />
          LinkedIn
        </Link>
      </div>
    </section>
  );
}
