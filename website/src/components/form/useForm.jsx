import { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';


const useForm = (callback, validate) => {
    const [values, setValues] = useState({
        name: '',
        company: '',
        phone: '',
        email: '',
        comments:''
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
 
        emailjs.sendForm('service_odf846d', 'template_3xo5zq3', e.target, 'user_ZiVJfbg6OIdnnXesTEPkU')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        setErrors(validate(values));
        setIsSubmitting(true);
    };


    useEffect(
        () => {
            if (Object.keys(errors).length === 0 && isSubmitting) {
                callback();
            }
        },
        [errors]
    );

    return { handleChange, handleSubmit, values, errors };
};

export default useForm;