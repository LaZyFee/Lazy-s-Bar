import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Cocktaildetails = () => {
    const drnk = useLoaderData()
    console.log(drnk)
    const { strDrink, strDrinkThumb, strCategory, strTags, strGlass, strAlcholic, strInstructions } = drnk
    return (
        <div>
            <h1 className='text-3xl font-bold'>Cocktail Details here </h1>
            <div>
                <img src={strDrinkThumb} alt="" />
                <h3 className='text-2xl font-bold'>{strDrink}</h3>
                <p className='font-bold'>Category: {strCategory}</p>
                <p className='font-bold'>Tags: {strTags}</p>
                <p className='font-bold'>Glass: {strGlass}</p>
                <p className='font-bold'>Alcholic: {strAlcholic}</p>
                <p className='font-bold'>Instructions: {strInstructions}</p>
            </div>
        </div>
    );
};

export default Cocktaildetails;