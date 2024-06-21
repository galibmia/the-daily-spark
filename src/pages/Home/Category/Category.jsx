import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';

const Category = () => {

    const { id } = useParams()

    const categoryData = useLoaderData()
    return (
        <div>
            <h1>This category news {categoryData.length}</h1>
            {
                categoryData.map(news => <NewsCard
                    key={news._id}
                    news={news}
                ></NewsCard>)
            }
        </div>
    );
};

export default Category;