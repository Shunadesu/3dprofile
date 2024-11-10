import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { style } from "../style";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
const Contact = () => {
  return (
    <div
      className={`xl:mt-12 w-full flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={style.sectionSubText}>Get in touch</p>
        <h3 className={style.sectionHeadText}>Contact.</h3>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")