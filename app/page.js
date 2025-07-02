"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";



export default function Home() {

  return (
    <main>
      {/* Hero Section */}
      <section className="grid md:grid-cols-2 items-center px-6 md:px-16 py-10 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-4xl font-bold">
            Hello<span className="text-red-500">.</span>
          </h2>
          <p className="text-xl md:text-2xl mt-2">
            I&apos;m <span className="text-white font-medium">Marian</span>
          </p>
          <p className="text-3xl md:text-5xl font-extrabold mt-4">
            Software Quality Assurance Engineer
          </p>

          <div className="flex gap-4 mt-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
            >
              <Link href="/contact">Got a project?</Link>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="border border-red-500 py-2 px-4 rounded hover:bg-red-500 hover:text-white"
            >
              <a href="" target="_blank" rel="noopener noreferrer">
                {" "}
                My resume{" "}
              </a>
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative flex justify-center"
        >
          <Image
            src="https://media.licdn.com/dms/image/v2/D4D03AQFNaVqeF_vxzw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1718565730181?e=1756944000&v=beta&t=75ds-LuMc9-7FtxkL7k5xsWEQK6KgaqykbkI-Eq0nhQ"
            alt="Marian"
            width={300}
            height={300}
            className="relative z-10 rounded-xl"
          />
        </motion.div>
      </section>

      {/* Tech Stack */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-wrap justify-center gap-6 text-sm text-gray-400 px-6 py-4 md:py-6 border-t border-[#1f2937]"
      >
        {[
          "Postman",
          "Katalon",
          "Swagger",
          "Google Sheet",
          "Google Doc",
          "Agile",
          "Waterfall",
        ].map((tech) => (
          <span key={tech} className="hover:text-white">
            {tech}
          </span>
        ))}
      </motion.div>

      {/* About Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="px-6 md:px-16 py-10"
        id="about"
      >
        <h3 className="text-2xl md:text-3xl font-bold mb-4">About me</h3>
        <p className="text-gray-300 leading-relaxed">
          I am an enthusiastic QA Tester with hands-on experience in test
          execution, bug reporting, and exploratory testing. Experience spans
          manual and automation testing across e-commerce and healthcare,
          utilising tools such as Postman, Katalon, and Swagger. Skilled in
          spotting issues early to support quality delivery, quick learning and
          working with teams.
        </p>
      </motion.section>
    </main>
  );
}
