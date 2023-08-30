import { FooterLinks, Menu } from "@ui/partials";
import { Header } from "@ui/partials/Header";

export default function Home() {
  return (
    <main className="font-fira-sans bg-black text-white flex items-center justify-center p-4 h-full">
      <div
        data-container="box-container"
        className="box w-full min-h-full h-full border border-gray block flex-1 relative"
      >
        <div className="flex w-full h-full flex-col items-start justify-between min-h-full">
          <Header />
          <div className="flex-1 w-full p-6">
            <div className="w-full h-full flex items-start justify-start mt-14">
              <div className="w-fit [--font-size:80px] flex items-start flex-col">
                <h1 className="uppercase [box-shadow:0px_1px_0px_0px_white] font-extrabold [font-size:var(--font-size)] text-transparent font-inter bg-clip-text bg-gradient-to-t from-gray to-white">
                  Ahmad Hassan
                </h1>
                <div>
                  <span className="font-fira-sans [font-size:calc(var(--font-size)/2)] font-medium uppercase leading-tight">
                    frontend engineer
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="p-6">
            <div>
              <FooterLinks />
            </div>
          </div>
        </div>
        <Menu />
      </div>
    </main>
  );
}
