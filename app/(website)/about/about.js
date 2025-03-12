"use client";

import Container from "@/components/container";
import { executives } from "@/lib/data/excos";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function About() {
  return (
    <Container>
      <motion.div
        className="max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}>
        <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
          About Us
        </h1>
        <p className="text-lg">We are a small passionate team.</p>
      </motion.div>

      {/* Executive Team */}
      <section className="mt-12 w-full max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-xl font-semibold text-gray-900 dark:text-gray-100">
          Meet Our Executives
        </motion.h2>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {executives.map((exec, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="rounded-lg bg-white p-5 text-center shadow-lg transition-colors duration-300 dark:bg-gray-800">
              <div className="flex justify-center">
                {exec.image ? (
                  <Image
                    src={exec.image}
                    alt={exec.name}
                    width={100}
                    height={100}
                    className="size-24 rounded-full object-cover sm:size-28"
                  />
                ) : (
                  <div className="flex size-24 items-center justify-center rounded-full bg-gray-200 text-gray-500 dark:bg-gray-700 dark:text-gray-400 sm:size-28">
                    No Image
                  </div>
                )}
              </div>
              <h3 className="mt-3 text-xl font-semibold capitalize text-gray-800 dark:text-gray-100 sm:text-lg">
                {exec.name}
              </h3>
              <p className="text-sm uppercase text-gray-600 dark:text-gray-300">
                {exec.position}
              </p>
              {exec.quote && (
                <p className="mt-4 text-sm italic text-gray-500 dark:text-gray-400">{`"${exec.quote}"`}</p>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="prose mx-auto mt-14 text-center dark:prose-invert">
        <section className=" w-full max-w-4xl space-y-6">
          {["Our Mission", "Our Vision"].map((title, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}>
              <Disclosure>
                {({ open }) => (
                  <div className="rounded-lg bg-white p-5 shadow-lg transition-colors duration-300 dark:bg-gray-800">
                    <Disclosure.Button className="flex w-full items-center justify-between text-left text-lg font-semibold text-gray-800 dark:text-gray-100">
                      {title}
                      <ChevronUpIcon
                        className={`size-6 transform transition-transform duration-300 ${
                          open ? "rotate-180" : ""
                        }`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel
                      as={motion.div}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="mt-2 overflow-hidden text-gray-600 dark:text-gray-300">
                      {title === "Our Mission"
                        ? "Our mission is to create an inclusive space where individuals can thrive, innovate, and contribute meaningfully to the global fashion industry."
                        : "Our vision is to be the leading platform that fosters creativity and growth, bridging the gap between passion and opportunity in the fashion industry."}
                    </Disclosure.Panel>
                  </div>
                )}
              </Disclosure>
            </motion.div>
          ))}
        </section>
        <p>
          <Link href="/contact">Get in touch</Link>
        </p>
      </section>
    </Container>
  );
}
