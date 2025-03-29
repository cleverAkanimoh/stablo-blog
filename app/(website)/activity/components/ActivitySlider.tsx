"use client";

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
          className="text-sm text-gray-400 transition-all duration-300 hover:text-black">
          All activities
        </Link>
      </div>

      <Marquee
        velocity={10}
        direction={"ltr"}
        scatterRandomly={false}
        resetAfterTries={0}
        onInit={() => {}}
        onFinish={tries => console.log(tries)}>
        {activities.map((activity, index) => (
          <div
            key={index}
            className="mx-4 cursor-pointer rounded-lg bg-white p-4 shadow-lg dark:bg-gray-800"
            onClick={() => setSelectedActivity(activity)}>
            <Image
              src={activity.images[0]}
              height="100"
              width="100"
              alt={activity.title}
              className="h-40 w-64 rounded-lg object-cover"
            />
            <p className="mt-2 text-lg font-semibold text-gray-900 dark:text-gray-100">
              {activity.title}
            </p>
          </div>
        ))}
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
