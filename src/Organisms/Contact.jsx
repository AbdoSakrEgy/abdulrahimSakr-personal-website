import React from "react";
import { Icon } from "@iconify/react";

const Contact = () => {
  return (
    <div className="my-28">
      <div className="text-center text-3xl font-bold mb-8 text-gray-500">
        CONTACT
      </div>

      <div className="flex justify-between rounded-lg overflow-hidden py-14 px-32 bg-white">
        <div className="flex flex-col justify-center w-1/2">
          <div className="pb-9 text-5xl text-gray-400">GET IN TOUCH</div>
          <div className="pb-9 ">Fill in the form to start a conversation.</div>
          <div className="pb-9 font-semibold text-gray-500">
            <Icon icon="bytesize:location" className="inline-block w-4 mr-3" />
            Zefta,Egypt
          </div>
          <div className="pb-9 font-semibold text-gray-500">
            <Icon icon="eva:email-outline" className="inline-block w-4 mr-3" />
            myemail@gmail.com
          </div>
        </div>

        <div className="flex flex-col items-start w-1/2">
          <input
            type="text"
            placeholder="Your Name"
            className="input input-bordered w-full mb-7 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="input input-bordered w-full mb-7 focus:outline-none"
          />
          <input
            type="text"
            placeholder="Subject"
            className="input input-bordered w-full mb-7 focus:outline-none"
          />
          <textarea
            className="textarea textarea-bordered w-full mb-7 focus:outline-none"
            placeholder="Message"
          ></textarea>
          <button className="btn w-full">Button</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
