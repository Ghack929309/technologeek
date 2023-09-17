import React from "react";
import { useContactForm } from "../utils/useContactForm";
import { PhoneArrowDownLeftIcon } from "@heroicons/react/24/solid";
import { Form } from "./form";

const Contact = () => {
  const {
    onSubmit,
    register,
    handleSubmit,
    reset,
    errors,
    isSubmitSuccessful,
    isSubmitting,
    setMessage,
    message,
    isSuccess,
    setIsSuccess,
  } = useContactForm();
  return (
    <>
      <div id="contact-us" className="container my-24 mx-auto md:px-6">
        <div className="text-lg font-bold tracking-wider text-indigo-600 text-center">
          Ready to start your project ?
        </div>
        <h2 className="text-center mt-3 mb-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
          Contact Us
        </h2>
        <section className="mb-32">
          <div className="relative h-[300px] overflow-hidden bg-cover bg-[50%] bg-no-repeat bg-[url('https://mdbcdn.b-cdn.net/img/new/textures/full/284.jpg')]"></div>
          <div className="container px-6 md:px-12">
            <div className="block rounded-lg bg-[hsla(0,0%,100%,0.8)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,5%,0.7)] dark:shadow-black/20 md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px]">
              <div className="flex flex-wrap">
                <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-6/12 lg:px-6">
                  {!isSubmitSuccessful && (
                    <Form
                      handleSubmit={handleSubmit}
                      register={register}
                      onSubmit={onSubmit}
                      errors={errors}
                      isSubmitting={isSubmitting}
                    />
                  )}
                  {isSubmitSuccessful && isSuccess && (
                    <>
                      <div className="flex flex-col items-center justify-center h-full text-center text-white rounded-md">
                        <svg
                          width="60"
                          height="60"
                          className="text-green-300"
                          viewBox="0 0 100 100"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M26.6666 50L46.6666 66.6667L73.3333 33.3333M50 96.6667C43.8716 96.6667 37.8033 95.4596 32.1414 93.1144C26.4796 90.7692 21.3351 87.3317 17.0017 82.9983C12.6683 78.6649 9.23082 73.5204 6.8856 67.8586C4.54038 62.1967 3.33331 56.1283 3.33331 50C3.33331 43.8716 4.54038 37.8033 6.8856 32.1414C9.23082 26.4796 12.6683 21.3351 17.0017 17.0017C21.3351 12.6683 26.4796 9.23084 32.1414 6.88562C37.8033 4.5404 43.8716 3.33333 50 3.33333C62.3767 3.33333 74.2466 8.24998 82.9983 17.0017C91.75 25.7534 96.6666 37.6232 96.6666 50C96.6666 62.3768 91.75 74.2466 82.9983 82.9983C74.2466 91.75 62.3767 96.6667 50 96.6667Z"
                            stroke="currentColor"
                            strokeWidth="3"
                          />
                        </svg>
                        <h3 className="py-5 text-xl text-green-500">Message sent successfully</h3>
                        <p className="text-gray-700 md:px-3">{message}</p>
                        <button
                          className="mt-6 text-indigo-600 focus:outline-none"
                          onClick={() => reset()}
                        >
                          Go back
                        </button>
                      </div>
                    </>
                  )}
                </div>
                <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12">
                  <div className="flex flex-wrap">
                    <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
                      <div className="flex items-start">
                        <div className="shrink-0">
                          <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                            <PhoneArrowDownLeftIcon className="h-6 w-6" />
                          </div>
                        </div>
                        <div className="ml-6 grow">
                          <p className="mb-2 font-bold dark:text-white">Contact Info</p>
                          <a
                            href="mailto:contact@technologeek.ca"
                            className="text-neutral-500 hover:text-indigo-600 dark:hover:text-indigo-600 dark:text-neutral-200 mb-1.5"
                          >
                            contact@technologeek.ca
                          </a>
                          <div className="flex flex-col gap-y-1.5">
                            <a
                              href="tel:+1514-703-73-28"
                              className="text-neutral-500 hover:text-indigo-600 dark:hover:text-indigo-600 dark:text-neutral-200"
                            >
                              +1 514-703-73-28
                            </a>
                            <a
                              href="tel:+1514-236-88-62"
                              className="text-neutral-500 hover:text-indigo-600 dark:hover:text-indigo-600 dark:text-neutral-200"
                            >
                              +1 514-236-88-62
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default Contact;
