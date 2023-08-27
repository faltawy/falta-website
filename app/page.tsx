import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-5 font-fira-sans">
      <div className="relative aspect-square max-w-sm w-full">
        <Image src="/illustrations/barbecue.svg" alt="barbecue" fill />
      </div>
      <div className="text-xl">Still Cooking.....</div>
    </main>
  );
}
