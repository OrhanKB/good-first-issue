import Image from "next/image";

export default function Home() {
  return (
    <section className="text-center py-20">
      <Image
        src="/next.svg"
        alt="Profile Logo"
        width={100}
        height={100}
        className="mx-auto mb-6"
      />
      <h2 className="text-4xl font-bold text-blue-600 mb-3">
        Hi, I’m a Contributor 👋
      </h2>
      <p className="text-gray-600 text-lg mb-6">
        I build AI and Web apps with purpose — blending design, code, and impact.
      </p>
      <a
        href="#projects"
        className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        View My Work
      </a>
    </section>
  );
}
