import React from 'react'
import useForm from './useForm';
import validate from './formValidation';
import './Form.css';

export function FormSignUp({submitForm}) {
    const { handleChange, values, handleSubmit, errors } = useForm(submitForm, validate);

    return (
            <form className='form' onSubmit={handleSubmit}>
                <div className='form-inputs'>
                    <label
                        htmlFor='name'
                        className='form-label'>
                        *Name
                </label>
                    <input
                        type='text'
                        name='name'
                        className='form-input'
                        placeholder='Name'
                        value={values.name}
                        onChange={handleChange}
                    />
                    {errors.name && <p>{errors.name}</p>}
                </div>
                <div className='form-inputs'>
                    <label
                        htmlFor='company'
                        className='form-label'>
                        Company
                </label>
                    <input
                        type='text'
                        name='company'
                        className='form-input'
                        placeholder='Company'
                        value={values.company}
                        onChange={handleChange}
                    />
                </div>
                <div className='form-inputs'>
                    <label
                        htmlFor='phone'
                        className='form-label'>
                        Phone
                </label>
                    <input
                        type='phone'
                        name='phone'
                        className='form-input'
                        placeholder='Phone'
                        value={values.phone}
                        onChange={handleChange}
                    />
                </div>
                <div className='form-inputs'>
                    <label
                        htmlFor='email'
                        className='form-label'>
                       *Email
                </label>
                    <input
                        type='email'
                        name='email'
                        className='form-input'
                        placeholder='Email'
                        value={values.email}
                        onChange={handleChange}
                    />
                    {errors.email && <p>{errors.email}</p>}
                </div>
                <div className='form-inputs'>
                    <label
                        htmlFor='comments'
                        className='form-label'>
                        Comments
                </label>
                    <textarea
                        name='comments'
                        className= 'form-input'
                        placeholder='Anything you would like to add?'
                        value={values.comments}
                        onChange={handleChange}
                    />
                </div>
                <button
                    className='form-input-btn'
                    type='submit'>             
                    Lets Chat!
                    </button>
            </form>
    )
};

