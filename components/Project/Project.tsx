"use client";
import React from "react";
import { projets } from "@/data/projets";
import { motion } from "framer-motion";
import "./Project.scss";
import Image from "next/image";

export default function Project() {
  return (
    <div className="projet">
      {projets.map((projet, index) => {
        return (
          <motion.article
            className="projetCard"
            key={projet.title}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeOut", duration: 0.2, delay: index * 0.15 }}
          >
            <a
              className="projetLink"
              href={`${projet.link}`}
              rel="noreferrer"
              target="_blank"
            >
              <Image
                className="projetImg"
                src={projet.picture}
                alt={projet.title}
                width={320}
                height={158}
              />
            </a>
            <h2 className="projetTitle">{projet.title}</h2>
            <p className="projetDescription">{projet.description}</p>
            <div className="projetTags">
              {projet.tags.map((tag, index) => {
                return (
                  <div className="projetTagsTag" key={index}>
                    {tag}
                  </div>
                );
              })}
            </div>
          </motion.article>
        );
      })}
    </div>
  );
}
