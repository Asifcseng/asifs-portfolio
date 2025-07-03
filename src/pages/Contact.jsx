import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="mt-5  py-20 px-4 max-w-2xl mx-auto text-center border-solid border-2 border-black bg-[#28AE60]"
    >
      <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
      <p className="text-muted-foreground mb-10 text-white">
        Feel free to reach out via email or connect with me on social media.
      </p>

      <div className="space-y-6 text-lg">
        <div className="flex items-center justify-center gap-3">
          <FaEnvelope className="text-primary w-5 h-5" />
          <a
            href="mailto:asifshaikh.cse@gmail.com"
            className="text-primary underline"
          >
            asifshaikh.cse@gmail.com
          </a>
        </div>

        <div className="flex items-center justify-center gap-3">
          <FaLinkedin className="text-primary w-5 h-5" />
          <a
            href="https://www.linkedin.com/in/asif-shaikh-41263718a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline"
          >
            https://www.linkedin.com/in/asif-shaikh-41263718a/
          </a>
        </div>

        <div className="flex items-center justify-center gap-3">
          <FaGithub className="text-primary w-5 h-5" />
          <a
            href="https://github.com/Asifcseng"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline"
          >
            https://github.com/Asifcseng
          </a>
        </div>
      </div>
    </section>
  );
}
