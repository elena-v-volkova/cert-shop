
import React from 'react';
import { useLocation } from 'react-router-dom';
import Heading from "../../components/UI/Heading";
import { ContactsForm } from '../../components/ContactsForm/ContactsForm';

export function FormPage() {
    const location = useLocation();
    const { id } = location.state;

    return (
        <div className='container'>
            <Heading level={1} headingText={"Заполните форму"} />
            <p>ID сертификата: {id}</p>
            <ContactsForm Id={id} />
        </div>
    )
}
