"use client";
import { motion } from "framer-motion";

const PROJECT_DATA = [
  {
    title: "Project One",
    description: "Описание проекта номер один.",
    image: "/images/project1.jpg",
    link: "https://example.com/project1",
  },
  {
    title: "Project Two",
    description: "Описание проекта номер два.",
    image: "/images/project2.jpg",
    link: "https://example.com/project2",
  },
  {
    title: "Project Three",
    description: "Описание проекта номер три.",
    image: "/images/project3.jpg",
    link: "https://example.com/project3",
  },
];

export default function ProjectsSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">Мои проекты</h2>
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
            className="block rounded overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="mt-2 text-gray-600">{project.description}</p>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}
