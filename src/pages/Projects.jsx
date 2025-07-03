import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const allProjects = [
  {
    title: "Shoe Store Website",
    description: "A shoe store website built with react and redux",

    category: "Web",
    link: "https://assignment-5-g6jqb6gyv-asif-shaikhs-projects-31572702.vercel.app/",
  },
  {
    title: "Currency Converter Website",
    description: "Currency Conversion site with react and redux",

    category: "Web",
    link: "https://currency-converter-ivory-pi.vercel.app/",
  },
  {
    title: "Weather Dashboard",
    description: "Live weather app using OpenWeather API and React.",

    category: "Web",
    link: "https://weather-application-pi-two.vercel.app/",
  },
  {
    title: "Finance Tracker",
    description: "finance tracker using React with router and context api",
    link: "https://finance-tracker-phi-ten.vercel.app/",
  },
  {
    title: "Food Fusion",
    description:
      "Website of Food and adding them in Cart using React and Tailwind",
    link: "https://assignment-8-seven-xi.vercel.app/",
  },
];

const categories = ["All", "Web", "App"];

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-16 px-4 max-w-6xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-8">Projects</h2>

      <div className="flex justify-center gap-4 mb-8 flex-wrap">
        {categories.map((cat) => (
          <Button
            key={cat}
            variant={filter === cat ? "default" : "outline"}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </Button>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card className="bg-[#28AE60] text-white text-left hover:shadow-xl transition">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-white text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <Button className="bg-black" variant="outline" size="sm">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Project
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
