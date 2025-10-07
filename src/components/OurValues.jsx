import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { X } from "lucide-react";
import { toast } from "sonner";

const OurValues = () => {
  const [hovered, setHovered] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    title: "",
    email: "",
    message: ""
  });

  const images = [
    "https://cdn.prod.website-files.com/684f6af04ca7b75961204bcc/685160358a973978e2743583_Frame%206.jpg",
    "https://cdn.prod.website-files.com/684f6af04ca7b75961204bcc/6851603575b55252b361cbf5_Frame%208.jpg",
    "https://cdn.prod.website-files.com/684f6af04ca7b75961204bcc/6851603416b3f621bf1d007f_Frame%202.jpg",
    "https://cdn.prod.website-files.com/684f6af04ca7b75961204bcc/68516035f83aceb423b038d8_Frame%203.jpg",
    "https://cdn.prod.website-files.com/684f6af04ca7b75961204bcc/6851603436b47c85ae2e2ab6_Frame%205.jpg",
    "https://cdn.prod.website-files.com/684f6af04ca7b75961204bcc/685160359e227e272b42d98d_Frame%204.jpg",
    "https://cdn.prod.website-files.com/684f6af04ca7b75961204bcc/68516035eb0233ad4acd2496_Frame%201.jpg",
    "https://cdn.prod.website-files.com/684f6af04ca7b75961204bcc/68516035a3b863be972db6d3_Frame%2010.jpg"
  ];

  const headingRef = useRef(null);
  const inView = useInView(headingRef, { once: true, amount: 0.4 });
  const headingText = "Why-Choose-Us";
  const charVariants = {
    hidden: { y: 50, rotateX: 90, opacity: 0 },
    visible: { y: 0, rotateX: 0, opacity: 1 },
  };

  // Body scroll lock when modal is open
  // Scroll lock with correct restore
  useEffect(() => {
    let scrollY;
    if (modalOpen) {
      scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.width = "100%";
    } else {
      // Restore scroll
      const top = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
      if (top) {
        window.scrollTo(0, parseInt(top.replace("-", "").replace("px", "")));
      }
    }

    return () => {
      // Cleanup on unmount
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
    };
  }, [modalOpen]);


  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = () => {
    const { title, email, message } = formData;
    if (!title || !email || !message) {
      toast.error("Please fill all fields!");
      return;
    }
    toast.success("Query Sent!");
    // Clear form
    setFormData({ title: "", email: "", message: "" });
    setModalOpen(false);
  };

  return (
    <div className="bg-[#FEFCF6] px-4 sm:px-6 md:px-10 relative">
      <h1 className="text-center text-black inter uppercase">Start Building</h1>

      {/* Animated Heading */}
      <h1
        ref={headingRef}
        className="uppercase mor-n font-bold pt-6 flex justify-center text-[#25211D] text-center text-[120px] sm:text-[150px] md:text-[200px] leading-none"
      >
        {headingText.split("").map((char, index) => (
          <motion.span
            key={index}
            variants={charVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ delay: index * 0.1, duration: 0.8, ease: "easeOut" }}
          >
            {char}
          </motion.span>
        ))}
      </h1>

      {/* <p className="inter text-[#34302B] text-center max-w-3xl mx-auto mt-4">
        Ready to bring your vision to life? Whether it’s a home, a workspace, or a public space, we’re here to design environments that inspire, function, and endure. Let’s start your project together.
      </p> */}
      <div className="grid grid-cols-2 gap-2 inter text-[#34302B] mt-4">
        <p>• Experience in residential, joinery and commercial projects.</p>
        <p>• Uk-approved warranties for peace of mind.</p>
        <p>• A fully unified design and build service with everything managed in-house.</p>
        <p>• A collaborative, personalised approach that ensures project feels truly bespoke.</p>
      </div>

      {/* CTA Button */}
      <div className="flex justify-center mt-10 pb-10">
        <div
          className="rounded-full border border-slate-500"
          style={{ width: "220px", height: "60px", padding: "2px" }}
        >
          <motion.div
            className="bg-[#25211D] w-full h-full rounded-full flex items-center justify-center uppercase text-white text-md overflow-hidden cursor-pointer"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            animate={{ scale: hovered ? 0.96 : 1 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            onClick={() => setModalOpen(true)}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={hovered ? "hover" : "normal"}
                initial={{ rotate: 12, y: -40, opacity: 0 }}
                animate={{ rotate: 0, y: 0, opacity: 1 }}
                exit={{ rotate: -12, y: -10, opacity: 0 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
              >
                START A PROJECT
              </motion.span>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Black Overlay + Blur */}
            <div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setModalOpen(false)}
            ></div>

            {/* Modal Content */}
            <motion.div
              className="bg-white rounded-lg w-11/12 max-w-md p-6 z-50 flex flex-col gap-4 relative shadow-lg"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {/* Close Button */}
              <button
                className="absolute cursor-pointer transition-all duration-300 top-3 right-3 text-gray-500 hover:text-gray-800 z-50"
                onClick={() => setModalOpen(false)}
              >
                <X size={28} />
              </button>

              <h2 className="text-xl font-bold text-[#25211D]">Start Your Project</h2>
              <input
                type="text"
                name="title"
                placeholder="Title"
                value={formData.title}
                onChange={handleChange}
                className="border border-gray-300 rounded px-3 py-2 w-full outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="border border-gray-300 rounded px-3 py-2 w-full outline-none"
              />
              <textarea
                name="message"
                placeholder="Message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="border border-gray-300 rounded px-3 py-2 w-full outline-none resize-none"
              />
              <button
                className="bg-[#25211D] text-white rounded px-4 py-2 mt-2 hover:bg-[#3c3a39] cursor-pointer transition-all duration-300"
                onClick={handleSubmit}
              >
                Send Query
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default OurValues;
