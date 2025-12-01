import React, { useEffect } from 'react';

const Redirect: React.FC = () => {
  const newSiteUrl = 'https://docs.repyhlabs.dev';

  useEffect(() => {
    // Redirect immediately on component mount
    window.location.href = newSiteUrl;
  }, []);

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="refresh" content={`0; url=${newSiteUrl}`} />
        <link rel="canonical" href={newSiteUrl} />
        <title>Page Moved</title>
      </head>
      <body>
        <p>
          This site has moved. If you are not redirected automatically,{' '}
          <a href={newSiteUrl}>click here</a>.
        </p>
      </body>
    </html>
  );
};

export default Redirect;