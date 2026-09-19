import { GetStaticProps } from "next";
import { allPosts } from "contentlayer/generated";

import { PostPage, type PostPageProps } from "@/templates/blog/post-page";

export default function BlogPostPage({ post }: PostPageProps) {
  return <PostPage post={post} />;
}

export async function getStaticPaths() {
  const sortedPosts = allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  const recentPosts = sortedPosts.slice(0, 5);

  const paths = recentPosts.map((post) => ({
    params: {
      slug: post.slug
    }
  }));

  return {
    paths,
    fallback: "blocking"
  };
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as { slug: string };
  const post = allPosts.find((post) => post.slug === slug);

  if (!post) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      post
    }
  };
};
