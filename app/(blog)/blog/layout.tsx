import React from "react";

function BlogPostLayout({ children }: { children: React.ReactNode }) {
  const date = new Date();

  return (
    <div className="min-h-screen w-full bg-black text-white">
      <div className="w-full h-full max-w-screen-md mx-auto">
        <header className="w-full">
          <div className="w-full container border-b border-b-gray">
            <div className="text-center p-2">
              <h1 className="md:text-4xl text-2xl font-times align-middle">
                Falta
                <span className="text-gray font-bold mx-0.5">/</span>
                Blogs
              </h1>
              <div className="font-times text-sm">
                <span>{date.toDateString()}</span>
              </div>
            </div>
          </div>
        </header>
        {children}
      </div>
    </div>
  );
}

export default BlogPostLayout;
