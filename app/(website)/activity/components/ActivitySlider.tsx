"use client";

import Text from "@/components/custom/text";
import { urlFor } from "@/lib/generateSanityUrl";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Marquee from "react-marquee-slider";
import ActivityModal from "./ActivityModal";

export default function ActivitySlider({ activities }) {
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="y-6 container space-y-4 md:text-center">
      <div className="">
        <Text className="text-3xl font-medium">
          Recent Activities
        </Text>

        <small>
          Browse through a slideshow of our most{" "}
          <Link
            href="/activity"
            className="text-red-600 transition-all duration-300 hover:text-black dark:hover:text-white">
            recent activities
          </Link>
          .
        </small>
      </div>

      {loaded ? (
        <Marquee
          velocity={20}
          direction="ltr"
          scatterRandomly={false}
          resetAfterTries={0}
          onInit={() => {}}
          onFinish={tries => tries}>
          {activities.slice(0, 10).map((activity, index) => {
            return (
              <div
                key={index}
                className="mx-4 max-w-[350px] cursor-pointer rounded-md bg-white p-4 shadow-lg dark:bg-gray-900"
                onClick={() => {
                  setSelectedActivity(activity);
                }}>
                <Image
                  src={urlFor(activity.images?.[0].asset)} //
                  height="100"
                  width="100"
                  alt={activity.title}
                  className="h-56 w-full rounded-md object-cover"
                />
                <p className="mt-2  truncate text-lg font-semibold text-gray-900 dark:text-gray-100">
                  {activity.title}
                </p>
              </div>
            );
          })}
        </Marquee>
      ) : (
        <></>
      )}

      {selectedActivity && (
        <ActivityModal
          activity={selectedActivity}
          onClose={() => setSelectedActivity(null)}
        />
      )}
    </section>
  );
}
