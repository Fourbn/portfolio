import React from 'react';
import { Helmet } from 'react-helmet';

const Head = () => {
  return (
    <Helmet>
      <html lang="en" amp />
      <title>CodeTurkie</title>
      <meta
        name="description"
        content="Philip Turkiewicz is a Toronto-based front-end web developer who specializes in creating sleek, accessible, and performant client-facing websites using the JAMstack (React, Gatsby, Contentful, Sanity, Netlify)."
      />
      <link rel="icon" type="image/png" sizes="32x32" href="/images/icon.png"></link>
    </Helmet>
  );
};

export default Head;
