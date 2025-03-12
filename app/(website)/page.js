import HomePage from "./components/home";
import { getAllPosts } from "@/lib/sanity/client";
import WelcomePage from "./components/welcome";
import Partners from "./components/partners";
import ActivitySlider from "./activity/components/ActivitySlider";

export default async function IndexPage() {
  const posts = await getAllPosts();
    const activities = await getAllActivities();

  return (
    <>
      <WelcomePage />
      <Partners />
      <ActivitySlider activities={activities} />
      <HomePage posts={posts} />
    </>
  );
}

// export const revalidate = 60;
