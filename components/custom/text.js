"use client";

import { cx } from "@/utils/all";

function Text({className, children }) {
  return (
    <p className={cx("dark:text-gray-300", className)}>
      {children}
    </p>
  );
}

export default Text;
