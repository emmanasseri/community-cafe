import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-5xl md:text-7xl font-bold">community café</h1>
      <p className="text-lg text-gray-400 mt-4">
        a third space for the decentrally-minded.
      </p>

      <Image
        src="/pixel-latte.png"
        alt="Community Cafe"
        width={300}
        height={200}
        className="m-8"
        priority
      />
    </main>
  );
}
