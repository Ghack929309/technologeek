import * as React from "react";
import Head from "next/head";

export const SeoComponent = ({
  title = "TechnoloGeek | Empower Your Unique Vision",
  description = "We're here to turn your digital dreams into reality. Let's talk and bring your ideas to life.",
  image = "/img/logo.svg",
  isHomePage,
}) => {
  return (
    <Head>
      {/* DEFAULT */}
      <title key="title">{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" key="description" content={description} />
      <meta
        name="keywords"
        content="Web Design, Software Development, Keyword3"
      />

      {/* OPEN GRAPH */}
      <meta property="og:type" key="og:type" content="website" />
      <meta
        property="og:url"
        key="og:url"
        content="https://www.technologeek.ca"
      />
      <meta property="og:title" content={title} key="og:title" />
      <meta
        property="og:description"
        key="og:description"
        content={description}
      />
      <meta property="og:image" key="og:image" content="/img/ad.png" />
      <meta
        name="keywords"
        content="Professional Web Design, Responsive Website Design, Custom Web Development, Creative Web Solutions, User-Friendly Design, Mobile-Optimized Websites, SEO-Friendly Design, E-commerce Web Design, Innovative Web Design, Web Design Services in Canada"
      />

      <meta
        name="keywords"
        content="Software Development Services, Custom Software Solutions, Full-Stack Development, Mobile App Development, Software Engineers, Software Development Company, Agile Software Development, Canada Software Developers, Software Development Experts, Software Development Firm"
      />

      <meta
        name="keywords"
        content="Staff Augmentation Services, IT Staffing Solutions, Skilled IT Professionals, Augmented Staffing, Staffing Agency Canada, IT Talent Pool, Staff Augmentation Experts, Flexible Staffing Solutions, Technology Staffing, On-Demand IT Resources"
      />

      <meta
        name="keywords"
        content="Toronto Web Design, Vancouver Software Development, Staff Augmentation in Montreal, IT Staffing Toronto, Software Developers in Calgary, Canada Tech Talent, Edmonton Web Design, Ottawa IT Staffing, Winnipeg Software Solutions, Vancouver IT Augmentation"
      />

      <meta
        name="keywords"
        content="Healthcare Software Development, E-commerce Web Design, Finance Industry Solutions, Technology Staffing for Startups, Government Software Solutions, Education Web Development, Retail IT Solutions, Manufacturing Software Experts, Non-profit Web Design, Real Estate Software Development"
      />

      {/* TWITTER */}
      <meta
        name="twitter:card"
        key="twitter:card"
        content="summary_large_image"
      />
      <meta name="twitter:site" key="twitter:site" content="@technologeek" />
      <meta
        name="twitter:creator"
        key="twitter:creator"
        content="@technologeek"
      />
      {title != null && (
        <meta name="twitter:title" key="twitter:title" content={title} />
      )}
      {description != null && (
        <meta
          name="twitter:description"
          key="twitter:description"
          content={description}
        />
      )}

      <meta name="twitter:image" key="twitter:image" content="/img/ad.png" />
    </Head>
  );
};
