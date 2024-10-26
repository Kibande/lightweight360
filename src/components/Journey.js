import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import AboutIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <AboutIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">{type}</h3>
        <span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">
          {time} | {place}
        </span>
        <p className="font-medium w-full md:text-sm">{info}</p>
      </motion.div>
    </li>
  );
};


const SignUpToBeAmongTheFirst = ({ type, time, place }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <AboutIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">{type}</h3>
        <span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">
          {time} | {place}
        </span>
        <div className="font-medium w-full md:text-sm">

        Be the first to transform your client relationships – sign up for exclusive updates!
          <div className="flex w-full items-start justify-between md:flex-col">
            <div className="mt-2 flex items-center self-start lg:self-center">
              <input type="text" placeholder="Email" className={`flex items-center rounded-lg border-2 border-solid  p-2.5 px-6 text-lg font-semibold
            `} />

            </div>
            <div className="mt-2 flex items-center self-start lg:self-center">
              <button className={`flex items-center rounded-lg border-2 border-solid bg-dark p-2.5 px-6 text-lg font-semibold
            capitalize text-light 
             `}>Sign up </button>
            </div>
          </div>


        </div>
      </motion.div>
    </li>
  );
};

const Journey = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div>

      <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
        <motion.div
          className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-dark  origin-top rounded-full dark:bg-primaryDark dark:shadow-3xl"
          style={{ scaleY: scrollYProgress }}
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            type="Problem Identification"
            time="2024-September"
            place="Canada - Toronto"
            info="Decentralized approach to organizing client data: progress, meal plan, diet plan. Using Excel spreadsheets limits scalability and effectively manages existing relationships for existing Personal Trainers."
          />
          <Details
            type="Market Research"
            time="2024-October"
            place="Canada - Toronto"
            info="We talked to personal trainers, conducted surveys and looked at existing CRM tools for personal trainers. Identified gaps in the current tools."
          />
          <Details
            type="Solution"
            time="2024-October"
            place="Canada - Toronto"
            info="Build a CRM tool for personal trainers and nutritionists that provide a holistic solution from a-z of their engagement with their client. With a particular focus on providing a value added feature to help scalability."
          />
          <Details
            type="Builing MVP"
            time="2024-October"
            place="Canada - Toronto"
            info="We started working on our new personal trainer CRM platform, designed to help tariners stream line client management, track progress, and 
            implify scheduling, all in one easy-to-use application."
          />


          <SignUpToBeAmongTheFirst type="Sign Up!"
            time="Coming Soon"
            place="Online" />
        </ul>
      </div>
    </div>
  );
};

export default Journey;
