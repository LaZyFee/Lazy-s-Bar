import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './Components/Main/Main';
import Orders from './Components/Orders/Orders';
import Home from './Components/Nav/Home';
import Contact from './Components/Nav/Contact';
import About from './Components/Nav/About';
import { useState } from 'react';
import Meals from './Components/Meals/Meals';
import Login from './Components/LogIn/Login';
import Register from './Components/Register/Register';
import PrivateRoutes from './routes/PrivateRoutes';
import MoreMeal from './Components/MoreMeal/MoreMeal';


function App() {
  const [count, setCount] = useState(0);
  const countIncrease = () => {
    setCount(count + 1);
  }


  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main count={count}></Main>,
      children: [
        {
          path: 'meal',
          loader: async () => {
            return fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
          },
          element: <Meals countIncrease={countIncrease}></Meals>
        },
        {
          path: '/meal/:name',
          loader: async ({ params }) => {
            return fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${params.name}`)
          },
          element: <MoreMeal countIncrease={countIncrease}></MoreMeal>
        },
        {
          path: "/bar",
          loader: async () => {
            return fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s')
          },
          element: <PrivateRoutes> <Home countIncrease={countIncrease}></Home></PrivateRoutes>
        },
        { path: "contact", element: <Contact></Contact> },
        { path: "about", element: <About></About> },

        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        }
      ]
    },
    {
      path: "orders",
      element: <PrivateRoutes> <Orders></Orders> </PrivateRoutes>,
    },
    {
      path: '*', element: <div>404! Page Not Found</div>
    }
  ])



  return (
    <div className="App">
      <RouterProvider
        router={router}
      ></RouterProvider>
    </div>
  );
}

export default App;
