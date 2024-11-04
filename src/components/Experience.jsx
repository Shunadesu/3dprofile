import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

import {motion} from 'framer-motion'

import { style } from '../style'
import { experiences } from '../constants'
import { SectionWrapper } from '../hoc'
import { textVariant } from '../utils/motion'

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={style.sectionSubText}>Introduction</p>
        <h2 className={style.sectionHeadText}>Overview</h2>
      </motion.div>
    </>
  )
}

export default Experience