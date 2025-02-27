import HomePage from "./components/home";
import { getAllPosts } from "@/lib/sanity/client";
import WelcomePage from "./components/welcome";
import Partners from "./components/partners";

export default async function IndexPage() {
  const posts = await getAllPosts();

  return (
    <>
      <WelcomePage />
      <Partners />
      <HomePage posts={posts} />
    </>
  );
}

// export const revalidate = 60;
