import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";
import { Loading } from "./Loading";


export const GifGrid = ({ category }) => {

    const { imgs, isLoading }= useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
            <Loading isLoading={isLoading}/>
            <div className="card-grid">
                {
                    imgs.map((img) => (
                        <GifItem
                            key={img.id}
                            {...img}
                        />
                    ))
                }
            </div>
        </>
    )
}
