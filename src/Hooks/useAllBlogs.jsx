import React, { useEffect, useState } from 'react';
import useAxiosNormal from './useAxiosNormal';

const useAllBlogs = () => {
    const [axiosNormal] = useAxiosNormal();
    const [allBlogs, setAllBlogs] = useState([]);
    const [blogsLength, setBlogsLength] = useState(0);
    const [isLoading, setIsLoading] = useState(true)

    // Pagination
    const [currentPage, setCurrentPage] = useState(0)
    const itemsPerPage = 6;
    const totalPages = Math.ceil(blogsLength / itemsPerPage);

    useEffect(() => {
        axiosNormal.get(`/blog?page=${currentPage}&itemsPerPage=${itemsPerPage}`)
            .then(data => {
                setAllBlogs(data.data)
                setBlogsLength(data.totalCount)
                setIsLoading(false)
            })
    }, [currentPage, itemsPerPage]);

    return { allBlogs, currentPage, setCurrentPage, totalPages, isLoading, blogsLength };
};

export default useAllBlogs;