import React, { useEffect, useState } from 'react'
import { Formulario } from './components/Formulario'
import { Header } from './components/Header'
import { ListadoNoticias } from './components/ListadoNoticias';

export const App = () => {

    const [categoria, setCategoria] = useState('');

    const [noticias, setNoticias] = useState([]);

    useEffect(() => {
        const consultarAPI = async () => {
            const apiKey = 'd547f524171f4eb5ad64b356e5faba13';
            const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${ categoria }&apiKey=${ apiKey }`;

            const resp = await fetch( url );
            const data = await resp.json();
            setNoticias( data.articles );
        }
        consultarAPI();
    }, [ categoria ])
    return (
        <>
            <Header
                titulo="Buscador de Noticias"
            />

            <div className="container white">
                <Formulario
                    setCategoria={ setCategoria }
                />

                <ListadoNoticias
                    noticias={ noticias }
                />
            </div>
        </>
    )
}
