import { useState } from 'react'
import { AddCategory, GifGrid } from './components';

const GifExpertApp = () => {
    const apiKey = 'u4GJzuos7f94bx5utY2PZ8dV9TswX66c';

    const [categories, setCategories] = useState(['Naruto']);

    const onAddCategory = (event) => {
        if ( categories.includes(event) ) return;
        setCategories([...categories, event])
        // setCategories( cat => [...cat, 'Dragon ball'])
    }


    return (
        <>
            {/* Titulo */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory 
                onNewCategory={ event => onAddCategory(event) }
            />

            {/* Listado de Gifs */}
            {categories.map( (category) => 
                <GifGrid key={category} category={category}/>
            )}

            {/* Gif Item */}

        </>
    )
}

export default GifExpertApp
