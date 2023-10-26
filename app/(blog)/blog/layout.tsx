import { Link } from "@ui/router-events";
import React from "react";

function BlogPostLayout({ children }: { children: React.ReactNode }) {
  const date = new Date();

  return (
    <div className="min-h-screen max-h-full w-full bg-black text-white overflow-auto">
      <div className="w-full h-full max-w-screen-md mx-auto">
        <header className="w-full sticky top-0 bg-black z-50">
          <div className="w-full container border-b border-b-gray">
            <div className="text-center p-2">
              <h1 className="md:text-4xl text-2xl font-times align-middle">
                <Link href="/">Falta</Link>
                <span className="text-gray font-bold mx-0.5">/</span>
                <Link href="/blog">Blogs</Link>
              </h1>
              <div className="font-times text-sm">
                <span>{date.toDateString()}</span>
              </div>
            </div>
          </div>
        </header>
        {children}

        <div className="w-full grid grid-cols-2 mt-4 container my-4 padding-6">
          <button className="p-4 text-lg border-gray border text-white hover:text-primary hover:bg-white">
            Older
          </button>
          <button className="p-4 text-lg border-gray border text-white hover:text-primary hover:bg-white">
            Newer
          </button>
        </div>
      </div>
    </div>
  );
}

export default BlogPostLayout;
