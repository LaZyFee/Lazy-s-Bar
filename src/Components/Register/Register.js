import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';


const Register = () => {
    // eslint-disable-next-line no-unused-vars
    const [error, setError] = useState(null)
    const { createUser } = useContext(AuthContext)


    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        // eslint-disable-next-line no-unused-vars
        const name = form.name.value;
        const email = form.email.value
        const password = form.password.value;
        const confirm = form.confirm.value;
        if (password.length < 6) {
            setError('password should be more than 6 character')
            return;
        }
        if (password !== confirm) {
            setError("password didn't match");
            return;
        }

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
            })
            .catch(error => alert(error))
    }



    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold ">Register Here!</h1>
                    </div>
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Your Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered text-black" required />
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" name='confirm' placeholder="password" className="input input-bordered text-black" required />

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                        <p> Already have an account? <span className='text-orange-500 label-text-alt link link-hover'><Link to='/login'> please Login </Link></span> </p>
                    </form>
                </div>
            </div>
        </div>


    );
};

export default Register;