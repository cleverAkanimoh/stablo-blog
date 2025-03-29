"use client";

import { urlFor } from "@/lib/generateSanityUrl";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Marquee from "react-marquee-slider";
import ActivityModal from "./ActivityModal";

export default function ActivitySlider({ activities }) {
  const [selectedActivity, setSelectedActivity] = useState(null);

  return (
    <div className="y-6 w-full space-y-4">
      <div className="container flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          Recent Activities
        </h2>

        <Link
          href="/activity"
          className="text-sm text-gray-400 transition-all duration-300 hover:text-black dark:hover:text-white">
          All activities
        </Link>
      </div>

      <Marquee
        velocity={10}
        direction={"ltr"}
        scatterRandomly={false}
        resetAfterTries={0}
        onInit={() => {}}
        onFinish={tries => tries}>
        {activities.map((activity, index) => {
          return (
            <div
              key={index}
              className="mx-4 w-full cursor-pointer rounded-md bg-white p-4 shadow-lg dark:bg-gray-900"
              onClick={() => setSelectedActivity(activity)}>
              <Image
                src={urlFor(activity.images[0].asset)}
                height="100"
                width="100"
                alt={activity.title}
                className="h-56 w-full rounded-md object-cover"
              />
              <p className="mt-2 truncate text-lg font-semibold text-gray-900 dark:text-gray-100">
                {activity.title}
              </p>
            </div>
          );
        })}
      </Marquee>

      {selectedActivity && (
        <ActivityModal
          activity={selectedActivity}
          onClose={() => setSelectedActivity(null)}
        />
      )}
    </div>
  );
}
