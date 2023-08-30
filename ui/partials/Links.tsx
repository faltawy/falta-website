import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import config from "../../config.json";
export function FooterLinks() {
  return (
    <ul className="flex items-center gap-2 ">
      <li>
        <Link href="/blog" className="flex items-center gap-1">
          <span>Blog</span>
          <ArrowTopRightIcon />
        </Link>
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
    </ul>
  );
}
