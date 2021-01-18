import React from 'react'
import { Noticia } from './Noticia'

export const ListadoNoticias = ({ noticias }) => {

    if ( !noticias ) return null;
    return (
        <div className="row">
            {
                noticias.map( noticia => (
                    <Noticia
                        key={ noticia.url }
                        noticia={ noticia }
                    />
                ))
            }
        </div>
    )
}
