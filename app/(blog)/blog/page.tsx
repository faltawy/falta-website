import { allBlogs } from "contentlayer/generated";
import Image from "next/image";
import Link from "next/link";
const blogs = allBlogs.filter((blog) => blog.published);
export default function BlogsListPage() {
  return (
    <div className="w-full container my-4 padding-6">
      <h2 className="block text-2xl font-bold font-inter mb-4">Recent Posts</h2>
      <div className="w-full grid grid-cols-1 h-fit">
        {blogs.map((blog, index) => {
          return (
            <article key={index}>
              <div className="flex flex-col md:flex-row md:gap-4">
                <Link href={blog.url} className="text-4xl font-bold text-white">
                  {blog.title}
                </Link>
              </div>
              <div className="w-full flex items-center justify-end">
                <span>{blog.date}</span>
              </div>
              <div className="image w-full aspect-square mt-3 relative max-h-64">
                <Image
                  src={blog.thumbnail}
                  alt={blog.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-lg mt-2 text-gray">
                <p>{blog.summary}</p>
              </div>
            </article>
          );
        })}
      </div>
      <div className="w-full grid grid-cols-2 mt-4">
        <button className="p-4 text-lg border-gray border text-white hover:text-black hover:bg-white">
          older
        </button>
        <button className="p-4 text-lg border-gray border text-white hover:text-black hover:bg-white">
          newer
        </button>
      </div>
    </div>
  );
}
