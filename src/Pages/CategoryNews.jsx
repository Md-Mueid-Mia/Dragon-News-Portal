import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../components/NewsCard';

const CategoryNews = () => {
    const {data: news} = useLoaderData();
    return (
        <div>
            <h2 className='font-semibold mb-3'>Dragon News Home</h2>
            <p className='text-gray-400 text-sm'>{news.length} News Found On This Category</p>
            <div className="">
                {news.map((item, idx) => <NewsCard key={idx} news={item} />)}
            </div>
        </div>
    );
};

export default CategoryNews;