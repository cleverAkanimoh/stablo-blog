"use client";

import { urlFor } from "@/lib/generateSanityUrl";
import { Dialog, Transition } from "@headlessui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Fragment } from "react";

export default function ActivityModal({ activity, onClose }) {
  return (
    <Transition appear show={!!activity} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <div className="fixed inset-0 bg-black bg-opacity-50">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={motion.div}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="w-full max-w-2xl overflow-hidden rounded-md bg-white p-6 text-start shadow-xl dark:bg-gray-900">
              <Dialog.Title className="text-xl font-bold text-gray-900 dark:text-gray-100">
                {activity.title}
              </Dialog.Title>

              {/* Scrollable Content */}
              <div className="mt-2 max-h-[65vh] space-y-4 overflow-y-auto">
                {/* Description */}
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  {activity.description}
                </p>
                {/* Image Grid */}
                {activity.images && (
                  <div className="grid grid-cols-2 gap-2">
                    {activity.images.map((img, i) => (
                      <Image
                        key={i}
                        src={urlFor(img)}
                        height="100"
                        width="100"
                        alt={`Activity image ${i}`}
                        className="h-36 w-full rounded-md object-cover"
                      />
                    ))}
                  </div>
                )}

                {/* Videos */}
                {
                  <div className="mt-4">
                    <h3 className="text-md font-semibold text-gray-900 dark:text-gray-100">
                      Event Videos
                    </h3>
                    {activity.videos ? (
                      activity.videos.map((video, i) => (
                        <video
                          key={i}
                          controls
                          className="mt-2 w-full rounded-md">
                          <source src={video} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      ))
                    ) : (
                      <p className="text-sm text-gray-400">
                        This event has no videos
                      </p>
                    )}
                  </div>
                }
              </div>

              <button
                onClick={onClose}
                className="mt-4 rounded-md bg-gray-800 px-4 py-2 text-white dark:bg-gray-200 dark:text-black">
                Close
              </button>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
