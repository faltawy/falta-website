import Image from "next/image";

function WhoamiPage() {
  return (
    <div className="flex items-start justify-start h-full w-full flex-col padding-6">
      <div className="flex-1 w-full mt-4">
        <section className="w-full flex justify-between items-center gap-10">
          <div>
            <h1 className="text-8xl font-bold text-gray uppercase font-inter">
              about me
            </h1>
            <div className="block mt-4">
              <p className="text-lg font-fira-sans">
                Welcome to my digital realm! I'm Ahmad Hassan, a self-taught
                frontend software engineer hailing from the picturesque
                landscapes of Egypt. My journey into the world of web
                development started just one year ago, driven by an insatiable
                curiosity and a desire to transform ideas into digital reality.
              </p>
            </div>
          </div>
          <div
            data-container="my-image"
            className="border-2 border-gray p-2 w-fit h-full"
          >
            <div className="relative h-80 aspect-square object-cover grayscale">
              <Image
                src="/assets/my-image.jpg"
                alt="Picture of the author"
                fill
              />
            </div>
          </div>
          <div></div>
        </section>
      </div>
    </div>
  );
}

export default WhoamiPage;
