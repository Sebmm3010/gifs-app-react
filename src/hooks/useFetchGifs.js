import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";



export const useFetchGifs = ( category ) => {

    const [imgs, setImgs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImgs = async () => {
        const newImgs = await getGifs(category);
        setImgs(newImgs);
        setIsLoading(false);
    }
    useEffect(() => {
        getImgs();
    }, []);

    return {
        imgs,
        isLoading
    }
}
