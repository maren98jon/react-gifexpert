import { useState } from "react";
import { AddCategory, GifGrid } from "./componentes";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Formula 1']);

    const onAddCategory = (newCategory) => {

        if (categories.includes(newCategory)) return;
        
        setCategories([newCategory, ...categories])
    }

    return (
        <>
            <h1>GifExpertApp by __MarenDev__</h1>

            <AddCategory
                //setCategories={setCategories}
                onNewCategory={value => onAddCategory(value)}
            />

            {
                categories.map((category) => (
                    <GifGrid 
                        key={category} 
                        category={category}
                    />
                ))
            }
        </>
    )
}
