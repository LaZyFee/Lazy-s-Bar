import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Meal from '../SingleMeal/Meal';
import BrandCarousel from '../BrandCarousel/BrandCarousel';

const Meals = ({ countIncrease }) => {
    const meals = useLoaderData().categories;
    return (
        <div>
            <div className='container mx-auto my-5'>
                <h1 className='text-3xl font-bold m-4'>Welcome to my Resturant, we have <span className='text-orange-500'>{meals.length} </span> types of Meals</h1>
                <BrandCarousel></BrandCarousel>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-4 lg:gap-10 mx-40 lg:mx-10'>
                {
                    meals.map(meal => <Meal key={meal.idCategory} meal={meal} countIncrease={countIncrease}></Meal>)
                }
            </div>
        </div>
    );
};

export default Meals;