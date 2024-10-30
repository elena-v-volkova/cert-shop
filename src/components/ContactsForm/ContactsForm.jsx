
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ContactsForm.css';
import { validateAndFormatPhone } from '../../utils/phoneValidation';
import sendDataToServer from '../../api/api';
import { useMutation, useQuery } from '@tanstack/react-query';

export function ContactsForm({ Id }) {

    const goToPage = useNavigate();

    const [name, setName] = useState(localStorage.getItem('name') || '');
    const [phone, setPhone] = useState(localStorage.getItem('phone') || '');
    const [email, setEmail] = useState(localStorage.getItem('email') || '');
    const [errors, setErrors] = useState({});

    const query = useQuery({ queryKey: ['form'], queryFn: sendDataToServer });


    useEffect(() => {
        localStorage.setItem('name', name);
        localStorage.setItem('phone', phone);
        localStorage.setItem('email', email);
    }, [name, phone, email]);

    const clearLocalStorageFormData = () => {
        localStorage.removeItem('name');
        localStorage.removeItem('phone');
        localStorage.removeItem('email');
    };

    const mutation = useMutation({
        mutationFn: sendDataToServer,
        onSuccess: () => {
            clearLocalStorageFormData();
            goToPage('/payment');
        },
        onError: (error) => {
            console.error('Ошибка при отправке данных:', error);
            setErrors({ form: 'Ошибка при отправке данных.' });
        }
    })

    const onPhoneKeyDown = (e) => {
        if (e.keyCode === 8 && (e.target.value).replace(/\D/g, "").length === 1) {
            setPhone("");
        }
    };

    const handlePhoneChange = (e) => {
        const inputValue = e.target.value;
        const formattedPhone = validateAndFormatPhone(inputValue);
        setPhone(formattedPhone);
    };


    const validateFields = () => {

        const errors = {};

        if (!name) {
            errors.name = 'Укажите ваше имя';
        }
        if (phone.replace(/\D/g, "").length < 11) {
            errors.phone = 'Указан неверный номер';
        }
        if (!email.match(/^[\w-]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
            errors.email = 'Указана неверная почта';
        }

        setErrors(errors);

        return !Object.keys(errors).length;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateFields()) {
            mutation.mutate({ name, phone, email, Id });
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Имя
                <input type="text" autoComplete="given-name" value={name} onChange={(e) => setName(e.target.value)} />
                {errors.name && <span>{errors.name}</span>}
            </label>
            <label>
                Телефон
                <input placeholder='7 999 999 99 99' type="text" autoComplete="tel" value={phone} onChange={handlePhoneChange} onKeyDown={onPhoneKeyDown} />
                {errors.phone && <span>{errors.phone}</span>}
            </label>
            <label>
                Почта
                <input type="text" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                {errors.email && <span>{errors.email}</span>}
            </label>
            {errors.form && <span>{errors.form}</span>}
            <div className='form-btn-group'>
                <button className='btn btn-back' type="button" onClick={() => goToPage("/")} disabled={mutation.isLoading}>Назад</button>
                <button className='btn' type="submit">Оплатить</button>
            </div>
        </form>
    );
};






