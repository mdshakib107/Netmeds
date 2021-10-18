import { useState } from "react";
import { useEffect } from "react";

const useMedicine = () => {
    const [medicine, setMedicine] = useState([]);
    useEffect(() => {
        fetch('./FakeData/medicin.json')
            .then(res => res.json())
            .then(data => setMedicine(data))
    }, [])

    return [medicine]
};
export default useMedicine;