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
    <article className="py-8 mx-auto max-w-xl">
      <div className="mb-8 text-center">
        <h1>{blog?.title}</h1>
      </div>
      <div className="prose prose-sm prose-gray">
        <Content components={CustomMdxComponents} />
      </div>
    </article>
  );
};

export default PostLayout;
