
import React from 'react';
import Heading from "../../components/UI/Heading";
import { CardsList } from '../CardsList/CardsList';


export function MainPage() {

    return (
        <div className='container'>
            <Heading level={1} headingText={"Выбор сертификата"} />
            <CardsList />
        </div>

    )
}
