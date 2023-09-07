import React, { useRef, useState } from "react";
import { Icon } from "@iconify/react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_liixjez",
        "template_xk75z1a",
        form.current,
        "U3EaDKEsaUAFsBpLL"
      )
      .then(
        (result) => {
          alert("message sent");
          document.getElementById("contactform").reset();
        },
        (error) => {
          alert(error.text);
        }
      );
  };

  return (
    <main
      className="mt-[15vh] scroll-mt-20 lg:w-[1000px] mx-5"
      id="contactSection"
    >
      <div className="text-center text-3xl font-bold text-gray-500">
        CONTACT
      </div>

      <div className="flex rounded-lg overflow-hidden mt-10 py-14 px-32 shadow-md bg-white resp-container">
        <div className="flex flex-col justify-center w-1/2">
          <div className="text-5xl text-gray-400 resp-ContactSec1">
            GET IN TOUCH
          </div>
          <div className="pt-10 resp-ContactSec2">
            Fill in the form to start a conversation.
          </div>
          <div className="pt-10 font-semibold text-gray-500 resp-ContactSec3">
            <Icon
              icon="bytesize:location"
              className="inline-block w-4 h-4 mr-3"
            />
            Zefta , Gharbia , Egypt
          </div>
          <div className="pt-10 font-semibold text-gray-500 resp-ContactSec4">
            <Icon
              icon="streamline:mail-send-envelope-envelope-email-message-unopened-sealed-close"
              className="inline-block w-4 h-4 mr-3"
            />
            abdulrahimsakr01@gmail.com
          </div>
          <div className="pt-10 font-semibold text-gray-500 resp-ContactSec5">
            <Icon
              icon="solar:phone-outline"
              className="inline-block w-4 h-4 mr-3"
            />
            01007137667
          </div>
        </div>

        <form
          id="contactform"
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col items-start w-1/2 resp-ContactSec6"
        >
          <input
            name="user_name"
            type="text"
            placeholder="Your Name"
            className="input input-bordered w-full focus:outline-none"
            required
          />
          <input
            name="user_email"
            type="email"
            placeholder="Your Email"
            className="input input-bordered w-full mt-10 focus:outline-none"
            required
          />
          {/* <input
            type="text"
            placeholder="Subject"
            className="input input-bordered w-full mt-10 focus:outline-none"
            required
          /> */}
          <textarea
            name="message"
            className="textarea textarea-bordered w-full mt-10 focus:outline-none"
            placeholder="Message"
            required
          ></textarea>
          <button
            type="submit"
            className="btn w-full mt-10 hover:bg-[#359cfc] bg-blue-500 text-white"
          >
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
};

export default Contact;
