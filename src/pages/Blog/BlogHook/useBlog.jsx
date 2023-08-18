import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const useBlog = () => {
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url = "https://flex-code-server.vercel.app/blog";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
        setLoading(false);
      });
  }, []);

  return [blogs, loading];
};

export default useBlog;