import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { fetchData } from '../../api/api';
import './CardsList.css';


export function CardsList() {

    const queryClient = useQueryClient();
    const query = useQuery({ queryKey: ['certificates'], queryFn: fetchData })
    const [errors, setErrors] = useState({});


    const { data: certificates, isLoading, isError, error } = useQuery({
        queryKey: ['certificates'],
        queryFn: fetchData,
    });

    if (isError) {
        setErrors((prevErrors) => ({ ...prevErrors, form: error.message }));
    }

    if (isLoading) return <p>Загрузка...</p>;


    return (
        <ul>
            {errors.form ? (
                <span className="error">{errors.form}</span>
            ) : (
                certificates?.map((cert) => (
                    <li key={cert.ID} className="card">
                        <h2>Сертификат</h2>
                        <p>ID сертификата: {cert.ID}</p>
                        <Link to={"form"} className="btn" state={{ id: cert.ID }}>Выбрать</Link>
                    </li>
                ))
            )}
        </ul>
    );
}