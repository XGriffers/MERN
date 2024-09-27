// src/components/SEO.js
import React from 'react';
import { Helmet } from 'react-helmet';

const Title = () => {
  return (
    <Helmet>
      {/* Basic meta tags */}
      <title>Steve's - Portfolio</title>
      <meta name="description" content="Portfolio of Your Name - Web Developer" />

      {/* Preload fonts or other assets */}
      <link rel="preload" href="/fonts/your-font.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />

    </Helmet>
  );
};

export default Title;