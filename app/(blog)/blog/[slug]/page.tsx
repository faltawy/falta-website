import { CustomMdxComponents } from "@ui/components/blog-components";
import { allBlogs } from "contentlayer/generated";
import { getMDXComponent } from "next-contentlayer/hooks";

export const generateStaticParams = async () =>
  allBlogs.map((blog) => ({ slug: blog._raw.flattenedPath }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const blog = allBlogs.find((blog) => blog._raw.flattenedPath === params.slug);
  return { title: blog?.title };
};

// TODO: handle if no blog is found
const PostLayout = ({ params }: { params: { slug: string } }) => {
  const blog = allBlogs.find(
    (blog) => blog._raw.flattenedPath.trim() === params.slug
  );

  const Content = getMDXComponent(blog?.body.code || "");

  return (
    <main className="py-8 text-white mx-auto max-w-xl bg-black">
      <section className="">
        <div className="mb-8 text-center">
          <span>React</span>
          <h1>{blog?.title}</h1>
          <div>
            <p className="text-start">{blog?.summary}</p>
          </div>
        </div>
      </section>

      <div className="prose prose-sm prose-gray">
        <Content components={CustomMdxComponents} />
      </div>
    </main>
  );
};

export default PostLayout;
