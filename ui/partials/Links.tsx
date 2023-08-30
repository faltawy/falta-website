import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import config from "../../config.json";
import { Link } from "@ui/router-events";
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
