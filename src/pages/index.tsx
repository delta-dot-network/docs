import React, { useEffect } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

const Redirect: React.FC = () => {
  return (
    <BrowserOnly>
      {() => {
        const newSiteUrl = 'https://docs.repyhlabs.dev';

        // Redirect immediately to new site homepage
        window.location.href = newSiteUrl;

        return (
          <div style={{ padding: '2rem', textAlign: 'center' }}>
            <h1>Site Moved</h1>
            <p>
              This site has moved. If you are not redirected automatically,{' '}
              <a href={newSiteUrl}>click here</a>.
            </p>
          </div>
        );
      }}
    </BrowserOnly>
  );
};

export default Redirect;