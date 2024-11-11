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

        Be the first to transform your client relationship—sign up now for exclusive updates!
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
            time="September 2024"
            place="Toronto, Canada"
            info="Personal trainers often face significant challenges when managing client relationships. Currently, the industry primarily relies on Excel spreadsheets and the existing tools are not a holistic solution. None of the solutions were solving for a recurring problem."
          />
          <Details
            type="Market Research"
            time="October 2024 "
            place="Toronto, Canada"
            info="Our team conducted rigorous primary research. Through conversations with personal trainers, trainees, surveys, and an in-depth analysis of existing tools we uncovered a prime business opportunity."
          />
          <Details
            type="Solution"
            time="October 2024"
            place="Toronto, Canada"
            info="We are building a CRM tool for personal trainers, fitness coaches and wellness professionals that will be a 360 solution for their entire operation. Our tool will have a particular focus on scalability and limiting turnover."
          />
          <Details
            type="Building the MVP"
            time="October 2024"
            place="Toronto, Canada"
            info="Development of our CRM platform has begun!"
          />


          <SignUpToBeAmongTheFirst type="Sign Up for Early Access!"
            time="Coming Soon"
            place="Online" />
        </ul>
      </div>
    </div>
  );
};

export default Journey;
