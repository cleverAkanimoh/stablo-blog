import { cx } from "@/utils/all";
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
      className={cx(
        "relative inline-flex items-center gap-1 rounded-md   text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 disabled:pointer-events-none disabled:opacity-40 dark:border-gray-500 dark:bg-gray-800 dark:text-gray-300",
        className,
        {
          "bg-white px-3 py-2 pl-4":
            variant === "solid" || variant === "outline",
          "border border-gray-300 ": variant === "outline",
          "bg-red-700": variant === "solid",
          "": variant === "ghost"
        }
      )}>
      <span>{children}</span>
    </Link>
  );
}

export default CustomLink;
