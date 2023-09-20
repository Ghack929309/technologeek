import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import React from "react";

export const Heading = ({ children, as = "h1", size = "4xl" }) => {
  const Tag = as;

  return (
    <Tag
      className={`text-${size} mb-1 font-bold leading-snug tracking-tight text-gray-800 lg:text-${size} lg:leading-tight xl:leading-tight dark:text-gray-300`}>
      {children}
    </Tag>
  );
};

const Section = ({ children }) => {
  return <section className="py-4">{children}</section>;
};

const Privacy = () => {
  return (
    <>
      <Link
        href="/"
        className="flex hover:cursor-pointer hover:opacity-80 fixed top-0 left-20 items-center justify-center gap-x-2 mt-8 -mx-12">
        <ArrowLeftIcon className="w-8 h-8" />
        <span>Back</span>
      </Link>
      <div className="flex flex-col mt-16 items-start justify-center px-12 max-w-3xl mx-auto">
        <Heading>Our Privacy & Policy</Heading>
        <p className="text-slate-500">Last updated: 2023-09-16</p>

        <Section>
          <Heading as="h3" size="md">
            1. Introduction
          </Heading>
          <p>
            Technologeek ("we," "our," or "us") is committed to safeguarding
            your privacy. This Privacy Policy outlines how we collect, use,
            disclose, and protect your personal information when you use our
            website or services. By accessing or using our website, you consent
            to the practices described in this policy.
          </p>
        </Section>

        <Section>
          <Heading as="h3" size="md">
            2. Information We Collect
          </Heading>

          <p>We may collect the following types of information:</p>
          <Section>
            <Heading as="h3" size="md">
              2.1. Personal Information
            </Heading>
            <ul>
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Company name (if applicable)</li>
              <li>Other information you provide voluntarily</li>
            </ul>
          </Section>

          <Section>
            <Heading as="h3" size="md">
              2.2. Non-Personal Information
            </Heading>
            <ul>
              <li>
                Usage data (e.g., IP address, browser type, referring pages)
              </li>
              <li>Cookies and similar tracking technologies (see Section 5)</li>
            </ul>
          </Section>
        </Section>

        <Section>
          <Heading as="h3" size="md">
            3. How We Use Your Information
          </Heading>
          <p>We may use your information for the following purposes:</p>
          <ul>
            <li>To provide, maintain, and improve our services</li>
            <li>
              To send you newsletters, updates, and marketing materials (you can
              opt-out at any time)
            </li>
            <li>To respond to your inquiries and provide customer support</li>
            <li>
              To protect our rights, property, or safety and that of our users
            </li>
          </ul>
        </Section>

        <Section>
          <Heading as="h3" size="md">
            4. How We Share Your Information
          </Heading>
          <p>We may share your information with:</p>
          <ul>
            <li>
              Service providers, business partners, and contractors necessary
              for the operation of our services
            </li>
            <li>
              Legal authorities when required by law or to protect our rights
            </li>
          </ul>
        </Section>

        <Section>
          <Heading as="h3" size="md">
            5. Cookies and Tracking Technologies
          </Heading>
          <p>
            We use cookies and similar tracking technologies to enhance your
            experience on our website. You can control cookies through your
            browser settings, but disabling them may affect your ability to use
            certain features of our site.
          </p>
        </Section>

        <Section>
          <Heading as="h3" size="md">
            6. Security
          </Heading>
          <p>
            We take reasonable measures to protect your information from
            unauthorized access, disclosure, or alteration. However, no data
            transmission over the internet is entirely secure, and we cannot
            guarantee the absolute security of your information.
          </p>
        </Section>

        <Section>
          <Heading as="h3" size="md">
            7. Links to Third-Party Websites
          </Heading>
          <p>
            Our website may contain links to third-party websites. We are not
            responsible for the privacy practices or content of these websites.
            Please review the privacy policies of those websites before
            providing any personal information.
          </p>
        </Section>

        <Section>
          <Heading as="h3" size="md">
            8. Changes to this Privacy Policy
          </Heading>
          <p>
            We may update this Privacy Policy from time to time to reflect
            changes in our practices. The updated policy will be posted on our
            website, and the date of the latest revision will be indicated.
          </p>
        </Section>

        <Section>
          <Heading as="h3" size="md">
            9. Contact Us
          </Heading>
          <p>
            If you have any questions, concerns, or requests regarding this
            Privacy Policy, please contact us at [contact email or address].
          </p>

          <p>
            By using our website or services, you acknowledge that you have read
            and agree to this Privacy Policy.
          </p>
        </Section>
      </div>
    </>
  );
};
export default Privacy;
