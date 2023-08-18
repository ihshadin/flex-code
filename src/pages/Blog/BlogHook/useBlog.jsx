import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const useBlog = () => {
    const [blogs, setBlogs] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const url = "http://localhost:5000/blog";
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