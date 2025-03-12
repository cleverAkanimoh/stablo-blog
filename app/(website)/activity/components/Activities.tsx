"use client";

import { useState } from "react";
import ActivityModal from "./ActivityModal";
import Image from "next/image";

export default function Activities({ activities }) {
  const [selectedActivity, setSelectedActivity] = useState(null);

  return (
    <main className="min-h-screen bg-gray-50 p-6 dark:bg-gray-900">
      <h1 className="text-center text-3xl font-bold text-gray-900 dark:text-gray-100">
        Activities
      </h1>
      <p className="text-center text-gray-600 dark:text-gray-300">
        Explore our recent events and community initiatives.
      </p>

      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {(activities || []).map((activity, index) => (
          <div
            key={index}
            className="cursor-pointer rounded-lg bg-white p-4 shadow-lg dark:bg-gray-800"
            onClick={() => setSelectedActivity(activity)}>
            <Image
              height="100"
              width="100"
              src={activity.images[0]}
              alt={activity.title}
              className="h-48 w-full rounded-lg object-cover"
            />
            <h2 className="mt-3 text-lg font-semibold text-gray-900 dark:text-gray-100">
              {activity.title}
            </h2>
            <p className="line-clamp-2 text-gray-600 dark:text-gray-300">
              {activity.description}
            </p>
            <button className="mt-2 text-blue-600 underline dark:text-blue-400">
              See More
            </button>
          </div>
        ))}
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
