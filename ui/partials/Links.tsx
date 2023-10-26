import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { Link as EventsLink } from "@ui/router-events";
import Link from "next/link";
import config from "../../config.json";
export function FooterLinks() {
  return (
    <ul className="flex items-center gap-2 max-w-full [&>li]:text-xs sm:[&>li]:text-base">
      <li>
        <EventsLink href="/blog" className="flex items-center gap-1">
          <span>Blog</span>
          <ArrowTopRightIcon />
        </EventsLink>
      </li>
      <li>
        <Link href={config.githubAccount} className="flex items-center gap-1">
          <span>GitHub</span>
          <ArrowTopRightIcon />
        </Link>
      </li>
      <li>
        <Link
          href={"mailto:" + config.gmail}
          className="flex items-center gap-1"
        >
          <span>Gmail</span>
          <ArrowTopRightIcon />
        </Link>
      </li>
      <li>
        <Link
          target="_blank"
          href="https://cssbattle.dev/player/ah7255703"
          className="flex items-center gap-1"
        >
          <span>CSSBattle</span>
          <ArrowTopRightIcon />
        </Link>
      </li>
    </ul>
  );
}
