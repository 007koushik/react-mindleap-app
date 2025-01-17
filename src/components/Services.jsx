import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import serviceimg1 from "../assets/service1.webp";
import serviceimg2 from "../assets/service2.webp";
import serviceimg3 from "../assets/service3.webp";
import serviceimg4 from "../assets/service4.webp";
import { motion } from "framer-motion";
import { fadeIn } from "../utilis/animationVariants";

const Services = () => {
  return (
    <div id="services" className="bg-[#f7f8fc]">
      <div className="pt-28 px-4 container mx-auto">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="text-center space-y-5"
        >
          <h2 className="text-4xl font-bold font-secondary text-heroBg">
            What Can We Do Together
          </h2>
          <p className="md:w-1/2 mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius in
            fugit atque ad nisi dicta?
          </p>
        </motion.div>

        {/* services category */}
        <div className="py-12 md:w-4/5 mx-auto">
          <Tabs>
            <motion.TabList
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex flex-wrap justify-between items-center md:gap-8 gap-4"
            >
              <Tab>Couple Counseling</Tab>
              <Tab>Parenting Skills</Tab>
              <Tab>Feeling Stuck</Tab>
              <Tab>Self-Confdence</Tab>
            </motion.TabList>

            <TabPanel>
              <motion.div
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="flex flex-col md:flex-row gap-8 mt-8"
              >
                <div className="md:w-1/2 bg-white rounded-lg p-12 font-secondary">
                  <h3 className="text-3xl font-semibold text-primary mb-4">
                    Couple Counseling
                  </h3>
                  <p className="mb-8">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                    labore, nesciunt necessitatibus fugit cupiditate, ab sunt
                    possimus quas illum molestias, beatae quis mollitia suscipit
                    laboriosam.
                  </p>
                  <h4 className="text-xl font-medium text-black mb-4">
                    Benefits
                  </h4>
                  <ul className="list-disc list-inside space-y-3">
                    <li>Understanding Reletionship Dynamic</li>
                    <li>Understanding Reletionship Dynamic</li>
                    <li>Understanding Reletionship Dynamic</li>
                  </ul>
                </div>

                <div className="md:w-1/2">
                  <img
                    src={serviceimg1}
                    alt=""
                    className="w-full h-auto rounded-2xl object-cover"
                  />
                </div>
              </motion.div>
            </TabPanel>

            <TabPanel>
              <motion.div
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="flex flex-col md:flex-row gap-8 mt-8"
              >
                <div className="md:w-1/2 bg-white rounded-lg p-12 font-secondary">
                  <h3 className="text-3xl font-semibold text-primary mb-4">
                    Parenting Skills
                  </h3>
                  <p className="mb-8">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                    labore, nesciunt necessitatibus fugit cupiditate, ab sunt
                    possimus quas illum molestias, beatae quis mollitia suscipit
                    laboriosam.
                  </p>
                  <h4 className="text-xl font-medium text-black mb-4">
                    Benefits
                  </h4>
                  <ul className="list-disc list-inside space-y-3">
                    <li>Understanding Reletionship Dynamic</li>
                    <li>Understanding Reletionship Dynamic</li>
                    <li>Understanding Reletionship Dynamic</li>
                  </ul>
                </div>

                <div className="md:w-1/2">
                  <img
                    src={serviceimg2}
                    alt=""
                    className="w-full h-auto rounded-2xl object-cover"
                  />
                </div>
              </motion.div>
            </TabPanel>

            <TabPanel>
              <motion.div
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="flex flex-col md:flex-row gap-8 mt-8"
              >
                <div className="md:w-1/2 bg-white rounded-lg p-12 font-secondary">
                  <h3 className="text-3xl font-semibold text-primary mb-4">
                    Feeling Stuck
                  </h3>
                  <p className="mb-8">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                    labore, nesciunt necessitatibus fugit cupiditate, ab sunt
                    possimus quas illum molestias, beatae quis mollitia suscipit
                    laboriosam.
                  </p>
                  <h4 className="text-xl font-medium text-black mb-4">
                    Benefits
                  </h4>
                  <ul className="list-disc list-inside space-y-3">
                    <li>Understanding Reletionship Dynamic</li>
                    <li>Understanding Reletionship Dynamic</li>
                    <li>Understanding Reletionship Dynamic</li>
                  </ul>
                </div>

                <div className="md:w-1/2">
                  <img
                    src={serviceimg3}
                    alt=""
                    className="w-full h-auto rounded-2xl object-cover"
                  />
                </div>
              </motion.div>
            </TabPanel>

            <TabPanel>
              <motion.div
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="flex flex-col md:flex-row gap-8 mt-8"
              >
                <div className="md:w-1/2 bg-white rounded-lg p-12 font-secondary">
                  <h3 className="text-3xl font-semibold text-primary mb-4">
                    Self-Confdence
                  </h3>
                  <p className="mb-8">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                    labore, nesciunt necessitatibus fugit cupiditate, ab sunt
                    possimus quas illum molestias, beatae quis mollitia suscipit
                    laboriosam.
                  </p>
                  <h4 className="text-xl font-medium text-black mb-4">
                    Benefits
                  </h4>
                  <ul className="list-disc list-inside space-y-3">
                    <li>Understanding Reletionship Dynamic</li>
                    <li>Understanding Reletionship Dynamic</li>
                    <li>Understanding Reletionship Dynamic</li>
                  </ul>
                </div>

                <div className="md:w-1/2">
                  <img
                    src={serviceimg4}
                    alt=""
                    className="w-full h-auto rounded-2xl object-cover"
                  />
                </div>
              </motion.div>
            </TabPanel>
            
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Services;
