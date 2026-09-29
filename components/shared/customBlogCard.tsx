// React Imports
import React from "react";

// Next Imports
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

// Lib Imports
import { cn } from "@/lib/utils";

// Utility Imports
import { formattedDate } from "../util/formatter";

// ======================================================
// TYPES
// ======================================================

interface BlogItem {
  _id: string;
  featuredImage: string | StaticImageData;
  author?: string;
  date?: string;
  title: string;
  description: string;
  featured: boolean;
  slug: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
  _v?: number;
}

interface CustomBlogCardProps {
  blogItem: BlogItem;
  width?: number;
  height?: number;
  hideParagraph?: boolean;
}

// ======================================================
// COMPONENT
// ======================================================

export default function CustomBlogCard({
  blogItem,
  width = 405,
  height = 228,
  hideParagraph = false,
}: CustomBlogCardProps) {
  return (
    <Link
      href={`/blogs/${blogItem.slug}`}
      className={`group flex w-fit flex-col gap-6 rounded-xl bg-background hover:cursor-pointer ${
        hideParagraph ? "glass-gradient" : ""
      }`}
    >
      <div className="w-full">
        <Image
          src={blogItem.featuredImage}
          alt={blogItem.title || "Blog image"}
          width={width}
          height={height}
          className={`w-full object-cover ${
            hideParagraph
              ? "rounded-tl-xl rounded-tr-xl"
              : "rounded-xl"
          }`}
        />
      </div>

      <div
        className={`flex h-full w-full flex-col justify-between gap-5 ${
          hideParagraph ? "px-5 pb-4" : ""
        }`}
      >
        <div className="flex w-full flex-col gap-2">
          <span className="text-sm text-dark_mode-300">
            {formattedDate(blogItem.createdAt)}
          </span>

          <h3 className="hyi-h4 cursor-pointer">
            {blogItem.title}
          </h3>

          <p
            className={cn(
              "line-clamp-3 text-base text-dark_mode-300",
              hideParagraph && "hidden"
            )}
          >
            {blogItem.description}
          </p>
        </div>

        <div
          className={cn(
            "flex w-fit items-center gap-2",
            hideParagraph && "hidden"
          )}
        >
          {blogItem.tags.map((tag, index) => (
            <span
              key={`${tag}-${index}`}
              className="rounded-full px-2.5 py-0.5 text-sm font-medium text-dark_mode-300 glass-gradient"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}