"use client";
import { useActionState } from "react";
import { CiMail } from "react-icons/ci";
import Button from "./ui/Button";
import { sendEmail } from "../actions";

const initialState = {
  success: false,
  message: "",
};

const Contact = () => {
  const [state, formAction, isPending] = useActionState(
    sendEmail,
    initialState
  );

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
          >
            <CiMail className="mr-2" />
            kaanpmete@gmail.com
          </Button>
        </div>

        <div className="mt-8">
          <p className="mb-4">
            Or if you prefer minimal effort, you can just type your message
            below:
          </p>

          <form action={formAction} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="w-full px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-md bg-white dark:bg-black text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-gray-400 dark:focus:border-gray-500 transition-colors duration-100"
            />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              className="w-full px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-md bg-white dark:bg-black text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-gray-400 dark:focus:border-gray-500 transition-colors duration-100"
            />
            <textarea
              name="message"
              rows={4}
              placeholder="Your message..."
              className="w-full px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-md bg-white dark:bg-black text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 resize-none focus:outline-none focus:border-gray-400 dark:focus:border-gray-500 transition-colors duration-100"
            />
            <Button type="submit" disabled={isPending}>
              {isPending ? "Sending..." : "Send Message"}
            </Button>
          </form>
          {state?.message && (
            <div
              className={`mb-4 mt-4 rounded-md text-sm ${
                state.success
                  ? "text-green-600 dark:text-green-400"
                  : "text-red-600 dark:text-red-400"
              }`}
            >
              {state?.message}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
