import { cx } from "@/utils/all";
import clsx from "clsx";
import Link from "next/link";
import React from "react";

function CustomLink({
  href = "",
  className,
  children,
  variant = "ghost"
}) {
  return (
    <Link
      href={href}
      className={clsx(
        "relative inline-flex items-center gap-1 rounded-md   text-sm font-medium transition-all duration-300 focus:z-20 disabled:pointer-events-none  disabled:opacity-40 dark:border-gray-500 dark:text-gray-300",
        className,
        {
          "px-3 py-2 pl-4":
            variant === "solid" || variant === "outline",
          "border border-gray-300 text-gray-500 hover:bg-gray-50/10":
            variant === "outline",
          "bg-red-700 text-white hover:bg-red-400":
            variant === "solid",
          "": variant === "ghost"
        }
      )}>
      <span>{children}</span>
    </Link>
  );
}

export default CustomLink;
