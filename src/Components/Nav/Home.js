import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Drink from '../SingleDrink/Drink';

const Home = ({ countIncrease }) => {

    const data = useLoaderData();
    const drinks = data?.drinks;


    if (!drinks || !Array.isArray(drinks)) {
        return <div>No drinks found or unable to fetch data.</div>;
    }

    return (
        <div className='my-10' >
            <h1 className='text-3xl font-bold'>Welcome to my bar, we have <span className='text-orange-500'>{drinks.length} </span> types of Drinks</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-4 lg:gap-10 lg:mx-10'>
                {
                    drinks.map(drink =>
                        <Drink key={drink.idDrink} drink={drink} countIncrease={countIncrease}></Drink>
                    )
                }
            </div>
        </div>
    );
};

export default Home;