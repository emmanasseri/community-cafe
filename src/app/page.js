import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center  min-h-screen pt-16  circular-gradient">
      <h1 className="text-9xl md:text-[8rem] font-bold text-center">
        community café
      </h1>
      <p className="text-xl md:text-2xl text-gray-100 mt-6 text-center">
        an IRL 3rd space for the decentrally-minded.
      </p>

      <Image
        src="/welcome-latte.gif"
        alt="Community Cafe"
        width={300}
        height={200}
        className="m-8"
        priority
      />
      <section className="flex flex-col md:flex-row items-center justify-between px-12 pt-16 bg-gray-800">
        {/* Filler Text */}
        <div className="md:w-1/2 text-gray-200">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            About Community Café
          </h2>
          <p className="text-lg md:text-xl">
            Community Café is a decentralization-focused, community owned third
            space focused on making people's lives better through healthy food,
            community, and creativity.
          </p>
        </div>

        {/* Image on the Right */}
        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
          <Image
            src="/pixel-people.png"
            alt="People at Community Cafe"
            width={500}
            height={300}
            className="rounded-lg"
            priority
          />
        </div>
      </section>
    </main>
  );
}
