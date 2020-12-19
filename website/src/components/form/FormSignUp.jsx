import React from 'react'

export function FormSignUp() {
    return (
        <div className='form-content-right'>
            <form className='form'>
                <div className='form-imputs'>
                    <label
                        htmlFor='name'
                        className='form-label'>
                        Name
                </label>
                    <input
                        type='text'
                        name='name'
                        className='form-input'
                        placeholkder='Name'
                    />
                </div>
                <div className='form-imputs'>
                    <label
                        htmlFor='company'
                        className='form-label'>
                        Company
                </label>
                    <input
                        type='text'
                        name='company'
                        className='form-input'
                        placeholkder='Company'
                    />
                </div>
                <div className='form-imputs'>
                    <label
                        htmlFor='phone'
                        className='form-label'>
                        Phone
                </label>
                    <input
                        type='phone'
                        name='phone'
                        className='form-input'
                        placeholkder='Phone'
                    />
                </div>
                <div className='form-imputs'>
                    <label
                        htmlFor='email'
                        className='form-label'>
                        Email
                </label>
                    <input
                        type='email'
                        name='email'
                        className='form-input'
                        placeholkder='Email'
                    />
                </div>
            </form>
        </div>
    )
};

