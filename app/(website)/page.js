import HomePage from "./home";
import { getAllPosts } from "@/lib/sanity/client";
import WelcomePage from "./welcome";

export default async function IndexPage() {
  const posts = await getAllPosts();

  return (
    <>
      <WelcomePage />
      <HomePage posts={posts} />
    </>
  );
}

// export const revalidate = 60;
