import { ArrowUpRight } from "lucide-react";
import React from "react";

const ContactPage = () => {
  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-black font-mono text-3xl sm:text-4xl">Contact Me</h1>
        <p className="text-gray-500 mt-2 text-sm sm:text-base font-mono">
          If you have any questions, feel free to reach out!
        </p>
      </div>

      {/* Form Card */}
      <div className="bg-white  shadow-lg p-8 sm:p-12 mt-10 max-w-2xl w-full mx-auto">
        <div className="space-y-8">
          {/* Row 1: Name and Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col">
              <label className="font-mono text-lg text-gray-800 mb-3">
                Name
              </label>
              <input
                type="text"
                placeholder="What's your name?"
                className="bg-transparent border-b border-gray-300 pb-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gray-900 transition-colors"
                required
              />
            </div>

            <div className="flex flex-col">
              <label className="font-mono text-lg text-gray-800 mb-3">
                Email
              </label>
              <input
                type="email"
                placeholder="What's your email?"
                className="bg-transparent border-b border-gray-300 pb-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gray-900 transition-colors"
                required
              />
            </div>
          </div>

          {/* Row 2: Phone and Subject */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col">
              <label className="font-mono text-lg text-gray-800 mb-3">
                Phone
              </label>
              <input
                type="tel"
                placeholder="What's your phone?"
                className="bg-transparent border-b border-gray-300 pb-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gray-900 transition-colors"
              />
            </div>

            <div className="flex flex-col">
              <label className="font-mono text-lg text-gray-800 mb-3">
                Subject
              </label>
              <input
                type="text"
                placeholder="How can I help?"
                className="bg-transparent border-b border-gray-300 pb-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gray-900 transition-colors"
                required
              />
            </div>
          </div>

          {/* Message */}
          <div className="flex flex-col">
            <label className="font-mono text-lg text-gray-800 mb-3">
              Leave us a message
            </label>
            <textarea
              placeholder="Hi there! I would like to get in touch with you to inquiry about a project."
              className="bg-transparent border-b border-gray-300 pb-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gray-900 transition-colors resize-none"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="flex pt-4">
            <button className=" text-gray-700 rounded-lg font-mono">
              Send message
              <ArrowUpRight className="inline-block w-4 h-4 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
