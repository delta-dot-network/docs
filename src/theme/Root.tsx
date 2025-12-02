import React, { useEffect } from 'react';

const NEW_SITE_URL = 'https://docs.repyhlabs.dev';

export default function Root({ children }) {
    useEffect(() => {
        // Only redirect if we're not already on the new site
        if (window.location.hostname !== 'docs.repyhlabs.dev') {
            window.location.href = NEW_SITE_URL;
        }
    }, []);

    return <>{children}</>;
}