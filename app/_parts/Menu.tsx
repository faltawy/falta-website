"use client";
import NavLink from "@ui/components/NavLink";
import { FooterLinks } from "@ui/partials";
import { AnimatePresence, motion } from "framer-motion";
import { useMenu } from "../../app/_providers/MenuProvider";

const MotionLink = motion(NavLink);
function MenuNavLink({
  href,
  label,
  delay,
}: {
  label: string;
  href: string;
  delay: number;
}) {
  const { setMenuOpen } = useMenu();
  function closeMenu() {
    setMenuOpen(false);
  }
  return (
    <li className="w-fit h-fit overflow-hidden max-w-full">
      <MotionLink
        onClick={closeMenu}
        initial={{
          y: "100%",
        }}
        transition={{
          delay: delay,
          type: "tween",
          duration: 0.1,
        }}
        animate={{
          y: 0,
        }}
        href={href}
        activeClasses="[&:not(:hover)]:!opacity-100 pointer-events-none "
        className="flex items-center hover:tracking-wider cursor-pointer max-w-full tracking-tight hover:opacity-100 gap-1 transition-all opacity-75"
      >
        <span
          style={{
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
          }}
          className="uppercase font-bold max-w-full"
        >
          {label}
        </span>
      </MotionLink>
    </li>
  );
}

export function Menu() {
  const { setMenuOpen, menuOpen } = useMenu();
  return (
    <AnimatePresence>
      {menuOpen && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          className="w-full h-full md:absolute inset-0 bg-black bg-gradient-to-r from-gray/10 to-transparent fixed"
        >
          <div className="h-full w-full flex flex-col items-start justify-between">
            <div className="w-full p-6 flex justify-between items-center">
              <h2 className="font-extrabold font-open-sans text-white text-2xl">
                AH
              </h2>
              <button onClick={() => setMenuOpen(false)}>close</button>
            </div>
            <div className="w-full flex-1 p-6 font-open-sans">
              <div className="flex items-center justify-start h-full">
                <ul>
                  <MenuNavLink delay={0} href="/" label="index" />
                  <MenuNavLink delay={0.2} href="/whoami" label="whoami" />
                  <MenuNavLink delay={0.4} href="/contact" label="contact" />
                  <MenuNavLink
                    delay={0.6}
                    href="/portfolio"
                    label="portfolio"
                  />
                </ul>
              </div>
            </div>
            <div className="w-full p-5 sm:flex items-center justify-end hidden">
              <FooterLinks />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
