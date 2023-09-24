import * as React from "react";
import Head from "next/head";

export const Seo = ({
  title,
  description = "We're here to turn your digital dreams into reality. Let's talk and bring your ideas to life.",
  image = "/img/logo.svg",
  children,
  isHomePage,
}) => (
  <Head>
    {/* DEFAULT */}
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    {title != null && (
      <title key="title">{title + (isHomePage ? "" : " • TechnoloGeek")}</title>
    )}
    {description != null && (
      <meta name="description" key="description" content={description} />
    )}
    <meta property="fb:app_id" content="623268441017527" />
    {/* OPEN GRAPH */}
    <meta property="og:type" key="og:type" content="website" />
    <meta
      property="og:url"
      key="og:url"
      content={`https://www.technologeek.ca/img/how.png`}
    />
    {title != null && (
      <meta property="og:title" content={title} key="og:title" />
    )}
    {description != null && (
      <meta
        property="og:description"
        key="og:description"
        content={description}
      />
    )}

    <meta
      property="og:image"
      key="og:image"
      content={`https://www.technologeek.ca/img/how.png`}
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

    <meta
      name="twitter:image"
      key="twitter:image"
      content={`https://www.technologeek.ca/img/how.png`}
    />
    <meta
      name="google-site-verification"
      content="j1duf8XRaKuZyGvhPd8GkYXHG7LI4GYbIvAXBsqTC9U"
    />
    {children}
  </Head>
);
