
import React from 'react';
import { Helmet } from 'react-helmet';

const Title = () => {
  return (
    <Helmet>
      {/* Basic meta tags */}
      <title>Steve's - Portfolio</title>
      <meta name="A place to display my skills and abilities" content="Steve's Portfolio - Web Developer" />

    </Helmet>
  );
};

export default Title;