import React from "react";
import { useContactForm } from "../hooks/useContactForm";
import { PhoneArrowDownLeftIcon } from "@heroicons/react/24/solid";
import { Form } from "./form";

const Contact = ({ t, showHeader = true }) => {
  const {
    onSubmit,
    register,
    handleSubmit,
    reset,
    errors,
    isSubmitSuccessful,
    isSubmitting,
    message,
    isSuccess,
    s,
  } = useContactForm();
  return (
    <>
      <div id="contact-us" className="container my-24 mx-auto md:px-6">
        {showHeader && (
          <>
            <div className="text-lg font-bold tracking-wider text-teal-600 text-center">
              {t("sections.contact.pretitle")}
            </div>
            <h2 className="text-center mt-3 mb-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-gray-300">
              {t("sections.contact.title")}
            </h2>
          </>
        )}
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
                        <h3 className="py-5 text-xl text-green-500">
                          {t("sections.contact.successMessage")}
                        </h3>
                        <p className="text-gray-700 md:px-3">{message}</p>
                        <button
                          className="mt-6 text-teal-600 focus:outline-none"
                          onClick={() => reset()}
                        >
                          {t("sections.contact.back")}
                        </button>
                      </div>
                    </>
                  )}
                  {isSubmitSuccessful && !isSuccess && (
                    <div className="flex flex-col items-center justify-center h-full text-center text-white rounded-md">
                      <svg
                        width="60"
                        height="60"
                        viewBox="0 0 97 97"
                        className="text-red-400"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M27.9995 69C43.6205 53.379 52.3786 44.621 67.9995 29M26.8077 29L67.9995 69M48.2189 95C42.0906 95 36.0222 93.7929 30.3604 91.4477C24.6985 89.1025 19.554 85.6651 15.2206 81.3316C10.8872 76.9982 7.44975 71.8538 5.10454 66.1919C2.75932 60.53 1.55225 54.4617 1.55225 48.3333C1.55225 42.205 2.75932 36.1366 5.10454 30.4748C7.44975 24.8129 10.8872 19.6684 15.2206 15.335C19.554 11.0016 24.6985 7.56418 30.3604 5.21896C36.0222 2.87374 42.0906 1.66667 48.2189 1.66667C60.5957 1.66667 72.4655 6.58333 81.2172 15.335C89.9689 24.0867 94.8856 35.9566 94.8856 48.3333C94.8856 60.7101 89.9689 72.58 81.2172 81.3316C72.4655 90.0833 60.5957 95 48.2189 95Z"
                          stroke="CurrentColor"
                          strokeWidth="3"
                        />
                      </svg>

                      <h3 className="text-xl text-red-400 py-7">
                        {t("sections.contact.faildMessage")}
                      </h3>
                      <p className="text-gray-700 md:px-3">{message}</p>
                      <button
                        className="mt-6 text-teal-600 focus:outline-none"
                        onClick={() => reset()}
                      >
                        {t("sections.contact.back")}
                      </button>
                    </div>
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
                          <p className="mb-2 font-bold dark:text-gray-300">Contact Info</p>
                          <a
                            href="mailto:contact@technologeek.ca"
                            className="text-neutral-500 hover:text-teal-600 dark:hover:text-teal-600 dark:text-neutral-200 mb-1.5"
                          >
                            contact@technologeek.ca
                          </a>
                          <div className="flex flex-col gap-y-1.5">
                            <a
                              href="tel:+1514-703-73-28"
                              className="text-neutral-500 hover:text-teal-600 dark:hover:text-teal-600 dark:text-neutral-200"
                            >
                              +1 514-703-73-28
                            </a>
                            <a
                              href="tel:+1514-236-88-62"
                              className="text-neutral-500 hover:text-teal-600 dark:hover:text-teal-600 dark:text-neutral-200"
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
