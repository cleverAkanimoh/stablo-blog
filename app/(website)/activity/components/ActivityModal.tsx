"use client";

import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ActivityModal({ activity, onClose }) {
  return (
    <Transition appear show={!!activity} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <Transition.Child
            as={motion.div}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="w-full max-w-2xl rounded-lg bg-white p-6 dark:bg-gray-900">
            <Dialog.Title className="text-xl font-bold text-gray-900 dark:text-gray-100">
              {activity.title}
            </Dialog.Title>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              {activity.description}
            </p>

            {/* Image Grid */}
            <div className="mt-4 grid grid-cols-2 gap-2">
              {activity.images.slice(0, 5).map((img, i) => (
                <Image
                  key={i}
                  src={img}
                  height="100"
                  width="100"
                  alt={`Activity ${i}`}
                  className="h-32 w-full rounded-lg object-cover"
                />
              ))}
            </div>

            {/* Videos */}
            {activity.videos.length > 0 && (
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                  Event Videos
                </h3>
                {activity.videos.map((video, i) => (
                  <video
                    key={i}
                    controls
                    className="mt-2 w-full rounded-lg">
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ))}
              </div>
            )}

            <button
              onClick={onClose}
              className="mt-4 rounded-lg bg-gray-800 px-4 py-2 text-white dark:bg-gray-200 dark:text-black">
              Close
            </button>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
