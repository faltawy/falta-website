import { allBlogs } from "contentlayer/generated";
import Link from "next/link";
const blogs = allBlogs.map((blog) => {
  return {
    slug: blog._raw.flattenedPath,
    title: blog.title,
    group: blog.group,
  };
});
export default function BlogsListPage() {
  return (
    <div>
      <ul>
        {blogs.map((blog) => {
          return (
            <li key={blog.slug}>
              <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
