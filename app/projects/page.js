"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const projects = [
  {
    title: "BlazeDemo App Test Case",
    description: [
      "A Design and execution of test cases for Blaze, a user-focused e-commerce platform for purchasing tech gadgets.",
      "It covers user authentication, product browsing, cart operations, and order placement",
      "Identifying key issues such as input validation failures and detecting UI inconsistencies across browsers",
      "Achieved 42 passes and reported 6 failures",
      "Contributed to quality assurance for a smooth user experience",
    ],
    image: "/projects/demo_testcase.png",
    link: "https://docs.google.com/spreadsheets/d/1F-lGZ5YBZwtmssnVK7YvuPohKw_ouFdcr2xPmGfemkY/edit",
  },
  {
    title: "TEST PLAN: BLAZE DEMO APP",
    description: [
      "A Test Plan for the design and execution of Blaze, a user-focused e-commerce platform for purchasing tech gadgets.",
      "The plan covers exploratory, functional, and automated testing (using Katalon) across key modules: product listings, user authentication, cart management, checkout, and support features.",
      "Defined test strategies, created detailed test cases, and conducted cross-browser and end-to-end testing using Chrome, Safari, and Edge.",
      "Collaborated with a testing team to track and report defects, manage risks, and deliver a high-quality release within scheduled timelines.",
    ],
    image: "/projects/demo_testplan.png",
    link: "https://docs.google.com/document/d/1PIYws9LR45XZt4MeBBLpse_bSNMBaKUccyqkQANWdAo/edit",
  },
];

export default function ProjectsPage() {
  return (
    <main className="bg-[#0F1624] min-h-screen text-white px-6 md:px-16 py-10">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold mb-10 text-center"
      >
        My Projects
      </motion.h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-[#1e293b] rounded-xl overflow-hidden shadow-lg"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={500}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{project.title}</h2>

              {project.description.map((paragraph, index) => (
                <p key={index} className="text-gray-300 text-sm mb-4">
                  {paragraph}
                </p>
              ))}

              <Link
                href={project.link}
                target="_blank"
                className="inline-block bg-red-500 hover:bg-red-600 text-white text-sm px-4 py-2 rounded"
              >
                View Project
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
