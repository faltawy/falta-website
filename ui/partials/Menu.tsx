"use client";
import React from "react";
import { FooterLinks } from ".";
import NavLink from "@ui/components/NavLink";
import { motion } from "framer-motion";
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
          duration: 0.5,
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
  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          display: "none",
          transition: {
            duration: 0.5,
          },
        },
        visible: {
          opacity: 1,
          display: "block",
          transition: {
            duration: 0.5,
          },
        },
      }}
      initial="hidden"
      className="w-full h-full absolute inset-0 bg-black"
    >
      <div className="h-full w-full flex flex-col items-start justify-between">
        <div className="w-full">
          <div className="p-5">
            <button>close</button>
          </div>
        </div>
        <div className="w-full flex-1 px-5 font-open-sans">
          <div className="flex items-center justify-start h-full">
            <ul>
              <MenuNavLink delay={0} href="/" label="index" />
              <MenuNavLink delay={0.2} href="/whoami" label="whoami" />
              <MenuNavLink delay={0.4} href="/contact" label="contact" />
              <MenuNavLink delay={0.6} href="/portfolio" label="portfolio" />
            </ul>
          </div>
        </div>
        <div className="w-full p-5 flex items-center justify-end">
          <FooterLinks />
        </div>
      </div>
    </motion.div>
  );
}
