import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Wonder Woman']);

    return (
        <div>
            <h2 className = 'animate__animated animate__bounce'>GifExpertApp</h2>
            <AddCategory setCategory = { setCategories }/>
            <hr />
            <ol>
                {
                    categories.map( category => (
                        <GifGrid 
                            key = { category }
                            category = { category }/>
                    ))
                }
            </ol>
        </div>
    )
}
