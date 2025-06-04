"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { type SanityDocument } from "next-sanity";
import { motion, useInView } from "framer-motion";

import { fetchPosts } from "@/lib/fetch";

export default function DisplayProjects() {
  const [posts, setPosts] = useState<SanityDocument[]>([]);
  const [loading, setLoading] = useState(true);
  const containerRef = useRef(null);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const fetchedPosts = await fetchPosts();
        setPosts(fetchedPosts);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-lg font-medium">Loading projects...</p>
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-lg font-medium">No projects found</p>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="grid grid-cols-1 sm:grid-cols-2 gap-8">
      {posts.map((post, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: index * 0.1,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          viewport={{
            once: true,
            amount: 0.3,
            margin: "-50px",
          }}
        >
          <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card bg-white/20 shadow-lg ring-1 ring-black/5 backdrop-blur-sm w-full h-auto rounded-4xl p-6">
              <CardItem translateZ="50" className="text-xl font-bold">
                {post.title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-sm lg:text-sm max-w-sm mt-2"
              >
                {post.desc}
              </CardItem>
              <CardItem
                translateZ="100"
                rotateX={20}
                rotateZ={-10}
                className="w-full mt-4"
              >
                <Image
                  src={post.imageUrl}
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt={post.title}
                />
              </CardItem>

              {post.frameworks && post.frameworks.length > 0 && (
                <CardItem translateZ="40" className="mt-4">
                  <div className="flex flex-wrap gap-2">
                    {post.frameworks.map((framework: string, idx: number) => (
                      <span
                        key={idx}
                        className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded"
                      >
                        {framework}
                      </span>
                    ))}
                  </div>
                </CardItem>
              )}

              <div className="flex justify-between items-center mt-8">
                {post.githubUrl && (
                  <CardItem
                    translateZ={20}
                    translateX={-20}
                    as="button"
                    className="px-4 py-2 rounded-xl text-xs font-normal"
                  >
                    <a
                      href={post.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Code →
                    </a>
                  </CardItem>
                )}

                {post.liveUrl && (
                  <CardItem
                    translateZ={20}
                    translateX={20}
                    as="button"
                    className="px-4 py-2 rounded-xl bg-black dark:bg.white dark:text-black text-white text-xs font-bold"
                  >
                    <a
                      href={post.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                  </CardItem>
                )}
              </div>
            </CardBody>
          </CardContainer>
        </motion.div>
      ))}
    </div>
  );
}
