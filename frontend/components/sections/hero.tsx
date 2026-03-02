"use client";

import { motion } from "framer-motion";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <PageWrapper>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.15 },
          },
        }}
        className="text-center space-y-8"
      >
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
          className="h1"
        >
          Full Stack Developer & Future Data Engineer
        </motion.h1>

        <motion.p
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
          className="p-muted max-w-2xl mx-auto"
        >
          I build scalable web systems with clean architecture and
          production-grade design.
        </motion.p>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
          className="flex justify-center gap-4"
        >
          <Button>View Projects</Button>
          <Button variant="outline">Download Resume</Button>
        </motion.div>
      </motion.div>
    </PageWrapper>
  );
}