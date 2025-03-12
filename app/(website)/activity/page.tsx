import { getAllActivities } from "@/lib/sanity/client";
import Activities from "./components/Activities";

export default async function ActivityPage() {
  const activities = await getAllActivities();

  return <Activities activities={activities} />;
}
