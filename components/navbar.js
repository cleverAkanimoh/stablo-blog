"use client";

import Container from "@/components/container";
import { nyscLogo, siteLogo } from "@/utils/config";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import cx from "clsx";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

const logoUrl = siteLogo;

const menus = {
  left: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" }
  ],
  right: [
    { label: "Archive", href: "/archive" },
    { label: "Activities", href: "/activity" }
  ]
};

export default function Navbar() {
  const mobileMenu = [...menus.left, ...menus.right];

  const renderMenuItems = (menuItems, isMobile = false) =>
    menuItems.map((item, index) => (
      <Fragment key={`${item.label}${index}`}>
        {item.children && item.children.length > 0 ? (
          <DropdownMenu
            menu={item}
            items={item.children}
            mobile={isMobile}
          />
        ) : (
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20
            }}>
            <Link
              href={item.href}
              className={cx(
                isMobile ? "w-full px-5 py-2" : "px-5 py-2",
                "text-sm font-medium text-gray-600 hover:text-red-500 dark:text-gray-400"
              )}
              target={item.external ? "_blank" : ""}
              rel={item.external ? "noopener" : ""}>
              {item.label}
              {item.badge && (
                <span className="ml-2 rounded bg-red-100 px-2 py-0.5 text-xs font-semibold text-red-600 dark:bg-cyan-200 dark:text-red-800">
                  {item.badge}
                </span>
              )}
            </Link>
          </motion.div>
        )}
      </Fragment>
    ));

  return (
    <Container>
      <nav>
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex flex-wrap justify-between md:flex-nowrap md:gap-10">
                <div className="order-1 hidden w-full flex-col items-center justify-start md:order-none md:flex md:w-auto md:flex-1 md:flex-row md:justify-end">
                  {renderMenuItems(menus.left)}
                </div>
                <div className="flex w-full items-center justify-between md:w-auto">
                  <div className="flex items-center gap-2 divide-x">
                    <Link href="/">
                      <Image
                        src={logoUrl}
                        alt="Logo"
                        priority={true}
                        width="50"
                        height="50"
                        className="size-10"
                      />
                    </Link>

                    <Image
                      src={nyscLogo}
                      width="50"
                      height="50"
                      alt="Logo"
                      priority={true}
                      className="size-10"
                    />
                  </div>
                  <Disclosure.Button
                    aria-label="Toggle Menu"
                    className="ml-auto rounded-md px-2 py-1 text-gray-500 focus:text-red-500 focus:outline-none dark:text-gray-300 md:hidden">
                    <motion.svg
                      className="h-6 w-6 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      initial={{ rotate: 0 }}
                      animate={{ rotate: open ? 180 : 0 }}
                      transition={{ duration: 0.3 }}>
                      {open ? (
                        <motion.path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                        />
                      ) : (
                        <motion.path
                          fillRule="evenodd"
                          d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2z"
                        />
                      )}
                    </motion.svg>
                  </Disclosure.Button>
                </div>
                <div className="order-2 hidden w-full flex-col items-center justify-start md:order-none md:flex md:w-auto md:flex-1 md:flex-row">
                  {renderMenuItems(menus.right)}
                </div>
              </div>
              <Disclosure.Panel>
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}>
                  <div className="order-2 -ml-4 mt-4 flex w-full flex-col items-center justify-start md:hidden">
                    {renderMenuItems(mobileMenu, true)}
                  </div>
                </motion.div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </nav>
    </Container>
  );
}

const DropdownMenu = ({ menu, items, mobile }) => {
  return (
    <Menu
      as="div"
      className={cx("relative text-left", mobile && "w-full")}>
      {({ open }) => (
        <>
          <Menu.Button
            className={cx(
              "flex items-center gap-x-1 rounded-md px-5 py-2 text-sm font-medium outline-none transition-all focus:outline-none focus-visible:text-indigo-500 focus-visible:ring-1 dark:focus-visible:bg-gray-800",
              open
                ? "text-red-500 hover:text-red-500"
                : "text-gray-600 dark:text-gray-400",
              mobile ? "w-full px-4 py-2" : "inline-block px-4 py-2"
            )}>
            <span>{menu.label}</span>
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: open ? 180 : 0 }}
              transition={{ duration: 0.3 }}>
              <ChevronDownIcon className="mt-0.5 h-4 w-4" />
            </motion.div>
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="lg:transition lg:ease-out lg:duration-100"
            enterFrom="lg:transform lg:opacity-0 lg:scale-95"
            enterTo="lg:transform lg:opacity-100 lg:scale-100"
            leave="lg:transition lg:ease-in lg:duration-75"
            leaveFrom="lg:transform lg:opacity-100 lg:scale-100"
            leaveTo="lg:transform lg:opacity-0 lg:scale-95">
            <Menu.Items
              className={cx(
                "z-20 origin-top-left rounded-md focus:outline-none lg:absolute lg:left-0 lg:w-56",
                !mobile && "bg-white shadow-lg dark:bg-gray-800"
              )}>
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}>
                <div className={cx(!mobile && "py-3")}>
                  {items.map((item, index) => (
                    <Menu.Item as="div" key={`${item.title}${index}`}>
                      {({ active }) => (
                        <Link
                          href={item?.path ? item.path : "#"}
                          className={cx(
                            "flex items-center space-x-2 px-5 py-2 text-sm lg:space-x-4",
                            active
                              ? "text-red-500"
                              : "text-gray-700 hover:text-red-500 focus:text-red-500 dark:text-gray-300"
                          )}>
                          <span>{item.title}</span>
                        </Link>
                      )}
                    </Menu.Item>
                  ))}
                </div>
              </motion.div>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
};
