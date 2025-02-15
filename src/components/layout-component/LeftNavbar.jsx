import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const LeftNavbar = () => {
    const [categories, setCategories] = useState([]);
    useEffect(()=>{
        fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(response => response.json())
        .then(data => setCategories(data.data.news_category
        ))
    }, [])
    return (
        <div>
            <h2 className="font-semibold mb-5">All Category ({categories.length})</h2>
        <div className='flex flex-col gap-4'>
            {categories.map((category, index) => <NavLink to={`/category/${category.category_id}`} className='btn bg-base-100' key={index}>{category.category_name}</NavLink>)}
        </div>
        </div>
    );
};

export default LeftNavbar;