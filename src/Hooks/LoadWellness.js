import { useState } from "react";
import { useEffect } from "react";

const useWellness = () => {
    const [wellness, setWellness] = useState([]);
    useEffect(() => {
        fetch('./FakeData/wellness.json')
            .then(res => res.json())
            .then(data => setWellness(data))
    }, [])

    return [wellness]
};
export default useWellness;