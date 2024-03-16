"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import "./HomeSection.scss";

const HomeSection = () => {
  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 50 }}
      transition={{ ease: "easeIn", duration: 0.5 }}
      className="mainContainer"
    >
      <div className="mainContainerTitle">
        <div className="mainContainerTitlePhoto">
          <Image
            src="/simon.jpg"
            alt="profile"
            width={154}
            height={154}
            priority={true}
          />
        </div>
        <div className="mainContainerTitleText">
          <h2>
            Simon Florysiak <br />
            Développeur Front-end
          </h2>
        </div>
        <Link className="btn effect" href="/works" title="Learn More">
          Mon Portfolio
        </Link>
      </div>
      <div className="mainContainerContact">
        <Link
          target="_blank"
          href="https://github.com/FlorysiakSimon"
          className="link gitLink"
        >
          <span>github</span>
        </Link>
        <Link
          target="_blank"
          href="https://www.linkedin.com/in/simon-florysiak-782759143/"
          className="link linkedinLink"
        >
          <span>linkedin</span>
        </Link>
        <Link
          target="_blank"
          href="mailto:simon.florysiak@gmail.com"
          className="link mail"
        >
          <span>mail</span>
        </Link>
      </div>
    </motion.div>
  );
};

export default HomeSection;
