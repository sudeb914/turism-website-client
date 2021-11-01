/* eslint-disable no-restricted-globals */
import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import './AddNewService.css';

const AddNewService = () => {
    const { user, services, isLoading, setIsLoading, status, setStatus } = useAuth();
    const { register, handleSubmit, reset } = useForm();

    // submit service data to database handle form
    const onSubmit = data => {
        setIsLoading(true);
        if (confirm("Are you sure you want to submit the service now??")) {
            alert('Submit successful!');
            axios.post('https://secret-hamlet-89112.herokuapp.com/services', data)
                .then(res => {
                    reset();
                    setIsLoading(false);
                })
            setIsLoading(false);
            // console.log(data);
        }
    }

    return (
        <div className="service-form-container bg-dark py-5 mt-5">
            <h2 className="text-white">Add a new service</h2>
            <hr className="mx-auto"
                style={{ width: '25%', alignItems: 'center', color: 'white' }}
            />

            <div>
                

                <form onSubmit={handleSubmit(onSubmit)}>

                    <input {...register("name", { required: true, })} className="w-50" placeholder="Service Name" /> <br /><br />

                    <input {...register("img", { required: true, })} className="w-50" placeholder="Image url" /><br /><br />

                    <input {...register("fee", { required: true, })} className="w-50" placeholder="Cost in $" /> <br /><br />

                    <textarea {...register("description", { required: true })} className="w-50" placeholder="Service Description" /> <br /> <br />

                    <button type="submit" className="btn btn-primary text-white w-50">Submit</button>
                </form>
            </div>
        </div>
    )
};

export default AddNewService;