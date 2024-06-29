"use client";
import React from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const Tabs = () => {
  const searcParams = useSearchParams();
  const genre = searcParams.get("genre");
  //console.log(genre, "genre");
  const tabs = [
    {
      name: "Popular",
      url: "popular",
    },
    {
      name: "Latest",
      url: "latest",
    },
    {
      name: "UpComing",
      url: "upcoming",
    },
  ];
  return (
    <div className="p-5 m-5 bg-gray-100 dark:bg-gray-900 flex items-center justify-center gap-7">
      {tabs.map((tab, i) => (
        <Link
          key={i}
          className={`cursor-pointer hover:opacity-80 transition-opacity ${
            tab.url === genre
              ? " underline underline-offset-8 text-amber-600 "
              : ""
          }`}
          href={`/?genre=${tab.url}`}
        >
          {tab.name}
        </Link>
      ))}
    </div>
  );
};

export default Tabs;
