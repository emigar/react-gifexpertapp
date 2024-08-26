import { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifExpertApp = () => {

    //const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];

    const [categories, setCategories] = useState(['One Punch' /*, 'Samurai X', 'Dragon Ball'*/]);

    const handleAdd = (nuevoItem) => {
        setCategories([nuevoItem, ...categories]);
    }

    return(
        <>
            <h2>GifExpertApp</h2>

            {/* Contiene el form con el input que recibe la nueva categoria por ingresar */}
            <AddCategory setCategories={ handleAdd } />

            <hr />

            <ol>
                {/* Cada grupo tiene su propio GifGrid */}
                {
                    categories.map((category) => {
                        return (<GifGrid key={category} category={category} />);
                    })
                }
            </ol>
        </>
    );
}

export default GifExpertApp;
