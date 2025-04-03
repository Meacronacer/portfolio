"use client";
import { motion } from "framer-motion";

const PROJECT_DATA = [
  {
    title: "Project One",
    description: "Описание проекта номер один.",
    image: "/projects/1.png",
    link: "https://example.com/project1",
  },
  {
    title: "Project Two",
    description: "Описание проекта номер два.",
    image: "/projects/3.png",
    link: "https://example.com/project2",
  },
  {
    title: "Project Three",
    description: "Описание проекта номер три.",
    image: "/projects/4.png",
    link: "https://example.com/project3",
  },
  {
    title: "Project Four",
    description: "Описание проекта номер чотыри.",
    image: "/projects/5.png",
    link: "https://example.com/project3",
  },
];

export default function ProjectsSection() {
  return (
    <section className="w-full p-8">
      <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {PROJECT_DATA.map((project, index) => (
          <motion.a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded overflow-hidden shadow-lg hover:shadow-xl hover:scale-105 ease-in-out duration-300 transition-all"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 md:h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-white/75">{project.description}</p>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}
