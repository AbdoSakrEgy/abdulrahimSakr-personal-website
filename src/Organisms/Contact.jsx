import React from "react";
import { Icon } from "@iconify/react";

const Contact = () => {
  return (
    <div className="mt-[15vh] scroll-mt-20" id="contactSection">
      <div className="text-center text-3xl font-bold text-gray-500">
        CONTACT
      </div>

      <div className="flex rounded-lg overflow-hidden mt-10 py-14 px-32 shadow-md bg-white">
        <div className="flex flex-col justify-center w-1/2">
          <div className="text-5xl text-gray-400">GET IN TOUCH</div>
          <div className="pt-10 ">
            Fill in the form to start a conversation.
          </div>
          <div className="pt-10 font-semibold text-gray-500">
            <Icon icon="bytesize:location" className="inline-block w-4 h-4 mr-3" />
            Zefta,Egypt
          </div>
          <div className="pt-10 font-semibold text-gray-500">
            <Icon icon="streamline:mail-send-envelope-envelope-email-message-unopened-sealed-close" className="inline-block w-4 h-4 mr-3" />
            myemail@gmail.com
          </div>
          <div className="pt-10 font-semibold text-gray-500">
            <Icon icon="solar:phone-outline" className="inline-block w-4 h-4 mr-3" />
            01007137667
          </div>
        </div>

        <div className="flex flex-col items-start w-1/2">
          <input
            type="text"
            placeholder="Your Name"
            className="input input-bordered w-full focus:outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="input input-bordered w-full mt-10 focus:outline-none"
          />
          <input
            type="text"
            placeholder="Subject"
            className="input input-bordered w-full mt-10 focus:outline-none"
          />
          <textarea
            className="textarea textarea-bordered w-full mt-10 focus:outline-none"
            placeholder="Message"
          ></textarea>
          <button className="btn w-full mt-10 hover:bg-[#359cfc] bg-blue-500 text-white">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
