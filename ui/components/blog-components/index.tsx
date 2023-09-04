import { Link1Icon } from "@radix-ui/react-icons";
import type { MDXComponents } from "mdx/types";
import Link from "next/link";
export const CustomMdxComponents: MDXComponents = {
  h1: ({ className, children, ...props }) => {
    if (!children) return null;
    const slug = children.toString().toLowerCase().replace(/\s/g, "-");
    return (
      <h1 {...props} className="flex items-center justify-start gap-2 group">
        <Link
          href={"#" + slug}
          className="opacity-0 group-hover:opacity-100 transition-opacity"
          id={slug}
        >
          <Link1Icon className="rotate-45 w-[1em] h-[1em] text-2xl" />
        </Link>
        {children}
      </h1>
    );
  },
};
