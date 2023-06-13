import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_cogdoxe",
        "template_ftircpf",
        {
          from_name: form.name,
          to_name: "Shutter",
          from_email: form.email,
          to_email: "phakin.buddha@gmail.com",
          message: form.message,
        },
        "zvfH2sNpq_6JMS1DJ"
      )
      .then(
        () => {
          setLoading(false);
          alert(
            "Thank you for contacting me. I will get back to you as soon as possible."
          );

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);

          console.log(error);

          alert("Something went wrong");
        }
      );
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[1] bg-primary p-9 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-secondary font-medium mb-4">
              Your Name <a className="text-[#7c0404]">*</a>
            </span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-fifth text-primary rounded-lg outlined-none border-none font-medium"
              required
            />
          </label>
          <label className="flex flex-col">
            <span className="text-secondary font-medium mb-4">
              Your Email <a className="text-[#7c0404]">*</a>
            </span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-fifth text-primary rounded-lg outlined-none border-none font-medium"
              required
            />
          </label>
          <label className="flex flex-col">
            <span className="text-secondary font-medium mb-4">
              Your Message <a className="text-[#7c0404]">*</a>
            </span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What's do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-fifth text-primary rounded-lg outlined-none border-none font-medium"
              required
            />
          </label>
          <button
            className="bg-secondary py-3 px-8 outline-none w-fit text-primary font-bold shadow-md shadow-primary rounded-xl"
            type="submit"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
