import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import MoreMealDetails from '../../MoreMealDetails/MoreMealDetails';

const MoreMeal = ({ countIncrease }) => {
  const moreMeals = useLoaderData().meals;
  console.log(moreMeals);

  return (
    <>

      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-4 lg:gap-10 mx-40 lg:mx-10'>
        {
          (moreMeals === null) ? <h1 className="font-extrabold text-2xl text-center m-10 p-5 whitespace-nowrap">Sorry,No More Data Found</h1> :
            moreMeals?.map(meal => <MoreMealDetails key={meal.idMeal} meal={meal} countIncrease={countIncrease}></MoreMealDetails>)

        }

      </div>
      <Link to='/meal'><button className="btn btn-wide m-5 p-5 btn-info" >Go to main page </button></Link>
    </>
  );
};

export default MoreMeal;
// : <h1 className="font-extrabold text-2xl text-center m-10 p-5 whitespace-nowrap">Sorry,No More Data Found</h1>