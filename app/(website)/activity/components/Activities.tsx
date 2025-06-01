"use client";

import { urlFor } from "@/lib/generateSanityUrl";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import ActivityModal from "./ActivityModal";

export default function Activities({ activities }) {
  const [selectedActivity, setSelectedActivity] = useState(null);

  const router = useRouter();

  return (
    <main className="container min-h-screen p-6">
      <h1 className="text-center text-3xl font-bold text-gray-900 dark:text-gray-100">
        Activities
      </h1>
      <p className="text-center text-gray-600 dark:text-gray-300">
        Explore our recent events and community initiatives.
      </p>

      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {(activities || [])?.map(activity => {
          return (
            <motion.div
              key={activity._id}
              id={activity._id}
              className="cursor-pointer rounded-lg bg-white p-4 shadow dark:bg-gray-800"
              onClick={() => {
                router.push("?activity=" + activity._id);
                setSelectedActivity(activity);
              }}>
              <motion.div
                className="h-56 w-full overflow-hidden rounded-lg"
                whileHover={{
                  x: -10,
                  y: -10,
                  transition: { duration: 0.3 }
                }}>
                <Image
                  height="100"
                  width="100"
                  src={
                    activity.images && activity.images.length > 0
                      ? urlFor(activity.images[0])
                      : ""
                  }
                  alt={activity.title}
                  className="h-full w-full object-cover"
                />
              </motion.div>
              <h2 className="mt-3 text-lg font-semibold text-gray-900 dark:text-gray-100">
                {activity.title}
              </h2>
              <p className="line-clamp-2 text-gray-600 dark:text-gray-300">
                {activity.description}
              </p>
              <button className="mt-2 text-red-600 underline dark:text-red-400">
                See More
              </button>
            </motion.div>
          );
        })}
      </div>

      {selectedActivity && (
        <ActivityModal
          activity={selectedActivity}
          onClose={() => setSelectedActivity(null)}
        />
      )}
    </main>
  );
}
