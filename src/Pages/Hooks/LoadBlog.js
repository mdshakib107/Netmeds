import { useState } from "react";
import { useEffect } from "react";

const useBlog = () => {
    const [blog, setBlog] = useState([]);
    useEffect(() => {
        fetch('./FakeData/blog.json')
            .then(res => res.json())
            .then(data => setBlog(data))
    }, [])

    return [blog]
};
export default useBlog;