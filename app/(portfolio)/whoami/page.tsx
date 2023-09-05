import Image from "next/image";

function WhoamiPage() {
  return (
    <div className="flex items-start justify-start h-full w-full flex-col padding-6">
      <div className="flex-1 w-full mt-4">
        <section className="w-full flex lg:justify-between items-center lg:flex-row flex-col gap-10">
          <div className="md:h-full lg:flex lg:items-start lg:flex-col lg:justify-between">
            <h1 className="lg:text-8xl text-4xl font-bold text-gray uppercase font-inter">
              about me
            </h1>
            <div className="block mt-4 text-gray/80">
              <p className="text-lg font-fira-sans [&_span]:block">
                <span>Welcome to my digital realm!</span>
                <span>I'm Ahmad Hassan,</span>
                <span>
                  a self-taught frontend software engineer based on Egypt.
                </span>
                <span>
                  My journey into the world of web development started just one
                  ,year ago,
                </span>
                <span>
                  driven by an insatiable curiosity and a desire to transform
                  ideas into digital reality.
                </span>
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
