import Image from "next/image";
import Button from "./components/Button";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <div className="circular-gradient pt-16 flex flex-col items-center">
        <div className="prose prose-lg md:prose-xl lg:prose-2xl text-center w-full  text-blue-950">
          <h1 className="font-bold">Community Café</h1>
        </div>
        <p className="text-2xl md:text-3xl text-sky-950 mt-6 text-center px-5">
          IRL 3rd spaces for the <br></br>decentrally-minded.
        </p>

        <Image
          src={`/welcome-latte.gif?${new Date().getTime()}`}
          alt="Community Cafe"
          width={500}
          height={200}
          className="m-8"
          priority
        />

        <section className="flex flex-col md:flex-row items-center justify-between px-12 pt-16">
          <div className="md:w-1/2 text-gray-200 space-y-6">
            <h2 className="text-4xl md:text-6xl font-bold text-blue-950">
              About
            </h2>
            <p className="text-lg md:text-xl  text-sky-950">
              Community Café is a design for decentralization-focused,
              community-owned third spaces focused on making people&#39;s lives
              better through access to healthy food, community, and creativity.
            </p>

            <Button
              title="Read the whitepaper"
              link="https://www.youtube.com/watch?v=XfELJU1mRMg"
            />
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
      </div>
      <section className="relative flex flex-col items-center justify-center px-8 pt-16 bg-gradient-to-b from-blue-900 to-sky-300 text-center text-white">
        {/* Floating Clouds */}
        {/* <div className="absolute inset-0 pointer-events-none">
          <img
            src="/cloud1.png"
            alt="Cloud 1"
            className="absolute w-24 h-auto top-10 left-10 animate-float"
            style={{ animationDelay: "0s" }}
          />
          <img
            src="/cloud2.png"
            alt="Cloud 2"
            className="absolute w-32 h-auto top-20 left-1/3 animate-float"
            // style={{ animationDelay: "5s" }}
          />
          <img
            src="/cloud3.png"
            alt="Cloud 3"
            className="absolute w-28 h-auto top-32 left-2/3 animate-float"
            // style={{ animationDelay: "10s" }}
          />
        </div> */}

        {/* Text */}
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Get in Touch</h2>
        <p className="text-lg md:text-xl mb-8">
          If you're interested in learning more or joining us as we build this
          project, please reach out.
        </p>

        {/* Contact Us Button */}
        <a
          href="mailto:emma@community.cafe"
          className="px-6 py-3 text-xl font-bold text-white shadow-lg rounded-md bg-blue-950 opacity-90 hover:opacity-100"
        >
          Contact Us
        </a>

        {/* Image at the Bottom */}
        <Image
          src="/pixel-sprouts.png" // Replace with your actual image path
          alt="Pixel Sprouts"
          width={500}
          height={300}
          className="mt-12"
          priority
        />
      </section>
    </main>
  );
}
