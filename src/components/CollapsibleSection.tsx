"use client";

import * as React from "react";

export default function CollapsibleSection({
  header,
  children,
}: {
  header: React.ReactNode;
  children: React.ReactElement<{ children?: React.ReactNode }>;
}) {
  const [isCollapsed, setIsCollapsed] = React.useState(false);

  return (
    <section className="space-y-3 my-6 text-[#444] ">
      <header
        className="text-2xl tracking-tight leading-7 font-semibold text-[#222] cursor-pointer flex items-center gap-3 group"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        <span> {header}</span>
        <span
          className={`text-gray-400 transition-all ease-in-out delay-75 group-hover:text-gray-300 ${
            isCollapsed ? "rotate-75 " : ""
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 4v16h16" />
            <path d="m4 20 7-7" />
          </svg>
        </span>
      </header>
      {!isCollapsed && children}
    </section>
  );
}
