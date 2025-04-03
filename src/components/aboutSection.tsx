"use client";
import { useState } from "react";
import { motion, LayoutGroup } from "framer-motion";
import Image from "next/image";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-4 space-y-1">
        <li>Node.js</li>
        <li>Express</li>
        <li>PostgreSQL</li>
        <li>Sequelize</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-4 space-y-1">
        <li>Fullstack Academy of Code</li>
        <li>University of California, Santa Cruz</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-4 space-y-1">
        <li>AWS Cloud Practitioner</li>
        <li>Google Professional Cloud Developer</li>
      </ul>
    ),
  },
];

export default function AnimatedTabsTailwind() {
  const [activeTab, setActiveTab] = useState(TAB_DATA[0].id);

  return (
    <div className="w-full mx-auto px-4 py-8 md:grid md:grid-cols-2 gap-16 items-center sm:py-16 xl:px-8">
      <div className="w-full h-auto">
        <Image
          alt="about-image"
          src="/about-image.png"
          width={500}
          height={500}
          className="w-full h-auto object-cover rounded"
        />
      </div>
      <div className="space-y-6 h-full">
        <h2 className="text-4xl md:text-5xl font-bold text-white">About Me</h2>
        <p className="text-base lg:text-lg text-gray-300">
          I am a full stack web developer with a passion for creating
          interactive and responsive web applications. I have experience working
          with JavaScript, React, Redux, Node.js, Express, PostgreSQL,
          Sequelize, HTML, CSS, and Git. I am a quick learner and always eager
          to expand my skill set. I enjoy working in teams to build amazing
          applications.
        </p>
        <LayoutGroup>
          <div className="flex flex-wrap gap-4 mt-4 border-b pb-2 border-gray-300">
            {TAB_DATA.map((tab) => (
              <div
                key={tab.id}
                className="relative py-2 cursor-pointer"
                onClick={() => setActiveTab(tab.id)}
              >
                <span
                  className={
                    activeTab === tab.id
                      ? "text-purple-500 font-semibold"
                      : "text-gray-400"
                  }
                >
                  {tab.title}
                </span>
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 right-0 bottom-0 h-1 bg-purple-500 rounded"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </div>
            ))}
          </div>
        </LayoutGroup>
        <div className="p-4 bg-gray-800 rounded shadow">
          {TAB_DATA.find((tab) => tab.id === activeTab)?.content}
        </div>
      </div>
    </div>
  );
}
