// components/Sitemap.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Sitemap = () => {
  const [sitemapContent, setSitemapContent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSitemap = async () => {
      try {
        const { data } = await axios.get('https://audioone-assets.s3.us-west-1.amazonaws.com/news-sitemap.xml');
        setSitemapContent(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching sitemap:', error);
        setLoading(false);
      }
    };

    fetchSitemap();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <pre>{sitemapContent}</pre>
    </div>
  );
};

export default Sitemap;
