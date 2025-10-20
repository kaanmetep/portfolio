import React from "react";
import { CiMail } from "react-icons/ci";
import Button from "./ui/Button";
import { BatteryLow } from "lucide-react";
const Contact = () => {
  return (
    <div className="text-gray-700 dark:text-gray-300 lg:text-base text-sm">
      <div>
        <div className="flex items-center gap-2">
          <p>My personal email:</p>
          <Button
            onClick={() =>
              window.open(
                "https://mail.google.com/mail/?view=cm&fs=1&to=kaanpmete@gmail.com",
                "_blank"
              )
            }
            className="inline-flex items-center text-gray-900 dark:text-gray-300 font-semibold hover:text-gray-700 dark:hover:text-gray-100 transition-colors duration-100 cursor-pointer"
          >
            <CiMail className="mr-2" />
            kaanpmete@gmail.com
          </Button>
        </div>

        <div className="mt-8">
          <div className="flex items-center gap-2 mb-4">
            <BatteryLow className="size-4" />
            <p>
              If you prefer minimal effort, you can just type your message
              below:
            </p>
          </div>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Your name"
              className="w-full px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-md bg-white dark:bg-black text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-gray-400 dark:focus:border-gray-500 transition-colors duration-100"
            />
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-md bg-white dark:bg-black text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-gray-400 dark:focus:border-gray-500 transition-colors duration-100"
            />
            <textarea
              rows={4}
              placeholder="Your message..."
              className="w-full px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-md bg-white dark:bg-black text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 resize-none focus:outline-none focus:border-gray-400 dark:focus:border-gray-500 transition-colors duration-100"
            />
            <Button>Send Message</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
