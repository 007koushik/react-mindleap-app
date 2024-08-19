import React from "react";
import { BsChatQuoteFill } from "react-icons/bs";
import review1 from "../assets/review1.webp";
import review2 from "../assets/review2.webp";
import { motion } from "framer-motion";
import { fadeIn } from "../utilis/animationVariants";

const testimonials = [
  {
    name: "Jane Doe",
    location: "New York, NY",
    review:
      "This service has been life-changing for me. The mental wellness resources and personalized support have made a huge difference in my daily life. Highly recommended!",
    image: review1,
  },
  {
    name: "John Smith",
    location: "Los Angeles, CA",
    review:
      "I’ve tried many wellness programs, but this one stands out. The expert webinars and one-on-one coaching have been incredibly valuable. I feel more balanced and focused than ever before.",
    image: review2,
  },
];

const Testimonial = () => {
  return (
    <div id="testimonial" className="bg-[#f7f8fc] p-12">
      <div className="container mx-auto">
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold font-secondary mb-3">
            What Our Clients Say
          </h1>
          <p className="text-lg mb-12 md:w-1/2 mx-auto">
            Hear from some of our satisfied clients about how our service have
            positively impacted their lives and well-being.
          </p>
        </motion.div>

        <div className="flex flex-col md:w-4/5 mx-auto md:flex-row md:gap-12 gap-8">
          {testimonials.map((test, index) => (
            <motion.div
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              key={index}
              className="relative bg-white rounded-lg p-6 flex-1"
            >
              <div className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2">
                <BsChatQuoteFill className="size-12 text-primary" />
              </div>
              <div className="flex flex-col space-y-3 mb-4">
                <p className="text-lg mb-2">{test.review}</p>
                <div className="flex gap-1">
                  <img
                    src={test.image}
                    alt="review img"
                    className="size-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <p className="font-semibold">{test.name}</p>
                    <p className="text-gray-600">{test.location}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;