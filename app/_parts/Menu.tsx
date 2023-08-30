"use client";
import React from "react";
import NavLink from "@ui/components/NavLink";
import { AnimatePresence, motion } from "framer-motion";
import { useMenu } from "../../app/_providers/MenuProvider";
import { FooterLinks } from "@ui/partials";

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
  return (
    <li className="w-fit h-fit overflow-hidden">
      <MotionLink
        initial={{
          y: "100%",
        }}
        transition={{
          delay: delay,
          type: "tween",
          duration: 0.2,
        }}
        animate={{
          y: 0,
        }}
        href={href}
        activeClasses="[&:not(:hover)]:!opacity-100"
        className="flex items-center hover:tracking-wider tracking-tight hover:opacity-100 gap-1 transition-all opacity-75"
      >
        <span className="uppercase text-7xl font-bold">{label}</span>
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
          className="w-full h-full absolute inset-0 bg-black bg-gradient-to-l from-gray/20 to-transparent "
        >
          <div className="h-full w-full flex flex-col items-start justify-between">
            <div className="w-full p-6 flex justify-between items-center">
              <h2 className="font-extrabold font-open-sans text-white text-2xl">AH</h2>
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
            <div className="w-full p-5 flex items-center justify-end">
              <FooterLinks />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
